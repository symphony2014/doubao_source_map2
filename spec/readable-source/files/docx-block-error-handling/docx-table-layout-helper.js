// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'createTableSnapshot'
// - Renamed export 'P' to 'getMergedCellIds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 382662
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  function c(e, n) {
    let o = deepCloneWrapper_1.deepClone(n);
    let {
      rows_id: c,
      columns_id: l
    } = o;
    return {
      tableId: e,
      tableSnapshot: o,
      rowIds: c,
      colIds: l,
      cellsLayout: docxTableLayoutUtils.getTableLayoutInfo(o)
    };
  }
  function l(e) {
    let n = new Set();
    docxTableLayoutUtils.getTableLayoutInfo(e, e => {
      if (e.cellId !== e.sourceCellId) {
        n.add(e.cellRecordId);
      }
    });
    return n;
  }
  require.d(exports, {
    createTableSnapshot: function () {
      return c;
    },
    getMergedCellIds: function () {
      return l;
    }
  });
}