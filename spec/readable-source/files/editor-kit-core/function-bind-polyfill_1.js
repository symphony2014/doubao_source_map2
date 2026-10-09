// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindPolyfill'
// - Resolved require(715444) to 'function-bind-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 633877
         */
module.exports = function (module, exports, require) {
  var functionBindPolyfill = require("function-bind-polyfill") /*id: 715444*/;
  module.exports = Function.prototype.bind || functionBindPolyfill;
}