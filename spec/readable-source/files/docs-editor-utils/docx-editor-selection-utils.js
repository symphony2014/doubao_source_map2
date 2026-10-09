// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AV' to 'createBlockFilter'
// - Renamed export 'Aq' to 'isFirstChild'
// - Renamed export 'E2' to 'navigateToBlock'
// - Renamed export 'Fz' to 'showBlockReminder'
// - Renamed export 'GV' to 'changeTextAlign'
// - Renamed export 'N6' to 'findAdjacentBlock'
// - Renamed export 'OQ' to 'setCollectorData'
// - Renamed export 'Rj' to 'applyBlockFormat'
// - Renamed export 'UJ' to 'handleSelection'
// - Renamed export 'ZK' to 'findSiblingView'
// - Renamed export 'h_' to 'toggleBlockMenu'
// - Renamed export 'ku' to 'isBlockVisible'
// - Renamed export 'oU' to 'getPrevBlockInfo'
// - Renamed export 'vE' to 'applyMultiFormat'
// - Renamed export 'xm' to 'getBlockModels'
// - Renamed export 'xp' to 'getPrevSiblingInfo'
// - Renamed export 'z' to 'handleKeySelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 258370
         */
module.exports = function (module, exports, require) {
  var editorSelectionTraversalUtils = require("editor-selection-traversal-utils") /*id: 71322*/;
  var blockSelectionUtils = require("block-selection-utils") /*id: 166197*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var editorFormatRevisionUtils = require("editor-format-revision-utils") /*id: 63043*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxReminderConstants = require("docx-reminder-constants") /*id: 770772*/;
  var blockSelectionValidation = require("block-selection-validation") /*id: 72949*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docBlockTraversalUtils = require("doc-block-traversal-utils") /*id: 680152*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxIndentAndFormattingHelper = require("docx-indent-and-formatting-helper") /*id: 436394*/;
  function E(e, n) {
    let {
      currentTargetModelFilterEmpty: r,
      blockManager: o,
      editorContextService: i
    } = e;
    e.preventDefault();
    for (let l of blockSelectionValidation.excludeSpecialTypes({
      blocks: r,
      blockManager: o,
      recursive: true,
      fold: i.fold
    })) {
      if (l.record.snapshot.align !== n) {
        o.applyTransaction("changeAlign", e => {
          e.replace(l.recordId, ["align"], n);
        });
      }
    }
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig_1.textToolbarConstants.TEXT_BLOCK_TOOLBAR);
  }
  function m(e, n) {
    let {
      blockManager: r,
      currentTargetViewFilterEmpty: i,
      editorContextService: l
    } = e;
    let {
      selectionAPI: c,
      fold: u
    } = l;
    let a = i[i.length - 1];
    let s = i[0];
    let h = v(a.id, r, !n);
    if (h) {
      editorSelectionTraversalUtils.findNextSelectable(h, r, true, !n);
      return;
    }
    let p = r.findClosestBlockViewByBlockId((n ? s : a).id, !n, e => T(e, u));
    if (p && editorTextBlockUtilities.isTextEditable(p)) {
      editorRangeUtilities.selectToStart(p);
    } else if (p) {
      c.setSelection([{
        type: editorTypeConstants.blockTypes.BLOCK,
        id: p.id
      }]);
    }
    e.preventDefault();
  }
  function b(e, n) {
    let {
      currentTargetViewFilterEmpty: r,
      selectionAPI: o
    } = e;
    if (r.length === 0) {
      e.shouldPropagation();
      return;
    }
    e.preventDefault();
    let i = o.getSelection();
    N(() => k(e, true, n, i), o);
  }
  function v(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = n.getBlockModelByBlockId(e);
    let l = r ? i.nextSibling : i.previousSibling;
    if (l && editorSelectionTraversalUtils.getDeepestBlock(l.record.snapshot.type)) {
      return n.getBlockViewByBlockId(l.id);
    }
  }
  function T(e, n) {
    let r = n.getFoldStateById(e.id);
    return (r && r.show) !== false && !docBlockTraversalUtils.isSpecialBlockType(e.type);
  }
  function C(e) {
    return n => T(n, e);
  }
  async function k(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    let {
      currentTargetViewFilterEmpty: l,
      blockManager: c,
      editorContextService: u
    } = e;
    let {
      fold: a
    } = u;
    let s = l[r ? l.length - 1 : 0];
    let d = v(s.id, c, r);
    if (d) {
      return editorSelectionTraversalUtils.findNextSelectable(d, c, n, r);
    }
    let f = c.findClosestBlockViewByBlockId(s.id, r, C(a));
    if (f && editorSelectionTraversalUtils.getDeepestBlock(f.type) && I(f, c, s, r)) {
      f = c.findClosestBlockViewByBlockId(f.id, r, C(a));
    }
    return f && editorSelectionTraversalUtils.getBoundaryBlock(f, c, n, r, i);
  }
  function I(e, n, r, o) {
    if (o) {
      return false;
    }
    let i = e;
    while (i.model.children.length) {
      if (i.model.children[0] === r.model) {
        return true;
      }
      i = n.getBlockViewByBlockId(i.model.children[0].id);
    }
    return false;
  }
  function R(e, n, r) {
    let o;
    let i;
    let l = n.getBlockModelByBlockId(r);
    let c = n.getBlockModelByBlockId(l.parent.id);
    let u = c.children[0].id === r;
    let a = e[0].id === l.children[0].id;
    let s = n.getBlockModelByBlockId(e[0].id);
    if (a) {
      i = o = u ? c.previous : l.previous;
    } else {
      o = s.previous;
      i = s.previousSibling;
    }
    return {
      prev: o,
      prevSibling: i
    };
  }
  function y(e, n, r) {
    let {
      collector: o
    } = e;
    if (o) {
      let e = {
        value1: n
      };
      if (r !== undefined) {
        e.value2 = r;
      }
      o.setExtraData({
        action_value: e
      }, true);
    }
  }
  function O(e, n, r = {
    isFirstRecursive: true
  }) {
    let {
      blockManager: o,
      editorContextService: {
        fold: l
      }
    } = e;
    let {
      isFirstRecursive: c
    } = r;
    let a = r == null ? undefined : r.recursive;
    if (c) {
      let {
        blockList: e,
        isMultiSel: r
      } = blockSelectionUtils.getSelectableBlocks(l, n, o);
      n = e;
      a = r;
    }
    let s = [];
    for (let r of n) {
      let {
        zoneState: n
      } = r.model;
      let c = o.getBlockModelByBlockIdNotCheck(r.id);
      let f = n.isEmpty();
      let h = ((c == null ? undefined : c.children) || []).map(e => {
        if (!o.hasBlockViewByBlockId(e.id)) {
          o.layoutManager.renderNodeByIdSync(e.id);
        }
        return o.getBlockViewByBlockIdNotCheck(e.id);
      }).filter(e => e && editorTextBlockUtilities.isTextEditable(e) && !docBlockTypeConstants.pageOnlyTypes.includes(e.type) && (a || blockSelectionUtils.isBlockSelectable(e.id, l, o)));
      let p = h.length > 0;
      if (f && !p) {
        continue;
      }
      let g = O(e, h, {
        isFirstRecursive: false,
        recursive: a
      });
      s.push({
        id: r.id,
        type: editorTypeConstants.blockTypes.TEXT,
        selection: {
          start: 0,
          end: editorTextBlockUtilities.getModelTextWithoutTrailing(r.model.zoneState).length
        }
      });
      s.push(...(g || []));
    }
    return s;
  }
  function S(e, n, r, o = "true", i) {
    let {
      blockManager: l,
      collector: u
    } = e;
    let a = O(e, n, {
      isFirstRecursive: true
    });
    let [s] = docxIndentAndFormattingHelper.checkBlocksFormattingConsistency(l, a, r, o, i);
    let d = s ? "" : o;
    if (u != null) {
      u.setExtraData({
        action_value: {
          value1: s ? "false" : "true"
        }
      }, true);
    }
    editorFormatRevisionUtils.applyFormatRevisionToSelection(l, a, {
      [r]: d
    });
  }
  function A(e, n, r, o) {
    let {
      blockManager: i,
      collector: l
    } = e;
    let u = {};
    let a = O(e, n, {
      isFirstRecursive: true
    });
    Object.entries(r).forEach(e => {
      let [n, r] = e;
      let [c] = docxIndentAndFormattingHelper.checkBlocksFormattingConsistency(i, a, n, r, o);
      u[n] = c ? "" : r;
      if (l != null) {
        l.setExtraData({
          action_value: {
            value1: c ? "false" : "true"
          }
        }, true);
      }
    });
    editorFormatRevisionUtils.applyFormatRevisionToSelection(i, a, u);
  }
  function L(e) {
    return e.map(e => {
      let {
        parent: n
      } = e.model;
      if ((n == null ? undefined : n.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
        return n;
      } else {
        return e.model;
      }
    });
  }
  async function N(e, n) {
    (function (e, n) {
      let {
        forward: r
      } = n;
      e();
      n.forward = r;
    })(() => {
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.HIDE_BLOCK_MENU);
    }, n);
    await e();
    if (n.isBlockSelection()) {
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.SHOW_BLOCK_MENU);
    }
  }
  function B(e, n) {
    let {
      parent: r
    } = n.getBlockModelByBlockId(e);
    if (!r) {
      return;
    }
    r = n.getBlockModelByBlockId(docBlockTraversalUtils.findNonAssocBlock(r.id, n, false) || r.id);
    let o = n.getBlockViewByBlockId(r.id);
    if ((!o || !docBlockTraversalUtils.isSpecialBlockType(o.type)) && r.id !== n.rootBlockId) {
      return [{
        id: r.id,
        type: editorTypeConstants.blockTypes.BLOCK
      }];
    }
  }
  function D(e) {
    let {
      preventDefaultAndStopEventImmediate: n,
      currentTargetViewFilterEmpty: r
    } = e;
    n();
    let o = r[0];
    if (!o) {
      return;
    }
    let i = o.model.getSelection();
    if (i) {
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxReminderConstants.popoverCommand, o, i);
    }
  }
  require.d(exports, {
    createBlockFilter: function () {
      return C;
    },
    isFirstChild: function () {
      return I;
    },
    navigateToBlock: function () {
      return k;
    },
    showBlockReminder: function () {
      return D;
    },
    changeTextAlign: function () {
      return E;
    },
    findAdjacentBlock: function () {
      return function e(n, r, o) {
        let {
          blockManager: i,
          editorContextService: l
        } = r;
        let {
          fold: c
        } = l;
        let a = i.getBlockModelByBlockId(n);
        let s = o === "firstChild" ? (a.children || [])[0] : a[o];
        if (!s || docBlockTypeConstants.pageOnlyTypes.includes(s.type)) {
          return null;
        }
        let d = c.getFoldStateById(n);
        let f = c.getFoldStateById(s.id);
        if ((f == null ? undefined : f.foldedBy) && o === "previous") {
          return f.foldedBy;
        }
        if (d && d.folded && o === "next") {
          let o = c.findFoldedBlocks(n);
          return e(i.getBlockModelByBlockId(o[o.length - 1]).id, r, "next");
        }
        if (docBlockTraversalUtils.isSpecialBlockType(s.type)) {
          if (o === "next") {
            return e(s.id, r, "firstChild") || e(s.id, r, "next");
          } else {
            return e(s.id, r, o);
          }
        }
        return s.id;
      };
    },
    setCollectorData: function () {
      return y;
    },
    applyBlockFormat: function () {
      return S;
    },
    handleSelection: function () {
      return m;
    },
    findSiblingView: function () {
      return v;
    },
    toggleBlockMenu: function () {
      return N;
    },
    isBlockVisible: function () {
      return T;
    },
    getPrevBlockInfo: function () {
      return B;
    },
    applyMultiFormat: function () {
      return A;
    },
    getBlockModels: function () {
      return L;
    },
    getPrevSiblingInfo: function () {
      return R;
    },
    handleKeySelection: function () {
      return b;
    }
  });
}