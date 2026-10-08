// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'usePickContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 120184
         */
module.exports = function (module, exports, require) {
  var asyncGeneratorHelper = require("async-generator-helper") /*id: 198527*/;
  var instanceOfPolyfill = require("instance-of-polyfill") /*id: 404913*/;
  var objectAssignPolyfill_3_1 = require("object-assign-polyfill_3_1") /*id: 732590*/;
  var objectAssignPolyfill_1_1 = require("object-assign-polyfill_1_1") /*id: 559150*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var modernjsRouteConstants = require("modernjs-route-constants") /*id: 45491*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var ssrRouteRenderer = require("ssr-route-renderer") /*id: 470519*/;
  var appRuntimeContext = require("app-runtime-context") /*id: 732669*/;
  var routeLoaderContext = require("route-loader-context") /*id: 797273*/;
  var asyncLoaderManager = require("async-loader-manager") /*id: 661071*/;
  var routeLoaderProvider = require("route-loader-provider") /*id: 509568*/;
  asyncGeneratorHelper.asyncWrapper(function (e, t, n, a) {
    var o;
    var c;
    var h;
    var m;
    var v;
    var y;
    var x;
    var S;
    var C;
    var j;
    var O;
    var R;
    var E;
    return typescriptRuntimeHelpers.generator(this, function (P) {
      switch (P.label) {
        case 0:
          var k;
          o = e;
          h = (c = appRuntimeContext.getRuntimeContext()).pluginAPI;
          m = c.hooks;
          v = {
            loaderManager: asyncLoaderManager.asyncLoaderManager({}),
            isBrowser: true,
            routeManifest: typeof window != "undefined" && window[modernjsRouteConstants.routeManifestKey]
          };
          h.updateRuntimeContext(v);
          k = asyncGeneratorHelper.asyncWrapper(function (e) {
            var t;
            return typescriptRuntimeHelpers.generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, m.onBeforeRender.call(e)];
                case 1:
                  n.sent();
                  return [2, (t = appRuntimeContext.getAppInit()) == null ? undefined : t(e)];
              }
            });
          });
          y = function (e) {
            return k.apply(this, arguments);
          };
          if (!t) {
            return [2, routeLoaderProvider.RouteLoaderProvider(reactJsxRuntimeCoreReexport.jsx(o, {}), v)];
          }
          if (typeof window == "undefined" || window.name === "nodejs") {
            return [3, 4];
          }
          if (typeof t != "string" && (typeof HTMLElement == "undefined" || !instanceOfPolyfill.instanceOfCheck(t, HTMLElement))) {
            return [3, 2];
          }
          C = Object.keys(S = ((x = window._SSR_DATA) == null ? undefined : x.data?.loadersData) || {}).reduce(function (e, t) {
            var n = S[t];
            if ((n == null ? undefined : n.loading) === false) {
              e[t] = n;
            }
            return e;
          }, {});
          Object.assign(v, {
            loaderManager: asyncLoaderManager.asyncLoaderManager(C, {
              skipStatic: true
            }),
            ssrContext: (x == null ? undefined : x.context) || {}
          });
          v.initialData = x == null ? undefined : x.data?.initialData;
          return [4, y(v)];
        case 1:
          if (j = P.sent()) {
            v.initialData = j;
          }
          O = typeof t != "string" ? t : document.getElementById(t || "root");
          if (!a) {
            throw Error("The `bootstrap` need provide `ReactDOM` parameter");
          }
          R = function (e) {
            if (n) {
              n.render(e);
              return n;
            }
            if (a.createRoot) {
              var t = a.createRoot(O);
              t.render(e);
              return t;
            }
            throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `createRoot` method");
          };
          E = function (e, t) {
            if (!a.hydrateRoot) {
              throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `hydrateRoot` method");
            }
            a.hydrateRoot(O, e);
            return O;
          };
          if (x) {
            return [2, ssrRouteRenderer.renderRoute(reactJsxRuntimeCoreReexport.jsx(o, {}), v, R, E)];
          }
          return [2, R(routeLoaderProvider.RouteLoaderProvider(reactJsxRuntimeCoreReexport.jsx(o, {}), v))];
        case 2:
          throw Error("`bootstrap` needs id in browser environment, it needs to be string or element");
        case 3:
          return [3, 5];
        case 4:
          throw Error("Bootstrap function not support ssr render");
        case 5:
          return [2];
      }
    });
  });
  function m() {
    var n = reactCoreLibraryReexport.useContext(routeLoaderContext.routerContext);
    var r = objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, n), {
      context: n.context || {},
      request: n.ssrContext?.request,
      response: n.ssrContext?.response
    });
    var i = appRuntimeContext.getRuntimeContext().hooks;
    return reactCoreLibraryReexport.useMemo(function () {
      return i.pickContext.call(r);
    }, [n]);
  }
  function v() {
    return m();
  }
  require.d(exports, {
    usePickContext: function () {
      return v;
    }
  });
}