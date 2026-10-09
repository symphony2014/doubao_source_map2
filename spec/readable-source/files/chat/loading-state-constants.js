// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'loadingStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 640739
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).unload = "unload";
  i.loading = "loading";
  i.reloading = "reloading";
  i.loaded = "loaded";
  let r = i;
  require.d(exports, {
    loadingStates: function () {
      return r;
    }
  });
}