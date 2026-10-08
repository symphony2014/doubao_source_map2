// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'NoSsrWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 647730
         */
module.exports = function (module, exports, require) {
  var clientOnlyComponent = require("client-only-component") /*id: 25732*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let t = deprecatedEdenxRuntimeResolver.resolveRuntimeValue("NoSSR", clientOnlyComponent.ClientOnly);
    return reactJsxRuntimeCoreReexport.jsx(t, {
      ...e
    });
  };
  require.d(exports, {
    NoSsrWrapper: function () {
      return a;
    }
  });
}