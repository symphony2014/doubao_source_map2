// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheck'
// - Resolved require(267474) to 'function-bind-prototype-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 338469
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheck = require("function-bind-prototype-check") /*id: 267474*/;
  var o = Function.prototype;
  var i = o.apply;
  var u = o.call;
  module.exports = typeof Reflect == "object" && Reflect.apply || (functionBindPrototypeCheck ? u.bind(i) : function () {
    return u.apply(i, arguments);
  });
}