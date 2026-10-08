// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'isBlockLinkConvertible'
// - Renamed export 'h' to 'messageLinkConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 178118
         */
module.exports = function (module, exports, require) {
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxPreviewConstants = require("docx-preview-constants") /*id: 296825*/;
  let a = {
    [docxPreviewConstants.messageLinkTypes.message]: {
      convertToLinkByCopy: true,
      defaultViewType: viewTypeConstants.viewTypes.Preview
    },
    [docxPreviewConstants.messageLinkTypes.meego]: {
      convertToLinkByCopy: true,
      defaultViewType: viewTypeConstants.viewTypes.Preview
    },
    default: {
      convertToLinkByCopy: true,
      defaultViewType: viewTypeConstants.viewTypes.Preview
    }
  };
  function s(e) {
    let n = [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.CALLOUT];
    if (syncUrlBlockUtils.isSyncingActive()) {
      n.push(docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
    }
    return editorTextBlockUtilities.isEditorInstance(e) && !n.includes(e.type);
  }
  require.d(exports, {
    isBlockLinkConvertible: function () {
      return s;
    },
    messageLinkConfig: function () {
      return a;
    }
  });
}