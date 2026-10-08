// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'numberIsNanPolyfill'
// - Resolved require(900430) to 'number-is-nan-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 394050
         */
module.exports = function (module, exports, require) {
  var numberIsNanPolyfill = require("number-is-nan-polyfill") /*id: 900430*/;
  module.exports = function (t) {
    return (typeof t == "number" || typeof t == "bigint") && !numberIsNanPolyfill(t) && t !== Infinity && t !== -Infinity;
  };
}