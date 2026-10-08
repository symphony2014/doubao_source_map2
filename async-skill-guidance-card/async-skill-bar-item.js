// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oX' to 'AsyncSkillBarItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-bar-item.f7100fdd.js
         * chunkId: 24932
         * moduleId: 336984
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var voiceCallFlowStateManager = require("voice-call-flow-state-manager") /*id: 408567*/;
  var asyncSkillBarItemStyles = require("async-skill-bar-item-styles") /*id: 37328*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("download-dialog-component") /*id: 23478*/.then(require.bind(require, "voice-call-download-card") /*id: 710942*/)
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-320 h-372"
  }));
  let x = e => {
    let {
      from: t,
      children: n,
      customDownloadKey: r,
      showCustomFooter: i = true
    } = e;
    let [l, s] = reactCoreLibraryReexport.useState(false);
    let a = voiceCallFlowStateManager.getVoiceCallState(t);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        width: 280,
        zIndex: 1040,
        keepDOM: true,
        lazyRender: true,
        maskClosable: true,
        visible: l,
        className: asyncSkillBarItemStyles.styles.modal,
        onCancel: () => s(false),
        centered: true,
        header: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: "absolute text-16 p-2 top-18 right-16 cursor-pointer text-s-color-text-quaternary",
          onClick: () => s(false)
        }),
        footer: null,
        children: l && reactJsxRuntimeCoreReexport.jsx(w, {
          customDownloadKey: r,
          showCustomFooter: !!i && userAgentDeviceDetector.isIOS()
        })
      }, t), reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: () => {
          s(true);
          if (!a) {
            voiceCallFlowStateManager.markVoiceCallShown(t);
          }
        },
        children: n
      })]
    });
  };
  var responsiveLayoutUtils = require("responsive-layout-utils") /*id: 226752*/;
  let C = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("download-dialog-component") /*id: 23478*/.then(require.bind(require, "voice-call-download-card") /*id: 710942*/)
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-320 h-372"
  }));
  let k = e => {
    let {
      children: t,
      position: n,
      from: r
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let a = useElementSizeHook_2.useElementSize(s);
    let [d, p] = reactCoreLibraryReexport.useState(false);
    let f = voiceCallFlowStateManager.getVoiceCallState(r);
    reactCoreLibraryReexport.useEffect(() => {
      if (!(a == null ? undefined : a.width)) {
        return;
      }
      document.documentElement.style.setProperty("--contentWidth", `${(a.width - 24) / 2}px !important`);
      let e = () => {
        p(false);
      };
      let t = responsiveLayoutUtils.scrollConstants?.[r];
      if (t) {
        chatEventEmitter.chatEmitter.on(t, e);
      }
      return () => {
        if (t) {
          chatEventEmitter.chatEmitter.off(t, e);
        }
      };
    }, [a == null ? undefined : a.width]);
    return reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
      trigger: "custom",
      visible: d,
      position: n,
      autoAdjustOverflow: true,
      arrowPointAtCenter: false,
      showArrow: true,
      stopPropagation: true,
      onClickOutSide: () => {
        p(false);
      },
      onVisibleChange: e => {
        p(e);
        if (e && !f) {
          voiceCallFlowStateManager.markVoiceCallShown(r);
        }
      },
      content: reactJsxRuntimeCoreReexport.jsx(C, {}),
      className: i("!p-0", asyncSkillBarItemStyles.styles.popover),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: s,
        onClick: e => {
          if (!d) {
            p(true);
          }
          e.stopPropagation();
        },
        children: t
      })
    });
  };
  let j = e => {
    let {
      children: t,
      position: n,
      from: o
    } = e;
    if (responsiveLayoutUtils.useIsMobileView()) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        from: o,
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(k, {
        position: n,
        from: o,
        children: t
      });
    }
  };
  let y = e => {
    let {
      children: t,
      type: n,
      position: o,
      from: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(n === "withModal" ? j : k, {
      position: o,
      from: r,
      children: t
    }, r);
  };
  require.d(exports, {
    AsyncSkillBarItem: function () {
      return y;
    }
  });
}