// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'handleReceivedMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 646429
         */
module.exports = function (module, exports, require) {
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var chunkSeqCompare = require("chunk-seq-compare") /*id: 225959*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var conversationSectionUpdater = require("conversation-section-updater") /*id: 494219*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var updateSuggestMessageMap = require("update-suggest-message-map") /*id: 338448*/;
  var messageDraftHandler = require("message-draft-handler") /*id: 971522*/;
  var lifecycleErrorUtils = require("lifecycle-error-utils") /*id: 108909*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  var sessionLifecycleManager = require("session-lifecycle-manager") /*id: 49481*/;
  var messageSessionLifecycleHandler = require("message-session-lifecycle-handler") /*id: 216801*/;
  let U = e => {
    var s;
    let {
      conversation_id: U,
      message_id: b,
      reply_id: w = "",
      stream_id: T
    } = e;
    let B = !!((s = e.content_blocks) === null || s === undefined ? undefined : s.find(e => e.block_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest));
    try {
      let s = chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), U);
      let n = chatMessageStatusCheck.isMessageFinished(e);
      let o = messageContentTypeAndStatusChecker.FFC(e);
      let r = messageContentTypeAndStatusChecker.ZFo(e);
      let C = messageContentTypeAndStatusChecker.isOnboardingMessage(e);
      let P = localRegenCheck.shouldRegenerate(e);
      let G = messageContentTypeAndStatusChecker.AS7(e);
      let Z = messageContentTypeAndStatusChecker.bJZ(e);
      let H = messageContentTypeAndStatusChecker.vlk(e);
      let $ = C ? chatMessagingConstants.onboardingMessageId : w;
      chatMessageStoreUpdater.updateChatMessages({
        conversationId: U,
        immerUpdate: function () {
          var d = arguments.length;
          var _ = Array(d);
          var f = 0;
          for (; f < d; f++) {
            _[f] = arguments[f];
          }
          let [S] = _;
          let {
            draftLocalMessageMap: m,
            draftMessageMap: M,
            draftMessageLinks: h
          } = S;
          let p = !!M[b];
          let C = m[b];
          if (!p && !C) {
            let {
              messageLink: n
            } = messageDraftHandler.getDraftMessage(S, $, T) || {};
            messageDraftHandler.createDraftMessage({
              isRegenerate: P,
              immerUpdateMessage: _,
              newLocalMessageId: b,
              messageId: "",
              conversationId: U,
              replyId: $,
              message: e,
              sectionId: e.section_id,
              conversationType: s,
              skillType: e == null ? undefined : e.skill?.skill_type
            });
            messageDraftHandler.addDraftMessageLink({
              immerUpdateMessage: _,
              newLocalMessageId: b,
              messageKey: (n == null ? undefined : n.messageKey) ?? uuidV1GeneratorWrapper.generateUuid()
            });
            C = m[b];
          }
          if (!p && C) {
            if (chunkSeqCompare.isChunkSeqLt(e, C)) {
              return;
            }
            m[b] = {
              ...C,
              stage: chatCoreConstants.MessageStates.RECEIVING_SYNC,
              ...objectExcludeFilterUtil.filterObjectExclude(e, isNullishCheck.isNil),
              local_message_id: C.local_message_id
            };
            if (n) {
              loggerServiceCore.defaultLogger.console.info({
                namespace: e.local_info?.from,
                message: "replaceLocalMessageByRemote",
                meta: {
                  message: e
                }
              });
              if (P) {
                safeObjectSetWrapper.safeObjectSet(e, "regen_active", true);
                safeObjectSetWrapper.safeObjectSet(e, "is_regen", true);
              }
              draftMessageManager.replaceLocalWithRemote({
                draft: S,
                localMessage: C,
                message: e
              });
              if ($) {
                chatPluginIocManager.chatProtocolLoader("AliceChatFallback").then(e => e == null ? undefined : e.cancelTask($));
              }
            }
          } else {
            let s = M[b];
            if (chunkSeqCompare.isChunkSeqLt(e, s)) {
              return;
            }
            M[b] = e;
            if (!p) {
              h.push({
                isLocalMessage: false,
                messageId: b
              });
            }
            if (n) {
              loggerServiceCore.defaultLogger.persist.info({
                namespace: e.local_info?.from,
                message: "Receive Non-local Finished Message",
                meta: {
                  message_id: b,
                  conversation_id: U,
                  is_exist: p
                }
              });
            }
          }
        }
      });
      if (e.section_id && !r) {
        let s = C ? undefined : conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), U, {
          isLocalMessage: false,
          messageId: $
        });
        if ((s == null ? undefined : s.section_id) !== e.section_id) {
          conversationSectionUpdater.updateConversationSection(U, e.section_id);
        }
      }
      let O = messageContentTypeAndStatusChecker.LxO(e);
      if (n && O && e.reply_id) {
        let {
          receiveStreamPackageUpdateTimeout: e = chatMessagingConstants.maxSessionDuration
        } = configSyncLoader.getConfig("chatMessageConfig") || {};
        updateSuggestMessageMap.setSuggestMessage(U, () => ({
          replyId: w,
          loading: true,
          failed: false,
          expired: Date.now() + e,
          suggests: []
        }));
      }
      if (G && O) {
        updateSuggestMessageMap.setSuggestMessage(U, () => {});
      }
      let J = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(U, w);
      if (!G) {
        if (B) {
          messageSessionLifecycleHandler.handleSuggestUpdate(U, J, e);
        } else {
          messageSessionLifecycleHandler.handleSessionResume(U, J, e);
        }
      }
      if (Z) {
        messageSessionLifecycleHandler.handleSessionResume(U, J, e);
      }
      if (o) {
        messageSessionLifecycleHandler.handleErrorReceiving(U, J, e);
      } else if (H) {
        messageSessionLifecycleHandler.handleReceivingBreak(U, J, e);
      } else if (n && O && !G) {
        messageSessionLifecycleHandler.handleSuggestStart(U, J, e);
      } else if (G) {
        if (B) {
          messageSessionLifecycleHandler.handleSessionEnd(U, J, e);
        } else {
          messageSessionLifecycleHandler.handleReceivingEnd(U, J, e);
        }
      }
      chatPluginMatcherRegistry.loadMessageErrorMatcher().then(s => {
        let n = s.filter(s => s.matchPlugin(e)).map(e => e.pluginIdentifier);
        chatPluginIocManager.msgErrorPluginBatch(n).then(s => {
          s.forEach(s => {
            var n;
            if (s != null && (n = s.handleReceivingMessageError) !== null && n !== undefined) {
              n.call(s, e);
            }
          });
        });
        if (n.length > 0) {
          loggerServiceCore.defaultLogger.persist.warning({
            message: "receive message failed"
          });
        }
      });
    } catch (t) {
      let s = deepCloneWrapper_1.deepClone(e);
      s.final_status = {
        message: s.final_status?.message,
        session: lifecycleErrorUtils.getErrorType(t)
      };
      let i = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(U, w);
      if (B) {
        messageSessionLifecycleHandler.handleSessionEnd(U, i, e);
      } else {
        messageSessionLifecycleHandler.handleStreamEnd(U, i, s);
        messageSessionLifecycleHandler.handleErrorReceiving(U, i, s);
      }
      throw t;
    }
  };
  require.d(exports, {
    handleReceivedMessage: function () {
      return U;
    }
  });
}