// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'useRouteLoaderData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 131455
         */
module.exports = function (module, exports, require) {
  var modernJsRouterPlugin = require("modern-js-router-plugin") /*id: 658282*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let o = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useRouteLoaderData", modernJsRouterPlugin.useRouteLoaderData)(...t);
  };
  require.d(exports, {
    useRouteLoaderData: function () {
      return o;
    }
  });
}