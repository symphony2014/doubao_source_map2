// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V8' to 'tableHeaderSignal'
// - Renamed export 'Zt' to 'setTableHeaderSelect'
// - Renamed export 'uR' to 'tableHeaderSelecting'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 361769
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("table-header-selecting-change-signal");
  require.d(exports, {
    tableHeaderSignal: function () {
      return l;
    },
    setTableHeaderSelect: function () {
      return o;
    },
    tableHeaderSelecting: function () {
      return r;
    }
  });
}