// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'numberPrecisionHandler'
// - Resolved require(52657) to 'number-precision-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 87671
         */
module.exports = function (module, exports, require) {
  var numberPrecisionHandler = require("number-precision-handler") /*id: 52657*/;
  module.exports = Math.fround || function (t) {
    return numberPrecisionHandler(t, 1.1920928955078125e-7, 3.4028234663852886e+38, 1.1754943508222875e-38);
  };
}