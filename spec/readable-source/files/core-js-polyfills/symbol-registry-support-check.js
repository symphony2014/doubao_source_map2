// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolSupportDetection'
// - Resolved require(131899) to 'symbol-support-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 681317
         */
module.exports = function (module, exports, require) {
  var symbolSupportDetection = require("symbol-support-detection") /*id: 131899*/;
  module.exports = symbolSupportDetection && !!Symbol.for && !!Symbol.keyFor;
}