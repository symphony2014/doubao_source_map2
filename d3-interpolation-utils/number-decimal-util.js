// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getDecimalPlaces'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 658331
         */
module.exports = function (module, exports, require) {
  var numberExponentExtractor = require("number-exponent-extractor") /*id: 597434*/;
  function r(t) {
    return Math.max(0, -numberExponentExtractor.getNumberExponent(Math.abs(t)));
  }
  require.d(exports, {
    getDecimalPlaces: function () {
      return r;
    }
  });
}