// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useRuntimeContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 761917
         */
module.exports = function (module, exports, require) {
  var modernjsClientBootstrap = require("modernjs-client-bootstrap") /*id: 120184*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let a = () => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useRuntimeContext", modernjsClientBootstrap.usePickContext)();
  require.d(exports, {
    useRuntimeContext: function () {
      return a;
    }
  });
}