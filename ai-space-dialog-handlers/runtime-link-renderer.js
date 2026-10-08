// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'RuntimeLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-receive-message-render.0bf9bb67.js
         * chunkId: 15692
         * moduleId: 870490
         */
module.exports = function (module, exports, require) {
  var routerPrefetchLinkWrapper = require("router-prefetch-link-wrapper") /*id: 677031*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = t => {
    let e = deprecatedEdenxRuntimeResolver.resolveRuntimeValue("Link", routerPrefetchLinkWrapper.PrefetchLink);
    return reactJsxRuntimeCoreReexport.jsx(e, {
      ...t
    });
  };
  require.d(exports, {
    RuntimeLink: function () {
      return o;
    }
  });
}