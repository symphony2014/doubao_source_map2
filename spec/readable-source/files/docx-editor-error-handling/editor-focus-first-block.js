// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'focusFirstBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 970314
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  async function d(e) {
    let i;
    let r = e.getBlockModelByBlockIdNotCheck(e.rootBlockId);
    if (!r || r.type !== docBlockTypeConstants.blockTypeConstants.PAGE) {
      return;
    }
    if (r.children.length > 0) {
      i = r.children[0].recordId;
    } else {
      await e.applyTransaction("appendEmptyLineIfNoAnyMainContent", e => {
        i = documentBlockOperations.insertNewChildren(e, r.recordId, 0, [documentNodeUtils_2.createDocumentNode()])[0];
      });
    }
    let [d] = e.getBlockModelsByRecordId(i);
    if (!d || d.type !== docBlockTypeConstants.blockTypeConstants.TEXT) {
      return;
    }
    await e.layoutManager.renderNodeById(d.id);
    let u = e.getBlockViewByBlockIdNotCheck(d.id);
    if (u) {
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        await e.layoutManager.scrollToSelection(u.id);
      }
      e.editorAPI.getService(selectionServiceProviderName.selectionServiceKey).setSelection([{
        id: u.id,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: 0,
          end: 0
        }
      }]);
      return u;
    }
  }
  require.d(exports, {
    focusFirstBlock: function () {
      return d;
    }
  });
}