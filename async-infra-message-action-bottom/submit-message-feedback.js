// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'sendMessageFeedback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 535134
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  async function l(e) {
    let {
      conversationId: t,
      messageId: n,
      detail: l,
      reportEvent: s
    } = e;
    try {
      await (await chatMessageServiceModule.ChatMessageService()).feedback({
        message_id: n,
        feedbackDetail: l
      });
      chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(e => {
        let {
          messageFeedbackMap: r
        } = e;
        r[t] ||= {};
        r[t][n] ||= {};
        safePropertyAssignUtil.safePropertyAssign(r[t][n], l);
      }));
      if (s != null) {
        s.success();
      }
    } catch (e) {
      if (e instanceof Error) {
        if (s != null) {
          s.error({
            reason: "message report failed",
            error: e
          });
        }
      }
    }
  }
  require.d(exports, {
    sendMessageFeedback: function () {
      return l;
    }
  });
}