// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'notificationComponentWrapper'
// - Resolved require(830647) to 'notification-component-wrapper'
// - Renamed variable 'r' to 'notificationManager'
// - Resolved require(161823) to 'notification-manager'
// - Updated imported property 's' to 'notificationManager' (module 161823)
// - Updated imported property 'Z' to 'Notification' (module 830647)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 754538
         */
module.exports = function (module, exports, require) {
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var notificationManager = require("notification-manager") /*id: 161823*/;
  let o = () => {
    notificationManager.notificationManager.set({
      notification: {
        open: e => notificationComponentWrapper.Notification.open(e),
        info: e => notificationComponentWrapper.Notification.info(e),
        error: e => notificationComponentWrapper.Notification.error(e),
        warning: e => notificationComponentWrapper.Notification.warning(e),
        success: e => notificationComponentWrapper.Notification.success(e),
        close: e => notificationComponentWrapper.Notification.close(e)
      }
    });
  };
  require.r(exports);
  require.d(exports, {
    initSystemRuntime: function () {
      return o;
    }
  });
}