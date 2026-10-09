// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'createNavigateComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.551adcd1.js
         * chunkId: 66934
         * moduleId: 870881
         */
module.exports = function (module, exports, require) {
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = t => {
    let e = deprecatedEdenxRuntimeResolver.resolveRuntimeValue("Navigate", reactRouterCoreHooks.NavigateComponent);
    return reactJsxRuntimeCoreReexport.jsx(e, {
      ...t
    });
  };
  require.d(exports, {
    createNavigateComponent: function () {
      return s;
    }
  });
}