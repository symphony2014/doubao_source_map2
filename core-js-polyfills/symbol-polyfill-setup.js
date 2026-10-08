// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolPolyfillBundle_1'
// - Resolved require(505557) to 'symbol-polyfill-bundle_1'
// - Resolved require(841154) to 'dom-interface-setup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 223266
         */
module.exports = function (module, exports, require) {
  var symbolPolyfillBundle_1 = require("symbol-polyfill-bundle_1") /*id: 505557*/;
  require("dom-interface-setup") /*id: 841154*/;
  module.exports = symbolPolyfillBundle_1;
}