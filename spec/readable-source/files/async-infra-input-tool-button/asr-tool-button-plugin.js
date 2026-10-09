// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'o' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 's' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'chatAsrStoreHook'
// - Resolved require(176317) to 'chat-asr-store-hook'
// - Renamed variable 'l' to 'chatAsrInputTracker'
// - Resolved require(938438) to 'chat-asr-input-tracker'
// - Renamed variable 'd' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'asyncVolumeBarAnimationWrapper'
// - Resolved require(356610) to 'async-volume-bar-animation-wrapper'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'g' to 'chatStatusConstants'
// - Resolved require(680777) to 'chat-status-constants'
// - Renamed variable 'f' to 'micPermissionToolButton'
// - Resolved require(140956) to 'mic-permission-tool-button'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'w' to 'samanthaPopoverWrapperComponent'
// - Resolved require(137563) to 'samantha-popover-wrapper-component'
// - Renamed variable '_' to 'semiTooltipWrapper'
// - Resolved require(905177) to 'semi-tooltip-wrapper'
// - Resolved require(682145) to 'rtl-icon-factory'
// - Renamed variable 'x' to 'useChatAsrButtonAction'
// - Resolved require(131366) to 'use-chat-asr-button-action'
// - Renamed variable 'k' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'E' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'S' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'j' to 'reactMergeRefs'
// - Resolved require(496270) to 'react-merge-refs'
// - Updated imported property 'G' to 'createRtlIcon' (module 682145)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'x' to 'useChatAsrAction' (module 131366)
// - Updated imported property 'Z' to 'ChatStatus' (module 680777)
// - Updated imported property 't' to 'VolumeBarAnimation' (module 356610)
// - Updated imported property 'r' to 'SamanthaPopover' (module 137563)
// - Updated imported property 'i' to 'MicPermissionBtn' (module 140956)
// - Updated imported property 's' to 'SemiTooltip' (module 905177)
// - Updated imported property 'e' to 'useMergeRefs' (module 496270)
// - Updated imported property 'j' to 'useChatAsrStore' (module 176317)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'K' to 'createAsrHandler' (module 938438)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 81854
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatAsrStoreHook = require("chat-asr-store-hook") /*id: 176317*/;
  var chatAsrInputTracker = require("chat-asr-input-tracker") /*id: 938438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var asyncVolumeBarAnimationWrapper = require("async-volume-bar-animation-wrapper") /*id: 356610*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      disabled: t = false,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ...n,
      className: c("dot-flashing-CqhlCp", {
        "disabled-MQ2B1M": t
      })
    });
  };
  var m = e => {
    let {
      fontSize: t = 14,
      className: n = ""
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c("wrapper-nNcEd0", n),
      style: {
        height: `${t * 1.6}px`
      },
      children: reactJsxRuntimeCoreReexport.jsx(p, {})
    });
  };
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var micPermissionToolButton = require("mic-permission-tool-button") /*id: 140956*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var b = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 2.5A2.5 2.5 0 0 1 14.5 5v6a2.5 2.5 0 0 1-5 0V5A2.5 2.5 0 0 1 12 2.5M7.5 5a4.5 4.5 0 0 1 9 0v6a4.5 4.5 0 1 1-9 0zm-2 4a1 1 0 0 0-2 0v2c0 4.213 3.26 7.928 7.5 8.44V21H7.3a1 1 0 1 0 0 2h9.4a1 1 0 1 0 0-2H13v-1.56c4.24-.512 7.5-4.227 7.5-8.44V9a1 1 0 1 0-2 0v2c0 3.46-2.915 6.5-6.5 6.5S5.5 14.46 5.5 11z",
      clipRule: "evenodd"
    })
  }), {}));
  var useChatAsrButtonAction = require("use-chat-asr-button-action") /*id: 131366*/;
  var y = {
    container: "container-s0RHU8",
    "mic-container": "mic-container-l1692v",
    active: "active-cXcW4s",
    "asr-animate": "asr-animate-QnozJC",
    "icon-mic": "icon-mic-yM0s3W",
    "icon-loading": "icon-loading-brCXq8"
  };
  let C = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      renderCustomMicPermissionCard: i,
      getPopupContainer: r,
      ...o
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isAsrRecordingOrLoading: a,
      handleClickAsrBtn: l,
      asrStatus: d,
      volume: p,
      tipCardVisible: C,
      tipCardProps: k
    } = useChatAsrButtonAction.useChatAsrAction(o, t);
    let E = reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "asr_btn",
      "data-state": a() ? "active" : "inactive",
      className: c(y["mic-container"], {
        [y.active]: a()
      }, "cursor-pointer"),
      onClick: l,
      children: [(d === chatStatusConstants.ChatStatus.RECORDING || d === chatStatusConstants.ChatStatus.PAUSED) && reactJsxRuntimeCoreReexport.jsx(asyncVolumeBarAnimationWrapper.VolumeBarAnimation, {
        count: 4,
        volume: p || 0,
        className: y["asr-animate"]
      }), (d === chatStatusConstants.ChatStatus.DESTROYED || d === chatStatusConstants.ChatStatus.INIT) && reactJsxRuntimeCoreReexport.jsx(b, {
        className: y["icon-mic"]
      }), d === chatStatusConstants.ChatStatus.LOADING && reactJsxRuntimeCoreReexport.jsx(m, {
        className: c(y["icon-loading"])
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c(y.container, n),
      onClick: e => e.stopPropagation(),
      children: C ? reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        position: "topRight",
        trigger: "custom",
        visible: C,
        content: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: i ? i(k) : reactJsxRuntimeCoreReexport.jsx(micPermissionToolButton.MicPermissionBtn, {
            ...k
          })
        }),
        getPopupContainer: r,
        children: E
      }) : reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-11 leading-14",
          children: s(a() ? "voice_input_tooltip_stop" : "voice_input_tooltip_start")
        }),
        children: E
      })
    });
  });
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  let R = e => {
    let {
      className: n,
      getValue: d,
      onUpdateValue: c,
      renderCustomMicPermissionCard: u,
      activeSkillType: p,
      skill: m,
      scene: g = "landing",
      trackParams: f
    } = e;
    let v = reactCoreLibraryReexport.useRef(null);
    let w = reactMergeRefs.useMergeRefs(v, e => chatAsrStoreHook.useChatAsrStore.setState({
      asrBtnController: e
    }));
    let _ = reactCoreLibraryReexport.useRef();
    let b = {
      ...f,
      skill_id: p ?? (m == null ? undefined : m.skill_type) ?? null,
      skill_name: skillTypeMappings.getSkillName(p ?? (m == null ? undefined : m.skill_type)) || undefined,
      show_scene: g
    };
    let x = chatAsrInputTracker.createAsrHandler(b, v);
    let y = useLatestCallbackHook_1.useLatestCallback(e => {
      x.onUpdateValue(e);
      if (c != null) {
        c(e);
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(C, {
      ref: w,
      className: n,
      onStartAsr: () => {
        x.onStartAsr();
        let e = d == null ? undefined : d();
        if (isStringTypeCheck.isString(e) || !isNullishCheck.isNil(e)) {
          _.current = e;
        }
        chatAsrStoreHook.useChatAsrStore.setState({
          hasUsedAsr: true
        });
      },
      onStopAsr: e => x.onStopAsr(e),
      onClick: () => x.onClickAsrBtn(),
      trackParams: b,
      onAsrResultChange: e => {
        let t = d == null ? undefined : d();
        if (isStringTypeCheck.isString(t) && (isStringTypeCheck.isString(_.current) || isUndefinedCheck.isUndefined(_.current))) {
          if (y != null) {
            y((_.current || "") + e);
          }
        } else if (!isStringTypeCheck.isString(t) && !isStringTypeCheck.isString(_.current)) {
          let t = {
            data: [...(_.current?.data || []), {
              type: chatFieldTypes.getFieldTypes.Text,
              text: e
            }]
          };
          if (y != null) {
            y(t);
          }
        }
      },
      renderCustomMicPermissionCard: u
    });
  };
  class I {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: R,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = R;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AsrToolButtonPlugin: function () {
      return I;
    }
  });
}