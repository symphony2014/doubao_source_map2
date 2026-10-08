// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MO' to 'clearTextSelection'
// - Renamed export 'TJ' to 'getBlockSelectionRect'
// - Renamed export '_p' to 'setValidatedSelection'
// - Renamed export 'aj' to 'getTableCellsAnchor'
// - Renamed export 'bq' to 'fixListPadding'
// - Renamed export 'cc' to 'updateBlockRecordId'
// - Renamed export 'e5' to 'filterEmptyTextBlocks'
// - Renamed export 'k5' to 'expandSelectedBlocks'
// - Renamed export 'ky' to 'getBlockExpandHeight'
// - Renamed export 'rq' to 'applyAnchorHighlight'
// - Renamed export 'x6' to 'mapSelectionsToRects'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 579459
         */
module.exports = function (module, exports, require) {
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var docxBlockChildrenUtils_1 = require("docx-block-children-utils_1") /*id: 891712*/;
  var docxBlockTypeConstants_1 = require("docx-block-type-constants_1") /*id: 928355*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockPruningUtility = require("doc-block-pruning-utility") /*id: 596505*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  function _(e) {
    let {
      type: n,
      model: i
    } = e;
    return !Array.isArray(i.children) || !(i.children.length > 0) || !docxBlockTypeConstants_1.quoteBlockTypes.includes(n);
  }
  function E(e, n, i) {
    let o = n.default;
    if (pathArrayValidation.validatePathArray(n, e)) {
      o = n[e];
    } else if (docxBlockTypeConstants_1.quoteBlockTypes.includes(e)) {
      o = n.textual;
    }
    if (Array.isArray(o)) {
      if (i === "top") {
        return o[0];
      } else {
        return o[1];
      }
    } else {
      return o;
    }
  }
  function w(e, n) {
    if (!e.parentId) {
      return;
    }
    let i = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(n, e.parentId);
    if (i && editorTextBlockUtilities.isEditorInstance(i)) {
      let n = i.nodeToRange(e.hostElement);
      if (n) {
        let {
          start: e,
          len: r
        } = n.toPosition();
        return {
          id: i.id,
          type: editorTypeConstants.blockTypes.TEXT,
          selection: {
            start: e,
            end: e + r
          }
        };
      }
    }
  }
  function C(e, n, i, r) {
    let {
      id: a,
      selection: l
    } = e;
    let c = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(n, a);
    if (!c) {
      return;
    }
    let {
      start: s,
      end: u
    } = l || {};
    let p = docxImageViewerUtils.getDocxImageUrl(c.model).length;
    if ((!docxShortcutFeatureDetection.isOkrContentHighlightShare() || ![docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT].includes(c.type)) && isNumberUtil.isNumber(s) && isNumberUtil.isNumber(u) && (s > 0 || u < p)) {
      let o = i.getRangeRect(a, [s, u]);
      let l = docBlockTypeConstants.headingTypeArray.includes(c.type) ? r.headingLineHeight : r.textLineHeight;
      let d = o.height / l;
      if (Number.isInteger(d)) {
        return o;
      }
      let h = Z(e, n, i, r, true);
      if (!h) {
        return o;
      }
      let p = Math.min((d = Math.ceil(d)) * l, h.height);
      let m = p - o.height;
      let v = Math.abs(o.top - h.top);
      let g = Math.abs(h.bottom - o.bottom);
      if (v < m) {
        o = {
          ...o,
          top: h.top,
          bottom: h.top + p,
          height: p
        };
      } else if (g < m) {
        o = {
          ...o,
          bottom: h.bottom,
          top: h.bottom - p,
          height: p
        };
      } else {
        let e = Math.max(o.top - m / 2, h.top);
        o = {
          ...o,
          top: e,
          bottom: e + p,
          height: p
        };
      }
      return o;
    }
    return Z(e, n, i, r, true);
  }
  function Z(e, n, i, r, o = false) {
    let {
      id: a
    } = e;
    let l = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(n, a);
    if (!l) {
      return;
    }
    if (l.props.displaymode === "inline") {
      let e = w(l, n);
      if (e) {
        return C(e, n, i, r);
      }
    }
    let {
      blockMargin: c
    } = r;
    let s = i.getBlockRect(a);
    let {
      children: u
    } = l.model;
    if (o && Array.isArray(u) && u.length) {
      let e;
      let n = 0;
      for (let r = 0; !e && r < u.length; r++) {
        let o = u[r];
        let a = i.getBlockRect(o.id);
        if (a.height && a.width) {
          e = a;
          n = E(o.type, c, "top");
        }
      }
      if (!e) {
        return s;
      }
      let r = E(l.type, c, "bottom");
      let o = e.top - Math.max(r, n);
      s = {
        ...s,
        bottom: o,
        height: o - s.top
      };
    }
    return s;
  }
  function x(e, n, i, r) {
    let o;
    let a = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    let l = e => {
      let {
        type: o
      } = e;
      if (o === editorTypeConstants.blockTypes.TEXT) {
        return C(e, n, i, r);
      } else {
        return Z(e, n, i, r, a);
      }
    };
    if (e.length) {
      if (e.length === 1) {
        return l(e[0]);
      }
      for (let n of e) {
        let e = l(n);
        if (e) {
          o ||= {
            ...e
          };
          o.top = Math.min(o.top, e.top);
          o.bottom = Math.max(o.bottom, e.bottom);
          o.left = Math.min(o.left, e.left);
          o.right = Math.max(o.right, e.right);
          o.height = o.bottom - o.top;
          o.width = o.right - o.left;
        }
      }
      return o;
    }
  }
  function S(e) {
    let n = e == null ? undefined : e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    if (n != null) {
      n.clearBrowserTextSelection();
    }
    if (n != null) {
      n.removeAllSelection();
    }
  }
  function T() {
    var e;
    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let i = arguments.length > 1 ? arguments[1] : undefined;
    let r = docxShortcutFeatureDetection.isTextCardAnchor() ? "is-text-card-shortcut" : "is-anchor-new-style";
    if ((e = document.querySelector(".shortcut-page-container")) !== null && e !== undefined) {
      e.classList.add(r);
    }
    let o = document.querySelector("#docx-ssr-css-link");
    if (o) {
      document.head.removeChild(o);
    }
    let {
      textual: a,
      nonTextual: l
    } = function e(n, i) {
      let r = {
        textual: [],
        nonTextual: []
      };
      if (i) {
        return n.reduce((n, r) => {
          let o = i.getBlockIdsByRecordId(r.block_id);
          let a = i.getBlockViewByBlockIdNotCheck(o[0]);
          if (!a) {
            return n;
          }
          if (editorTextBlockUtilities.isEditorInstance(a)) {
            n.textual.push(r);
          } else {
            n.nonTextual.push(r);
            if (a.model.children && docxShortcutFeatureDetection.isWholeBlockHighlightShare()) {
              let {
                textual: r,
                nonTextual: o
              } = e(a.model.children.map(e => ({
                block_id: e.recordId,
                src_version: 1,
                selected_text: null
              })), i);
              n.textual.push(...r);
              n.nonTextual.push(...o);
            }
          }
          return n;
        }, r);
      } else {
        return r;
      }
    }(Array.from(n), i);
    if (i) {
      a.forEach(e => {
        let n = i.getBlockIdsByRecordId(e.block_id);
        let r = i.getBlockViewByBlockIdNotCheck(n[0]);
        if (!r || !editorTextBlockUtilities.isEditorInstance(r)) {
          return;
        }
        if (r.type === docBlockTypeConstants.blockTypeConstants.CODE && a.length === 1 && e.selected_text) {
          if (r != null) {
            r.setIsSingleShortcut(true);
          }
        }
        let o = 0;
        let l = 0;
        let c = r.model;
        let {
          zoneState: s
        } = c;
        let u = s.totalWidth();
        if (!e.selected_text || e.selected_text.src_start_idx >= u) {
          l = u;
        } else {
          o = e.selected_text.src_start_idx;
          l = Math.min(e.selected_text.src_end_idx, u);
        }
        let d = [o, l];
        r.toggleAnchorHighlight(true, {
          hlType: l - o === u ? "whole" : "partial",
          isFirstCharHl: o === 0
        });
        let h = {
          [anchorConstantsConfig.anchorHlClass]: "true"
        };
        if (r) {
          r.editor.setStopUpdateSelection(true);
        }
        try {
          c.setAttributes(editorRangeUtilities.createRangeWithZone(c.zoneState, d), h, {
            extra: {
              shouldCollab: false
            }
          });
        } catch (e) {}
        setTimeout(() => {
          if (r) {
            r.editor.setStopUpdateSelection(false);
          }
        }, 0);
      });
    }
    if (i) {
      l.forEach(e => {
        let n = i.getBlockIdsByRecordId(e.block_id);
        let r = i.getBlockViewByBlockIdNotCheck(n[0]);
        if (r) {
          r.toggleAnchorHighlight(true, {
            hlType: "whole"
          });
        }
      });
    }
  }
  function R(e, n) {
    if (!e || !e.selectedBlocks || !n) {
      return e;
    }
    let {
      selectedBlocks: i
    } = e;
    let r = new Set(i.map(e => e.block_id));
    let o = new Map();
    for (let l of i) {
      let c = n[l.block_id];
      r.add(l.block_id);
      o.set(l.block_id, l.selected_text ? "text" : "block");
      if (!c || !docBlockPruningUtility.isBlockPrunable(c, n, o)) {
        continue;
      }
      let s = (c == null ? undefined : c.data) && docxBlockChildrenUtils_1.getBlockChildren(c, true) || [];
      if (s.length && c.id === e.recordId) {
        e.recordId = s[0];
      }
      let d = s.map(e => ({
        block_id: e,
        src_version: 0,
        selected_text: null
      })).filter(e => {
        let {
          block_id: n
        } = e;
        return !r.has(n) && (r.add(n), true);
      });
      i.push(...d);
    }
  }
  function I(e, n) {
    if (!n || !n.block_map || !e) {
      return e;
    }
    let {
      id: i,
      block_map: r
    } = n;
    let o = docxBlockChildrenUtils_1.getBlockChildren(r[i])[0];
    if (o) {
      e.recordId = o;
      e.selectedBlocks = [{
        block_id: o,
        src_version: 0,
        selected_text: null
      }];
    }
  }
  function A(e, n) {
    let i;
    let r = n.map(e => e.id);
    i = "";
    n.forEach(n => {
      let {
        id: r,
        selection: o
      } = n;
      let a = e.getBlockModelByBlockIdNotCheck(r);
      if (!a || !docxBlockTypeConstants_1.quoteBlockTypes.includes(a.type)) {
        return;
      }
      if (a.type === docBlockTypeConstants.blockTypeConstants.TASK) {
        i += a.toPlainText();
        return;
      }
      let c = o ? [o.start, o.end] : undefined;
      let s = editorDeltaTextUtils.getNextDeltaText(a, e.editorAPI.modelService, c) || "";
      i += s;
    });
    let o = i;
    let a = /\S/.test(o);
    e.allBlockViews.forEach(n => {
      if (docxBlockUtils_1.isTextBlock(n) && function (e, n) {
        if (!docxBlockTypeConstants_1.quoteBlockTypes.includes(e.type) || e.children?.length) {
          return false;
        }
        let r = "";
        r = e.type === docBlockTypeConstants.blockTypeConstants.TASK ? e.toPlainText() : editorDeltaTextUtils.getNextDeltaText(e, n.editorAPI.modelService) || "";
        return !/\S/.test(r);
      }(n.model, e) && (a || !r.includes(n.id))) {
        let e = n.hostElement.closest(".block");
        if (e) {
          e.style.setProperty("display", "none");
          [docxShortcutFeatureDetection.isOkrContentHighlightShare() && ".docx-okr_progress-block" || "", docxShortcutFeatureDetection.isWholeBlockHighlightShare() && ".docx-callout-block" || ""].filter(e => e).forEach(n => {
            if (e.closest(n)) {
              let n = e.previousElementSibling;
              let i = e.nextElementSibling;
              if (n && !i) {
                n.style.cssText = "margin-bottom: 0px !important;";
              }
              if (i && !n) {
                i.style.cssText = "margin-top: 0px !important;";
              }
            }
          });
        } else {
          docxShortcutFeatureDetection.debugLogger(`filterEmptyTextBlock Failed: block El not found, recordId: ${docxUtilityHelpers.maskSensitiveData(n.record.id)}`);
        }
      }
    });
  }
  function M(e, n) {
    n.forEach(n => {
      let i = e.getBlockViewByBlockIdNotCheck(n.id);
      if (i) {
        let {
          hostElement: e
        } = i;
        e.querySelectorAll(".list-children").forEach(e => {
          let n = e.style.getPropertyValue("padding-left");
          let i = e.style.getPropertyValue("margin-left");
          if (n) {
            e.style.setProperty("padding-left", n, "important");
          }
          if (i) {
            e.style.setProperty("margin-left", i, "important");
          }
        });
      }
    });
  }
  function B(e, n) {
    if (!e || !e.selectedBlocks || !n) {
      return;
    }
    let {
      selectedBlocks: i
    } = e;
    let r = i.filter(e => {
      let r = n[e.block_id];
      return (r == null ? undefined : r.data?.type) === docBlockTypeConstants.blockTypeConstants.CELL;
    }).map(e => e.block_id);
    if (r.length && r.length !== i.length) {
      docxShortcutFeatureDetection.debugLogger("getTableCellsAnchor unexpected result");
    }
    return r;
  }
  function O(e, n, i, r) {
    return e.map(e => ({
      selection: e,
      rect: x([e], n, i, r)
    })).filter(e => {
      let {
        rect: n
      } = e;
      return n && n.height && n.width;
    }).sort((e, n) => {
      let {
        rect: i
      } = e;
      let {
        rect: r
      } = n;
      return i.top - r.top;
    }).map(e => {
      let {
        selection: n
      } = e;
      return n;
    });
  }
  function P(e, n, i) {
    let r = function (e, n) {
      let i = [];
      let r = n == null ? undefined : n.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
      if (n && r) {
        e.forEach(e => {
          let a;
          let l = n.getBlockModelsByRecordId(e.block_id)[0];
          let c = l == null ? undefined : l.id;
          if (c === undefined) {
            return;
          }
          let s = editorTypeConstants.blockTypes.BLOCK;
          let u = e.selected_text;
          let d = docxImageViewerUtils.getDocxImageUrl(l)?.length ?? 0;
          if (u && u.src_start_idx < d) {
            s = editorTypeConstants.blockTypes.TEXT;
            a = {
              start: u.src_start_idx,
              end: Math.min(u.src_end_idx, d)
            };
          }
          if (s === editorTypeConstants.blockTypes.BLOCK) {
            let e = n.getBlockViewByBlockIdNotCheck(c);
            if (e && e.props.displaymode === "inline") {
              let i = w(e, n);
              if (i) {
                c = i.id;
                s = i.type;
                a = i.selection;
              }
            }
          }
          i.push({
            id: c,
            type: s,
            selection: a
          });
        });
        return i;
      } else {
        return [];
      }
    }(e, n);
    i.setSelection(r);
    return i.getSelection();
  }
  function N(e) {
    if (docBlockTypeConstants.agendaCodeTypes.includes(e.type)) {
      return [{
        type: editorTypeConstants.blockTypes.TEXT,
        id: e.id,
        selection: {
          start: 0,
          end: docxImageViewerUtils.getDocxImageUrl(e.model).length
        }
      }];
    } else {
      return [{
        type: editorTypeConstants.blockTypes.BLOCK,
        id: e.id
      }];
    }
  }
  function L(e, n) {
    return !!e && e.hostElement.style.display !== "none" && e.id !== n.rootBlockId;
  }
  function D(e) {
    let {
      blockManager: n,
      rect: i,
      startBlockId: r,
      styleOptions: o,
      direction: a,
      getBlockExpandableHeight: c,
      condition: s
    } = e;
    let {
      expandedHeight: u,
      lastBlockView: d,
      lastAddedBlockMargin: h
    } = function (e) {
      let {
        blockManager: n,
        rect: i,
        startBlockId: r,
        styleOptions: o,
        direction: a,
        getBlockExpandableHeight: l,
        condition: c
      } = e;
      let {
        headingLineHeight: s,
        textLineHeight: u,
        blockMargin: d
      } = o;
      let h = r && n.getBlockViewByBlockIdNotCheck(r);
      let p = 0;
      let m = true;
      let v = 0;
      while (m && h) {
        let e = h.type;
        let r = docBlockTypeConstants.headingTypeArray.includes(e) ? s : u;
        let g = x(N(h), n, i, o, !_(h));
        let b = 0;
        if (g && g.height) {
          b = l(h, g);
        }
        let y = function e(n, i, r) {
          let o;
          let a = _(n);
          let l = (o = r === "top" ? a ? n.model.previousSibling || n.model.parent : n.model.previous : a ? n.model.nextSibling || n.model.parent : n.model.next) == null ? undefined : o.id;
          if (!l || l === i.rootBlockId) {
            return;
          }
          let c = i.getBlockViewByBlockIdNotCheck(l);
          if (c) {
            if (L(c, i)) {
              return c;
            } else {
              return e(c, i, r);
            }
          }
        }(h, n, a);
        let k = 0;
        if (y) {
          k = Math.max(E(h.type, d, a), E(y.type, d, a === "top" ? "bottom" : "top"));
        }
        let w = p + b + k;
        if (m = c(w, r)) {
          p = w;
          h = y;
          v = k;
        }
      }
      return {
        expandedHeight: p,
        lastBlockView: h,
        lastAddedBlockMargin: v
      };
    }({
      blockManager: n,
      rect: i,
      startBlockId: r,
      styleOptions: o,
      direction: a,
      getBlockExpandableHeight: c,
      condition: e => s("block", e)
    });
    if (!d) {
      return {
        expandedHeight: u
      };
    }
    let {
      expandedHeight: p
    } = function (e) {
      let {
        blockManager: n,
        rect: i,
        blockId: r,
        styleOptions: o,
        getBlockExpandableHeight: a,
        condition: c
      } = e;
      let {
        textLineHeight: s,
        headingLineHeight: u
      } = o;
      let d = n.getBlockViewByBlockIdNotCheck(r);
      if (!L(d, n)) {
        return {
          expandedHeight: 0,
          expandedLines: 0
        };
      }
      let h = 0;
      let p = 0;
      let m = true;
      let v = s;
      if (docBlockTypeConstants.headingTypeArray.includes(d.type)) {
        v = u;
      } else if (!docxBlockTypeConstants_1.quoteBlockTypes.includes(d.type)) {
        v = u;
      }
      let g = x(N(d), n, i, o, !_(d));
      let b = 0;
      if (g && g.height) {
        let e = a(d, g);
        if (!docxBlockTypeConstants_1.quoteBlockTypes.includes(d.type) && e < v) {
          v = e;
        }
        b = Math.floor(e / v);
      }
      let y = 0;
      while (m && y < b) {
        y += 1;
        let e = p + 1;
        let n = h + v;
        if (m = c(e, n, v)) {
          p = e;
          h = n;
        }
      }
      return {
        expandedLines: p,
        expandedHeight: h
      };
    }({
      blockManager: n,
      rect: i,
      blockId: d.id,
      styleOptions: o,
      getBlockExpandableHeight: c,
      condition: (e, n) => s("line", n + u)
    });
    let m = u;
    if (p === 0 && u > 0) {
      m = u - h;
    }
    return {
      expandedHeight: m + p
    };
  }
  require.d(exports, {
    clearTextSelection: function () {
      return S;
    },
    getBlockSelectionRect: function () {
      return x;
    },
    setValidatedSelection: function () {
      return P;
    },
    getTableCellsAnchor: function () {
      return B;
    },
    fixListPadding: function () {
      return M;
    },
    updateBlockRecordId: function () {
      return I;
    },
    filterEmptyTextBlocks: function () {
      return A;
    },
    expandSelectedBlocks: function () {
      return R;
    },
    getBlockExpandHeight: function () {
      return D;
    },
    applyAnchorHighlight: function () {
      return T;
    },
    mapSelectionsToRects: function () {
      return O;
    }
  });
}