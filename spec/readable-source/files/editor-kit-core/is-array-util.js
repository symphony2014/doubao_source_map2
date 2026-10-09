// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(120433) to 'get-intrinsic-util'
// - Resolved require(187792) to 'get-intrinsic-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 983450
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util") /*id: 120433*/("%Array%");
  var o = !n.isArray && require("get-intrinsic-safe") /*id: 187792*/("Object.prototype.toString");
  module.exports = n.isArray || function (t) {
    return o(t) === "[object Array]";
  };
}