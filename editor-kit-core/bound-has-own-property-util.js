// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'functionBindPolyfill_1'
// - Resolved require(633877) to 'function-bind-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 495924
         */
module.exports = function (module, exports, require) {
  var n = Function.prototype.call;
  var o = Object.prototype.hasOwnProperty;
  var functionBindPolyfill_1 = require("function-bind-polyfill_1") /*id: 633877*/;
  module.exports = functionBindPolyfill_1.call(n, o);
}