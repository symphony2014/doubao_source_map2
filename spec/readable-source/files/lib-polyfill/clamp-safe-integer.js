// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 279936
         */
module.exports = function (module, exports, require) {
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var o = Math.min;
  module.exports = function (t) {
    var r = mathTruncPolyfill_2(t);
    if (r > 0) {
      return o(r, 9007199254740991);
    } else {
      return 0;
    }
  };
}