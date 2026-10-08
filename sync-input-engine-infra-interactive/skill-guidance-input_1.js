// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'SkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 636432
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var messageEditTrackingHook = require("message-edit-tracking-hook") /*id: 174008*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = (e, t) => {
    let {
      disabled: n,
      readonly: i,
      placeholder: p,
      value: f,
      onChange: m,
      onPaste: v,
      onInput: h,
      onFocus: _,
      onBlur: g,
      onKeyDown: y,
      onKeyUp: k,
      skill: w
    } = e;
    let b = rtlLanguageDetectionHook.useTextDirection(f ?? "", true);
    let x = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let S = messageEditTrackingHook.useMessageEditTracker(x, w);
    return useLatestCallbackHook_1.useLatestCallback(e => {
      let {
        className: l,
        onChange: a
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
        dir: localeDirectionCheck.isRtlLanguage() ? b : "ltr",
        readOnly: i,
        ref: t,
        disabled: n,
        value: f,
        onChange: e => {
          if (m != null) {
            m(e);
          }
          if (a != null) {
            a(e);
          }
          if (S != null) {
            S.onUpdateValue(e, f);
          }
        },
        onBlur: e => {
          if (g != null) {
            g(e);
          }
          if (S != null) {
            S.onBlur();
          }
        },
        onKeyDown: y,
        onKeyUp: k,
        className: r(l, "textarea-BnKyIt"),
        enableAltCtrlEnter: true,
        theme: "default",
        rows: 1,
        autosize: true,
        placeholder: p,
        onPaste: v,
        autoComplete: "off",
        "data-testid": "chat_input_input",
        onFocus: () => {
          if (_ != null) {
            _();
          }
          if (S != null) {
            S.onFocus();
          }
        },
        onInput: h
      });
    });
  };
  require.d(exports, {
    SkillGuidanceInput: function () {
      return p;
    }
  });
}