// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$c' to 'tableWillDeleteCellSignal'
// - Renamed export 'Ai' to 'setTableWillDeleteCellSignal'
// - Renamed export 'n' to 'getTableWillDeleteCellSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 473863
         */
module.exports = function (module, exports, require) {
  let [n, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("table-will-delete-cell-signal");
  require.d(exports, {
    tableWillDeleteCellSignal: function () {
      return l;
    },
    setTableWillDeleteCellSignal: function () {
      return n;
    },
    getTableWillDeleteCellSignal: function () {
      return o;
    }
  });
}