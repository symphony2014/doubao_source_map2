// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useUpdateEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 141220
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  r = reactCoreLibraryReexport.useEffect;
  function o(e, t) {
    var n = reactCoreLibraryReexport.useRef(false);
    r(function () {
      return function () {
        n.current = false;
      };
    }, []);
    r(function () {
      if (n.current) {
        return e();
      }
      n.current = true;
    }, t);
  }
  require.d(exports, {
    useUpdateEffect: function () {
      return o;
    }
  });
}