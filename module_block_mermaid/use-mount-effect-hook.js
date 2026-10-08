// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useMountEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 397101
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var r = typeof window != "undefined" && window.document && window.document.createElement ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  function o(e, t) {
    var n = reactCoreLibraryReexport.useRef(true);
    r(function () {
      return e(n.current);
    }, t);
    r(function () {
      n.current = false;
      return function () {
        n.current = true;
      };
    }, []);
  }
  require.d(exports, {
    useMountEffect: function () {
      return o;
    }
  });
}