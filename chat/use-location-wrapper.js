// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useLocationWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 999635
         */
module.exports = function (module, exports, require) {
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let o = () => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useLocation", reactRouterCoreHooks.useLocation)();
  require.d(exports, {
    useLocationWrapper: function () {
      return o;
    }
  });
}