// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebounce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 469094
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  exports.useDebounce = function (e, i = 200, r) {
    let l = reactCoreLibraryReexport.useRef(e);
    reactCoreLibraryReexport.useEffect(() => {
      l.current = e;
    }, [e]);
    let s = reactCoreLibraryReexport.useMemo(() => debounceUtilWrapper.createDebounce(function () {
      var e = arguments.length;
      var i = Array(e);
      var r = 0;
      for (; r < e; r++) {
        i[r] = arguments[r];
      }
      return l.current(...i);
    }, i, r), []);
    reactCoreLibraryReexport.useEffect(() => () => s.cancel(), [s]);
    return s;
  };
}