// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'SkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 905739
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatMountTimeTracker = require("chat-mount-time-tracker") /*id: 617270*/;
  var skillChatInputHooks = require("skill-chat-input-hooks") /*id: 354217*/;
  var skillChatInputBar = require("skill-chat-input-bar") /*id: 543454*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var v = {
    "chat-input": "chat-input-kWIgzK",
    chatInput: "chat-input-kWIgzK",
    disabled: "disabled-rnWzM7",
    "right-tools-container": "right-tools-container-vFoD6y",
    rightToolsContainer: "right-tools-container-vFoD6y",
    "left-area": "left-area-ELhPUk",
    leftArea: "left-area-ELhPUk",
    input: "input-A_xeMF",
    menu: "menu-j3XcQ6",
    "grid-container": "grid-container-vnmw4K",
    gridContainer: "grid-container-vnmw4K",
    "grid-left-tools": "grid-left-tools-lJkK1e",
    gridLeftTools: "grid-left-tools-lJkK1e",
    "grid-input-area": "grid-input-area-OLFGBV",
    gridInputArea: "grid-input-area-OLFGBV",
    "grid-right-tools": "grid-right-tools-EZkK8B",
    gridRightTools: "grid-right-tools-EZkK8B",
    sm: "sm-nweEuQ",
    md: "md-mqB_Mi"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      disabled: o,
      readonly: y = false,
      allowEmptySubmit: _,
      onSubmit: b,
      onPaste: w,
      onKeyDown: S,
      clearInputOnSubmit: E = true,
      placeholder: x,
      sendBtnSmall: k,
      sendMessageHoverText: T,
      sendMessageButtonText: P,
      sendMessageButtonClassName: C,
      breakBtnHoverText: O,
      hasAccessoryArea: N = false,
      renderInputTop: I,
      renderRefContent: A,
      renderLeftTools: R,
      renderRightTools: j,
      renderSendBtn: M,
      unableToSend: L,
      resetAccessoryArea: D,
      onEmptyAt: Z,
      disabledWrapperClick: z,
      onFocus: U,
      rows: W = 1,
      responsiveSize: F,
      sendMessageStatus: B,
      onClickSendButton: V,
      onClickDisabledSendButton: H,
      onClickBreakButton: K,
      onSendBtnWrapperClick: G,
      onInput: $,
      onValueChange: X
    } = e;
    let Y = reactCoreLibraryReexport.useCallback(e => {
      if (b != null) {
        b(e);
      }
      if (userAgentDeviceDetector.isMobileOrIOS()) {
        let e = document?.activeElement;
        if (e && "blur" in e && isFunctionUtil_1.isFunction(e.blur)) {
          e.blur();
        }
      }
    }, [b]);
    let q = reactCoreLibraryReexport.useRef(null);
    let {
      width: J
    } = useElementSizeHook_2.useElementSize(q) || {};
    let Q = reactCoreLibraryReexport.useMemo(() => J && J < 480 ? "sm" : F, [J, F]);
    let {
      textAreaRef: ee,
      textAreaProps: et,
      submit: en,
      clear: ei
    } = skillChatInputHooks.useSkillChatInput({
      onSubmit: Y,
      allowEmpty: _,
      clearInputOnSubmit: E,
      attachmentCanNotSend: !!N && L,
      onEmptyAt: Z
    });
    let {
      value: er
    } = et;
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        if ((e = ee.current) !== null && e !== undefined) {
          e.focus();
        }
      },
      clear: () => {
        if (D != null) {
          D();
        }
        ei();
      },
      getText: () => {
        return ee.current?.value || "";
      },
      setText: e => {
        et.onChange(e);
        if (X != null) {
          X(e);
        }
      },
      getTextareaWidth: () => {
        return ee.current?.offsetWidth;
      },
      blur: () => {
        var e;
        if ((e = ee.current) !== null && e !== undefined) {
          e.blur();
        }
      }
    }), []);
    let eo = reactCoreLibraryReexport.useMemo(() => {
      var e;
      return !!o || (N ? L : !_ && ((e = et.value) === null || e === undefined ? undefined : e.trim()) === "");
    }, [o, B, N, L, _, et.value]);
    let ea = rtlLanguageDetectionHook.useTextDirection(er, true);
    let es = B === chatStatusActionTypes.chatStatusTypes.Receiving;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        onClick: () => {
          if (o) {
            if (z != null) {
              z();
            }
          } else {
            var e;
            if ((e = ee.current) !== null && e !== undefined) {
              e.focus();
            }
          }
        },
        children: [I == null ? undefined : I(), A == null ? undefined : A(), reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: q,
          className: a(v["chat-input"], v["grid-container"], o && v.disabled, Q && v[Q]),
          children: [R && reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(v.menu, v["grid-left-tools"]),
            children: R()
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(v["grid-input-area"]),
            children: reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
              dir: localeDirectionCheck.isRtlLanguage() ? ea : "ltr",
              readOnly: y,
              ref: ee,
              disabled: o,
              ...et,
              onChange: e => {
                if (X != null) {
                  X(e);
                }
                et.onChange(e);
              },
              onKeyDown: e => {
                if (S != null) {
                  S(e);
                }
                et.onKeyDown(e);
              },
              className: v.input,
              rows: W,
              autosize: true,
              placeholder: x,
              onPaste: w,
              autoComplete: "off",
              "data-testid": "chat_input_input",
              onFocus: U,
              onInput: $
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(v["grid-right-tools"], v["right-tools-container"]),
            children: (M == null ? undefined : M()) ?? reactJsxRuntimeCoreReexport.jsx(skillChatInputBar.SkillChatInputBar, {
              small: k,
              sendMessageHoverText: T,
              sendMessageButtonText: P,
              sendMessageClassName: C,
              breakBtnHoverText: O,
              breakBtnVisible: es,
              disableToSend: eo,
              onClickSendButton: () => {
                if (V != null) {
                  V();
                }
                en();
              },
              onClickBreakButton: K,
              onClickDisabledSendButton: H,
              onWrapperClick: () => G == null ? undefined : G({
                breakBtnVisible: es,
                disableToSend: eo
              }),
              beforeNodes: reactJsxRuntimeCoreReexport.jsx("div", {
                className: a(v["left-area"]),
                children: j && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
                  children: j()
                })
              })
            })
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(chatMountTimeTracker.ChatMountTracker, {
        name: "chat_input"
      })]
    });
  });
  require.d(exports, {
    SkillChatInput: function () {
      return y;
    }
  });
}