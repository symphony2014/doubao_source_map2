// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 560205
         */
module.exports = function (module, exports, require) {
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  module.exports = function (t, r) {
    if (t === undefined) {
      if (arguments.length < 2) {
        return "";
      } else {
        return r;
      }
    } else {
      return symbolToStringConverter_1(t);
    }
  };
}