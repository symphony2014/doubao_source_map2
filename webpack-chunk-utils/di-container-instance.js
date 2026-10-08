// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'diContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 167867
         */
module.exports = function (module, exports, require) {
  let i = new (require("inversify-di-container") /*id: 939027*/.Container)();
  require.d(exports, {
    diContainer: function () {
      return i;
    }
  });
}