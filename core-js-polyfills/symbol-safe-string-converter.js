// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getObjectType'
// - Resolved require(786910) to 'get-object-type'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 227969
         */
module.exports = function (module, exports, require) {
  var getObjectType = require("get-object-type") /*id: 786910*/;
  var o = String;
  module.exports = function (t) {
    if (getObjectType(t) === "Symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return o(t);
  };
}