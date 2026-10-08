// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 871206
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var l = Math.floor;
  module.exports = Number.isInteger || function (U) {
    return !isObjectOrFunctionCheck(U) && isFinite(U) && l(U) === U;
  };
}