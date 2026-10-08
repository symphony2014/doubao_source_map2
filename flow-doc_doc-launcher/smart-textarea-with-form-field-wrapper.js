// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'SmartTextArea'
// - Renamed export 'V' to 'SmartTextAreaWithFormField'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 126704
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var formFieldWrapperComponent = require("form-field-wrapper-component") /*id: 520727*/;
  var businessLayoutContext_1 = require("business-layout-context_1") /*id: 47935*/;
  var u = {
    container: "container-kxxSU4",
    "hide-scrollbar": "hide-scrollbar-O3Tbtt",
    hideScrollbar: "hide-scrollbar-O3Tbtt",
    "custom-scrollbar": "custom-scrollbar-stmEIo",
    customScrollbar: "custom-scrollbar-stmEIo",
    flow: "flow-QnNhHl"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      theme: r = "flow",
      customScrollbar: c = true,
      hideScrollBar: m = false,
      enableAltCtrlEnter: g = false,
      ...p
    } = e;
    let {
      defaultValue: f,
      value: w,
      onChange: v,
      className: _,
      "data-testid": b,
      readOnly: y,
      onKeyDown: x
    } = p;
    let k = businessLayoutContext_1.defaultLayoutFn();
    let [$, R] = reactCoreLibraryReexport.useState("");
    let S = rtlLanguageDetectionHook.useTextDirection(w ?? $ ?? f, true);
    let N = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (N.current) {
        N.current();
        N.current = null;
      }
    }, [w]);
    return reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
      ref: t,
      dir: k ? S : "ltr",
      ...p,
      ...(y ? {
        readonly: true,
        disabled: undefined
      } : {
        disabled: p.disabled
      }),
      className: a(u.container, u[r], _, {
        [u["custom-scrollbar"]]: c,
        [u["hide-scrollbar"]]: m
      }),
      onKeyDown: e => {
        let t = e.nativeEvent.target;
        if (!t || !g) {
          if (x != null) {
            x(e);
          }
          return;
        }
        if (e.keyCode === 13 && (userAgentDeviceDetector.isMac() && e.altKey || userAgentDeviceDetector.isWindows() && e.ctrlKey)) {
          e.preventDefault();
          try {
            let n = w ?? $ ?? f;
            let r = t.selectionStart;
            let a = t.selectionEnd;
            let o = `${n.substring(0, r)}
${n.substring(a)}`;
            N.current = () => {
              t.selectionStart = r + 1;
              t.selectionEnd = r + 1;
            };
            if (v != null) {
              v(o, e);
            }
          } catch {}
        }
        if (x != null) {
          x(e);
        }
      },
      onChange: (e, t) => {
        R(e);
        if (v != null) {
          v(e, t);
        }
      },
      "data-testid": b
    });
  });
  let g = formFieldWrapperComponent.FormFieldWrapper(m, {
    maintainCursor: true
  });
  let p = e => reactJsxRuntimeCoreReexport.jsx(g, {
    ...e
  });
  require.d(exports, {
    SmartTextArea: function () {
      return m;
    },
    SmartTextAreaWithFormField: function () {
      return p;
    }
  });
}