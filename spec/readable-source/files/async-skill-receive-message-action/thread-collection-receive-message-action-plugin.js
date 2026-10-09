// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'skillMessageActions'
// - Resolved require(331991) to 'skill-message-actions'
// - Renamed variable 'o' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'conversationMessageUtils_2'
// - Resolved require(149246) to 'conversation-message-utils_2'
// - Renamed variable 's' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'useDebouncedCallbackHook_1'
// - Resolved require(366474) to 'use-debounced-callback-hook_1'
// - Renamed variable 'v' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'p' to 'businessFeedIcon'
// - Resolved require(906098) to 'business-feed-icon'
// - Renamed variable 'f' to 'chatTeaParamsExtractor'
// - Resolved require(938296) to 'chat-tea-params-extractor'
// - Renamed variable 'm' to 'skillCollectionConfig'
// - Resolved require(583847) to 'skill-collection-config'
// - Renamed variable 'g' to 'chatThreadReceiveActionSymbol'
// - Resolved require(247534) to 'chat-thread-receive-action-symbol'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'gr' to 'useIsLastMessageIncompleteFn' (module 149246)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'F' to 'getCollectionConfig' (module 583847)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'w9' to 'getTeaParamsWithoutMessages' (module 938296)
// - Updated imported property 'Z' to 'useDebouncedCallback' (module 366474)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'e' to 'messageActions' (module 331991)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'Q' to 'BusinessFeedIcon' (module 906098)
// - Updated imported property 'D' to 'threadReceiveSymbol' (module 247534)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 85795
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var businessFeedIcon = require("business-feed-icon") /*id: 906098*/;
  var chatTeaParamsExtractor = require("chat-tea-params-extractor") /*id: 938296*/;
  var skillCollectionConfig = require("skill-collection-config") /*id: 583847*/;
  var chatThreadReceiveActionSymbol = require("chat-thread-receive-action-symbol") /*id: 247534*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function _(e, t, n) {
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
  let b = e => {
    let t = e.conversation_id || "";
    let {
      isLastMessageFinished: n
    } = chatMessageStoreFactory.createMessageStore(e => ({
      isLastMessageFinished: !conversationMessageUtils_2.useIsLastMessageIncompleteFn(e, t)
    }));
    return n;
  };
  let y = e => {
    let {
      message: n
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let {
      collectionEnable: g
    } = skillCollectionConfig.getCollectionConfig();
    let _ = Number(n.index);
    let {
      enterSelectMode: y,
      toggleMessage: w,
      findMessageByIndex: k
    } = chatMessageShareSelectStore.chatMessageShareSelectStore.getState();
    let x = chatTeaParamsExtractor.getTeaParamsWithoutMessages(n.conversation_id ?? "");
    let {
      run: E
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "thread_collection_entry_click",
        meta: {
          conversationId: n.conversation_id || "",
          from: "answer-action-item"
        }
      });
      teaAnalyticsEventTracker.trackEvent("collect_thread_click", {
        ...x,
        index: n.index,
        content_id: n.message_id,
        skill_id: n == null ? undefined : n.skill?.skill_id_no_default,
        entrance_type: "chat_thread"
      });
      y({
        scene: skillMessageActions.messageActions.Collection,
        extraInfo: {
          entranceType: "chat_thread"
        }
      });
      w({
        conversationId: n.conversation_id || "",
        messageIndex: _,
        state: chatMessageStoreFactory.createMessageStore.getState()
      });
    }, {
      leading: true,
      trailing: false
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        teaAnalyticsEventTracker.trackEvent("collect_thread_show", {
          ...x,
          entrance_type: "chat_thread"
        });
      }
    }, []);
    let S = b(n);
    if (g && S) {
      return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
        "data-testid": "message_action_copy",
        prefix: reactJsxRuntimeCoreReexport.jsx(businessFeedIcon.BusinessFeedIcon, {}),
        onClick: E,
        children: l("bookmarks_chat_hover")
      });
    } else {
      return null;
    }
  };
  class w {
    constructor() {
      _(this, "pluginIdentifier", chatThreadReceiveActionSymbol.threadReceiveSymbol);
      _(this, "DropdownItemContentGroups", [y]);
    }
  }
  require.r(exports);
  require.d(exports, {
    ThreadCollectionReceiveMessageActionButtonPlugin: function () {
      return w;
    }
  });
}