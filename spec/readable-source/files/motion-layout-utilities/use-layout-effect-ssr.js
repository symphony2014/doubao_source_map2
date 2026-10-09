// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useSafeLayoutEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 730770
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = require("browser-env-check_1") /*id: 647758*/.isBrowser ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  require.d(exports, {
    useSafeLayoutEffect: function () {
      return r;
    }
  });
}