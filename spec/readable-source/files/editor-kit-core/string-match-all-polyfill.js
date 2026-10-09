// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'stringMatchAllShim'
// - Resolved require(494358) to 'string-match-all-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 764054
         */
module.exports = function (module, exports, require) {
  var stringMatchAllShim = require("string-match-all-shim") /*id: 494358*/;
  module.exports = function () {
    if (String.prototype.matchAll) {
      try {
        "".matchAll(RegExp.prototype);
      } catch (t) {
        return String.prototype.matchAll;
      }
    }
    return stringMatchAllShim;
  };
}