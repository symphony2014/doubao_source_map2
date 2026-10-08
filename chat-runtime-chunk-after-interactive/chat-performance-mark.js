// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'trackPerformance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 706746
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = e => {
    let {
      type: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      performance.mark(`${t}_obSug`);
    }, []);
    return null;
  };
  require.d(exports, {
    trackPerformance: function () {
      return r;
    }
  });
}