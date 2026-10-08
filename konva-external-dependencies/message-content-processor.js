// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vp' to 'processMessageContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 703581
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var conversationMessageProcessor = require("conversation-message-processor") /*id: 500435*/;
  var messagePayloadTypeGuards = require("message-payload-type-guards") /*id: 669738*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  let g = (e, t) => ({
    ...t.payload,
    contentType: chatMessageTypes.ContentType.Text,
    isReady: true,
    contentObj: {
      text: messageContentUtils.formatMessage(e)
    },
    resolvedConversationId: t.resolvedConversationId,
    localMessageId: t.localMessageId,
    isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
    reportParams: {
      message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
      ...t.payload.reportParams,
      ...conversationMessageProcessor.getConversationReportParams(t.payload)
    }
  });
  let f = (e, t) => {
    var o;
    var i;
    let r = (o = e.content_obj) === null || o === undefined ? undefined : o.data[0].key;
    return {
      ...t.payload,
      resolvedConversationId: t.resolvedConversationId,
      localMessageId: t.localMessageId,
      contentType: chatMessageTypes.ContentType.Image,
      isReady: !!r,
      contentObj: {
        data: [{
          key: r
        }]
      },
      local_key: localResourceCheck.isLocal(e) ? e.local?.localKey : undefined,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      reportParams: {
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload),
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Image),
        from: ((i = t.payload) === null || i === undefined ? undefined : i.reportParams?.from) || ""
      }
    };
  };
  let y = (e, t) => {
    return {
      ...t.payload,
      contentType: chatMessageTypes.ContentType.Text,
      isReady: true,
      contentObj: {
        text: e == null ? undefined : e.content_obj?.text
      },
      resolvedConversationId: t.resolvedConversationId,
      localMessageId: t.localMessageId,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload)
      }
    };
  };
  let h = (e, t) => {
    var o;
    var i;
    var r;
    var d;
    let c = (o = e.content_obj) === null || o === undefined ? undefined : o.file_list[0].key;
    return {
      ...t.payload,
      resolvedConversationId: t.resolvedConversationId,
      local_key: localResourceCheck.isLocal(e) ? e.local?.localKey : undefined,
      localMessageId: t.localMessageId,
      contentType: chatMessageTypes.ContentType.File,
      isReady: !!c,
      contentObj: {
        file_list: [{
          key: c,
          file_name: (r = e.content_obj) === null || r === undefined ? undefined : (i = r.file_list) === null || i === undefined ? undefined : i[0]?.file_name
        }]
      },
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      reportParams: {
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload),
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Image),
        from: ((d = t.payload) === null || d === undefined ? undefined : d.reportParams?.from) || ""
      }
    };
  };
  let I = (e, t) => {
    var n;
    var i;
    var r;
    var s;
    var _;
    if (messageContentTypeAndStatusChecker.O7X(e)) {
      return {
        ...t.payload,
        resolvedConversationId: t.resolvedConversationId,
        localMessageId: t.localMessageId,
        contentType: chatMessageTypes.ContentType.Composite,
        contentObj: {
          text: ((r = e.content_obj.text) === null || r === undefined ? undefined : r.trim()) || "",
          link_model: {
            url: e.content_obj.link_model?.url || ""
          }
        },
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
        isReady: true,
        extraExt: t.payload.extraExt,
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Composite),
          ...t.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(t.payload)
        }
      };
    }
    if (messageContentTypeAndStatusChecker.tfX(e)) {
      return {
        ...t.payload,
        resolvedConversationId: t.resolvedConversationId,
        localMessageId: t.localMessageId,
        contentType: chatMessageTypes.ContentType.Composite,
        contentObj: {
          text: ((s = e.content_obj.text) === null || s === undefined ? undefined : s.trim()) || "",
          website_model: {
            pages: e.content_obj.website_model?.pages || []
          }
        },
        isReady: true,
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
        extraExt: t.payload.extraExt,
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Composite),
          ...t.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(t.payload)
        }
      };
    }
    let g = messageContentTypeAndStatusChecker.B$e(e);
    let f = messageContentTypeAndStatusChecker.icE(e);
    let y = g ? e.content_obj.image_model?.image_list : f ? e.content_obj.file_model?.file_list : undefined;
    if (!(y == null ? undefined : y[0])) {
      return {
        ...t.payload,
        resolvedConversationId: t.resolvedConversationId,
        localMessageId: t.localMessageId,
        contentType: chatMessageTypes.ContentType.Text,
        contentObj: {
          text: ((_ = e.content_obj.text) === null || _ === undefined ? undefined : _.trim()) || ""
        },
        isReady: true,
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
        extraExt: t.payload.extraExt,
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
          ...t.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(t.payload)
        }
      };
    }
    let h = y.map(e => {
      let {
        key: t
      } = e;
      return t;
    });
    return {
      ...t.payload,
      resolvedConversationId: t.resolvedConversationId,
      localMessageId: t.localMessageId,
      contentObj: g ? {
        text: ((n = e.content_obj.text) === null || n === undefined ? undefined : n.trim()) || "",
        image_model: {
          image_list: h.map(e => ({
            key: e
          }))
        }
      } : f ? {
        text: ((i = e.content_obj.text) === null || i === undefined ? undefined : i.trim()) || "",
        file_model: {
          file_list: y.map((e, t) => ({
            file_name: getObjectPathString.getObjectPathString("file_name")(e),
            key: h[t] || ""
          }))
        }
      } : {},
      contentType: chatMessageTypes.ContentType.Composite,
      isReady: true,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      extraExt: t.payload.extraExt,
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Composite),
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload)
      }
    };
  };
  let C = (e, t) => {
    var o;
    let n = deepCloneWrapper_1.deepClone(e.content_obj);
    if (n != null && (o = n.entities) !== null && o !== undefined) {
      o.forEach(e => {
        delete e.file_name_state;
        delete e.file_parse_state;
      });
    }
    return {
      ...t.payload,
      resolvedConversationId: t.resolvedConversationId,
      localMessageId: t.localMessageId,
      contentType: chatMessageTypes.ContentType.Nested,
      contentObj: n,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      isReady: true,
      extraExt: t.payload.extraExt,
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload)
      }
    };
  };
  let x = (e, t) => {
    var o;
    var v;
    var f;
    var y;
    if ((e == null ? undefined : e.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput) {
      let o = deepCloneWrapper_1.deepClone(e.content_obj);
      return {
        ...t.payload,
        resolvedConversationId: t.resolvedConversationId,
        localMessageId: t.localMessageId,
        contentType: chatMessageTypes.ContentType.Composite,
        sendAttachments: [...(e.attachments || [])],
        contentObj: o,
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
        isReady: true,
        extraExt: {
          ...t.payload.extraExt,
          useSamanthaChat: "true"
        },
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Composite),
          ...t.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(t.payload)
        }
      };
    }
    if ((e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.Text) {
      return {
        ...g(e, t),
        extraExt: {
          ...t.payload.extraExt,
          useSamanthaChat: "true"
        }
      };
    }
    if (messageContentTypeAndStatusChecker.xop(e) && isStringTypeCheck.isString(objectPathGetDefault.getObjectPathDefault(e, ["content_obj", "link_model", "url"]))) {
      return {
        ...t.payload,
        resolvedConversationId: t.resolvedConversationId,
        localMessageId: t.localMessageId,
        contentType: chatMessageTypes.ContentType.Composite,
        contentObj: {
          text: ((o = e.content_obj.text) === null || o === undefined ? undefined : o.trim()) || "",
          link_model: {
            url: e.content_obj.link_model?.url || "",
            repo_id: ((v = e.content_obj.link_model) === null || v === undefined ? undefined : v.extra?.repo_id) || "",
            repo_name: ((f = e.content_obj.link_model) === null || f === undefined ? undefined : f.extra?.repo_name) || ""
          }
        },
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
        isReady: true,
        extraExt: {
          ...t.payload.extraExt,
          useSamanthaChat: "true"
        },
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Composite),
          ...t.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(t.payload)
        }
      };
    }
    if (checkNestedContentType.isNestedContentType(e)) {
      let o = deepCloneWrapper_1.deepClone(e.content_obj);
      if (o != null && (y = o.entities) !== null && y !== undefined) {
        y.forEach(e => {
          delete e.file_name_state;
          delete e.file_parse_state;
        });
      }
      return {
        ...t.payload,
        resolvedConversationId: t.resolvedConversationId,
        localMessageId: t.localMessageId,
        contentType: chatMessageTypes.ContentType.Nested,
        contentObj: o,
        isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
        isReady: true,
        extraExt: {
          ...t.payload.extraExt,
          useSamanthaChat: "true"
        },
        reportParams: {
          message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
          ...t.payload.reportParams,
          ...conversationMessageProcessor.getConversationReportParams(t.payload)
        }
      };
    }
    return {
      ...t.payload,
      resolvedConversationId: t.resolvedConversationId,
      localMessageId: t.localMessageId,
      contentType: chatMessageTypes.ContentType.Nested,
      contentObj: {},
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      isReady: true,
      extraExt: {
        ...t.payload.extraExt,
        useSamanthaChat: "true"
      },
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload)
      }
    };
  };
  let T = (e, t) => {
    t.payload.extraExt = {
      ...t.payload.extraExt,
      ...throttledPathFilterStringify.throttledPathStr(e == null ? undefined : e.ext, ["browser_explain", "reference_source", "browser_plugin_info", "translate", "input_content_type", "reference_resource"])
    };
    return {
      ...t.payload,
      contentType: e.content_type,
      isReady: true,
      contentObj: e.content_obj,
      resolvedConversationId: t.resolvedConversationId,
      localMessageId: t.localMessageId,
      isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
      reportParams: {
        message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
        ...t.payload.reportParams,
        ...conversationMessageProcessor.getConversationReportParams(t.payload)
      }
    };
  };
  let b = (e, t) => ({
    ...t.payload,
    contentType: aiAssistantSkillTypes.SamanthaTypes.SamanthaMediaUnderstandingByAsrInput,
    isReady: true,
    contentObj: e.content_obj,
    resolvedConversationId: t.resolvedConversationId,
    localMessageId: t.localMessageId,
    isRegenerate: messagePayloadTypeGuards.hasRegenerateOperation(t.payload),
    reportParams: {
      message_type: conversationMessageProcessor.mapContentType(chatMessageTypes.ContentType.Text),
      ...t.payload.reportParams,
      ...conversationMessageProcessor.getConversationReportParams(t.payload)
    }
  });
  let S = (e, t) => (t.payload.extraExt = {
    source: t.source,
    ...t.payload.extraExt,
    ...throttledPathFilterStringify.throttledPathStr(e == null ? undefined : e.ext, ["msg_template_id", "collection_id", "input_skill", "need_create_thread", "reference_content", "immersive_reading_files", "pdf_hover_position", "samantha_context", "generate_mind_map", "answer_with_suggest"])
  }, messageContentTypeAndStatusChecker.iMt(e)) ? b(e, t) : messageContentTypeAndStatusChecker.kwD(e) ? x(e, t) : messageContentTypeAndStatusChecker.X6X(e) ? y(e, t) : messageContentTypeAndStatusChecker.Brd(e) ? T(e, t) : messageContentTypeAndStatusChecker.D28(e) ? C(e, t) : messageContentTypeAndStatusChecker.G7Q(e) ? g(e, t) : messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.O72(e) ? f(e, t) : messageContentTypeAndStatusChecker.xop(e) ? I(e, t) : checkNestedContentType.isNestedContentType(e) ? C(e, t) : messageContentTypeAndStatusChecker.A8i(e) ? h(e, t) : undefined;
  require.d(exports, {
    processMessageContent: function () {
      return S;
    }
  });
}