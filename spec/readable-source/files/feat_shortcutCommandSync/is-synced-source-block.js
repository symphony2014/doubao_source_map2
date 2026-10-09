// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'isSyncedSourceBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandSync.d2c4e24e.js
         * chunkId: 81326
         * moduleId: 675478
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function n(e, t) {
    var n;
    return (n = t.getBlockModelByBlockIdNotCheck(e)?.type) && n === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
  }
  require.d(exports, {
    isSyncedSourceBlock: function () {
      return n;
    }
  });
}