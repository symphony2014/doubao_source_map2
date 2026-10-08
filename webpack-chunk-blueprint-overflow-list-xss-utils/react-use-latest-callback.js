// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'useLatestCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 440027
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    let t = reactCoreLibraryReexport.useRef(e);
    reactCoreLibraryReexport.useEffect(() => {
      t.current = e;
    });
    return reactCoreLibraryReexport.useMemo(() => function () {
      var e;
      var n = arguments.length;
      var r = Array(n);
      var i = 0;
      for (; i < n; i++) {
        r[i] = arguments[i];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(t, ...r);
      }
    }, []);
  }
  require.d(exports, {
    useLatestCallback: function () {
      return i;
    }
  });
}