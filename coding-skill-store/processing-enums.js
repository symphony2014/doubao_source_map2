// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$q' to 'FileContext'
// - Renamed export 'Hb' to 'TaskStatus'
// - Renamed export 'Hs' to 'CodeType'
// - Renamed export 'VP' to 'AccessStatus'
// - Renamed export 'X1' to 'TaskMode'
// - Renamed export '_g' to 'ResourceType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30108.9930390a.js
         * chunkId: 30108
         * moduleId: 230994
         */
module.exports = function (module, exports, require) {
  var a;
  var o;
  var n;
  var i;
  var c;
  var d;
  (a = {})[a.StatusDefault = 0] = "StatusDefault";
  a[a.StatusCompiling = 1] = "StatusCompiling";
  a[a.StatusFail = 2] = "StatusFail";
  a[a.StatusSuccess = 3] = "StatusSuccess";
  let s = a;
  (o = {})[o.Init = 0] = "Init";
  o[o.Access = 1] = "Access";
  o[o.Reject = 2] = "Reject";
  let l = o;
  (n = {})[n.MultiFileContext = 1] = "MultiFileContext";
  n[n.DirectoryContext = 2] = "DirectoryContext";
  n[n.Artifacts = 3] = "Artifacts";
  n[n.SingleFileContext = 4] = "SingleFileContext";
  let u = n;
  (i = {})[i.CodeTypeArtifacts = 1] = "CodeTypeArtifacts";
  i[i.CodeTypeRaw = 2] = "CodeTypeRaw";
  let f = i;
  (c = {})[c.Default = 0] = "Default";
  c[c.CodeBlock = 1] = "CodeBlock";
  c[c.DevelopMode = 2] = "DevelopMode";
  c[c.SuperTask = 3] = "SuperTask";
  let p = c;
  (d = {})[d.Repository = 1] = "Repository";
  d[d.File = 2] = "File";
  d[d.Directory = 3] = "Directory";
  let m = d;
  require.d(exports, {
    FileContext: function () {
      return u;
    },
    TaskStatus: function () {
      return s;
    },
    CodeType: function () {
      return f;
    },
    AccessStatus: function () {
      return l;
    },
    TaskMode: function () {
      return p;
    },
    ResourceType: function () {
      return m;
    }
  });
}