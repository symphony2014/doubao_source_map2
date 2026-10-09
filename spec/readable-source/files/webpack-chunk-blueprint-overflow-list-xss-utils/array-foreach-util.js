// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createForEach'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 633499
         */
module.exports = function (module, exports, require) {
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  exports.createForEach = function (e, t) {
    return function (n, i) {
      if (n == null) {
        return n;
      }
      if (!isArrayLikeUtil.isArrayLike(n)) {
        return e(n, i);
      }
      var o = n.length;
      var a = t ? o : -1;
      var s = Object(n);
      while ((t ? a-- : ++a < o) && i(s[a], a, s) !== false);
      return n;
    };
  };
}