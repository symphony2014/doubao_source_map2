// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(506988) to 'ppt-notification-plugin-id'
// - Updated imported property 'i' to 'pptPluginSymbol' (module 506988)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-ppt-push-message-cmd.37bcab89.js
         * chunkId: 36551
         * moduleId: 773532
         */
module.exports = function (module, exports, require) {
  let e = {
    pluginIdentifier: require("ppt-notification-plugin-id") /*id: 506988*/.pptPluginSymbol,
    matchPlugin: t => t.cmd === 1020
  };
  require.r(exports);
  require.d(exports, {
    pptMessageNotificationCmdPluginMatcher: function () {
      return e;
    }
  });
}