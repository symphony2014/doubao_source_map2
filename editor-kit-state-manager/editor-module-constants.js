// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'virtualListConsts'
// - Renamed export 'h' to 'editorModuleConsts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 21060
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  (o = r = r || {}).Range = "Range";
  o.ZoneState = "ZoneState";
  o.ContentState = "ContentState";
  o.UndoModule = "UndoModule";
  o.InputModel = "InputModel";
  (i = i || {}).VirtualListModule = "VirtualListModule";
  require.d(exports, {
    virtualListConsts: function () {
      return i;
    },
    editorModuleConsts: function () {
      return r;
    }
  });
}