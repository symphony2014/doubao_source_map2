// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 897814
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  exports.isNumber = function (e) {
    return typeof e == "number" || objectTypeCheck.isNonNullObject(e) && baseGetTag.baseGetTag(e) == "[object Number]";
  };
}