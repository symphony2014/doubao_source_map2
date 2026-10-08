// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'fetchRecentConvChain'
// - Renamed export 'W' to 'createConvChainReq'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 427511
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageMetadataEnricher = require("chat-message-metadata-enricher") /*id: 126191*/;
  var instantMessagingGatewayClient = require("instant-messaging-gateway-client") /*id: 181716*/;
  let l = e => {
    let {
      conv_version: t,
      option: n,
      ...a
    } = e;
    let l = Number(t);
    return chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.PULL_RECENT_CONV_CHAIN,
      uplink_body: {
        pull_recent_conv_chain_uplink_body: {
          ...a,
          api_version: Number("1"),
          conv_version: l,
          direction: l === 0 ? chatConstantsEnum.msgDirection.FROM_LATEST : chatConstantsEnum.msgDirection.OLDER,
          option: {
            not_need_message: true,
            need_complete_conversation: true,
            need_coco_conversation: l === 0,
            need_coco_bot: l === 0,
            ...n
          }
        }
      }
    });
  };
  let s = async e => {
    let t = l(e);
    let {
      status_code: n,
      status_desc: i,
      downlink_body: r
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/chain/recent_conv",
      method: "POST",
      data: t
    });
    let {
      pull_recent_conv_chain_downlink_body: o
    } = r ?? {};
    let {
      cells: s,
      has_more: u,
      next_conv_version: c,
      extra: d
    } = o ?? {};
    return {
      code: n,
      msg: i,
      data: {
        has_more: u,
        next_cursor: c,
        cells: s,
        extra: d
      }
    };
  };
  require.d(exports, {
    fetchRecentConvChain: function () {
      return s;
    },
    createConvChainReq: function () {
      return l;
    }
  });
}