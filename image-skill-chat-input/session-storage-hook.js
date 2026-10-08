// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useSessionStorage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 669012
         */
module.exports = function (module, exports, require) {
  var reactStorageStateHook = require("react-storage-state-hook") /*id: 452169*/;
  var browserDomCheck = require("browser-dom-check") /*id: 38090*/;
  var a = reactStorageStateHook.usePersistedState(function () {
    if (browserDomCheck.isBrowserDom) {
      return sessionStorage;
    } else {
      return undefined;
    }
  });
  exports.useSessionStorage = a;
}