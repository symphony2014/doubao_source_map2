// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'useChatAsrButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 91155.255d30be.js
         * chunkId: 91155
         * moduleId: 370968
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var downgradeConfigStore = require("downgrade-config-store") /*id: 489677*/;
  var chatInputStatusHooks = require("chat-input-status-hooks") /*id: 740377*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatHoldSpaceSpeechSetting = require("chat-hold-space-speech-setting") /*id: 575180*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var chatAsrStoreHook = require("chat-asr-store-hook") /*id: 176317*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var L = classnamesUtils;
  var asyncVolumeBarAnimationWrapper = require("async-volume-bar-animation-wrapper") /*id: 356610*/;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var micPermissionToolButton = require("mic-permission-tool-button") /*id: 140956*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var dbxPopoverComponents = require("dbx-popover-components") /*id: 457187*/;
  var iconBell = require("icon-bell") /*id: 281190*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let B = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M15.064 2.987a1 1 0 0 1 1 1v16.026a1 1 0 0 1-2 0V3.987a1 1 0 0 1 1-1M8.937 6.182a1 1 0 0 1 1 1v9.636a1 1 0 0 1-2 0V7.182a1 1 0 0 1 1-1M2.809 7.974a1 1 0 0 1 1 1v6.052a1 1 0 0 1-2 0V8.974a1 1 0 0 1 1-1M21.191 7.974a1 1 0 0 1 1 1v6.052a1 1 0 0 1-2 0V8.974a1 1 0 0 1 1-1"
    })
  });
  let V = e => {
    let {
      isNewIcon: t = false
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(B, {
        className: "size-18 text-dbx-text-primary-0085"
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(iconBell.BellIcon, {
        className: "size-18"
      });
    }
  };
  var useChatAsrButtonAction = require("use-chat-asr-button-action") /*id: 131366*/;
  var z = {
    container: "container-PEnDS2",
    "asr-animate": "asr-animate-V0nWcN"
  };
  let F = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      renderCustomMicPermissionCard: i,
      getPopupContainer: a,
      ...l
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isAsrRecordingOrLoading: c,
      handleClickAsrBtn: d,
      asrStatus: p,
      volume: m,
      tipCardVisible: _,
      tipCardProps: f
    } = useChatAsrButtonAction.useChatAsrAction(l, t);
    let {
      holdSpaceToSpeech: h
    } = chatHoldSpaceSpeechSetting.getHoldSpaceConfig();
    let {
      isExpand: x,
      matchedCanvasPluginIdentifier: b
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isExpand: e.isExpand,
      matchedCanvasPluginIdentifier: e.matchedCanvasPluginIdentifier
    }), deepEqualityUtil.deepEqual);
    let w = h && (!x || b !== writeArtifactPreviewId.artifactPreviewId);
    let k = reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "asr_btn",
      "data-state": c() ? "active" : "inactive",
      className: L("relative flex items-center justify-around", p === chatStatusConstants.ChatStatus.RECORDING || p === chatStatusConstants.ChatStatus.PAUSED ? "bg-dbx-fill-highlight hover:bg-dbx-fill-highlight-hover" : "bg-dbx-fill-trans-20 hover:bg-dbx-fill-trans-20-hover", "!size-36 flex justify-center items-center !rounded-full", "cursor-pointer"),
      onClick: d,
      children: [(p === chatStatusConstants.ChatStatus.RECORDING || p === chatStatusConstants.ChatStatus.PAUSED) && reactJsxRuntimeCoreReexport.jsx(asyncVolumeBarAnimationWrapper.VolumeBarAnimation, {
        count: 4,
        volume: m || 0,
        className: z["asr-animate"]
      }), (p === chatStatusConstants.ChatStatus.DESTROYED || p === chatStatusConstants.ChatStatus.INIT) && reactJsxRuntimeCoreReexport.jsx(V, {
        isNewIcon: w
      }), p === chatStatusConstants.ChatStatus.LOADING && reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
        size: 20,
        color: "tertiary"
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: L(z.container, "!size-36 !rounded-full flex justify-center items-center", n),
      onClick: e => e.stopPropagation(),
      children: _ ? reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
        position: "topRight",
        trigger: "custom",
        visible: _,
        className: "overflow-hidden !border-none !p-0",
        content: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: i ? i(f) : reactJsxRuntimeCoreReexport.jsx(micPermissionToolButton.MicPermissionBtn, {
            ...f
          })
        }),
        getPopupContainer: a,
        children: k
      }) : reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        position: "bottom",
        content: o(c() ? "voice_input_tooltip_stop" : w ? "voiceInput_tooltip_speak" : "voice_input_tooltip_start"),
        clickToHide: true,
        children: k
      })
    });
  });
  var chatAsrInputTracker = require("chat-asr-input-tracker") /*id: 938438*/;
  let G = (e, t) => {
    let [n, r] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n || !t) {
        return;
      }
      let i = setTimeout(() => {
        var t;
        var n;
        if ((n = e.current) === null || n === undefined) {
          return undefined;
        } else if ((t = n.stopAsr) === null || t === undefined) {
          return undefined;
        } else {
          return t.call(n);
        }
      }, t);
      return () => clearTimeout(i);
    }, [n]);
    return {
      resetCount: () => r(0),
      count: () => r(e => e + 1)
    };
  };
  let U = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      getValue: a,
      onUpdateValue: l,
      onClick: o,
      onAsrResultChange: c,
      onStartAsr: d,
      onStopAsr: p,
      autoStopTimeout: m,
      trackParams: _
    } = e;
    let {
      isExpand: f,
      matchedCanvasPluginIdentifier: g
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isExpand: e.isExpand,
      matchedCanvasPluginIdentifier: e.matchedCanvasPluginIdentifier
    }), deepEqualityUtil.deepEqual);
    let {
      holdSpaceToSpeech: h
    } = chatHoldSpaceSpeechSetting.getHoldSpaceConfig();
    let b = h && (!f || g !== writeArtifactPreviewId.artifactPreviewId);
    let M = reactCoreLibraryReexport.useRef(null);
    let L = reactMergeRefs.useMergeRefs(M, e => chatAsrStoreHook.useChatAsrStore.setState({
      asrBtnController: e
    }), t);
    let Z = reactCoreLibraryReexport.useRef();
    let E = reactCoreLibraryReexport.useRef();
    let A = chatAsrInputTracker.createAsrHandler(_, M);
    let {
      resetCount: P,
      count: D
    } = G(M, m);
    let T = useLatestCallbackHook_1.useLatestCallback(e => {
      let t = a == null ? undefined : a();
      if (isStringTypeCheck.isString(t) || !isNullishCheck.isNil(t)) {
        Z.current = t;
      }
      chatAsrStoreHook.useChatAsrStore.setState({
        hasUsedAsr: true,
        asrStartMethod: (e == null ? undefined : e.method) || "click"
      });
      if ((e == null ? undefined : e.method) === "longPress") {
        A.onClickAsrBtn({
          enter_method: "spacebar"
        });
      }
      A.onStartAsr((e == null ? undefined : e.method) === "longPress" ? "spacebar" : "click_input_bar");
      P();
      if (d != null) {
        d();
      }
    });
    let {
      run: I
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      if (o != null) {
        o(e);
      }
      A.onClickAsrBtn({
        enter_method: "click_input_bar"
      });
    }, {
      leading: true,
      trailing: false,
      wait: 300
    });
    let {
      run: B
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      let t = {
        ...e
      };
      chatAsrStoreHook.useChatAsrStore.setState({
        hasUsedAsr: true,
        asrSendMethod: e == null ? undefined : e.sendMethod
      });
      if (b) {
        t.editorValue = V(E.current || "");
        if (l != null) {
          l(V((e == null ? undefined : e.reason) === "interrupt" ? "" : E.current || ""));
        }
        E.current = undefined;
      }
      P();
      setTimeout(() => p == null ? undefined : p(t), 50);
      A.onStopAsr(t);
    }, {
      leading: true,
      trailing: false,
      wait: 300
    });
    let V = e => typeof e == "string" ? {
      data: [{
        type: chatFieldTypes.getFieldTypes.Text,
        text: e
      }]
    } : e;
    let O = e => {
      E.current = e;
      A.onUpdateValue(e);
      D();
      if (!b && l != null) {
        l(V(e));
      }
    };
    let z = useLatestCallbackHook_1.useLatestCallback(e => {
      let t = a == null ? undefined : a();
      if (isStringTypeCheck.isString(t) && (isStringTypeCheck.isString(Z.current) || isUndefinedCheck.isUndefined(Z.current))) {
        if (O != null) {
          O((Z.current || "") + e);
        }
      } else if (!isStringTypeCheck.isString(t) && !isStringTypeCheck.isString(Z.current)) {
        let t = {
          data: [...(Z.current?.data || []), {
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        };
        if (O != null) {
          O(t);
        }
      }
      if (c != null) {
        c(e);
      }
    });
    let U = useLatestCallbackHook_1.useLatestCallback(e => {
      chatAsrStoreHook.useChatAsrStore.setState({
        asrStatus: e
      });
    });
    let q = useLatestCallbackHook_1.useLatestCallback(e => {
      chatAsrStoreHook.useChatAsrStore.setState({
        asrVolume: e
      });
    });
    return reactJsxRuntimeCoreReexport.jsx(F, {
      ref: L,
      className: n,
      onStartAsr: T,
      onStopAsr: B,
      onClick: I,
      onAsrResultChange: z,
      onAsrStatusChange: U,
      onAsrVolumeChange: q,
      trackParams: _
    });
  });
  let q = e => {
    let {
      scene: n,
      skill: r,
      temporaryShow: s = true,
      enable: v = true,
      onUpdateValue: k,
      getValue: C,
      onStopSubmit: j,
      autoSendTimeout: y,
      editorRef: S
    } = e;
    let N = i18nTranslationUtils.useTranslationWithFallback();
    let M = userInfoStatusSelectors.selectUserInfoFailed();
    let L = useLatestCallbackHook_1.useLatestCallback(j);
    let {
      guidanceGenericInputMode: Z,
      guidanceSkillActiveInputMode: E
    } = chatLauncherConfigHooks.useLauncherConfig();
    let A = v && !!Z && (n === "bottom_bar" || n === "landing");
    let [P, D] = reactCoreLibraryReexport.useState(false);
    let T = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId || "";
    });
    let I = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: T,
      skillType: r == null ? undefined : r.skill_type
    });
    let B = !chatInputStatusHooks.useChatInputIsBusy() && !!isEmptyUtil.isEmpty(I) && (s || P) && A;
    let V = () => {
      let {
        enable: e,
        toastContent: t
      } = downgradeConfigStore.getDowngradeConfig("asr");
      if (e && t) {
        dbxSonnerToasterWrapper.dbxToastAPI.error(t);
      }
      return e;
    };
    H(B, {
      editorRef: S,
      preventDefault: true,
      onLongSpacePress: () => {
        var e;
        var t;
        if (!V()) {
          if (M) {
            chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage("unlog_click_voice"));
            chatEventEmitter.chatEmitter.emit("chat.guest.login", {
              source: "unlog_click_voice"
            });
            return;
          }
          if ((t = chatAsrStoreHook.useChatAsrStore.getState().asrBtnController) !== null && t !== undefined && (e = t.startAsr) !== null && e !== undefined) {
            e.call(t, {
              method: "longPress"
            });
          }
        }
      },
      onLongSpacePressFinish: e => {
        var t;
        var n;
        if ((n = chatAsrStoreHook.useChatAsrStore.getState().asrBtnController) === null || n === undefined) {
          return undefined;
        } else if ((t = n.stopAsr) === null || t === undefined) {
          return undefined;
        } else {
          return t.call(n, {
            sendMethod: e,
            isInWave: true
          });
        }
      },
      onLongSpacePressCancel: () => {
        var e;
        var t;
        if ((t = chatAsrStoreHook.useChatAsrStore.getState().asrBtnController) === null || t === undefined) {
          return undefined;
        } else if ((e = t.stopAsr) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, {
            isCancel: true,
            reason: "interrupt",
            isInWave: true
          });
        }
      }
    });
    if (!A) {
      return {
        customSendButton: null,
        asrButtonShow: false
      };
    }
    let O = B ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(U, {
        onStartAsr: () => D(true),
        onStopAsr: e => {
          if ((e == null ? undefined : e.reason) !== "interrupt") {
            let n = (e == null ? undefined : e.editorValue) ?? (C == null ? undefined : C());
            if (n && !inputToolConverter.isDataEmpty(n)) {
              L();
            } else {
              dbxSonnerToasterWrapper.dbxToastAPI.warning(N("voiceInput_toast_noSpeech"), {
                duration: 3000
              });
            }
          }
          setTimeout(() => D(false));
        },
        onUpdateValue: k,
        getValue: C,
        autoStopTimeout: y,
        trackParams: {
          skill_id: (r == null ? undefined : r.skill_type) ?? null,
          skill_name: skillTypeMappings.getSkillName(r == null ? undefined : r.skill_type),
          show_scene: n
        }
      })
    }) : null;
    return {
      asrButtonShow: B,
      customButton: O,
      disableRightTools: !!Z,
      disableSkillCustom: !!E
    };
  };
  let H = (e, t) => {
    let {
      editorRef: n,
      onLongSpacePress: a,
      onLongSpacePressFinish: l,
      onLongSpacePressCancel: o,
      longPressMs: c = 500,
      preventDefault: d = true
    } = t;
    let {
      isExpand: p,
      matchedCanvasPluginIdentifier: m
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isExpand: e.isExpand,
      matchedCanvasPluginIdentifier: e.matchedCanvasPluginIdentifier
    }), deepEqualityUtil.deepEqual);
    let {
      holdSpaceToSpeech: _
    } = chatHoldSpaceSpeechSetting.getHoldSpaceConfig();
    let f = _ && e && (!p || m !== writeArtifactPreviewId.artifactPreviewId);
    let g = reactCoreLibraryReexport.useRef(false);
    let h = reactCoreLibraryReexport.useRef(false);
    let x = reactCoreLibraryReexport.useRef(null);
    let b = e => {
      if (f) {
        if (e.code === "Escape" || e.key === "Escape") {
          if (g.current) {
            h.current = true;
            if (x.current !== null) {
              clearTimeout(x.current);
              x.current = null;
            }
          }
          if (o != null) {
            o();
          }
          return;
        }
        if (e.code === "Enter" || e.key === "Enter") {
          if (l != null) {
            l("speak_wave_enter_shortcut");
          }
          return;
        }
        if (e.code === "Space" || e.key === " ") {
          if (d) {
            e.preventDefault();
          }
          if (g.current || e.repeat) {
            return;
          }
          g.current = true;
          h.current = false;
          x.current = window.setTimeout(() => {
            if (g.current && !h.current) {
              var e;
              var t;
              if (a != null) {
                a();
              }
              if (n != null && (t = n.current) !== null && t !== undefined && (e = t.blur) !== null && e !== undefined) {
                e.call(t);
              }
            }
          }, c);
        }
      }
    };
    let w = e => {
      if (f && (e.code === "Space" || e.key === " ")) {
        g.current = false;
        if (x.current !== null) {
          if (!h.current && l != null) {
            l("speak_spacebar_release");
          }
          clearTimeout(x.current);
          x.current = null;
        }
        h.current = false;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "undefined" && f) {
        document.addEventListener("keydown", b);
        document.addEventListener("keyup", w);
        return () => {
          document.removeEventListener("keydown", b);
          document.removeEventListener("keyup", w);
        };
      }
    }, [c, a, l, o, f]);
  };
  require.d(exports, {
    useChatAsrButton: function () {
      return q;
    }
  });
}