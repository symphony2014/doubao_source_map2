// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NN' to 'ChatMessageService'
// - Renamed export 'pk' to 'getChatMessageService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 374681
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageMetadataEnricher = require("chat-message-metadata-enricher") /*id: 126191*/;
  var instantMessagingGatewayClient = require("instant-messaging-gateway-client") /*id: 181716*/;
  let l = async e => {
    let {
      display_content: t = "",
      msg_id: n = "",
      conversation_id: i = ""
    } = e;
    let l = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.UPDATE_MSG_CONTENT,
      uplink_body: {
        update_msg_content_uplink_body: {
          message_id: n,
          display_content: t,
          conversation_id: i,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT
        }
      }
    });
    let {
      status_code: u,
      status_desc: c
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/update_content",
      method: "POST",
      data: l
    });
    return {
      code: u,
      msg: c
    };
  };
  let u = async e => {
    let {
      message_id: t = "",
      reply_id: n = ""
    } = e;
    let i = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.SWITCH_REGENERATE_MSG,
      uplink_body: {
        switch_regenerate_msg_uplink_body: {
          message_id: t,
          reply_id: n
        }
      }
    });
    let {
      status_code: s,
      status_desc: l
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/switch_regenerate",
      method: "POST",
      data: i
    });
    return {
      code: s,
      msg: l
    };
  };
  var chatSingleChainPullService = require("chat-single-chain-pull-service") /*id: 24059*/;
  let d = async () => {
    let e = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.CHECK_MESSAGE_SEND_RATE_LIMIT,
      uplink_body: {
        check_message_send_rate_limit_uplink_body: {}
      }
    });
    let {
      status_code: t,
      status_desc: n,
      downlink_body: i
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/send_rate_limit",
      method: "POST",
      data: e
    });
    return {
      code: t,
      msg: n,
      data: i == null ? undefined : i.check_message_send_rate_limit_downlink_body
    };
  };
  let f = async e => {
    let {
      conversation_id: n = "",
      message_id: i = "",
      feedbackDetail: l,
      feedbackSource: u,
      extra: c
    } = e;
    let d = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.FEEDBACK_MSG,
      uplink_body: {
        feedback_msg_uplink_body: {
          conversation_id: n,
          message_id: i,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          feedback_source: u === undefined ? chatConstantsEnum.messageRole.User : u,
          feedback_type: l == null ? undefined : l.feedback_type,
          feedback_detail_types: (l == null ? undefined : l.feedback_detail_types) ?? [],
          feedback_detail_type: l == null ? undefined : l.feedback_detail_type,
          extra: c
        }
      }
    });
    let {
      status_code: f,
      status_desc: h
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/feedback_msg",
      method: "POST",
      data: d
    });
    return {
      code: f,
      msg: h
    };
  };
  let h = async e => {
    let {
      conversation_id: t = "",
      message_id: n = "",
      regen_message_ids: i = []
    } = e;
    let l = i.length > 0 ? i : [n];
    let u = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.BATCH_UPDATE_MSG_STATUS,
      uplink_body: {
        batch_update_msg_status_uplink_body: {
          conversation_id: t,
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          message_body_list: l.map(e => ({
            message_id: e,
            status: chatConstantsEnum.messageStatus.MessageStatus_DELETED,
            local_message_id: "",
            ext: {}
          }))
        }
      }
    });
    let {
      status_code: c,
      status_desc: d
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/batch_update_status",
      method: "POST",
      data: u
    });
    return {
      code: c,
      msg: d
    };
  };
  var chatMessageNormalizer = require("chat-message-normalizer") /*id: 171293*/;
  let m = async e => {
    var t;
    var i;
    var l;
    let {
      request_list: f
    } = e;
    let h = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.BATCH_PULL_SINGLE_CHAIN,
      uplink_body: {
        batch_pull_singe_chain_uplink_body: {
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          direction: chatConstantsEnum.msgDirection.FROM_LATEST,
          limit: 1,
          params: (f == null ? undefined : (t = f.map(e => {
            return {
              conversation_id: e.conversation_id ?? ""
            };
          })) === null || t === undefined ? undefined : t.filter(e => !!e.conversation_id)) ?? [],
          evaluate_ab_params: "",
          evaluate_common_params: "",
          ext: {}
        }
      }
    });
    let {
      status_code: m,
      status_desc: g,
      downlink_body: _
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/chain/batch_single",
      method: "POST",
      data: h
    });
    let {
      batch_pull_singe_chain_downlink_body: v
    } = _ ?? {};
    let {
      message_map: y,
      retry_list: S
    } = v ?? {};
    let b = Object.keys(y ?? {});
    let E = {};
    let w = {};
    for (let e of b) {
      E[e] = (y == null ? undefined : (l = y[e]) === null || l === undefined ? undefined : (i = l.messages) === null || i === undefined ? undefined : i.map(chatMessageNormalizer.normalizeChatMessage)) ?? [];
      w[e] = Object.values((y == null ? undefined : y[e]?.regen_messages) ?? {}).map(chatMessageNormalizer.normalizeChatMessage);
    }
    return {
      code: m,
      msg: g,
      data: {
        retry_list: S,
        message_map: E,
        regen_map: w
      }
    };
  };
  let g = async e => {
    let {
      conversation_id: t = "",
      reply_id: n = ""
    } = e;
    let i = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.BREAK_MSG,
      uplink_body: {
        break_stream_msg_uplink_body: {
          conversation_id: t,
          reply_msg_id: n,
          message_id: "",
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT
        }
      }
    });
    let {
      status_code: l,
      status_desc: u
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/break_stream_msg",
      method: "POST",
      data: i
    });
    return {
      code: l,
      msg: u
    };
  };
  let _ = async e => {
    let t = chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.FIX_REGENERATE_MSG,
      uplink_body: {
        fix_regenerate_msg_uplink_body: e
      }
    });
    let {
      status_code: n,
      status_desc: i
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/message/fix_regenerate",
      method: "POST",
      data: t
    });
    return {
      code: n,
      msg: i
    };
  };
  function v(e, t, n) {
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
  class y {
    constructor() {
      v(this, "rateLimit", () => d());
      v(this, "getMessageList", async e => {
        var n;
        let r = await chatSingleChainPullService.pullSingleChain(e);
        if (!((n = r.data) === null || n === undefined ? undefined : n.message_list?.length)) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "IM_chain_single_empty",
            meta: {
              conversation_id: e.conversation_id,
              cursor: e.cursor,
              batch_size: e.batch_size
            }
          });
        }
        return r;
      });
      v(this, "getMessageListByIndexList", e => chatSingleChainPullService.pullSingleChain(e));
      v(this, "getLatestMessageList", e => m(e));
      v(this, "deleteMessage", e => h(e));
      v(this, "regenSwitch", e => u(e));
      v(this, "fixRegen", e => _(e));
      v(this, "feedback", e => f(e));
      v(this, "updateContent", e => l(e));
      v(this, "breakMessage", e => g(e));
    }
  }
  let S = async () => Promise.resolve(new y());
  let b = async () => S();
  let E = () => new y();
  require.d(exports, {
    ChatMessageService: function () {
      return E;
    },
    getChatMessageService: function () {
      return b;
    }
  });
}