// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'phoenixChildDocName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 775799
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("phoenix-new-child-doc");
  require.d(exports, {
    phoenixChildDocName: function () {
      return o;
    }
  });
}