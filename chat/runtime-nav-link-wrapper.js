// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'RuntimeNavLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 649486
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routerPrefetchLinkWrapper = require("router-prefetch-link-wrapper") /*id: 677031*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = deprecatedEdenxRuntimeResolver.resolveRuntimeValue("NavLink", routerPrefetchLinkWrapper.PrefetchNavLink);
    return reactJsxRuntimeCoreReexport.jsx(n, {
      ...e,
      ref: t
    });
  });
  require.d(exports, {
    RuntimeNavLink: function () {
      return l;
    }
  });
}