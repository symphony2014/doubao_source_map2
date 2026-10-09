// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'shortcutServiceToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 799059
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("keyboard-shortcut-service");
  require.d(exports, {
    shortcutServiceToken: function () {
      return o;
    }
  });
}