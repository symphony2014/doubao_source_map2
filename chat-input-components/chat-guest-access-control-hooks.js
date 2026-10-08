// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MR' to 'useGuestMessageSendControl'
// - Renamed export 'oQ' to 'createGuestLoginHandler'
// - Renamed export 'ri' to 'createGuestDisabledHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 874237
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatAbConfigSelectors = require("chat-ab-config-selectors") /*id: 561916*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let h = e => {
    let {
      source: t,
      eventName: n,
      meta: i,
      chatType: a
    } = e;
    let o = chatViewCoreSelectors.useChatType();
    let d = a ?? o;
    let u = chatToastFactoryHook.useToastFactory();
    return {
      chatGuestLogin: function ({
        toastContent: e,
        type: a,
        source: o
      } = {}) {
        if (e) {
          u.error(e);
        }
        if (!userInfoStatusSelectors.selectUserInfoSuccess()) {
          if (n) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: n,
              meta: {
                ...i,
                type: a
              }
            });
          }
          chatEventEmitter.chatEmitter.emit("chat.guest.login", {
            source: o || t,
            bot: d === chatConversationTypes.ConversationTypes.Bot
          });
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage(o || t));
        }
      }
    };
  };
  let g = e => {
    let {
      checkNewGuidanceAb: t,
      ...n
    } = e;
    let {
      chatGuestLogin: i
    } = h(n);
    return {
      onClickGuestDisabled: async function ({
        source: e,
        checkNewGuidanceAb: a = t
      } = {}) {
        return !!a || (await userInfoStatusSelectors.waitForUserInfoLoaded(), !!userInfoStatusSelectors.selectUserInfoSuccess() || (i({
          source: e || n.source
        }), false));
      }
    };
  };
  let x = function ({
    chatId: e,
    activeSkillType: t,
    checkNewGuidanceAb: n,
    ...l
  } = {}) {
    let {
      chatGuestLogin: c
    } = h(l);
    let _ = chatViewCoreSelectors.useChatViewConfig();
    let m = e || (_ == null ? undefined : _.chatId);
    let g = l.chatType || (_ == null ? undefined : _.chatType);
    let [x, v, y, w] = chatFeedStoreFactory.useFeedStore(e => [e.chatNotReachLimitMap, e.guestReachCreateThreadLimit, e.guestReachSendMessageLimit, e.guestSendMessageLimit], deepEqualityUtil_1.isDeepEqual);
    let {
      threadLinks: b
    } = chatConversationSelectors.getThreadLinks();
    let {
      isLandingToMainCoco: S
    } = chatAbConfigSelectors.useChatAbSelectors();
    return {
      onBeforeSendMessage: async function ({
        checkNewGuidanceAb: e = n
      } = {}) {
        await userInfoStatusSelectors.waitForUserInfoLoaded();
        if (!userInfoStatusSelectors.selectUserInfoSuccess()) {
          if ([chatConversationTypes.ConversationTypes.NewThread, chatConversationTypes.ConversationTypes.ThreadLocalConversation, chatConversationTypes.ConversationTypes.SharedThreadContinueChat].includes(g)) {
            if (S) {
              c({
                type: "create_thread_limit"
              });
              return false;
            }
            if (v || y || !chatFeedStoreFactory.useFeedStore.getState().guestCanChat) {
              c({
                toastContent: y && b.length === 0 ? undefined : i18nTranslationUtils.i18nextTranslate("touristMode_chat_count_limitation_toast"),
                type: "create_thread_limit"
              });
              return false;
            }
          }
          if (m) {
            let e = x[m];
            if (!isNullishCheck.isNil(e) && !e || isNullishCheck.isNil(e) && y) {
              c({
                toastContent: w > 0 ? i18nTranslationUtils.i18nextTranslate("touristMode_message_count_limitation_withParam_toast").replace("{s_messageCount}", w.toString()) : undefined,
                type: "send_message_limit"
              });
              return false;
            }
          }
        }
        return true;
      }
    };
  };
  require.d(exports, {
    useGuestMessageSendControl: function () {
      return x;
    },
    createGuestLoginHandler: function () {
      return h;
    },
    createGuestDisabledHandler: function () {
      return g;
    }
  });
}