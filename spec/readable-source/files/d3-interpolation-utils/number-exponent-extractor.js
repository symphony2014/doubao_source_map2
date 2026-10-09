// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getNumberExponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 597434
         */
module.exports = function (module, exports, require) {
  var numberFormatUtils_1 = require("number-format-utils_1") /*id: 167595*/;
  function r(t) {
    if (t = numberFormatUtils_1.parseExponential(Math.abs(t))) {
      return t[1];
    } else {
      return NaN;
    }
  }
  require.d(exports, {
    getNumberExponent: function () {
      return r;
    }
  });
}