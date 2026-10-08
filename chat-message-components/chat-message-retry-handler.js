// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'retryReceiveMessage'
// - Renamed export 'Y' to 'retrySendMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 725789
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatMessageServiceManager = require("chat-message-service-manager") /*id: 701777*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let f = e => {
    let {
      sendMessage: t,
      stage: n,
      message: i,
      customReportMeta: r
    } = e;
    return () => {
      if (!i) {
        return;
      }
      let e = {
        conversation_id: i.conversation_id || i.local_conversation_id,
        reply_id: i == null ? undefined : i.reply_id,
        message_id: (i == null ? undefined : i.message_id) || i.local_message_id,
        stage: n,
        ...r
      };
      loggerServiceCore.defaultLogger.persist.info({
        message: "retry_message_start",
        meta: e
      });
      let {
        reply_id: s
      } = i || {};
      if (!s && n === "receive") {
        loggerServiceCore.defaultLogger.persist.error({
          message: "retry_receive_message_failed",
          meta: e,
          error: Error("reply_id is null, retry failed")
        });
        return;
      }
      try {
        t();
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "retry_message_failed",
          meta: e,
          error: t
        });
      }
    };
  };
  let h = e => {
    let {
      message: t
    } = e;
    if (t) {
      return f({
        sendMessage: async () => {
          var n;
          let i = await aiChatSkillConversationChecker.isValidConversationForSkill(t);
          let s = t.conversation_id || t.local_conversation_id;
          if (!s) {
            loggerServiceCore.defaultLogger.persist.info("conversationId is empty, skip retry");
            return;
          }
          if (i) {
            let n = conversationMessageUtils.createMessageObject({
              conversation: conversationMessageUtils.parseConversationId(s ?? ""),
              message: {
                unique_id: t.local_message_id,
                content_blocks_v2: t.content_blocks_v2 || [],
                ext: {
                  chat_ability: conversationMessageUtils.serializeAbilityData(t.skill?.skill_type, ""),
                  resend: "1",
                  ...t.ext
                }
              }
            });
            let i = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
            if (i != null) {
              i.sendMessage({
                message: n,
                session: {
                  reportParams: {
                    scene: "resend"
                  }
                }
              });
            }
          } else {
            let e;
            if (t.message_id) {
              e = {
                messageId: t.message_id,
                isLocalMessage: false
              };
            }
            if (t.local_message_id) {
              e = {
                messageId: t.local_message_id,
                isLocalMessage: true
              };
            }
            if (e) {
              if ((n = chatMessageServiceManager.chatMessageServiceContext.service) !== null && n !== undefined) {
                n.sendMessage([{
                  conversationId: s,
                  reportParams: {
                    scene: "resend",
                    sec_scene: "resend"
                  },
                  operation: {
                    resend: {
                      messageLink: e
                    }
                  }
                }]);
              }
            } else {
              loggerServiceCore.defaultLogger.persist.info("messageLink is undefined, skip retry");
            }
          }
        },
        message: t,
        stage: "send"
      });
    } else {
      return emptyExportFunction.emptyFunction;
    }
  };
  let p = e => {
    let {
      message: t
    } = e;
    if (t) {
      return f({
        sendMessage: async () => {
          var n;
          let i = await aiChatSkillConversationChecker.isValidConversationForSkill(t);
          let f = t.conversation_id || t.local_conversation_id;
          if (!f) {
            loggerServiceCore.defaultLogger.persist.info("conversationId is empty, skip retry");
            return;
          }
          let h = {
            isLocalMessage: false,
            messageId: (t == null ? undefined : t.reply_id) || ""
          };
          let p = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", h);
          let m = {
            conversation_id: f,
            message_id: (t == null ? undefined : t.message_id) || t.local_message_id
          };
          if (!p) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "retry_send_message_failed",
              meta: m,
              error: Error("sentMessage not found")
            });
            return;
          }
          if (i) {
            let n = conversationMessageUtils.createMessageObject({
              conversation: conversationMessageUtils.parseConversationId(f ?? ""),
              message: {
                content_blocks_v2: p.content_blocks_v2 || [],
                ext: {
                  edit_query_id: safeJsonUtils.safeStringify([t.reply_id || ""]),
                  chat_ability: conversationMessageUtils.serializeAbilityData(p.skill?.skill_type, ""),
                  replace: "1",
                  ...p.ext
                }
              }
            });
            let i = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
            if (i != null) {
              i.sendMessage({
                message: n,
                session: {
                  reportParams: {
                    scene: "resend"
                  }
                }
              });
            }
          } else if ((n = chatMessageServiceManager.chatMessageServiceContext.service) !== null && n !== undefined) {
            n.sendMessage([{
              conversationId: f,
              reportParams: {
                scene: "resend",
                sec_scene: "resend"
              },
              operation: {
                replace: {
                  messageLink: h
                }
              }
            }]);
          }
        },
        message: t,
        stage: "receive"
      });
    } else {
      return emptyExportFunction.emptyFunction;
    }
  };
  require.d(exports, {
    retryReceiveMessage: function () {
      return p;
    },
    retrySendMessage: function () {
      return h;
    }
  });
}