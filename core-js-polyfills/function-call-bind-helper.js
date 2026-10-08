// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheck'
// - Resolved require(267474) to 'function-bind-prototype-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 101483
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheck = require("function-bind-prototype-check") /*id: 267474*/;
  var o = Function.prototype.call;
  module.exports = functionBindPrototypeCheck ? o.bind(o) : function () {
    return o.apply(o, arguments);
  };
}