// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useMigrationStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 85410
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var businessSkillEnums = require("business-skill-enums") /*id: 594084*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useVisibilityStateHook = require("use-visibility-state-hook") /*id: 386195*/;
  var reactUseConstantHook = require("react-use-constant-hook") /*id: 402486*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = async e => e ? {
    code: 0,
    data: {
      status: businessSkillEnums.MigrationStatus.NotMigrated
    }
  } : await apiServicesCollection.OtterDocApiService.AGWGetUserMigrateStatus();
  let d = () => {
    let [e, t] = reactCoreLibraryReexport.useState(null);
    let n = async () => {
      try {
        let n = await c(false);
        if (n.code === 0 && n.data) {
          t(n.data.status ?? null);
        } else {
          t(businessSkillEnums.MigrationStatus.NotMigrated);
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "write_doc_carousel_get_migrate_status_error",
          error: Error()
        });
        t(businessSkillEnums.MigrationStatus.NotMigrated);
      }
    };
    let a = useVisibilityStateHook.useVisibilityState();
    reactUseConstantHook.useConstant(() => {
      n();
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (a !== "hidden") {
        n();
      }
    }, [a]);
    return {
      migrateStatus: e,
      isMigrated: e === businessSkillEnums.MigrationStatus.Migrated
    };
  };
  require.d(exports, {
    useMigrationStatus: function () {
      return d;
    }
  });
}