// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'baseDifference'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 943312
         */
module.exports = function (module, exports, require) {
  var setCacheImplementation = require("set-cache-implementation") /*id: 776133*/;
  var arrayIncludesNanSafe = require("array-includes-nan-safe") /*id: 105092*/;
  var arraySomeHelper = require("array-some-helper") /*id: 328501*/;
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var hasCheckUtility = require("has-check-utility") /*id: 958985*/;
  exports.baseDifference = function (e, t, n, c) {
    var l = -1;
    var f = arrayIncludesNanSafe.includesNaN;
    var h = true;
    var d = e.length;
    var p = [];
    var g = t.length;
    if (!d) {
      return p;
    }
    if (n) {
      t = arrayMapUtil.arrayMap(t, identityWrapper.createWrapper(n));
    }
    if (c) {
      f = arraySomeHelper.arraySome;
      h = false;
    } else if (t.length >= 200) {
      f = hasCheckUtility.has;
      h = false;
      t = new setCacheImplementation.SetCache(t);
    }
    t: while (++l < d) {
      var v = e[l];
      var m = n == null ? v : n(v);
      v = c || v !== 0 ? v : 0;
      if (h && m == m) {
        for (var y = g; y--;) {
          if (t[y] === m) {
            continue t;
          }
        }
        p.push(v);
      } else if (!f(t, m, c)) {
        p.push(v);
      }
    }
    return p;
  };
}