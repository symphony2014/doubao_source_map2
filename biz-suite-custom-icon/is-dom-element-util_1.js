// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isDomElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 425304
         */
module.exports = function (module, exports, require) {
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  exports.isDomElement = function (e) {
    return objectTypeCheck.isNonNullObject(e) && e.nodeType === 1 && !isPlainObjectUtil.isPlainObject(e);
  };
}