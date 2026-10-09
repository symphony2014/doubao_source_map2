// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useParamsResolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 790576
         */
module.exports = function (module, exports, require) {
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let o = () => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useParams", reactRouterCoreHooks.useParams)();
  require.d(exports, {
    useParamsResolver: function () {
      return o;
    }
  });
}