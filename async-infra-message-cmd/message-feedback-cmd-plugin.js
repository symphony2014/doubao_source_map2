// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageFeedbackStateUpdate'
// - Resolved require(194772) to 'message-feedback-state-update'
// - Renamed variable 'r' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'o' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'messageFeedbackCmdPlugin_1'
// - Resolved require(231825) to 'message-feedback-cmd-plugin_1'
// - Updated imported property 'l' to 'messageFeedbackCmd' (module 231825)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'U' to 'setMessageFeedback' (module 194772)
// - Updated imported property 'nw' to 'feedbackType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 216519
         */
module.exports = function (module, exports, require) {
  var messageFeedbackStateUpdate = require("message-feedback-state-update") /*id: 194772*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var messageFeedbackCmdPlugin_1 = require("message-feedback-cmd-plugin_1") /*id: 231825*/;
  function l(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class c {
    constructor() {
      l(this, "pluginIdentifier", messageFeedbackCmdPlugin_1.messageFeedbackCmd);
      l(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            extra: t = "",
            message_id: n = "",
            feedback_type: a,
            feedback_detail_type: l,
            feedback_detail_content: c
          } = e.data.data.feedback_msg_notify || {};
          let {
            conversation_id: u = ""
          } = safeJsonUtils.safeParse(t, {});
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: MessageFeedback",
            meta: {
              conversation_id: u,
              message_id: n,
              feedback_type: a,
              feedback_detail_type: l,
              feedback_detail_content: c
            }
          });
          messageFeedbackStateUpdate.setMessageFeedback({
            conversationId: u,
            messageId: n,
            detail: {
              feedback_type: a ?? messagingConstants.feedbackType.Default,
              feedback_detail_type: l,
              feedback_detail_content: c
            }
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageFeedbackMessageCmdPlugin: function () {
      return c;
    }
  });
}