// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isValidObjectOrNullCheck'
// - Resolved require(387146) to 'is-valid-object-or-null-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 498254
         */
module.exports = function (module, exports, require) {
  var isValidObjectOrNullCheck = require("is-valid-object-or-null-check") /*id: 387146*/;
  var o = String;
  var i = TypeError;
  module.exports = function (t) {
    if (isValidObjectOrNullCheck(t)) {
      return t;
    }
    throw new i("Can't set " + o(t) + " as a prototype");
  };
}