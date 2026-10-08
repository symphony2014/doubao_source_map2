// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jw' to 'isTableEdge'
// - Renamed export 'R9' to 'isSameColumn'
// - Renamed export 'lr' to 'createColumnIds'
// - Renamed export 'A8' to 'getFirstLastOrdered'
// - Renamed export 'OJ' to 'createLayoutArray'
// - Renamed export 'oe' to 'findClosestTable'
// - Renamed export 'v7' to 'isInGrid'
// - Renamed export 'fR' to 'findCellDescendants'
// - Renamed export 'zF' to 'checkHorizontalAlign'
// - Renamed export 'J0' to 'getCellRecordIds'
// - Renamed export '_V' to 'hasBlockContent'
// - Renamed export 'qj' to 'getSelectedIndexes'
// - Renamed export 'rD' to 'checkPendingStatus'
// - Renamed export 'ab' to 'splitCellId'
// - Renamed export 'HG' to 'isInTableCell'
// - Renamed export 'ce' to 'findAgendaCodeTypes'
// - Renamed export '_X' to 'validateRowColBounds'
// - Renamed export 't1' to 'isInCellParent'
// - Renamed export 'OR' to 'isInGridColumn'
// - Renamed export 'aP' to 'getCellPosition'
// - Renamed export 'mK' to 'focusBySelection'
// - Renamed export 'Cz' to 'createRowIds'
// - Renamed export 'FU' to 'getTableLayoutInfo'
// - Renamed export 'Q4' to 'generateRowId'
// - Renamed export 'ZT' to 'scrollTableHorizontal'
// - Renamed export 'vL' to 'createBlockCellMap'
// - Renamed export 'tl' to 'getMergedCellRange'
// - Renamed export 'Vu' to 'generateColumnId'
// - Renamed export 'W9' to 'getSelectedTableBlocks'
// - Renamed export 'hs' to 'parseCellId'
// - Renamed export 'zf' to 'getCellIdsFromRange'
// - Renamed export 'JE' to 'getCellRangeBounds'
// - Renamed export 'f4' to 'getCellStyle'
// - Renamed export 'CV' to 'setCellJustifyContent'
// - Renamed export 'MP' to 'concatenateIds'
// - Renamed export 'WU' to 'isTableBlock'
// - Renamed export 'iS' to 'getCellIdFromBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 163702
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var objectForeachUtil = require("object-foreach-util") /*id: 529626*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let f = e => {
    try {
      return e.children.some(e => e.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER ? _(e) : !e.isEmpty);
    } catch {
      return false;
    }
  };
  let h = e => {
    var n;
    if (e == null) {
      return undefined;
    } else if ((n = e.children) === null || n === undefined) {
      return undefined;
    } else {
      return n.some(e => f(e));
    }
  };
  function _(e) {
    try {
      return e.children.some(e => e.type === docBlockTypeConstants.blockTypeConstants.GRID ? h(e) : e.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN ? f(e) : !e.isEmpty);
    } catch {
      return false;
    }
  }
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  let R = debugLoggerFactory.createEnabledLogger("table:utils");
  let y = debugLoggerFactory.createLogger("table:utils");
  function O(e, n) {
    let r = {};
    let {
      rows_id: o,
      columns_id: l,
      cell_set: c
    } = e;
    if (!Object.keys(c).length) {
      docxEventCollector.wrappedCollector("doc_bug_track_dev", {
        action: "get_table_layout_info",
        info: JSON.stringify({
          rows_id: o,
          columns_id: l,
          cell_set: c
        })
      });
      return [];
    }
    try {
      return o.map((e, u) => l.map((a, s) => {
        let d = e + a;
        let f = c[d];
        let h = f.block_id;
        let {
          merge_info: _ = tableLayoutConstants_1.spanDefaultObj
        } = f;
        let {
          row_span: g,
          col_span: E
        } = _;
        let m = r[d];
        if (g <= 0 || E <= 0 || !isNumberUtil.isNumber(g) || !isNumberUtil.isNumber(E)) {
          g = tableLayoutConstants_1.spanDefaultObj.row_span;
          E = tableLayoutConstants_1.spanDefaultObj.col_span;
        }
        if (m) {
          if (m !== d && (g > 1 || E > 1)) {
            g = tableLayoutConstants_1.spanDefaultObj.row_span;
            E = tableLayoutConstants_1.spanDefaultObj.col_span;
            docxEventCollector.wrappedCollector("doc_bug_track_mobile", {
              action: "invalid_merge_data_table",
              info: JSON.stringify({
                sourceCellId: m,
                cellId: d
              })
            });
          }
        } else if (g > 1 || E > 1) {
          for (let e = u; e < u + g; e++) {
            for (let n = s; n < s + E; n++) {
              r[o[e] + l[n]] = d;
            }
          }
          m = d;
        } else {
          m = d;
        }
        let b = {
          cellId: d,
          sourceCellId: m,
          cellRecordId: h,
          rowSpan: g,
          colSpan: E
        };
        if (n) {
          n(b);
        }
        return b;
      }));
    } catch (e) {
      docxEventCollector.wrappedCollector("doc_bug_track_dev", {
        action: "get_table_layout_info",
        info: JSON.stringify({
          rows_id: o,
          columns_id: l,
          cell_set: c
        })
      });
    }
    return [];
  }
  function S() {
    return `${tableLayoutConstants_1.colType}${uuidGeneratorUtil.generateUuid()}`;
  }
  function A() {
    return `${tableLayoutConstants_1.rowType}${uuidGeneratorUtil.generateUuid()}`;
  }
  function L(e) {
    return Array(e).fill(0).map(S);
  }
  function N(e) {
    return Array(e).fill(0).map(A);
  }
  function B(e, n) {
    let {
      rows_id: r,
      columns_id: o
    } = n;
    let [i, l] = x(e);
    return [r.indexOf(i), o.indexOf(l)];
  }
  function D(e, n, r) {
    let {
      rows_id: o,
      columns_id: i
    } = n;
    let [l, c] = x(e);
    switch (r) {
      case docStructEnums.DirectionType.UP:
        return o.indexOf(l) === 0;
      case docStructEnums.DirectionType.RIGHT:
        return o.indexOf(l) === o.length - 1 && i.indexOf(c) === i.length - 1;
      case docStructEnums.DirectionType.DOWN:
        return o.indexOf(l) === o.length - 1;
      case docStructEnums.DirectionType.LEFT:
        return o.indexOf(l) === 0 && i.indexOf(c) === 0;
      default:
        return false;
    }
  }
  function w(e, n) {
    let [r, o] = e;
    return !(r < 0) && !(o < 0) && !(r >= n.rows_id.length) && !(o >= n.columns_id.length);
  }
  function M(e) {
    let {
      cellIds: n,
      layoutInfo: r,
      snapshot: o
    } = e;
    let {
      rows_id: i,
      columns_id: l
    } = o;
    let c = 0;
    let u = 0;
    let a = 0;
    let s = 0;
    let d = false;
    for (let e of n) {
      let [n, o] = x(e);
      let f = i.indexOf(n);
      let h = l.indexOf(o);
      let {
        rowSpan: _,
        colSpan: p
      } = r[f][h];
      let g = f + _ - 1;
      let E = h + p - 1;
      if (d) {
        c = Math.min(c, f);
        a = Math.min(a, h);
        u = Math.max(u, g);
        s = Math.max(s, E);
      } else {
        d = true;
        c = f;
        u = g;
        a = h;
        s = E;
      }
    }
    return {
      startRow: c,
      startCol: a,
      endRow: u,
      endCol: s
    };
  }
  function P(e) {
    let n = M(e);
    let {
      layoutInfo: r,
      snapshot: o
    } = e;
    let i = (e, n) => {
      let {
        startRow: l,
        startCol: c,
        endRow: u,
        endCol: a
      } = e;
      let s = [];
      try {
        for (let e = l; e <= u; e++) {
          for (let o = c; o <= a; o++) {
            let {
              cellId: i,
              sourceCellId: l,
              rowSpan: c,
              colSpan: u
            } = r[e][o];
            if ((i !== l || c > 1 || u > 1) && !n.includes(l)) {
              n.push(l);
              s.push(l);
            }
          }
        }
      } catch (e) {
        docxEventCollector.wrappedCollector("doc_bug_track_dev", {
          action: "get_table_layout_info",
          info: JSON.stringify(r)
        });
      }
      if (s.length) {
        let {
          startRow: e,
          startCol: d,
          endRow: f,
          endCol: h
        } = M({
          cellIds: s,
          layoutInfo: r,
          snapshot: o
        });
        return i({
          startRow: Math.min(l, e),
          startCol: Math.min(c, d),
          endRow: Math.max(u, f),
          endCol: Math.max(a, h)
        }, n);
      }
      return {
        startRow: l,
        startCol: c,
        endRow: u,
        endCol: a
      };
    };
    return i(n, []);
  }
  function F(e, n, r) {
    let {
      startRow: o,
      startCol: i,
      endRow: l,
      endCol: c
    } = P({
      cellIds: e.map(e => e.cellId),
      layoutInfo: n,
      snapshot: r
    });
    let u = [];
    for (let e = o; e <= l; e++) {
      for (let r = i; r <= c; r++) {
        let o = n[e][r];
        u.push(o.cellRecordId);
      }
    }
    return u;
  }
  function x(e) {
    let {
      length: n
    } = e;
    return [e.slice(0, n / 2), e.slice(n / 2)];
  }
  function U(e, n) {
    return G(e, n, e => docBlockTypeConstants.agendaCodeTypes.includes(e.record.snapshot.type));
  }
  function G(e, n, r) {
    return e.filter(e => e.type === docBlockTypeConstants.blockTypeConstants.CELL).reduce((e, n) => {
      n.struct.findAllDescendants(n => {
        let i = docxEditorCore.getBlockModel(n);
        if (i && (!r || r(i))) {
          e.push(i);
        }
        return true;
      });
      return e;
    }, []).map(e => n.getBlockViewByBlockIdNotCheck(e.id)).filter(Boolean);
  }
  function H(e) {
    let {
      selectedLineIds: n,
      blockManager: r,
      headerType: i,
      tableInfo: u
    } = e;
    let {
      tableId: a,
      tableSnapshot: s
    } = u;
    let d = r.getBlockModelByBlockIdNotCheck(a);
    if (!d || !n.length) {
      return [];
    }
    let f = i === tableLayoutConstants.layoutDirection.COLUMN;
    let h = {};
    objectForeachUtil.createForEach(s.cell_set, (e, n) => {
      h[e.block_id] = n;
    });
    let {
      cellToMainCellId: _,
      mainCellToCellIds: p
    } = function (e, n) {
      let {
        cellsLayout: r,
        tableSnapshot: o
      } = n;
      let i = new Map();
      let c = new Map();
      objectForeachUtil.createForEach(o.cell_set, (n, l) => {
        let [u, a] = B(l, o);
        if (u === -1 || a === -1) {
          return;
        }
        let s = r[u][a];
        let d = e ? s.colSpan : s.rowSpan;
        if (d <= 1) {
          return;
        }
        let f = function (e, n, r, o, i) {
          if (n <= 1) {
            return [r];
          }
          let [l, c] = B(r, i);
          return [...Array(n)].map((n, r) => (e ? o[l][c + r] : o[l + r][c]).cellId);
        }(e, d, l, r, o);
        if (f.length) {
          f.forEach((e, n) => {
            i.set(e, l);
          });
          c.set(l, f);
        }
      });
      return {
        cellToMainCellId: i,
        mainCellToCellIds: c
      };
    }(f, u);
    let g = memoizeFunction.memoize(e => (p.get(e) || [e]).every(e => {
      var r;
      r = e;
      return n.some(e => r.indexOf(e) >= 0);
    }));
    return d.children.filter(e => {
      let n = r.getBlockModelByBlockIdNotCheck(e.id);
      if (!n || n.type === docxEditorCore.PENDING_STATUS) {
        return false;
      }
      let i = h[n.recordId];
      return !!i && g(_.get(i) || i);
    }).map(e => ({
      type: editorTypeConstants.blockTypes.BLOCK,
      id: e.id
    }));
  }
  function K(e) {
    let n = throttledOrderByUtil.throttledOrderBy(e);
    return [n[0], n[n.length - 1]];
  }
  function Z(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.TABLE;
  }
  function $(e, n) {
    let r = n.getBlockModelByBlockIdNotCheck(e);
    while (r && r.parent) {
      if (r.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
        return true;
      }
      r = r.parent;
    }
    return false;
  }
  function j(e, n) {
    let r = n.getBlockModelByBlockIdNotCheck(e);
    while (r && r.parent) {
      if (r.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID) {
        return true;
      }
      r = r.parent;
    }
    return false;
  }
  function V(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.TABLE;
  }
  function W(e, n) {
    if (!e.hasBlockModelByBlockId(n)) {
      return docxEditorCore.ZERO_OFFSET;
    }
    let r = e.getBlockPath(n);
    return moduleReExportWrapper.wrappedModule([...r, n], n => {
      let r = e.getBlockModelByBlockIdNotCheck(n);
      return !!r && !!V(r);
    });
  }
  function X(e, n) {
    if (e.includes(n - 1)) {
      for (let r = n - 2; r >= 0; r--) {
        if (!e.includes(r)) {
          return r;
        }
      }
    } else {
      for (let r = e[0]; r < n; r++) {
        if (!e.includes(r)) {
          return r;
        }
      }
    }
    return -1;
  }
  function Y(e, n, r, i, l) {
    y(".focusByHasSelectedColsOrRows: selColIndexes=%o, selRowIndexes=%o, totalCol=%d, totalRow=%d", e, n, r, i);
    let {
      tableBlock: c,
      blockManager: u,
      selectionAPI: a
    } = l;
    let s = docxEditorCore.ZERO_OFFSET;
    let [d, f] = function (e, n, r, o) {
      let i = !!e.length;
      let l = !!n.length;
      if (e.length !== r && n.length !== o && (i || l)) {
        if (i && !l) {
          return [0, X(e, r)];
        } else if (!i && l) {
          return [X(n, o), 0];
        } else {
          return [X(n, o), X(e, r)];
        }
      } else {
        return [-1, -1];
      }
    }(e, n, r, i);
    if (!(d < 0) && !(f < 0)) {
      try {
        s = function (e, n, r, o) {
          let {
            rows_id: i,
            columns_id: l,
            cell_set: c
          } = r;
          let u = c[`${i[n]}${l[e]}`].block_id;
          let a = o.getBlockIdsByRecordId(u)[0];
          return o.getBlockModelByBlockId(a);
        }(f, d, c.record.snapshot, u).children[0].id;
        let e = u.getBlockViewByBlockId(s);
        y(".focusByHasSelectedColsOrRows.toFocusBlock: toFocusBlock=%o", e);
        if (editorTextBlockUtilities.isTextEditable(e)) {
          let n = e.model.zoneState.totalWidth() - 1;
          y(".focusByHasSelectedColsOrRows.toFocusBlock.editable: size=%d", n);
          a.setSelection([{
            type: editorTypeConstants.blockTypes.TEXT,
            id: s,
            selection: {
              start: n,
              end: n
            }
          }]);
        } else {
          y(".focusByHasSelectedColsOrRows.toFocusBlock.notEditable: id=%s", s);
          a.setSelection([{
            type: editorTypeConstants.blockTypes.BLOCK,
            id: s
          }]);
        }
      } catch (e) {}
    }
  }
  function z(e, n) {
    let {
      columns_id: r,
      rows_id: o
    } = n.record.snapshot;
    let i = (n, r) => n.reduce((n, o, i) => {
      if (e.filter(e => {
        let {
          cellId: n
        } = e;
        if (n == null) {
          return undefined;
        } else {
          return n.includes(o);
        }
      }).length === r) {
        n.push(i);
      }
      return n;
    }, []);
    return {
      allSelectedColIndexes: i(r, o.length),
      allSelectedRowIndexes: i(o, r.length)
    };
  }
  function q(e, n) {
    return e.getBlockModelByBlockId(n).cellId;
  }
  function J(e, n) {
    return `${e}${n}`;
  }
  function Q(e) {
    let n = /(row.+)(col.+)/.exec(e);
    return [n[1], n[2]];
  }
  function ee(e) {
    let {
      cell_set: n
    } = e || {};
    let r = {};
    Object.keys(n).map(e => {
      r[n[e].block_id] = e;
    });
    return r;
  }
  function et(e) {
    let {
      rows_id: n,
      columns_id: r,
      cell_set: o
    } = e;
    return function (e, n) {
      let r = [];
      if (e.length && n.length) {
        for (let o of e) {
          for (let e of n) {
            r.push(`${o}${e}`);
          }
        }
      }
      return r;
    }(n || [], r || []).map(e => {
      if (o == null) {
        return undefined;
      } else {
        return o[e]?.block_id;
      }
    }).filter(Boolean);
  }
  function en(e, n, r) {
    try {
      let o = r.getBlockModelByBlockIdNotCheck(e);
      if (!o || !V(o)) {
        return false;
      }
      let i = r.getBlockModelByBlockIdNotCheck(n);
      if (i && function e(n, r) {
        let o = n == null ? undefined : n.parent;
        if (o) {
          if (o.type === docBlockTypeConstants.blockTypeConstants.CELL) {
            if (o == null) {
              return undefined;
            } else {
              return o.parent?.id;
            }
          }
          return e(o, r);
        }
      }(i, r) === e) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
  function er(e) {
    return e.some(e => {
      let {
        model: n
      } = e;
      let {
        type: r
      } = n;
      switch (r) {
        case docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER:
          return _(n);
        case docBlockTypeConstants.blockTypeConstants.GRID:
          return h(n);
        case docBlockTypeConstants.blockTypeConstants.GRID_COLUMN:
          return f(n);
        default:
          return !n.isEmpty;
      }
    });
  }
  function eo(e) {
    if (!e.length) {
      return true;
    }
    let [, n] = x(e[0].cellId);
    return e.every(e => {
      let [, r] = x(e.cellId);
      return n === r;
    });
  }
  function ei(e, n) {
    if (e) {
      return {
        justifyContent: ec(n)
      };
    } else {
      return {
        verticalAlign: n
      };
    }
  }
  function el(e, n) {
    let r = ec(n);
    if (e.style.justifyContent !== r) {
      e.style.justifyContent = r;
    }
  }
  function ec(e = "top") {
    return {
      top: "flex-start",
      middle: "center",
      bottom: "flex-end"
    }[e] || "flex-start";
  }
  function eu(e, n) {
    let {
      rowLength: r,
      colLength: o
    } = e;
    let {
      startRowIdx: i,
      startColIdx: l,
      rowRange: c,
      colRange: u
    } = n;
    let a = Array.from(Array(r), () => Array(o));
    let s = Math.min(r - 1, i + c - 1);
    let d = l - 1;
    for (let e = s; e >= i; e--) {
      for (let n = d, r = 1; n >= 0; n--, r++) {
        a[e][n] = {
          maxColspan: r
        };
      }
    }
    s = i - 1;
    d = Math.min(o - 1, l + u - 1);
    for (let e = s, n = 1; e >= 0; e--, n++) {
      for (let r = d; r >= l; r--) {
        a[e][r] = {
          maxRowspan: n
        };
      }
    }
    return a;
  }
  function ea(e, n) {
    return Math.abs(e - n.getHostRect().x) < tableLayoutConstants_1.tableConstant8;
  }
  require.d(exports, {
    isTableEdge: function () {
      return D;
    },
    isSameColumn: function () {
      return eo;
    },
    createColumnIds: function () {
      return L;
    },
    getFirstLastOrdered: function () {
      return K;
    },
    createLayoutArray: function () {
      return eu;
    },
    findClosestTable: function () {
      return W;
    },
    isInGrid: function () {
      return j;
    },
    findCellDescendants: function () {
      return G;
    },
    checkHorizontalAlign: function () {
      return ea;
    },
    getCellRecordIds: function () {
      return et;
    },
    hasBlockContent: function () {
      return er;
    },
    getSelectedIndexes: function () {
      return z;
    },
    checkPendingStatus: function () {
      return function e(n) {
        return n.every(n => !n || (n.children.length ? n.type !== docBlockTypeConstants.blockTypeConstants.PENDING && e(n.children) : n.type !== docBlockTypeConstants.blockTypeConstants.PENDING));
      };
    },
    splitCellId: function () {
      return x;
    },
    isInTableCell: function () {
      return en;
    },
    findAgendaCodeTypes: function () {
      return U;
    },
    validateRowColBounds: function () {
      return w;
    },
    isInCellParent: function () {
      return function e(n, r) {
        let o = n.parentId;
        if (!o) {
          return false;
        }
        let i = r.getBlockViewByBlockIdNotCheck(o);
        return !!i && (i.type === docBlockTypeConstants.blockTypeConstants.CELL || e(i, r));
      };
    },
    isInGridColumn: function () {
      return $;
    },
    getCellPosition: function () {
      return B;
    },
    focusBySelection: function () {
      return Y;
    },
    createRowIds: function () {
      return N;
    },
    getTableLayoutInfo: function () {
      return O;
    },
    generateRowId: function () {
      return A;
    },
    scrollTableHorizontal: function () {
      return function e(n, r, o, i) {
        let u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        let a = arguments.length > 5 ? arguments[5] : undefined;
        if (!o) {
          return {
            msg: tableLayoutConstants.tableStatusCodes.noRect
          };
        }
        let s = n.editorAPI.getService(blockRectServiceId.blockRectServiceId);
        let d = !(a == null ? undefined : a.nestedTableId) && function (e, n) {
          if (!e.hasBlockModelByBlockId(n)) {
            return;
          }
          let r = [...e.getBlockPath(n), n].map(n => e.getBlockModelByBlockIdNotCheck(n)).filter(e => !!e && !!V(e));
          if (r.length === 2) {
            return r.pop();
          }
        }(n, r);
        if (d && d.parent && !(a == null ? undefined : a.nestedTableId)) {
          let l = n.getBlockViewByBlockIdNotCheck(d.id);
          let c = s.getBlockRect(d.id);
          let f = (l == null ? undefined : l.tableContentWidth) || c.width;
          let h = domRectBboxHelpers.calcRelativeRect(o, c);
          let _ = h.left > f / 2;
          let p = {
            ...a,
            stickToLeft: !_,
            stickToRight: _
          };
          let g = {
            ...a,
            nestedTableId: d.id
          };
          e(n, d.parent.id, c, i, u, p);
          e(n, r, h, i, u, g);
          return {
            msg: tableLayoutConstants.tableStatusCodes.goToNewScroll
          };
        }
        let f = (a == null ? undefined : a.nestedTableId) ?? W(n, r);
        if (!f || r === f) {
          return {
            msg: tableLayoutConstants.tableStatusCodes.noClosestTable
          };
        }
        let h = n.getBlockViewByBlockIdNotCheck(f);
        if (!h) {
          return {
            msg: tableLayoutConstants.tableStatusCodes.noClosestTableView
          };
        }
        let {
          scrollManage: _
        } = h.props;
        if (!_) {
          return {
            msg: tableLayoutConstants.tableStatusCodes.noTableHookInstance
          };
        }
        let p = _.getScrollManage();
        if (p.vcSyncManager && a && a.vcReplayInfo && !p.vcSyncManager.checkCanScrollByVcInfo(a)) {
          return {
            msg: tableLayoutConstants.tableStatusCodes.vcReplayInfoUsed
          };
        }
        let {
          scrollModel: g,
          logId: m
        } = p;
        if (!g.isModelReady()) {
          if (u >= 3 || (a == null ? undefined : a.onlyCheckStatus)) {
            return {
              msg: tableLayoutConstants.tableStatusCodes.tableScrollModelNotReady
            };
          } else {
            setTimeout(() => {
              e(n, r, o, i, u + 1, a);
            }, 1000);
            return {
              msg: tableLayoutConstants.tableStatusCodes.tableScrollModelNotReadyGoRetry
            };
          }
        }
        let {
          totalScrollLeft: b
        } = g;
        let C = (a == null ? undefined : a.nestedTableId) ?? s.getRootBlockId();
        let k = s.getBlockRect(f, C).left;
        let y = o.left - k + b;
        let O = o.right - k + b;
        R(m, "%s.scrollHorizontal: left=%s, right=%s, tableOffsetLeft=%s", i, y, O, k);
        if (a == null ? undefined : a.onlyCheckStatus) {
          let e = h.props.recursionProps.isPresentationMode ? docBlockZoomUtils.getDefaultLineHeight() : 1;
          let n = g.getOffsetToShowRect(y, O, e, a) / e;
          return {
            msg: tableLayoutConstants.tableStatusCodes.calcDistance,
            diff: n
          };
        }
        _.setAfterRender({
          key: "scrollHorizontal",
          value: () => {
            let e = h.props.recursionProps.isPresentationMode ? docBlockZoomUtils.getDefaultLineHeight() : 1;
            let n = g.getOffsetToShowRect(y, O, e, a) / e;
            R(m, "%s.scrollHorizontal(afterRender): %s, scroll=%s", i, n, g.totalScrollLeft);
            if (n) {
              p.scrollByDistance(n, i);
            }
          }
        });
      };
    },
    createBlockCellMap: function () {
      return ee;
    },
    getMergedCellRange: function () {
      return P;
    },
    generateColumnId: function () {
      return S;
    },
    getSelectedTableBlocks: function () {
      return H;
    },
    parseCellId: function () {
      return Q;
    },
    getCellIdsFromRange: function () {
      return F;
    },
    getCellRangeBounds: function () {
      return M;
    },
    getCellStyle: function () {
      return ei;
    },
    setCellJustifyContent: function () {
      return el;
    },
    concatenateIds: function () {
      return J;
    },
    isTableBlock: function () {
      return Z;
    },
    getCellIdFromBlock: function () {
      return q;
    }
  });
}