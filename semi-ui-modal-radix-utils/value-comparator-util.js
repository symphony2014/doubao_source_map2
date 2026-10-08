// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'compareValues'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 142324
         */
module.exports = function (module, exports, require) {
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  exports.compareValues = function (e, t) {
    if (e !== t) {
      var n = e !== undefined;
      var r = e === null;
      var o = e == e;
      var a = isSymbolUtil.isSymbol(e);
      var s = t !== undefined;
      var l = t === null;
      var c = t == t;
      var d = isSymbolUtil.isSymbol(t);
      if (!l && !d && !a && e > t || a && s && c && !l && !d || r && s && c || !n && c || !o) {
        return 1;
      }
      if (!r && !a && !d && e < t || d && n && o && !r && !a || l && n && o || !s && o || !c) {
        return -1;
      }
    }
    return 0;
  };
}