// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'renderRoute'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 470519
         */
module.exports = function (module, exports, require) {
  var objectAssignPolyfill_3_1 = require("object-assign-polyfill_3_1") /*id: 732590*/;
  var objectAssignPolyfill_1_1 = require("object-assign-polyfill_1_1") /*id: 559150*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var loadableComponentCore = require("loadable-component-core") /*id: 924950*/;
  var ssrRenderConstants_1 = require("ssr-render-constants_1") /*id: 95731*/;
  var routeLoaderProvider = require("route-loader-provider") /*id: 509568*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function l(e) {
    var t = e.callback;
    var n = e.children;
    var r = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useLayoutEffect(function () {
      if (!r.current) {
        r.current = true;
        t();
      }
    }, [t]);
    return n;
  }
  function f() {
    return true;
  }
  function h(e, t, n, c) {
    var d;
    var g;
    var v = objectAssignPolyfill_1_1.assignProperties(objectAssignPolyfill_3_1.assignProperties({}, t), {
      get routes() {
        return t.routes;
      },
      _hydration: true
    });
    function m() {
      delete v._hydration;
    }
    var y = ((d = window) === null || d === undefined ? undefined : d._SSR_DATA?.renderLevel) || ssrRenderConstants_1.RenderMode.CLIENT_RENDER;
    var b = ((g = window) === null || g === undefined ? undefined : g._SSR_DATA?.mode) || "string";
    if (f() && b === "stream") {
      if (y === ssrRenderConstants_1.RenderMode.SERVER_RENDER) {
        return c(routeLoaderProvider.RouteLoaderProvider(reactJsxRuntimeCoreReexport.jsx(function () {
          return reactJsxRuntimeCoreReexport.jsx(l, {
            callback: m,
            children: e
          });
        }, {}), v));
      } else {
        return n(routeLoaderProvider.RouteLoaderProvider(e, t));
      }
    } else if (y === ssrRenderConstants_1.RenderMode.CLIENT_RENDER || y === ssrRenderConstants_1.RenderMode.SERVER_PREFETCH) {
      return n(routeLoaderProvider.RouteLoaderProvider(e, t));
    } else if (y === ssrRenderConstants_1.RenderMode.SERVER_RENDER) {
      return new Promise(function (t) {
        if (f()) {
          loadableComponentCore.loadableReady(function () {
            c(routeLoaderProvider.RouteLoaderProvider(reactJsxRuntimeCoreReexport.jsx(function () {
              return reactJsxRuntimeCoreReexport.jsx(l, {
                callback: m,
                children: e
              });
            }, {}), v)).then(function (e) {
              t(e);
            });
          });
        } else {
          loadableComponentCore.loadableReady(function () {
            c(routeLoaderProvider.RouteLoaderProvider(e, v), m).then(function (e) {
              t(e);
            });
          });
        }
      });
    } else {
      return n(routeLoaderProvider.RouteLoaderProvider(e, t));
    }
  }
  require.d(exports, {
    renderRoute: function () {
      return h;
    }
  });
}