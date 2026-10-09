// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncInitDesktop_1'
// - Resolved require(536792) to 'async-init-desktop_1'
// - Renamed variable 'r' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'o' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'a' to 'replyToIdGenerator'
// - Resolved require(762297) to 'reply-to-id-generator'
// - Renamed variable 's' to 'chatMessageTransformer'
// - Resolved require(319937) to 'chat-message-transformer'
// - Renamed variable 'l' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'c' to 'messageDraftHandler'
// - Resolved require(971522) to 'message-draft-handler'
// - Renamed variable 'u' to 'samanthaChatMessageCmd'
// - Resolved require(283070) to 'samantha-chat-message-cmd'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'p' to 'chatConversationSelectors_1'
// - Resolved require(804460) to 'chat-conversation-selectors_1'
// - Renamed variable 'h' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'f' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'm' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'g' to 'chatActionSymbols'
// - Resolved require(696389) to 'chat-action-symbols'
// - Updated imported property 'i' to 'isInitEnabled' (module 536792)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'm' to 'transformMessage' (module 319937)
// - Updated imported property 'VI' to 'BotTypes' (module 746101)
// - Updated imported property 'X' to 'queryBroadcastSym' (module 696389)
// - Updated imported property 'M' to 'fetchAnswerSymbol' (module 696389)
// - Updated imported property 'TB' to 'getAsyncStore' (module 537944)
// - Updated imported property 'ae' to 'createDraftMessage' (module 971522)
// - Updated imported property 'eD' to 'addDraftMessageLink' (module 971522)
// - Updated imported property 'QW' to 'getConversationType' (module 804460)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'J' to 'generateReplyToId' (module 762297)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'd' to 'sendSamanthaMessage' (module 283070)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 682623
         */
module.exports = function (module, exports, require) {
  var asyncInitDesktop_1 = require("async-init-desktop_1") /*id: 536792*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var replyToIdGenerator = require("reply-to-id-generator") /*id: 762297*/;
  var chatMessageTransformer = require("chat-message-transformer") /*id: 319937*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var messageDraftHandler = require("message-draft-handler") /*id: 971522*/;
  var samanthaChatMessageCmd = require("samantha-chat-message-cmd") /*id: 283070*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatActionSymbols = require("chat-action-symbols") /*id: 696389*/;
  function _(e, t, n) {
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
  class v {
    handleCmd(e) {
      if (asyncInitDesktop_1.isInitEnabled() && e.data.version === "1.0") {
        let {
          conversation_id: t = "",
          message_id: n = "",
          local_message_id: i
        } = e.data.data || {};
        loggerServiceCore.defaultLogger.persist.info({
          message: "Cmd: QueryBroadcast",
          meta: {
            conversation_id: t
          }
        });
        let o = e.data.data.ext || {};
        chatMessageStoreUpdater.updateChatMessages({
          conversationId: t,
          immerUpdate: async e => {
            let l = {
              ...o,
              conversation_id: t,
              message_id: n,
              local_message_id: i,
              content: o.content_type === chatMessageTypes.ContentType.Nested.toString() ? o.content : JSON.stringify({
                text: o.content
              }),
              content_type: Number(o.content_type ?? chatMessageTypes.ContentType.Text),
              user_type: chatMessageTypes.UserType.Human,
              status: chatMessageTypes.PushMessageStatus.Available,
              message_type: chatMessageTypes.MessageType.Message
            };
            if (!e.draftMessageMap[n]) {
              e.draftMessageLinks.push({
                isLocalMessage: false,
                messageId: String(l.message_id)
              });
            }
            e.draftMessageMap[String(l.message_id)] = {
              ...(await chatMessageTransformer.transformMessage(l, {
                conversation_type: chatCoreConstants.BotTypes.CocoWebSub
              })),
              is_delta: false
            };
          }
        });
      }
    }
    constructor() {
      _(this, "pluginIdentifier", chatActionSymbols.queryBroadcastSym);
    }
  }
  class y {
    async handleCmd(e) {
      if (asyncInitDesktop_1.isInitEnabled() && e.data.version === "1.0") {
        let {
          conversation_id: t = "",
          local_message_id: n = "",
          ext: i
        } = e.data.data || {};
        loggerServiceCore.defaultLogger.persist.info({
          message: "Cmd: FetchAnswer",
          meta: {
            conversation_id: t
          }
        });
        if ((await chatStoreManager.getAsyncStore("samanthaChatProtocolStore")).getState().samanthaChatTaskMap[n]) {
          return;
        }
        let {
          reply_id: s = "",
          section_id: f = ""
        } = i || {};
        chatMessageStoreUpdater.updateChatMessages({
          conversationId: t,
          immerUpdate: function () {
            var e = arguments.length;
            var n = Array(e);
            var i = 0;
            for (; i < e; i++) {
              n[i] = arguments[i];
            }
            messageDraftHandler.createDraftMessage({
              conversationType: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), t),
              isRegenerate: false,
              immerUpdateMessage: n,
              newLocalMessageId: replyToIdGenerator.generateReplyToId(s),
              conversationId: t,
              replyId: s,
              messageId: "",
              sectionId: f,
              message: {
                content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaLoading,
                is_delta: false
              }
            });
            messageDraftHandler.addDraftMessageLink({
              immerUpdateMessage: n,
              newLocalMessageId: replyToIdGenerator.generateReplyToId(s)
            });
          }
        });
        samanthaChatMessageCmd.sendSamanthaMessage([{
          is_delta: false,
          local: {
            prevRemoteMessageId: undefined,
            isRegenerate: false,
            isRetried: false
          },
          content_obj: {
            text: ""
          },
          content_type: 2001,
          conversation_id: t,
          local_message_id: n,
          conversation_type: chatCoreConstants.BotTypes.CocoWebSub,
          skill: {
            skill_type: aiAssistantSkillTypes.SkillTypes.SkillFreeChat,
            skill_type_no_default: null,
            skill_id: `${aiAssistantSkillTypes.SkillTypes.SkillFreeChat}`,
            skill_id_no_default: null
          }
        }]);
      }
    }
    constructor() {
      _(this, "pluginIdentifier", chatActionSymbols.fetchAnswerSymbol);
    }
  }
  require.r(exports);
  require.d(exports, {
    FetchAnswerMessageCmdPlugin: function () {
      return y;
    },
    QueryBroadcastMessageCmdPlugin: function () {
      return v;
    }
  });
}