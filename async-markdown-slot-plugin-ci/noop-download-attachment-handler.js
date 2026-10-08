// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'stubEventHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 862937
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let r = {
    onDownloadEvent: emptyExportFunction.emptyFunction,
    onClickAttachment: emptyExportFunction.emptyFunction
  };
  require.d(exports, {
    stubEventHandlers: function () {
      return r;
    }
  });
}