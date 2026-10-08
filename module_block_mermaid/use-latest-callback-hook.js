// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useLatestCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 115606
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(e) {
    var t = reactCoreLibraryReexport.useRef();
    t.current = e;
    return reactCoreLibraryReexport.useCallback(function () {
      var e;
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call.apply(e, [t].concat(i));
      }
    }, []);
  }
  require.d(exports, {
    useLatestCallback: function () {
      return r;
    }
  });
}