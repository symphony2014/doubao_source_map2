// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B_' to 'cancelMergeCell'
// - Renamed export 'C5' to 'insertTable'
// - Renamed export 'Cy' to 'tableConstant4'
// - Renamed export 'Db' to 'tableConstant15'
// - Renamed export 'Dp' to 'tableHeaderArray'
// - Renamed export 'FV' to 'mergeCell'
// - Renamed export 'G8' to 'tableConstant3'
// - Renamed export 'HS' to 'codeBlockZoneArray'
// - Renamed export 'HW' to 'tableConstant1'
// - Renamed export 'I2' to 'removeTableColumn'
// - Renamed export 'JJ' to 'tableConstant2'
// - Renamed export 'KK' to 'tableConstant8'
// - Renamed export 'KT' to 'rowType'
// - Renamed export 'Ly' to 'tableConstant3b'
// - Renamed export 'N4' to 'tableConstant44'
// - Renamed export 'Oi' to 'tableConstant28'
// - Renamed export 'Op' to 'tableConstant50'
// - Renamed export 'Ot' to 'tableConstant200'
// - Renamed export 'Pl' to 'tableConstant7'
// - Renamed export 'SU' to 'tableConstantNeg1'
// - Renamed export 'Ul' to 'colType'
// - Renamed export 'Ve' to 'tableConstant50b'
// - Renamed export 'Wo' to 'tableConstant15b'
// - Renamed export 'Xf' to 'addTableColumn'
// - Renamed export 'YE' to 'tableConstant1000'
// - Renamed export '_t' to 'tableConstant30'
// - Renamed export 'aC' to 'columnType'
// - Renamed export 'bv' to 'headerPropertyObj'
// - Renamed export 'c9' to 'addTableRow'
// - Renamed export 'ck' to 'spanDefaultObj'
// - Renamed export 'fr' to 'tableConstant24'
// - Renamed export 'gF' to 'setTableHeaderLine'
// - Renamed export 'id' to 'passiveEventOpts'
// - Renamed export 'jp' to 'tableConstant44b'
// - Renamed export 'jq' to 'tableConstant5'
// - Renamed export 'pK' to 'tableConstant8b'
// - Renamed export 'qJ' to 'removeTableRow'
// - Renamed export 'r3' to 'tableConstant100'
// - Renamed export 'rn' to 'rowType2'
// - Renamed export 'tt' to 'tableConstant28b'
// - Renamed export 'uX' to 'containerConstants'
// - Renamed export 'wH' to 'tableHeaderArray2'
// - Renamed export 'wh' to 'tableConstant10'
// - Renamed export 'xZ' to 'resizeColumnWidth'
// - Renamed export 'yK' to 'tableClassNames'
// - Renamed export 'zq' to 'tableConstant40'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 673543
         */
module.exports = function (module, exports, require) {
  var docTokenStyleConstants = require("doc-token-style-constants") /*id: 611528*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  let l = "col";
  let c = "row";
  let u = 100;
  let a = 50;
  let s = 8;
  let d = 1;
  let f = 2;
  let h = 3;
  let _ = 200;
  let p = 1000;
  let g = {
    TABLE_INNER_WRAPPER: "docx-table-inner-wrapper",
    SCROLLABLE_CONTENT: "table-scrollable-content",
    TABLE_SCROLLER_CLASS: docTokenStyleConstants.docSelectors.CONTENT_SCROLLER,
    TABLE_HEADER: "table-header",
    TABLE_HEADER_WRAPPER: "table-header-wrapper",
    TABLE_HEADER_FOCUSED: "table-header--focused",
    TABLE_HEADER_SELECTED: "table-header--selected",
    TABLE_HEADER_CELL_SELECTED: "table-header--cell-selected",
    TABLE_HEADER_STICKY: "sticky",
    TABLE_EQUAL_PANEL: "table-equal-panel",
    TABLE_WILL_DELETE_CELL: "table-will-delete-cell",
    TABLE_SELECTED_FROM_EQUAL: "table-selected-from-equal",
    TABLE_SELECTED: "table-selected",
    TABLE_RESIZING: "table-resizing",
    TABLE_SELECTING: "table-selecting",
    COLUMN_RESIZER: "column-resizer"
  };
  let E = [g.TABLE_HEADER, g.TABLE_EQUAL_PANEL];
  let m = [g.TABLE_HEADER];
  let b = ["code-block-zone-container", "code-block-content"];
  let v = {
    row_span: 1,
    col_span: 1
  };
  let T = "insert_table";
  let C = "resize_column_width";
  let k = "merge_cell";
  let I = "cancel_merge_cell";
  let R = "add_table_column";
  let y = "add_table_row";
  let O = "remove_table_row";
  let S = "remove_table_column";
  let A = "column";
  let L = "row";
  let N = "set-table-header-line";
  let B = -1;
  let D = 10;
  let w = 20 + s;
  let M = 15;
  let P = 15;
  let F = 7;
  let x = 5;
  let U = 3;
  let G = 8;
  let H = 4;
  let K = 50;
  let Z = {
    [tableLayoutConstants.blockPropertyKeys.HEADER_ROW]: undefined,
    [tableLayoutConstants.blockPropertyKeys.HEADER_COL]: undefined
  };
  let $ = {
    ROOT: "bear-web-x-container",
    HISTORY: "docx-history-content"
  };
  let j = 40;
  let V = 24;
  let W = 44;
  let X = 30;
  let Y = 28;
  let z = 44;
  let q = {
    passive: true
  };
  require.d(exports, {
    cancelMergeCell: function () {
      return I;
    },
    insertTable: function () {
      return T;
    },
    tableConstant4: function () {
      return H;
    },
    tableConstant15: function () {
      return P;
    },
    tableHeaderArray: function () {
      return m;
    },
    mergeCell: function () {
      return k;
    },
    tableConstant3: function () {
      return h;
    },
    codeBlockZoneArray: function () {
      return b;
    },
    tableConstant1: function () {
      return d;
    },
    removeTableColumn: function () {
      return S;
    },
    tableConstant2: function () {
      return f;
    },
    tableConstant8: function () {
      return G;
    },
    rowType: function () {
      return c;
    },
    tableConstant3b: function () {
      return U;
    },
    tableConstant44: function () {
      return z;
    },
    tableConstant28: function () {
      return Y;
    },
    tableConstant50: function () {
      return K;
    },
    tableConstant200: function () {
      return _;
    },
    tableConstant7: function () {
      return F;
    },
    tableConstantNeg1: function () {
      return B;
    },
    colType: function () {
      return l;
    },
    tableConstant50b: function () {
      return a;
    },
    tableConstant15b: function () {
      return M;
    },
    addTableColumn: function () {
      return R;
    },
    tableConstant1000: function () {
      return p;
    },
    tableConstant30: function () {
      return X;
    },
    columnType: function () {
      return A;
    },
    headerPropertyObj: function () {
      return Z;
    },
    addTableRow: function () {
      return y;
    },
    spanDefaultObj: function () {
      return v;
    },
    tableConstant24: function () {
      return V;
    },
    setTableHeaderLine: function () {
      return N;
    },
    passiveEventOpts: function () {
      return q;
    },
    tableConstant44b: function () {
      return W;
    },
    tableConstant5: function () {
      return x;
    },
    tableConstant8b: function () {
      return s;
    },
    removeTableRow: function () {
      return O;
    },
    tableConstant100: function () {
      return u;
    },
    rowType2: function () {
      return L;
    },
    tableConstant28b: function () {
      return w;
    },
    containerConstants: function () {
      return $;
    },
    tableHeaderArray2: function () {
      return E;
    },
    tableConstant10: function () {
      return D;
    },
    resizeColumnWidth: function () {
      return C;
    },
    tableClassNames: function () {
      return g;
    },
    tableConstant40: function () {
      return j;
    }
  });
}