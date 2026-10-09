// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isObjectFunctionOrNull'
// - Resolved require(120983) to 'is-object-function-or-null'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 168987
         */
module.exports = function (module, exports, require) {
  var isObjectFunctionOrNull = require("is-object-function-or-null") /*id: 120983*/;
  var o = String;
  var i = TypeError;
  module.exports = function (t) {
    if (isObjectFunctionOrNull(t)) {
      return t;
    }
    throw new i("Can't set " + o(t) + " as a prototype");
  };
}