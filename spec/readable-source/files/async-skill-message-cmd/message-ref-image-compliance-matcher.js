// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(319475) to 'message-ref-image-compliance'
// - Updated imported property 'X' to 'imageNotCompliant' (module 319475)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 75489
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("message-ref-image-compliance") /*id: 319475*/.imageNotCompliant,
    matchPlugin: e => e.cmd === messagingConstants.messageType.MessageRefImagesNotCompliant
  };
  require.r(exports);
  require.d(exports, {
    messageRefImageNotCompliantMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}