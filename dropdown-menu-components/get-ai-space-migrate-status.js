// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getMigrateStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 662963
         */
module.exports = function (module, exports, require) {
  var migrationStatus = require("migration-status") /*id: 146337*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let r = () => apiServicesCollection.AispaceFacadeApiService.AGWGetAISpaceMigrateStatus().then(e => {
    if (e == null || !e.data) {
      return {
        status: ""
      };
    }
    {
      let {
        aispace_migrate_status: t
      } = e.data;
      let n = "";
      switch (t) {
        case migrationStatus.MigrationStatus.Done:
          n = "finished";
          break;
        case migrationStatus.MigrationStatus.Init:
          n = "init";
          break;
        case migrationStatus.MigrationStatus.Migrating:
          n = "processing";
          break;
        case migrationStatus.MigrationStatus.Rollback:
          n = "rollback";
      }
      return {
        status: n
      };
    }
  }).catch(e => ({
    status: ""
  }));
  require.d(exports, {
    getMigrateStatus: function () {
      return r;
    }
  });
}