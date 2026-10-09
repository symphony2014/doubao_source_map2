// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'semiToastNotification'
// - Resolved require(520872) to 'semi-toast-notification'
// - Updated imported property 'Z' to 'toastInstance' (module 520872)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 712879
         */
module.exports = function (module, exports, require) {
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  let r = () => {
    semiToastNotification.toastInstance.config({
      top: 32,
      zIndex: 9999
    });
  };
  let o = () => {
    r();
  };
  require.r(exports);
  require.d(exports, {
    initSamantha: function () {
      return o;
    }
  });
}