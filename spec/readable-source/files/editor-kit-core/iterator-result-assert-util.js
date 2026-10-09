// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 392989
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  module.exports = function (t, e) {
    if (typeof e != "boolean") {
      throw new typeErrorConstructor("Assertion failed: Type(done) is not Boolean");
    }
    return {
      value: t,
      done: e
    };
  };
}