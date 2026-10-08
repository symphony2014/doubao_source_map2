// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'resolveSearchParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 471794
         */
module.exports = function (module, exports, require) {
  var reactRouterDomBrowserIntegration = require("react-router-dom-browser-integration") /*id: 510258*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let o = () => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useSearchParams", reactRouterDomBrowserIntegration.useSearchParams)();
  require.d(exports, {
    resolveSearchParams: function () {
      return o;
    }
  });
}