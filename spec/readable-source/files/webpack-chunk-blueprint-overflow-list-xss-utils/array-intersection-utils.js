// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayIntersection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 269495
         */
module.exports = function (module, exports, require) {
  var setCacheImplementation = require("set-cache-implementation") /*id: 776133*/;
  var arrayIncludesNanSafe = require("array-includes-nan-safe") /*id: 105092*/;
  var arraySomeHelper = require("array-some-helper") /*id: 328501*/;
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var hasCheckUtility = require("has-check-utility") /*id: 958985*/;
  var c = Math.min;
  exports.arrayIntersection = function (e, t, n) {
    var l = n ? arraySomeHelper.arraySome : arrayIncludesNanSafe.includesNaN;
    var f = e[0].length;
    var h = e.length;
    var d = h;
    var p = Array(h);
    var g = Infinity;
    var v = [];
    while (d--) {
      var m = e[d];
      if (d && t) {
        m = arrayMapUtil.arrayMap(m, identityWrapper.createWrapper(t));
      }
      g = c(m.length, g);
      p[d] = !n && (t || f >= 120 && m.length >= 120) ? new setCacheImplementation.SetCache(d && m) : undefined;
    }
    m = e[0];
    var y = -1;
    var b = p[0];
    t: while (++y < f && v.length < g) {
      var _ = m[y];
      var w = t ? t(_) : _;
      _ = n || _ !== 0 ? _ : 0;
      if (!(b ? hasCheckUtility.has(b, w) : l(v, w, n))) {
        for (d = h; --d;) {
          var E = p[d];
          if (!(E ? hasCheckUtility.has(E, w) : l(e[d], w, n))) {
            continue t;
          }
        }
        if (b) {
          b.push(w);
        }
        v.push(_);
      }
    }
    return v;
  };
}