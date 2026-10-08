// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'getFileExtension'
// - Renamed export 'x' to 'getSupportedExtensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 841327
         */
module.exports = function (module, exports, require) {
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  function r() {
    return supportedFileExtensionsUtility.getSupportedFileExtensions();
  }
  function a(e) {
    var t;
    return (e == null ? undefined : (t = e.split(".").pop()) === null || t === undefined ? undefined : t.toLowerCase()) || "";
  }
  require.d(exports, {
    getFileExtension: function () {
      return a;
    },
    getSupportedExtensions: function () {
      return r;
    }
  });
}