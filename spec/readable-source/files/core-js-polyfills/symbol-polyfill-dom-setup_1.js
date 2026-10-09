// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolPolyfillSetup'
// - Resolved require(223266) to 'symbol-polyfill-setup'
// - Resolved require(983774) to 'function-metadata-init'
// - Resolved require(715480) to 'symbol-async-dispose-define'
// - Resolved require(404987) to 'symbol-dispose-define'
// - Resolved require(998790) to 'symbol-well-known-metadata-registry-setter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 181981
         */
module.exports = function (module, exports, require) {
  var symbolPolyfillSetup = require("symbol-polyfill-setup") /*id: 223266*/;
  require("function-metadata-init") /*id: 983774*/;
  require("symbol-async-dispose-define") /*id: 715480*/;
  require("symbol-dispose-define") /*id: 404987*/;
  require("symbol-well-known-metadata-registry-setter") /*id: 998790*/;
  module.exports = symbolPolyfillSetup;
}