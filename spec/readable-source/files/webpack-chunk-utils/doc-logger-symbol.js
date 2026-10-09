// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'docLoggerSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 192564
         */
module.exports = function (module, exports, require) {
  let i = Symbol("DocLogger");
  require.d(exports, {
    docLoggerSymbol: function () {
      return i;
    }
  });
}