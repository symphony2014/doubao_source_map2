// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FM' to 'updateSelection'
// - Renamed export 'Je' to 'getBlockNavStatus'
// - Renamed export 'XH' to 'indentBlockWithTab'
// - Renamed export 'j2' to 'toggleHelpPanel'
// - Renamed export 'or' to 'getRelativeBlockId'
// - Renamed export 'q_' to 'validateSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 470930
         */
module.exports = function (module, exports, require) {
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docTranslationStateChecker = require("doc-translation-state-checker") /*id: 564082*/;
  var translationEnums = require("translation-enums") /*id: 421780*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var multiTextSelectionHandler = require("multi-text-selection-handler") /*id: 627646*/;
  var docBlockTraversalUtils = require("doc-block-traversal-utils") /*id: 680152*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxHistoryFlags = require("docx-history-flags") /*id: 840802*/;
  var panelToggleActions = require("panel-toggle-actions") /*id: 310864*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  async function y(e, i, n) {
    let {
      previousSibling: r
    } = e.getBlockModelByBlockId(n[0].id);
    let o = e.getBlockViewByBlockId(r.id);
    let l = i.getSelection();
    let a = l.length > 0;
    let s = n.map(e => e.record.id);
    let c = r.children.length;
    await e.applyTransaction("keyevent:block:tab", e => {
      documentBlockOperations.removeBlockItems(e, n.map(e => e.model));
      documentBlockOperations.moveChildren(e, o.record.id, c, s);
    });
    S(i, e, a, l, o.model.children.slice(c, c + s.length).map(e => e.id));
  }
  function k(e, i) {
    let n = e.getSelection();
    let r = true;
    if ((n.length !== 1 || n[0].id !== i[i.length - 1].id) && (n.length !== i.length || !n.every(e => i.findIndex(i => i.id === e.id) > -1)) && !e.isTextSelectionAcrossBlocks(n)) {
      n = [];
      r = false;
    }
    return [n, r];
  }
  function S(e, i, n, r, o) {
    if (n) {
      if (e.isSingleTextSelection(r)) {
        e.setSelection([{
          ...r[0]
        }]);
      } else if (e.isTextSelectionAcrossBlocks(r)) {
        let n = [];
        let l = r.length;
        let a = i.getBlockModelByBlockId(o[0]);
        r.forEach((e, r) => {
          if (o.includes(e.id)) {
            a = i.getBlockModelByBlockId(e.id);
            return n.push(e);
          }
          for (a = [...docBlockTypeConstants.gridTableOkTypes, docBlockTypeConstants.blockTypeConstants.TASK].includes(a.type) ? a.nextSibling : a.next; docBlockTraversalUtils.isSpecialBlockType(a.type);) {
            a = a.next;
          }
          if (e.type === docxBlockSelectionHandler_1.blockTypes.BLOCK || !docBlockEditActions.isTextBlock(a)) {
            return n.push({
              id: a.id,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            });
          }
          let s = e.selection.end;
          if (r !== l - 1) {
            s = a.zoneState.totalWidth() - 1;
          }
          n.push({
            id: a.id,
            type: docxBlockSelectionHandler_1.blockTypes.TEXT,
            selection: {
              start: 0,
              end: s
            }
          });
        });
        e.setSelection(n);
      } else {
        e.setSelection(o.map(e => ({
          id: e,
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        })));
      }
    } else {
      e.removeAllSelection();
      e.restoreFocus();
    }
  }
  async function E(e, i, n, r) {
    let d = docBlockTraversalUtils.getGridColumnParentId(e, i);
    let u = null;
    if (d) {
      let r = docBlockTraversalUtils.collectBlockIds(d, i);
      let o = r.indexOf(e);
      let l = n ? o + 1 : o - 1;
      if (!(l < 0) && !(l > r.length - 1)) {
        return r[l];
      }
      {
        e = docBlockTraversalUtils.getGridColumnParentId(e, i) || e;
        let r = i.getBlockModelByBlockId(e);
        u = n ? r.nextSibling : r.previous;
      }
    } else {
      u = function (e, i, n, r) {
        let h;
        if (!r) {
          let r = docBlockTraversalUtils.getParentBlock(e, i);
          if (n) {
            return r.nextSibling;
          } else {
            return r.previousSibling;
          }
        }
        let p = i.getBlockModelByBlockId(e);
        if (n) {
          let e = p;
          if (multiTextSelectionHandler.getContainerTypes().includes(p.type)) {
            e = C(p);
          }
          h = docTranslationStateChecker.isFullTranslation(i) && e.next?.next ? syncedTranslationBlockUtils.getTranslationData(e.next, translationEnums.navigationDir.next) : e.next;
        } else {
          if (p.parent?.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
            p = p.parent;
          }
          let {
            previousSibling: e
          } = p;
          h = e ? C(e, multiTextSelectionHandler.getContainerTypes()) : p.parent;
          if (docTranslationStateChecker.isFullTranslation(i)) {
            h = syncedTranslationBlockUtils.getTranslationData(h, translationEnums.navigationDir.previous);
          }
        }
        return h;
      }(e, i, n, r);
    }
    if (!u) {
      return null;
    }
    if (!i.hasBlockViewByBlockId(u.id)) {
      await i.layoutManager.renderNodeById(u.id);
    }
    if (docBlockTraversalUtils.isSpecialBlockType(u.type)) {
      let e = docBlockTraversalUtils.collectBlockIds(u.id, i);
      if (n) {
        return e[0];
      } else {
        return e[e.length - 1];
      }
    }
    return u.id;
  }
  function C(e, i = []) {
    let n = e;
    if (i.includes(n.type)) {
      return n;
    }
    while (n.children.length && (n = n.children[n.children.length - 1], !i.includes(n.type)));
    return n;
  }
  function w(e) {
    let {
      helpPanelShown: i
    } = reduxStoreInitializer.reduxStore.getState().docx.comment;
    if (!docxHistoryFlags.getHistoryShow(reduxStoreInitializer.reduxStore.getState())) {
      if (!i && browserEnvironmentDetectionUtils.browserDetector.isFromSuperApp()) {
        if (e != null) {
          e.preventDefault();
        }
      }
      reduxStoreInitializer.reduxStore.dispatch(panelToggleActions.toggleHelpPanel(!i));
    }
  }
  function M(e, i) {
    let l = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let s = i.getBlockModelByBlockId(e);
    let c = I(s, i);
    let d = s.type === docBlockTypeConstants.blockTypeConstants.TEXT && Reflect.get(s, "isEmpty");
    let u = s.parent?.isRoot;
    if (syncUrlBlockUtils.isSyncingActive()) {
      u = s.parent?.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
    }
    let h = !s.children.length;
    while (function (e, i, n, r) {
      let o = r.parent && !r.parent.isRoot;
      if (syncUrlBlockUtils.isSyncingActive()) {
        o = r.parent?.type !== docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
      }
      return (!e || i) && n && o;
    }(l, h, c, s) && (s = s.parent)) {
      c = I(s, i);
    }
    if (docTranslationStateChecker.isFullTranslation(i) && syncedTranslationBlockUtils.isTranslationSuffix(s)) {
      s = s.next || s;
    }
    return {
      isHaveChildren: !h,
      isLastNoEmptyBlock: c && (!d || !u) && (!l || h),
      blockId: s.id
    };
  }
  function I(e, i) {
    var n;
    if (e.type === docBlockTypeConstants.blockTypeConstants.CELL && e.parent) {
      return docxTableLayoutUtils.isTableEdge(Reflect.get(e, "cellId"), e.parent.snapshot, docStructEnums.DirectionType.DOWN);
    } else if (docTranslationStateChecker.isFullTranslation(i) && syncedTranslationBlockUtils.isTranslationSuffix(e)) {
      return !(e.next || e).nextSibling;
    } else {
      return e.position + 1 === ((n = e.parent) === null || n === undefined ? undefined : n.children.length);
    }
  }
  require.d(exports, {
    updateSelection: function () {
      return S;
    },
    getBlockNavStatus: function () {
      return M;
    },
    indentBlockWithTab: function () {
      return y;
    },
    toggleHelpPanel: function () {
      return w;
    },
    getRelativeBlockId: function () {
      return E;
    },
    validateSelection: function () {
      return k;
    }
  });
}