// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebounceCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 682959
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  exports.useDebounceCallback = function (e, n = 200, i) {
    let l = reactCoreLibraryReexport.useRef(e);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      l.current = e;
    }, [e]);
    let a = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(function () {
      var e = arguments.length;
      var n = Array(e);
      var i = 0;
      for (; i < e; i++) {
        n[i] = arguments[i];
      }
      return l.current(...n);
    }, n, i), []);
    reactCoreLibraryReexport.useLayoutEffect(() => () => a.cancel(), [a]);
    return a;
  };
}