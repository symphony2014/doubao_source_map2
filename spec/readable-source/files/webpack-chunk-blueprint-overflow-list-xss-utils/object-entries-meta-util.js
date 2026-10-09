// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getObjEntriesMeta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 564277
         */
module.exports = function (module, exports, require) {
  var isPrimitiveValueUtil = require("is-primitive-value-util") /*id: 862954*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  exports.getObjEntriesMeta = function (e) {
    var t = getOwnKeys.getOwnKeys(e);
    var n = t.length;
    while (n--) {
      var o = t[n];
      var a = e[o];
      t[n] = [o, a, isPrimitiveValueUtil.isPrimitiveValue(a)];
    }
    return t;
  };
}