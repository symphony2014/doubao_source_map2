// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledArgVerify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 680343
         */
module.exports = function (module, exports, require) {
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  exports.throttledArgVerify = function (e) {
    return throttledArgStringUtil.throttledStringify(function (t, n) {
      var r = -1;
      var o = n.length;
      var a = o > 1 ? n[o - 1] : undefined;
      var s = o > 2 ? n[2] : undefined;
      a = e.length > 3 && typeof a == "function" ? (o--, a) : undefined;
      if (s && verifyPropertyMatch.checkPropertyValue(n[0], n[1], s)) {
        a = o < 3 ? undefined : a;
        o = 1;
      }
      t = Object(t);
      while (++r < o) {
        var u = n[r];
        if (u) {
          e(t, u, r, a);
        }
      }
      return t;
    });
  };
}