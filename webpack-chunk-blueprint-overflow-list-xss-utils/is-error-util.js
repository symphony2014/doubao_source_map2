// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 597114
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  exports.isError = function (e) {
    if (!objectTypeCheck.isNonNullObject(e)) {
      return false;
    }
    var t = baseGetTag.baseGetTag(e);
    return t == "[object Error]" || t == "[object DOMException]" || typeof e.message == "string" && typeof e.name == "string" && !isPlainObjectUtil.isPlainObject(e);
  };
}