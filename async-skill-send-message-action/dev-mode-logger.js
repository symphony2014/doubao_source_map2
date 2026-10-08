// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'devModeLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 828307
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  exports.devModeLogger = function (e) {
    if (objectPathGetDefault.getObjectPathDefault(processBrowserShim, "env.NODE_ENV") === "development") {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var s = 1;
      for (; s < t; s++) {
        n[s - 1] = arguments[s];
      }
    }
  };
}