// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(237121) to 'symbol-support-check_1'
// - Renamed variable 'o' to 'regexpSymbolMatchallPolyfill'
// - Resolved require(193254) to 'regexp-symbol-matchall-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 60050
         */
module.exports = function (module, exports, require) {
  var n = require("symbol-support-check_1") /*id: 237121*/();
  var regexpSymbolMatchallPolyfill = require("regexp-symbol-matchall-polyfill") /*id: 193254*/;
  module.exports = function () {
    if (n && typeof Symbol.matchAll == "symbol" && typeof RegExp.prototype[Symbol.matchAll] == "function") {
      return RegExp.prototype[Symbol.matchAll];
    } else {
      return regexpSymbolMatchallPolyfill;
    }
  };
}