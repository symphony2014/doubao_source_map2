// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'ThreadShareButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 847218
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var svgArrowIconComponent = require("svg-arrow-icon-component") /*id: 336478*/;
  var threadShareToolbarLoader = require("thread-share-toolbar-loader") /*id: 177563*/;
  var threadShareInfoService = require("thread-share-info-service") /*id: 190012*/;
  var chatTeaParamsExtractor = require("chat-tea-params-extractor") /*id: 938296*/;
  var useContentTypeWhitelistHook = require("use-content-type-whitelist-hook") /*id: 205062*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = e => {
    let {
      disabled: t,
      className: n,
      alwaysVisible: o = false,
      tooltipProps: $,
      onClick: M,
      isExpand: P
    } = e;
    let L = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatId: D,
      chatType: O
    } = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig || {};
    let Z = O === chatConversationTypes.ConversationTypes.NewThread;
    let A = chatConversationSelectors.selectConversation(D || "");
    let W = chatConversationCheckers.isCocoPlatform(A == null ? undefined : A.conversation_type) || chatConversationCheckers.isCocoSubPlatform(A == null ? undefined : A.conversation_type);
    let B = chatConversationCheckers.isCocoPlatform(A == null ? undefined : A.conversation_type);
    let F = O === chatConversationTypes.ConversationTypes.Conversation ? D : undefined;
    let z = chatTeaParamsExtractor.getBasicTeaParams(F ?? "");
    useContentTypeWhitelistHook.useContentTypeWhitelist();
    let {
      enterSelectMode: H,
      selectAll: V,
      findMessageByIndex: U
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      enterSelectMode: e.enterSelectMode,
      selectAll: e.selectAll,
      findMessageByIndex: e.findMessageByIndex
    }), deepEqualityUtil.deepEqual);
    let X = chatFeedStoreFactory.useFeedStore(e => {
      return Number(e.lastMessageIndexMap[F ?? ""]?.message_index || e.conversationMap[F ?? ""]?.message_index);
    }, deepEqualityUtil.deepEqual);
    let K = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      openLoginModal: G
    } = chatLoginModalManager.loginModalManager();
    let J = conversationMessageUtils_2.useIsLastMessageIncomplete(F ?? "");
    let q = chatConversationCheckers.isRejectedShare(A);
    let Q = t || J || q;
    let {
      run: Y
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      if (Q) {
        return;
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "thread_share_entry_click",
        meta: {
          conversationId: F,
          from: "thread-share-icon-button"
        }
      });
      teaAnalyticsEventTracker.trackEvent("share_thread_click", {
        ...z,
        entrance_type: "main_page"
      });
      if (!K) {
        G({
          trackInfo: {
            source: trackingEventConstants.trackingEvents.THREAD_SHARE
          }
        });
        return;
      }
      let e = window.location.pathname;
      let {
        allowShare: t,
        data: n
      } = await threadShareInfoService.getThreadShareInfo(F ?? "", L);
      if (t && e === window.location.pathname) {
        H({
          scene: skillMessageActions.messageActions.Share,
          data: n,
          extraInfo: {
            entranceType: "main_page"
          }
        });
        V({
          conversationId: F ?? "",
          state: chatMessageStoreFactory.createMessageStore.getState(),
          lastMessageIndex: X
        });
      }
      if (M != null) {
        M();
      }
    }, {
      leading: true,
      trailing: false
    });
    let ee = reactCoreLibraryReexport.useRef(null);
    let et = Z || !W || B;
    reactCoreLibraryReexport.useEffect(() => {
      if (!et) {
        teaAnalyticsEventTracker.trackEvent("share_thread_show", {
          ...z,
          entrance_type: "main_page"
        });
      }
    }, [et]);
    if (et && !o) {
      return null;
    } else if (P) {
      return reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
        disabled: Q,
        onClick: Y,
        icon: reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {}),
        children: L("share_chat_tooltip")
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        position: "left",
        content: q ? L("share_compliance_failed") : L("share_chat_tooltip"),
        getPopupContainer: () => ee.current,
        ...$,
        children: reactJsxRuntimeCoreReexport.jsxs(buttonComponentExport.Button, {
          "data-testid": "thread_share_btn_right_side",
          color: "grey-outline",
          onClick: Y,
          size: "lg",
          variant: "icon",
          className: a("dbx-xs:text-dbx-text-primary max-dbx-xs:text-dbx-text-primary", {
            "!text-dbx-text-disable": Q
          }, n),
          disabled: Q,
          onMouseEnter: threadShareToolbarLoader.loadShareToolbar,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            ref: ee,
            className: a("*:!z-[1200] h-0 w-0")
          }), reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {})]
        })
      });
    }
  };
  require.d(exports, {
    ThreadShareButton: function () {
      return $;
    }
  });
}