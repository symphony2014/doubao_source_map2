// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useLocalStorageState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 429278
         */
module.exports = function (module, exports, require) {
  var reactStorageStateHook = require("react-storage-state-hook") /*id: 452169*/;
  var browserDomCheck = require("browser-dom-check") /*id: 38090*/;
  var o = reactStorageStateHook.usePersistedState(function () {
    if (browserDomCheck.isBrowserDom) {
      return localStorage;
    } else {
      return undefined;
    }
  });
  exports.useLocalStorageState = o;
}