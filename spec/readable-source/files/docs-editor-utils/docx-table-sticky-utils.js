// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mx' to 'isStickyHeaderRow'
// - Renamed export 'Q7' to 'getStickyBlockInfo'
// - Renamed export 'WL' to 'scrollToStickyBlock'
// - Renamed export 'cB' to 'filterTableChildren'
// - Renamed export 'dA' to 'getStickyMetrics'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 289191
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var browserEnvironmentDetectionUtilsConstant = require("browser-environment-detection-utils-constant") /*id: 390521*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var gridCellIdUtils = require("grid-cell-id-utils") /*id: 812767*/;
  let h = e => {
    let n = e.rows_id.length > 1;
    return !!e[tableLayoutConstants.blockPropertyKeys.HEADER_ROW] && function (e) {
      let n = e.rows_id[0];
      let r = e.columns_id;
      let o = e.cell_set;
      return !r.some(e => o[n + e].merge_info.row_span > 1);
    }(e);
  };
  let _ = e => {
    let {
      blockManager: n,
      blockId: r
    } = e;
    let o = n.getBlockViewByBlockIdNotCheck(r);
    let u = o && docxBlockUtils_1.findParentBlockByType(n, r, docBlockTypeConstants.blockTypeConstants.CELL);
    let a = u && n.getBlockViewByBlockIdNotCheck(u.id);
    let d = a && docxBlockUtils_1.findParentBlockByType(n, r, docBlockTypeConstants.blockTypeConstants.TABLE);
    let f = d && n.getBlockViewByBlockIdNotCheck(d.id);
    let h = f && f.hostElement.querySelector(`.table-block.${tableLayoutConstants_1.tableClassNames.TABLE_INNER_WRAPPER}`);
    let _ = h && document.querySelector(".page-main");
    if (!_ || !o || !a || !h) {
      return null;
    }
    let p = a.hostElement.getBoundingClientRect().top;
    let g = h.getBoundingClientRect().top;
    let E = _.getBoundingClientRect().top;
    let m = f.stickyHeight;
    if (m === 0) {
      var b;
      let e = (b = f.hostElement.querySelector(".first-row")) === null || b === undefined ? undefined : b.getBoundingClientRect();
      m = e ? e.height : m;
    }
    let v = o.hostElement.getBoundingClientRect().top;
    if (v === 0) {
      return null;
    } else {
      return {
        stickyHeight: m + browserEnvironmentDetectionUtilsConstant.isInVC + tableLayoutConstants_1.tableConstant8b,
        blockToViewTop: v - p + browserEnvironmentDetectionUtilsConstant.isInVC,
        blockToPageTop: g - E + (v - p)
      };
    }
  };
  let p = e => {
    let {
      blockId: n,
      blockManager: r,
      getLayoutInfo: o,
      isBlockInViewport: c,
      scroller: u
    } = e;
    if (!Number.isInteger(n) || !c) {
      return {
        isInStickyTable: false,
        isNeedSticky: false
      };
    }
    let {
      viewService: _
    } = r;
    let p = docxBlockUtils_1.findParentBlockByType(r, n, docBlockTypeConstants.blockTypeConstants.CELL);
    let g = p && p.parent;
    if (p && g && g.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
      let e;
      let r = g.snapshot;
      let i = docxTableLayoutUtils.getCellPosition(gridCellIdUtils.getCellId(p), r)[0] === 0;
      let l = _.getBlockViewByBlockId(g.id);
      if (!l) {
        return {
          isInStickyTable: false,
          isNeedSticky: h(r),
          isInFirstRow: i
        };
      }
      let m = u && "scrollTop" in u ? u : document.querySelector(".bear-web-x-container");
      let {
        isNeedSticky: b
      } = l;
      if (!b || !c(g.id) || !m || !("scrollTop" in m)) {
        return {
          isInStickyTable: false,
          isNeedSticky: b,
          isInFirstRow: i
        };
      }
      let v = _.getBlockViewByBlockId(n);
      let T = m == null ? undefined : m.getBoundingClientRect();
      if (v) {
        e = v.getRealHostRect();
      } else if (o && (e = o(n))) {
        e.top = e.top - m.scrollTop + T.top + 8;
        e.bottom = e.top + e.height;
      }
      if (!e) {
        return {
          isInStickyTable: false,
          isNeedSticky: b,
          isInFirstRow: i
        };
      }
      if (i) {
        if (e.top < T.top || e.bottom > T.bottom) {
          return {
            isInStickyTable: true,
            isNeedSticky: b,
            isInViewport: false,
            isInFirstRow: i
          };
        } else {
          return {
            isInStickyTable: true,
            isNeedSticky: b,
            isInViewport: true,
            isInFirstRow: i
          };
        }
      }
      {
        let r = g.children[0]?.id;
        let o = r && _.getBlockViewByBlockId(r);
        if (!o) {
          return {
            isInStickyTable: false,
            isNeedSticky: b,
            isInFirstRow: i
          };
        }
        let {
          bottom: l,
          height: c
        } = o.getRealHostRect();
        if (e.height > T.height - c - browserEnvironmentDetectionUtilsConstant.isInVC - 16) {
          let r = window.getSelection();
          if (r && r.rangeCount && r.rangeCount > 0) {
            let {
              focusNode: o
            } = r;
            if (o && docxBlockUtils_2.getBlockIdFromNode(o) === n) {
              let n = r.getRangeAt(0);
              e = n ? n.getBoundingClientRect() : e;
            }
          }
        }
        if (!e) {
          return {
            isInStickyTable: false,
            isNeedSticky: b,
            isInFirstRow: i
          };
        }
        let {
          top: u,
          bottom: a
        } = e;
        if (u < l || a > T.bottom) {
          return {
            isInStickyTable: true,
            isNeedSticky: b,
            isInViewport: false,
            isInFirstRow: i
          };
        } else {
          return {
            isInStickyTable: true,
            isNeedSticky: b,
            isInViewport: true,
            isInFirstRow: i
          };
        }
      }
    }
    return {
      isInStickyTable: false,
      isNeedSticky: false
    };
  };
  let g = async e => {
    let n;
    let {
      blockId: r,
      blockManager: o,
      scroller: c,
      getLayoutInfo: u,
      isBlockInViewport: a,
      callback: f
    } = e;
    let {
      isInStickyTable: h,
      isInViewport: _,
      isInFirstRow: g,
      isNeedSticky: E
    } = p({
      blockId: r,
      scroller: c,
      blockManager: o,
      getLayoutInfo: u,
      isBlockInViewport: a
    });
    if (!c || !("scrollTop" in c) || !u || !E || !h && !a(r)) {
      return false;
    }
    if (_ || !h && a(r)) {
      if (f != null) {
        f();
      }
      return new Promise(e => e());
    }
    let m = 0;
    let b = c.getBoundingClientRect();
    let {
      viewService: v
    } = o;
    let T = v.getBlockViewByBlockId(r);
    let C = u(r);
    if (T) {
      n = T.getRealHostRect();
    }
    if (!n || n.x === 0 && n.y === 0 && n.width === 0 && n.height === 0) {
      (n = C).top = n.top - c.scrollTop + b.top + 8;
      n.bottom = n.top + n.height;
    }
    if (!n) {
      return false;
    }
    if (g) {
      let e = b.top;
      m = c.scrollTop + n.top - e;
    } else {
      let e = docxBlockUtils_1.findParentBlockByType(o, r, docBlockTypeConstants.blockTypeConstants.TABLE);
      let u = e && v.getBlockViewByBlockId(e.id);
      let a = u == null ? undefined : u.stickyHeight;
      if (a === 0) {
        var k;
        let e = u == null ? undefined : (k = u.hostElement.querySelector(".first-row")) === null || k === undefined ? undefined : k.getBoundingClientRect();
        a = e ? e.height : a;
      }
      if (a == null) {
        return false;
      }
      if (b && n.height > b.height - a - browserEnvironmentDetectionUtilsConstant.isInVC - 16) {
        let e = window.getSelection();
        if (e && e.rangeCount && e.rangeCount > 0) {
          let {
            focusNode: o
          } = e;
          if (o && docxBlockUtils_2.getBlockIdFromNode(o) === r) {
            let r = e.getRangeAt(0);
            n = r ? r.getBoundingClientRect() : n;
          }
        }
      }
      if (n.top < b.top + a + browserEnvironmentDetectionUtilsConstant.isInVC) {
        m = n.top + c.scrollTop - b.top - a - browserEnvironmentDetectionUtilsConstant.isInVC + 1;
      } else if (n.bottom > b.bottom - 16) {
        m = n.top + c.scrollTop - b.top - b.height + n.height + 16;
      }
    }
    return !!m && (c.scrollTop = m, f == null || f(), new Promise(e => e()));
  };
  let E = e => {
    let {
      blockId: n,
      blockManager: r
    } = e;
    if (!Number.isInteger(n)) {
      return {
        isInStickyTable: false
      };
    }
    let o = docxBlockUtils_1.findParentBlockByType(r, n, docBlockTypeConstants.blockTypeConstants.CELL);
    let c = o && o.parent;
    if (o && c && c.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
      let e = r.getBlockViewByBlockIdNotCheck(c.id);
      let n = c.snapshot;
      let i = docxTableLayoutUtils.getCellPosition(gridCellIdUtils.getCellId(o), n)[0] === 0;
      let l = e == null ? undefined : e.isNeedSticky;
      if (!e || !l) {
        return {
          isInStickyTable: false,
          isInFirstRow: i
        };
      }
      let u = r.layoutManager.getScroller();
      let s = u && "scrollTop" in u ? u : document.querySelector(".bear-web-x-container");
      let d = e.getRealHostRect();
      let h = s == null ? undefined : s.getBoundingClientRect();
      if (h && d.top < h.top) {
        return {
          isInStickyTable: true,
          isInFirstRow: i
        };
      } else {
        return {
          isInStickyTable: false,
          isInFirstRow: i
        };
      }
    }
    return {
      isInStickyTable: false
    };
  };
  function m(e) {
    let {
      blockManager: n,
      blockSelection: r,
      table: i
    } = e;
    let {
      beginTarget: c,
      endTarget: u
    } = r.selectionContext;
    let s = docxBlockUtils_2.getBlockIdFromNode(c) || docxEditorCore.ZERO_OFFSET;
    let f = docxBlockUtils_2.getBlockIdFromNode(u) || docxEditorCore.ZERO_OFFSET;
    let h = [];
    if (s !== docxEditorCore.ZERO_OFFSET && f !== docxEditorCore.ZERO_OFFSET) {
      let e = E({
        blockId: s,
        blockManager: n
      });
      let r = E({
        blockId: f,
        blockManager: n
      });
      if (e.isInStickyTable && e.isInFirstRow === false && r.isInStickyTable && r.isInFirstRow === false) {
        let e = i.snapshot;
        h = i.children.filter(n => {
          let {
            cellId: r
          } = n;
          return !r || docxTableLayoutUtils.getCellPosition(r, e)[0] !== 0;
        });
      } else if (e.isInStickyTable && e.isInFirstRow === true && r.isInStickyTable && (r.isInFirstRow === true || n.getBlockModelByBlockIdNotCheck(f)?.type === docBlockTypeConstants.blockTypeConstants.TABLE)) {
        let e = i.snapshot;
        h = i.children.filter(n => {
          let {
            cellId: r
          } = n;
          return !r || docxTableLayoutUtils.getCellPosition(r, e)[0] === 0;
        });
      } else {
        h = i.children;
      }
    } else {
      h = i.children;
    }
    return h;
  }
  let b = e => {
    let {
      blockId: n,
      blockManager: r,
      isBlockInViewport: o
    } = e;
    let i = p({
      blockId: n,
      blockManager: r,
      isBlockInViewport: o
    });
    let l = null;
    let c = null;
    let u = null;
    let {
      isNeedSticky: a,
      isInFirstRow: s
    } = i;
    if (a) {
      let e = _({
        blockManager: r,
        blockId: n
      });
      if (s) {
        l = e && e.blockToPageTop;
        c = e && e.blockToViewTop;
      } else {
        u = e && e.stickyHeight;
      }
    }
    return {
      blockToPageTop: l,
      blockToViewTop: c,
      stickyHeight: u
    };
  };
  require.d(exports, {
    isStickyHeaderRow: function () {
      return h;
    },
    getStickyBlockInfo: function () {
      return p;
    },
    scrollToStickyBlock: function () {
      return g;
    },
    filterTableChildren: function () {
      return m;
    },
    getStickyMetrics: function () {
      return b;
    }
  });
}