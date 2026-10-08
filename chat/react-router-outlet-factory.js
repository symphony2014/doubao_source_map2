// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createOutletElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 482474
         */
module.exports = function (module, exports, require) {
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let t = deprecatedEdenxRuntimeResolver.resolveRuntimeValue("Outlet", reactRouterCoreHooks.OutletComponent);
    return reactJsxRuntimeCoreReexport.jsx(t, {
      ...e
    });
  };
  require.d(exports, {
    createOutletElement: function () {
      return a;
    }
  });
}