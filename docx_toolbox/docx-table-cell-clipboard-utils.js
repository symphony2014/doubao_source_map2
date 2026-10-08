// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getTableSelectionInfo'
// - Renamed export 'OD' to 'tryDeleteCellContent'
// - Renamed export 'Uk' to 'isSingleTableBlock'
// - Renamed export 'Y0' to 'hasFirstCellInPath'
// - Renamed export 'YA' to 'processTableCellSelection'
// - Renamed export 'eB' to 'getFirstCellBlockId'
// - Renamed export 'p6' to 'areAllCellModelsOnly'
// - Renamed export 'pb' to 'getSelectedCellBlockId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 597988
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var docBlockCellUtils = require("doc-block-cell-utils") /*id: 48515*/;
  let p = debugBrowserConfig.debug("clipboard/utils/table");
  function g(e) {
    let {
      recordIds: n,
      recordMap: r
    } = e;
    return n.length === 1 && r[n[0]].snapshot.type === docBlockTypeConstants.blockTypeConstants.TABLE;
  }
  function m(e) {
    let {
      recordIds: n,
      recordMap: r
    } = e;
    return n.every(e => r[e].snapshot.type === docBlockTypeConstants.blockTypeConstants.CELL);
  }
  function v(e, n, r) {
    let o = docBlockCellUtils.areAllCellModels(e, n);
    let i = g(r);
    let l = m(r);
    return o && !i && !l;
  }
  function b(e, n, r) {
    let o = docBlockCellUtils.hasFirstCellInPath(e, n);
    let i = g(r);
    let l = m(r);
    return o && (i || l);
  }
  function y(e) {
    var r;
    let {
      selectedBlocks: i,
      blockManager: a,
      selectionAPI: u
    } = e;
    if (!i.length) {
      return;
    }
    let s = (r = u.getContext()) === null || r === undefined ? undefined : r.extra?.selectedLineIds;
    if (s == null ? undefined : s.length) {
      let e = a.getBlockModelByBlockIdNotCheck(i[0].id);
      let n = e == null ? undefined : e.parent;
      if (!n) {
        return;
      }
      let r = function (e, n) {
        let r = n.record.snapshot;
        let o = e[0].startsWith("col");
        let i = o ? r.columns_id : r.rows_id;
        let l = null;
        for (let n = 0; n < i.length; n++) {
          let a = i[n];
          if (e.includes(a)) {
            l = n;
            let [e, i] = o ? [0, l] : [l, 0];
            return docxTableLayoutUtils.concatenateIds(r.rows_id[e], r.columns_id[i]);
          }
        }
      }(s, n);
      if (!r) {
        return;
      }
      let o = function (e, n, r) {
        for (let o = 0; o < n.length; o++) {
          let {
            id: i
          } = n[o];
          if (r.getBlockViewByBlockIdNotCheck(i).cellId === e) {
            return i;
          }
        }
      }(r, i, a);
      if (o) {
        return o;
      }
    } else if (docBlockCellUtils.areAllCellModels(a, i)) {
      return _(a, i.map(e => e.id));
    } else {
      return docxBlockUtils_1.findParentBlockByType(a, i[0].id, docBlockTypeConstants.blockTypeConstants.CELL)?.id;
    }
  }
  function _(e, n) {
    let r = n.map(n => e.getBlockViewByBlockId(n).cellId);
    let o = e.getBlockModelByBlockId(n[0]).parent;
    let i = o == null ? undefined : o.record.snapshot;
    let l = docxTableLayoutUtils.getTableLayoutInfo(i);
    let {
      startRow: a,
      startCol: c
    } = docxTableLayoutUtils.getMergedCellRange({
      cellIds: r,
      layoutInfo: l,
      snapshot: i
    });
    let u = a * i.columns_id.length + c;
    let s = o == null ? undefined : o.children[u];
    if (s == null) {
      return undefined;
    } else {
      return s.id;
    }
  }
  let E = {
    check: () => true,
    handle(e, n, r, o) {
      let i = n[r].snapshot;
      let l = Object.keys(i.cell_set);
      let a = e.map(e => l.find(n => i.cell_set[n].block_id === e)).filter(Boolean);
      let {
        startRow: c,
        startCol: u,
        endRow: f,
        endCol: p
      } = docxTableLayoutUtils.getMergedCellRange({
        cellIds: a,
        layoutInfo: docxTableLayoutUtils.getTableLayoutInfo(i),
        snapshot: i
      });
      let g = c === 0;
      let m = u === 0;
      let v = u === 0 && p === i.columns_id.length - 1;
      let b = c === 0 && f === i.rows_id.length - 1;
      if (i[tableLayoutConstants.blockPropertyKeys.HEADER_COL] && (!m || !b)) {
        delete i[tableLayoutConstants.blockPropertyKeys.HEADER_COL];
      }
      if (i[tableLayoutConstants.blockPropertyKeys.HEADER_ROW] && (!g || !v)) {
        delete i[tableLayoutConstants.blockPropertyKeys.HEADER_ROW];
      }
      let y = i.rows_id.slice(c, f + 1);
      let _ = i.columns_id.slice(u, p + 1);
      n[r].snapshot.rows_id = y;
      n[r].snapshot.columns_id = _;
      e.splice(0, e.length, r);
      for (let l of y) {
        for (let e of _) {
          let r = i.cell_set[`${l}${e}`].block_id;
          if (!n[r]) {
            let e = docxClipboardUtils.cloneRecordWithChildren(o, r)[r];
            let {
              snapshot: i
            } = e;
            n[r] = {
              ...e,
              snapshot: {
                ...i,
                children: [],
                comments: []
              }
            };
          }
        }
      }
    }
  };
  let C = [{
    check(e, n, r) {
      let o = e.map(e => {
        let n = r.getBlockIdsByRecordId(e)[0];
        return r.getBlockViewByBlockId(n);
      });
      let i = r.getBlockIdsByRecordId(n)[0];
      let l = r.getBlockModelByBlockId(i);
      let {
        allSelectedColIndexes: a,
        allSelectedRowIndexes: c
      } = docxTableLayoutUtils.getSelectedIndexes(o, l);
      let u = a.length;
      let s = c.length;
      return (!!u || !!s) && u !== 1 && s !== 1 && (!u && !!s || !!u && !s);
    },
    handle(e, n, r, o) {
      let i = e.map(e => {
        let n = o.getBlockIdsByRecordId(e)[0];
        return o.getBlockViewByBlockId(n);
      });
      let l = o.getBlockIdsByRecordId(r)[0];
      let a = o.getBlockModelByBlockId(l);
      let {
        columns_id: c,
        rows_id: u
      } = a.record.snapshot;
      let {
        allSelectedColIndexes: h,
        allSelectedRowIndexes: f
      } = docxTableLayoutUtils.getSelectedIndexes(i, a);
      let p = h.length && !f.length;
      let g = !h.length && f.length;
      let m = h[0] === 0;
      let v = f[0] === 0;
      if (!p && !g) {
        return E.handle(e, n, r, o);
      }
      let b = g ? f.map(e => u[e]) : u;
      let y = p ? h.map(e => c[e]) : c;
      if (n[r].snapshot[tableLayoutConstants.blockPropertyKeys.HEADER_ROW] && !v) {
        delete n[r].snapshot[tableLayoutConstants.blockPropertyKeys.HEADER_ROW];
      }
      if (n[r].snapshot[tableLayoutConstants.blockPropertyKeys.HEADER_COL] && !m) {
        delete n[r].snapshot[tableLayoutConstants.blockPropertyKeys.HEADER_COL];
      }
      n[r].snapshot.rows_id = b;
      n[r].snapshot.columns_id = y;
      e.splice(0, e.length, r);
    }
  }, E];
  function k(e, n, r) {
    if (e.some(e => {
      var r;
      return ((r = n[e]) === null || r === undefined ? undefined : r.snapshot.type) !== docBlockTypeConstants.blockTypeConstants.CELL;
    })) {
      return;
    }
    let o = Object.keys(n).find(e => n[e].snapshot.type === docBlockTypeConstants.blockTypeConstants.TABLE);
    if (o) {
      for (let i of C) {
        if (i.check(e, o, r)) {
          i.handle(e, n, o, r);
          return;
        }
      }
    }
  }
  function w(e, n, r) {
    if (!n) {
      return;
    }
    let {
      columns_id: o,
      rows_id: i
    } = n.record.snapshot;
    let l = r.length;
    if (l < Math.min(o.length, i.length)) {
      return;
    }
    let {
      allSelectedColIndexes: a,
      allSelectedRowIndexes: c
    } = docxTableLayoutUtils.getSelectedIndexes(r, n);
    if (c.length || a.length) {
      return {
        colIndexes: a,
        rowIndexes: c,
        commonRemoveOptions: {
          layoutInfo: docxTableLayoutUtils.getTableLayoutInfo(n.record.snapshot),
          blockManager: e,
          tableId: n.id
        }
      };
    }
  }
  function I(e, n, r) {
    p(".tryDeleteCellContent: blockIds=%o", e);
    if (docBlockCellUtils.areAllCellsById(n, e)) {
      try {
        let o = e.map(e => n.getBlockViewByBlockId(e));
        let l = n.getBlockModelByBlockId(o[0].parentId);
        let c = w(n, l, o);
        if (!c) {
          n.applyTransaction("cellCutAction", r => {
            for (let o of e) {
              let e = n.getBlockModelByBlockId(o);
              tableActionHelper.createTextBlockInCell(r, e.record.id);
            }
          });
          return true;
        }
        let {
          columns_id: s,
          rows_id: h
        } = l.record.snapshot;
        let f = s.length;
        let p = h.length;
        let {
          commonRemoveOptions: g,
          colIndexes: m,
          rowIndexes: v
        } = c;
        docxTableLayoutUtils.focusBySelection(m, v, f, p, {
          tableBlock: l,
          blockManager: n,
          selectionAPI: r
        });
        let b = () => {
          let e = m.length === f;
          tableActionHelper.removeTableLines({
            ...g,
            target: m
          });
          if (!e) {
            tableActionHelper.removeTableColumns({
              ...g,
              target: v
            });
          }
          if (browserEnvironmentDetectionUtils.browserEnv.isAndroid) {
            window.flow.biz.util.showKeyBoard({
              callback: emptyExportFunction.emptyFunction
            });
          }
        };
        if (browserEnvironmentDetectionUtils.browserEnv.isIPad) {
          setTimeout(b, 0);
        } else {
          b();
        }
      } catch (e) {}
      return true;
    }
  }
  require.d(exports, {
    getTableSelectionInfo: function () {
      return w;
    },
    tryDeleteCellContent: function () {
      return I;
    },
    isSingleTableBlock: function () {
      return g;
    },
    hasFirstCellInPath: function () {
      return b;
    },
    processTableCellSelection: function () {
      return k;
    },
    getFirstCellBlockId: function () {
      return _;
    },
    areAllCellModelsOnly: function () {
      return v;
    },
    getSelectedCellBlockId: function () {
      return y;
    }
  });
}