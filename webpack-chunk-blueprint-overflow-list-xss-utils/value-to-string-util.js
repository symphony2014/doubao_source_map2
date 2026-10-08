// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toStringUtil'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 44037
         */
module.exports = function (module, exports, require) {
  var globalSymbolExport = require("global-symbol-export") /*id: 378602*/;
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var s = Infinity;
  var u = globalSymbolExport.globalSymbol ? globalSymbolExport.globalSymbol.prototype : undefined;
  var c = u ? u.toString : undefined;
  exports.toStringUtil = function e(t) {
    if (typeof t == "string") {
      return t;
    }
    if (arrayIsArrayUtil.isArray(t)) {
      return arrayMapUtil.arrayMap(t, e) + "";
    }
    if (isSymbolUtil.isSymbol(t)) {
      if (c) {
        return c.call(t);
      } else {
        return "";
      }
    }
    var n = t + "";
    if (n == "0" && 1 / t == -s) {
      return "-0";
    } else {
      return n;
    }
  };
}