// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getClientProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 503677
         */
module.exports = function (module, exports, require) {
  var clientVarProviderName = require("client-var-provider-name") /*id: 399717*/;
  require.d(exports, {
    getClientProvider: function () {
      return clientVarProviderName.clientVarProvider;
    }
  });
}