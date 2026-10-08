// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OL' to 'PrefetchNavLink'
// - Renamed export 'rU' to 'PrefetchLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 677031
         */
module.exports = function (module, exports, require) {
  var asyncGeneratorHelper = require("async-generator-helper") /*id: 198527*/;
  var objectAssignPolyfill_3_1 = require("object-assign-polyfill_3_1") /*id: 732590*/;
  var objectOmitUtil_2_1 = require("object-omit-util_2_1") /*id: 53732*/;
  var arraySlicePolyfill_1_1 = require("array-slice-polyfill_1_1") /*id: 240168*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var routerCoreImplementation = require("router-core-implementation") /*id: 188358*/;
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var reactRouterDomBrowserIntegration = require("react-router-dom-browser-integration") /*id: 510258*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routeLoaderContext = require("route-loader-context") /*id: 797273*/;
  function p(e, t) {
    return function (n) {
      if (e != null) {
        e(n);
      }
      if (!n.defaultPrevented) {
        t(n);
      }
    };
  }
  var g = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function v() {
    return (v = asyncGeneratorHelper.asyncWrapper(function (e, t) {
      var r;
      var i;
      return typescriptRuntimeHelpers.generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (!(r = e.id) || !t[r] || !(i = t[r].chunkIds)) {
              return [2];
            }
            o.label = 1;
          case 1:
            o.trys.push([1, 3,, 4]);
            return [4, Promise.all(i.map(function (e) {
              if (require.e === null || require.e === undefined) {
                return undefined;
              } else {
                return require.e(e);
              }
            }))];
          case 2:
          case 3:
            o.sent();
            return [3, 4];
          case 4:
            return [2];
        }
      });
    })).apply(this, arguments);
  }
  function m(e, t) {
    var n = window.location;
    var r = n.protocol;
    var i = n.host;
    var o = new URL(e, `${r}//${i}`);
    o.searchParams.append("__loader", t);
    o.searchParams.append("__ssrDirect", "true");
    return o;
  }
  function y(e, t, n) {
    var r;
    var i = e.id;
    r = m(n === "/" ? t : `${n}${t}`, i).toString();
    return reactJsxRuntimeCoreReexport.jsx("link", {
      rel: "prefetch",
      as: "fetch",
      href: r
    }, r);
  }
  function b(e) {
    var t = e.path;
    var n = t.pathname;
    var r = reactCoreLibraryReexport.useContext(routeLoaderContext.routerContext);
    var i = r.routeManifest;
    var o = r.routes;
    var a = (i || {}).routeAssets;
    var s = Array.isArray(o) ? routerCoreImplementation.matchRoutes(o, n) : [];
    if (Array.isArray(s) && a) {
      if (s != null) {
        s.forEach(function (e) {
          return function (e, t) {
            return v.apply(this, arguments);
          }(e.route, a);
        });
      }
    }
    if (window._SSR_DATA) {
      return reactJsxRuntimeCoreReexport.jsx(_, {
        matches: s,
        path: t,
        routeManifest: i
      });
    } else {
      return null;
    }
  }
  function _(e) {
    var t = e.matches;
    var n = e.path;
    var r = e.routeManifest;
    var i = n.pathname;
    var o = n.search;
    var a = n.hash;
    var s = reactRouterCoreHooks.useMatches();
    var c = reactRouterCoreHooks.useHref("/");
    var f = reactCoreLibraryReexport.useMemo(function () {
      if (t == null) {
        return undefined;
      } else {
        return t.filter(function (e, t) {
          if (!e.route.loader || typeof e.route.loader != "function" || e.route.loader.length === 0) {
            return false;
          }
          if (e.route.shouldRevalidate) {
            var r = new URL(location.pathname + location.search + location.hash, window.origin);
            var u = new URL(i + o + a, window.origin);
            var c = e.route.shouldRevalidate({
              currentUrl: r,
              currentParams: s[0]?.params || {},
              nextUrl: u,
              nextParams: e.params,
              defaultShouldRevalidate: true
            });
            if (typeof c == "boolean") {
              return c;
            }
          }
          var l = s[t];
          return !l || l.id !== e.route.id || l.pathname !== e.pathname || !!l.pathname.endsWith("*") && l.params["*"] !== e.params["*"];
        }).map(function (e) {
          return y(e.route, i, c);
        });
      }
    }, [t, i, r]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: f
    });
  }
  function w(e) {
    return reactCoreLibraryReexport.forwardRef(function (t, r) {
      var s;
      var c;
      var f;
      var d;
      var v;
      var m;
      var y;
      var _;
      var w;
      var E;
      var S;
      var x;
      var k;
      var O;
      var A = t.to;
      var T = t.prefetch;
      var R = objectOmitUtil_2_1.omitKeys(t, ["to", "prefetch"]);
      var C = typeof A == "string" && g.test(A);
      var M = arraySlicePolyfill_1_1.slicedToArray((s = T === undefined ? "none" : T, f = (c = arraySlicePolyfill_1_1.slicedToArray(reactCoreLibraryReexport.useState(false), 2))[0], d = c[1], m = (v = arraySlicePolyfill_1_1.slicedToArray(reactCoreLibraryReexport.useState(false), 2))[0], y = v[1], _ = R.onFocus, w = R.onBlur, E = R.onMouseEnter, S = R.onMouseLeave, x = R.onTouchStart, reactCoreLibraryReexport.useEffect(function () {
        if (s === "render") {
          y(true);
        }
      }, [s]), k = function () {
        if (s === "intent") {
          d(true);
        }
      }, O = function () {
        if (s === "intent") {
          d(false);
          y(false);
        }
      }, reactCoreLibraryReexport.useEffect(function () {
        if (f) {
          var e = setTimeout(function () {
            y(true);
          }, 100);
          return function () {
            clearTimeout(e);
          };
        }
      }, [f]), [m, {
        onFocus: p(_, k),
        onBlur: p(w, O),
        onMouseEnter: p(E, k),
        onMouseLeave: p(S, O),
        onTouchStart: p(x, k)
      }]), 2);
      var P = M[0];
      var D = M[1];
      var j = reactRouterCoreHooks.useResolvedPath(A);
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(e, objectAssignPolyfill_3_1.assignProperties({
          ref: r,
          to: A
        }, R, D)), P && require.e && !C ? reactJsxRuntimeCoreReexport.jsx(b, {
          path: j
        }) : null]
      });
    });
  }
  var E = w(reactRouterDomBrowserIntegration.Link);
  E.displayName = "Link";
  var S = w(reactRouterDomBrowserIntegration.NavLink);
  S.displayName = "NavLink";
  require.d(exports, {
    PrefetchNavLink: function () {
      return S;
    },
    PrefetchLink: function () {
      return E;
    }
  });
}