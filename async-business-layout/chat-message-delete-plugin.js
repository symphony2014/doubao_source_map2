// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'o' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'asyncBusinessLayout'
// - Resolved require(144317) to 'async-business-layout'
// - Renamed variable 'd' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'p' to 'messageBatchDeleteHandler'
// - Resolved require(458163) to 'message-batch-delete-handler'
// - Renamed variable 'm' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'g' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Renamed variable '_' to 'samanthaCheckboxComponents'
// - Resolved require(739837) to 'samantha-checkbox-components'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'zE' to 'pollingInterval' (module 375543)
// - Updated imported property 'x' to 'CheckboxWrapper' (module 739837)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'D' to 'batchMessageDelete' (module 458163)
// - Updated imported property 'w' to 'BusinessLayout' (module 144317)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 919590
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncBusinessLayout = require("async-business-layout") /*id: 144317*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var messageBatchDeleteHandler = require("message-batch-delete-handler") /*id: 458163*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var v = classnamesUtils;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var samanthaCheckboxComponents = require("samantha-checkbox-components") /*id: 739837*/;
  var b = {
    "select-all": "select-all-oLJbIW",
    overlimit: "overlimit-LkP5TY"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      isSelectAllChecked: t,
      isOverlimit: n,
      onSelectAll: r,
      onDeselectAll: o,
      onCancel: a,
      i18nConfig: s,
      children: l,
      selectAllAfter: c,
      className: d,
      selectAllClassName: f,
      showSelectAll: p = true
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let w = reactCoreLibraryReexport.useMemo(() => ({
      select_check_all: m("share_select_checkall"),
      select_exceed_limit: m("share_select_exceed_limit", {
        postProcess: "sprintf",
        sprintf: [chatMessagingConstants.pollingInterval]
      }),
      ...s
    }), [s]);
    let S = e => {
      if (e) {
        if (r != null) {
          r();
        }
        return;
      }
      if (o != null) {
        o();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("share_thread_multselect_show");
      return () => {
        if (a != null) {
          a();
        }
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: v("w-full flex items-center pl-24 pr-32 sm:pl-5 sm:pr-12 h-52 mt-8", d),
      children: [reactJsxRuntimeCoreReexport.jsxs("span", {
        className: v("flex", f),
        children: [p && reactJsxRuntimeCoreReexport.jsx(samanthaCheckboxComponents.CheckboxWrapper, {
          className: v("mr-10 items-center text-s-color-text-tertiary s-font-xs !gap-4", b["select-all"], {
            [b.overlimit]: n,
            "shrink-0": !n
          }),
          checked: t,
          onChange: e => S(e.target.checked),
          "data-testid": "thread_share_select_all",
          children: n ? w.select_exceed_limit : w.select_check_all
        }), c]
      }), l]
    });
  };
  let S = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatId: t,
      chatType: n
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig) || {};
    let {
      getPopupContainer: i = () => document.body
    } = chatContextUtil.useChatContext();
    let m = n === chatConversationTypes.ConversationTypes.Conversation ? t : undefined;
    let {
      exitSelectMode: v
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      selectAll: e.selectAll,
      deselectAll: e.deselectAll,
      getIsSelectAllChecked: e.getIsSelectAllChecked,
      exitSelectMode: e.exitSelectMode
    }), deepEqualityUtil.deepEqual);
    let {
      handleBatchDelete: g,
      messageIndexList: _
    } = messageBatchDeleteHandler.batchMessageDelete(m ?? "", {
      getPopupContainer: i,
      enterMethod: "message_delete",
      onDeleteTrigger: e => {
        let t = e[0];
        if (t) {
          teaAnalyticsEventTracker.trackEvent("message_thread_delete", {
            message_id: e.map(e => e.message_id).join(","),
            conversation_id: m,
            bot_id: e.filter(e => e.bot_id).map(e => e.bot_id).join(","),
            current_page: "thread_share",
            user_type: +!!messageContentTypeAndStatusChecker.Yns(t),
            enter_method: "message_delete",
            section_id: "footer"
          });
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(asyncBusinessLayout.BusinessLayout, {
      samanthaLayoutProps: {
        centerContentMaxWidthDelta: 32,
        containerClassName: "border-solid border-0 border-t-[0.5px] border-s-color-border-secondary"
      },
      children: reactJsxRuntimeCoreReexport.jsx(w, {
        className: "!h-auto py-8",
        showSelectAll: false,
        onCancel: v,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex min-w-0 flex-1 justify-end",
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "danger-primary",
            disabled: _.length === 0,
            onClick: g,
            className: "!max-w-260 !px-32",
            size: "medium",
            children: e("long_press_delete_message")
          })
        })
      })
    });
  };
  class x {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: S,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = S;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    DeletePlugin: function () {
      return x;
    }
  });
}