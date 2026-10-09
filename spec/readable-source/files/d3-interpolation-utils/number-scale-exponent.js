// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getScaleExponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 442633
         */
module.exports = function (module, exports, require) {
  var numberExponentExtractor = require("number-exponent-extractor") /*id: 597434*/;
  function r(t, n) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(numberExponentExtractor.getNumberExponent(n) / 3))) * 3 - numberExponentExtractor.getNumberExponent(Math.abs(t)));
  }
  require.d(exports, {
    getScaleExponent: function () {
      return r;
    }
  });
}