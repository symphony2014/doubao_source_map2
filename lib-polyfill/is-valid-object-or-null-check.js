// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 387146
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  module.exports = function (t) {
    return isObjectOrFunctionCheck(t) || t === null;
  };
}