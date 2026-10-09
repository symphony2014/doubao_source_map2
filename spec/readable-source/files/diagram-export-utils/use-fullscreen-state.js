// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useFullscreenState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27139.0cd87021.js
         * chunkId: 27139
         * moduleId: 463357
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    return {
      fullscreenVisible: e,
      handleEnterFullscreen: () => {
        t(true);
      },
      handleExitFullscreen: () => {
        t(false);
      }
    };
  };
  require.d(exports, {
    useFullscreenState: function () {
      return o;
    }
  });
}