// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'hasAsyncTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 326723
         */
module.exports = function (module, exports, require) {
  let i = e => !!(e == null ? undefined : e.async_task);
  require.d(exports, {
    hasAsyncTask: function () {
      return i;
    }
  });
}