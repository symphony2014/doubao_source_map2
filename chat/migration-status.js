// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'MigrationStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 146337
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.Init = 0] = "Init";
  i[i.Migrating = 1] = "Migrating";
  i[i.Done = 2] = "Done";
  i[i.Rollback = 3] = "Rollback";
  let r = i;
  require.d(exports, {
    MigrationStatus: function () {
      return r;
    }
  });
}