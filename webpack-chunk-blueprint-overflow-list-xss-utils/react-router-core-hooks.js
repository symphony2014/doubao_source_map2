// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AW' to 'RouteComponent'
// - Renamed export 'DY' to 'RoutesComponent'
// - Renamed export 'F0' to 'RouterProvider'
// - Renamed export 'FR' to 'FetcherContext'
// - Renamed export 'Fg' to 'NavigateComponent'
// - Renamed export 'SN' to 'useMatches'
// - Renamed export 'TH' to 'useLocation'
// - Renamed export 'UO' to 'useParams'
// - Renamed export 'Us' to 'RouterContext'
// - Renamed export 'V4' to 'useRouteLoaderData'
// - Renamed export 'WU' to 'useResolvedPath'
// - Renamed export '_Z' to 'useBlocker'
// - Renamed export 'f_' to 'useLoaderData'
// - Renamed export 'i7' to 'createRoutesFromChildren'
// - Renamed export 'j3' to 'OutletComponent'
// - Renamed export 'lk' to 'useRouteError'
// - Renamed export 'oQ' to 'useHref'
// - Renamed export 's0' to 'useNavigate'
// - Renamed export 'us' to 'createRouteStub'
// - Renamed export 'w3' to 'NavigationContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 864673
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routerCoreImplementation = require("router-core-implementation") /*id: 188358*/;
  function c() {
    return (c = Object.assign ? Object.assign.bind() : function (e) {
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
  let l = reactCoreLibraryReexport.createContext(null);
  let f = reactCoreLibraryReexport.createContext(null);
  let h = reactCoreLibraryReexport.createContext(null);
  let d = reactCoreLibraryReexport.createContext(null);
  let p = reactCoreLibraryReexport.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  let g = reactCoreLibraryReexport.createContext(null);
  function v(e, t) {
    let {
      relative: n
    } = t === undefined ? {} : t;
    if (!m()) {
      routerCoreImplementation.invariant(false);
    }
    let {
      basename: r,
      navigator: i
    } = reactCoreLibraryReexport.useContext(h);
    let {
      hash: o,
      pathname: a,
      search: c
    } = S(e, {
      relative: n
    });
    let l = a;
    if (r !== "/") {
      l = a === "/" ? r : routerCoreImplementation.joinPaths([r, a]);
    }
    return i.createHref({
      pathname: l,
      search: c,
      hash: o
    });
  }
  function m() {
    return reactCoreLibraryReexport.useContext(d) != null;
  }
  function y() {
    if (!m()) {
      routerCoreImplementation.invariant(false);
    }
    return reactCoreLibraryReexport.useContext(d).location;
  }
  function b(e) {
    if (!reactCoreLibraryReexport.useContext(h).static) {
      reactCoreLibraryReexport.useLayoutEffect(e);
    }
  }
  function _() {
    let {
      isDataRoute: e
    } = reactCoreLibraryReexport.useContext(p);
    if (e) {
      return function () {
        let {
          router: e
        } = C(T.UseNavigateStable);
        let t = P(R.UseNavigateStable);
        let n = reactCoreLibraryReexport.useRef(false);
        b(() => {
          n.current = true;
        });
        return reactCoreLibraryReexport.useCallback(function (r, i = {}) {
          if (n.current) {
            if (typeof r == "number") {
              e.navigate(r);
            } else {
              e.navigate(r, c({
                fromRouteId: t
              }, i));
            }
          }
        }, [e, t]);
      }();
    } else {
      return function () {
        if (!m()) {
          routerCoreImplementation.invariant(false);
        }
        let e = reactCoreLibraryReexport.useContext(l);
        let {
          basename: t,
          future: n,
          navigator: r
        } = reactCoreLibraryReexport.useContext(h);
        let {
          matches: i
        } = reactCoreLibraryReexport.useContext(p);
        let {
          pathname: o
        } = y();
        let a = JSON.stringify(routerCoreImplementation.getMatchPaths(i, n.v7_relativeSplatPath));
        let c = reactCoreLibraryReexport.useRef(false);
        b(() => {
          c.current = true;
        });
        return reactCoreLibraryReexport.useCallback(function (n, i = {}) {
          if (!c.current) {
            return;
          }
          if (typeof n == "number") {
            r.go(n);
            return;
          }
          let s = routerCoreImplementation.resolveTo(n, JSON.parse(a), o, i.relative === "path");
          if (e == null && t !== "/") {
            s.pathname = s.pathname === "/" ? t : routerCoreImplementation.joinPaths([t, s.pathname]);
          }
          (i.replace ? r.replace : r.push)(s, i.state, i);
        }, [t, r, a, o, e]);
      }();
    }
  }
  let w = reactCoreLibraryReexport.createContext(null);
  function E() {
    let {
      matches: e
    } = reactCoreLibraryReexport.useContext(p);
    let t = e[e.length - 1];
    if (t) {
      return t.params;
    } else {
      return {};
    }
  }
  function S(e, t) {
    let {
      relative: n
    } = t === undefined ? {} : t;
    let {
      future: r
    } = reactCoreLibraryReexport.useContext(h);
    let {
      matches: i
    } = reactCoreLibraryReexport.useContext(p);
    let {
      pathname: o
    } = y();
    let a = JSON.stringify(routerCoreImplementation.getMatchPaths(i, r.v7_relativeSplatPath));
    return reactCoreLibraryReexport.useMemo(() => routerCoreImplementation.resolveTo(e, JSON.parse(a), o, n === "path"), [e, a, o, n]);
  }
  function x(e, t, n, r) {
    let i;
    if (!m()) {
      routerCoreImplementation.invariant(false);
    }
    let {
      navigator: o
    } = reactCoreLibraryReexport.useContext(h);
    let {
      matches: a
    } = reactCoreLibraryReexport.useContext(p);
    let l = a[a.length - 1];
    let f = l ? l.params : {};
    if (l) {
      l.pathname;
    }
    let g = l ? l.pathnameBase : "/";
    if (l) {
      l.route;
    }
    let v = y();
    if (t) {
      var b;
      let e = typeof t == "string" ? routerCoreImplementation.parsePath(t) : t;
      if (g !== "/" && !((b = e.pathname) == null ? undefined : b.startsWith(g))) {
        routerCoreImplementation.invariant(false);
      }
      i = e;
    } else {
      i = v;
    }
    let _ = i.pathname || "/";
    let w = _;
    if (g !== "/") {
      let e = g.replace(/^\//, "").split("/");
      w = "/" + _.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let E = routerCoreImplementation.matchRoutes(e, {
      pathname: w
    });
    let S = function (e, t, n, r) {
      var i;
      var o;
      if (t === undefined) {
        t = [];
      }
      if (n === undefined) {
        n = null;
      }
      if (r === undefined) {
        r = null;
      }
      if (e == null) {
        if (!n) {
          return null;
        }
        if (n.errors) {
          e = n.matches;
        } else {
          if ((o = r) == null || !o.v7_partialHydration || t.length !== 0 || n.initialized || !(n.matches.length > 0)) {
            return null;
          }
          e = n.matches;
        }
      }
      let a = e;
      let c = (i = n) == null ? undefined : i.errors;
      if (c != null) {
        let e = a.findIndex(e => e.route.id && (c == null ? undefined : c[e.route.id]) !== undefined);
        if (!(e >= 0)) {
          routerCoreImplementation.invariant(false);
        }
        a = a.slice(0, Math.min(a.length, e + 1));
      }
      let l = false;
      let f = -1;
      if (n && r && r.v7_partialHydration) {
        for (let e = 0; e < a.length; e++) {
          let t = a[e];
          if (t.route.HydrateFallback || t.route.hydrateFallbackElement) {
            f = e;
          }
          if (t.route.id) {
            let {
              loaderData: e,
              errors: r
            } = n;
            let i = t.route.loader && e[t.route.id] === undefined && (!r || r[t.route.id] === undefined);
            if (t.route.lazy || i) {
              l = true;
              a = f >= 0 ? a.slice(0, f + 1) : [a[0]];
              break;
            }
          }
        }
      }
      return a.reduceRight((e, r, i) => {
        var o;
        var u;
        let h;
        let d = false;
        let p = null;
        let g = null;
        if (n) {
          h = c && r.route.id ? c[r.route.id] : undefined;
          p = r.route.errorElement || k;
          if (l) {
            if (f < 0 && i === 0) {
              o = "route-fallback";
              u = 0;
              Z[o] ||= true;
              d = true;
              g = null;
            } else if (f === i) {
              d = true;
              g = r.route.hydrateFallbackElement || null;
            }
          }
        }
        let v = t.concat(a.slice(0, i + 1));
        let m = () => {
          let t;
          t = h ? p : d ? g : r.route.Component ? reactCoreLibraryReexport.createElement(r.route.Component, null) : r.route.element ? r.route.element : e;
          return reactCoreLibraryReexport.createElement(A, {
            match: r,
            routeContext: {
              outlet: e,
              matches: v,
              isDataRoute: n != null
            },
            children: t
          });
        };
        if (n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)) {
          return reactCoreLibraryReexport.createElement(O, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: h,
            children: m(),
            routeContext: {
              outlet: null,
              matches: v,
              isDataRoute: true
            }
          });
        } else {
          return m();
        }
      }, null);
    }(E && E.map(e => Object.assign({}, e, {
      params: Object.assign({}, f, e.params),
      pathname: routerCoreImplementation.joinPaths([g, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
      pathnameBase: e.pathnameBase === "/" ? g : routerCoreImplementation.joinPaths([g, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
    })), a, n, r);
    if (t && S) {
      return reactCoreLibraryReexport.createElement(d.Provider, {
        value: {
          location: c({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default"
          }, i),
          navigationType: routerCoreImplementation.Action.Pop
        }
      }, S);
    } else {
      return S;
    }
  }
  let k = reactCoreLibraryReexport.createElement(function () {
    let e = N();
    let t = routerCoreImplementation.isErrorResponse(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e);
    let n = e instanceof Error ? e.stack : null;
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("h2", null, "Unexpected Application Error!"), reactCoreLibraryReexport.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? reactCoreLibraryReexport.createElement("pre", {
      style: {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
      }
    }, n) : null, null);
  }, null);
  class O extends reactCoreLibraryReexport.Component {
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, t) {
      if (t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle") {
        return {
          error: e.error,
          location: e.location,
          revalidation: e.revalidation
        };
      } else {
        return {
          error: e.error !== undefined ? e.error : t.error,
          location: t.location,
          revalidation: e.revalidation || t.revalidation
        };
      }
    }
    componentDidCatch(e, t) {}
    render() {
      if (this.state.error !== undefined) {
        return reactCoreLibraryReexport.createElement(p.Provider, {
          value: this.props.routeContext
        }, reactCoreLibraryReexport.createElement(g.Provider, {
          value: this.state.error,
          children: this.props.component
        }));
      } else {
        return this.props.children;
      }
    }
    constructor(e) {
      super(e);
      this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error
      };
    }
  }
  function A(e) {
    let {
      routeContext: t,
      match: n,
      children: r
    } = e;
    let i = reactCoreLibraryReexport.useContext(l);
    if (i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary)) {
      i.staticContext._deepestRenderedBoundaryId = n.route.id;
    }
    return reactCoreLibraryReexport.createElement(p.Provider, {
      value: t
    }, r);
  }
  (r = T || {}).UseBlocker = "useBlocker";
  r.UseRevalidator = "useRevalidator";
  r.UseNavigateStable = "useNavigate";
  var T = r;
  (i = R || {}).UseBlocker = "useBlocker";
  i.UseLoaderData = "useLoaderData";
  i.UseActionData = "useActionData";
  i.UseRouteError = "useRouteError";
  i.UseNavigation = "useNavigation";
  i.UseRouteLoaderData = "useRouteLoaderData";
  i.UseMatches = "useMatches";
  i.UseRevalidator = "useRevalidator";
  i.UseNavigateStable = "useNavigate";
  i.UseRouteId = "useRouteId";
  var R = i;
  function C(e) {
    let t = reactCoreLibraryReexport.useContext(l);
    if (!t) {
      routerCoreImplementation.invariant(false);
    }
    return t;
  }
  function M(e) {
    let t = reactCoreLibraryReexport.useContext(f);
    if (!t) {
      routerCoreImplementation.invariant(false);
    }
    return t;
  }
  function P(e) {
    let t;
    if (!(t = reactCoreLibraryReexport.useContext(p))) {
      routerCoreImplementation.invariant(false);
    }
    let n = t;
    let r = n.matches[n.matches.length - 1];
    if (!r.route.id) {
      routerCoreImplementation.invariant(false);
    }
    return r.route.id;
  }
  function D() {
    let {
      matches: e,
      loaderData: t
    } = M(R.UseMatches);
    return reactCoreLibraryReexport.useMemo(() => e.map(e => routerCoreImplementation.createMatch(e, t)), [e, t]);
  }
  function j() {
    let e = M(R.UseLoaderData);
    let t = P(R.UseLoaderData);
    if (!e.errors || e.errors[t] == null) {
      return e.loaderData[t];
    }
  }
  function I(e) {
    return M(R.UseRouteLoaderData).loaderData[e];
  }
  function N() {
    var e;
    let t = reactCoreLibraryReexport.useContext(g);
    let n = M(R.UseRouteError);
    let r = P(R.UseRouteError);
    if (t !== undefined) {
      return t;
    } else if ((e = n.errors) == null) {
      return undefined;
    } else {
      return e[r];
    }
  }
  let L = 0;
  function B(e) {
    let {
      router: t,
      basename: n
    } = C(T.UseBlocker);
    let r = M(R.UseBlocker);
    let [i, o] = reactCoreLibraryReexport.useState("");
    let a = reactCoreLibraryReexport.useCallback(t => {
      if (typeof e != "function") {
        return !!e;
      }
      if (n === "/") {
        return e(t);
      }
      let {
        currentLocation: r,
        nextLocation: i,
        historyAction: o
      } = t;
      return e({
        currentLocation: c({}, r, {
          pathname: routerCoreImplementation.stripBasename(r.pathname, n) || r.pathname
        }),
        nextLocation: c({}, i, {
          pathname: routerCoreImplementation.stripBasename(i.pathname, n) || i.pathname
        }),
        historyAction: o
      });
    }, [n, e]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = String(++L);
      o(e);
      return () => t.deleteBlocker(e);
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i !== "") {
        t.getBlocker(i, a);
      }
    }, [t, i, a]);
    if (i && r.blockers.has(i)) {
      return r.blockers.get(i);
    } else {
      return routerCoreImplementation.defaultBlocker;
    }
  }
  let Z = {};
  function U(e) {
    let {
      to: t,
      replace: n,
      state: r,
      relative: i
    } = e;
    if (!m()) {
      routerCoreImplementation.invariant(false);
    }
    let {
      future: o,
      static: a
    } = reactCoreLibraryReexport.useContext(h);
    let {
      matches: c
    } = reactCoreLibraryReexport.useContext(p);
    let {
      pathname: l
    } = y();
    let f = _();
    let d = JSON.stringify(routerCoreImplementation.resolveTo(t, routerCoreImplementation.getMatchPaths(c, o.v7_relativeSplatPath), l, i === "path"));
    reactCoreLibraryReexport.useEffect(() => f(JSON.parse(d), {
      replace: n,
      state: r,
      relative: i
    }), [f, d, i, n, r]);
    return null;
  }
  function z(e) {
    var t;
    let n;
    t = e.context;
    if (n = reactCoreLibraryReexport.useContext(p).outlet) {
      return reactCoreLibraryReexport.createElement(w.Provider, {
        value: t
      }, n);
    } else {
      return n;
    }
  }
  function F(e) {
    routerCoreImplementation.invariant(false);
  }
  function H(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: i = routerCoreImplementation.Action.Pop,
      navigator: o,
      static: a = false,
      future: l
    } = e;
    if (m()) {
      routerCoreImplementation.invariant(false);
    }
    let f = t.replace(/^\/*/, "/");
    let p = reactCoreLibraryReexport.useMemo(() => ({
      basename: f,
      navigator: o,
      static: a,
      future: c({
        v7_relativeSplatPath: false
      }, l)
    }), [f, l, o, a]);
    if (typeof r == "string") {
      r = routerCoreImplementation.parsePath(r);
    }
    let {
      pathname: g = "/",
      search: v = "",
      hash: y = "",
      state: b = null,
      key: _ = "default"
    } = r;
    let w = reactCoreLibraryReexport.useMemo(() => {
      let e = routerCoreImplementation.stripBasename(g, f);
      if (e == null) {
        return null;
      } else {
        return {
          location: {
            pathname: e,
            search: v,
            hash: y,
            state: b,
            key: _
          },
          navigationType: i
        };
      }
    }, [f, g, v, y, b, _, i]);
    if (w == null) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(h.Provider, {
        value: p
      }, reactCoreLibraryReexport.createElement(d.Provider, {
        children: n,
        value: w
      }));
    }
  }
  (a ||= require.t(reactCoreLibraryReexport, 2)).startTransition;
  (o = G || {})[o.pending = 0] = "pending";
  o[o.success = 1] = "success";
  o[o.error = 2] = "error";
  var G = o;
  function V(e) {
    let t = {
      hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    if (e.Component) {
      Object.assign(t, {
        element: reactCoreLibraryReexport.createElement(e.Component),
        Component: undefined
      });
    }
    if (e.HydrateFallback) {
      Object.assign(t, {
        hydrateFallbackElement: reactCoreLibraryReexport.createElement(e.HydrateFallback),
        HydrateFallback: undefined
      });
    }
    if (e.ErrorBoundary) {
      Object.assign(t, {
        errorElement: reactCoreLibraryReexport.createElement(e.ErrorBoundary),
        ErrorBoundary: undefined
      });
    }
    return t;
  }
  new Promise(() => {});
  reactCoreLibraryReexport.Component;
  require.d(exports, {
    RouteComponent: function () {
      return F;
    },
    RoutesComponent: function () {
      return x;
    },
    RouterProvider: function () {
      return H;
    },
    FetcherContext: function () {
      return f;
    },
    NavigateComponent: function () {
      return U;
    },
    useMatches: function () {
      return D;
    },
    useLocation: function () {
      return y;
    },
    useParams: function () {
      return E;
    },
    RouterContext: function () {
      return h;
    },
    useRouteLoaderData: function () {
      return I;
    },
    useResolvedPath: function () {
      return S;
    },
    useBlocker: function () {
      return B;
    },
    useLoaderData: function () {
      return j;
    },
    createRoutesFromChildren: function () {
      return function e(t, n = []) {
        let r = [];
        reactCoreLibraryReexport.Children.forEach(t, (t, i) => {
          if (!reactCoreLibraryReexport.isValidElement(t)) {
            return;
          }
          let o = [...n, i];
          if (t.type === reactCoreLibraryReexport.Fragment) {
            r.push.apply(r, e(t.props.children, o));
            return;
          }
          if (t.type !== F) {
            routerCoreImplementation.invariant(false);
          }
          if (t.props.index && t.props.children) {
            routerCoreImplementation.invariant(false);
          }
          let a = {
            id: t.props.id || o.join("-"),
            caseSensitive: t.props.caseSensitive,
            element: t.props.element,
            Component: t.props.Component,
            index: t.props.index,
            path: t.props.path,
            loader: t.props.loader,
            action: t.props.action,
            errorElement: t.props.errorElement,
            ErrorBoundary: t.props.ErrorBoundary,
            hasErrorBoundary: t.props.ErrorBoundary != null || t.props.errorElement != null,
            shouldRevalidate: t.props.shouldRevalidate,
            handle: t.props.handle,
            lazy: t.props.lazy
          };
          if (t.props.children) {
            a.children = e(t.props.children, o);
          }
          r.push(a);
        });
        return r;
      };
    },
    OutletComponent: function () {
      return z;
    },
    useRouteError: function () {
      return N;
    },
    useHref: function () {
      return v;
    },
    useNavigate: function () {
      return _;
    },
    createRouteStub: function () {
      return V;
    },
    NavigationContext: function () {
      return l;
    }
  });
}