// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 570114
         */
module.exports = function (module, exports, require) {
  var objectForeachHelper = require("object-foreach-helper") /*id: 629345*/;
  var functionCoercionUtil = require("function-coercion-util") /*id: 131864*/;
  exports.getProperty = function (t, e) {
    return t && objectForeachHelper.createObjectForEach(t, functionCoercionUtil.ensureFunction(e));
  };
}