// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'suggestionState'
// - Renamed export 'h' to 'suggestionFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 133368
         */
module.exports = function (module, exports, require) {
  let i = {
    suggestMessageMap: {}
  };
  let r = () => ({
    ...i
  });
  require.d(exports, {
    suggestionState: function () {
      return i;
    },
    suggestionFactory: function () {
      return r;
    }
  });
}