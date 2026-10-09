// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JO' to 'routerContext'
// - Renamed export 'zv' to 'createRouterContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 797273
         */
module.exports = function (module, exports, require) {
  var modernjsRouteConstants = require("modernjs-route-constants") /*id: 45491*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncLoaderManager = require("async-loader-manager") /*id: 661071*/;
  var a = reactCoreLibraryReexport.createContext({});
  reactCoreLibraryReexport.createContext({});
  function s() {
    var e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return {
      loaderManager: asyncLoaderManager.asyncLoaderManager({}),
      isBrowser: e,
      routeManifest: t || typeof window != "undefined" && window[modernjsRouteConstants.routeManifestKey]
    };
  }
  require.d(exports, {
    routerContext: function () {
      return a;
    },
    createRouterContext: function () {
      return s;
    }
  });
}