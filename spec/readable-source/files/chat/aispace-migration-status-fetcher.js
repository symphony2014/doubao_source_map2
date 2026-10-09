// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getMigrationStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 255533
         */
module.exports = function (module, exports, require) {
  var chatRequestWrapper = require("chat-request-wrapper") /*id: 464659*/;
  var migrationStatus = require("migration-status") /*id: 146337*/;
  let o = () => chatRequestWrapper.makeChatRequest({
    url: `https://${typeof window != "undefined" ? window.location.hostname : "www.doubao.com"}/alice/aispace/facade/get_migrate_status`,
    method: "POST"
  }).then(e => {
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
  }).catch(e => {
    if ((e == null ? undefined : e.errorOption?.code) === "710012001") {
      return {
        status: "unlogin"
      };
    } else {
      return {
        status: "network-error"
      };
    }
  });
  let a = async () => {
    try {
      return {
        aispaceMigrationStatus: await o()
      };
    } catch {
      return {
        aispaceMigrationStatus: {}
      };
    }
  };
  let l = () => a();
  require.d(exports, {
    getMigrationStatus: function () {
      return l;
    }
  });
}