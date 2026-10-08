// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(389435) to 'mailbox-activated-plugin-id'
// - Updated imported property 'm' to 'mailboxActivatedId' (module 389435)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 260789
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("mailbox-activated-plugin-id") /*id: 389435*/.mailboxActivatedId,
    matchPlugin: e => e.cmd === messagingConstants.messageType.MailboxActivated
  };
  require.r(exports);
  require.d(exports, {
    mailboxActivatedMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}