// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 536844
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  module.exports = function (t) {
    if (t == null) {
      throw new typeErrorConstructor(arguments.length > 0 && arguments[1] || "Cannot call method on " + t);
    }
    return t;
  };
}