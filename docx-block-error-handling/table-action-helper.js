// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B8' to 'createCellBlock'
// - Renamed export 'BP' to 'isInsideTable'
// - Renamed export 'JX' to 'mergeTableCells'
// - Renamed export 'Mw' to 'insertTable'
// - Renamed export 'T4' to 'cancelMergeCells'
// - Renamed export 'XS' to 'removeTableLines'
// - Renamed export 'iD' to 'createTextBlockInCell'
// - Renamed export 'iZ' to 'addTableRow'
// - Renamed export 'kR' to 'createTextBlockInCellHelper'
// - Renamed export 't0' to 'createTable'
// - Renamed export 'u_' to 'resizeTableColumns'
// - Renamed export 'v$' to 'removeTableColumns'
// - Renamed export 'w2' to 'addTableLine'
// - Renamed export 'wH' to 'setTableHeaderLine'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 826304
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var toastManagerWrapper = require("toast-manager-wrapper") /*id: 55407*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docContentPageClickCollector = require("doc-content-page-click-collector") /*id: 751641*/;
  var uiEventTrackingConstants = require("ui-event-tracking-constants") /*id: 28205*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var createEmptyCellDocumentNode = require("create-empty-cell-document-node") /*id: 44326*/;
  var docxTableLimitErrorChecker = require("docx-table-limit-error-checker") /*id: 723993*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var tableNodeFactory = require("table-node-factory") /*id: 612896*/;
  var docxTableLayoutHelper = require("docx-table-layout-helper") /*id: 382662*/;
  let D = debugBrowserConfig.debug("tableActionHelper");
  function I(e) {
    let {
      op: n,
      ranks: o,
      parentRecordId: r,
      position: i,
      tableInitOptions: c,
      revisions: a
    } = e;
    let u = c || {
      column: (o == null ? undefined : o.colCount) || 3,
      row: (o == null ? undefined : o.rowCount) || 2,
      ...tableLayoutConstants_1.headerPropertyObj
    };
    let s = tableNodeFactory.createTableNode(u);
    if (a) {
      s.revisions = a;
    }
    let f = "";
    let m = n.create(e => {
      let o = `${s.rows_id[0]}${s.columns_id[0]}`;
      let i = s.rows_id.reduce((r, i) => s.columns_id.reduce((r, c) => {
        let a = `${i}${c}`;
        let u = createEmptyCellDocumentNode.createEmptyCellDocumentNode();
        let s = documentBlockOperations.createSingleBlock(n, e, u);
        r[a] = {
          block_id: s,
          merge_info: tableLayoutConstants_1.spanDefaultObj
        };
        let m = documentNodeUtils_2.createDocumentNode({});
        let p = documentBlockOperations.createSingleBlock(n, s, m);
        n.replaceChildren(s, [p]);
        if (a === o) {
          f = p;
        }
        return r;
      }, r), {});
      return {
        ...s,
        parent_id: r,
        cell_set: i
      };
    });
    n.insertChildren(r, i, [m]);
    return {
      tableRecordId: m,
      firstTextRecordId: f
    };
  }
  async function T(e) {
    let {
      block: n,
      blockManager: o,
      options: r,
      beforeInsert: i,
      transactionOptions: l,
      revisions: a
    } = e;
    let u = o.getBlockModelByBlockId(n.id);
    let s = u == null ? undefined : u.parent;
    if (!u || !s) {
      toastManagerWrapper.showToast({
        type: "error",
        content: t("toolbox.insert_fail"),
        dom: n.hostElement
      });
      return;
    }
    let d = s.record.id;
    let {
      position: f
    } = u;
    let m = "";
    await o.applyTransaction(tableLayoutConstants_1.insertTable, e => {
      if (i != null) {
        i(e, n);
      }
      let {
        firstTextRecordId: o
      } = I({
        op: e,
        tableInitOptions: r,
        parentRecordId: d,
        position: f,
        revisions: a
      });
      m = o;
    }, l);
    let _ = o.getBlockIdsByRecordId(m)[0];
    if (_) {
      let e = o.getBlockViewByBlockId(_);
      if (editorTextBlockUtilities.isTextEditable(e)) {
        o.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).setSelection([{
          id: e.id,
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          selection: {
            start: 0,
            end: 0
          }
        }]);
      }
    }
  }
  async function g(e) {
    let {
      blockManager: n,
      [tableLayoutConstants.blockPropertyKeys.COLUMN_SET]: o,
      blockId: r
    } = e;
    await n.applyTransaction(tableLayoutConstants_1.resizeColumnWidth, e => {
      let i = n.getRecordByBlockId(r);
      if (!i) {
        return;
      }
      let c = i.snapshot.column_set;
      let l = [];
      for (let n in c) {
        if (c[n].column_width !== o[n].column_width) {
          e.replace(i.id, [tableLayoutConstants.blockPropertyKeys.COLUMN_SET, n, tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH], o[n][tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH]);
          l.push(n);
        }
      }
      try {
        n.getBlockModelByBlockId(r).children.forEach(e => {
          let [, o] = docxTableLayoutUtils.splitCellId(e.cellId);
          if (l.includes(o)) {
            n.getBlockModelByBlockId(e.id).children.forEach(e => {
              let o = n.getBlockViewByBlockIdNotCheck(e.id);
              if (o != null) {
                o.onResize();
              }
            });
          }
        });
      } catch (e) {}
    }, {
      undoNotSetSelection: true
    });
  }
  async function M(e) {
    let n;
    let {
      blockManager: o,
      position: r,
      tableInfo: {
        tableId: i,
        cellsLayout: c
      },
      lineType: l,
      collectParams: s
    } = e;
    let d = o.getRecordByBlockId(i);
    if (!d || r < 0) {
      return;
    }
    let _ = d.snapshot;
    D(".addTableLine: position=%d, lineType=%s, tableInfo=%o, tableSnapshot=%o", r, l, e.tableInfo, _);
    let p = l === tableLayoutConstants.layoutDirection.COLUMN;
    let b = p ? tableLayoutConstants.layoutDirection.ROW : tableLayoutConstants.layoutDirection.COLUMN;
    let C = s == null ? undefined : s.actionValue;
    let h = p ? _.rows_id.length : _.rows_id.length + 1;
    let A = p ? _.columns_id.length + 1 : _.columns_id.length;
    if (!docxTableLimitErrorChecker.checkTableLimits(h, A)) {
      docContentPageClickCollector.collectDocContentPageClick(i, {
        actionType: uiEventTrackingConstants.uiClickEvents.EDIT_TABLE_FRAME,
        actionValue: {
          value1: (C == null ? undefined : C.value1) || (p ? uiEventTrackingConstants.tableActionEvents.ADD_COLUMN : uiEventTrackingConstants.tableActionEvents.ADD_ROW),
          value2: C == null ? undefined : C.value2
        }
      }, Object.assign({
        blockManager: o
      }, s || {}));
      await o.applyTransaction(p ? tableLayoutConstants_1.addTableColumn : tableLayoutConstants_1.addTableRow, e => {
        let o = p ? docxTableLayoutUtils.generateColumnId() : docxTableLayoutUtils.generateRowId();
        let i = true;
        _[`${b}s_id`].forEach((a, u) => {
          let s = p ? u : r;
          let f = p ? r : u;
          let m = false;
          if (r > 0 && r < _[`${l}s_id`].length) {
            let n = c[s][f];
            let [o, i] = docxTableLayoutUtils.getCellPosition(n.sourceCellId, _);
            if (m = p ? i < r : o < r) {
              let o = L(n.sourceCellId, _, c);
              let r = l.slice(0, 3);
              e.replace(d.id, ["cell_set", n.sourceCellId, "merge_info", `${r}_span`], o[`${r}Span`] + 1);
            }
          }
          let b = p ? `${a}${o}` : `${o}${a}`;
          let C = O(e, d.id, b);
          let E = v(e, C);
          if (i) {
            i = false;
            if (!m) {
              n = E;
            }
          }
        });
        if (p) {
          e.insert(d.id, ["column_set", o], {
            column_width: tableLayoutConstants_1.tableConstant100
          });
        }
        e.insert(d.id, [`${l}s_id`, r], o);
      });
      return n;
    }
  }
  async function P(e, n) {
    let o = e.getBlockModelByBlockId(n).snapshot;
    let r = docxTableLayoutHelper.createTableSnapshot(n, o);
    let i = r.rowIds.length;
    await M({
      blockManager: e,
      position: i,
      tableInfo: r,
      lineType: tableLayoutConstants.layoutDirection.ROW
    });
  }
  function v(e, n) {
    let o = documentBlockOperations.createSingleBlock(e, n, documentNodeUtils_2.createDocumentNode({}));
    e.replaceChildren(n, [o]);
    return o;
  }
  function O(e, n, o) {
    let r = documentBlockOperations.createSingleBlock(e, n, createEmptyCellDocumentNode.createEmptyCellDocumentNode());
    let i = {
      block_id: r,
      merge_info: tableLayoutConstants_1.spanDefaultObj
    };
    e.insert(n, ["cell_set", o], i);
    return r;
  }
  function L(e, n, o) {
    let [r, i] = docxTableLayoutUtils.splitCellId(e);
    let c = n.rows_id.indexOf(r);
    let l = n.columns_id.indexOf(i);
    return o[c][l];
  }
  let R = y;
  let k = async e => {
    await y(e, tableLayoutConstants_1.rowType2);
  };
  async function y(e, n = tableLayoutConstants_1.columnType) {
    let {
      blockManager: o,
      tableId: r,
      layoutInfo: c,
      target: s,
      collectParams: d
    } = e;
    let f = o.getRecordByBlockId(r);
    if (!f) {
      return;
    }
    let m = deepCloneWrapper_1.deepClone(f.snapshot);
    let _ = n === tableLayoutConstants_1.columnType;
    let p = _ ? tableLayoutConstants_1.rowType2 : tableLayoutConstants_1.columnType;
    let b = n.slice(0, 3);
    docContentPageClickCollector.collectDocContentPageClick(r, {
      actionType: uiEventTrackingConstants.uiClickEvents.EDIT_TABLE_FRAME,
      actionValue: {
        value1: _ ? uiEventTrackingConstants.tableActionEvents.DELETE_COLUMN : uiEventTrackingConstants.tableActionEvents.DELETE_ROW
      }
    }, Object.assign({
      blockManager: o
    }, d || {}));
    let C = s.sort((e, n) => n - e);
    await o.applyTransaction(_ ? tableLayoutConstants_1.removeTableColumn : tableLayoutConstants_1.removeTableRow, e => {
      let i = [];
      let a = m[`${p}s_id`].slice(0).reverse();
      for (let o of C) {
        a.forEach((n, r) => {
          let l = a.length - r - 1;
          let u = _ ? l : o;
          let s = _ ? o : l;
          let d = `${m.rows_id[u]}${m.columns_id[s]}`;
          let p = L(c[u][s].sourceCellId, m, c);
          if (p && p[`${b}Span`] > 1 && !i.includes(p)) {
            i.push(p);
          }
          e.remove(f.id, ["cell_set", d]);
        });
        if (_) {
          e.remove(f.id, ["column_set", m.columns_id[o]]);
        }
        e.remove(f.id, [`${n}s_id`, o]);
      }
      for (let n of i) {
        let {
          cellId: o,
          rowSpan: r,
          colSpan: i
        } = n;
        let c = m.columns_id;
        let [l, a] = docxTableLayoutUtils.splitCellId(o);
        let u = c.slice(c.indexOf(a), c.indexOf(a) + i);
        let d = m.rows_id;
        let p = d.slice(d.indexOf(l), d.indexOf(l) + r);
        let C = _ ? c : d;
        let E = s.map(e => C[e]);
        let h = (_ ? u : p).filter(e => !E.includes(e));
        if (h.length) {
          let n = _ ? `${l}${h[0]}` : `${h[0]}${a}`;
          e.replace(f.id, ["cell_set", n, "merge_info"], {
            row_span: r,
            col_span: i,
            [`${b}_span`]: h.length
          });
        }
      }
      if (s.length === m[`${n}s_id`].length) {
        documentBlockOperations.removeBlockItems(e, [r], o);
      }
    }, {
      undoNotSetSelection: true
    });
  }
  async function N(e) {
    let {
      tableId: n,
      blockManager: o,
      origin: r,
      range: i
    } = e;
    let c = o.getRecordByBlockId(n);
    if (!c) {
      return;
    }
    let a = c.snapshot;
    await o.applyTransaction(tableLayoutConstants_1.mergeCell, e => {
      let n = a.rows_id.slice(r.row, r.row + i.rowSpan);
      let u = a.columns_id.slice(r.col, r.col + i.colSpan);
      let d = `${n[0]}${u[0]}`;
      let f = a.cell_set[d].block_id;
      let m = [];
      for (let r of n) {
        for (let n of u) {
          let i = `${r}${n}`;
          let l = a.cell_set[i].block_id;
          let u = o.getRecord(l).snapshot.children.slice(0);
          if (i !== d) {
            e.replace(c.id, ["cell_set", i, "merge_info"], tableLayoutConstants_1.spanDefaultObj);
            v(e, l);
          }
          let f = false;
          if (u.length === 1 && o.editorAPI.modelService.getRecordByRecordId(u[0]).snapshot.type === docBlockTypeConstants.blockTypeConstants.TEXT) {
            let [e] = o.getBlockModelsByRecordId(u[0]);
            let n = o.getBlockViewByBlockId(e.id);
            let r = !e.record.snapshot.children.length;
            f = n.model.isEmpty && r;
          }
          if (u.length > 1 || !f) {
            m.push(...u);
          }
        }
      }
      if (m.length === 0) {
        m.push(documentBlockOperations.createSingleBlock(e, f, documentNodeUtils_2.createDocumentNode({})));
      } else {
        m.forEach(n => {
          e.replace(n, ["parent_id"], f);
        });
      }
      e.replaceChildren(f, m);
      e.replace(c.id, ["cell_set", d, "merge_info"], {
        col_span: u.length,
        row_span: n.length
      });
    });
  }
  async function B(e) {
    let {
      tableId: n,
      blockManager: o,
      origin: r,
      range: i
    } = e;
    let c = o.getRecordByBlockId(n);
    if (!c) {
      return;
    }
    let l = c.snapshot;
    await o.applyTransaction(tableLayoutConstants_1.cancelMergeCell, e => {
      let n = l.rows_id.slice(r.row, r.row + i.rowSpan);
      let a = l.columns_id.slice(r.col, r.col + i.colSpan);
      let u = `${n[0]}${a[0]}`;
      let s = l.cell_set[u].block_id;
      let d = o.getRecord(s).snapshot.background_color;
      for (let r of n) {
        for (let n of a) {
          let i = `${r}${n}`;
          let {
            col_span: a,
            row_span: s
          } = l.cell_set[i].merge_info;
          let f = l.cell_set[i].block_id;
          let m = docxTableLayoutUtils.getCellRecordIds(l).length;
          if (a !== 1 || s !== 1) {
            e.replace(c.id, ["cell_set", i, "merge_info"], tableLayoutConstants_1.spanDefaultObj);
          }
          if (!m) {
            v(e, f);
          }
          if (i !== u) {
            if (d) {
              e.replace(f, ["background_color"], d);
            } else if (o.getRecord(f).snapshot.background_color) {
              e.remove(f, ["background_color"]);
            }
          }
        }
      }
    });
  }
  async function w(e) {
    let {
      blockManager: n,
      cellRecordId: o,
      offset: r
    } = e;
    let i = "";
    await n.applyTransaction("createTextBlockInCell", e => {
      [i] = documentBlockOperations.insertNewChildren(e, o, r, [documentNodeUtils_2.createDocumentNode({})]);
    });
    let [c] = n.getBlockIdsByRecordId(i);
    return c;
  }
  let F = (e, n, o) => {
    let r = e.parentId;
    if (!r) {
      return false;
    }
    let i = o.getBlockViewByBlockIdNotCheck(r);
    return !!i && (i.type === docBlockTypeConstants.blockTypeConstants.TABLE && i.id === n || F(i, n, o));
  };
  async function x(e) {
    let {
      blockManager: n,
      tableId: o,
      lineType: r,
      newValue: i
    } = e;
    let c = n.getRecordByBlockId(o);
    if (c) {
      await n.applyTransaction(tableLayoutConstants_1.setTableHeaderLine, e => {
        let n = r === tableLayoutConstants.layoutDirection.ROW ? tableLayoutConstants.blockPropertyKeys.HEADER_ROW : tableLayoutConstants.blockPropertyKeys.HEADER_COL;
        e.replace(c.id, [n], i);
      }, {
        extra: {
          subTreeDirty: r === tableLayoutConstants.layoutDirection.ROW
        }
      });
    }
  }
  require.d(exports, {
    createCellBlock: function () {
      return O;
    },
    isInsideTable: function () {
      return F;
    },
    mergeTableCells: function () {
      return N;
    },
    insertTable: function () {
      return T;
    },
    cancelMergeCells: function () {
      return B;
    },
    removeTableLines: function () {
      return R;
    },
    createTextBlockInCell: function () {
      return v;
    },
    addTableRow: function () {
      return P;
    },
    createTextBlockInCellHelper: function () {
      return w;
    },
    createTable: function () {
      return I;
    },
    resizeTableColumns: function () {
      return g;
    },
    removeTableColumns: function () {
      return k;
    },
    addTableLine: function () {
      return M;
    },
    setTableHeaderLine: function () {
      return x;
    }
  });
}