// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kD' to 'getMessageReportParams'
// - Renamed export 'XL' to 'checkPromptUsage'
// - Renamed export 'al' to 'resolvePromptType'
// - Renamed export 'Bi' to 'getDraftMessage'
// - Renamed export 'd1' to 'extractUploadInfo'
// - Renamed export 'BH' to 'getConversationReplies'
// - Renamed export 'uj' to 'getLocalMessage'
// - Renamed export 'UR' to 'handleMessageUpdate'
// - Renamed export 'eD' to 'addDraftMessageLink'
// - Renamed export 'S6' to 'getQuoteMetadata'
// - Renamed export 'ae' to 'createDraftMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1543.afbc0065.js
         * chunkId: 1543
         * moduleId: 479240
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var messageReceiveHandler = require("message-receive-handler") /*id: 646429*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var replyToIdGenerator = require("reply-to-id-generator") /*id: 762297*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var chunkSeqCompare = require("chunk-seq-compare") /*id: 225959*/;
  var messageDraftHandler = require("message-draft-handler") /*id: 971522*/;
  var lifecycleErrorUtils = require("lifecycle-error-utils") /*id: 108909*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  var sessionLifecycleManager = require("session-lifecycle-manager") /*id: 49481*/;
  var messageSessionLifecycleHandler = require("message-session-lifecycle-handler") /*id: 216801*/;
  let S = e => {
    let {
      conversation_id: t,
      reply_id: i = "",
      stream_id: s,
      message_id: a = ""
    } = e;
    if (i) {
      try {
        let o = messageContentTypeAndStatusChecker.FFC(e);
        chatMessageStoreUpdater.updateChatMessages({
          conversationId: t,
          immerUpdate: function () {
            var l = arguments.length;
            var d = Array(l);
            var h = 0;
            for (; h < l; h++) {
              d[h] = arguments[h];
            }
            let [p] = d;
            let {
              draftLocalMessageMap: y
            } = p;
            let M = replyToIdGenerator.generateReplyToId(i, s);
            let {
              message: S,
              messageLink: w
            } = messageDraftHandler.getDraftMessage(p, i) || {};
            let k = a || M;
            if (!y[k]) {
              messageDraftHandler.createDraftMessage({
                isRegenerate: localRegenCheck.shouldRegenerate(S),
                immerUpdateMessage: d,
                newLocalMessageId: k,
                conversationId: t,
                replyId: i,
                messageId: "",
                messageStreamStage: chatCoreConstants.MessageStates.RECEIVING_SYNC,
                sectionId: e.section_id,
                skillType: e == null ? undefined : e.skill?.skill_type
              });
              messageDraftHandler.addDraftMessageLink({
                immerUpdateMessage: d,
                newLocalMessageId: k,
                messageKey: (w == null ? undefined : w.messageKey) ?? uuidV1GeneratorWrapper.generateUuid()
              });
            }
            let I = y[k];
            if (I) {
              if (chunkSeqCompare.isChunkSeqLt(e, I)) {
                return;
              }
              y[k] = {
                ...I,
                local: {
                  ...I.local
                },
                ...objectExcludeFilterUtil.filterObjectExclude(e, isNullishCheck.isNil)
              };
            }
          }
        });
        let l = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, i);
        if (o) {
          messageSessionLifecycleHandler.handleErrorReceiving(t, l, e);
        } else {
          messageSessionLifecycleHandler.handleLoadingUpdate(t, l, e);
        }
      } catch (s) {
        let n = deepCloneWrapper_1.deepClone(e);
        n.final_status = {
          message: n.final_status?.message,
          session: lifecycleErrorUtils.getErrorType(s)
        };
        let r = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, i);
        messageSessionLifecycleHandler.handleErrorReceiving(t, r, n);
        throw s;
      }
    }
  };
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var updateSuggestMessageMap = require("update-suggest-message-map") /*id: 338448*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var messageExtUpdater = require("message-ext-updater") /*id: 16409*/;
  let A = e => {
    let s = chatMessageStoreFactory.createMessageStore.getState();
    let {
      content_obj: a,
      conversation_id: l,
      reply_id: u,
      message_id: c
    } = e;
    try {
      let n = messageContentTypeAndStatusChecker.AS7(e);
      loggerServiceCore.defaultLogger.console.info({
        namespace: e.local_info?.from,
        message: "Suggest Message",
        meta: {
          message: e
        }
      });
      let {
        suggest: d,
        suggest_skill: f,
        deep_research_suggest: v = false
      } = a || {};
      let g = infraUtilFunctions.isStringArray(d) ? d : [];
      if (!u) {
        loggerServiceCore.defaultLogger.console.warning({
          namespace: e.local_info?.from,
          message: "invalid suggest message: expect reply_id but found undefined/null"
        });
        return;
      }
      if (n && u) {
        messageExtUpdater.updateMessageExtension(s, l, c, JSON.stringify(g), {
          suggest_skill: String(f ?? ""),
          research_suggest: f ? String(f === 0) : String(v)
        });
      }
      updateSuggestMessageMap.setSuggestMessage(l, t => {
        if (v || f === 0) {
          return t;
        } else if (e.ext?.onboarding === "1" || e.ext?.onboarding === "2" || (t == null ? undefined : t.replyId) === u) {
          return {
            replyId: u,
            loading: false,
            failed: false,
            expired: undefined,
            suggests: g
          };
        } else {
          loggerServiceCore.defaultLogger.console.warning({
            namespace: e.local_info?.from,
            message: "ignore suggest message: non-match reply_id"
          });
          return t;
        }
      });
      let m = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(l, u);
      messageSessionLifecycleHandler.handleSuggestUpdate(l, m, e);
      if (n) {
        messageSessionLifecycleHandler.handleSessionEnd(l, m, e);
      }
    } catch (r) {
      let t = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(l, u || "");
      let i = deepCloneWrapper_1.deepClone(e);
      i.final_status = {
        message: i.final_status?.message,
        session: lifecycleErrorUtils.getErrorType(r)
      };
      messageSessionLifecycleHandler.handleSessionEnd(l, t, i);
      throw r;
    }
  };
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var validateConversationId = require("validate-conversation-id") /*id: 913490*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var finishMessageTask = require("finish-message-task") /*id: 989964*/;
  let F = e => {
    return e.ext?.collection_id;
  };
  let B = e => {
    if (!F(e)) {
      return false;
    }
    let n = e.local_info?.message_list_count;
    let r = e.local_info?.in_message_list_pos;
    return isNumberUtil.isNumber(n) && isNumberUtil.isNumber(r) && r === n - 1;
  };
  let U = e => {
    let {
      conversation_id: l,
      message_id: u,
      local_message_id: c,
      local_conversation_id: g,
      section_id: S
    } = e;
    let w = g || l;
    try {
      let a = {
        namespace: e.local_info?.from,
        meta: {
          message: e
        }
      };
      loggerServiceCore.defaultLogger.console.info({
        ...a,
        message: "Ack Message"
      });
      if (!c) {
        loggerServiceCore.defaultLogger.console.warning({
          ...a,
          message: "Invalid Ack Message: local_message_id"
        });
        return;
      }
      finishMessageTask.finishMessageTask(c);
      let d = conversationMessageUtils_1.getLocalMessage(chatMessageStoreFactory.createMessageStore.getState(), w, c);
      if (e.local_info?.from === chatCoreConstants.ChatSourceTypes.AliceChatSocket && e.is_regen) {
        let e = conversationMessageUtils_1.getLocalMessage(chatMessageStoreFactory.createMessageStore.getState(), l, c);
        if (e) {
          d = e;
        }
      }
      let g = messageContentTypeAndStatusChecker.FFC(e);
      if (g) {
        let t = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(w, c);
        messageSessionLifecycleHandler.handleErrorSending(w, t, e);
      }
      setTimeout(() => {
        chatPluginMatcherRegistry.loadMessageErrorMatcher().then(t => {
          let i = t.filter(t => t.matchPlugin(e)).map(e => e.pluginIdentifier);
          chatPluginIocManager.msgErrorPluginBatch(i).then(t => {
            t.forEach(t => {
              var i;
              if (t != null && (i = t.handleSendingMessageError) !== null && i !== undefined) {
                i.call(t, e);
              }
            });
          });
        });
      }, 1000);
      if (!u) {
        if (g) {
          chatMessageStoreUpdater.updateChatMessages({
            conversationId: w,
            immerUpdate: function () {
              var t = arguments.length;
              var i = Array(t);
              var n = 0;
              for (; n < t; n++) {
                i[n] = arguments[n];
              }
              let [r] = i;
              r.draftLocalMessageMap[c] = {
                ...d,
                ...e
              };
              draftMessageManager.getAndRemoveDraft(r, chatMessagingConstants.mockReplyMessageId);
            }
          });
        }
        loggerServiceCore.defaultLogger.console.warning({
          ...a,
          message: "Invalid Ack Message: message_id"
        });
        return;
      }
      if (!function (e, t) {
        let i = e => {
          loggerServiceCore.defaultLogger.persist.warning({
            namespace: t.local_info?.from,
            message: "Invalid Ack Message",
            meta: {
              reason: e,
              message: t
            }
          });
        };
        if (e) {
          return !!localResourceCheck.isLocal(e) || (i("local_sending_message has received ack"), false);
        } else {
          i("local_sending_message is not exist");
          return false;
        }
      }(d, e)) {
        return;
      }
      let h = localRegenCheck.shouldRegenerate(d);
      let k = messageDraftHandler.getConversationReplies(chatMessageStoreFactory.createMessageStore.getState(), {
        conversationId: w,
        replyId: u
      });
      let T = lastElementHelper.getLastElement(k)?.local_message_id || replyToIdGenerator.generateReplyToId(u);
      if (!validateConversationId.isValidConversation(e)) {
        chatMessageStoreUpdater.updateChatMessages({
          conversationId: l,
          immerUpdate: function () {
            var n = arguments.length;
            var s = Array(n);
            var a = 0;
            for (; a < n; a++) {
              s[a] = arguments[a];
            }
            let [o] = s;
            if (!h) {
              draftMessageManager.replaceLocalWithRemote({
                draft: o,
                localMessage: d,
                message: e
              });
            }
            let {
              messageLink: c
            } = draftMessageManager.getAndRemoveDraft(o, chatMessagingConstants.mockReplyMessageId) || {};
            if (!h && (conversationMessageUtils_1.getReplyMessageById(chatMessageStoreFactory.createMessageStore.getState(), l, u) || F(e) && !B(e))) {
              return;
            }
            let {
              draftMessageMap: f
            } = o;
            if (!u || !messageContentTypeAndStatusChecker.mdd(f[u])) {
              messageDraftHandler.createDraftMessage({
                conversationType: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), l),
                isRegenerate: h,
                immerUpdateMessage: s,
                newLocalMessageId: T,
                conversationId: l,
                replyId: u,
                messageId: "",
                sectionId: S,
                skillType: d.skill?.skill_type
              });
              messageDraftHandler.addDraftMessageLink({
                immerUpdateMessage: s,
                newLocalMessageId: T,
                messageKey: (c == null ? undefined : c.messageKey) ?? uuidV1GeneratorWrapper.generateUuid()
              });
            }
          }
        });
      }
      let A = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(w, c);
      messageSessionLifecycleHandler.handleSendingStart(w, A, {
        ...e,
        is_regen: h
      });
    } catch (n) {
      let t = deepCloneWrapper_1.deepClone(e);
      t.final_status = {
        message: t.final_status?.message,
        session: lifecycleErrorUtils.getErrorType(n)
      };
      let i = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(w, e.local_message_id || "");
      messageSessionLifecycleHandler.handleErrorSending(w, i, t);
      throw n;
    }
  };
  var aliceChatTaskManager = require("alice-chat-task-manager") /*id: 268829*/;
  let H = e => {
    let {
      message: d,
      localReceiveMessage: f,
      reportParams: v
    } = e;
    return {
      conversation_id: d.conversation_id,
      message_id: d.message_id,
      from: d.local_info?.from,
      local_message_id: f == null ? undefined : f.local_message_id,
      is_regenerate: f == null ? undefined : f.local.isRegenerate,
      has_err: d.error_details?.error_code,
      log_id: d.local_info?.log_id,
      inner_log_id: (d == null ? undefined : d.ext?.inner_log_id) || (d == null ? undefined : d.ext?.log_id),
      trace_id: d.local_info?.trace_id,
      retried: d == null ? undefined : d.local_info?.retried,
      reply_id: d == null ? undefined : d.reply_id,
      content_type: String(d.content_type),
      skill_id: d.skill?.skill_id,
      skill_type: d.skill?.skill_type,
      is_ultra_long_text: d == null ? undefined : d.ext?.is_ultra_long_text,
      ...v
    };
  };
  var messagePayloadMetaExtractor = require("message-payload-meta-extractor") /*id: 897323*/;
  let {
    ConnectionType: G
  } = chatMessageTypes;
  let $ = e => {
    let {
      conversation_id: u,
      message_id: c = ""
    } = e;
    let d = {
      namespace: e.local_info?.from,
      meta: {
        message: e
      }
    };
    if (!u) {
      loggerServiceCore.defaultLogger.console.warning({
        ...d,
        message: "message.conversation_id is empty when update message in handleMessage"
      });
      return;
    }
    let f = {
      ...e,
      conversation_id: u
    };
    if (messageContentTypeAndStatusChecker.FWe(e)) {
      if (validateConversationId.isValidConversation(f)) {
        sessionLifecycleManager.sessionManager.copySessionIdWithSentMessageId(f.local_conversation_id, f.local_message_id || "", f.message_id || "");
        sessionLifecycleManager.sessionManager.moveAllSessionLifeCycle(f.local_conversation_id, f.conversation_id);
      } else {
        sessionLifecycleManager.sessionManager.copySessionIdWithSentMessageId(f.conversation_id, f.local_message_id || "", f.message_id || "");
      }
      U(f);
      return;
    }
    if ((e == null ? undefined : e.local_info?.from) !== chatCoreConstants.ChatSourceTypes.AliceChatFallback && e.reply_id) {
      aliceChatTaskManager.cancelFallbackTask(e.reply_id);
    }
    if (e.next_connection_type === G.HttpChunk && (e == null ? undefined : e.local_info?.from) === chatCoreConstants.ChatSourceTypes.AliceChatSocket) {
      aliceChatTaskManager.pullStreamMessage(e);
    }
    if (chatLoadingMessageCheck.isLoadingMessage(e)) {
      S(f);
      return;
    }
    if (!c) {
      loggerServiceCore.defaultLogger.console.warning({
        ...d,
        message: "message.message_id is empty when update message in handleMessage"
      });
      return;
    }
    let v = {
      ...e,
      message_id: c,
      conversation_id: u
    };
    if (messageContentTypeAndStatusChecker.DRY(v)) {
      A(v);
      return;
    }
    messageReceiveHandler.handleReceivedMessage(v);
  };
  require.d(exports, {
    getMessageReportParams: function () {
      return H;
    },
    checkPromptUsage: function () {
      return messagePayloadMetaExtractor.checkPromptUsage;
    },
    resolvePromptType: function () {
      return messagePayloadMetaExtractor.resolvePromptType;
    },
    getDraftMessage: function () {
      return messageDraftHandler.getDraftMessage;
    },
    extractUploadInfo: function () {
      return messagePayloadMetaExtractor.extractUploadInfo;
    },
    getConversationReplies: function () {
      return messageDraftHandler.getConversationReplies;
    },
    getLocalMessage: function () {
      return messageDraftHandler.getLocalMessage;
    },
    handleMessageUpdate: function () {
      return $;
    },
    addDraftMessageLink: function () {
      return messageDraftHandler.addDraftMessageLink;
    },
    getQuoteMetadata: function () {
      return messagePayloadMetaExtractor.getQuoteMetadata;
    },
    createDraftMessage: function () {
      return messageDraftHandler.createDraftMessage;
    }
  });
}