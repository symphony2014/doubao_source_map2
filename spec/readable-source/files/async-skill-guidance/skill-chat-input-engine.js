// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'useChatInputEngine'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-input-engine-infra-interactive.075fd8a3.js
         * chunkId: 49765
         * moduleId: 109888
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var asyncSkillChatInput = require("async-skill-chat-input") /*id: 128080*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var messageEditTrackingHook = require("message-edit-tracking-hook") /*id: 174008*/;
  var autoFocusOnKeypressAndVisibilityChange = require("auto-focus-on-keypress-and-visibility-change") /*id: 952645*/;
  var scrollCleanupHook = require("scroll-cleanup-hook") /*id: 791817*/;
  var autoRetryErrorBoundary = require("auto-retry-error-boundary") /*id: 424863*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var labeledWrapperSpan = require("labeled-wrapper-span") /*id: 629142*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var arrowLeftIconComponent = require("arrow-left-icon-component") /*id: 901793*/;
  var closeRtlIconComponent = require("close-rtl-icon-component") /*id: 513666*/;
  var E = {
    editor: "editor-wdKsIA",
    "exit-skill-button": "exit-skill-button-c1aTva",
    borderless: "borderless-vZOA64",
    "delete-icon": "delete-icon-aoD72Q"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = e => {
    let {
      className: t,
      showNameClassName: n,
      chatId: r,
      activeSkill: i,
      skillShowName: o,
      theme: a = "default",
      onClose: l
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let c = responsiveScreenHooks.useIsNarrowScreen();
    let h = a === "borderless";
    let p = () => {
      if (r) {
        chatStoreManager.getStore("chatInputStore").getState().closeSkillPanel(r);
        if (l != null) {
          l();
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(labeledWrapperSpan.LabeledWrapperSpan, {
      className: s(E["exit-skill-button"], h && E.borderless, t),
      "data-testid": "skill_input_exit_button",
      contentEditable: false,
      onClick: () => {
        p();
      },
      children: reactJsxRuntimeCoreReexport.jsxs(semiTooltipWrapper.SemiTooltip, {
        content: reactJsxRuntimeCoreReexport.jsxs("p", {
          className: "text-s-color-text-static-white-primary m-0 s-font-xxs",
          children: [u("chat_inputBox_tooltip_quitSkill"), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "text-s-color-text-static-white-tertiary ml-4",
            children: "ESC"
          })]
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s("flex items-center s-font-base-em text-s-color-brand-primary-default select-none", h ? "" : "pl-14", n),
          contentEditable: false,
          children: [!h && reactJsxRuntimeCoreReexport.jsx(arrowLeftIconComponent.ArrowLeftIcon, {
            className: "text-14 text-s-color-brand-primary-default absolute left-6"
          }), o || c && (i == null ? undefined : i.show_name_short) || (i == null ? undefined : i.show_name)]
        }), h && reactJsxRuntimeCoreReexport.jsx(closeRtlIconComponent.CloseRtlIcon, {
          className: E["delete-icon"],
          onClick: p
        })]
      })
    });
  };
  let O = debounceUtil_1_1.debounce(loggerServiceCore.defaultLogger.persist.log.bind(loggerServiceCore.defaultLogger.persist), 300);
  let R = e => {
    let {
      editorProps: t,
      editorInputClassName: n,
      useV3: i,
      chatId: a,
      activeSkill: w,
      showExitSkillButton: _ = true,
      exitSkillButtonTheme: C,
      skillShowName: P,
      exitSkillButtonClassName: S,
      exitSkillButtonShowNameClassName: x,
      onClickExitButton: R,
      forwardedRef: Z,
      onControllerChange: j
    } = e;
    let {
      cleanScrollToRow: D
    } = scrollCleanupHook.useCleanScroll({
      enabled: true
    });
    let N = i18nTranslationUtils.useTranslationWithFallback();
    let A = reactCoreLibraryReexport.useRef(null);
    let M = messageEditTrackingHook.useMessageEditTracker(a, w);
    let L = objectDefaultsUtil.defaults(t, {
      autoFocus: !userAgentDeviceDetector.isAppleDevice()
    });
    let {
      value: I,
      onChange: B,
      onPaste: F
    } = L;
    let K = !I || inputToolConverter.extractText(I.data) === "";
    let z = rtlLanguageDetectionHook.useTextDirection(I && inputToolConverter.extractText(I == null ? undefined : I.data) || "", true);
    let U = reactCoreLibraryReexport.useCallback(e => {
      if (typeof Z == "function") {
        Z(e);
      } else if (Z) {
        Z.current = e;
      }
      A.current = e;
      if (j != null) {
        j(e);
      }
    }, [Z, j]);
    autoFocusOnKeypressAndVisibilityChange.useAutoFocusOnKeyPress(A);
    return {
      renderEditor: useLatestCallbackHook_1.useLatestCallback(e => {
        let {
          className: t,
          onFocus: r,
          onChange: o
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(autoRetryErrorBoundary.AutoRetryBoundary, {
          errorBoundaryName: "guidance-input-flow-chat-editor",
          retryTimes: Infinity,
          retryInterval: 1000,
          text: N("loading_error_msg"),
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s(t, "flex items-start w-full"),
            children: [K && _ && !i ? reactJsxRuntimeCoreReexport.jsx(T, {
              className: S,
              showNameClassName: x,
              chatId: a,
              activeSkill: w,
              skillShowName: P,
              theme: C,
              onClose: R
            }) : null, reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInput.AsyncSkillChatInput, {
              ...L,
              onBlur: e => {
                var t;
                if ((t = L.onBlur) !== null && t !== undefined) {
                  t.call(L, e);
                }
                return M.onBlur();
              },
              ref: U,
              useV3: i,
              className: s("pt-4 -mt-4 box-content", E.editor, n),
              placeHolderClassName: "!top-4",
              onChange: e => {
                D();
                if (B != null) {
                  B(e);
                }
                if (o != null) {
                  o(inputToolConverter.extractText(e.data));
                }
                M.onUpdateValue(e, I);
                O({
                  eventName: "flow_chat_editor_value_change",
                  meta: {
                    blocks: e.data.map(e => e.type)
                  }
                });
              },
              onPaste: e => {
                loggerServiceCore.defaultLogger.persist.log({
                  eventName: "flow_chat_editor_paste"
                });
                if (F != null) {
                  F(e);
                }
              },
              "data-testid": "chat_input_input",
              dir: localeDirectionCheck.isRtlLanguage() ? z : "ltr",
              onClick: () => {
                var e;
                if ((e = A.current) !== null && e !== undefined) {
                  e.focus();
                }
              },
              onFocus: e => {
                var t;
                if (r != null) {
                  r();
                }
                M.onFocus();
                if (L != null && (t = L.onFocus) !== null && t !== undefined) {
                  t.call(L, e);
                }
              },
              prefix: i || K || !_ ? null : reactJsxRuntimeCoreReexport.jsx(T, {
                chatId: a,
                className: S,
                showNameClassName: x,
                activeSkill: w,
                skillShowName: P,
                theme: C,
                onClose: R
              })
            })]
          })
        });
      }),
      editorRef: A
    };
  };
  require.d(exports, {
    useChatInputEngine: function () {
      return R;
    }
  });
}