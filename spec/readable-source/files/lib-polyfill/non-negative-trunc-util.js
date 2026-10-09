// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 870777
         */
module.exports = function (module, exports, require) {
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var o = RangeError;
  module.exports = function (t) {
    var r = mathTruncPolyfill_2(t);
    if (r < 0) {
      throw new o("The argument can't be less than 0");
    }
    return r;
  };
}