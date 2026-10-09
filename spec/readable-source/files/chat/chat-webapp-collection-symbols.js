// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'inWebAppSym'
// - Renamed export 'f' to 'collectionSym'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 775228
         */
module.exports = function (module, exports, require) {
  let i = Symbol("InWebApp");
  let r = Symbol("Collection");
  require.d(exports, {
    inWebAppSym: function () {
      return i;
    },
    collectionSym: function () {
      return r;
    }
  });
}