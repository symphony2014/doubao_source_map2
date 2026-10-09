// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'nativeSymbolSupportDetector'
// - Resolved require(655222) to 'native-symbol-support-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 418662
         */
module.exports = function (module, exports, require) {
  var nativeSymbolSupportDetector = require("native-symbol-support-detector") /*id: 655222*/;
  module.exports = nativeSymbolSupportDetector && !Symbol.sham && typeof Symbol.iterator == "symbol";
}