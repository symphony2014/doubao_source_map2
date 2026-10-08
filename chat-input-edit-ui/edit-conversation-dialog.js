// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'i' to 'conversationInfoLoader'
// - Resolved require(240412) to 'conversation-info-loader'
// - Renamed variable 'o' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'l' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'contentUnavailableToastHandler'
// - Resolved require(384013) to 'content-unavailable-toast-handler'
// - Renamed variable 'p' to 'apiErrorChecker'
// - Resolved require(429379) to 'api-error-checker'
// - Renamed variable 'h' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Renamed variable 'f' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'g' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'm' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable '_' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'v' to 'rtlAwareInputWrapper'
// - Resolved require(91343) to 'rtl-aware-input-wrapper'
// - Renamed variable 'b' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'EM' to 'AliceChatService' (module 756668)
// - Updated imported property 'O' to 'getConversationInfo' (module 240412)
// - Updated imported property 'k' to 'isApiError' (module 429379)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'W' to 'handleContentError' (module 384013)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'KX' to 'isMobileOrIOS' (module 161498)
// - Updated imported property 'e' to 'RTLInputComponent' (module 91343)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 73712.f5150f3a.js
         * chunkId: 73712
         * moduleId: 232056
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var conversationInfoLoader = require("conversation-info-loader") /*id: 240412*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var contentUnavailableToastHandler = require("content-unavailable-toast-handler") /*id: 384013*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlAwareInputWrapper = require("rtl-aware-input-wrapper") /*id: 91343*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = e => {
    let {
      conversationId: t,
      onHide: n,
      exts: r
    } = e;
    let [s, f] = reactCoreLibraryReexport.useState();
    let v = chatConversationSelectors.selectConversation(t || "");
    let C = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      f(v == null ? undefined : v.name);
    }, [v == null ? undefined : v.name]);
    let x = async () => {
      if (!t || !s) {
        return;
      }
      teaAnalyticsEventTracker.trackEvent("edit_chat_name", {
        bot_id: v == null ? undefined : v.bot_id,
        click_from: r.click_from,
        conversation_id: v == null ? undefined : v.conversation_id
      });
      let e = eventReportingService.createEventReporter({
        eventName: "update_conversation",
        meta: {
          from: "sidebar"
        }
      });
      try {
        await (await aliceChatService.AliceChatService()).updateConversationInfo({
          conversation_id: t,
          name: s
        });
        conversationInfoLoader.getConversationInfo(t, "editChatName");
        e.addDurationPoint("update_conversation_finished");
        e.success();
        n();
      } catch (t) {
        if (apiErrorChecker.isApiError(t) && Number(t == null ? undefined : t.errorOption?.code) === chatErrorCodes.chatErrorCodes.CONVERSATION_UNDER_REVIEW) {
          samanthaToastFactory.toastInstance.warning({
            content: C("no_modify_notification"),
            showClose: false,
            theme: "light"
          });
          return;
        }
        e.error({
          error: t,
          reason: "update_conversation_failed"
        });
        if (apiErrorChecker.isApiError(t) && contentUnavailableToastHandler.handleContentError(t, C("illegal_content"))) {
          return;
        }
        samanthaToastFactory.toastInstance.error({
          content: C("edit_chat_name_failed"),
          showClose: false
        });
      }
    };
    let E = () => {
      teaAnalyticsEventTracker.trackEvent("cancel_edit_chat_name", {
        bot_id: v == null ? undefined : v.bot_id,
        click_from: r.click_from,
        conversation_id: v == null ? undefined : v.conversation_id
      });
      n();
    };
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      "data-testid": "edit_conversation_dialog",
      centered: true,
      className: "conversation-modal-SzKfKT",
      visible: r.visible,
      title: C("chat_list_long_press_edit_chat_name"),
      onCancel: E,
      zIndex: 1099,
      footer: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex justify-end",
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "edit_conversation_dialog_cancel_button",
          type: "tertiary",
          className: "cancel-button-dYUjLg",
          onClick: E,
          children: C("edit_chat_name_cancel")
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "edit_conversation_dialog_confirm_button",
          disabled: !(s == null ? undefined : s.trim().length),
          onClick: x,
          children: C("edit_chat_name_done")
        })]
      }),
      children: reactJsxRuntimeCoreReexport.jsx(w, {
        onEnterPress: x,
        value: s,
        onChange: e => f(e)
      })
    });
  };
  let w = e => {
    let {
      value: t,
      onChange: n,
      onEnterPress: r
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    let o = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      if (!userAgentDeviceDetector.isMobileOrIOS()) {
        var e;
        if ((e = i.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(rtlAwareInputWrapper.RTLInputComponent, {
      "data-testid": "edit_conversation_dialog_name_input",
      className: s("editName-EIycBE", {
        "mobileOrIPad-CU_0Fp": userAgentDeviceDetector.isMobileOrIOS()
      }),
      ref: i,
      autoFocus: true,
      value: t,
      onEnterPress: r,
      onChange: n,
      maxLength: 20,
      placeholder: o("edit_bot_name_placeholder")
    });
  };
  require.r(exports);
  require.d(exports, {
    EditConversationDialog: function () {
      return C;
    }
  });
}