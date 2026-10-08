// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I8' to 'handleBlockSelection'
// - Renamed export 'Q1' to 'isBlockContainer'
// - Renamed export 'ao' to 'clearSelection'
// - Renamed export 'iH' to 'getSelectionState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 809363
         */
module.exports = function (module, exports, require) {
  var docxHistoryFlags = require("docx-history-flags") /*id: 840802*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var blockHierarchyGeometryUtil = require("block-hierarchy-geometry-util") /*id: 797827*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  function v(e) {
    let {
      preventDefault: i,
      blockManager: {
        lazyRecordStatus: n
      }
    } = e;
    i();
    if (!n || n.isAllDone || n.isCriticalDone) {
      _(e);
    }
  }
  function m(e) {
    let {
      preventDefault: i,
      collector: n,
      blockManager: o,
      selectionAPI: l
    } = e;
    if (!docxHistoryFlags.getHistoryShow(reduxStoreInitializer.reduxStore.getState()) && !b(o)) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && o.lazyRecordStatus && !o.lazyRecordStatus.isAllDone) {
        let e = o.editorAPI.getService(lazyConsumerToken.lazyConsumerToken);
        if (e != null) {
          e.startApplyAllMode();
        }
      }
      i();
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.HIDE_BLOCK_MENU);
      l.selectAll({
        source: docxBlockSelectionHandler_1.commandTypes.KeyboardSelectAll
      });
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.SHOW_BLOCK_MENU);
      if (n) {
        n.setExtraData({
          action_value: {
            value1: docEditorCommandConstants.pageSelectionConstants.SELECT_ALL_PAGE
          }
        }, true);
      }
    }
  }
  function b(e) {
    return e.structService.getBlockStructsByType(docBlockTypeConstants.blockTypeConstants.SHEET).some(e => {
      var i;
      var n;
      let r = docxEditorCore.getBlockModel(e);
      return r && ((n = r.bridge) === null || n === undefined ? undefined : (i = n.isFocusOnSheetBlock) === null || i === undefined ? undefined : i.call(n));
    });
  }
  function _(e) {
    let {
      currentTargetModelFilterEmpty: r,
      blockManager: h,
      selectionAPI: g,
      collector: p
    } = e;
    let f = function e(i, n, r) {
      let u = blockHierarchyGeometryUtil.getCommonParents([{
        id: i,
        path: n.getBlockPath(i)
      }]);
      let h = n.getBlockModelByBlockIdNotCheck(u);
      if (!h) {
        return n.rootBlockId;
      }
      let g = h.type === docBlockTypeConstants.blockTypeConstants.PROGRESS && docxBlockSelectionHandler_1.commandTypes.OKRKeyboardSelectAll !== r.getContext()?.source;
      if ([docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.AI].includes(h.type) || g) {
        return u;
      }
      if ([docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.VIEW].includes(h.type)) {
        return e(u, n, r);
      }
      if (h.parent?.id) {
        let i = n.getBlockModelByBlockIdNotCheck(h.parent.id);
        if ((i == null ? undefined : i.parent?.id) && !y.includes(i.type)) {
          return e(u, n, r);
        }
      }
      return u;
    }(r[0].id, h, g);
    let v = f === h.rootBlockId || syncUrlBlockUtils.isSyncingActive() && f === syncUrlBlockUtils.getBlockByToken(h)?.id;
    let m = v ? docEditorCommandConstants.pageSelectionConstants.SELECT_ALL_PAGE : docEditorCommandConstants.pageSelectionConstants.UN_SELECT_ALL_PAGE;
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.HIDE_BLOCK_MENU);
    let {
      editorAPI: b
    } = h;
    let _ = g.getContext()?.source === docxBlockSelectionHandler_1.commandTypes.KeyboardSelectAll;
    if (syncedReferenceBlockUtils.isSyncedReferenceBlock(b) && _) {
      syncedReferenceBlockUtils.selectSyncedReferenceBlock(b);
    } else if (v) {
      g.selectAll({
        source: docxBlockSelectionHandler_1.commandTypes.KeyboardSelectAll
      });
    } else {
      let e = docxBlockSelectionHandler_1.commandTypes.ExternalInvoke;
      let i = h.getBlockModelByBlockIdNotCheck(f);
      let n = i == null ? undefined : i.parent;
      if ((i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.PROGRESS) {
        e = docxBlockSelectionHandler_1.commandTypes.OKRKeyboardSelectAll;
      } else if (n && n.type === docBlockTypeConstants.blockTypeConstants.PAGE && n.children.length === 1) {
        e = docxBlockSelectionHandler_1.commandTypes.KeyboardSelectAll;
      }
      g.setSelection([{
        id: f,
        type: docxBlockSelectionHandler_1.blockTypes.BLOCK
      }], {
        source: e
      });
    }
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.SHOW_BLOCK_MENU);
    if (p) {
      p.setExtraData({
        action_value: {
          value1: m
        }
      }, true);
    }
  }
  let y = [docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.AI];
  require.d(exports, {
    handleBlockSelection: function () {
      return b;
    },
    isBlockContainer: function () {
      return _;
    },
    clearSelection: function () {
      return m;
    },
    getSelectionState: function () {
      return v;
    }
  });
}