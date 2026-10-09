// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'useDeepCompareMemo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24845.6ed24187.js
         * chunkId: 24845
         * moduleId: 880349
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  let n = function (e, t = deepEqualUtil_1.deepEqual) {
    let i = reactCoreLibraryReexport.useRef(e);
    let n = t(i.current, e);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        i.current = e;
      }
    });
    if (n) {
      return i.current;
    } else {
      return e;
    }
  };
  require.d(exports, {
    useDeepCompareMemo: function () {
      return n;
    }
  });
}