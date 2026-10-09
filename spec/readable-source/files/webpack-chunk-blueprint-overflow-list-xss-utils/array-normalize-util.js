// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'normalizeArrayData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 465173
         */
module.exports = function (module, exports, require) {
  var arrayAppendUtil = require("array-append-util") /*id: 332715*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.normalizeArrayData = function (e, t, n) {
    var o = t(e);
    if (arrayIsArrayUtil.isArray(e)) {
      return o;
    } else {
      return arrayAppendUtil.appendArrayElements(o, n(e));
    }
  };
}