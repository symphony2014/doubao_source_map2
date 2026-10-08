// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'maxBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 997256
         */
module.exports = function (module, exports, require) {
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  exports.maxBy = function (e, t, n) {
    var r = -1;
    var o = e.length;
    while (++r < o) {
      var l = e[r];
      var a = t(l);
      if (a != null && (s === undefined ? a == a && !isSymbolUtil.isSymbol(a) : n(a, s))) {
        var s = a;
        var c = l;
      }
    }
    return c;
  };
}