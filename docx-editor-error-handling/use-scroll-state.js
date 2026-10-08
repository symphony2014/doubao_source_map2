// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useScrollState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 432226
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = e => {
    let [i, r] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (!e) {
        return;
      }
      let i = () => {
        r(true);
      };
      let n = () => {
        r(false);
      };
      e.bindScrollStartEvent("on", i);
      e.bindScrollEndEvent("on", n);
      return () => {
        e.bindScrollStartEvent("off", i);
        e.bindScrollEndEvent("off", n);
      };
    }, []);
    return i;
  };
  require.d(exports, {
    useScrollState: function () {
      return o;
    }
  });
}