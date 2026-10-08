// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OL' to 'NavLink'
// - Renamed export 'VK' to 'BrowserRouter'
// - Renamed export 'aj' to 'createBrowserRouter'
// - Renamed export 'cP' to 'createHashRouter'
// - Renamed export 'kz' to 'useBeforeUnload'
// - Renamed export 'lr' to 'useSearchParams'
// - Renamed export 'pG' to 'RouterProvider'
// - Renamed export 'rU' to 'Link'
// - Renamed export 'yq' to 'Prompt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 510258
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var s;
  var u;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var routerCoreImplementation = require("router-core-implementation") /*id: 188358*/;
  function p() {
    return (p = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function g(e, t) {
    if (e == null) {
      return {};
    }
    var n;
    var r;
    var i = {};
    var o = Object.keys(e);
    for (r = 0; r < o.length; r++) {
      n = o[r];
      if (!(t.indexOf(n) >= 0)) {
        i[n] = e[n];
      }
    }
    return i;
  }
  function v(e = "") {
    return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
      let r = e[n];
      return t.concat(Array.isArray(r) ? r.map(e => [n, e]) : [[n, r]]);
    }, []));
  }
  let m = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
  let y = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
  try {
    window.__reactRouterVersion = "6";
  } catch (e) {}
  function b(e, t) {
    return routerCoreImplementation.createRouter({
      basename: t == null ? undefined : t.basename,
      future: p({}, t == null ? undefined : t.future, {
        v7_prependBasename: true
      }),
      history: routerCoreImplementation.createBrowserHist({
        window: t == null ? undefined : t.window
      }),
      hydrationData: (t == null ? undefined : t.hydrationData) || w(),
      routes: e,
      mapRouteProperties: reactRouterCoreHooks.createRouteStub,
      dataStrategy: t == null ? undefined : t.dataStrategy,
      patchRoutesOnNavigation: t == null ? undefined : t.patchRoutesOnNavigation,
      window: t == null ? undefined : t.window
    }).initialize();
  }
  function _(e, t) {
    return routerCoreImplementation.createRouter({
      basename: t == null ? undefined : t.basename,
      future: p({}, t == null ? undefined : t.future, {
        v7_prependBasename: true
      }),
      history: routerCoreImplementation.createHashHistory({
        window: t == null ? undefined : t.window
      }),
      hydrationData: (t == null ? undefined : t.hydrationData) || w(),
      routes: e,
      mapRouteProperties: reactRouterCoreHooks.createRouteStub,
      dataStrategy: t == null ? undefined : t.dataStrategy,
      patchRoutesOnNavigation: t == null ? undefined : t.patchRoutesOnNavigation,
      window: t == null ? undefined : t.window
    }).initialize();
  }
  function w() {
    var e;
    let t = (e = window) == null ? undefined : e.__staticRouterHydrationData;
    if (t && t.errors) {
      t = p({}, t, {
        errors: function (e) {
          if (!e) {
            return null;
          }
          let t = Object.entries(e);
          let n = {};
          for (let [e, r] of t) {
            if (r && r.__type === "RouteErrorResponse") {
              n[e] = new routerCoreImplementation.ErrorResponse(r.status, r.statusText, r.data, r.internal === true);
            } else if (r && r.__type === "Error") {
              if (r.__subType) {
                let t = window[r.__subType];
                if (typeof t == "function") {
                  try {
                    let i = new t(r.message);
                    i.stack = "";
                    n[e] = i;
                  } catch (e) {}
                }
              }
              if (n[e] == null) {
                let t = Error(r.message);
                t.stack = "";
                n[e] = t;
              }
            } else {
              n[e] = r;
            }
          }
          return n;
        }(t.errors)
      });
    }
    return t;
  }
  let E = reactCoreLibraryReexport.createContext({
    isTransitioning: false
  });
  let S = reactCoreLibraryReexport.createContext(new Map());
  let x = (o ||= require.t(reactCoreLibraryReexport, 2)).startTransition;
  let k = (a ||= require.t(reactDomEntryWrapper, 2)).flushSync;
  function O(e) {
    if (k) {
      k(e);
    } else {
      e();
    }
  }
  (o ||= require.t(reactCoreLibraryReexport, 2)).useId;
  class A {
    constructor() {
      this.status = "pending";
      this.promise = new Promise((e, t) => {
        this.resolve = t => {
          if (this.status === "pending") {
            this.status = "resolved";
            e(t);
          }
        };
        this.reject = e => {
          if (this.status === "pending") {
            this.status = "rejected";
            t(e);
          }
        };
      });
    }
  }
  function T(e) {
    let {
      fallbackElement: t,
      router: n,
      future: r
    } = e;
    let [i, o] = reactCoreLibraryReexport.useState(n.state);
    let [a, s] = reactCoreLibraryReexport.useState();
    let [u, c] = reactCoreLibraryReexport.useState({
      isTransitioning: false
    });
    let [f, d] = reactCoreLibraryReexport.useState();
    let [p, g] = reactCoreLibraryReexport.useState();
    let [v, m] = reactCoreLibraryReexport.useState();
    let y = reactCoreLibraryReexport.useRef(new Map());
    let {
      v7_startTransition: b
    } = r || {};
    let _ = reactCoreLibraryReexport.useCallback(e => {
      if (b) {
        if (x) {
          x(e);
        } else {
          e();
        }
      } else {
        e();
      }
    }, [b]);
    let w = reactCoreLibraryReexport.useCallback((e, t) => {
      let {
        deletedFetchers: r,
        flushSync: i,
        viewTransitionOpts: a
      } = t;
      r.forEach(e => y.current.delete(e));
      e.fetchers.forEach((e, t) => {
        if (e.data !== undefined) {
          y.current.set(t, e.data);
        }
      });
      let u = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
      if (!a || u) {
        if (i) {
          O(() => o(e));
        } else {
          _(() => o(e));
        }
        return;
      }
      if (i) {
        O(() => {
          if (p) {
            if (f) {
              f.resolve();
            }
            p.skipTransition();
          }
          c({
            isTransitioning: true,
            flushSync: true,
            currentLocation: a.currentLocation,
            nextLocation: a.nextLocation
          });
        });
        let t = n.window.document.startViewTransition(() => {
          O(() => o(e));
        });
        t.finished.finally(() => {
          O(() => {
            d(undefined);
            g(undefined);
            s(undefined);
            c({
              isTransitioning: false
            });
          });
        });
        O(() => g(t));
        return;
      }
      if (p) {
        if (f) {
          f.resolve();
        }
        p.skipTransition();
        m({
          state: e,
          currentLocation: a.currentLocation,
          nextLocation: a.nextLocation
        });
      } else {
        s(e);
        c({
          isTransitioning: true,
          flushSync: false,
          currentLocation: a.currentLocation,
          nextLocation: a.nextLocation
        });
      }
    }, [n.window, p, f, y, _]);
    reactCoreLibraryReexport.useLayoutEffect(() => n.subscribe(w), [n, w]);
    reactCoreLibraryReexport.useEffect(() => {
      if (u.isTransitioning && !u.flushSync) {
        d(new A());
      }
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f && a && n.window) {
        let e = f.promise;
        let t = n.window.document.startViewTransition(async () => {
          _(() => o(a));
          await e;
        });
        t.finished.finally(() => {
          d(undefined);
          g(undefined);
          s(undefined);
          c({
            isTransitioning: false
          });
        });
        g(t);
      }
    }, [_, a, f, n.window]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f && a && i.location.key === a.location.key) {
        f.resolve();
      }
    }, [f, p, i.location, a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!u.isTransitioning && v) {
        s(v.state);
        c({
          isTransitioning: true,
          flushSync: false,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation
        });
        m(undefined);
      }
    }, [u.isTransitioning, v]);
    reactCoreLibraryReexport.useEffect(() => {}, []);
    let k = reactCoreLibraryReexport.useMemo(() => ({
      createHref: n.createHref,
      encodeLocation: n.encodeLocation,
      go: e => n.navigate(e),
      push: (e, t, r) => n.navigate(e, {
        state: t,
        preventScrollReset: r == null ? undefined : r.preventScrollReset
      }),
      replace: (e, t, r) => n.navigate(e, {
        replace: true,
        state: t,
        preventScrollReset: r == null ? undefined : r.preventScrollReset
      })
    }), [n]);
    let T = n.basename || "/";
    let C = reactCoreLibraryReexport.useMemo(() => ({
      router: n,
      navigator: k,
      static: false,
      basename: T
    }), [n, k, T]);
    let M = reactCoreLibraryReexport.useMemo(() => ({
      v7_relativeSplatPath: n.future.v7_relativeSplatPath
    }), [n.future.v7_relativeSplatPath]);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(reactRouterCoreHooks.NavigationContext.Provider, {
      value: C
    }, reactCoreLibraryReexport.createElement(reactRouterCoreHooks.FetcherContext.Provider, {
      value: i
    }, reactCoreLibraryReexport.createElement(S.Provider, {
      value: y.current
    }, reactCoreLibraryReexport.createElement(E.Provider, {
      value: u
    }, reactCoreLibraryReexport.createElement(reactRouterCoreHooks.RouterProvider, {
      basename: T,
      location: i.location,
      navigationType: i.historyAction,
      navigator: k,
      future: M
    }, i.initialized || n.future.v7_partialHydration ? reactCoreLibraryReexport.createElement(R, {
      routes: n.routes,
      future: n.future,
      state: i
    }) : t))))), null);
  }
  let R = reactCoreLibraryReexport.memo(function (e) {
    let {
      routes: t,
      future: n,
      state: r
    } = e;
    return reactRouterCoreHooks.RoutesComponent(t, undefined, r, n);
  });
  function C(e) {
    let {
      basename: t,
      children: n,
      future: r,
      window: i
    } = e;
    let o = reactCoreLibraryReexport.useRef();
    if (o.current == null) {
      o.current = routerCoreImplementation.createBrowserHist({
        window: i,
        v5Compat: true
      });
    }
    let a = o.current;
    let [s, u] = reactCoreLibraryReexport.useState({
      action: a.action,
      location: a.location
    });
    let {
      v7_startTransition: c
    } = r || {};
    let f = reactCoreLibraryReexport.useCallback(e => {
      if (c && x) {
        x(() => u(e));
      } else {
        u(e);
      }
    }, [u, c]);
    reactCoreLibraryReexport.useLayoutEffect(() => a.listen(f), [a, f]);
    return reactCoreLibraryReexport.createElement(reactRouterCoreHooks.RouterProvider, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r
    });
  }
  let M = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  let P = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  let D = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let n;
    let {
      onClick: r,
      relative: i,
      reloadDocument: o,
      replace: a,
      state: s,
      target: u,
      to: f,
      preventScrollReset: v,
      viewTransition: y
    } = e;
    let b = g(e, m);
    let {
      basename: _
    } = reactCoreLibraryReexport.useContext(reactRouterCoreHooks.RouterContext);
    let w = false;
    if (typeof f == "string" && P.test(f) && (n = f, M)) {
      try {
        let e = new URL(window.location.href);
        let t = new URL(f.startsWith("//") ? e.protocol + f : f);
        let n = routerCoreImplementation.stripBasename(t.pathname, _);
        if (t.origin === e.origin && n != null) {
          f = n + t.search + t.hash;
        } else {
          w = true;
        }
      } catch (e) {}
    }
    let E = reactRouterCoreHooks.useHref(f, {
      relative: i
    });
    let S = function (e, t) {
      let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: o,
        relative: a,
        viewTransition: s
      } = t === undefined ? {} : t;
      let u = reactRouterCoreHooks.useNavigate();
      let c = reactRouterCoreHooks.useLocation();
      let f = reactRouterCoreHooks.useResolvedPath(e, {
        relative: a
      });
      return reactCoreLibraryReexport.useCallback(t => {
        if (t.button === 0 && (!n || n === "_self") && !t.metaKey && !t.altKey && !t.ctrlKey && !t.shiftKey) {
          t.preventDefault();
          u(e, {
            replace: r !== undefined ? r : routerCoreImplementation.formatPath(c) === routerCoreImplementation.formatPath(f),
            state: i,
            preventScrollReset: o,
            relative: a,
            viewTransition: s
          });
        }
      }, [c, u, f, r, i, n, e, o, a, s]);
    }(f, {
      replace: a,
      state: s,
      target: u,
      preventScrollReset: v,
      relative: i,
      viewTransition: y
    });
    return reactCoreLibraryReexport.createElement("a", p({}, b, {
      href: xssContentSanitizer.sanitizeUrl(n || E, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3pTbXha$jA0d1R*aEtkb$JZ$W14amF%RnJZakl4%$%1cE5IbE9l$FIz$0ROS2J*bFh%akJN$jFKMlls$kJlRTlETkhsTWFrSm1ZMjFX-%Zrel$rRk5WR2Qx$FdrM*QxZ3hPW*xh$jBac$pF$kJlRTlETkhsTWFrRjJZbTA1-TFw$09-%mlNbEl4WWtk$2$rd3pTbXha$jA0d1R*aEtkb$JZ$W14amF%RnJZakl3Z*xwS*JIc*tRemx3WW0x%2JH$kROWEZqTWtaN$dqTldlZz09"
      }),
      onClick: w || o ? r : function (e) {
        if (r) {
          r(e);
        }
        if (!e.defaultPrevented) {
          S(e);
        }
      },
      ref: t,
      target: u
    }));
  });
  let j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let n;
    let {
      "aria-current": r = "page",
      caseSensitive: i = false,
      className: o = "",
      end: a = false,
      style: u,
      to: c,
      viewTransition: f,
      children: v
    } = e;
    let m = g(e, y);
    let b = reactRouterCoreHooks.useResolvedPath(c, {
      relative: m.relative
    });
    let _ = reactRouterCoreHooks.useLocation();
    let w = reactCoreLibraryReexport.useContext(reactRouterCoreHooks.FetcherContext);
    let {
      navigator: S,
      basename: x
    } = reactCoreLibraryReexport.useContext(reactRouterCoreHooks.RouterContext);
    let k = w != null && function (e, t) {
      var n;
      let r;
      if (t === undefined) {
        t = {};
      }
      let i = reactCoreLibraryReexport.useContext(E);
      if (i == null) {
        routerCoreImplementation.invariant(false);
      }
      s.useViewTransitionState;
      if (!(r = reactCoreLibraryReexport.useContext(reactRouterCoreHooks.NavigationContext))) {
        routerCoreImplementation.invariant(false);
      }
      let {
        basename: o
      } = r;
      let a = reactRouterCoreHooks.useResolvedPath(e, {
        relative: t.relative
      });
      if (!i.isTransitioning) {
        return false;
      }
      let u = routerCoreImplementation.stripBasename(i.currentLocation.pathname, o) || i.currentLocation.pathname;
      let c = routerCoreImplementation.stripBasename(i.nextLocation.pathname, o) || i.nextLocation.pathname;
      return routerCoreImplementation.matchPath(a.pathname, c) != null || routerCoreImplementation.matchPath(a.pathname, u) != null;
    }(b) && f === true;
    let O = S.encodeLocation ? S.encodeLocation(b).pathname : b.pathname;
    let A = _.pathname;
    let T = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    if (!i) {
      A = A.toLowerCase();
      T = T ? T.toLowerCase() : null;
      O = O.toLowerCase();
    }
    if (T && x) {
      T = routerCoreImplementation.stripBasename(T, x) || T;
    }
    let R = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
    let C = A === O || !a && A.startsWith(O) && A.charAt(R) === "/";
    let M = T != null && (T === O || !a && T.startsWith(O) && T.charAt(O.length) === "/");
    let P = {
      isActive: C,
      isPending: M,
      isTransitioning: k
    };
    let j = C ? r : undefined;
    n = typeof o == "function" ? o(P) : [o, C ? "active" : null, M ? "pending" : null, k ? "transitioning" : null].filter(Boolean).join(" ");
    let I = typeof u == "function" ? u(P) : u;
    return reactCoreLibraryReexport.createElement(D, p({}, m, {
      "aria-current": j,
      className: n,
      ref: t,
      style: I,
      to: c,
      viewTransition: f
    }), typeof v == "function" ? v(P) : v);
  });
  function I(e) {
    let t = reactCoreLibraryReexport.useRef(v(e));
    let n = reactCoreLibraryReexport.useRef(false);
    let r = reactRouterCoreHooks.useLocation();
    let i = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var i;
      let o;
      e = r.search;
      i = n.current ? null : t.current;
      o = v(e);
      if (i) {
        i.forEach((e, t) => {
          if (!o.has(t)) {
            i.getAll(t).forEach(e => {
              o.append(t, e);
            });
          }
        });
      }
      return o;
    }, [r.search]);
    let o = reactRouterCoreHooks.useNavigate();
    let a = reactCoreLibraryReexport.useCallback((e, t) => {
      let r = v(typeof e == "function" ? e(i) : e);
      n.current = true;
      o("?" + r, t);
    }, [o, i]);
    return [i, a];
  }
  function N(e, t) {
    let {
      capture: n
    } = t || {};
    reactCoreLibraryReexport.useEffect(() => {
      let t = n != null ? {
        capture: n
      } : undefined;
      window.addEventListener("beforeunload", e, t);
      return () => {
        window.removeEventListener("beforeunload", e, t);
      };
    }, [e, n]);
  }
  function L(e) {
    let {
      when: t,
      message: n
    } = e;
    let r = reactRouterCoreHooks.useBlocker(t);
    reactCoreLibraryReexport.useEffect(() => {
      if (r.state === "blocked") {
        if (window.confirm(n)) {
          setTimeout(r.proceed, 0);
        } else {
          r.reset();
        }
      }
    }, [r, n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r.state === "blocked" && !t) {
        r.reset();
      }
    }, [r, t]);
  }
  (r = s ||= {}).UseScrollRestoration = "useScrollRestoration";
  r.UseSubmit = "useSubmit";
  r.UseSubmitFetcher = "useSubmitFetcher";
  r.UseFetcher = "useFetcher";
  r.useViewTransitionState = "useViewTransitionState";
  (i = u ||= {}).UseFetcher = "useFetcher";
  i.UseFetchers = "useFetchers";
  i.UseScrollRestoration = "useScrollRestoration";
  require.d(exports, {
    NavLink: function () {
      return j;
    },
    BrowserRouter: function () {
      return C;
    },
    createBrowserRouter: function () {
      return b;
    },
    createHashRouter: function () {
      return _;
    },
    useBeforeUnload: function () {
      return L;
    },
    useSearchParams: function () {
      return I;
    },
    RouterProvider: function () {
      return T;
    },
    Link: function () {
      return D;
    },
    Prompt: function () {
      return N;
    }
  });
}