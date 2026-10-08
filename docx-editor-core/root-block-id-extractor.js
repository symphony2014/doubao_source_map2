// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Zk' to 'getRootBlockId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 274051
         */
module.exports = function (module, exports, require) {
  function r(e) {
    let {
      rootBlockId: n
    } = e;
    return e.getRecordByBlockId(n).id;
  }
  require("editor-text-block-utilities") /*id: 469443*/;
  require("docx-block-selection-handler_1") /*id: 801350*/;
  require.d(exports, {
    getRootBlockId: function () {
      return r;
    }
  });
}