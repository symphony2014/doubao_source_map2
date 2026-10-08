// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mi' to 'createImageNode'
// - Renamed export 'qn' to 'checkIsQqEnabled'
// - Renamed export 'vd' to 'isWechatMediaUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 164286
         */
module.exports = function (module, exports, require) {
  require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  require("offline-status-selectors-utils") /*id: 564613*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  function c(e, n = docBlockTypeConstants.blockTypeConstants.IMAGE) {
    return documentNodeFactory_2.createDocumentNode(e, n);
  }
  function u(e) {
    let n = new URL(e);
    return n.host === docxEditorConstants.mediaDomain && n.search.includes(docxEditorConstants.wechatPrefix);
  }
  function s() {
    return docxFeatureFlags.isQqEnabled();
  }
  require("docx-offline-image-flags") /*id: 332375*/;
  require.d(exports, {
    createImageNode: function () {
      return c;
    },
    checkIsQqEnabled: function () {
      return s;
    },
    isWechatMediaUrl: function () {
      return u;
    }
  });
}