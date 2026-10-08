// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'createRouterPlugin'
// - Renamed export 'V4' to 'useRouteLoaderData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 658282
         */
module.exports = function (module, exports, require) {
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var objectAssignPolyfill_3_1 = require("object-assign-polyfill_3_1") /*id: 732590*/;
  var objectAssignPolyfill_1_1 = require("object-assign-polyfill_1_1") /*id: 559150*/;
  var polyfillArraySpread = require("polyfill-array-spread") /*id: 415168*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var deepObjectMerge = require("deep-object-merge") /*id: 523422*/;
  var reactRouterDomBrowserIntegration = require("react-router-dom-browser-integration") /*id: 510258*/;
  function l(e) {
    return "/" + e.replace(/^\/+|\/+$/g, "");
  }
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routeLoaderContext = require("route-loader-context") /*id: 797273*/;
  var appRuntimeContext = require("app-runtime-context") /*id: 732669*/;
  var hookExecutorUtils = require("hook-executor-utils") /*id: 29916*/;
  var g = hookExecutorUtils.createSyncExecutor();
  var v = hookExecutorUtils.createSyncExecutor();
  var objectOmitUtil_2_1 = require("object-omit-util_2_1") /*id: 53732*/;
  var arraySlicePolyfill_1_1 = require("array-slice-polyfill_1_1") /*id: 240168*/;
  var asyncGeneratorHelper = require("async-generator-helper") /*id: 198527*/;
  var valueTypePolyfill = require("value-type-polyfill") /*id: 416304*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function E(e) {
    var t = new Date().getTime() * 0.001;
    var n = Math.floor(t);
    var r = Math.floor(t % 1 * 1000000000);
    if (e) {
      n -= e[0];
      if ((r -= e[1]) < 0) {
        n--;
        r += 1000000000;
      }
    }
    return [n, r];
  }
  require("modernjs-route-constants") /*id: 45491*/;
  function S(e) {
    var t = arraySlicePolyfill_1_1.slicedToArray(E(e), 2);
    return t[0] * 1000 + t[1] / 1000000;
  }
  function x() {
    var e = E();
    return function () {
      return S(e);
    };
  }
  function k(e) {
    var t;
    var n;
    var a;
    var u;
    var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var l = e.children;
    var h = e.index;
    var d = e.id;
    var p = e.component;
    var g = e.isRoot;
    var v = e.lazyImport;
    var m = e.config;
    var y = e.handle;
    var E = c.parent;
    var S = c.props;
    var A = {
      caseSensitive: e.caseSensitive,
      path: e.path,
      id: e.id,
      loader: (a = (t = e).loader) ? (n = asyncGeneratorHelper.asyncWrapper(function (e) {
        var n;
        var r;
        var i;
        return typescriptRuntimeHelpers.generator(this, function (i) {
          switch (i.label) {
            case 0:
              if (typeof t.lazyImport == "function") {
                t.lazyImport();
              }
              n = x();
              return [4, a(e)];
            case 1:
              r = i.sent();
              n();
              return [2, r];
          }
        });
      }), function (e) {
        return n.apply(this, arguments);
      }) : function () {
        if (typeof t.lazyImport == "function") {
          t.lazyImport();
        }
        return null;
      },
      action: e.action,
      hasErrorBoundary: e.hasErrorBoundary,
      shouldRevalidate: e.shouldRevalidate,
      handle: objectAssignPolyfill_3_1.assignProperties({}, y, (m === undefined ? "undefined" : valueTypePolyfill.getType(m)) === "object" ? m == null ? undefined : m.handle : {}),
      index: e.index,
      element: e.element,
      errorElement: e.errorElement
    };
    if (e.error) {
      var T = reactJsxRuntimeCoreReexport.jsx(e.error, {});
      A.errorElement = T;
    }
    if (p) {
      if ((E == null ? undefined : E.loading) && v) {
        var R = E.loading;
        u = O(p) ? reactJsxRuntimeCoreReexport.jsx(p, {
          fallback: reactJsxRuntimeCoreReexport.jsx(R, {})
        }) : reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(R, {}),
          children: reactJsxRuntimeCoreReexport.jsx(p, {})
        });
      } else {
        u = O(p) && v ? reactJsxRuntimeCoreReexport.jsx(p, {}) : g ? reactJsxRuntimeCoreReexport.jsx(p, objectAssignPolyfill_3_1.assignProperties({}, S === undefined ? {} : S)) : v ? reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
          fallback: null,
          children: reactJsxRuntimeCoreReexport.jsx(p, {})
        }) : reactJsxRuntimeCoreReexport.jsx(p, {});
      }
    } else {
      e.loading = E == null ? undefined : E.loading;
      A.element = reactJsxRuntimeCoreReexport.jsx(reactRouterCoreHooks.OutletComponent, {});
    }
    if (u) {
      A.element = u;
    }
    var C = l == null ? undefined : l.map(function (t) {
      return k(t, {
        parent: e
      });
    });
    if (h) {
      return reactJsxRuntimeCoreReexport.jsx(reactRouterCoreHooks.RouteComponent, objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, A), {
        index: true
      }), d);
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactRouterCoreHooks.RouteComponent, objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, A), {
        index: false,
        children: C
      }), d);
    }
  }
  function O(e) {
    return e && e.displayName === "Loadable" && e.preload && typeof e.preload == "function";
  }
  var routerCoreImplementation = require("router-core-implementation") /*id: 188358*/;
  function T() {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        margin: "150px auto",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: "404"
    });
  }
  function R() {
    return null;
  }
  function C() {
    var e;
    var t = arguments.length;
    var n = Array(t);
    var r = 0;
    for (; r < t; r++) {
      n[r] = arguments[r];
    }
    var i = RegExp(`/{1,}`, "g");
    if ((e = n.join("/").replace(i, "/")) && typeof e == "string") {
      if (e.startsWith(".")) {
        e = e.slice(1);
      }
      if (!e.startsWith("/")) {
        e = `/${e}`;
      }
      if (e.endsWith("/") && e !== "/") {
        e = e.slice(0, e.length - 1);
      }
    }
    return e;
  }
  var M = {
    routes: []
  };
  function P(e = {}) {
    return {
      name: "@modern-js/plugin-router",
      registryHooks: {
        modifyRoutes: g,
        onBeforeCreateRoutes: v
      },
      setup: function (t) {
        var n = [];
        t.onBeforeRender(function (t) {
          if (window._SSR_DATA && e.unstable_reloadOnURLMismatch) {
            var o = t.ssrContext;
            var a = l(window.location.pathname);
            var s = (o == null ? undefined : o.request?.pathname) && l(o.request.pathname);
            if (s && s !== a) {
              `The initial URL ${s} and the URL ${a} to be hydrated do not match, reload.`;
              window.location.reload();
            }
          }
          t.router = {
            useMatches: reactRouterCoreHooks.useMatches,
            useLocation: reactRouterCoreHooks.useLocation,
            useHref: reactRouterCoreHooks.useHref
          };
          Object.defineProperty(t, "routes", {
            get: function () {
              return n;
            }
          });
        });
        t.wrapRoot(function (l) {
          var p;
          var g;
          var v = t.getRuntimeConfig();
          var b = deepObjectMerge.deepMerge(v.router || {}, e);
          var _ = b.serverBase;
          var w = _ === undefined ? [] : _;
          var E = b.supportHtml5History;
          var S = E === undefined || E;
          var x = b.basename;
          var O = x === undefined ? "" : x;
          var P = b.routesConfig;
          var D = b.createRoutes;
          var j = b.future;
          if ((M = objectAssignPolyfill_3_1.assignProperties({
            routes: appRuntimeContext.getRoutes(),
            globalApp: appRuntimeContext.getLayoutApp()
          }, P)).routes || D) {
            p = function (e) {
              var u;
              var l = reactCoreLibraryReexport.useContext(routeLoaderContext.routerContext);
              var d = (u = location.pathname, w.find(function (e) {
                return u.search(e) === 0;
              }) || "/").replace(/^\/*/, "/");
              var p = d === "/" ? C(d, l._internalRouterBaseName || O) : d;
              var g = window._ROUTER_DATA;
              var v = l.unstable_getBlockNavState;
              return reactCoreLibraryReexport.useMemo(function () {
                if (g == null ? undefined : g.errors) {
                  g = objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, g), {
                    errors: function (e) {
                      if (!e) {
                        return null;
                      }
                      var t = Object.entries(e);
                      var n = {};
                      var r = true;
                      var i = false;
                      var o = undefined;
                      try {
                        var a;
                        var s = t[Symbol.iterator]();
                        for (; !(r = (a = s.next()).done); r = true) {
                          var u = arraySlicePolyfill_1_1.slicedToArray(a.value, 2);
                          var c = u[0];
                          var l = u[1];
                          if (l && l.__type === "RouteErrorResponse") {
                            n[c] = new routerCoreImplementation.ErrorResponse(l.status, l.statusText, l.data, l.internal === true);
                          } else if (l && l.__type === "Error") {
                            var f = Error(l.message);
                            f.stack = l.stack;
                            n[c] = f;
                          } else {
                            n[c] = l;
                          }
                        }
                      } catch (e) {
                        i = true;
                        o = e;
                      } finally {
                        try {
                          if (!r && s.return != null) {
                            s.return();
                          }
                        } finally {
                          if (i) {
                            throw o;
                          }
                        }
                      }
                      return n;
                    }(g.errors)
                  });
                }
                n = D ? D() : reactRouterCoreHooks.createRoutesFromChildren(function (e) {
                  var t = e.routesConfig;
                  var n = e.props;
                  var o = e.ssrMode;
                  if (!t) {
                    return null;
                  }
                  var a = t.routes;
                  var u = t.globalApp;
                  if (a) {
                    return function (e, t) {
                      var n = t.globalApp;
                      var o = t.ssrMode;
                      var a = t.props;
                      function u(e) {
                        var t = e.Component;
                        var r = objectOmitUtil_2_1.omitKeys(e, ["Component"]);
                        if (n) {
                          return reactJsxRuntimeCoreReexport.jsx(n, objectAssignPolyfill_3_1.assignProperties({
                            Component: t
                          }, r));
                        } else {
                          return reactJsxRuntimeCoreReexport.jsx(t, objectAssignPolyfill_3_1.assignProperties({}, r));
                        }
                      }
                      var c = [];
                      var l = true;
                      var f = false;
                      var h = undefined;
                      try {
                        var d;
                        var p = e[Symbol.iterator]();
                        for (; !(l = (d = p.next()).done); l = true) {
                          var g = d.value;
                          if (g.type === "nested") {
                            var v = k(g, {
                              DeferredDataComponent: o === "stream" ? R : undefined,
                              props: a
                            });
                            c.push(v);
                          } else {
                            var y = reactJsxRuntimeCoreReexport.jsx(reactRouterCoreHooks.RouteComponent, {
                              path: g.path,
                              element: reactJsxRuntimeCoreReexport.jsx(u, {
                                Component: g.component
                              })
                            }, g.path);
                            c.push(y);
                          }
                        }
                      } catch (e) {
                        f = true;
                        h = e;
                      } finally {
                        try {
                          if (!l && p.return != null) {
                            p.return();
                          }
                        } finally {
                          if (f) {
                            throw h;
                          }
                        }
                      }
                      c.push(reactJsxRuntimeCoreReexport.jsx(reactRouterCoreHooks.RouteComponent, {
                        path: "*",
                        element: reactJsxRuntimeCoreReexport.jsx(T, {})
                      }, "*"));
                      return c;
                    }(a, {
                      globalApp: u,
                      ssrMode: o,
                      props: n
                    });
                  } else {
                    return null;
                  }
                }({
                  routesConfig: M,
                  props: e
                }));
                n = t.getHooks().modifyRoutes.call(n);
                var u = S ? reactRouterDomBrowserIntegration.createBrowserRouter(n, {
                  basename: p,
                  hydrationData: g
                }) : reactRouterDomBrowserIntegration.createHashRouter(n, {
                  basename: p,
                  hydrationData: g
                });
                var l = u.subscribe;
                u.subscribe = function (e) {
                  return l(function () {
                    var t = arguments.length;
                    var n = Array(t);
                    var r = 0;
                    for (; r < t; r++) {
                      n[r] = arguments[r];
                    }
                    if (!v || !v()) {
                      return e.apply(undefined, polyfillArraySpread.toArray(n));
                    }
                  });
                };
                return u;
              }, [M, e, p, g, v]);
            };
            g = function () {
              return null;
            };
            return function (e) {
              var t = p(e);
              var n = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx(reactRouterDomBrowserIntegration.RouterProvider, {
                  router: t,
                  future: j
                }), reactJsxRuntimeCoreReexport.jsx(g, {}), reactJsxRuntimeCoreReexport.jsx(g, {})]
              });
              if (l) {
                return reactJsxRuntimeCoreReexport.jsx(l, {
                  children: n
                });
              } else {
                return n;
              }
            };
          } else {
            return l;
          }
        });
      }
    };
  }
  function D(e) {
    var t = e.replace(/\[(.*?)\]/g, "($1)");
    return reactRouterCoreHooks.useRouteLoaderData(t);
  }
  require.d(exports, {
    createRouterPlugin: function () {
      return P;
    },
    useRouteLoaderData: function () {
      return D;
    }
  });
}