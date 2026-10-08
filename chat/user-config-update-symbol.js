// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'userConfigUpdateSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 624648
         */
module.exports = function (module, exports, require) {
  let i = Symbol("UserConfigUpdate");
  require.d(exports, {
    userConfigUpdateSymbol: function () {
      return i;
    }
  });
}