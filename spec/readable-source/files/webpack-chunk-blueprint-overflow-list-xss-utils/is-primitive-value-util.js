// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isPrimitiveValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 862954
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  exports.isPrimitiveValue = function (e) {
    return e == e && !isObjectOrFunction_1_1.isObjectOrFunction(e);
  };
}