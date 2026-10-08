// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getCurrentFileType'
// - Renamed export 'V' to 'getDefaultFileType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 725466
         */
module.exports = function (module, exports, require) {
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  function s() {
    if (syncUrlBlockUtils.isSyncingActive()) {
      return fileTypeConstants.BasicFileType.SYNCED;
    } else {
      return fileNodeSelectorUtils.getDefaultDocType(reduxStoreInitializer.reduxStore.getState());
    }
  }
  function c() {
    if (syncUrlBlockUtils.isSyncingActive()) {
      return fileTypeConstants.BasicFileType.SYNCED;
    } else {
      return fileTypeConstants.BasicFileType.DOCX;
    }
  }
  require.d(exports, {
    getCurrentFileType: function () {
      return s;
    },
    getDefaultFileType: function () {
      return c;
    }
  });
}