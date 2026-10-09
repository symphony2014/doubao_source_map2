param(
  [string]$Repository = (Join-Path $PSScriptRoot '..\doubao_source_map2-shallow'),
  [string]$Destination = (Join-Path $PSScriptRoot '..\spec\readable-source'),
  [string]$Commit = 'HEAD'
)

$ErrorActionPreference = 'Stop'
$repoPath = [IO.Path]::GetFullPath($Repository)
$outputPath = [IO.Path]::GetFullPath($Destination)
New-Item -ItemType Directory -Path $outputPath -Force | Out-Null
$filesPath = Join-Path $outputPath 'files'
New-Item -ItemType Directory -Path $filesPath -Force | Out-Null

function Invoke-GitText([string[]]$Arguments) {
  $result = & git -C $repoPath @Arguments
  if ($LASTEXITCODE -ne 0) { throw "git $($Arguments -join ' ') failed" }
  return $result
}

function Write-GitBlob([string]$Sha, [string]$Target) {
  $parent = Split-Path -Parent $Target
  New-Item -ItemType Directory -Path $parent -Force | Out-Null
  $start = [Diagnostics.ProcessStartInfo]::new()
  $start.FileName = 'git'
  $start.WorkingDirectory = $repoPath
  $start.UseShellExecute = $false
  $start.RedirectStandardOutput = $true
  $start.RedirectStandardError = $true
  [void]$start.ArgumentList.Add('-C')
  [void]$start.ArgumentList.Add($repoPath)
  [void]$start.ArgumentList.Add('cat-file')
  [void]$start.ArgumentList.Add('blob')
  [void]$start.ArgumentList.Add($Sha)
  $process = [Diagnostics.Process]::new()
  $process.StartInfo = $start
  [void]$process.Start()
  $stream = [IO.File]::Open($Target, [IO.FileMode]::Create, [IO.FileAccess]::Write, [IO.FileShare]::None)
  try { $process.StandardOutput.BaseStream.CopyTo($stream) } finally { $stream.Dispose() }
  $stderr = $process.StandardError.ReadToEnd()
  $process.WaitForExit()
  if ($process.ExitCode -ne 0) { throw "Unable to read blob $Sha : $stderr" }
}

# Git tree rows contain blob identity, size, and the exact repository path. Grouping by SHA
# gives one canonical source file per unique content body and records all duplicate aliases.
$rows = Invoke-GitText @('ls-tree', '-rl', '-r', $Commit) | ForEach-Object {
  if ($_ -match '^(?<mode>\d+) blob (?<sha>[0-9a-f]+)\s+(?<size>\d+)\t(?<path>.+)$') {
    [pscustomobject]@{ Sha=$matches.sha; Size=[Int64]$matches.size; Path=$matches.path }
  }
}

function Get-CanonicalRank([string]$Path) {
  # Prefer an extracted module over a webpack bundle/map when the same blob has aliases.
  if ($Path.EndsWith('.bundle.js.map')) { return 30 }
  if ($Path.EndsWith('.map')) { return 20 }
  if ($Path.EndsWith('.bundle.js')) { return 10 }
  return 0
}

$groups = $rows | Group-Object Sha | ForEach-Object {
  $ordered = $_.Group | Sort-Object @{Expression={ Get-CanonicalRank $_.Path }}, @{Expression={$_.Path.Length}}, Path
  [pscustomobject]@{ Sha=$_.Name; Size=$ordered[0].Size; Canonical=$ordered[0].Path; Aliases=$ordered.Path }
} | Sort-Object Canonical

$manifest = foreach ($group in $groups) {
  foreach ($path in $group.Aliases) {
    [pscustomobject]@{
      Path=$path; Sha=$group.Sha; Size=$group.Size; CanonicalPath=$group.Canonical; IsDuplicate=($path -ne $group.Canonical)
    }
  }
}
$manifest | Export-Csv -NoTypeInformation -Encoding utf8 (Join-Path $outputPath 'manifest.csv')

$total = $groups.Count
$index = 0
foreach ($group in $groups) {
  $index++
  $safeRelative = $group.Canonical -replace '/', [IO.Path]::DirectorySeparatorChar
  $target = Join-Path $filesPath $safeRelative
  if (-not (Test-Path -LiteralPath $target) -or (Get-Item -LiteralPath $target).Length -ne $group.Size) {
    Write-GitBlob $group.Sha $target
  }
  if ($index % 100 -eq 0 -or $index -eq $total) {
    "$(Get-Date -Format o) materialized $index/$total unique blobs" | Add-Content -Encoding utf8 (Join-Path $outputPath 'progress.log')
  }
}

$duplicateCount = $rows.Count - $groups.Count
$readme = @"
# Repository-wide readable source mirror

Generated from commit `$Commit` by `tools/recover-readable-sources.ps1`.

- Tracked paths: $($rows.Count)
- Unique content blobs materialized: $($groups.Count)
- Duplicate paths skipped: $duplicateCount
- Canonical copies: `files/`
- Full path-to-canonical mapping: `manifest.csv`

Each canonical source file is byte-preserved from the extracted repository. The repository's JavaScript had already been unpacked/deobfuscated by Webcrack. This mirror intentionally does not copy aliases with identical Git blob content.
"@
Set-Content -LiteralPath (Join-Path $outputPath 'README.md') -Value $readme -Encoding utf8
