// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'codingSkillChatInput'
// - Resolved require(989348) to 'coding-skill-chat-input'
// - Renamed variable 'l' to 'skillChatInputWrapper'
// - Resolved require(137475) to 'skill-chat-input-wrapper'
// - Renamed variable 'o' to 'asrToolButtonSymbol'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Renamed variable 'c' to 'skillToolButtonRenderer'
// - Resolved require(812051) to 'skill-tool-button-renderer'
// - Renamed variable 'd' to 'chatSkillExitEventTracker'
// - Resolved require(466492) to 'chat-skill-exit-event-tracker'
// - Renamed variable 'u' to 'skillBarItemIcon'
// - Resolved require(276743) to 'skill-bar-item-icon'
// - Renamed variable 'p' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'h' to 'chatInputExpandBtn'
// - Resolved require(573547) to 'chat-input-expand-btn'
// - Renamed variable 'f' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'm' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'g' to 'asyncSkillGuidanceInput'
// - Resolved require(316165) to 'async-skill-guidance-input'
// - Renamed variable '_' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'y' to 'semiUploadComponent'
// - Resolved require(159273) to 'semi-upload-component'
// - Renamed variable 'b' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'E' to 'rtlChartIconComponent'
// - Resolved require(425108) to 'rtl-chart-icon-component'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'C' to 'skillGuidanceClasses'
// - Resolved require(523377) to 'skill-guidance-classes'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'UploadComponent' (module 159273)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'RtlChartIcon' (module 425108)
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'qd' to 'useSkillTextSubmit' (module 316165)
// - Updated imported property 'X5' to 'useSkillFileUpload' (module 316165)
// - Updated imported property 'bP' to 'useSkillInputProps' (module 316165)
// - Updated imported property 'P' to 'EventInputTypes' (module 466492)
// - Updated imported property 'Z' to 'classNames' (module 523377)
// - Updated imported property 'S' to 'SkillChatInput' (module 989348)
// - Updated imported property 'y' to 'SkillBarItemIcon' (module 276743)
// - Updated imported property 'P' to 'ExpandStatus' (module 573547)
// - Updated imported property 'b' to 'ChatInputWrapper' (module 137475)
// - Updated imported property 'mD' to 'ToolButtonList' (module 812051)
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: exercise-skill-chat-input.85b36601.js
         * chunkId: 49651
         * moduleId: 191857
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var codingSkillChatInput = require("coding-skill-chat-input") /*id: 989348*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var skillBarItemIcon = require("skill-bar-item-icon") /*id: 276743*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatInputExpandBtn = require("chat-input-expand-btn") /*id: 573547*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var asyncSkillGuidanceInput = require("async-skill-guidance-input") /*id: 316165*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiUploadComponent = require("semi-upload-component") /*id: 159273*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlChartIconComponent = require("rtl-chart-icon-component") /*id: 425108*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      skillId: t,
      small: i,
      onSubmitFiles: r,
      onClick: n,
      disabled: a
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(semiUploadComponent.UploadComponent, {
      action: "",
      accept: "image/*",
      onFileChange: r,
      showUploadList: false,
      uploadTrigger: "custom",
      disabled: a,
      children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        "data-testid": "upload_file_button",
        type: "tertiary",
        className: "button-KDjZYB",
        size: i ? "small" : "medium",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlChartIconComponent.RtlChartIcon, {
          className: "text-16"
        }),
        onClick: () => {
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            button_name: "upload_file",
            skill_id: t
          });
          if (n != null) {
            n();
          }
        },
        children: s("solve_upload_btn")
      })
    });
  };
  var skillGuidanceClasses = require("skill-guidance-classes") /*id: 523377*/;
  let w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      disabled: n,
      skill: _,
      trackParams: v,
      reportParams: y,
      isToolButtonSmall: b,
      showHeader: E,
      onKeyDown: w,
      onBeforeSendMessage: k,
      onAfterSendMessage: L,
      renderBeforeUploadNode: I
    } = e;
    let T = chatGuidanceSelectors.hasActiveSkill();
    let {
      skill_type: F
    } = _ || {};
    let O = F == null ? undefined : F.toString();
    let {
      submit: P,
      closeEvent: A
    } = asyncSkillGuidanceInput.useSkillTextSubmit({
      skill: _,
      trackParams: v,
      reportParams: y,
      onAfterSendMessage: L,
      onBeforeSendMessage: k
    });
    let {
      submitFiles: R
    } = asyncSkillGuidanceInput.useSkillFileUpload({
      skill: _,
      reportParams: y,
      onBeforeSendMessage: k,
      onAfterSendMessage: L
    });
    let {
      editorRef: N,
      editorRefCallback: j,
      sendBtnProps: D,
      toolButtonProps: $,
      ...U
    } = asyncSkillGuidanceInput.useSkillInputProps({
      disabled: n,
      skill: _,
      submit: P,
      submitFiles: R,
      closeEvent: () => A(chatSkillExitEventTracker.EventInputTypes.Keyboard),
      trackParams: v,
      isToolButtonSmall: b,
      onKeyDown: w
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        if ((e = N.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    }), []);
    if (_) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "skill-modal-exercise-skill",
        className: a(skillGuidanceClasses.classNames["exercise-skill-container"], "test"),
        children: reactJsxRuntimeCoreReexport.jsx(codingSkillChatInput.SkillChatInput, {
          className: i,
          skillHeaderVisible: E ?? !T,
          skillHeaderProps: {
            skill: _,
            icon: reactJsxRuntimeCoreReexport.jsx(skillBarItemIcon.SkillBarItemIcon, {
              skill_type: chatAppEnums.SkillType.ExerciseAssistant
            }),
            closeEvent: A,
            background: "gray",
            expandBtnStatus: chatInputExpandBtn.ExpandStatus.Invisible
          },
          popoverVisible: false,
          editorRef: j,
          ...U,
          enableDragUpload: true,
          bottom: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: skillGuidanceClasses.classNames["bottom-container"],
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: skillGuidanceClasses.classNames["left-tools"],
              children: [I == null ? undefined : I(_), reactJsxRuntimeCoreReexport.jsx(x, {
                skillId: O,
                onSubmitFiles: R
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: skillGuidanceClasses.classNames["right-tools"],
              children: reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
                ...D,
                beforeNodes: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.ToolButtonList, {
                  list: [asrToolButtonSymbol.asrToolButtonSymbol],
                  ...$
                })
              })
            })]
          })
        })
      });
    } else {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[ExerciseSkillInput]: skill_not_found",
        error: Error("[ExerciseSkillInput]: skill_not_found")
      });
      return null;
    }
  });
  var k = w;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return k;
    },
    ExerciseChatInput: function () {
      return w;
    }
  });
}