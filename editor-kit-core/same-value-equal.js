// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'numberIsNanPolyfill'
// - Resolved require(900430) to 'number-is-nan-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 253094
         */
module.exports = function (module, exports, require) {
  var numberIsNanPolyfill = require("number-is-nan-polyfill") /*id: 900430*/;
  module.exports = function (t, e) {
    if (t === e) {
      return t !== 0 || 1 / t == 1 / e;
    } else {
      return numberIsNanPolyfill(t) && numberIsNanPolyfill(e);
    }
  };
}