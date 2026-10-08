// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AM' to 'findChangedColumnIndices'
// - Renamed export 'NF' to 'calculateColumnMinWidth'
// - Renamed export 'SH' to 'handleTableScroll'
// - Renamed export 'VJ' to 'updateCellChildrenOnResize'
// - Renamed export 'Ym' to 'getColumnWidthsFromSnapshot'
// - Renamed export 'k5' to 'updateCellsInColumn'
// - Renamed export 'kn' to 'calculateColumnWidths'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 985337
         */
module.exports = function (module, exports, require) {
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  var objectForeachUtil = require("object-foreach-util") /*id: 529626*/;
  var arraySumNormalizer = require("array-sum-normalizer") /*id: 980212*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockNestingCalc = require("doc-block-nesting-calc") /*id: 311122*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var dimensionConstants = require("dimension-constants") /*id: 53772*/;
  function m(e, n, i) {
    i.executeScroll(e);
    let {
      scrollLeft: r,
      scrollWidth: o
    } = i.getScrollStatus();
    if (r + n >= o) {
      i.executeSubScroll(e);
    }
  }
  function v(e) {
    let {
      tableSnapshot: n,
      cellBlockMinWidthMap: i,
      layoutInfo: r,
      mergeWidthMap: o,
      tableModel: s
    } = e;
    let h = E(n);
    n.columns_id.forEach((e, l) => {
      let a = S({
        colIdx: l,
        tableData: n,
        cellBlockMinWidthMap: i,
        layoutInfo: r,
        mergeWidthMap: o
      });
      let s = function (e, n, i) {
        if (e < 0 || !n || !i) {
          return 0;
        }
        let {
          [tableLayoutConstants.blockPropertyKeys.COLUMNS_ID]: r,
          [tableLayoutConstants.blockPropertyKeys.ROWS_ID]: o,
          [tableLayoutConstants.blockPropertyKeys.CELL_SET]: l
        } = n;
        let a = r[e];
        return o.map(e => e + a).reduce((e, n) => {
          let r = l[n];
          if (r) {
            return Math.max(i[r[tableLayoutConstants.blockPropertyKeys.RECORD_ID]] || 0, e);
          } else {
            return e;
          }
        }, 0);
      }(l, n, i);
      o.set(e, [a, s]);
      let c = h[l];
      h[l] = Math.max(c, a);
    });
    return function (e, n) {
      try {
        let i = /tableAdaptive=true/.test(window.location.href);
        if (docxShortcutFeatureDetection.isPDFMode() && i && e && !docBlockTreeUtils.hasParentOfType(e, [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN])) {
          let {
            indentWidth: i
          } = docBlockNestingCalc.getBlockNestingInfo(e);
          let r = docxShortcutFeatureDetection.isNeedComment() ? dimensionConstants.contentWidth : dimensionConstants.maxWidth;
          return arraySumNormalizer.normalizeArraySum(n, r - i, dimensionConstants.minSize);
        }
      } catch (e) {}
      return n;
    }(s, h);
  }
  function b(e, n, i, r) {
    let l = {};
    objectForeachUtil.createForEach(i.cell_set, (e, n) => {
      l[e.block_id] = n;
    });
    let a = r.getBlockModelByBlockIdNotCheck(e);
    if (a) {
      a.children.forEach(e => {
        let o;
        try {
          o = docxTableLayoutUtils.getCellPosition(l[e.recordId], i)[1];
        } catch (e) {
          docxEventCollector.docEventCollector("doc_bug_track_dev", {
            action: "table_cellSet_error",
            info: {
              cellSet: i.cell_set,
              rowsId: i.rows_id,
              columnsId: i.columns_id
            }
          });
          return;
        }
        if (n === o) {
          e.children.forEach(e => {
            let n = r.getBlockViewByBlockIdNotCheck(e.id);
            if (n != null) {
              n.onResize();
            }
          });
        }
      });
    }
  }
  let _ = (e, n, i) => {
    let {
      tableSnapshot: o,
      colIds: l,
      rowIds: a
    } = n;
    let {
      cell_set: s
    } = o;
    let c = l[e];
    a.forEach(e => {
      let o = s[`${e}${c}`]?.block_id;
      if (!o) {
        return;
      }
      let l = i.getBlockIdsByRecordId(o)[0];
      let a = boolDefaultUtil.getDefaultBool("docx_didupdatenode_force_local_change", undefined) || undefined;
      if (l) {
        i.layoutManager.didUpdateNode(l, true, a);
      }
    });
  };
  let y = (e, n, i) => {
    n.reduce((n, i, r) => {
      if (i !== e[r]) {
        n.push(r);
      }
      return n;
    }, []).map(i);
  };
  function E(e) {
    let {
      columns_id: n,
      column_set: i
    } = e;
    return n.map(e => i[e].column_width);
  }
  function S(e) {
    let {
      colIdx: n,
      tableData: i,
      cellBlockMinWidthMap: r,
      layoutInfo: o,
      mergeWidthMap: l
    } = e;
    let {
      [tableLayoutConstants.blockPropertyKeys.COLUMNS_ID]: a,
      [tableLayoutConstants.blockPropertyKeys.ROWS_ID]: c,
      [tableLayoutConstants.blockPropertyKeys.CELL_SET]: u
    } = i;
    let d = a[n];
    let p = c.map(e => e + d);
    let m = (tableLayoutConstants_1.tableConstant1 + tableLayoutConstants_1.tableConstant8b) * 2;
    let v = p.reduce((e, i, d) => {
      let v;
      let b = u[i];
      if (!b) {
        return e;
      }
      let _ = r[b[tableLayoutConstants.blockPropertyKeys.RECORD_ID]] || 0;
      try {
        v = o[d][n];
      } catch (i) {
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "table_getColMinWidth_error",
          info: {
            colIds: a,
            rowsId: c,
            rowIdx: d,
            colIdx: n,
            layoutInfo: o
          }
        });
        return e;
      }
      let {
        sourceCellId: y,
        cellId: E,
        colSpan: S
      } = v;
      if (S <= 0) {
        return e;
      }
      let [I, k] = docxTableLayoutUtils.splitCellId(i);
      let [C, T] = docxTableLayoutUtils.splitCellId(y);
      if (y === E || I !== C || n === 0 || k === T) {
        return Math.max(Math.round(_ / S + m / S), e);
      }
      let M = a.indexOf(T);
      let R = o[d][M];
      let N = l.get(T);
      let w = (N == null ? undefined : N[1]) ?? 0;
      let O = n - M;
      let A = 0;
      for (let e = M; e < n; e++) {
        let {
          cellId: n
        } = o[d][e];
        let [, i] = docxTableLayoutUtils.splitCellId(n);
        let r = l.get(i);
        A += (r == null ? undefined : r[0]) ?? 0;
      }
      return Math.max(A < w ? Math.round((w - A) / (R.colSpan - O)) : e, e);
    }, 0);
    return Math.max(tableLayoutConstants_1.tableConstant50b, Math.ceil(v));
  }
  require.d(exports, {
    findChangedColumnIndices: function () {
      return y;
    },
    calculateColumnMinWidth: function () {
      return S;
    },
    handleTableScroll: function () {
      return m;
    },
    updateCellChildrenOnResize: function () {
      return b;
    },
    getColumnWidthsFromSnapshot: function () {
      return E;
    },
    updateCellsInColumn: function () {
      return _;
    },
    calculateColumnWidths: function () {
      return v;
    }
  });
}