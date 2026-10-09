// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'm' to 'appRuntimeContext'
// - Resolved require(732669) to 'app-runtime-context'
// - Renamed variable 'y' to 'topologicalSinglePassModuleRenamer'
// - Resolved require(533195) to 'topological-single-pass-module-renamer'
// - Renamed variable 'b' to 'chatEntryRoutes'
// - Resolved require(107320) to 'chat-entry-routes'
// - Renamed variable '_' to 'polyfillArraySpread'
// - Resolved require(415168) to 'polyfill-array-spread'
// - Renamed variable 'w' to 'deepObjectMerge'
// - Resolved require(523422) to 'deep-object-merge'
// - Renamed variable 'E' to 'valueTypePolyfill'
// - Resolved require(416304) to 'value-type-polyfill'
// - Renamed variable 'S' to 'objectAssignPolyfill_3_1'
// - Resolved require(732590) to 'object-assign-polyfill_3_1'
// - Renamed variable 'x' to 'objectOmitUtil_2_1'
// - Resolved require(53732) to 'object-omit-util_2_1'
// - Renamed variable 'k' to 'objectAssignPolyfill_1_1'
// - Resolved require(559150) to 'object-assign-polyfill_1_1'
// - Renamed variable 'O' to 'hookExecutorUtils'
// - Resolved require(29916) to 'hook-executor-utils'
// - Renamed variable 'T' to 'asyncGeneratorHelper'
// - Resolved require(198527) to 'async-generator-helper'
// - Renamed variable 'R' to 'typescriptRuntimeHelpers'
// - Resolved require(4100) to 'typescript-runtime-helpers'
// - Renamed variable 'P' to 'modernJsRouterPlugin'
// - Resolved require(658282) to 'modern-js-router-plugin'
// - Renamed variable 'I' to 'ssrRenderConstants_1'
// - Resolved require(95731) to 'ssr-render-constants_1'
// - Renamed variable 'N' to 'instanceOfPolyfill'
// - Resolved require(404913) to 'instance-of-polyfill'
// - Renamed variable 'L' to 'arraySlicePolyfill_1_1'
// - Resolved require(240168) to 'array-slice-polyfill_1_1'
// - Renamed variable 'B' to 'cookieParseSerialize'
// - Resolved require(978997) to 'cookie-parse-serialize'
// - Renamed variable 'Z' to 'routeLoaderContext'
// - Resolved require(797273) to 'route-loader-context'
// - Renamed variable 'U' to 'asyncLoaderManager'
// - Resolved require(661071) to 'async-loader-manager'
// - Renamed variable 'z' to 'routeLoaderProvider'
// - Resolved require(509568) to 'route-loader-provider'
// - Renamed variable 'F' to 'ssrRouteRenderer'
// - Resolved require(470519) to 'ssr-route-renderer'
// - Resolved require.e(43361) to 'lib-react'
// - Resolved require.e(43361) to 'lib-react'
// - Renamed variable 'q' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'cE' to 'initAppState' (module 732669)
// - Updated imported property 'nB' to 'getAppConfig' (module 732669)
// - Updated imported property 'hb' to 'setRuntimeContext' (module 732669)
// - Updated imported property 'Uk' to 'getRuntimeContext' (module 732669)
// - Updated imported property 'Hb' to 'getAppInit' (module 732669)
// - Updated imported property 'FM' to 'getApp' (module 732669)
// - Updated imported property '_' to 'chatRouteConfig' (module 107320)
// - Updated imported property '_' to 'assignProperties' (module 559150)
// - Updated imported property '_' to 'assignProperties' (module 732590)
// - Updated imported property 'Ol' to 'createAsyncExecutor' (module 29916)
// - Updated imported property 'y2' to 'createSyncExecutor' (module 29916)
// - Updated imported property 'rG' to 'createCollector' (module 29916)
// - Updated imported property '_' to 'omitKeys' (module 53732)
// - Updated imported property 'T' to 'deepMerge' (module 523422)
// - Updated imported property '_' to 'getType' (module 416304)
// - Updated imported property '_' to 'toArray' (module 415168)
// - Updated imported property 'ZP' to 'createRouterPlugin' (module 658282)
// - Updated imported property '_' to 'asyncWrapper' (module 198527)
// - Updated imported property 'Jh' to 'generator' (module 4100)
// - Updated imported property 'zv' to 'createRouterContext' (module 797273)
// - Updated imported property '_' to 'instanceOfCheck' (module 404913)
// - Updated imported property '_' to 'slicedToArray' (module 240168)
// - Updated imported property 'K' to 'asyncLoaderManager' (module 661071)
// - Updated imported property 'a' to 'renderRoute' (module 470519)
// - Updated imported property 'a' to 'RouteLoaderProvider' (module 509568)
// - Updated imported property 'pc' to 'ssrDataKey' (module 95731)
// - Updated imported property 'Ni' to 'routerDataKey' (module 95731)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 980690
         */
module.exports = function (module, exports, require) {
  let r;
  let i;
  let o;
  var a;
  var s;
  var u;
  var c;
  var l;
  var f;
  var h;
  var d;
  var p;
  var g;
  var v;
  var appRuntimeContext = require("app-runtime-context") /*id: 732669*/;
  var topologicalSinglePassModuleRenamer = require("topological-single-pass-module-renamer") /*id: 533195*/;
  var chatEntryRoutes = require("chat-entry-routes") /*id: 107320*/;
  appRuntimeContext.initAppState({
    entryName: "chat",
    layoutApp: i,
    routes: chatEntryRoutes.chatRouteConfig,
    appInit: topologicalSinglePassModuleRenamer.init,
    appConfig: r
  });
  var polyfillArraySpread = require("polyfill-array-spread") /*id: 415168*/;
  var deepObjectMerge = require("deep-object-merge") /*id: 523422*/;
  var valueTypePolyfill = require("value-type-polyfill") /*id: 416304*/;
  var objectAssignPolyfill_3_1 = require("object-assign-polyfill_3_1") /*id: 732590*/;
  var objectOmitUtil_2_1 = require("object-omit-util_2_1") /*id: 53732*/;
  var objectAssignPolyfill_1_1 = require("object-assign-polyfill_1_1") /*id: 559150*/;
  var hookExecutorUtils = require("hook-executor-utils") /*id: 29916*/;
  s = function (e) {
    h.clear();
    a = e;
    var t = e.plugins;
    var n = e.handleSetupResult;
    h.addPlugins(t);
    var r = h.getPlugins();
    f = (l = {
      runtimeContext: {},
      config: a.config,
      plugins: r
    }).runtimeContext;
    d = l.config;
    p = l.plugins;
    g = {};
    p.forEach(function (e) {
      var t = e.registryHooks;
      var n = t === undefined ? {} : t;
      Object.keys(n).forEach(function (e) {
        g[e] = n[e];
      });
    });
    var i = objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, f), {
      hooks: objectAssignPolyfill_3_1.assignProperties({}, {
        onBeforeRender: hookExecutorUtils.createAsyncExecutor(),
        wrapRoot: hookExecutorUtils.createSyncExecutor(),
        pickContext: hookExecutorUtils.createSyncExecutor(),
        config: hookExecutorUtils.createCollector()
      }, g),
      extendsHooks: g,
      config: d
    });
    var o = function (e) {
      var t = e.context;
      var n = e.plugins;
      var r = t.hooks;
      var i = t.extendsHooks;
      function o() {
        if (t) {
          t.hooks;
          t.extendsHooks;
          t.config;
          t.pluginAPI;
          var e = objectOmitUtil_2_1.omitKeys(t, ["hooks", "extendsHooks", "config", "pluginAPI"]);
          e._internalContext = t;
          return e;
        }
        throw Error("Cannot access context");
      }
      function a(e) {
        t = deepObjectMerge.deepMerge(t, e);
      }
      var s = {};
      n.forEach(function (e) {
        var t = e._registryApi;
        if (t) {
          var n = t(o, a);
          Object.keys(n).forEach(function (e) {
            s[e] = n[e];
          });
        }
      });
      if (i) {
        Object.keys(i).forEach(function (e) {
          s[e] = i[e].tap;
        });
      }
      return new Proxy(objectAssignPolyfill_3_1.assignProperties({
        updateRuntimeContext: a,
        getHooks: function () {
          return objectAssignPolyfill_3_1.assignProperties({}, r, i);
        },
        getRuntimeConfig: function () {
          if (t.config) {
            return t.config;
          }
          throw Error("Cannot access config");
        },
        config: r.config.tap,
        onBeforeRender: r.onBeforeRender.tap,
        wrapRoot: r.wrapRoot.tap,
        pickContext: r.pickContext.tap
      }, s), {
        get: function (e, t) {
          if (t === "then") {
            return undefined;
          } else if (t in e) {
            return e[t];
          } else {
            return function () {};
          }
        }
      });
    }({
      context: i,
      pluginManager: h,
      plugins: r
    });
    i.pluginAPI = o;
    var s = true;
    var u = false;
    var c = undefined;
    try {
      var l;
      var f;
      var d;
      var p;
      var g;
      var v;
      var m = r[Symbol.iterator]();
      for (; !(s = (v = m.next()).done); s = true) {
        var y;
        var b = v.value;
        var _ = (y = b.setup) === null || y === undefined ? undefined : y.call(b, o);
        if (n) {
          n(_, o);
        }
      }
    } catch (e) {
      u = true;
      c = e;
    } finally {
      try {
        if (!s && m.return != null) {
          m.return();
        }
      } finally {
        if (u) {
          throw c;
        }
      }
    }
    return {
      runtimeContext: i
    };
  };
  u = new Map();
  c = new Map();
  l = function (e, t, n) {
    if (!c.has(t)) {
      c.set(t, {
        pre: new Map(),
        post: new Map()
      });
    }
    if (n === "pre") {
      c.get(e).pre.set(t, {
        name: t,
        isUse: false
      });
    } else if (n === "post") {
      c.get(e).post.set(t, {
        name: t
      });
    } else if (n === "use" && !c.get(e).post.has(t) && !c.get(t).pre.has(e)) {
      c.get(e).pre.set(t, {
        name: t,
        isUse: true
      });
    }
  };
  f = function (e) {
    if (e) {
      (function (e) {
        var t = e === undefined ? "undefined" : valueTypePolyfill.getType(e);
        if (t !== "object" || e === null) {
          throw Error(`Expect CLI Plugin instance to be an object, but got ${t}.`);
        }
        if (e.setup) {
          if (typeof e.setup == "function") {
            return;
          }
          throw Error(`Expect CLI Plugin plugin.setup to be a function, but got ${t}.`);
        }
      })(e);
      var t = e.name;
      var n = e.usePlugins;
      var r = e.pre;
      var i = e.post;
      if (!u.has(t)) {
        u.set(t, e);
        c.set(t, {
          pre: new Map(),
          post: new Map()
        });
        (r === undefined ? [] : r).forEach(function (e) {
          l(t, e, "pre");
        });
        (i === undefined ? [] : i).forEach(function (e) {
          l(t, e, "post");
        });
        (n === undefined ? [] : n).forEach(function (e) {
          if (!u.has(e.name)) {
            f(e);
          }
          l(t, e.name, "use");
        });
      }
    }
  };
  h = {
    getPlugins: function () {
      var e = new Set();
      var t = new Set();
      var n = [];
      function r(i) {
        if (t.has(i)) {
          throw Error(`Circular dependency detected: ${i}`);
        }
        if (!e.has(i) && u.get(i)) {
          t.add(i);
          var o = u.get(i).required;
          (o === undefined ? [] : o).forEach(function (e) {
            if (!u.get(e)) {
              throw Error(`${i} plugin required plugin ${e}, but not found.`);
            }
          });
          var a = c.get(i).pre;
          Array.from(a.values()).filter(function (e) {
            return !e.isUse;
          }).forEach(function (e) {
            return r(e.name);
          });
          Array.from(a.values()).filter(function (e) {
            return e.isUse;
          }).forEach(function (e) {
            return r(e.name);
          });
          t.delete(i);
          e.add(i);
          n.push(u.get(i));
        }
      }
      u.forEach(function (e, t) {
        c.get(t).post.forEach(function (e) {
          if (!c.get(e.name).pre.has(t)) {
            c.get(e.name).pre.set(t, {
              name: t,
              isUse: false
            });
          }
        });
      });
      u.forEach(function (e, t) {
        r(t);
      });
      return n = n.filter(function (e) {
        return e;
      });
    },
    addPlugins: function (e) {
      var t = true;
      var n = false;
      var r = undefined;
      try {
        var i;
        var o = e[Symbol.iterator]();
        for (; !(t = (i = o.next()).done); t = true) {
          var a = i.value;
          f(a);
        }
      } catch (e) {
        n = true;
        r = e;
      } finally {
        try {
          if (!t && o.return != null) {
            o.return();
          }
        } finally {
          if (n) {
            throw r;
          }
        }
      }
    },
    clear: function () {
      u.clear();
      c.clear();
    },
    isPluginExists: function (e) {
      return u.has(e);
    }
  };
  var A = {
    run: function (e) {
      var t = s(e).runtimeContext;
      var n = t.hooks.config.call().filter(function (e) {
        return !!e;
      });
      t.config = deepObjectMerge.deepMerge.apply(undefined, [{}].concat(polyfillArraySpread.toArray(n), [t.config || {}]));
      return {
        runtimeContext: t
      };
    }
  };
  var asyncGeneratorHelper = require("async-generator-helper") /*id: 198527*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function C(e) {
    var t = e.ssrContext;
    if (t) {
      return {
        isBrowser: e.isBrowser,
        request: t.request || {},
        response: t.response || {},
        logger: t.logger || {}
      };
    } else {
      return {};
    }
  }
  function M(e) {
    var t = arguments.length;
    var n = Array(t > 1 ? t - 1 : 0);
    var r = 1;
    for (; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    return deepObjectMerge.deepMerge.apply(undefined, [{}, e].concat(polyfillArraySpread.toArray(n)));
  }
  var modernJsRouterPlugin = require("modern-js-router-plugin") /*id: 658282*/;
  let D = [];
  D.push(function (e = {}) {
    return {
      name: "@edenx/plugin-context-compat",
      setup: function () {
        return {
          beforeRender: function (t) {
            t.extra = objectAssignPolyfill_3_1.assignProperties({}, (t == null ? undefined : t.extra) || {}, e);
            t.utils = t.utils || {};
            Object.defineProperty(t, "_context", {
              get: function () {
                return t.context;
              }
            });
            Object.defineProperty(t, "_utils", {
              get: function () {
                return t.utils;
              }
            });
          },
          pickContext: function (e) {
            return objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, e), {
              Plugins: objectAssignPolyfill_3_1.assignProperties({}, e.Plugins || {}),
              get _context() {
                return e.context;
              },
              get _utils() {
                return e.utils;
              }
            });
          }
        };
      }
    };
  }(M({}, (o || {}).contextCompat, ((o || {}).contextCompatByEntries || {}).chat, (appRuntimeContext.getAppConfig() || {}).contextCompat)));
  D.push((d = M({
    serverBase: ["/chat"]
  }, (o || {}).router, ((o || {}).routerByEntries || {}).chat, (appRuntimeContext.getAppConfig() || {}).router), objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, modernJsRouterPlugin.createRouterPlugin(d || {})), {
    name: "@edenx/plugin-router"
  })));
  p = (o || {}).plugins;
  g = A.run({
    plugins: [{
      name: "@modern-js/runtime-plugin-compat",
      _registryApi: function (e) {
        return {
          useRuntimeConfigContext: function () {
            return e()._internalContext.config;
          },
          useHookRunners: function () {
            var t;
            var n;
            t = e()._internalContext.hooks;
            return {
              beforeRender: (n = asyncGeneratorHelper.asyncWrapper(function (e) {
                return typescriptRuntimeHelpers.generator(this, function (n) {
                  return [2, t.onBeforeRender.call(e)];
                });
              }), function (e) {
                return n.apply(this, arguments);
              }),
              wrapRoot: function (e) {
                return t.wrapRoot.call(e);
              },
              pickContext: function (e) {
                return t.pickContext.call(e);
              },
              config: function () {
                return t.config.call();
              }
            };
          }
        };
      }
    }, {
      name: "@modern-js/runtime-plugin-request-context",
      setup: function (e) {
        e.onBeforeRender(function (e) {
          var t = C(e);
          e.context = t;
        });
      }
    }].concat(polyfillArraySpread.toArray(D), polyfillArraySpread.toArray(p === undefined ? [] : p)),
    config: o || {},
    handleSetupResult: function (e, t) {
      if (e) {
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          if (typeof r == "function") {
            var i;
            var o = (i = n) === "beforeRender" ? "onBeforeRender" : i;
            if (t[o]) {
              if (n === "beforeRender") {
                t[o](asyncGeneratorHelper.asyncWrapper(function () {
                  var e;
                  var t;
                  var n;
                  var i = arguments;
                  return typescriptRuntimeHelpers.generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        t = Array(e = i.length);
                        n = 0;
                        for (; n < e; n++) {
                          t[n] = i[n];
                        }
                        return [4, r.apply(undefined, polyfillArraySpread.toArray(t))];
                      case 1:
                        o.sent();
                        return [2];
                    }
                  });
                }));
              } else {
                t[o](function () {
                  var e = arguments.length;
                  var t = Array(e);
                  var n = 0;
                  for (; n < e; n++) {
                    t[n] = arguments[n];
                  }
                  return r.apply(undefined, polyfillArraySpread.toArray(t));
                });
              }
            }
          }
        });
      }
    }
  }).runtimeContext;
  appRuntimeContext.setRuntimeContext(g);
  function j(e) {
    var t = document.querySelectorAll(`#${e}`);
    if (t.length !== 0) {
      var n = t[t.length - 1];
      if (n) {
        try {
          return JSON.parse((n == null ? undefined : n.textContent) || "");
        } catch (e) {}
      }
    }
  }
  var ssrRenderConstants_1 = require("ssr-render-constants_1") /*id: 95731*/;
  var instanceOfPolyfill = require("instance-of-polyfill") /*id: 404913*/;
  var arraySlicePolyfill_1_1 = require("array-slice-polyfill_1_1") /*id: 240168*/;
  var cookieParseSerialize = require("cookie-parse-serialize") /*id: 978997*/;
  var routeLoaderContext = require("route-loader-context") /*id: 797273*/;
  var asyncLoaderManager = require("async-loader-manager") /*id: 661071*/;
  var routeLoaderProvider = require("route-loader-provider") /*id: 509568*/;
  var ssrRouteRenderer = require("ssr-route-renderer") /*id: 470519*/;
  function H() {
    return (H = asyncGeneratorHelper.asyncWrapper(function (e, t) {
      var n;
      var r;
      var i;
      var o;
      var u;
      var c;
      var l;
      var f;
      var h;
      function d() {
        return (d = asyncGeneratorHelper.asyncWrapper(function (e) {
          return typescriptRuntimeHelpers.generator(this, function (t) {
            return [2, function (e, t) {
              return G.apply(this, arguments);
            }(e, h)];
          });
        })).apply(this, arguments);
      }
      function p() {
        return (p = asyncGeneratorHelper.asyncWrapper(function (e, t) {
          return typescriptRuntimeHelpers.generator(this, function (n) {
            return [2, function (e, t) {
              return $.apply(this, arguments);
            }(e, h, t)];
          });
        })).apply(this, arguments);
      }
      return typescriptRuntimeHelpers.generator(this, function (g) {
        switch (g.label) {
          case 0:
            var v;
            var w;
            var E;
            n = routeLoaderContext.createRouterContext();
            v = asyncGeneratorHelper.asyncWrapper(function (e) {
              var t;
              var n;
              return typescriptRuntimeHelpers.generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    (t = appRuntimeContext.getRuntimeContext()).pluginAPI.updateRuntimeContext(e);
                    return [4, t.hooks.onBeforeRender.call(e)];
                  case 1:
                    r.sent();
                    return [2, (n = appRuntimeContext.getAppInit()) == null ? undefined : n(e)];
                }
              });
            });
            r = function (e) {
              return v.apply(this, arguments);
            };
            if (t !== undefined && typeof t != "string" && (typeof HTMLElement == "undefined" || !instanceOfPolyfill.instanceOfCheck(t, HTMLElement))) {
              return [3, 2];
            }
            i = function (e) {
              return d.apply(this, arguments);
            };
            o = function (e, t) {
              return p.apply(this, arguments);
            };
            E = (w = window._SSR_DATA) == null ? undefined : w.context?.request;
            l = Object.keys(c = (u = objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, w || {
              renderLevel: 0,
              mode: "string"
            }), {
              context: objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, (w == null ? undefined : w.context) || {}), {
                request: objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, (w == null ? undefined : w.context?.request) || {}), {
                  params: (E == null ? undefined : E.params) || {},
                  host: (E == null ? undefined : E.host) || location.host,
                  pathname: (E == null ? undefined : E.pathname) || location.pathname,
                  headers: (E == null ? undefined : E.headers) || {},
                  cookieMap: cookieParseSerialize.parse(document.cookie || "") || {},
                  cookie: document.cookie || "",
                  userAgent: (E == null ? undefined : E.headers?.["user-agent"]) || navigator.userAgent,
                  referer: document.referrer,
                  query: objectAssignPolyfill_3_1.assignProperties({}, window.location.search.substring(1).split("&").reduce(function (e, t) {
                    var n = arraySlicePolyfill_1_1.slicedToArray(t.split("="), 2);
                    var r = n[0];
                    var i = n[1];
                    if (r) {
                      e[r] = i;
                    }
                    return e;
                  }, {}), (E == null ? undefined : E.query) || {}),
                  url: location.href
                })
              })
            })).data?.loadersData || {}).reduce(function (e, t) {
              var n = c[t];
              if ((n == null ? undefined : n.loading) === false) {
                e[t] = n;
              }
              return e;
            }, {});
            Object.assign(n, {
              loaderManager: asyncLoaderManager.asyncLoaderManager(l, {
                skipStatic: true
              }),
              _internalRouterBaseName: e.props.basename,
              ssrContext: u.context
            });
            n.initialData = u.data?.initialData;
            return [4, r(n)];
          case 1:
            if (f = g.sent()) {
              n.initialData = f;
            }
            h = t && typeof t != "string" ? t : document.getElementById(t || "root");
            if (window._SSR_DATA) {
              return [2, ssrRouteRenderer.renderRoute(e, n, i, o)];
            }
            return [2, i(routeLoaderProvider.RouteLoaderProvider(e, n))];
          case 2:
            throw Error("`render` function needs id in browser environment, it needs to be string or element");
        }
      });
    })).apply(this, arguments);
  }
  function G() {
    return (G = asyncGeneratorHelper.asyncWrapper(function (e, t) {
      var r;
      return typescriptRuntimeHelpers.generator(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, require.e("lib-react") /*id: 43361*/.then(require.t.bind(require, 306316, 19))];
          case 1:
            (r = i.sent().createRoot(t)).render(e);
            return [2, r];
        }
      });
    })).apply(this, arguments);
  }
  function V() {
    return (V = asyncGeneratorHelper.asyncWrapper(function (e, t) {
      return typescriptRuntimeHelpers.generator(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, Promise.resolve().then(require.t.bind(require, 640848, 19))];
          case 1:
            r.sent().render(e, t);
            return [2, t];
        }
      });
    })).apply(this, arguments);
  }
  function $() {
    return ($ = asyncGeneratorHelper.asyncWrapper(function (e, t) {
      return typescriptRuntimeHelpers.generator(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, require.e("lib-react") /*id: 43361*/.then(require.t.bind(require, 306316, 19))];
          case 1:
            return [2, r.sent().hydrateRoot(t, e)];
        }
      });
    })).apply(this, arguments);
  }
  function W() {
    return (W = asyncGeneratorHelper.asyncWrapper(function (e, t, r) {
      return typescriptRuntimeHelpers.generator(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, Promise.resolve().then(require.t.bind(require, 640848, 19))];
          case 1:
            return [2, i.sent().hydrate(e, t, r)];
        }
      });
    })).apply(this, arguments);
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  v = appRuntimeContext.getApp();
  if (typeof window != "undefined" && window.name !== "nodejs") {
    window._SSR_DATA = window._SSR_DATA || j(ssrRenderConstants_1.ssrDataKey);
    window._ROUTER_DATA = window._ROUTER_DATA || j(ssrRenderConstants_1.routerDataKey);
  }
  let K = appRuntimeContext.getRuntimeContext().hooks.wrapRoot.call(v);
  (function (e, t) {
    H.apply(this, arguments);
  })(reactJsxRuntimeCoreReexport.jsx(K, {}), "root");
}