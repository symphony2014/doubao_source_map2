// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useEnvEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 65058
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = require("detect-window-environment") /*id: 314742*/.isWindowAvailable ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  require.d(exports, {
    useEnvEffect: function () {
      return r;
    }
  });
}