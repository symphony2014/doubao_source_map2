// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'o' to 'botSettingRouteToggle'
// - Resolved require(983173) to 'bot-setting-route-toggle'
// - Renamed variable 's' to 'conversationCreationHook'
// - Resolved require(134036) to 'conversation-creation-hook'
// - Renamed variable 'l' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'a' to 'botStoreManager'
// - Resolved require(359169) to 'bot-store-manager'
// - Renamed variable 'c' to 'chatLayoutConstants'
// - Resolved require(680824) to 'chat-layout-constants'
// - Renamed variable 'u' to 'chatMessagingPredicateUtils'
// - Resolved require(701382) to 'chat-messaging-predicate-utils'
// - Renamed variable 'd' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'p' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable '_' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'h' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'm' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'f' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'g' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'y' to 'useParamsResolver'
// - Resolved require(790576) to 'use-params-resolver'
// - Renamed variable 'b' to 'deprecatedImSdkStore'
// - Resolved require(744923) to 'deprecated-im-sdk-store'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Lp' to 'isBotConversation' (module 701382)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'yy' to 'ModerationStatus' (module 680824)
// - Updated imported property 'cj' to 'botStore' (module 359169)
// - Updated imported property 'GG' to 'guestBotStore' (module 359169)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'P' to 'useBotSettingToggle' (module 983173)
// - Updated imported property 'y' to 'useConversationCreation' (module 134036)
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'U' to 'useParamsResolver' (module 790576)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Ve' to 'routeChatProfile' (module 323118)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 526115
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var botSettingRouteToggle = require("bot-setting-route-toggle") /*id: 983173*/;
  var conversationCreationHook = require("conversation-creation-hook") /*id: 134036*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var chatLayoutConstants = require("chat-layout-constants") /*id: 680824*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let v = function () {
    let {
      chatType: t,
      chatId: n
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = chatMessagingPredicateUtils.isBotConversation(t);
    let o = chatFeedStoreFactory.useFeedStore(e => {
      return chatConversationSelectors_2.getConversation(e, n)?.bot_id;
    });
    let s = r ? n : o;
    let v = e => {
      if (e == null ? undefined : e.disabled_tag) {
        return {
          [chatLayoutConstants.ModerationStatus.Reviewing]: i("bot_ban_under_review"),
          [chatLayoutConstants.ModerationStatus.Ban]: i("bot_disabled_profile"),
          [chatLayoutConstants.ModerationStatus.Delete]: i("disable_input_del_bot"),
          [chatLayoutConstants.ModerationStatus.Private]: i("chat_page_notice")
        }[e.disabled_tag] || (e == null ? undefined : e.disabled_desc);
      }
    };
    let h = e => r ? [chatLayoutConstants.ModerationStatus.Ban, chatLayoutConstants.ModerationStatus.Reviewing].includes(e == null ? undefined : e.disabled_tag) : !!(e == null ? undefined : e.disabled);
    let m = e => {
      let t = s && e.botMap[s];
      if (t) {
        return {
          isDisabled: h(t),
          disabledText: v(t)
        };
      }
    };
    let f = botStoreManager.botStore(m, deepEqualityUtil_1.isDeepEqual);
    let g = botStoreManager.guestBotStore(m, deepEqualityUtil_1.isDeepEqual);
    return f ?? g ?? {
      isDisabled: false
    };
  };
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var deprecatedImSdkStore = require("deprecated-im-sdk-store") /*id: 744923*/;
  let S = () => {
    let t = useNavigateRuntimeResolver.useNavigateResolver();
    let {
      currentChatViewConfig: n
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      wrapperToggle: l
    } = botSettingRouteToggle.useBotSettingToggle((n == null ? undefined : n.chatId) ?? "");
    let {
      initCreateConversation: a
    } = conversationCreationHook.useConversationCreation();
    let c = async e => {
      let {
        botId: t,
        localConversationId: n,
        token: i,
        createFrom: r
      } = e;
      let {
        newLocalConversationId: o,
        createConversationForBot: s
      } = a({
        botId: t,
        token: i,
        localConversationId: n,
        createFrom: r,
        reportProps: {
          eventName: "create_conversation",
          meta: {
            from: "url_new"
          }
        }
      });
      return {
        conversation: await s(),
        newLocalConversationId: o
      };
    };
    let u = v(n);
    let d = useLocationWrapper.useLocationWrapper();
    let {
      id: p
    } = useParamsResolver.useParamsResolver();
    reactCoreLibraryReexport.useEffect(() => {
      deprecatedImSdkStore.useDeprecatedIMSDK.setState({
        ctx: {
          toChatPage: () => chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToChatGuidancePage()),
          toUserProfile: e => {
            let {
              userId: n,
              enterFrom: i
            } = e;
            t(`${chatRouteConstants.routeChatProfile}/${n}`, {
              state: {
                enter_from: i
              }
            });
          },
          onOpenCurrentBotSideBar: e => {
            let {
              enterFrom: t
            } = e;
            l({
              enter_from: t
            });
          },
          onCreateConversationByBot: c,
          conversationDisabledParams: u,
          locationState: d.state,
          locationKey: d.key,
          idInParams: p
        }
      });
    }, []);
  };
  require.r(exports);
  require.d(exports, {
    useDeprecatedChatContextInit: function () {
      return S;
    }
  });
}