// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Tc' to 'ChatInputProvider'
// - Renamed export 'be' to 'useChatInput'
// - Renamed export 'ec' to 'ChatInputContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 844074
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = reactCoreLibraryReexport.createContext(undefined);
  let o = () => reactCoreLibraryReexport.useContext(r);
  let a = r.Provider;
  require.d(exports, {
    ChatInputProvider: function () {
      return a;
    },
    useChatInput: function () {
      return o;
    },
    ChatInputContext: function () {
      return r;
    }
  });
}