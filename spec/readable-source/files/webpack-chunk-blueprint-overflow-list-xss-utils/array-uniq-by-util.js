// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'uniqBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 235198
         */
module.exports = function (module, exports, require) {
  var setCacheImplementation = require("set-cache-implementation") /*id: 776133*/;
  var arrayIncludesNanSafe = require("array-includes-nan-safe") /*id: 105092*/;
  var arraySomeHelper = require("array-some-helper") /*id: 328501*/;
  var hasCheckUtility = require("has-check-utility") /*id: 958985*/;
  var nativeSetConstructor = require("native-set-constructor") /*id: 625743*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var collectionToArray = require("collection-to-array") /*id: 164287*/;
  var l = nativeSetConstructor.NativeSet && 1 / collectionToArray.toArray(new nativeSetConstructor.NativeSet([, -0]))[1] == Infinity ? function (e) {
    return new nativeSetConstructor.NativeSet(e);
  } : emptyExportFunction.emptyFunction;
  function f(e, t, n) {
    var s = -1;
    var u = arrayIncludesNanSafe.includesNaN;
    var f = e.length;
    var h = true;
    var d = [];
    var p = d;
    if (n) {
      h = false;
      u = arraySomeHelper.arraySome;
    } else if (f >= 200) {
      var g = t ? null : l(e);
      if (g) {
        return collectionToArray.toArray(g);
      }
      h = false;
      u = hasCheckUtility.has;
      p = new setCacheImplementation.SetCache();
    } else {
      p = t ? [] : d;
    }
    t: while (++s < f) {
      var v = e[s];
      var m = t ? t(v) : v;
      v = n || v !== 0 ? v : 0;
      if (h && m == m) {
        for (var y = p.length; y--;) {
          if (p[y] === m) {
            continue t;
          }
        }
        if (t) {
          p.push(m);
        }
        d.push(v);
      } else if (!u(p, m, n)) {
        if (p !== d) {
          p.push(m);
        }
        d.push(v);
      }
    }
    return d;
  }
  require.d(exports, {
    uniqBy: function () {
      return f;
    }
  });
}