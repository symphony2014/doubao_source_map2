# Plugin source recovery guide

## What is available

| Location | Contents | Use |
|---|---|---|
| `spec/readable-code/` | seven curated TypeScript/TSX reconstructions of core chat behavior | fast human-oriented orientation |
| `spec/readable-source/files/` | 14,223 canonical recovered blobs, including plugin packages and source-map payloads | exact implementation inspection |
| `spec/readable-source/manifest.csv` | 33,322 original paths mapped to canonical files and blob SHAs | locate a specific original module |

Recovery is byte-preserving; it does not represent minified code as original authored TypeScript. Readable modules include annotations for renamed exports and resolved module references.

## Plugin-focused sources

| Concern | Recovered module/package | Inspect for |
|---|---|---|
| Composition | `chat/chat-ioc-manager.js` | contribution merge, containers, priority and initialization |
| Gateway | `chat-plugins-runtime/chat-plugin-getter-utils.js` | runtime loader/matcher entry points |
| Protocols | `async-skill-message-protocol-transform/` | transformers and matchers per feature |
| Lifecycles | `async-skill-message-lifecycle/` | lifecycle plug-ins and lifecycle matchers |
| Inputs | `async-skill-chat-input/` | skill definitions, lazy editors, pre-send pipeline |
| URL flows | `ai-space-*-url-parse-pre-plugin/`, `ai-space-*-url-parse-plugin/` | validation/action pairs |
| Canvas | `ai-coding-open-canvas-repo-plugin/`, `ai-coding-open-canvas-repo-pre-plugin/` | context preparation and canvas opening |
| Rendering | `async-skill-content-block*/`, `async-markdown-*/`, `requirement-clarify-*/` | matching, merging, rendering |

## Locate the canonical recovered source

The original, de-obfuscated module is retained at the repository package path. To find the byte-preserved canonical copy, search `manifest.csv` by original path:

```powershell
Import-Csv spec/readable-source/manifest.csv |
  Where-Object original_path -eq 'async-skill-message-lifecycle/message-lifecycle-plugin.js' |
  Select-Object original_path, canonical_path, blob_sha
```

`canonical_path` is relative to `spec/readable-source/files/`. This lets reviewers trace any entry in the plugin catalog to an exact recovered blob.

## Recovery boundaries

- The catalog describes behavior observable in recovered client code; backend behavior, feature flags, and remotely loaded configuration are outside this boundary.
- A package can be bundled but inactive; matcher and configuration evaluation decide activation.
- Vendor dependencies whose names include `plugin` or `hook` are excluded unless they participate in the Chat IoC/matcher platform.
