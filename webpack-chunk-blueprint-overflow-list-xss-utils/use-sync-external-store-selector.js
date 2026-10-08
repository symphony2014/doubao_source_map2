// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isObjectOrFunctionCheck_1'
// - Resolved require(8406) to 'is-object-or-function-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 346562
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isObjectOrFunctionCheck_1 = require("is-object-or-function-check_1") /*id: 8406*/;
  var o = typeof Object.is == "function" ? Object.is : function (e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
  };
  var a = isObjectOrFunctionCheck_1.useSyncExternalStore;
  var s = reactCoreLibraryReexport.useRef;
  var u = reactCoreLibraryReexport.useEffect;
  var c = reactCoreLibraryReexport.useMemo;
  var l = reactCoreLibraryReexport.useDebugValue;
  exports.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var f = s(null);
    if (f.current === null) {
      var h = {
        hasValue: false,
        value: null
      };
      f.current = h;
    } else {
      h = f.current;
    }
    var d = a(e, (f = c(function () {
      function e(e) {
        if (!u) {
          u = true;
          a = e;
          e = r(e);
          if (i !== undefined && h.hasValue) {
            var t = h.value;
            if (i(t, e)) {
              return s = t;
            }
          }
          return s = e;
        }
        t = s;
        if (o(a, e)) {
          return t;
        }
        var n = r(e);
        if (i !== undefined && i(t, n)) {
          return t;
        } else {
          a = e;
          return s = n;
        }
      }
      var a;
      var s;
      var u = false;
      var c = n === undefined ? null : n;
      return [function () {
        return e(t());
      }, c === null ? undefined : function () {
        return e(c());
      }];
    }, [t, n, r, i]))[0], f[1]);
    u(function () {
      h.hasValue = true;
      h.value = d;
    }, [d]);
    l(d);
    return d;
  };
}