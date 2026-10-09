// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'useNavigateResolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 267059
         */
module.exports = function (module, exports, require) {
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let o = () => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useNavigate", reactRouterCoreHooks.useNavigate)();
  require.d(exports, {
    useNavigateResolver: function () {
      return o;
    }
  });
}