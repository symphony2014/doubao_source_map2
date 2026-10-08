// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm5' to 'serverLoader'
// - Renamed export 'p9' to 'routeManifestKey'
// - Renamed export 'u$' to 'routeModulesKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 45491
         */
module.exports = function (module, exports, require) {
  var r = "_MODERNJS_ROUTE_MANIFEST";
  var i = "_routeModules";
  var o = "server-loader";
  require.d(exports, {
    serverLoader: function () {
      return o;
    },
    routeManifestKey: function () {
      return r;
    },
    routeModulesKey: function () {
      return i;
    }
  });
}