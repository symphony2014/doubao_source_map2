// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 120983
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  module.exports = function (t) {
    return isObjectOrFunction_1(t) || t === null;
  };
}