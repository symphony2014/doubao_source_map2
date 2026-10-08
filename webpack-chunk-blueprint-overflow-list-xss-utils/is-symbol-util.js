// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 994674
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  exports.isSymbol = function (e) {
    return typeof e == "symbol" || objectTypeCheck.isNonNullObject(e) && baseGetTag.baseGetTag(e) == "[object Symbol]";
  };
}