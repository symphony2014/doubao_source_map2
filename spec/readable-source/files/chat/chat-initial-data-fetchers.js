// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'fetchInitialData'
// - Renamed export 'yJ' to 'fetchConversationData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 909614
         */
module.exports = function (module, exports, require) {
  var chatRequestWrapper = require("chat-request-wrapper") /*id: 464659*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var getConversationInfoModule = require("get-conversation-info-module") /*id: 434163*/;
  var featureFlagsConfiguration = require("feature-flags-configuration") /*id: 220736*/;
  var chatJsConvConfig = require("chat-js-conv-config") /*id: 146880*/;
  var accountInfoFetcher = require("account-info-fetcher") /*id: 990858*/;
  var chatSingleChainPullService = require("chat-single-chain-pull-service") /*id: 24059*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var recentConvChainService = require("recent-conv-chain-service") /*id: 427511*/;
  let h = e => ({
    accountInfo: accountInfoFetcher.fetchAccountInfo({
      getCommonHeaders: chatJsConvConfig.getJsConvConfig
    }),
    userSetting: chatRequestWrapper.makeChatRequest({
      url: "/samantha/user/setting/get",
      method: "POST",
      data: {
        ab_param: {
          ab_request: featureFlagsConfiguration.featureFlags
        },
        select: {
          region: true
        }
      }
    }),
    skillList: chatRequestWrapper.makeChatRequest({
      url: "/samantha/skill/list",
      method: "POST"
    }),
    recentConversation: chatRequestWrapper.makeChatRequest({
      url: "/im/chain/recent_conv",
      method: "POST",
      data: recentConvChainService.createConvChainReq({
        conv_version: "",
        limit: Number(20),
        message_count_per_conv: 10,
        option: {
          need_pc_pin_chain: true,
          need_coco_conversation: true,
          pc_pin_query_type: chatConstantsEnum.pinQueryType.QueryPin,
          not_need_message: false
        }
      })
    }, {
      overrideConfig: {
        ignoreResponseInterceptors: true
      },
      overrideHeaders: {
        "Content-Type": "application/json; encoding=utf-8"
      }
    }).then(e => (e == null ? undefined : e.data) || {})
  });
  let m = e => ({
    conversation: function (e) {
      let {
        id: t
      } = e.params;
      let n = Number(new URL(e.request.url).searchParams.get("type"));
      if (n !== chatConversationTypes.ConversationTypes.Bot && n !== chatConversationTypes.ConversationTypes.ProfileBot) {
        return chatRequestWrapper.makeChatRequest({
          url: "/im/conversation/info",
          method: "POST",
          data: getConversationInfoModule.buildConversationInfoRequest({
            conversation_id: t
          })
        }, {
          overrideConfig: {
            ignoreResponseInterceptors: true
          },
          overrideHeaders: {
            "Content-Type": "application/json; encoding=utf-8"
          }
        }).then(e => (e == null ? undefined : e.data) || {});
      }
    }(e),
    messageList: function (e) {
      let {
        id: t
      } = e.params;
      let n = Number(new URL(e.request.url).searchParams.get("type"));
      if (n !== chatConversationTypes.ConversationTypes.Bot && n !== chatConversationTypes.ConversationTypes.ProfileBot) {
        return chatRequestWrapper.makeChatRequest({
          url: "/im/chain/single",
          method: "POST",
          data: chatSingleChainPullService.buildPullChainRequest({
            conversation_id: t,
            cursor: Number.MAX_SAFE_INTEGER,
            batch_size: 20
          })
        }, {
          overrideConfig: {
            ignoreResponseInterceptors: true
          },
          overrideHeaders: {
            "Content-Type": "application/json; encoding=utf-8"
          }
        }).then(e => (e == null ? undefined : e.data) || {});
      }
    }(e)
  });
  require.d(exports, {
    fetchInitialData: function () {
      return h;
    },
    fetchConversationData: function () {
      return m;
    }
  });
}