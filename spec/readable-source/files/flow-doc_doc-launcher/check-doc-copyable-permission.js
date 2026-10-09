// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H8' to 'isDocCopyable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 645068
         */
module.exports = function (module, exports, require) {
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  require("doc-permission-status-selectors") /*id: 16982*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  require("docx-event-collector") /*id: 477626*/;
  require("synced-reference-block-utils") /*id: 262712*/;
  docxApiConstantsExports.statusCodes.FAILED;
  docxApiConstantsExports.statusCodes.CONNECT_ERROR;
  docxApiConstantsExports.statusCodes.JS_INTERNAL_ERROR;
  docxApiConstantsExports.statusCodes.REQUEST_BIZ_ERROR;
  let a = e => {
    let i = reduxStoreInitializer.reduxStore.getState();
    return flowPermissionSelectors.createCopyableSel(e, false)(i).copyable;
  };
  require.d(exports, {
    isDocCopyable: function () {
      return a;
    }
  });
}