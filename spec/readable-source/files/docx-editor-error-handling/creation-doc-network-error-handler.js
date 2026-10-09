// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'handleCreationDocNetworkError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 687201
         */
module.exports = function (module, exports, require) {
  var networkStateErrorHandler = require("network-state-error-handler") /*id: 309691*/;
  function o() {
    return networkStateErrorHandler.handleNetworkError(t("CreationDoc_Common_NetworkDisconnected_UnableToCreate"));
  }
  require.d(exports, {
    handleCreationDocNetworkError: function () {
      return o;
    }
  });
}