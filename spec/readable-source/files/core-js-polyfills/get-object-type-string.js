// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 32151
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var o = functionBindPrototypeCheckWrapper({}.toString);
  var i = functionBindPrototypeCheckWrapper("".slice);
  module.exports = function (t) {
    return i(o(t), 8, -1);
  };
}