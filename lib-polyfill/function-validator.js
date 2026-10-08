// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'o' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 599706
         */
module.exports = function (module, exports, require) {
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var i = TypeError;
  module.exports = function (t) {
    if (isFunctionPolyfill(t)) {
      return t;
    }
    throw new i(safeStringConverter(t) + " is not a function");
  };
}