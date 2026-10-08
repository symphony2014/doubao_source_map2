// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getPrecision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 331143
         */
module.exports = function (module, exports, require) {
  var numberExponentExtractor = require("number-exponent-extractor") /*id: 597434*/;
  function r(t, n) {
    n = Math.abs(n) - (t = Math.abs(t));
    return Math.max(0, numberExponentExtractor.getNumberExponent(n) - numberExponentExtractor.getNumberExponent(t)) + 1;
  }
  require.d(exports, {
    getPrecision: function () {
      return r;
    }
  });
}