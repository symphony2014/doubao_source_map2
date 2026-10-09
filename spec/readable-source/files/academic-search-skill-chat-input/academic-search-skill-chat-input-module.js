// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'skillChatInputHooks'
// - Resolved require(354217) to 'skill-chat-input-hooks'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'i' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'academicSearchSkillChatInput'
// - Resolved require(210919) to 'academic-search-skill-chat-input'
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'q' to 'getSkillChatInput' (module 210919)
// - Updated imported property 'z' to 'useSkillChatInput' (module 354217)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: academic-search-skill-chat-input.5b4c226a.js
         * chunkId: 38369
         * moduleId: 329828
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillChatInputHooks = require("skill-chat-input-hooks") /*id: 354217*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var academicSearchSkillChatInput = require("academic-search-skill-chat-input") /*id: 210919*/;
  let v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      skill: l,
      trackParams: v,
      reportParams: d,
      sendMessageHoverText: _,
      isToolButtonSmall: f,
      className: p,
      disabled: S,
      showHeader: k,
      onKeyDown: m,
      onBeforeSendMessage: E,
      onAfterSendMessage: h
    } = e;
    chatGuidanceSelectors.hasActiveSkill();
    i18nTranslationUtils.useTranslationWithFallback();
    let [y, A] = reactCoreLibraryReexport.useState("");
    if (!S) {
      y.trim();
    }
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        if ((e = g.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = g.current) !== null && e !== undefined) {
        e.focus();
      }
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...v
      });
    }, []);
    let b = academicSearchSkillChatInput.getSkillChatInput({
      skill: l,
      trackParams: v,
      reportParams: d,
      closeEvent: () => {
        teaAnalyticsEventTracker.trackEvent("", {
          ...v
        });
      },
      clearInput: () => {
        var e;
        A("");
        if ((e = g.current) !== null && e !== undefined) {
          e.blur();
        }
      },
      onAfterSendMessage: h,
      onBeforeSendMessage: E
    });
    let {
      textAreaRef: g,
      textAreaProps: D,
      submit: L
    } = skillChatInputHooks.useSkillChatInput({
      onSubmit: b,
      allowEmpty: false,
      clearInputOnSubmit: "dependOnSubmit",
      onChange: e => {
        A(e);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (document.querySelector(".academic-search-send-msg-button")) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
          var t;
          if (e != null && (t = e.getSkillReportEvent({
            skillType: chatAppEnums.SkillType.AcademicSearch,
            eventName: "skill_bar_open_input"
          })) !== null && t !== undefined) {
            t.success();
          }
        });
      }
    }, []);
    return null;
  });
  exports.default = v;
  require.r(exports);
  require.d(exports, {
    AcademicSearchChatInput: function () {
      return v;
    }
  });
}