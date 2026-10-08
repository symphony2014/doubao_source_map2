// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'createHelmetWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 941380
         */
module.exports = function (module, exports, require) {
  var reactHelmetComponent = require("react-helmet-component") /*id: 885880*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let t = deprecatedEdenxRuntimeResolver.resolveRuntimeValue("Helmet", reactHelmetComponent.Helmet);
    return reactJsxRuntimeCoreReexport.jsx(t, {
      ...e
    });
  };
  require.d(exports, {
    createHelmetWrapper: function () {
      return a;
    }
  });
}