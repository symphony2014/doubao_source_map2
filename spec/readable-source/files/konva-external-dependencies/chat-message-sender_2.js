// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'sendMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 656716
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var skillGuidanceModeMap = require("skill-guidance-mode-map") /*id: 147623*/;
  var chatSessionLogger = require("chat-session-logger") /*id: 633460*/;
  var telemetryTraceManager = require("telemetry-trace-manager") /*id: 721376*/;
  var chatContextManager = require("chat-context-manager") /*id: 843425*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var uiComponentTypeConstants = require("ui-component-type-constants") /*id: 169442*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  var conversationMessageProcessor = require("conversation-message-processor") /*id: 500435*/;
  var messagePayloadTypeGuards = require("message-payload-type-guards") /*id: 669738*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var messageDraftHandler = require("message-draft-handler") /*id: 971522*/;
  let D = (e, t) => {
    var n;
    let [r] = e;
    draftMessageManager.getAndRemoveDraft(r, chatMessagingConstants.mockReplyMessageId);
    if (t.local?.isReady) {
      messageDraftHandler.createDraftMessage({
        isRegenerate: (n = t.local.isRegenerate) !== null && n !== undefined && n,
        immerUpdateMessage: e,
        conversationId: t.conversation_id ?? "",
        replyId: t.local.isRegenerate ? t.reply_id || "" : t.local_message_id || "",
        messageId: "",
        newLocalMessageId: chatMessagingConstants.mockReplyMessageId,
        sectionId: t.section_id,
        skillType: t == null ? undefined : t.skill?.skill_type
      });
      messageDraftHandler.addDraftMessageLink({
        immerUpdateMessage: e,
        newLocalMessageId: chatMessagingConstants.mockReplyMessageId,
        messageKey: uuidV1GeneratorWrapper.generateUuid()
      });
    }
  };
  let N = (e, t, o) => {
    if (o.resolvedConversationId) {
      chatMessageStoreUpdater.updateChatMessages({
        conversationId: o.resolvedConversationId,
        immerUpdate: function () {
          var a = arguments.length;
          var n = Array(a);
          var i = 0;
          for (; i < a; i++) {
            n[i] = arguments[i];
          }
          if (!o.localMessageId) {
            return;
          }
          let [r] = n;
          let {
            draftMessageLinks: l,
            draftLocalMessageMap: s
          } = r;
          s[o.localMessageId] = t;
          let d = {
            isLocalMessage: true,
            messageId: o.localMessageId
          };
          if (t.ext?.regen !== "1") {
            l.push(d);
          }
          D(n, t);
        }
      });
    }
  };
  let G = (e, t) => {
    chatMessageStoreUpdater.updateChatMessages({
      conversationId: t.resolvedConversationId,
      immerUpdate: e => {
        let {
          draftLocalMessageMap: {
            [t.localMessageId]: o
          }
        } = e;
        if (!(o == null ? undefined : o.local)) {
          return;
        }
      }
    });
  };
  let Z = (e, t, o) => {
    if (o.resolvedConversationId) {
      chatMessageStoreUpdater.updateChatMessages({
        conversationId: o.resolvedConversationId,
        immerUpdate: function () {
          var a;
          var i = arguments.length;
          var r = Array(i);
          var l = 0;
          for (; l < i; l++) {
            r[l] = arguments[l];
          }
          let s = t.local_message_id;
          if (!s) {
            return;
          }
          let [d] = r;
          let {
            draftLocalMessageMap: {
              [s]: c
            },
            draftMessageLinks: u
          } = d;
          let v = {
            ...c,
            ...t
          };
          v.create_time = Date.now();
          v.local.prevRemoteMessageId = t.local.isRegenerate ? o == null ? undefined : (a = o.operation) === null || a === undefined ? undefined : a.regenerate?.regenerateTailMessageId : messageFilterUtils.filterValidMessages(u)?.messageId || "";
          let p = u.findIndex(e => e.messageId === t.local_message_id);
          if (~p && p !== u.length - 1) {
            u.push(...u.splice(p, 1));
          }
          d.draftLocalMessageMap[s] = v;
          D(r, v);
        }
      });
    }
  };
  let H = e => conversationMessageUtils_1.getLastMessageInfo(chatMessageStoreFactory.createMessageStore.getState(), e);
  var messageTraceManager = require("message-trace-manager") /*id: 341265*/;
  var samanthaChatMessageCmd = require("samantha-chat-message-cmd") /*id: 283070*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  function V(e) {
    let o = e.local_message_id;
    if (!o) {
      return false;
    }
    let a = chatMessageStoreFactory.createMessageStore.getState().sendMessagePromiseTasks[o]?.expired;
    return !isUndefinedCheck.isUndefined(a) && Date.now() - a > 0;
  }
  function $(e) {
    return !!e.local_message_id && !!chatMessageStoreFactory.createMessageStore.getState().sendMessagePromiseTasks[e.local_message_id];
  }
  var finishMessageTask = require("finish-message-task") /*id: 989964*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  function J(e) {
    let {
      local_message_id: t
    } = e;
    if (!t) {
      return;
    }
    let {
      sendMessageStartTimeout: o = chatMessagingConstants.heartbeatInterval
    } = configSyncLoader.getConfig("chatMessageConfig") || {};
    chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(e => {
      e.sendMessagePromiseTasks[t] = {
        local_message_id: t,
        finish: emptyExportFunction.emptyFunction,
        expired: Date.now() + o
      };
    }));
  }
  var chatMessageServiceManager = require("chat-message-service-manager") /*id: 701777*/;
  let ee = () => {
    let e;
    let t;
    return {
      promise: new Promise((o, a) => {
        e = o;
        t = a;
      }),
      resolve: e,
      reject: t
    };
  };
  let et = e => !!e.local_message_id;
  let eo = e => !!e.local_conversation_id || !!e.conversation_id;
  let ea = e => (t, o) => new Promise((a, n) => {
    if (!t.every(et)) {
      loggerServiceCore.defaultLogger.console.info("local_message_id is empty, skip to send message");
      return a("skip");
    }
    if (!t.every($)) {
      loggerServiceCore.defaultLogger.console.info("task is empty, skip to send message");
      return a("skip");
    }
    if (t.some(V)) {
      return a("skip");
    }
    if (e != null) {
      e(t, o);
    }
    let i = t.map(e => ({
      message: e,
      ...ee()
    }));
    i.forEach(e => {
      let {
        message: t,
        resolve: o
      } = e;
      return function (e, t) {
        let o = e.local_message_id;
        if (!o) {
          return;
        }
        let a = () => {
          t();
          chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(e => {
            delete e.sendMessagePromiseTasks[o];
          }));
        };
        if (chatMessageStoreFactory.createMessageStore.getState().sendMessagePromiseTasks[o]) {
          chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(e => {
            e.sendMessagePromiseTasks[o].finish = a;
          }));
        }
      }(t, o);
    });
    let r = setTimeout(() => n(Error("timeout")), o.customSendWaitTimeout || chatMessagingConstants.thinkingTimeout);
    Promise.all(i.map(e => {
      let {
        promise: t
      } = e;
      return t;
    })).then(() => {
      a("finish");
      clearTimeout(r);
    });
  });
  let en = ea(async (e, t) => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "send_message_start_with_socket",
      meta: {
        local_message_id: e[0]?.local_message_id,
        message_id: e[0]?.message_id,
        conversation_id: e[0]?.conversation_id,
        local_conversation_id: e[0]?.local_conversation_id
      }
    });
    let r = await chatPluginIocManager.chatProtocolLoader("AliceChatSocket");
    if (r != null) {
      r.sendMessage(e, t);
    }
  });
  let ei = ea(async (e, t) => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "send_message_start_with_http—long-polling",
      meta: {
        local_message_id: e[0]?.local_message_id,
        message_id: e[0]?.message_id,
        conversation_id: e[0]?.conversation_id,
        local_conversation_id: e[0]?.local_conversation_id
      }
    });
    let r = await chatPluginIocManager.chatProtocolLoader("AliceChatFallback");
    if (r != null) {
      r.sendMessage(e, t);
    }
  });
  let er = (e, t) => {
    let o = t || e;
    let a = (t, n) => e(t, n).catch(e => o(t, n).catch(e => a(t, n)));
    return a;
  };
  let el = e => e.some(e => {
    return utf8EncodingUtils_1.Utf8Utils.length(`${safeJsonUtils.safeStringify(e == null ? undefined : e.content_obj) || ""}${(e == null ? undefined : e.ext?.browser_explain) || ""}${(e == null ? undefined : e.ext?.samantha_context) || ""}`) > chatMessagingConstants.streamTimeout;
  });
  let es = (e, t) => {
    let o;
    if (e.every(et)) {
      if (e.every(eo)) {
        e.forEach(e => finishMessageTask.finishMessageTask(e.local_message_id));
        e.forEach(J);
        return (el(e) ? er(ei) : er(en, ei))(e, t);
      } else {
        loggerServiceCore.defaultLogger.console.info("local_conversation_id or conversation_id is empty, skip sending message");
        return Promise.resolve();
      }
    } else {
      loggerServiceCore.defaultLogger.console.info("local_message_id is empty, skip sending message");
      return Promise.resolve();
    }
  };
  let ed = function () {
    var e = arguments.length;
    var t = Array(e);
    var o = 0;
    for (; o < e; o++) {
      t[o] = arguments[o];
    }
    let a = chatMessageServiceManager.chatMessageServiceContext.service;
    if (a == null ? undefined : a._messageServiceIsInitialed) {
      es(...t);
    } else if (a != null) {
      a.tryInitMessageProtocolService(() => {
        es(...t);
      });
    }
  };
  let ec = e => {
    var n;
    var r;
    var s;
    var u;
    var p;
    let {
      messages: _,
      customSendWaitTimeout: g,
      isNeedDowngrade: f
    } = e;
    let y = _[0]?.local_conversation_id || _[0]?.conversation_id;
    let h = messageTraceManager.MessageTraceManager.getInstance(y);
    let I = h.rootSpan ?? h.startSpan("client_send_message");
    let C = I == null ? undefined : I.toCarrier();
    let x = (n = _[0]) === null || n === undefined ? undefined : n.ext?.useSamanthaChat;
    if (messagePayloadTypeGuards.isMainReleaseOrSpecialSkill({
      botType: ((r = _[0]) === null || r === undefined ? undefined : r.local?.botType) || "UGC",
      stage: (s = _[0]) === null || s === undefined ? undefined : s.local?.samanthaChatStage,
      isNeedDowngrade: f,
      skill: _[0]?.skill
    }) || x) {
      samanthaChatMessageCmd.sendSamanthaMessage(_, {
        headers: C
      });
      return;
    }
    if (messagePayloadTypeGuards.isMainDiffStage({
      botType: ((u = _[0]) === null || u === undefined ? undefined : u.local?.botType) || "UGC",
      stage: (p = _[0]) === null || p === undefined ? undefined : p.local?.samanthaChatStage,
      isNeedDowngrade: f
    })) {
      ed(_, {
        customSendWaitTimeout: g,
        headers: C
      });
      samanthaChatMessageCmd.sendSamanthaMessage(_, {
        headers: C
      });
      return;
    }
    ed(_, {
      customSendWaitTimeout: g,
      headers: C
    });
  };
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var messageContentProcessor = require("message-content-processor") /*id: 703581*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  let ey = () => uuidV1Generator.generateUuid();
  let eh = (e, t) => {
    if (!e) {
      return [];
    }
    let a = e == null ? undefined : e.ext?.collection_id;
    if (!a) {
      return [e];
    }
    let n = chatMessageStoreFactory.createMessageStore.getState();
    let i = n.messageLinkMap[t];
    let r = n.messageMap[t];
    return i.filter(e => {
      var o;
      return messageContentTypeAndStatusChecker.Yns(r[e.messageId]) && ((o = r[e.messageId]) === null || o === undefined ? undefined : o.ext?.collection_id) === a;
    }).map(e => conversationMessageUtils_1.getMessageFromLink(n, t, e)).filter(infraUtilFunctions.isDefined);
  };
  let eI = e => {
    var t;
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: chatMessageTypes.ContentType.Text,
      contentObj: {
        text: (t = e.payload.text) === null || t === undefined ? undefined : t.trim()
      },
      isReady: true,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let eC = e => {
    let n = [];
    let i = !!e.payload.image_key;
    n.push({
      key: e.payload?.image_key || "",
      image_ori: e.payload?.image_ori || "",
      image_thumb: e.payload?.image_thumb || ""
    });
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: chatMessageTypes.ContentType.Image,
      contentObj: {
        data: n
      },
      isReady: i,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Image),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let ex = e => {
    let t = [];
    let o = !!e.payload.file_key;
    t.push({
      file_name: e.payload.file_name,
      key: e.payload.file_key
    });
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: chatMessageTypes.ContentType.File,
      contentObj: {
        file_list: t
      },
      isReady: o,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.File),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let eT = e => {
    let i = true;
    let r = e => {
      let t = [];
      if (e != null) {
        e.forEach(e => {
          t.push(e);
          i &&= !!e.key;
        });
      }
      return t;
    };
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentObj: messagePayloadTypeGuards.hasImagesInCompositeContent(e.payload) ? {
        text: e.payload.compositeContent?.text,
        image_model: {
          image_list: r(e.payload.compositeContent?.images)
        }
      } : messagePayloadTypeGuards.hasFilesInCompositeContent(e.payload) ? {
        text: e.payload.compositeContent.text,
        file_model: {
          file_list: r(e.payload.compositeContent.files)
        }
      } : messagePayloadTypeGuards.hasLinksInCompositeContent(e.payload) ? {
        text: e.payload.compositeContent.text,
        link_model: {
          url: e.payload.compositeContent.links[0]
        }
      } : messagePayloadTypeGuards.hasWebsitesInCompositeContent(e.payload) ? {
        text: e.payload.compositeContent?.text,
        website_model: {
          pages: e.payload.compositeContent?.websites
        }
      } : {},
      contentType: chatMessageTypes.ContentType.Composite,
      isReady: i,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Composite),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let eb = e => {
    let {
      nestedItems: t,
      text: o
    } = e.payload;
    let a = t == null ? undefined : t.map(e => e.type === contentTypeEnums.resourceType.Image ? {
      entity_type: e.type,
      entity_content: {
        image: e.image || {}
      },
      identifier: e.identifier,
      file_parse_state: e.parseState,
      file_name_state: e.reviewState
    } : e.fileType === contentTypeEnums.mediaType.Audio || e.fileType === contentTypeEnums.mediaType.Video ? {
      entity_type: e.type,
      entity_content: {
        file: {
          file_name: e.fileName,
          key: e.fileKey,
          size: e.size,
          file_type: e.fileType,
          md5: e.md5,
          image: e.image
        }
      },
      identifier: e.identifier,
      file_parse_state: e.parseState,
      file_name_state: e.reviewState
    } : {
      entity_type: contentTypeEnums.resourceType.File,
      entity_content: {
        file: {
          file_name: e.fileName,
          key: e.fileKey,
          size: e.size,
          file_type: e.fileType,
          md5: e.md5,
          image: e.image
        }
      },
      identifier: e.identifier,
      file_parse_state: e.parseState,
      file_name_state: e.reviewState
    }, []);
    if ((a == null ? undefined : a.length) === 0) {
      return {
        ...e.payload,
        resolvedConversationId: e.resolvedConversationId,
        localMessageId: e.localMessageId,
        contentType: chatMessageTypes.ContentType.Text,
        contentObj: {
          text: o == null ? undefined : o.trim()
        },
        isReady: true,
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
        extraExt: {
          ...e.payload.extraExt,
          source: e.source
        },
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
          ...e.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(e.payload)
        }
      };
    } else {
      return {
        ...e.payload,
        resolvedConversationId: e.resolvedConversationId,
        localMessageId: e.localMessageId,
        contentType: chatMessageTypes.ContentType.Nested,
        contentObj: {
          text: o == null ? undefined : o.trim(),
          entities: a
        },
        isReady: true,
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
        extraExt: {
          ...e.payload.extraExt,
          source: e.source
        },
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Nested),
          ...e.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(e.payload)
        }
      };
    }
  };
  let eS = e => {
    var o;
    if (!((o = e.payload.operation) === null || o === undefined ? undefined : o.copySend?.messageLink)) {
      return;
    }
    let {
      messageLink: a
    } = e.payload.operation.copySend;
    let n = conversationMessageUtils_1.getMessageFromLink(e.store, e.resolvedConversationId, a);
    if (n) {
      return messageContentProcessor.processMessageContent(n, e);
    }
  };
  let eE = e => {
    var t;
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: chatMessageTypes.ContentType.Text,
      contentObj: {
        text: (t = e.payload.text) === null || t === undefined ? undefined : t.trim()
      },
      isReady: true,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      attachments: e.payload.attachments,
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let eP = e => {
    var t;
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: chatMessageTypes.ContentType.Text,
      contentObj: {
        text: (t = e.payload.text) === null || t === undefined ? undefined : t.trim(),
        action: e.payload.action,
        gen_ppt_input: e.payload.gen_ppt_input,
        gen_outline_input: e.payload.gen_outline_input
      },
      isReady: true,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let eM = e => {
    var t;
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchEngineInput,
      contentObj: {
        text: (t = e.payload.text) === null || t === undefined ? undefined : t.trim(),
        up_template_key: e.payload?.up_template_key
      },
      isReady: true,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let ek = e => {
    var t;
    return {
      ...e.payload,
      resolvedConversationId: e.resolvedConversationId,
      localMessageId: e.localMessageId,
      contentType: aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepResearchInput,
      contentObj: {
        text: (t = e.payload.text) === null || t === undefined ? undefined : t.trim(),
        direct_research: e.payload?.direct_research
      },
      isReady: true,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(e.payload),
      extraExt: {
        ...e.payload.extraExt,
        source: e.source
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...e.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(e.payload)
      }
    };
  };
  let ew = e => {
    if (messagePayloadTypeGuards.hasGenPptInputInPayload(e)) {
      return eP(e);
    }
    if (messagePayloadTypeGuards.hasDirectResearchInPayload(e)) {
      return ek(e);
    }
    if (messagePayloadTypeGuards.hasUpTemplateKeyInPayload(e)) {
      return eM(e);
    }
    if (messagePayloadTypeGuards.hasNestedItemsInPayload(e)) {
      return eb(e);
    }
    if (messagePayloadTypeGuards.hasTextInPayload(e)) {
      return eI(e);
    } else if (messagePayloadTypeGuards.hasImageInPayload_1(e)) {
      return eC(e);
    } else if (messagePayloadTypeGuards.hasFileInPayload(e)) {
      return ex(e);
    } else if (messagePayloadTypeGuards.hasCompositeContentInPayload(e)) {
      return eT(e);
    } else if (messagePayloadTypeGuards.hasCopySendOperation(e)) {
      return eS(e);
    } else if (messagePayloadTypeGuards.hasAttachmentsInPayload(e)) {
      return eE(e);
    }
  };
  let eR = e => {
    let a = ew(e);
    if (a) {
      return [a];
    }
    let {
      replace: n,
      resume: i,
      remove: r,
      regenerate: l,
      resend: s,
      newChat: d
    } = e.payload.operation || {};
    let c = (n || i || r || s || d)?.messageLink ?? (l ? {
      messageId: l.sentMessageId,
      isLocalMessage: false
    } : undefined);
    let u = (d == null ? undefined : d.conversationId) || e.resolvedConversationId;
    let v = c ? conversationMessageUtils_1.getMessageFromLink(e.store, u, c) : undefined;
    let p = (l ? eh(v, u) : [v].filter(infraUtilFunctions.isDefined)).map(t => {
      let p = (t == null ? undefined : t.ext?.source) || e.payload.reportParams.scene;
      e.source = l || n && e.payload.reportParams.scene !== "edit" || s ? p : e.payload.reportParams.scene;
      let m = messageContentProcessor.processMessageContent(t, e);
      if (i && (m == null ? undefined : m.extraExt)) {
        m.extraExt.ugc_plugin_auth_infos = e.payload.extraExt?.ugc_plugin_auth_infos ?? "";
      }
      if (d && (m == null ? undefined : m.extraExt)) {
        m.extraExt.need_create_thread = e.payload.extraExt?.need_create_thread ?? "";
      }
      if ((m == null ? undefined : m.operation?.replace) && (m == null ? undefined : m.extraExt)) {
        delete m.extraExt.collection_id;
      }
      return m;
    }).filter(infraUtilFunctions.isDefined);
    if (p.length > 1 && p.some(e => {
      return !e.extraExt?.collection_id;
    })) {
      let e = ey();
      p.forEach(t => {
        t.extraExt = {
          ...t.extraExt,
          collection_id: e
        };
        return t;
      });
    }
    if (!isEmptyUtil.isEmpty(p)) {
      return p;
    }
    loggerServiceCore.defaultLogger.persist.warning("sendMsgUnsupportedTypeOrScene");
    throw Error("Unsupported MessageType");
  };
  var messagePayloadMetaExtractor = require("message-payload-meta-extractor") /*id: 897323*/;
  let eL = {
    onboarding_first_met: "onboarding_first_met_sug",
    onboarding_welcome_back: "onboarding_welcome_back_sug"
  };
  let eO = e => {
    let t = chatMessageStoreFactory.createMessageStore.getState();
    return safeArrayFlattenUtil.safeFlattenArray(e.map(e => {
      e.reportParams = {
        ...e.reportParams,
        ...messagePayloadMetaExtractor.extractUploadInfo(e),
        ...messagePayloadMetaExtractor.getQuoteMetadata(e),
        ...messagePayloadMetaExtractor.resolvePromptType(e)
      };
      let {
        preGeneratedLocalMessageId: o = ""
      } = e;
      let a = conversationMessageProcessor.getConversationId(e);
      let n = eL[e.reportParams.scene] || e.reportParams.scene;
      let {
        botId: i = ""
      } = e;
      return eR({
        payload: e,
        resolvedConversationId: a,
        store: t,
        localMessageId: o,
        botId: i,
        source: n
      });
    }));
  };
  let eA = e => {
    var o;
    let {
      replace: a,
      remove: n,
      regenerate: i,
      resume: l
    } = e.operation || {};
    return {
      is_delta: false,
      local_conversation_id: e.localConversationId,
      bot_id: e.botId,
      conversation_id: e.conversationId,
      section_id: e.sectionId,
      local_message_id: e.localMessageId,
      message_type: chatMessageTypes.MessageType.Message,
      content_type: e.contentType,
      content_obj: e.contentObj,
      create_time: Date.now(),
      ...(a || n || l ? {
        message_id: (o = a || n || l) === null || o === undefined ? undefined : o.messageLink?.messageId
      } : {}),
      ...(i ? {
        reply_id: i.sentMessageId,
        local_message_id: i.sentLocalMessageId
      } : {}),
      ...(e.contentType === chatMessageTypes.ContentType.Text ? {
        content_source: e.reportParams.content_source || chatCoreConstants.MessageActions.Other,
        template_id: e.reportParams.content_source_template_id
      } : {}),
      ext: e.extraExt,
      status: e.messageStatus
    };
  };
  var checkImageContentType = require("check-image-content-type") /*id: 490356*/;
  var checkFileContentType = require("check-file-content-type") /*id: 934971*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var extractSamanthaRefImages = require("extract-samantha-ref-images") /*id: 203149*/;
  var aiSkillTypeFormatter = require("ai-skill-type-formatter") /*id: 955849*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var createMessageObject = require("create-message-object") /*id: 74878*/;
  let eV = e => {
    let {
      payload: x,
      store: T
    } = e;
    let {
      regenerate: b
    } = x.operation || {};
    let S = [];
    let E = [...parseReferenceContentArray.parseReferenceContentArray(x.extraExt)];
    let P = {
      conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), x.resolvedConversationId || "", true) ?? x.conversationType,
      ...eA(x),
      ...aiSkillTypeFormatter.formatSkillType(x.extraExt),
      status: x.messageStatus,
      content_obj: x.contentObj,
      user_type: chatMessageTypes.UserType.Human,
      attachments: S,
      references: E
    };
    if ("sendAttachments" in x && x.sendAttachments?.length) {
      S.push(...x.sendAttachments);
    }
    if (x.contentObj?.file_model) {
      S.push(...chatAttachmentFormatter.formatFileList(x.contentObj?.file_model));
    }
    if (x.contentObj?.link_model) {
      S.push(chatLinkMapper.createChatLink(x.contentObj.link_model));
    }
    if (x.contentObj?.image_model) {
      S.push(...imageDataTransformer.transformImageData(x.contentObj.image_model?.image_list));
    }
    if (x.contentObj?.entities) {
      S.push(...chatContentTransformer.transformChatContent(x.contentObj.entities, x.nestedItems));
    }
    if (checkImageContentType.isImageContentType(P)) {
      S.push(...imageDataTransformer.transformImageData(x.contentObj?.data));
    }
    if (messageContentTypeAndStatusChecker.NB8(P)) {
      S.push(...extractSamanthaRefImages.extractRefImages(x.extraExt));
    }
    if (checkFileContentType.isFileContentType(P)) {
      S.push(...chatAttachmentFormatter.formatFileList(x.contentObj));
    }
    if (messageContentTypeAndStatusChecker.EkH(P)) {
      S.push(...((x == null ? undefined : x.attachments) || []));
    }
    if (messageContentTypeAndStatusChecker.G7Q(P) || messageContentTypeAndStatusChecker.qP0(P)) {
      safePropertyAssignUtil.safePropertyAssign(P, {
        content_obj: {
          ...P.content_obj,
          ...skillMessageProcessor.editImageContext(P.ext),
          ...skillMessageProcessor.finishedImageContext(P.ext),
          ...skillMessageProcessor.inputSkillConfig(P.ext),
          ...skillMessageProcessor.skillVariables(P.ext),
          ...skillMessageProcessor.promptTemplate(P.ext),
          ...skillMessageProcessor.pdfHoverPosition(P.ext)
        }
      });
    }
    if (P.content_obj?.image_list) {
      safePropertyAssignUtil.safePropertyAssign(P.content_obj, {
        data: P.content_obj.image_list
      });
      delete P.content_obj.image_list;
    }
    if (P.ext?.generate_mind_map) {
      safePropertyAssignUtil.safePropertyAssign(P.content_obj, skillMessageProcessor.mindMapConfig(P.ext));
    }
    if (P == null ? undefined : P.ext?.immersive_reading_files) {
      safePropertyAssignUtil.safePropertyAssign(P.content_obj, skillMessageProcessor.immersiveFiles(P.ext));
    }
    if (P == null ? undefined : P.ext?.need_reference) {
      safePropertyAssignUtil.safePropertyAssign(P.content_obj, skillMessageProcessor.referenceFlag(P.ext));
    }
    if (P == null ? undefined : P.ext?.command) {
      safePropertyAssignUtil.safePropertyAssign(P.content_obj, {
        command: P.ext.command
      });
    }
    if (messageContentTypeAndStatusChecker.X6X(P)) {
      safePropertyAssignUtil.safePropertyAssign(P, {
        content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput
      });
    }
    if (x.extraExt?.artifact_key) {
      safePropertyAssignUtil.safePropertyAssign(P.content_obj, {
        artifact_key: x.extraExt?.artifact_key
      });
    }
    return createMessageObject.createMessageObject({
      message: P,
      messageLinks: T.messageLinkMap[x.resolvedConversationId],
      messageStreamStage: chatCoreConstants.MessageStates.SENDING,
      isRegenerate: x.isRegenerate,
      prevMessageId: x.isRegenerate ? b == null ? undefined : b.regenerateTailMessageId : undefined,
      localKey: "local_key" in x ? x.local_key : "",
      enterFrom: x.reportParams.enter_from,
      isReady: x.isReady,
      botType: x.botType,
      samanthaChatStage: x.reportParams.samantha_protocol_stage,
      isNova: x.reportParams.is_nova
    });
  };
  var lifecycleErrorUtils = require("lifecycle-error-utils") /*id: 108909*/;
  var draftReplyDeleteHandler = require("draft-reply-delete-handler") /*id: 114423*/;
  var suggestionMessageRemover = require("suggestion-message-remover") /*id: 624562*/;
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var sessionLifecycleManager = require("session-lifecycle-manager") /*id: 49481*/;
  var messageSessionLifecycleHandler = require("message-session-lifecycle-handler") /*id: 216801*/;
  var aliceChatTaskManager = require("alice-chat-task-manager") /*id: 268829*/;
  let e1 = async function (e, {
    beforeSendMessage: t,
    customSendWaitTimeout: o,
    lifeCycleContext: k
  } = {}) {
    chatSessionLogger.logSessionStart({
      temp: {
        chat_next: "0"
      },
      slardar: {
        chat_session_scene: "chat_conversation"
      }
    });
    let R = chatMessageStoreFactory.createMessageStore.getState();
    try {
      var z;
      var Y;
      var V;
      var X;
      var ee;
      var eo;
      var en;
      var el;
      var ed;
      var ep;
      var ef;
      var eh;
      var eE;
      var eM;
      var ek;
      let d;
      e.forEach(e => {
        let {
          operation: o = {},
          preGeneratedLocalMessageId: n
        } = e;
        if (!n) {
          safePropertyAssignUtil.safePropertyAssign(e, {
            preGeneratedLocalMessageId: (o == null ? undefined : o.regenerate?.sentLocalMessageId) || uuidV1GeneratorWrapper.generateUuidV1()
          });
        }
      });
      for (let t of e = await messageSessionLifecycleHandler.handleReceivingTimeoutWithMessage(e[0].localConversationId || e[0].conversationId || "", "", e)) {
        let {
          botId: e,
          conversationId: o = ""
        } = t;
        safePropertyAssignUtil.safePropertyAssign(t, {
          sectionId: chatFeedStoreFactory.useFeedStore.getState().conversationMap[o]?.last_section_id || "",
          botId: e || chatConversationBotId.getConversationBotId(o) || ""
        });
      }
      let eR = eO(e);
      for (let e of eR) {
        let t = safeJsonUtils.safeParse((e == null ? undefined : e.extraExt?.ext_skill_ab) || (e == null ? undefined : e.extraExt?.input_skill), {});
        let o = (t == null ? undefined : t.skill_type) || 0;
        let n = conversationMessageProcessor.checkSkillReleaseType(o);
        let i = n === uiComponentTypeConstants.releaseType.Release;
        safePropertyAssignUtil.safePropertyAssign(e, {
          reportParams: {
            ...e.reportParams,
            samantha_protocol_stage: n,
            is_nova: i
          }
        });
      }
      let ej = eR[0].resolvedConversationId || "";
      let eL = eR[0].localMessageId || "";
      eR = await messageSessionLifecycleHandler.handleReceivingTimeout(ej, "", eR);
      await messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, ej);
      let eA = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(ej, eL);
      await messageSessionLifecycleHandler.handleSyncStart(ej, eA, {
        is_delta: false
      });
      if (k) {
        let e = sessionLifecycleManager.sessionManager.getSessionLifeCycleContext(ej, eA);
        for (let [t, o] of toEntriesUtil.toEntries(k)) {
          e.set(t, o);
        }
      }
      for (let e of eR) {
        let {
          operation: t
        } = e;
        if (t == null ? undefined : (z = t.resend) === null || z === undefined ? undefined : z.messageLink?.messageId) {
          draftReplyDeleteHandler.deleteDraftReply({
            conversationId: ej,
            messageLink: t.resend?.messageLink,
            deleteReply: true
          });
          continue;
        }
        if (t == null ? undefined : (Y = t.replace) === null || Y === undefined ? undefined : Y.messageLink?.messageId) {
          draftReplyDeleteHandler.deleteDraftReply({
            conversationId: ej,
            messageLink: t.replace?.messageLink,
            deleteReply: true
          });
          let e = conversationMessageUtils_1.getMessageFromLink(R, ej, {
            isLocalMessage: false,
            messageId: (ee = t.replace) === null || ee === undefined ? undefined : ee.messageLink?.messageId
          });
          await aliceChatTaskManager.cancelChatTasks({
            replyId: (eo = t.replace) === null || eo === undefined ? undefined : eo.messageLink?.messageId,
            localMessageId: e == null ? undefined : e.local_message_id
          });
          continue;
        }
        if (t == null ? undefined : (V = t.resume) === null || V === undefined ? undefined : V.messageLink?.messageId) {
          let e = conversationMessageUtils_1.getMessageFromLink(R, ej, {
            isLocalMessage: false,
            messageId: (en = t.resume) === null || en === undefined ? undefined : en.messageLink?.messageId
          });
          draftReplyDeleteHandler.deleteDraftReply({
            conversationId: ej,
            messageLink: t.resume?.messageLink,
            deleteReply: true
          });
          await aliceChatTaskManager.cancelChatTasks({
            replyId: (el = t.resume) === null || el === undefined ? undefined : el.messageLink?.messageId,
            localMessageId: e == null ? undefined : e.local_message_id
          });
          continue;
        }
        if (t == null ? undefined : (X = t.remove) === null || X === undefined ? undefined : X.messageLink?.messageId) {
          let e = conversationMessageUtils_1.getMessageFromLink(R, ej, {
            isLocalMessage: false,
            messageId: (ed = t.remove) === null || ed === undefined ? undefined : ed.messageLink?.messageId
          });
          draftReplyDeleteHandler.deleteDraftReply({
            conversationId: ej,
            messageLink: t.remove?.messageLink,
            deleteReply: true
          });
          chatMessageStoreUpdater.updateChatMessages({
            conversationId: ej,
            immerUpdate: (e, o) => {
              var n;
              var r;
              if ((n = t.remove) === null || n === undefined ? undefined : n.messageLink?.messageId) {
                o.resetMessageLink((r = t.remove) === null || r === undefined ? undefined : r.messageLink?.messageId);
              }
            }
          });
          await aliceChatTaskManager.cancelChatTasks({
            replyId: (ep = t.remove) === null || ep === undefined ? undefined : ep.messageLink?.messageId,
            localMessageId: e == null ? undefined : e.local_message_id
          });
          continue;
        }
        if (t == null ? undefined : t.regenerate?.sentMessageId) {
          let e = conversationMessageUtils_1.getMessageFromLink(R, ej, {
            isLocalMessage: false,
            messageId: t.regenerate?.sentMessageId
          });
          await aliceChatTaskManager.cancelChatTasks({
            replyId: t.regenerate?.sentMessageId,
            localMessageId: e == null ? undefined : e.local_message_id
          });
        }
      }
      eR.map(e => {
        e.extraExt = conversationMessageProcessor.buildMessageOperationParams(e, R);
      });
      if (!eR.some(e => e.isRegenerate)) {
        (function (e) {
          let {
            conversationId: t
          } = e;
          let {
            lastAvailableMessage: o
          } = H(t);
          if (localRegenCheck.shouldRegenerate(o)) {
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: t,
              immerUpdate(e) {
                let {
                  draftMessageLinks: t,
                  draftMessageMap: a,
                  draftLocalMessageMap: n
                } = e;
                let i = chatMessageUtils_2_1.getMessageGetter({
                  localMessageMap: n,
                  messageMap: a
                });
                t.forEach(t => {
                  let a = i(t);
                  if ((a == null ? undefined : a.reply_id) === (o == null ? undefined : o.reply_id) && a && messageContentTypeAndStatusChecker.FFC(a) && t.isLocalMessage) {
                    draftMessageManager.setDraftMessageStatus(e, t);
                  }
                });
              }
            });
          }
        })({
          conversationId: ej
        });
      }
      suggestionMessageRemover.removeSuggestion(ej);
      let eD = eR.map(e => {
        let o = eV({
          payload: e,
          store: R
        });
        if (!e.operation?.remove) {
          N(R, o, e);
        }
        return deepCloneWrapper_1.deepClone(o);
      });
      let eN = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      for (let e of eD) {
        let t = e.local_conversation_id || e.conversation_id || "";
        let o = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, e.local_message_id || "");
        let a = sessionLifecycleManager.sessionManager.getSessionLifeCycleContext(t, o, "");
        let {
          conversation: n
        } = chatConversationSelectors_1.getConversationBotInfo(chatFeedStoreFactory.useFeedStore.getState(), t, e.bot_id);
        a.set("chatTeaTraceEvent", new telemetryTraceManager.TelemetryTracker({
          commonTraceParams: {
            chat_next: "0",
            chat_scene: eR[0].reportParams.scene,
            chat_sec_scene: eR[0].reportParams.sec_scene,
            chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", t, chatSkillPinTypeDeterminer.getConversationBotInfo(t).botInfo),
            canvas_type: (ef = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService")) === null || ef === undefined ? undefined : ef.getCanvasTeaParams()?.canvas_type,
            canvas_sub_type: (eh = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService")) === null || eh === undefined ? undefined : eh.getCanvasTeaParams()?.canvas_sub_type
          },
          teaEventTraceParams: {
            receive_suggests: {},
            receive_think_reason: {},
            receive_batch_message: {},
            send_message: {
              send_message_type: eR[0].reportParams.message_type,
              ...((n == null ? undefined : n.thread_source?.source_type) === chatAppEnums.ThreadSourceType.MeetingMinutes ? {
                canvas_id: n == null ? undefined : n.thread_source.meeting_minutes?.identifier
              } : {}),
              is_quote: +((ek = eR[0].reportParams.is_quote) !== null && ek !== undefined ? !!ek : (Number(safeJsonUtils.safeParse(e.ext?.reference_content, {})?.length) || 0) > 0),
              ...(eR[0].reportParams.content_type === chatMessageTypes.ContentType.Text ? {
                original_content_source: eR[0].reportParams.content_source || chatCoreConstants.MessageActions.Other
              } : {}),
              ...(eR[0].reportParams?.enter_from === "bot_discover" ? {
                user_id: chatUserInfoActions.getUserIdStr(),
                req_id: eR[0].reportParams.bot_id ? eN == null ? undefined : eN.getBotIdToRequestIdMap()?.[eR[0].reportParams.bot_id] : "",
                recommend_from: skillConstantsEnum.RecommendSource.RECOMMEND_FROM_BOT_LIST_DISCOVER
              } : {}),
              ...(location.pathname.includes("/chat/new-thread") || location.pathname.includes("/chat/local_") ? {
                current_page: skillConstantsEnum.CurrentPageType.CURRENT_PAGE_CHAT
              } : {})
            }
          },
          teaEventOtherTraceParams: {
            ...eR[0].reportParams,
            ...((eE = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService")) === null || eE === undefined ? undefined : eE.getCanvasTeaParams())
          }
        }));
        a.set("chatEventContext", new chatContextManager.ChatContextManager({
          params: {
            slardar: {
              chat_session_scene: "chat_conversation",
              chat_session_id: o,
              chat_scene: skillGuidanceModeMap.getConversationMode((eM = eR[0]) === null || eM === undefined ? undefined : eM.reportParams?.send_source)
            }
          }
        }));
      }
      if (t != null) {
        t(eD);
      }
      let eG = [];
      try {
        for (let e of eD) {
          d = e;
          let t = e.local_conversation_id || e.conversation_id || "";
          let o = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, e.local_message_id || "");
          let a = await messageSessionLifecycleHandler.handleSessionStart(t, o, e);
          eG.push(a);
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.console.info({
          message: "send message failed",
          error: e
        });
        eR.forEach(e => G(R, e));
        if (d) {
          let t = deepCloneWrapper_1.deepClone(d);
          t.final_status = {
            message: t.final_status?.message,
            session: lifecycleErrorUtils.getErrorType(e)
          };
          messageSessionLifecycleHandler.handleSessionEndFromStart(ej, eA, t);
        }
        return;
      }
      if (!eG.length) {
        eG.push(...eD);
      }
      eG.forEach((e, t) => {
        if (!eR[t].operation?.remove) {
          Z(R, e, eR[t]);
        }
      });
      let eZ = messagePayloadTypeGuards.hasCollectionReference(eG == null ? undefined : eG[0]);
      ec({
        messages: eG,
        customSendWaitTimeout: o,
        isNeedDowngrade: eZ
      });
      for (let e of eD) {
        let t = e.local_conversation_id || e.conversation_id || "";
        let o = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, e.local_message_id || "");
        await messageSessionLifecycleHandler.handleSendingTimeoutGuard(t, o, e);
      }
    } catch (e) {
      messageSessionLifecycleHandler.handleErrorSending("", "", {
        is_delta: false,
        final_status: {
          message: "Error",
          session: lifecycleErrorUtils.getErrorType(e)
        }
      });
      throw e;
    }
  };
  require.d(exports, {
    sendMessage: function () {
      return e1;
    }
  });
}