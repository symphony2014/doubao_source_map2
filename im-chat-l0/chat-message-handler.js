// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useMessageHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 908536
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = e => ({
    handleSendMessage: reactCoreLibraryReexport.useCallback(() => {}, [e])
  });
  require.d(exports, {
    useMessageHandler: function () {
      return i;
    }
  });
}