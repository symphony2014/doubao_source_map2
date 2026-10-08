// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$X' to 'scaleDown'
// - Renamed export 'D9' to 'usePrevious'
// - Renamed export 'DC' to 'getEventCoordinates'
// - Renamed export 'Ey' to 'useUpdatedRef'
// - Renamed export 'FJ' to 'isWindow'
// - Renamed export 'Gj' to 'useMergedRef'
// - Renamed export 'HB' to 'useComposedRef'
// - Renamed export 'IH' to 'scaleUp'
// - Renamed export 'Jj' to 'getWindow'
// - Renamed export 'LI' to 'useIsomorphicLayoutEffect'
// - Renamed export 'Ld' to 'useId'
// - Renamed export 'Nq' to 'canUseDom'
// - Renamed export 'Re' to 'isHTMLElement'
// - Renamed export 'UG' to 'isNode'
// - Renamed export 'Yz' to 'useInterval'
// - Renamed export 'qk' to 'isDocument'
// - Renamed export 'r3' to 'getDocument'
// - Renamed export 'so' to 'findFirstFocusable'
// - Renamed export 'ux' to 'TransformUtils'
// - Renamed export 'vZ' to 'isSVGElement'
// - Renamed export 'vd' to 'isKeyboardEvent'
// - Renamed export 'wm' to 'useRefWithCallback'
// - Renamed export 'zX' to 'useEventCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27079.aa80b040.js
         * chunkId: 27079
         * moduleId: 92997
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return reactCoreLibraryReexport.useMemo(() => e => {
      t.forEach(t => t(e));
    }, t);
  }
  let a = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  function l(e) {
    let t = Object.prototype.toString.call(e);
    return t === "[object Window]" || t === "[object global]";
  }
  function o(e) {
    return "nodeType" in e;
  }
  function s(e) {
    var t;
    var n;
    if (e) {
      if (l(e)) {
        return e;
      } else if (o(e) && (t = (n = e.ownerDocument) == null ? undefined : n.defaultView) != null) {
        return t;
      } else {
        return window;
      }
    } else {
      return window;
    }
  }
  function u(e) {
    let {
      Document: t
    } = s(e);
    return e instanceof t;
  }
  function d(e) {
    return !l(e) && e instanceof s(e).HTMLElement;
  }
  function c(e) {
    return e instanceof s(e).SVGElement;
  }
  function h(e) {
    if (e) {
      if (l(e)) {
        return e.document;
      } else if (o(e)) {
        if (u(e)) {
          return e;
        } else if (d(e)) {
          return e.ownerDocument;
        } else {
          return document;
        }
      } else {
        return document;
      }
    } else {
      return document;
    }
  }
  let p = a ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  function f(e) {
    let t = reactCoreLibraryReexport.useRef(e);
    p(() => {
      t.current = e;
    });
    return reactCoreLibraryReexport.useCallback(function () {
      var e = arguments.length;
      var n = Array(e);
      var r = 0;
      for (; r < e; r++) {
        n[r] = arguments[r];
      }
      if (t.current == null) {
        return undefined;
      } else {
        return t.current(...n);
      }
    }, []);
  }
  function g() {
    let e = reactCoreLibraryReexport.useRef(null);
    return [reactCoreLibraryReexport.useCallback((t, n) => {
      e.current = setInterval(t, n);
    }, []), reactCoreLibraryReexport.useCallback(() => {
      if (e.current !== null) {
        clearInterval(e.current);
        e.current = null;
      }
    }, [])];
  }
  function v(e, t = [e]) {
    let n = reactCoreLibraryReexport.useRef(e);
    p(() => {
      if (n.current !== e) {
        n.current = e;
      }
    }, t);
    return n;
  }
  function b(e, t) {
    let n = reactCoreLibraryReexport.useRef();
    return reactCoreLibraryReexport.useMemo(() => {
      let t = e(n.current);
      n.current = t;
      return t;
    }, [...t]);
  }
  function m(e) {
    let t = f(e);
    let n = reactCoreLibraryReexport.useRef(null);
    let i = reactCoreLibraryReexport.useCallback(e => {
      if (e !== n.current) {
        if (t != null) {
          t(e, n.current);
        }
      }
      n.current = e;
    }, []);
    return [n, i];
  }
  function y(e) {
    let t = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      t.current = e;
    }, [e]);
    return t.current;
  }
  let x = {};
  function E(e, t) {
    return reactCoreLibraryReexport.useMemo(() => {
      if (t) {
        return t;
      }
      let n = x[e] == null ? 0 : x[e] + 1;
      x[e] = n;
      return e + "-" + n;
    }, [e, t]);
  }
  function w(e) {
    return function (t) {
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var i = 1;
      for (; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      return r.reduce((t, n) => {
        for (let [r, i] of Object.entries(n)) {
          let n = t[r];
          if (n != null) {
            t[r] = n + e * i;
          }
        }
        return t;
      }, {
        ...t
      });
    };
  }
  let C = w(1);
  let D = w(-1);
  function k(e) {
    if (!e) {
      return false;
    }
    let {
      KeyboardEvent: t
    } = s(e.target);
    return t && e instanceof t;
  }
  function S(e) {
    if (function (e) {
      if (!e) {
        return false;
      }
      let {
        TouchEvent: t
      } = s(e.target);
      return t && e instanceof t;
    }(e)) {
      if (e.touches && e.touches.length) {
        let {
          clientX: t,
          clientY: n
        } = e.touches[0];
        return {
          x: t,
          y: n
        };
      }
      if (e.changedTouches && e.changedTouches.length) {
        let {
          clientX: t,
          clientY: n
        } = e.changedTouches[0];
        return {
          x: t,
          y: n
        };
      }
    }
    if ("clientX" in e && "clientY" in e) {
      return {
        x: e.clientX,
        y: e.clientY
      };
    } else {
      return null;
    }
  }
  let T = Object.freeze({
    Translate: {
      toString(e) {
        if (!e) {
          return;
        }
        let {
          x: t,
          y: n
        } = e;
        return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
      }
    },
    Scale: {
      toString(e) {
        if (!e) {
          return;
        }
        let {
          scaleX: t,
          scaleY: n
        } = e;
        return "scaleX(" + t + ") scaleY(" + n + ")";
      }
    },
    Transform: {
      toString(e) {
        if (e) {
          return [T.Translate.toString(e), T.Scale.toString(e)].join(" ");
        }
      }
    },
    Transition: {
      toString(e) {
        let {
          property: t,
          duration: n,
          easing: r
        } = e;
        return t + " " + n + "ms " + r;
      }
    }
  });
  let _ = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
  function M(e) {
    if (e.matches(_)) {
      return e;
    } else {
      return e.querySelector(_);
    }
  }
  require.d(exports, {
    scaleDown: function () {
      return D;
    },
    usePrevious: function () {
      return y;
    },
    getEventCoordinates: function () {
      return S;
    },
    useUpdatedRef: function () {
      return v;
    },
    isWindow: function () {
      return l;
    },
    useMergedRef: function () {
      return b;
    },
    useComposedRef: function () {
      return i;
    },
    scaleUp: function () {
      return C;
    },
    getWindow: function () {
      return s;
    },
    useIsomorphicLayoutEffect: function () {
      return p;
    },
    useId: function () {
      return E;
    },
    canUseDom: function () {
      return a;
    },
    isHTMLElement: function () {
      return d;
    },
    isNode: function () {
      return o;
    },
    useInterval: function () {
      return g;
    },
    isDocument: function () {
      return u;
    },
    getDocument: function () {
      return h;
    },
    findFirstFocusable: function () {
      return M;
    },
    TransformUtils: function () {
      return T;
    },
    isSVGElement: function () {
      return c;
    },
    isKeyboardEvent: function () {
      return k;
    },
    useRefWithCallback: function () {
      return m;
    },
    useEventCallback: function () {
      return f;
    }
  });
}