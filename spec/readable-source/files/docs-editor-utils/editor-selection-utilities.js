// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B6' to 'filterCellBlocksFromSelection'
// - Renamed export 'Bx' to 'isMixedTextAndBlockSelection'
// - Renamed export 'IT' to 'mergeSelectionChanges'
// - Renamed export 'Kg' to 'getRangeFromSelection'
// - Renamed export 'M2' to 'isSelectionAtStart'
// - Renamed export 'N2' to 'getActiveEditorRangeFromSelection'
// - Renamed export 'Nj' to 'getSelectionRangeBetweenBlocks'
// - Renamed export 'OI' to 'getAllBlockIdsExcludingTypes'
// - Renamed export 'UU' to 'isSelectionAllBlocksWithEmptyText'
// - Renamed export 'XO' to 'isSelectionAtStartOfBlock'
// - Renamed export 'Yr' to 'isRangeEqual'
// - Renamed export 'ZV' to 'isSelectionAtEndOfBlock'
// - Renamed export 'Zj' to 'isSelectionChanged'
// - Renamed export 'Zn' to 'getFirstNonSelectionViewBlock'
// - Renamed export 'bF' to 'convertBlockIdsToSelection'
// - Renamed export 'hT' to 'isTextSelectionType'
// - Renamed export 'ho' to 'isSelectionFullText'
// - Renamed export 'jP' to 'isBlockSelectionType'
// - Renamed export 'mX' to 'isCollapsedTextSelection'
// - Renamed export 'nx' to 'isSelectionAtZoneEnd'
// - Renamed export 'qs' to 'isSingleTextSelection'
// - Renamed export 'vg' to 'hasTextSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 913651
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function h(e, n, r) {
    let o = [];
    n.forEach(n => {
      o.push(...function e(n, r, o) {
        let i = n.getBlockModelByBlockId(r);
        if (!o.includes(i.type)) {
          return [r];
        }
        let l = [];
        n.getBlockModelByBlockId(r).children.forEach(r => {
          l.push(...e(n, r.id, o));
        });
        return l;
      }(e, n, r));
    });
    return o;
  }
  function _(e, n) {
    let r = [];
    let o = new Set();
    n.forEach(n => {
      let i = e.getBlockModelByBlockIdNotCheck(n.id);
      if ((i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.CELL) {
        if (i.parent?.type === docBlockTypeConstants.blockTypeConstants.TABLE && !o.has(i.parent.id)) {
          o.add(i.parent.id);
          r.push({
            id: i.parent.id,
            type: editorTypeConstants.blockTypes.BLOCK
          });
        }
      } else {
        r.push(n);
      }
    });
    if (o.size > 0) {
      docxUtilityHelpers.captureException("TextSelectionAcrossBlocks includes cell block");
    }
    return r;
  }
  function p(e) {
    return e.map(e => ({
      id: e,
      type: editorTypeConstants.blockTypes.BLOCK
    }));
  }
  function g(e) {
    return e.length === 1 && e[0].type === editorTypeConstants.blockTypes.TEXT;
  }
  function E(e, n) {
    if (!g(e) || !e[0].selection) {
      return false;
    }
    let r = n.getBlockModelByBlockId(e[0].id).getText().length - 1;
    let {
      start: o,
      end: i
    } = e[0].selection;
    return i - o === r;
  }
  function m(e) {
    return e.length > 0 && e.every(e => e.type === editorTypeConstants.blockTypes.BLOCK);
  }
  let b = e => e === editorTypeConstants.blockTypes.TEXT;
  function v(e) {
    return e.length > 1 && e.some(e => {
      let {
        type: n
      } = e;
      return n === editorTypeConstants.blockTypes.TEXT;
    });
  }
  function T(e) {
    return v(e) && e.some(e => {
      let {
        type: n
      } = e;
      return n === editorTypeConstants.blockTypes.BLOCK;
    });
  }
  function C(e) {
    if (e.length === 1) {
      let {
        type: n,
        selection: r
      } = e[0];
      if (n === editorTypeConstants.blockTypes.TEXT && r && r.start !== undefined && r.start === r.end) {
        return true;
      }
    }
    return false;
  }
  function k(e, n) {
    let {
      anchorNode: r,
      focusNode: o
    } = e;
    if (!r || !o || e.rangeCount <= n) {
      return null;
    }
    let i = null;
    if (browserEnvironmentDetectionUtils.browserDetector.safari) {
      try {
        i = e.getRangeAt(n);
      } catch (e) {
        i = null;
      }
    } else if (e.getRangeAt) {
      i = e.getRangeAt(n);
    }
    if (!i) {
      (i = document.createRange()).setStart(e.anchorNode, e.anchorOffset);
      i.setEnd(e.focusNode, e.focusOffset);
    }
    return i;
  }
  function I(e, n) {
    return e.startContainer === n.startContainer && e.endContainer === n.endContainer && e.startOffset === n.startOffset && e.endOffset === n.endOffset;
  }
  function R(e, n) {
    return !!n && (e.anchorNode !== n.startContainer || e.focusNode !== n.endContainer || e.anchorOffset !== n.startOffset || e.focusOffset !== n.endOffset);
  }
  function y(e, n, r) {
    let {
      selection: o
    } = n;
    let {
      viewService: l
    } = e;
    let c = l.getBlockViewByBlockId(n.id);
    if (!c || !o) {
      return null;
    }
    let {
      start: u,
      end: a
    } = o;
    let {
      zoneState: s
    } = c.model;
    let d = s.offsetToPoint(u);
    let f = s.offsetToPoint(a);
    return new activeEditorRange.ActiveEditorRange({
      editor: c.editor,
      start: {
        ...d
      },
      end: {
        ...f
      },
      isBackward: r,
      state: s
    });
  }
  function O(e) {
    return e.type === editorTypeConstants.blockTypes.TEXT && e.selection?.start === 0 && e.selection.end === 0;
  }
  function S(e) {
    if (e.length < 1 || m(e)) {
      return false;
    }
    let n = e;
    if (n.length > 1 && O(n[0])) {
      n = n.slice(1);
    }
    if (n.length > 1 && O(n[n.length - 1])) {
      n = n.slice(0, -1);
    }
    return n.length > 0 && m(n);
  }
  function A(e, n, r) {
    let o = y(n, e, !r.forward);
    return o && !!editorRangeUtilities.isAtStart(o) && (o == null ? undefined : o.isCollapsed());
  }
  function L(e, n, r) {
    let o = y(n, e, !r.forward);
    return o && !!editorRangeUtilities.isAtZoneEnd(o) && (o == null ? undefined : o.isCollapsed());
  }
  function N(e, n, r) {
    let o = y(n, e, !r.forward);
    return o && !!editorRangeUtilities.isAtZoneEnd(o);
  }
  function B(e, n, r) {
    let o = y(n, e, !r.forward);
    return o && !!editorRangeUtilities.isAtStart(o);
  }
  function D(e, n) {
    if (!e.length) {
      return [];
    }
    if (!n.length) {
      return e;
    }
    let r = new Map();
    n.forEach(e => {
      r.set(e.id, e);
    });
    let [i, l] = [0, e.length - 1];
    let [c, u] = [false, false];
    let a = [];
    let s = [];
    while (i <= l) {
      let n = e[i];
      if (r.has(n.id)) {
        if (deepEqualUtil_1.deepEqual(r.get(n.id), n)) {
          c = true;
        } else {
          a.push(n);
        }
      } else {
        a.push(n);
        r.set(n.id, n);
      }
      if (!c) {
        i++;
      }
      let d = e[l];
      if (n === d || (r.has(d.id) && deepEqualUtil_1.deepEqual(r.get(d.id), d) ? u = true : s.unshift(d), !u && l--, c && u)) {
        break;
      }
    }
    return a.concat(s);
  }
  function w(e, n) {
    let r = [];
    let o = e;
    while (o) {
      if (o.type === docBlockTypeConstants.blockTypeConstants.GRID) {
        o = o.children[0].children[0];
        continue;
      }
      if ([docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.VIEW].includes(o.type)) {
        o = o.children[0];
        continue;
      }
      if (editorTextBlockUtilities.isTextBlock(o) && o.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        let {
          zoneState: e
        } = o;
        r.push({
          id: o.id,
          type: editorTypeConstants.blockTypes.TEXT,
          selection: {
            start: 0,
            end: e.totalWidth() - 1
          }
        });
      } else {
        r.push({
          id: o.id,
          type: editorTypeConstants.blockTypes.BLOCK
        });
      }
      if (o.type === docBlockTypeConstants.blockTypeConstants.TASK) {
        o = docBlockTreeUtils.getLastChildNode(o);
      }
      if (o.id === n.id) {
        break;
      }
      o = o.next;
    }
    return r;
  }
  require.d(exports, {
    filterCellBlocksFromSelection: function () {
      return _;
    },
    isMixedTextAndBlockSelection: function () {
      return T;
    },
    mergeSelectionChanges: function () {
      return D;
    },
    getRangeFromSelection: function () {
      return I;
    },
    isSelectionAtStart: function () {
      return B;
    },
    getActiveEditorRangeFromSelection: function () {
      return y;
    },
    getSelectionRangeBetweenBlocks: function () {
      return w;
    },
    getAllBlockIdsExcludingTypes: function () {
      return h;
    },
    isSelectionAllBlocksWithEmptyText: function () {
      return S;
    },
    isSelectionAtStartOfBlock: function () {
      return A;
    },
    isRangeEqual: function () {
      return R;
    },
    isSelectionAtEndOfBlock: function () {
      return N;
    },
    isSelectionChanged: function () {
      return k;
    },
    getFirstNonSelectionViewBlock: function () {
      return function e(n) {
        if (docBlockTypeConstants.selectionViewTypes.includes(n.type)) {
          return e(n.children[0]);
        } else {
          return n;
        }
      };
    },
    convertBlockIdsToSelection: function () {
      return p;
    },
    isTextSelectionType: function () {
      return b;
    },
    isSelectionFullText: function () {
      return E;
    },
    isBlockSelectionType: function () {
      return m;
    },
    isCollapsedTextSelection: function () {
      return C;
    },
    isSelectionAtZoneEnd: function () {
      return L;
    },
    isSingleTextSelection: function () {
      return g;
    },
    hasTextSelection: function () {
      return v;
    }
  });
}