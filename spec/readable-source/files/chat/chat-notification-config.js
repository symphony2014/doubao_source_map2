// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'notificationConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 670807
         */
module.exports = function (module, exports, require) {
  let i = {
    LoginKeyFeatureNotification: {
      id: Symbol("LoginKeyFeatureNotification"),
      priority: 4
    },
    UnloginKeyFeatureNotification: {
      id: Symbol("UnloginKeyFeatureNotification"),
      priority: 3
    },
    UpdateNotification: {
      id: Symbol("UpdateNotification"),
      priority: 2
    },
    NewUserGuide: {
      id: Symbol("NewUserGuide"),
      priority: 1
    }
  };
  require.d(exports, {
    notificationConfig: function () {
      return i;
    }
  });
}