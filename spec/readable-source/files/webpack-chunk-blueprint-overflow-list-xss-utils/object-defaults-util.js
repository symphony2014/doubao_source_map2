// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'defaults'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 679337
         */
module.exports = function (module, exports, require) {
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  var s = Object.prototype;
  var u = s.hasOwnProperty;
  var c = throttledArgStringUtil.throttledStringify(function (e, t) {
    e = Object(e);
    var n = -1;
    var r = t.length;
    var c = r > 2 ? t[2] : undefined;
    for (c && verifyPropertyMatch.checkPropertyValue(t[0], t[1], c) && (r = 1); ++n < r;) {
      var l = t[n];
      var f = getOwnKeysUtil_1.getOwnKeys(l);
      var h = -1;
      var d = f.length;
      while (++h < d) {
        var p = f[h];
        var g = e[p];
        if (g === undefined || isEqualUtil.isEqual(g, s[p]) && !u.call(e, p)) {
          e[p] = l[p];
        }
      }
    }
    return e;
  });
  exports.defaults = c;
}