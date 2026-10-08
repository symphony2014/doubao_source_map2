// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qh' to 'insertLinkBookmark'
// - Renamed export 'Gn' to 'fetchLinkMetadata'
// - Renamed export 'u9' to 'isSpecialContainer'
// - Renamed export 'fN' to 'updateBookmarkInfo'
// - Renamed export 'yR' to 'setEditorSelection'
// - Renamed export 'rp' to 'handleLinkPaste'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 474492
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docUrlExtractUtils = require("doc-url-extract-utils") /*id: 846285*/;
  let f = {
    unrecognizedToast: t("CreationDoc_Docs_WebBookmark_Unrecognized_Toast"),
    unsupportToast: t("CreationDoc_Docs_WebBookmark_UnsupportWebInfo_Toast"),
    cannotPreviewToast: t("CreationDoc_Docs_WebBookmark_CannotPreview_Toast"),
    wrongLinkToast: t("CreationDoc_Docs_WebBookmark_WrongLink_Toast"),
    offlineToast: t("CreationDoc_Docs_WebBookmark_LostConnect_Toast"),
    urlCheckFailed: t("airtable-insert-failed")
  };
  var documentNodeFactoryWrapper_1 = require("document-node-factory-wrapper_1") /*id: 677433*/;
  var linkPastePanelTypes = require("link-paste-panel-types") /*id: 546196*/;
  var bookmarkLinkMetadataProcessor = require("bookmark-link-metadata-processor") /*id: 249075*/;
  let v = async (e, r) => {
    let o = await docUrlExtractUtils.extractUrlInfo(e, r);
    if (!o || Object.values(o).every(e => !e)) {
      toastNotificationManager_1.toastManager.info({
        content: f.unsupportToast
      });
    }
    return o;
  };
  function E(e, r) {
    if (e && editorTextBlockUtilities.isEditorInstance(e) && editorTextBlockUtilities.isTextEditable(e)) {
      let o = r || e.model.zoneState.totalWidth() - 1;
      e.selectionAPI.setSelection([{
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        id: e.id,
        selection: {
          start: o,
          end: o
        }
      }]);
    }
  }
  async function C(e) {
    let {
      url: r,
      linkRange: o,
      attributes: n = {},
      block: i,
      applyOptions: a
    } = e;
    let u = editorRangeUtilities.convertRangeWithZone(i, o);
    i.selectionAPI.setSelection([{
      type: docxBlockSelectionHandler_1.blockTypes.TEXT,
      id: i.id,
      selection: {
        start: o[1],
        end: o[1]
      }
    }]);
    i.model.setAttributes(u, {
      [clientsideLinkConstants_1.loadingLinkTitle]: "true"
    });
    let d = await v(r, linkPastePanelTypes.linkPasteTypes.Title);
    let m = bookmarkLinkMetadataProcessor.getBookmarkTitle(r, d);
    i.model.replaceEditorText(u, m, {
      ...n,
      link: encodeURIComponent(r),
      [clientsideLinkConstants_1.loadingLinkTitle]: ""
    }, a);
    E(i, o[0] + m.length);
  }
  async function b(e) {
    let {
      blocks: o,
      panelType: n,
      blockManager: l,
      mark: c,
      url: s,
      revision: d
    } = e;
    let m = documentNodeFactoryWrapper_1.createDocumentNodeWithDefaults({
      bookmark: {
        url: s
      }
    });
    let _ = {};
    editorRevisionHandlers.handleAddRevision(l, m, _, d);
    let [f] = await blockInsertionHandler.insertBlockHandler({
      blocks: o,
      panelType: n,
      mark: c,
      focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
      blockData: m,
      transactionOptions: _
    });
    if (!f) {
      return;
    }
    let p = l.getRecordByBlockId(f)?.id;
    if (p) {
      await L(l, p, s);
    }
  }
  function w(e, r) {
    try {
      let o = r.getBlockModelByBlockIdNotCheck(e);
      while (o && o.parent) {
        if ([docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.QUOTE].indexOf(o.type) > -1) {
          return true;
        }
        o = o.parent;
      }
    } catch (e) {}
    return false;
  }
  async function L(e, r, o, n) {
    let i = await v(o, linkPastePanelTypes.linkPasteTypes.Cover);
    let a = await bookmarkLinkMetadataProcessor.processBookmarkMetadata(o, i, e, n);
    e.applyTransaction("updateBookmarkDetailInfo", e => {
      e.replace(r, ["bookmark"], a);
    }, {
      undoable: false
    });
  }
  require.d(exports, {
    insertLinkBookmark: function () {
      return C;
    },
    fetchLinkMetadata: function () {
      return v;
    },
    isSpecialContainer: function () {
      return w;
    },
    updateBookmarkInfo: function () {
      return L;
    },
    setEditorSelection: function () {
      return E;
    },
    handleLinkPaste: function () {
      return b;
    }
  });
}