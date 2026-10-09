// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'If' to 'ContentDelta'
// - Renamed export 'KA' to 'isInsertString'
// - Renamed export 'zx' to 'getOpLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 411463
         */
module.exports = function (module, exports, require) {
  require("diff-match-patch") /*id: 183089*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  require.d(exports, {
    ContentDelta: function () {
      return contentStructureDelta.ContentDelta;
    },
    isInsertString: function () {
      return deltaSetCore.isInsertString;
    },
    getOpLength: function () {
      return deltaSetCore.getOpLength;
    }
  });
}