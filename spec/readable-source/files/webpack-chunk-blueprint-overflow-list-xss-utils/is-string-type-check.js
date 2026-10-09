// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 253558
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  exports.isString = function (e) {
    return typeof e == "string" || !arrayIsArrayUtil.isArray(e) && objectTypeCheck.isNonNullObject(e) && baseGetTag.baseGetTag(e) == "[object String]";
  };
}