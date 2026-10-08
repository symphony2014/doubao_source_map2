// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useUnmountCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 977933
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    reactCoreLibraryReexport.useEffect(e, []);
  }
  function r(e) {
    var t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    o(function () {
      return function () {
        return t.current();
      };
    });
  }
  require.d(exports, {
    useUnmountCallback: function () {
      return r;
    }
  });
}