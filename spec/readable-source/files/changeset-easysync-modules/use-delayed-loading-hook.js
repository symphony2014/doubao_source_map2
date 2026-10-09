// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useDelayedLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 261305
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(t) {
    var e = t.loading;
    var n = t.delay;
    var o = reactCoreLibraryReexport.useState(!n && e);
    var s = iterableToArrayUtil_1_1.iterableToArray(o, 2);
    var a = s[0];
    var u = s[1];
    var c = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      if (n && e) {
        c.current = window.setTimeout(function () {
          u(e);
        }, n);
      } else {
        u(e);
      }
      return function () {
        return clearTimeout(c.current);
      };
    }, [n, e]);
    return [a];
  }
  require.d(exports, {
    useDelayedLoading: function () {
      return o;
    }
  });
}