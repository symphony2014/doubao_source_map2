// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useEnvironmentEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 956112
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = require("browser-env-check") /*id: 512008*/.isBrowser ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  require.d(exports, {
    useEnvironmentEffect: function () {
      return r;
    }
  });
}