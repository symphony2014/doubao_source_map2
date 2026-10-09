// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'valueToString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 59353
         */
module.exports = function (module, exports, require) {
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var i = Infinity;
  exports.valueToString = function (e) {
    if (typeof e == "string" || isSymbolUtil.isSymbol(e)) {
      return e;
    }
    var t = e + "";
    if (t == "0" && 1 / e == -i) {
      return "-0";
    } else {
      return t;
    }
  };
}