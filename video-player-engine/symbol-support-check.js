// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'nativeSymbolSupportDetector'
// - Resolved require(655222) to 'native-symbol-support-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 377849
         */
module.exports = function (module, exports, require) {
  var nativeSymbolSupportDetector = require("native-symbol-support-detector") /*id: 655222*/;
  module.exports = nativeSymbolSupportDetector && !!Symbol.for && !!Symbol.keyFor;
}