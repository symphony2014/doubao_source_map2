// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useBeforeUnloadWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 632763
         */
module.exports = function (module, exports, require) {
  var reactRouterDomBrowserIntegration = require("react-router-dom-browser-integration") /*id: 510258*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let r = e => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useBeforeUnload", reactRouterDomBrowserIntegration.Prompt)(e);
  require.d(exports, {
    useBeforeUnloadWrapper: function () {
      return r;
    }
  });
}