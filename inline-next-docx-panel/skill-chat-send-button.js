// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'ChatSendButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 778915
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#F3F4F6",
      fillOpacity: 0.2,
      d: "M7.785 13.001a.9.9 0 0 0 .655-.248.87.87 0 0 0 .267-.655V7.614l-.089-1.995.853 1.092 1.051 1.101a.78.78 0 0 0 .615.268.85.85 0 0 0 .615-.228.78.78 0 0 0 .248-.586.89.89 0 0 0-.258-.635L8.529 3.357Q8.19 3 7.785 3q-.417 0-.754.357L3.818 6.631a.88.88 0 0 0-.248.635q0 .348.238.586.238.228.605.228.387 0 .625-.268l1.071-1.121.833-1.072-.1 1.995v4.484q0 .397.269.655a.95.95 0 0 0 .674.248"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M7.785 13.001a.9.9 0 0 0 .655-.248.87.87 0 0 0 .267-.655V7.614l-.089-1.995.853 1.092 1.051 1.101a.78.78 0 0 0 .615.268.85.85 0 0 0 .615-.228.78.78 0 0 0 .248-.586.89.89 0 0 0-.258-.635L8.529 3.357Q8.19 3 7.785 3q-.417 0-.754.357L3.818 6.631a.88.88 0 0 0-.248.635q0 .348.238.586.238.228.605.228.387 0 .625-.268l1.071-1.121.833-1.072-.1 1.995v4.484q0 .397.269.655a.95.95 0 0 0 .674.248"
    })]
  }), {}));
  var rtlBackArrowIcon = require("rtl-back-arrow-icon") /*id: 176810*/;
  var d = {
    container: "container-kD9BOs",
    "send-btn": "send-btn-mNNnTf",
    "send-btn-icon": "send-btn-icon-q_2qEU",
    "send-btn-with-text": "send-btn-with-text-RjCwSV"
  };
  let p = reactCoreLibraryReexport.lazy(async () => ({
    default: await Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("semi-ui-form-controls") /*id: 35606*/]).then(require.bind(require, "samantha-ui-components") /*id: 844464*/).then(e => e.SamanthaTooltip)
  }));
  let f = e => {
    let {
      "data-testid": t,
      disableToSend: n,
      sendMessageHoverText: r,
      buttonText: s,
      onClick: f,
      className: h,
      onDisabledClick: m,
      ...v
    } = e;
    let g = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
      id: "flow-end-msg-send",
      size: "default",
      icon: s ? reactJsxRuntimeCoreReexport.jsx(u, {}) : reactJsxRuntimeCoreReexport.jsx(rtlBackArrowIcon.rtlBackArrowIcon, {
        className: d["send-btn-icon"]
      }),
      className: o(d["send-btn"], !!s && d["send-btn-with-text"]),
      theme: "solid",
      disabled: n,
      "aria-disabled": n,
      "aria-label": typeof r == "string" ? r : undefined,
      "data-testid": t,
      onClick: f,
      children: s || undefined
    }), [s, n, r, f, t]);
    let y = reactCoreLibraryReexport.useMemo(() => r ? reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: g,
      children: reactJsxRuntimeCoreReexport.jsx(p, {
        content: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-11 leading-14",
          children: r
        }),
        position: "top",
        clickToHide: true,
        children: g
      })
    }) : g, [r, g]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(d.container, "send-btn-wrapper", h),
      onClick: () => {
        if (n) {
          if (m != null) {
            m();
          }
        }
      },
      ...v,
      children: y
    });
  };
  require.d(exports, {
    ChatSendButton: function () {
      return f;
    }
  });
}