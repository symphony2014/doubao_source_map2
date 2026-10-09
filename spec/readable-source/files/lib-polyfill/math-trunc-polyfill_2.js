// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathTruncPolyfill_1'
// - Resolved require(20380) to 'math-trunc-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 114774
         */
module.exports = function (module, exports, require) {
  var mathTruncPolyfill_1 = require("math-trunc-polyfill_1") /*id: 20380*/;
  module.exports = function (t) {
    var r = +t;
    if (r != r || r === 0) {
      return 0;
    } else {
      return mathTruncPolyfill_1(r);
    }
  };
}