// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 162384
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util") /*id: 120433*/("%String%");
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  module.exports = function (t) {
    if (typeof t == "symbol") {
      throw new typeErrorConstructor("Cannot convert a Symbol value to a string");
    }
    return n(t);
  };
}