// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 68100
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var o = 0;
  var i = Math.random();
  var u = functionBindPrototypeCheckWrapper(1 .toString);
  module.exports = function (t) {
    return "Symbol(" + (t === undefined ? "" : t) + ")_" + u(++o + i, 36);
  };
}