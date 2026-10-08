// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createForEach'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 529626
         */
module.exports = function (module, exports, require) {
  var objectForeachUtil_1 = require("object-foreach-util_1") /*id: 240439*/;
  var functionCoercionUtil = require("function-coercion-util") /*id: 131864*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  exports.createForEach = function (e, t) {
    if (e == null) {
      return e;
    } else {
      return objectForeachUtil_1.createForEach(e, functionCoercionUtil.ensureFunction(t), getOwnKeysUtil_1.getOwnKeys);
    }
  };
}