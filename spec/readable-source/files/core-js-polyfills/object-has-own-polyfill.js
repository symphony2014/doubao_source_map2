// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 156732
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var i = functionBindPrototypeCheckWrapper({}.hasOwnProperty);
  module.exports = Object.hasOwn || function (t, r) {
    return i(toObjectUtil(t), r);
  };
}