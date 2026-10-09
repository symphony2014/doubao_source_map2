// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cp' to 'hideMiddleware'
// - Renamed export 'RR' to 'flipMiddleware'
// - Renamed export 'YF' to 'useFloating'
// - Renamed export 'cv' to 'offsetMiddleware'
// - Renamed export 'dp' to 'sizeMiddleware'
// - Renamed export 'dr' to 'innerMiddleware'
// - Renamed export 'uY' to 'shiftMiddleware'
// - Renamed export 'x7' to 'arrowMiddleware'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 965218
         */
module.exports = function (module, exports, require) {
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var a = typeof document != "undefined" ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  function s(e, t) {
    let n;
    let r;
    let i;
    if (e === t) {
      return true;
    }
    if (typeof e != typeof t) {
      return false;
    }
    if (typeof e == "function" && e.toString() === t.toString()) {
      return true;
    }
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if ((n = e.length) !== t.length) {
          return false;
        }
        for (r = n; r-- != 0;) {
          if (!s(e[r], t[r])) {
            return false;
          }
        }
        return true;
      }
      if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) {
        return false;
      }
      for (r = n; r-- != 0;) {
        if (!{}.hasOwnProperty.call(t, i[r])) {
          return false;
        }
      }
      for (r = n; r-- != 0;) {
        let n = i[r];
        if ((n !== "_owner" || !e.$$typeof) && !s(e[n], t[n])) {
          return false;
        }
      }
      return true;
    }
    return e != e && t != t;
  }
  function u(e) {
    if (typeof window == "undefined") {
      return 1;
    } else {
      return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
  }
  function c(e, t) {
    let n = u(e);
    return Math.round(t * n) / n;
  }
  function l(e) {
    let t = reactCoreLibraryReexport.useRef(e);
    a(() => {
      t.current = e;
    });
    return t;
  }
  function f(e = {}) {
    let {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: f = [],
      platform: h,
      elements: {
        reference: d,
        floating: p
      } = {},
      transform: g = true,
      whileElementsMounted: v,
      open: m
    } = e;
    let [y, b] = reactCoreLibraryReexport.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: false
    });
    let [_, w] = reactCoreLibraryReexport.useState(f);
    if (!s(_, f)) {
      w(f);
    }
    let [E, S] = reactCoreLibraryReexport.useState(null);
    let [x, k] = reactCoreLibraryReexport.useState(null);
    let O = reactCoreLibraryReexport.useCallback(e => {
      if (e !== C.current) {
        C.current = e;
        S(e);
      }
    }, []);
    let A = reactCoreLibraryReexport.useCallback(e => {
      if (e !== M.current) {
        M.current = e;
        k(e);
      }
    }, []);
    let T = d || E;
    let R = p || x;
    let C = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useRef(null);
    let P = reactCoreLibraryReexport.useRef(y);
    let D = v != null;
    let j = l(v);
    let I = l(h);
    let N = l(m);
    let L = reactCoreLibraryReexport.useCallback(() => {
      if (!C.current || !M.current) {
        return;
      }
      let e = {
        placement: t,
        strategy: n,
        middleware: _
      };
      if (I.current) {
        e.platform = I.current;
      }
      floatingUiPlatformUtils.computePosition(C.current, M.current, e).then(e => {
        let t = {
          ...e,
          isPositioned: N.current !== false
        };
        if (B.current && !s(P.current, t)) {
          P.current = t;
          reactDomEntryWrapper.flushSync(() => {
            b(t);
          });
        }
      });
    }, [_, t, n, I, N]);
    a(() => {
      if (m === false && P.current.isPositioned) {
        P.current.isPositioned = false;
        b(e => ({
          ...e,
          isPositioned: false
        }));
      }
    }, [m]);
    let B = reactCoreLibraryReexport.useRef(false);
    a(() => {
      B.current = true;
      return () => {
        B.current = false;
      };
    }, []);
    a(() => {
      if (T) {
        C.current = T;
      }
      if (R) {
        M.current = R;
      }
      if (T && R) {
        if (j.current) {
          return j.current(T, R, L);
        }
        L();
      }
    }, [T, R, L, j, D]);
    let Z = reactCoreLibraryReexport.useMemo(() => ({
      reference: C,
      floating: M,
      setReference: O,
      setFloating: A
    }), [O, A]);
    let U = reactCoreLibraryReexport.useMemo(() => ({
      reference: T,
      floating: R
    }), [T, R]);
    let z = reactCoreLibraryReexport.useMemo(() => {
      let e = {
        position: n,
        left: 0,
        top: 0
      };
      if (!U.floating) {
        return e;
      }
      let t = c(U.floating, y.x);
      let r = c(U.floating, y.y);
      if (g) {
        return {
          ...e,
          transform: "translate(" + t + "px, " + r + "px)",
          ...(u(U.floating) >= 1.5 && {
            willChange: "transform"
          })
        };
      } else {
        return {
          position: n,
          left: t,
          top: r
        };
      }
    }, [n, g, U.floating, y.x, y.y]);
    return reactCoreLibraryReexport.useMemo(() => ({
      ...y,
      update: L,
      refs: Z,
      elements: U,
      floatingStyles: z
    }), [y, L, Z, U, z]);
  }
  let h = e => ({
    name: "arrow",
    options: e,
    fn(t) {
      let {
        element: n,
        padding: i
      } = typeof e == "function" ? e(t) : e;
      if (n && {}.hasOwnProperty.call(n, "current")) {
        if (n.current != null) {
          return floatingUiPlatformUtils.arrowMiddleware({
            element: n.current,
            padding: i
          }).fn(t);
        } else {
          return {};
        }
      } else if (n) {
        return floatingUiPlatformUtils.arrowMiddleware({
          element: n,
          padding: i
        }).fn(t);
      } else {
        return {};
      }
    }
  });
  let d = (e, t) => ({
    ...floatingUiPlatformUtils.offsetMiddleware(e),
    options: [e, t]
  });
  let p = (e, t) => ({
    ...floatingUiPlatformUtils.shiftMiddleware(e),
    options: [e, t]
  });
  let g = (e, t) => ({
    ...floatingUiPlatformUtils.innerMiddleware(e),
    options: [e, t]
  });
  let v = (e, t) => ({
    ...floatingUiPlatformUtils.flipMiddleware(e),
    options: [e, t]
  });
  let m = (e, t) => ({
    ...floatingUiPlatformUtils.sizeMiddleware(e),
    options: [e, t]
  });
  let y = (e, t) => ({
    ...floatingUiPlatformUtils.hideMiddleware(e),
    options: [e, t]
  });
  let b = (e, t) => ({
    ...h(e),
    options: [e, t]
  });
  require.d(exports, {
    hideMiddleware: function () {
      return y;
    },
    flipMiddleware: function () {
      return v;
    },
    useFloating: function () {
      return f;
    },
    offsetMiddleware: function () {
      return d;
    },
    sizeMiddleware: function () {
      return m;
    },
    innerMiddleware: function () {
      return g;
    },
    shiftMiddleware: function () {
      return p;
    },
    arrowMiddleware: function () {
      return b;
    }
  });
}