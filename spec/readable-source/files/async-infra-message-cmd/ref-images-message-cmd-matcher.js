// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(774441) to 'ref-images-message-symbol'
// - Updated imported property 'G' to 'refImagesMsgSymbol' (module 774441)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 80885
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("ref-images-message-symbol") /*id: 774441*/.refImagesMsgSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.MessageRefImagesNotCompliant
  };
  require.r(exports);
  require.d(exports, {
    refImagesMessageStateChangeMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}