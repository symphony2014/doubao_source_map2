// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'u' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable 'p' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'f' to 'smartTextareaWithFormFieldWrapper'
// - Resolved require(126704) to 'smart-textarea-with-form-field-wrapper'
// - Renamed variable 'h' to 'rtlTimerIconComponent'
// - Resolved require(325670) to 'rtl-timer-icon-component'
// - Renamed variable 'm' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'v' to 'debugTokenGenerator'
// - Resolved require(419751) to 'debug-token-generator'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'FN' to 'defaultToast' (module 697541)
// - Updated imported property 'E' to 'DebugActionType' (module 419751)
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'Z' to 'RtlTimerIcon' (module 325670)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'N' to 'SmartTextArea' (module 126704)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 462416
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var i = clipboardCopyHelper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var rtlTimerIconComponent = require("rtl-timer-icon-component") /*id: 325670*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var debugTokenGenerator = require("debug-token-generator") /*id: 419751*/;
  var g = {
    "feedback-modal": "feedback-modal-BqAiuk",
    inner: "inner-i2Jtnn",
    "close-icon": "close-icon-gZy8Xr",
    "feedback-input": "feedback-input-xjHKb7"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      visible: t,
      title: n,
      okText: o,
      hasCancel: a,
      cancelText: y,
      presetOptions: _,
      placeholder: x,
      maxTextCount: w,
      okButtonDisable: k = false,
      showConfirm: E = false,
      onHide: j,
      onSubmit: C,
      onCopyDebugInfo: S,
      onSaveDebugToken: T,
      reloadPresetOptions: N
    } = e;
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let O = reactCoreLibraryReexport.useRef(0);
    let [I, $] = reactCoreLibraryReexport.useState("");
    let [Z, M] = reactCoreLibraryReexport.useState(k);
    let [P, F] = reactCoreLibraryReexport.useState(false);
    let [A, z] = reactCoreLibraryReexport.useState("");
    let q = reactCoreLibraryReexport.useMemo(() => E && !P, [E, P]);
    let {
      getPopupContainer: B
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    let L = () => j();
    let D = () => {
      C({
        type: Number(A),
        content: I
      });
    };
    let W = reactCoreLibraryReexport.useCallback(() => {
      let e = S == null ? undefined : S();
      if (e) {
        i(e);
        samanthaToastFactory.defaultToast.success(R("feedback_submit_toast_copied"));
      }
      if (T != null) {
        T(debugTokenGenerator.DebugActionType.Copy);
      }
      j();
    }, [S, j, T]);
    let V = reactCoreLibraryReexport.useCallback(() => {
      F(true);
      if (T != null) {
        T(debugTokenGenerator.DebugActionType.Submit);
      }
    }, [F, T]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!(_ == null ? undefined : _.length) && !q && !!t && N != null) {
        N();
      }
    }, [N, t, q, _]);
    reactCoreLibraryReexport.useEffect(() => {
      if (A || _.length === 0 && I.length >= 4 && I.length <= w) {
        M(false);
        return;
      }
      M(true);
    }, [_, A, w, I]);
    if (q) {
      return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
        visible: t,
        icon: reactJsxRuntimeCoreReexport.jsx(rtlTimerIconComponent.RtlTimerIcon, {
          className: "py-2 !text-20 text-s-color-system-info"
        }),
        title: R("feedback_share_report_header"),
        onCancel: L,
        onOk: D,
        zIndex: 1099,
        getPopupContainer: B,
        footer: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex justify-end",
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            "data-testid": "message_feedback_copy_button",
            type: "tertiary",
            onClick: W,
            children: R("feedback_share_report_btn_copy")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            "data-testid": "message_feedback_confirm_button",
            onClick: V,
            children: R("feedback_share_report_btn_continue")
          })]
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          children: R("feedback_share_report_desc")
        })
      });
    } else if (t) {
      return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
        visible: t,
        title: n,
        onCancel: L,
        onOk: D,
        zIndex: 1099,
        className: g["feedback-modal"],
        getPopupContainer: B,
        closeIcon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: g["close-icon"],
          "data-testid": "message_feedback_close_button"
        }),
        footer: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex justify-end",
          children: [a && reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "tertiary",
            onClick: L,
            children: y
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            "data-testid": "message_feedback_submit_button",
            disabled: Z,
            onClick: D,
            children: o
          })]
        }),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: g.inner,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex flex-wrap gap-16",
            children: _.map(e => reactJsxRuntimeCoreReexport.jsx("div", {
              className: s("rounded-[10px] border-[1px] border-s-color-border-tertiary px-12 py-5 hover:bg-s-color-bg-trans cursor-pointer", {
                "border-s-color-brand-primary-disable": A === e.value,
                "bg-s-color-brand-primary-transparent-1": A === e.value,
                "text-s-color-brand-primary-default": A === e.value
              }),
              onClick: () => {
                O.current = e.value;
                if (A === e.value) {
                  z("");
                } else if (k) {
                  z(e.value);
                }
              },
              children: e.text
            }, e.value))
          }), reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
            className: g["feedback-input"],
            maxCount: w,
            onChange: $,
            placeholder: x,
            "data-testid": "message_feedback_input",
            autoFocus: true
          })]
        })
      });
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    FeedbackModalBase: function () {
      return y;
    }
  });
}