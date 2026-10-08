// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'setRefValue'
// - Renamed export 'qR' to 'useEffectOnce'
// - Renamed export 'rN' to 'useMergedRefs'
// - Renamed export 'FE' to 'mergeRefs'
// - Renamed export '$0' to 'useEventCallback'
// - Renamed export 'LI' to 'useLayoutEffect'
// - Renamed export 'C5' to 'canUseDom'
// - Renamed export 'dU' to 'useUpdatedRef'
// - Renamed export 'Yr' to 'isClassComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66784.0c351d11.js
         * chunkId: 66784
         * moduleId: 355121
         */
module.exports = function (module, exports, require) {
  function r() {
    return typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  }
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  var a = new WeakMap();
  function c(e, t) {
    if (typeof e == "function") {
      e(t);
    } else {
      e.current = t;
    }
  }
  function u(e, t) {
    if (e && t) {
      var n = a.get(e) || new WeakMap();
      a.set(e, n);
      var r = n.get(t) || function (n) {
        c(e, n);
        c(t, n);
      };
      n.set(t, r);
      return r;
    }
    return e || t;
  }
  function l(e) {
    if (!reactCoreLibraryReexport.isValidElement(e)) {
      return false;
    }
    var t;
    var n;
    var r = e;
    while (reactIsTypeCheckersReexport.isMemo(r)) {
      r = r.type;
    }
    var a = r.type;
    return (typeof a != "function" || (t = a.prototype) === null || t === undefined || !t.isReactComponent) && (typeof a != "function" || (n = a.prototype) !== null && n !== undefined && !!n.isReactComponent);
  }
  function s() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    if (t.length === 2) {
      return u(t[0], t[1]) || null;
    } else {
      return t.slice(1).reduce(function (e, t) {
        return u(e, t);
      }, t[0]) || null;
    }
  }
  function f() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return reactCoreLibraryReexport.useMemo(function () {
      return s.apply(undefined, t);
    }, [].concat(t));
  }
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var p = r() ? reactCoreLibraryReexport.useLayoutEffect : emptyExportFunction.emptyFunction;
  function m(e) {
    var t = reactCoreLibraryReexport.useRef(e);
    p(function () {
      t.current = e;
    });
    return reactCoreLibraryReexport.useCallback(function () {
      var e;
      var n = arguments.length;
      var r = Array(n);
      var o = 0;
      for (; o < n; o++) {
        r[o] = arguments[o];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.apply(undefined, r);
      }
    }, []);
  }
  function v(e) {
    var t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    return t;
  }
  function h(e) {
    reactCoreLibraryReexport.useEffect(e, []);
  }
  require.d(exports, {
    setRefValue: function () {
      return c;
    },
    useEffectOnce: function () {
      return h;
    },
    useMergedRefs: function () {
      return f;
    },
    mergeRefs: function () {
      return s;
    },
    useEventCallback: function () {
      return m;
    },
    useLayoutEffect: function () {
      return p;
    },
    canUseDom: function () {
      return r;
    },
    useUpdatedRef: function () {
      return v;
    },
    isClassComponent: function () {
      return l;
    }
  });
}