// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D8' to 'ZoneFoldEvents'
// - Renamed export 'cv' to 'ActionTypes'
// - Renamed export 'z9' to 'SupportedLanguages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 392244
         */
module.exports = function (module, exports, require) {
  (i = a ||= {}).Fold = "fold";
  i.Clear = "clear";
  i.ClearAll = "clear_all";
  (r = l ||= {}).Json = "json";
  r.Python = "python";
  r.Java = "java";
  r.C = "c";
  r.Cpp = "cpp";
  r.Cpp2 = "c++";
  r.Javascript = "javascript";
  r.Typescript = "typescript";
  r.Go = "go";
  r.XML = "xml";
  r.HTML = "html";
  r.SQL = "sql";
  r.BASH = "bash";
  r.SHELL = "shell";
  r.YAML = "yaml";
  var o;
  var i;
  var r;
  var a;
  var l;
  var s;
  var d = Object.values(l);
  (o = s ||= {}).FoldInit = "zone_fold_init";
  o.FoldUpdate = "zone_fold_update";
  o.CollapsedChange = "collapsed_change";
  require.d(exports, {
    ZoneFoldEvents: function () {
      return s;
    },
    ActionTypes: function () {
      return a;
    },
    SupportedLanguages: function () {
      return d;
    }
  });
}