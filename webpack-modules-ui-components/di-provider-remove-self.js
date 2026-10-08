// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'removeSelfProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 33297
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("remove-self");
  require.d(exports, {
    removeSelfProvider: function () {
      return o;
    }
  });
}