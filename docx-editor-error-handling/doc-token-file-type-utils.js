// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'getFileType'
// - Renamed export 'V' to 'getDocToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 133124
         */
module.exports = function (module, exports, require) {
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  function h(e) {
    let {
      isEmbedDocx: i
    } = docxConfigManager.docxConfigManager;
    let r = e.rootType === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
    if (i) {
      return docTokenHelperUtils.getRawDocToken();
    } else if (r) {
      if (syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
        return e.pageToken;
      } else {
        return docTokenHelperUtils.getRawDocToken();
      }
    } else if (syncUrlBlockUtils.isSyncingActive()) {
      if (syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
        return syncUrlBlockUtils.getUrlToken();
      } else {
        return docTokenHelperUtils.getRawDocToken();
      }
    } else {
      return e.pageToken;
    }
  }
  function f(e) {
    let i = !!e.isPreview;
    let r = e.rootType === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
    let s = fileNodeSelectorUtils.getDefaultDocType(reduxStoreInitializer.reduxStore.getState());
    if (i) {
      return fileTypeConstants.BasicFileType.DOCX;
    } else if (r || syncUrlBlockUtils.isSyncingActive()) {
      if (syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
        return fileTypeConstants.BasicFileType.SYNCED;
      } else {
        return fileTypeConstants.BasicFileType.DOCX;
      }
    } else {
      return s;
    }
  }
  require.d(exports, {
    getFileType: function () {
      return f;
    },
    getDocToken: function () {
      return h;
    }
  });
}