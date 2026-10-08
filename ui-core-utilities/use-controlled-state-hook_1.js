// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'useControlledState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 837560
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function s(e) {
    var n = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      n.current = e;
    });
    return n.current;
  }
  function c(e, n) {
    return e === n;
  }
  function u(e, n, r = {}) {
    var u = r.onChange;
    var d = r.isEqual;
    var f = d === undefined ? c : d;
    var m = r.isControlledOverride;
    var h = reactCoreLibraryReexport.useCallback(function (e) {
      if (m !== undefined) {
        return m;
      } else {
        return e !== undefined;
      }
    }, [m]);
    var p = s(n);
    var v = s(h);
    var g = reactCoreLibraryReexport.useState(h(n) ? n : e);
    var y = iterableToArrayUtil_1_1.iterableToArray(g, 2);
    var b = y[0];
    var _ = y[1];
    var w = b;
    if (h(n)) {
      w = n;
    } else if (v != null && v(p) && !h(n)) {
      w = p;
    }
    reactRefEffectUtils.useLayoutEffect(function () {
      if (v != null && v(p) && !h(n)) {
        _(p);
      }
    }, [n, h, p, v]);
    var x = reactCoreLibraryReexport.useCallback(function (e, n) {
      var r = domTypeUtils_1.isFunction(e) ? e(w) : e;
      if (!f(w, r)) {
        _(r);
        if (domTypeUtils_1.isFunction(n)) {
          n(r);
        }
        if (domTypeUtils_1.isFunction(u)) {
          u(r);
        }
      }
    }, [f, u, w]);
    return [w, x];
  }
  require.d(exports, {
    useControlledState: function () {
      return u;
    }
  });
}