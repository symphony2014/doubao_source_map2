// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'PopupContainerCtx'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 648908
         */
module.exports = function (module, exports, require) {
  let i = require("react-core-library-reexport") /*id: 634663*/.createContext({
    getPopupContainer: null
  });
  require.d(exports, {
    PopupContainerCtx: function () {
      return i;
    }
  });
}