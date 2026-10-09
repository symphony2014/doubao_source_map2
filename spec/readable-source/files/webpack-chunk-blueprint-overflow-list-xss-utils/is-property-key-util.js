// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isPropertyKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 435695
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var a = /^\w*$/;
  exports.isPropertyKey = function (e, t) {
    if (arrayIsArrayUtil.isArray(e)) {
      return false;
    }
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || !!isSymbolUtil.isSymbol(e) || a.test(e) || !o.test(e) || t != null && e in Object(t);
  };
}