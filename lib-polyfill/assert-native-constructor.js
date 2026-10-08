// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'o' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 15730
         */
module.exports = function (module, exports, require) {
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var i = TypeError;
  module.exports = function (t) {
    if (nativeConstructorDetector(t)) {
      return t;
    }
    throw new i(safeStringConverter(t) + " is not a constructor");
  };
}