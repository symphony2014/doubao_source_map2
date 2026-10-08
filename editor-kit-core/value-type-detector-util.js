// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 292559
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t) {
    if (t === null) {
      return "Null";
    } else if (t === undefined) {
      return "Undefined";
    } else if (isObjectOrFunction(t)) {
      return "Object";
    } else if (typeof t == "number") {
      return "Number";
    } else if (typeof t == "boolean") {
      return "Boolean";
    } else if (typeof t == "string") {
      return "String";
    } else {
      return undefined;
    }
  };
}