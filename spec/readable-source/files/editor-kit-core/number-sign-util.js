// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'numberIsNanPolyfill'
// - Resolved require(900430) to 'number-is-nan-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 398736
         */
module.exports = function (module, exports, require) {
  var numberIsNanPolyfill = require("number-is-nan-polyfill") /*id: 900430*/;
  module.exports = function (t) {
    if (numberIsNanPolyfill(t) || t === 0) {
      return t;
    } else if (t < 0) {
      return -1;
    } else {
      return 1;
    }
  };
}