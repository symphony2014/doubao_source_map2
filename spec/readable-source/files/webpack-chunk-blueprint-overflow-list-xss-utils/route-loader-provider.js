// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'RouteLoaderProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 509568
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routeLoaderContext = require("route-loader-context") /*id: 797273*/;
  function o(e, t) {
    return reactCoreLibraryReexport.createElement(routeLoaderContext.routerContext.Provider, {
      value: t
    }, e);
  }
  require.d(exports, {
    RouteLoaderProvider: function () {
      return o;
    }
  });
}