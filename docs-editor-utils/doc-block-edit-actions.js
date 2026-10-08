// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C0' to 'checkBlockAction'
// - Renamed export 'H0' to 'handleNavSelection'
// - Renamed export 'M$' to 'fixSafariSelection'
// - Renamed export 'M0' to 'resolveNavTarget'
// - Renamed export 'OQ' to 'setActionData'
// - Renamed export 'Pe' to 'isTextBlock'
// - Renamed export 'ST' to 'showSelectAllToast'
// - Renamed export 'Xu' to 'handleBackspaceTx'
// - Renamed export 'aN' to 'handleBlockIndent'
// - Renamed export 'cr' to 'handleEnterInsert'
// - Renamed export 'eS' to 'getDeleteTargets'
// - Renamed export 'm$' to 'mergeTextAndRemove'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 395667
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var editorSelectionTraversalUtils = require("editor-selection-traversal-utils") /*id: 71322*/;
  var docxIndentValidationAndTips = require("docx-indent-validation-and-tips") /*id: 434696*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorSelectionUtils = require("docx-editor-selection-utils") /*id: 258370*/;
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  var positionRangeUtils = require("position-range-utils") /*id: 402360*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var docTranslationStateChecker = require("doc-translation-state-checker") /*id: 564082*/;
  function C(e) {
    return !!e.isTextBlock;
  }
  function k(e, n, r) {
    if (e === undefined || !browserEnvironmentDetectionUtils.browserDetector.isSafari || !browserEnvironmentDetectionUtils.browserDetector.isPcTemplate) {
      return;
    }
    let o = n.getBlockModelByBlockId(e);
    if (editorTextBlockUtilities.hasEquationInText(o)) {
      let e = r.getSelection();
      let n = o.zoneState.totalWidth() - 1;
      e.unshift({
        id: o.id,
        type: editorTypeConstants.blockTypes.TEXT,
        selection: {
          start: 0,
          end: n
        }
      });
      r.forward = false;
      r.setSelection(e);
      return true;
    }
  }
  function I(e, n, r) {
    let o = r ? e.previous : e.next;
    if ((o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.CELL) {
      n.preventDefault();
      return null;
    } else {
      if ((o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
        o = r ? function (e) {
          let n = e.parent;
          if (n.children[0].id === e.id) {
            return n.previous;
          } else {
            return e.previous;
          }
        }(o) : o.next;
      }
      if (o) {
        return o;
      } else {
        return null;
      }
    }
  }
  function R(e, n) {
    let {
      blockManager: r,
      currentTargetViewFilterEmpty: o,
      selectionAPI: i
    } = e;
    let l = o[0];
    if (!l) {
      return;
    }
    let c = i.getSelection();
    let u = I(l.model, e, n);
    if (!u) {
      return;
    }
    if (docTranslationStateChecker.isFullTranslation(r) && syncedTranslationBlockUtils.hasTranslateSnapshot(u) && editorTextBlockUtilities.isTextBlock(u)) {
      let r = editorTextBlockUtilities.getModelTextWithoutTrailing(u.zoneState).length;
      let o = {
        id: u.id,
        type: editorTypeConstants.blockTypes.TEXT,
        selection: {
          start: 0,
          end: r
        }
      };
      if (n) {
        c.unshift(o);
      } else {
        c.push(o);
      }
      if (!(u = I(u, e, n))) {
        return;
      }
    }
    let a = {
      id: u.id,
      type: editorTypeConstants.blockTypes.BLOCK
    };
    if (editorTextBlockUtilities.isTextBlock(u)) {
      let e = editorTextBlockUtilities.getModelTextWithoutTrailing(u.zoneState).length;
      a.selection = n ? {
        start: Math.max(0, e - 1),
        end: e
      } : {
        start: 0,
        end: Math.min(e, 1)
      };
      a.type = editorTypeConstants.blockTypes.TEXT;
    }
    if (n) {
      c.unshift(a);
    } else {
      c.push(a);
    }
    i.setSelection(c);
    e.preventDefault();
  }
  function y(e, n, r) {
    if (e) {
      let o = {
        value1: n
      };
      if (r !== undefined) {
        o.value2 = r;
      }
      e.setExtraData({
        action_value: o
      }, true);
    }
  }
  function O(e, n, r) {
    docxIndentValidationAndTips.isTextIndentEnabled({
      blockManager: n,
      indentResult: r,
      blockId: e.id,
      source: docxIndentValidationAndTips.checkListBlockAbove.above_block,
      needShowBlockTips: true,
      withAnimation: true,
      needAutoReport: true
    });
  }
  function S(e) {
    let {
      args: r,
      blockManager: o,
      model: i,
      op: l,
      fold: c,
      splitedData: u,
      insertBlockType: a,
      applyContext: s
    } = e;
    let {
      record: {
        id: h
      },
      id: _
    } = i;
    let {
      parent: p
    } = i;
    let E = c.getFoldStateById(_)?.folded;
    if (!p) {
      return {
        newRecordId: h,
        parentModel: i
      };
    }
    let m = E ? i.type : a || i.type;
    let b = o.createSnapshot(m, r || {
      text: u[1]
    });
    flowSyncDeltaOperations.editWithLineManager(l, i.record, u[0]);
    let v = i.position + 1;
    if (docBlockTypeConstants.headingTypeArray.includes(i.type) && E) {
      v = i.position + c.findFoldedBlocks(_).length + 1;
    }
    let T = i.children.length && !E;
    if (s) {
      s.isListEnterInsertAsChild = !!T;
    }
    return {
      newRecordId: T ? editorTextBlockUtilities.insertBlockWithMarks(l, h, 0, b) : editorTextBlockUtilities.insertBlockWithMarks(l, p.record.id, v, b),
      parentModel: T ? i : p
    };
  }
  function A(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let {
      blockManager: r,
      extraInfo: o,
      editorContextService: i,
      currentTargetViewFilterEmpty: l
    } = e;
    let {
      fold: c
    } = i;
    let u = l[0];
    let a = r.findClosestBlockViewByBlockId(u.id, n, docxEditorSelectionUtils.createBlockFilter(c));
    if (a && syncedTranslationBlockUtils.hasModelTranslate(a)) {
      a = r.findClosestBlockViewByBlockId(a.id, n, docxEditorSelectionUtils.createBlockFilter(c));
    }
    return !a || ![docBlockTypeConstants.blockTypeConstants.CELL].includes(a.type) || (o.propagationToTableCell = true, false);
  }
  function L(e, n) {
    return e.applyTransaction("keyevent:text:backspace", e => {
      N(n, e);
    });
  }
  function N(e, n) {
    if (!e.model.parent) {
      e.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "remove_current_line_failed",
        info: JSON.stringify({
          blockId: e.model.id,
          recordId: platformDocUtils.p5T(e.model.recordId),
          blockType: e.type,
          isDestroyed: e.model.isDestroyed
        })
      });
    }
    let r = e.model.parent.recordId;
    let {
      model: i
    } = e;
    documentBlockOperations.removeBlockItems(n, [i]);
    if (i.children.length > 0) {
      let e = i.record.get(["children"]) || [];
      let o = i.children.map(e => e.recordId).filter(n => e.includes(n));
      documentBlockOperations.moveChildren(n, r, i.position, o);
    }
  }
  function B(e, n, r) {
    let o = r.model.zoneState.merge(n.snapshot.text).toAttributeText();
    flowSyncDeltaOperations.editWithLineManager(e, r.record, o);
    n.model.getInlineRecordIds().forEach(n => e.replace(n, ["parent_id"], r.record.id));
    N(n, e);
  }
  function D(e, n) {
    if (editorSelectionUtilities.isSingleTextSelection(e)) {
      let r = n.getBlockModelByBlockIdNotCheck(arrayFirstElement.getFirstElement(e).id);
      if (r) {
        let e = r.getSelection();
        if (e) {
          return [{
            id: r.id,
            type: editorTypeConstants.blockTypes.TEXT,
            selection: positionRangeUtils.getPositionRange(e)
          }];
        }
      }
    }
    return e;
  }
  function w() {
    let e = browserEnvironmentDetectionUtils.browserDetector.isMac || browserEnvironmentDetectionUtils.browserDetector.isIPad;
    if (!window.localStorage.getItem("bear-selectall-tips") && !window.sessionStorage.getItem("bear-selectall-tips-once")) {
      toastNotificationManager_1.toastManager.show({
        key: "tips",
        type: "info",
        duration: 5000,
        content: e ? t("CreationDoc_DocX_MultiSelectAll_toast_mac") : t("CreationDoc_DocX_MultiSelectAll_toast_win"),
        cancelable: true,
        cancelText: t("CreationDoc_DocX_MultiSelectAll_no_btn"),
        onCancel: () => window.localStorage.setItem("bear-selectall-tips", "1"),
        closeAfterCancel: true
      });
      window.sessionStorage.setItem("bear-selectall-tips-once", "1");
      window.onbeforeunload = () => window.sessionStorage.removeItem("bear-selectall-tips-once");
    }
  }
  require.d(exports, {
    checkBlockAction: function () {
      return A;
    },
    handleNavSelection: function () {
      return R;
    },
    fixSafariSelection: function () {
      return k;
    },
    resolveNavTarget: function () {
      return function e(n, r, o) {
        let {
          blockManager: i,
          editorContextService: l
        } = n;
        let {
          fold: c
        } = l;
        let u = o === docStructEnums.DirectionType.DOWN || o === docStructEnums.DirectionType.RIGHT;
        let s = o === docStructEnums.DirectionType.UP || o === docStructEnums.DirectionType.DOWN;
        if (u && docBlockTypeConstants.getAllowedBlockTypes().includes(r.type) && r.model.children.length) {
          let e = i.getBlockViewByBlockId(r.model.children[0].id);
          if (docxEditorSelectionUtils.isBlockVisible(e, c)) {
            editorSelectionTraversalUtils.getBoundaryBlock(i.getBlockViewByBlockId(r.model.children[0].id), i, s, u);
            return;
          }
        }
        let d = docxEditorSelectionUtils.findSiblingView(r.id, i, u);
        if (d) {
          editorSelectionTraversalUtils.findNextSelectable(d, i, s, u);
          return;
        }
        let p = i.findClosestBlockViewByBlockId(r.id, u, docxEditorSelectionUtils.createBlockFilter(c));
        if (!!p && (!docTranslationStateChecker.isFullTranslation(i) || !!(p == null ? undefined : p.struct.next) || !u || !!s)) {
          if (editorSelectionTraversalUtils.getDeepestBlock(p.type) && docxEditorSelectionUtils.isFirstChild(p, i, r, u)) {
            return e(n, p, o);
          }
          editorSelectionTraversalUtils.getBoundaryBlock(p, i, s, u);
        }
      };
    },
    setActionData: function () {
      return y;
    },
    isTextBlock: function () {
      return C;
    },
    showSelectAllToast: function () {
      return w;
    },
    handleBackspaceTx: function () {
      return L;
    },
    handleBlockIndent: function () {
      return O;
    },
    handleEnterInsert: function () {
      return S;
    },
    getDeleteTargets: function () {
      return D;
    },
    mergeTextAndRemove: function () {
      return B;
    }
  });
}