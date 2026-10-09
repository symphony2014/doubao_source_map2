// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arrayIsArrayPolyfillReexport'
// - Resolved require(882213) to 'array-is-array-polyfill-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 128599
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayPolyfillReexport = require("array-is-array-polyfill-reexport") /*id: 882213*/;
  module.exports = function (t) {
    if (arrayIsArrayPolyfillReexport(t)) {
      return t;
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}