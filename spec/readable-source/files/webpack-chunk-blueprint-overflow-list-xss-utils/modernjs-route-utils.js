// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RC' to 'createRevalidate'
// - Renamed export 'UC' to 'getDefaultUpdate'
// - Renamed export 'u3' to 'registerRouteModule'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 712477
         */
module.exports = function (module, exports, require) {
  var modernjsRouteConstants = require("modernjs-route-constants") /*id: 45491*/;
  function i(e) {
    return function (t) {
      var i;
      var o = (i = window) === null || i === undefined ? undefined : i[modernjsRouteConstants.routeModulesKey]?.[e];
      if (o && typeof o.shouldRevalidate == "function") {
        return o.shouldRevalidate(t);
      } else {
        return t.defaultShouldRevalidate;
      }
    };
  }
  function o(e, t) {
    if (typeof document != "undefined") {
      window[modernjsRouteConstants.routeModulesKey][t] = e;
    }
    return e;
  }
  function a(e) {
    return null;
  }
  require.d(exports, {
    createRevalidate: function () {
      return i;
    },
    getDefaultUpdate: function () {
      return a;
    },
    registerRouteModule: function () {
      return o;
    }
  });
}