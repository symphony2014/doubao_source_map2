// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'messageEditTransition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36592.b0806220.js
         * chunkId: 36592
         * moduleId: 766325
         */
module.exports = function (module, exports, require) {
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M4.96 15.339a.65.65 0 0 1-.188-.326.8.8 0 0 1 0-.378.7.7 0 0 1 .189-.319l3.997-4.01-3.997-4.004a.64.64 0 0 1-.183-.319.8.8 0 0 1 0-.378.7.7 0 0 1 .183-.325.7.7 0 0 1 .332-.189.8.8 0 0 1 .377 0q.19.045.326.182L10 9.277l3.997-4.004a.6.6 0 0 1 .326-.182q.189-.045.37 0 .19.045.34.189.136.137.181.325a.7.7 0 0 1 0 .378.7.7 0 0 1-.182.326l-3.997 3.997 3.997 4.004a.7.7 0 0 1 .182.332q.045.182 0 .371a.7.7 0 0 1-.182.325.7.7 0 0 1-.332.19.8.8 0 0 1-.377 0 .7.7 0 0 1-.326-.183L10 11.341l-4.004 4.004a.7.7 0 0 1-.326.182.8.8 0 0 1-.377 0 .7.7 0 0 1-.332-.188"
    })
  }), {}));
  var skillPinIconComponent = require("skill-pin-icon-component") /*id: 730868*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let g = e => {
    let {
      onSubmit: t,
      defaultValue: n = "",
      allowEmpty: r = false,
      clearInputOnSubmit: i = true,
      attachmentCanNotSend: l = false,
      onChange: a = emptyExportFunction.emptyFunction,
      onEmptyAt: s
    } = e;
    let c = reactCoreLibraryReexport.useRef(null);
    let [d, f] = reactCoreLibraryReexport.useState(n);
    let [p, m] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (p !== null) {
        if (c.current) {
          let e = p + 1;
          c.current.selectionStart = e;
          c.current.selectionEnd = e;
        }
        m(null);
      }
    }, [c.current, p, d]);
    let g = reactCoreLibraryReexport.useCallback(() => {
      f("");
    }, []);
    let h = reactCoreLibraryReexport.useCallback(() => {
      if ((r || d.trim()) && !l) {
        if (i === "dependOnSubmit") {
          (async () => {
            if (await (t == null ? undefined : t(d))) {
              f("");
            }
          })();
          return;
        }
        if (t != null) {
          t(d);
        }
        if (i) {
          f("");
        }
      }
    }, [t, d, r, i]);
    let _ = reactCoreLibraryReexport.useCallback(e => {
      if (e.keyCode === 13 && !e.shiftKey && !e.altKey) {
        if (!userAgentDeviceDetector.isMobileOrIOS()) {
          e.preventDefault();
        }
        h();
        return;
      }
    }, [d, m, h]);
    return {
      textAreaRef: c,
      textAreaProps: {
        value: d,
        onChange: e => {
          if (e === "@" || e === "/") {
            if (s != null) {
              s(true, e);
            }
          } else if (s != null) {
            s(false);
          }
          a(e);
          f(e);
        },
        onKeyDown: _
      },
      submit: h,
      clear: g
    };
  };
  var h = {
    wrapper: "wrapper-lLbpnM",
    "close-btn": "close-btn-QXl8AA",
    closeBtn: "close-btn-QXl8AA",
    input: "input-wnbLVr",
    "send-btn": "send-btn-kg0z5d",
    sendBtn: "send-btn-kg0z5d",
    "ok-icon": "ok-icon-b_UDNU",
    okIcon: "ok-icon-b_UDNU",
    "btn-group": "btn-group-fEyPPj",
    btnGroup: "btn-group-fEyPPj",
    "fade-entered": "fade-entered-zKsF9Q",
    fadeEntered: "fade-entered-zKsF9Q",
    fadein: "fadein-AZJY3x"
  };
  let _ = e => {
    let {
      onCancel: t,
      onSubmit: n,
      defaultValue: r,
      disabled: i,
      state: l
    } = e;
    let {
      textAreaRef: d,
      textAreaProps: v,
      submit: _
    } = g({
      onSubmit: n,
      defaultValue: r,
      allowEmpty: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!userAgentDeviceDetector.isMobileOrIOS()) {
        var e;
        if ((e = d.current) !== null && e !== undefined) {
          e.focus();
        }
        setTimeout(function () {
          if (d.current) {
            let {
              length: e
            } = v.value;
            d.current.selectionStart = e;
            d.current.selectionEnd = e;
          }
        }, 0);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(h.wrapper, h[`fade-${l}`]),
      "data-testid": "editing_message_content",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: h["close-btn"],
        onClick: t,
        "data-testid": "editing_message_content_cancel",
        children: reactJsxRuntimeCoreReexport.jsx(p, {})
      }), reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
        ref: d,
        ...v,
        className: h.input,
        rows: 1,
        autosize: true,
        "data-testid": "editing_message_content_input"
      }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
        disabled: i,
        theme: "solid",
        onClick: () => _(),
        className: h["send-btn"],
        icon: reactJsxRuntimeCoreReexport.jsx(skillPinIconComponent.SkillPinIcon, {
          color: "white"
        }),
        "data-testid": "editing_message_content_confirm"
      })]
    });
  };
  function x(e) {
    let {
      text: t,
      onSubmit: n,
      onCancel: o
    } = e;
    let {
      isDisabled: l
    } = conversationRateLimit.useConvDisabled();
    return reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 200,
      in: true,
      children: e => reactJsxRuntimeCoreReexport.jsx(_, {
        state: e,
        disabled: l,
        onCancel: o,
        onSubmit: n,
        defaultValue: t || ""
      })
    });
  }
  require.d(exports, {
    messageEditTransition: function () {
      return x;
    }
  });
}