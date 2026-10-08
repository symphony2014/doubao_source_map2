// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayObjectForeach'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 434194
         */
module.exports = function (module, exports, require) {
  var arrayEachUtil = require("array-each-util") /*id: 42571*/;
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  var functionCoercionUtil = require("function-coercion-util") /*id: 131864*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.arrayObjectForeach = function (e, t) {
    return (arrayIsArrayUtil.isArray(e) ? arrayEachUtil.arrayEach : objectForeachUtil_1_1.objectForEach)(e, functionCoercionUtil.ensureFunction(t));
  };
}