// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useLoadingDelay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 242703
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function a(e) {
    var n = e.loading;
    var r = e.delay;
    var a = reactCoreLibraryReexport.useState(!r && n);
    var l = iterableToArrayUtil_1_1.iterableToArray(a, 2);
    var s = l[0];
    var c = l[1];
    var u = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      if (r && n) {
        u.current = window.setTimeout(function () {
          c(n);
        }, r);
      } else {
        c(n);
      }
      return function () {
        return clearTimeout(u.current);
      };
    }, [r, n]);
    return [s];
  }
  require.d(exports, {
    useLoadingDelay: function () {
      return a;
    }
  });
}