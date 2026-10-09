// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OA' to 'removeTableRowsOrColumns'
// - Renamed export 'gt' to 'canRemoveTableRows'
// - Renamed export 'lF' to 'canRemoveTableColumns'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 956168
         */
module.exports = function (module, exports, require) {
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var applyDeleteRevisionTransaction = require("apply-delete-revision-transaction") /*id: 904375*/;
  var emptyTextCheck = require("empty-text-check") /*id: 193795*/;
  function a(e) {
    return e.cellId !== e.sourceCellId;
  }
  function c(e, l = tableLayoutConstants_1.columnType) {
    let {
      blockManager: o,
      tableId: r,
      target: c,
      layoutInfo: u
    } = e;
    let d = o.getRecordByBlockId(r);
    if (!d) {
      return false;
    }
    let s = l === tableLayoutConstants_1.columnType;
    let p = s ? tableLayoutConstants_1.rowType2 : tableLayoutConstants_1.columnType;
    let b = d.snapshot;
    let h = b[`${p}s_id`];
    for (let e of c) {
      if (!h.every((l, n) => {
        let r = s ? n : e;
        let c = s ? e : n;
        if (a(u[r][c])) {
          return true;
        }
        let d = `${b.rows_id[r]}${b.columns_id[c]}`;
        return function (e, l) {
          let o = e.getBlockModelsByRecordId(l)[0];
          if (!o) {
            return false;
          }
          let {
            children: n
          } = o.snapshot;
          if (n.length > 1) {
            return false;
          }
          let r = e.getBlockModelsByRecordId(n[0])[0];
          return !!r && emptyTextCheck.isEmptyTextModel(r);
        }(o, b.cell_set[d].block_id);
      })) {
        return false;
      }
    }
    return true;
  }
  function u(e, l = tableLayoutConstants_1.columnType) {
    let {
      blockManager: o,
      tableId: r,
      target: i,
      layoutInfo: c
    } = e;
    let u = o.getRecordByBlockId(r);
    if (!u) {
      return [];
    }
    let d = l === tableLayoutConstants_1.columnType;
    let s = d ? tableLayoutConstants_1.rowType2 : tableLayoutConstants_1.columnType;
    let p = u.snapshot;
    let b = p[`${s}s_id`];
    let h = [];
    for (let e of i) {
      let l = b.map((l, n) => {
        let r = d ? n : e;
        let i = d ? e : n;
        if (a(c[r][i])) {
          return null;
        }
        let u = `${p.rows_id[r]}${p.columns_id[i]}`;
        let s = p.cell_set[u].block_id;
        return o.getBlockViewsByRecordId(s)[0];
      }).filter(e => !!e);
      h.push(...l);
    }
    return h;
  }
  let d = e => c(e, tableLayoutConstants_1.columnType);
  let s = e => c(e, tableLayoutConstants_1.rowType2);
  let p = e => u(e, tableLayoutConstants_1.columnType);
  let b = e => u(e, tableLayoutConstants_1.rowType2);
  async function h(e, l, o, i) {
    if (!e.config.get("revising")) {
      return false;
    }
    let a = i ? tableLayoutConstants_1.removeTableColumn : tableLayoutConstants_1.removeTableRow;
    if (i && !d(o)) {
      let n = p(o);
      return await applyDeleteRevisionTransaction.applyDeleteRevisionTransaction(e, l, n, a);
    }
    if (!i && !s(o)) {
      let n = b(o);
      return await applyDeleteRevisionTransaction.applyDeleteRevisionTransaction(e, l, n, a);
    }
    return false;
  }
  require.d(exports, {
    removeTableRowsOrColumns: function () {
      return h;
    },
    canRemoveTableRows: function () {
      return s;
    },
    canRemoveTableColumns: function () {
      return d;
    }
  });
}