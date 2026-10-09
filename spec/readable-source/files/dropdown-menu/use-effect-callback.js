// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'useEffectCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 873700
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function n(e) {
    reactCoreLibraryReexport.useEffect(function () {
      return e;
    }, []);
  }
  require.d(exports, {
    useEffectCallback: function () {
      return n;
    }
  });
}