// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useRefSync'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 205347
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(e, t) {
    if (typeof e == "function") {
      e(t);
    } else if (e) {
      e.current = t;
    }
    return e;
  }
  var i = typeof window != "undefined" ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  var s = new WeakMap();
  function l(e, t) {
    var n;
    var l;
    var a;
    n = t || null;
    l = function (t) {
      return e.forEach(function (e) {
        return r(e, t);
      });
    };
    (a = reactCoreLibraryReexport.useState(function () {
      return {
        value: n,
        callback: l,
        facade: {
          get current() {
            return a.value;
          },
          set current(value) {
            var e = a.value;
            if (e !== value) {
              a.value = value;
              a.callback(value, e);
            }
          }
        }
      };
    })[0]).callback = l;
    var c = a.facade;
    i(function () {
      var t = s.get(c);
      if (t) {
        var n = new Set(t);
        var o = new Set(e);
        var i = c.current;
        n.forEach(function (e) {
          if (!o.has(e)) {
            r(e, null);
          }
        });
        o.forEach(function (e) {
          if (!n.has(e)) {
            r(e, i);
          }
        });
      }
      s.set(c, e);
    }, [e]);
    return c;
  }
  require.d(exports, {
    useRefSync: function () {
      return l;
    }
  });
}