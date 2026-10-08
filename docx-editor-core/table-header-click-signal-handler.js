// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GR' to 'tableHeaderClickSignal'
// - Renamed export 'bV' to 'tableHeaderClickSignalSetter'
// - Renamed export 'n' to 'tableHeaderClickSignalValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 114441
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("table-header-click-signal");
  require.d(exports, {
    tableHeaderClickSignal: function () {
      return o;
    },
    tableHeaderClickSignalSetter: function () {
      return l;
    },
    tableHeaderClickSignalValue: function () {
      return r;
    }
  });
}