// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A_' to 'normalizePullChainResponse'
// - Renamed export 'W8' to 'pullSingleChain'
// - Renamed export 'yq' to 'buildPullChainRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 24059
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageMetadataEnricher = require("chat-message-metadata-enricher") /*id: 126191*/;
  var instantMessagingGatewayClient = require("instant-messaging-gateway-client") /*id: 181716*/;
  var chatMessageNormalizer = require("chat-message-normalizer") /*id: 171293*/;
  let s = e => {
    let {
      conversation_id: t = "",
      cursor: n,
      batch_size: a,
      bot_id: l,
      message_index_list: s,
      is_reverse: u,
      v2_api_ext: c = {}
    } = e;
    return chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.PULL_SINGLE_CHAIN,
      uplink_body: {
        pull_singe_chain_uplink_body: {
          conversation_id: t,
          anchor_index: Number(n ?? 0),
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          direction: u !== false ? chatConstantsEnum.msgDirection.OLDER : chatConstantsEnum.msgDirection.NEWER,
          limit: Number(a ?? 50),
          ext: c,
          filter: {
            index_list: (s ?? []).map(e => Number(e)),
            bot_id: l
          }
        }
      }
    });
  };
  let u = (e, t) => {
    if (e == null ? undefined : e.length) {
      let n = e.filter(e => e.status === chatConstantsEnum.messageStatus.MessageStatus_REGEN_ROOT)[0];
      if (n) {
        return Object.values(t ?? {}).filter(e => e.regen_root_id === n.message_id).map(e => {
          let t = n.regen_msg_list.some(t => t.is_visible && t.msg_id_list.includes(e.message_id));
          return {
            ...e,
            status: t ? chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE : chatConstantsEnum.messageStatus.MessageStatus_INVISIBLE,
            ext: e.ext ? {
              ...e.ext,
              regen_active: t ? "1" : "0"
            } : {}
          };
        });
      }
    }
    return [];
  };
  let c = async e => {
    let t = s(e);
    let {
      status_code: n,
      status_desc: i,
      downlink_body: r
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/chain/single",
      method: "POST",
      data: t
    });
    let {
      pull_singe_chain_downlink_body: o
    } = r ?? {};
    return {
      code: n,
      msg: i,
      data: d(o)
    };
  };
  function d(e) {
    let {
      messages: t = [],
      has_more: n,
      regen_messages: i = {}
    } = e ?? {};
    let o = u(t, i);
    for (let e = 0; e < t.length; e++) {
      let n = t[e];
      if (n.status === chatConstantsEnum.messageStatus.MessageStatus_REGEN_ROOT) {
        t[e] = Object.values(i ?? {}).find(e => e.regen_root_id === n.message_id && n.regen_msg_list.some(t => t.is_visible && t.msg_id_list.includes(e.message_id))) ?? n;
        t[e].status = chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE;
      }
    }
    let s = t.concat(o.filter(e => e.status === chatConstantsEnum.messageStatus.MessageStatus_INVISIBLE));
    let c = o.map(e => ({
      ...e,
      status: chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE
    }));
    return {
      has_more: n,
      message_list: s.map(chatMessageNormalizer.normalizeChatMessage),
      regen_list: c.map(chatMessageNormalizer.normalizeChatMessage)
    };
  }
  require.d(exports, {
    normalizePullChainResponse: function () {
      return d;
    },
    pullSingleChain: function () {
      return c;
    },
    buildPullChainRequest: function () {
      return s;
    }
  });
}