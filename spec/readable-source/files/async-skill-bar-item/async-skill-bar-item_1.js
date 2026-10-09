// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'u' to 'useElementSizeHook_2'
// - Resolved require(486741) to 'use-element-size-hook_2'
// - Renamed variable 'c' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'd' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'p' to 'uiPositionWrappers'
// - Resolved require(711067) to 'ui-position-wrappers'
// - Renamed variable 'f' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'm' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'h' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'v' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'w' to 'reduxDevtoolsPersistIntegration_1'
// - Resolved require(688840) to 'redux-devtools-persist-integration_1'
// - Renamed variable 'x' to 'reactStoreFactory'
// - Resolved require(960791) to 'react-store-factory'
// - Renamed variable 'g' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'b' to 'asyncSkillBarItemStyles_1'
// - Resolved require(58495) to 'async-skill-bar-item-styles_1'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(6228) to 'image-preview-components'
// - Resolved require.bind(555120) to 'desktop-meeting-download-intro'
// - Renamed variable 'N' to 'responsiveLayoutUtils'
// - Resolved require(226752) to 'responsive-layout-utils'
// - Resolved require.e(6228) to 'image-preview-components'
// - Resolved require.bind(555120) to 'desktop-meeting-download-intro'
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'Ue' to 'createStore' (module 960791)
// - Updated imported property 'XR' to 'withDevToolsEnhancer' (module 688840)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// - Updated imported property 'Z' to 'styles' (module 58495)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'D0' to 'isIOS' (module 161498)
// - Updated imported property 'A' to 'useIsMobileView' (module 226752)
// - Updated imported property 't' to 'scrollConstants' (module 226752)
// - Updated imported property 'Z' to 'useElementSize' (module 486741)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'ck' to 'popoverWrapper' (module 711067)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-bar-item.f7100fdd.js
         * chunkId: 24932
         * moduleId: 251306
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let C = e => `flow_AudioCapture_${e}_showed`;
  let k = {
    flow_AudioCapture_skillBar_showed: !!storageWrapperWithFallback.LocalStorageWrapper.getItem(C("skillBar"))
  };
  let j = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...k,
    setAudioCaptureClick: (t, n) => {
      let o = C(t);
      if (n) {
        storageWrapperWithFallback.LocalStorageWrapper.setItem(o, "1");
      } else {
        storageWrapperWithFallback.LocalStorageWrapper.removeItem(o);
      }
      e(() => ({
        [C(t)]: n
      }));
    },
    resetAudioCapture: () => {
      e(k);
    }
  })));
  let y = e => j(t => t[C(e)], deepEqualityUtil_1.isDeepEqual);
  let _ = e => {
    j.getState().setAudioCaptureClick(e, true);
  };
  var asyncSkillBarItemStyles_1 = require("async-skill-bar-item-styles_1") /*id: 58495*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let A = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("image-preview-components") /*id: 6228*/.then(require.bind(require, "desktop-meeting-download-intro") /*id: 555120*/)
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-320 h-372"
  }));
  let D = e => {
    let {
      from: t,
      children: n,
      customDownloadKey: o,
      showCustomFooter: r = true
    } = e;
    let [l, s] = reactCoreLibraryReexport.useState(false);
    let a = y(t);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        width: 280,
        zIndex: 1040,
        keepDOM: true,
        lazyRender: true,
        maskClosable: true,
        visible: l,
        className: asyncSkillBarItemStyles_1.styles.modal,
        onCancel: () => s(false),
        centered: true,
        header: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: "absolute text-16 p-2 top-18 right-16 cursor-pointer text-s-color-text-quaternary",
          onClick: () => s(false)
        }),
        footer: null,
        children: l && reactJsxRuntimeCoreReexport.jsx(A, {
          customDownloadKey: o,
          showCustomFooter: !!r && userAgentDeviceDetector.isIOS()
        })
      }, t), reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: () => {
          s(true);
          if (!a) {
            _(t);
          }
        },
        children: n
      })]
    });
  };
  var responsiveLayoutUtils = require("responsive-layout-utils") /*id: 226752*/;
  let B = e => {
    let {
      children: t,
      type: n,
      position: o,
      from: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(n === "withModal" ? O : Z, {
      position: o,
      from: r,
      children: t
    }, r);
  };
  let O = e => {
    let {
      children: t,
      position: n,
      from: o
    } = e;
    if (responsiveLayoutUtils.useIsMobileView()) {
      return reactJsxRuntimeCoreReexport.jsx(D, {
        from: o,
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(Z, {
        position: n,
        from: o,
        children: t
      });
    }
  };
  let Z = e => {
    let {
      children: t,
      position: n,
      from: o
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let l = useElementSizeHook_2.useElementSize(r);
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let f = y(o);
    reactCoreLibraryReexport.useEffect(() => {
      if (!(l == null ? undefined : l.width)) {
        return;
      }
      document.documentElement.style.setProperty("--contentWidth", `${(l.width - 24) / 2}px !important`);
      let e = () => {
        d(false);
      };
      let t = responsiveLayoutUtils.scrollConstants?.[o];
      if (t) {
        chatEventEmitter.chatEmitter.on(t, e);
      }
      return () => {
        if (t) {
          chatEventEmitter.chatEmitter.off(t, e);
        }
      };
    }, [l == null ? undefined : l.width]);
    return reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
      trigger: "custom",
      visible: c,
      position: n,
      autoAdjustOverflow: true,
      arrowPointAtCenter: false,
      showArrow: true,
      stopPropagation: true,
      onClickOutSide: () => {
        d(false);
      },
      onVisibleChange: e => {
        d(e);
        if (e && !f) {
          _(o);
        }
      },
      content: reactJsxRuntimeCoreReexport.jsx(E, {}),
      className: s("!p-0", asyncSkillBarItemStyles_1.styles.popover),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: r,
        onClick: e => {
          if (!c) {
            d(true);
          }
          e.stopPropagation();
        },
        children: t
      })
    });
  };
  let E = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("image-preview-components") /*id: 6228*/.then(require.bind(require, "desktop-meeting-download-intro") /*id: 555120*/)
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-320 h-372"
  }));
  let T = e => {
    let {
      skill: n,
      from: i,
      renderContent: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(B, {
      position: i === "input" ? "top" : "left",
      type: "withModal",
      from: "skillBar",
      children: l({
        keepMorePopover: true,
        onClick: async () => {
          var e;
          let t = await chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService");
          if (t != null && (e = t.getSkillReportEvent({
            skillType: chatAppEnums.SkillType.DesExtSkillMeetingSummary,
            eventName: "skill_bar_open_input"
          })) !== null && e !== undefined) {
            e.success();
          }
        }
      })
    }, (n == null ? undefined : n.skill_type) ?? "audioCapture");
  };
  require.r(exports);
  require.d(exports, {
    SkillBarItemComponent: function () {
      return T;
    }
  });
}