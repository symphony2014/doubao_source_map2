// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'getConversationInfo'
// - Renamed export 'j' to 'buildConversationInfoRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 434163
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageMetadataEnricher = require("chat-message-metadata-enricher") /*id: 126191*/;
  var instantMessagingGatewayClient = require("instant-messaging-gateway-client") /*id: 181716*/;
  var chatConversationTransformer = require("chat-conversation-transformer") /*id: 969267*/;
  let s = e => {
    return chatMessageMetadataEnricher.enrichMessage({
      cmd: chatCommandCodes.ChatCommandCodes.GET_CONVERSATION_INFO,
      uplink_body: {
        get_conv_info_uplink_body: {
          conversation_id: e.conversation_id ?? "",
          ext: e.ext ?? {},
          bot_id: e.bot_id ?? "",
          conversation_type: chatConstantsEnum.convType.ONE_TO_BOT_CHAT,
          option: {
            need_bot_info: true
          }
        }
      }
    });
  };
  let u = async e => {
    let t = s(e);
    let {
      status_code: n,
      status_desc: i,
      downlink_body: r
    } = await instantMessagingGatewayClient.imGatewayClient({
      url: "/im/conversation/info",
      method: "POST",
      data: t
    });
    let {
      get_conv_info_downlink_body: o
    } = r ?? {};
    let {
      conversation_info: u,
      bot_info: c
    } = o ?? {};
    return {
      code: n,
      msg: i,
      data: {
        conversation: chatConversationTransformer.transformConversationBase(u, c),
        bot_info: chatConversationTransformer.botCategoryToParticipant(c)
      }
    };
  };
  require.d(exports, {
    getConversationInfo: function () {
      return u;
    },
    buildConversationInfoRequest: function () {
      return s;
    }
  });
}