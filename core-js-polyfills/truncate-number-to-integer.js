// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'mathTruncPolyfill'
// - Resolved require(393887) to 'math-trunc-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 124148
         */
module.exports = function (module, exports, require) {
  var mathTruncPolyfill = require("math-trunc-polyfill") /*id: 393887*/;
  module.exports = function (t) {
    var r = +t;
    if (r != r || r === 0) {
      return 0;
    } else {
      return mathTruncPolyfill(r);
    }
  };
}