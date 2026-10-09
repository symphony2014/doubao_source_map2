// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'a' to 'objectExcludeFilterUtil'
// - Resolved require(194068) to 'object-exclude-filter-util'
// - Renamed variable 'r' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'o' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 's' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'l' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'd' to 'chatMessageProcessor'
// - Resolved require(891807) to 'chat-message-processor'
// - Renamed variable 'u' to 'chatMessageStateUpdater'
// - Resolved require(754205) to 'chat-message-state-updater'
// - Renamed variable 'c' to 'initConversationMessageList'
// - Resolved require(767528) to 'init-conversation-message-list'
// - Renamed variable 'v' to 'deleteMessageMapHandler'
// - Resolved require(278067) to 'delete-message-map-handler'
// - Renamed variable '_' to 'chatSingleChainPullService'
// - Resolved require(24059) to 'chat-single-chain-pull-service'
// - Renamed variable 'f' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'm' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'g' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Renamed variable 'p' to 'updateConversationInfo'
// - Resolved require(914918) to 'update-conversation-info'
// - Renamed variable 'h' to 'setChatCreateStatus'
// - Resolved require(890724) to 'set-chat-create-status'
// - Renamed variable 'y' to 'conversationCleanupUtility'
// - Resolved require(130883) to 'conversation-cleanup-utility'
// - Renamed variable 'S' to 'removeConversationLink'
// - Resolved require(914448) to 'remove-conversation-link'
// - Renamed variable 'b' to 'conversationListLoader'
// - Resolved require(707686) to 'conversation-list-loader'
// - Renamed variable 'M' to 'conversationInfoLoader'
// - Resolved require(240412) to 'conversation-info-loader'
// - Renamed variable 'T' to 'chatConversationTransformer'
// - Resolved require(969267) to 'chat-conversation-transformer'
// - Renamed variable 'C' to 'conversationReadStateHandler'
// - Resolved require(102954) to 'conversation-read-state-handler'
// - Renamed variable 'w' to 'chatConversationConstants'
// - Resolved require(730433) to 'chat-conversation-constants'
// - Renamed variable 'N' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'k' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'L' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'I' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'A' to 'vipFeatureConfHook'
// - Resolved require(534257) to 'vip-feature-conf-hook'
// - Updated imported property 'x' to 'useVipFeatureConf' (module 534257)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'c' to 'setChatCreateStatus' (module 890724)
// - Updated imported property 'C' to 'initMessageList' (module 767528)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'rO' to 'AudioApiService' (module 147875)
// - Updated imported property 'r' to 'updateConvReadState' (module 102954)
// - Updated imported property 'di' to 'getChatType' (module 837195)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'O' to 'getConversationInfo' (module 240412)
// - Updated imported property 'o' to 'removeConvLink' (module 914448)
// - Updated imported property 'M' to 'deleteConversationData' (module 130883)
// - Updated imported property 'D' to 'deleteMessageMap' (module 278067)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'G$' to 'filterConversationData' (module 969267)
// - Updated imported property 'p' to 'updateConversation' (module 914918)
// - Updated imported property 'Z' to 'filterObjectExclude' (module 194068)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'A_' to 'normalizePullChainResponse' (module 24059)
// - Updated imported property 'Q' to 'updateChatMessages' (module 754205)
// - Updated imported property 'I' to 'processChatData' (module 891807)
// - Updated imported property 'Fz' to 'ChatSourceTypes' (module 746101)
// - Updated imported property 'EL' to 'waitForUserInfoLoaded' (module 480327)
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// - Updated imported property 'o' to 'loadConversationList' (module 707686)
// - Updated imported property 'L' to 'conversationScope' (module 730433)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: app-chat-l0.9f4aaf6a.js
         * chunkId: 62317
         * moduleId: 321240
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageProcessor = require("chat-message-processor") /*id: 891807*/;
  var chatMessageStateUpdater = require("chat-message-state-updater") /*id: 754205*/;
  var initConversationMessageList = require("init-conversation-message-list") /*id: 767528*/;
  var deleteMessageMapHandler = require("delete-message-map-handler") /*id: 278067*/;
  var chatSingleChainPullService = require("chat-single-chain-pull-service") /*id: 24059*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var updateConversationInfo = require("update-conversation-info") /*id: 914918*/;
  var setChatCreateStatus = require("set-chat-create-status") /*id: 890724*/;
  var conversationCleanupUtility = require("conversation-cleanup-utility") /*id: 130883*/;
  var removeConversationLink = require("remove-conversation-link") /*id: 914448*/;
  var conversationListLoader = require("conversation-list-loader") /*id: 707686*/;
  var conversationInfoLoader = require("conversation-info-loader") /*id: 240412*/;
  var chatConversationTransformer = require("chat-conversation-transformer") /*id: 969267*/;
  var conversationReadStateHandler = require("conversation-read-state-handler") /*id: 102954*/;
  var chatConversationConstants = require("chat-conversation-constants") /*id: 730433*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var vipFeatureConfHook = require("vip-feature-conf-hook") /*id: 534257*/;
  let x = (e, t) => {
    vipFeatureConfHook.useVipFeatureConf.setState(n => ({
      vipFeatureConf: {
        ...n.vipFeatureConf,
        [e]: t
      }
    }));
  };
  function O(e, t, n) {
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
  let E = "VIP_FEATURE";
  let R = () => {
    let {
      settingData: e
    } = chatStoreManager.getStore("launcherRawSettingStore").getState();
    return objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.enable_conv_page_perf") === "true";
  };
  let P = async (e, t) => {
    if (e) {
      if (e.startsWith("local_")) {
        loggerServiceCore.defaultLogger.persist.info("conversation is local conversation, skip fetch conversation info and message list");
        return;
      }
      setChatCreateStatus.setChatCreateStatus({
        conversationId: e,
        status: false
      });
      return await initConversationMessageList.initMessageList({
        conversationId: e,
        messageIndex: Number.MAX_SAFE_INTEGER,
        scene: t
      });
    }
  };
  let W = async e => {
    var t;
    var n;
    if (location.hostname !== "beta.doubao.com" || !e) {
      return;
    }
    let {
      conversation_id: a,
      extra: r
    } = e;
    if (!a || !r) {
      return;
    }
    let {
      vip_feature_key: o
    } = safeJsonUtils.safeParse(r, undefined) ?? {};
    if (!o || typeof o != "string") {
      return;
    }
    let s = await apiServicesCollection.AudioApiService.MGetFeatureConf({
      key: [o]
    }).catch(() => undefined);
    let l = s == null ? undefined : (n = s.data) === null || n === undefined ? undefined : (t = n.feature_conf_list) === null || t === undefined ? undefined : t.find(e => e.key === o);
    if (l) {
      loggerServiceCore.defaultLogger.persist.info({
        message: `${E}: init vip feature vip_feature_key: ${o} success`
      });
      x(a, l);
    } else {
      loggerServiceCore.defaultLogger.persist.warning({
        message: `${E}: init vip feature failed because featureConf of vip_feature_key: ${o} is undefined`
      });
    }
  };
  function Z(e) {
    let {
      conversation_id: t,
      read_message_index: n,
      message_index: i,
      read_badge_count: a = n,
      badge_count: r = i
    } = e;
    if (Number(a) < Number(r)) {
      conversationReadStateHandler.updateConvReadState(t || "", Number(r));
    }
  }
  class B {
    constructor() {
      O(this, "refreshConversationInfo", async e => {
        let {
          conversationId: t,
          scene: n
        } = e;
        let i = chatViewCoreSelectors.getChatType();
        if (i !== chatConversationTypes.ConversationTypes.Bot && i !== chatConversationTypes.ConversationTypes.ProfileBot) {
          try {
            if (R()) {
              let e = a();
              let i = P(t, n);
              let [r] = await Promise.all([e, i]);
              W(r);
              if (r == null ? undefined : r.conversation_id) {
                let {
                  conversation_id: e,
                  bot_id: t,
                  conversation_type: n
                } = r;
                chatMessageStoreUpdater.updateChatMessages({
                  conversationId: e,
                  immerUpdate: i => {
                    Object.values(i.draftMessageMap).forEach(i => {
                      if ((i == null ? undefined : i.conversation_id) === e) {
                        if (t !== undefined) {
                          i.bot_id = t;
                        }
                        if (n !== undefined) {
                          i.conversation_type = n;
                        }
                      }
                    });
                  }
                });
              }
              if (r) {
                Z(r);
              }
            } else {
              let e = await a();
              W(e);
              await P(t, n);
              if (e) {
                Z(e);
              }
            }
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.warning({
              message: `refreshConversationInfo failed conversationId: ${t}, error: ${e}`
            });
            if (n === "initChatView") {
              throw e;
            }
            loggerServiceCore.defaultLogger.persist.error({
              error: e
            });
          }
        }
        async function a() {
          let e = await conversationInfoLoader.getConversationInfo(t, n);
          if (e == null ? undefined : e.deleted) {
            loggerServiceCore.defaultLogger.persist.warning({
              message: `conversation ${t} is deleted and redirect to /chat/`
            });
            removeConversationLink.removeConvLink({
              conversationId: t
            });
            conversationCleanupUtility.deleteConversationData({
              conversationId: t
            });
            deleteMessageMapHandler.deleteMessageMap(t);
            chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
              if (e != null) {
                e.navigateToChatGuidancePage();
              }
            });
          }
          return e;
        }
      });
      O(this, "prefetchBuildConversationInfo", async e => {
        let {
          cell: t,
          logId: n
        } = e;
        if (!t) {
          return;
        }
        let {
          conversation_id: i,
          messages: o,
          regen_messages: l = {}
        } = t.conversation || {};
        if (!i) {
          return;
        }
        let c = chatConversationTransformer.filterConversationData(t.conversation);
        updateConversationInfo.updateConversation(objectExcludeFilterUtil.filterObjectExclude(c, isNullishCheck.isNil));
        if (!o) {
          return;
        }
        let v = chatSingleChainPullService.normalizePullChainResponse({
          has_more: true,
          messages: o,
          regen_messages: l
        });
        chatMessageStateUpdater.updateChatMessages({
          conversationId: i,
          fetchResult: await chatMessageProcessor.processChatData({
            data: v,
            conversationId: i,
            localInfo: {
              from: chatCoreConstants.ChatSourceTypes.Api,
              logId: n
            }
          })
        });
      });
      O(this, "refreshConversationList", async () => {
        await userInfoStatusSelectors.waitForUserInfoLoaded();
        let e = userInfoStatusSelectors.selectUserInfoSuccess();
        await conversationListLoader.loadConversationList({
          size: 20,
          index: 0,
          isRefresh: true,
          type: e ? [chatConversationConstants.conversationScope.Overall] : [chatConversationConstants.conversationScope.Guest]
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    checkAndMarkConversationReadAsLoaded: function () {
      return Z;
    },
    ChatConversationService: function () {
      return B;
    }
  });
}