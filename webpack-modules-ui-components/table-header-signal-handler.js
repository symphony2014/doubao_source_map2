// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'headerClickSignal'
// - Renamed export 'Z' to 'setHeaderSelect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 372752
         */
module.exports = function (module, exports, require) {
  var tableHeaderClickSignalHandler = require("table-header-click-signal-handler") /*id: 114441*/;
  var tableHeaderSelectingSignal = require("table-header-selecting-signal") /*id: 361769*/;
  require.d(exports, {
    headerClickSignal: function () {
      return tableHeaderClickSignalHandler.tableHeaderClickSignal;
    },
    setHeaderSelect: function () {
      return tableHeaderSelectingSignal.setTableHeaderSelect;
    }
  });
}