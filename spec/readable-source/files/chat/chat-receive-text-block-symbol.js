// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'receiveTextBlockSym'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 147461
         */
module.exports = function (module, exports, require) {
  let i = Symbol("infra:receive-message-content-block:text-block");
  require.d(exports, {
    receiveTextBlockSym: function () {
      return i;
    }
  });
}