// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'ChatInputGuidance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 956394
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var chatTargetTypes = require("chat-target-types") /*id: 909338*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let u = () => chatStoreManager.useStoreSelector("chatInputStore", e => e.skillEngineConfig);
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatInputGuidance = require("chat-input-guidance") /*id: 495426*/;
  var chatGuidanceConfigSelector = require("chat-guidance-config-selector") /*id: 811136*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      guidanceGenericInputMode: t,
      guidanceSkillActiveInputMode: n,
      inputMinRows: i,
      inputAggregateList: o
    } = chatGuidanceConfigSelector.useChatGuidanceConfig();
    let a = (!e || e === chatAppEnums.SkillType.DesExtSkillSuperTask) && t === chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine;
    let l = e && n === chatLauncherConfigHooks.toolBtnLayoutConstants.ToolBtnsBorderLessTop;
    let s = e ? n : t === chatLauncherConfigHooks.inputModeConstants.InlineExpandSkillbar;
    let u = a && (o == null ? undefined : o.includes("generic"));
    return {
      renderFallback: () => a || l || s ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: r("relative", a ? u ? "h-56 mt-44" : "h-56 mt-auto" : i === "2" ? "h-124" : "h-100", "after:content-[''] after:absolute after:inset-0 after:border-1 after:border-dbx-line-10 after:pointer-events-none", a || l ? "rounded-dbx-2xl after:rounded-dbx-2xl" : "rounded-dbx-4xl after:rounded-dbx-4xl", "shadow-dbx-lg")
      }) : reactJsxRuntimeCoreReexport.jsx(chatInputGuidance.InputGuidanceBox, {}),
      cssVar: a ? {
        "--input-guidance-input-container-min-height": "56px",
        "--input-guidance-input-container-padding": "9px"
      } : s ? {
        "--input-guidance-input-container-min-height": i === "2" ? "124px" : "100px",
        "--input-guidance-input-editor-wrapper-min-height": i === "2" ? "54px" : undefined,
        "--input-guidance-input-container-padding": "9px"
      } : {}
    };
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var flowLayoutStateRunner = require("flow-layout-state-runner") /*id: 358717*/;
  let v = reactCoreLibraryReexport.lazy(async () => await flowLayoutStateRunner.runOnPageReady(async () => ({
    default: await Promise.all([require.e("semi-form-components") /*id: 49598*/, require.e("ui-primitives-utils") /*id: 4603*/, require.e("semi-ui-library-bundle") /*id: 94258*/, require.e("14581") /*id: css-unknown*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("ui-utils-and-event-reporting") /*id: 29539*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("chat-input-components") /*id: 55681*/, require.e("async-infra-guidance-input") /*id: 48684*/]).then(require.bind(require, "image-skill-guidance-page") /*id: 833873*/).then(e => e.GuidanceInputFoundation)
  })));
  let b = e => {
    let {
      chatId: t,
      chatType: n,
      activeSkillType: i,
      scene: o
    } = e;
    let {
      renderFallback: a
    } = f(i);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r("relative flex flex-col flex-1 justify-between min-h-0"),
      children: reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: a(),
        children: reactJsxRuntimeCoreReexport.jsx(v, {
          scene: o,
          chatId: t,
          chatType: n,
          specificSkillType: i,
          showExitSkillButton: true,
          renderFallback: a
        })
      })
    });
  };
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var asyncSkillChatContext = require("async-skill-chat-context") /*id: 844074*/;
  var chatInputActionButtons = require("chat-input-action-buttons") /*id: 124989*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var cssModuleClassNames = require("css-module-class-names") /*id: 33045*/;
  let k = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      id: _,
      className: v,
      style: b,
      leftToolsClassName: S,
      rightToolsClassName: P,
      editorClassName: C,
      leftTools: y,
      customArea: k,
      customAreaClassName: R,
      onClick: w,
      rightSendBtn: I,
      toolsPlaceholderRef: M,
      toolsPlaceholderClassName: A,
      testId: D,
      beforeEditorAnchor: N,
      renderEditor: L,
      topAnchor: O,
      mode: B,
      placeholderContent: G
    } = e;
    let {
      inputFocusHighlight: j
    } = chatLauncherConfigHooks.useInputFocusHighlight();
    let W = reactCoreLibraryReexport.useRef(null);
    let U = useElementSizeHook_2.useElementSize(W);
    let F = {
      "--custom-area-height": `${(U == null ? undefined : U.height) ?? 0}px`,
      ...(j ? {
        "--active-shadow": "0 2px 4px 0 rgba(116, 158, 243, 0.02), 0 4px 12px 0 rgba(102, 188, 253, 0.04), 0 8px 24px 0 rgba(95, 178, 255, 0.17)"
      } : {})
    };
    let V = reactCoreLibraryReexport.useRef(null);
    let Z = useElementSizeHook_2.useElementSize(V)?.height ?? 0;
    let z = reactCoreLibraryReexport.useRef(null);
    let H = reactMergeRefs.useMergeRefs(z, M);
    let $ = useElementSizeHook_2.useElementSize(z)?.height ?? 0;
    reactCoreLibraryReexport.useEffect(() => {
      if (V.current) {
        V.current.textContent = `${G || ""}\u200B`;
      }
    }, [G]);
    let K = B === "main-tools-top";
    let X = B === "main-tools-bottom";
    let Q = B === "default_one_line";
    let q = B === "default_two_line";
    let Y = Q && Z <= $;
    let J = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "relative flex w-full",
      children: [N, L == null ? undefined : L({
        className: r("flex-1 w-0 min-w-0 !border-none !bg-transparent", "max-h-[calc(var(--input-guidance-input-container-max-height)-var(--custom-area-height,0px)-36px-16px-14px-10px)]", C)
      })]
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      id: _,
      ref: t,
      style: {
        ...b,
        ...F
      },
      className: r("relative z-0", Q || K ? "rounded-dbx-2xl after:rounded-dbx-2xl" : "rounded-dbx-4xl after:rounded-dbx-4xl", cssModuleClassNames.classNames["input-content-container"], "after:content-[''] after:absolute after:inset-0 after:border-1 after:border-dbx-line-10 after:pointer-events-none", "shadow-dbx-lg", j && r("focus-within:after:border-dbx-fill-highlight-disable focus-within:shadow-(--active-shadow)", "has-[:active]:after:border-dbx-fill-highlight-disable has-[:active]:shadow-(--active-shadow)", "has-[[data-state=\"active\"]]:after:border-dbx-fill-highlight-disable has-[[data-state=\"active\"]]:shadow-(--active-shadow)")),
      "data-testid": "chat_input",
      onClick: w,
      children: [O, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r("relative flex flex-col", "max-h-(--input-guidance-input-container-max-height,unset)", "rounded-[inherit]", "border-(--input-guidance-input-container-border)", "bg-(--input-guidance-input-container-background)", v),
        children: [K && reactJsxRuntimeCoreReexport.jsx("div", {
          className: r("shrink-0 mt-12 px-12 z-1 overflow-hidden min-h-32", S),
          children: y
        }), k && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: r("relative", R),
          children: [k, reactJsxRuntimeCoreReexport.jsx("div", {
            ref: W,
            className: "pointer-events-none absolute inset-0"
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: r("relative flex flex-col-reverse justify-between items-end", "gap-14 relative", "w-full flex-1 min-h-0 p-10"),
          "data-testid": D,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: r("relative flex w-full flex-nowrap justify-between gap-6", "overflow-hidden"),
            children: [!K && reactJsxRuntimeCoreReexport.jsx("div", {
              className: r("shrink-0 empty:hidden z-2 pl-2 flex items-center overflow-hidden", {
                "min-w-0 flex-1 overflow-hidden": X || q
              }, S),
              children: y
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              id: "generic-tools-placeholder",
              ref: H,
              className: r("relative", {
                "min-w-0 flex-1": !X && !q,
                "overflow-hidden flex flex-col justify-end": Q
              }, A),
              children: [K && reactJsxRuntimeCoreReexport.jsx("div", {
                className: "flex items-center px-10 py-4",
                children: J
              }), Q && reactJsxRuntimeCoreReexport.jsx("pre", {
                className: r("absolute bottom-6 left-0 w-full", "whitespace-pre-wrap break-words", "invisible pointer-events-none"),
                ref: V
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: r("flex items-end empty:hidden z-1", P),
              children: I
            })]
          }), K ? null : reactJsxRuntimeCoreReexport.jsx("div", {
            className: r("w-full flex", "min-h-(--input-guidance-input-editor-wrapper-min-height,0) px-10 pt-6", {
              "absolute items-center box-content truncate": Y
            }),
            style: Y ? {
              left: `${z.current?.offsetLeft ?? 0}px`,
              width: `${z.current?.clientWidth ?? 0}px`,
              height: `${z.current?.clientHeight ?? 0}px`
            } : {},
            children: J
          })]
        })]
      })]
    });
  });
  var autoFocusOnKeypressAndVisibilityChange = require("auto-focus-on-keypress-and-visibility-change") /*id: 952645*/;
  var chatTrackingUtils = require("chat-tracking-utils") /*id: 665561*/;
  var chatSkillChangeHandlers = require("chat-skill-change-handlers") /*id: 378957*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatGuidanceStoreSelectors = require("chat-guidance-store-selectors") /*id: 970651*/;
  let U = e => {
    var n;
    var i;
    var r;
    let o = (r = chatGuidanceStoreSelectors.useChatLayoutLoaderData()) === null || r === undefined ? undefined : (i = r.trimmedChainRecentConvCells) === null || i === undefined ? undefined : (n = i.find(e => {
      return e.conversation?.bot_type === chatConstantsEnum.specificBotType.COCO;
    })) === null || n === undefined ? undefined : n.conversation?.conversation_id;
    if (e && o === e) {
      return {
        conversation_type: chatCoreConstants.BotTypes.Coco,
        chat_type: skillConstantsEnum.SkillPinType.default
      };
    } else {
      return {
        conversation_type: chatCoreConstants.BotTypes.CocoSub,
        chat_type: skillConstantsEnum.SkillPinType.defaultNew
      };
    }
  };
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatInputManager = require("chat-input-manager") /*id: 372488*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  let z = (e, t) => {
    let {
      chatInputRef: n
    } = chatRefsContext.useChatRefs();
    reactCoreLibraryReexport.useImperativeHandle(n, () => {
      let n = {
        focus: () => {
          var t;
          var n;
          if ((n = e.current) !== null && n !== undefined && (t = n.focus) !== null && t !== undefined) {
            t.call(n, {
              toIndex: Number.MAX_SAFE_INTEGER
            });
          }
        },
        blur: () => {
          var t;
          var n;
          if ((n = e.current) === null || n === undefined) {
            return undefined;
          } else if ((t = n.blur) === null || t === undefined) {
            return undefined;
          } else {
            return t.call(n);
          }
        },
        getText: chatInputStoreHelpers.getExtractedText,
        setText: chatInputStoreHelpers.setTextValue,
        clear: chatInputStoreHelpers.clearTextValue,
        getTextareaWidth: () => undefined,
        attachmentAreaScrollToBottom: emptyExportFunction.emptyFunction,
        setSkillMoreVisible: emptyExportFunction.emptyFunction,
        submit: (e, n) => t == null ? undefined : t(n)
      };
      chatInputManager.chatInputManager.bindInputRef(n);
      return n;
    });
  };
  var chatToolButtonOverflowList = require("chat-tool-button-overflow-list") /*id: 131745*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var refreshIconSvgComponent = require("refresh-icon-svg-component") /*id: 485130*/;
  var chatAiModeSelectButton = require("chat-ai-mode-select-button") /*id: 373824*/;
  let q = e => {};
  let Y = new Promise(e => {
    q = e;
  });
  let J = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    await Y;
    return {
      default: (await require.e("mode-select-lazy") /*id: 57080*/.then(require.bind(require, "chat-input-mode-select-foundation") /*id: 867884*/)).InputEngineModeSelectFoundation
    };
  }), chatAiModeSelectButton.AiModeSelectButton);
  let ee = e => {
    let {
      pageInteractive: t
    } = chatStoreManager.useStoreSelector("flowWebLayoutStore", e => ({
      pageInteractive: e.pageInteractive
    }), deepEqualityUtil.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      let e = setTimeout(() => {
        q(true);
      }, 10000);
      if (t) {
        q(true);
        clearTimeout(e);
      }
      return () => {
        clearTimeout(e);
      };
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(J, {
      ...e
    });
  };
  let et = e => {
    let {
      resetErrorBoundary: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      onClick: t,
      size: "md",
      className: "size-32 rounded-dbx-xl",
      variant: "icon",
      children: reactJsxRuntimeCoreReexport.jsx(refreshIconSvgComponent.RefreshIcon, {})
    });
  };
  let en = e => {
    let {
      plugin: n,
      identifier: i,
      valueKey: r,
      className: u,
      ...c
    } = e;
    let d = chatStoreManager.useStoreSelector("chatInputStore", e => {
      if (r) {
        return e.actionValue?.[r];
      } else {
        return undefined;
      }
    }, deepEqualityUtil.deepEqual);
    let h = reactCoreLibraryReexport.useMemo(() => chatInputStoreHelpers.setActionValue(r), [r]);
    let {
      getValue: m,
      onUpdateValue: f
    } = reactCoreLibraryReexport.useMemo(() => ({
      getValue: () => chatInputStoreHelpers.getEditorValue(),
      onUpdateValue: e => {
        if (typeof e == "string") {
          chatInputStoreHelpers.setTextValue(e);
        } else {
          chatInputStoreHelpers.setEditorValue(e);
        }
      }
    }), []);
    if (n == null ? undefined : n.Content) {
      return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
        errorBoundaryName: "input_tool_button_error",
        logger: loggerServiceCore.defaultLogger,
        FallbackComponent: et,
        meta: {
          identifier: String(i),
          skill_type: c.skill?.skill_type
        },
        errorBoundaryScope: chatTargetTypes.chatTargetTypes.Component,
        children: reactJsxRuntimeCoreReexport.jsx(n.Content, {
          ...c,
          getValue: m,
          onUpdateValue: f,
          value: d,
          onChange: h,
          isToolButtonSmall: false,
          className: u
        })
      });
    } else {
      return null;
    }
  };
  let ei = e => {
    let {
      list: t,
      toolButtonProps: n,
      modeSelectsItems: i,
      ...r
    } = e;
    let o = reactUseChangedRef.useChangedRef(t.map(e => e.identifier), deepEqualityUtil.deepEqual);
    let {
      pluginList: a,
      loading: l
    } = chatPluginIocManager.inputToolBtnListHook(o);
    let s = reactCoreLibraryReexport.useMemo(() => {
      if (l) {
        return [];
      }
      let e = (e, t, r, o, l, s) => s ? reactJsxRuntimeCoreReexport.jsx(en, {
        identifier: e,
        valueKey: l,
        plugin: a[t],
        ...n,
        trackParams: {
          ...(n == null ? undefined : n.trackParams),
          show_position: t
        },
        ...o
      }, t) : r === "mode-select" ? reactJsxRuntimeCoreReexport.jsx(ee, {
        identifier: e,
        list: i,
        ...n,
        ...o
      }, t) : null;
      return t.map((t, n) => {
        let {
          identifier: i,
          type: r,
          valueKey: o
        } = t;
        return t => e(i, n, r, t, o, a[n]);
      });
    }, [o, l, a, n]);
    if (l) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(chatToolButtonOverflowList.ToolButtonOverflowList, {
        ...r,
        scene: n.scene,
        list: s
      });
    }
  };
  let er = e => {
    let {
      config: n,
      skill: i,
      chatId: r,
      scene: o,
      chatType: a,
      trackParams: l,
      autoFold: s = true
    } = e;
    let {
      actions: u,
      modeSelectsItems: c = []
    } = n ?? {};
    let d = (u == null ? undefined : u.filter(e => e.type === "action-bar-item").map(e => {
      let {
        valueKey: t,
        type: n,
        pluginIdentifier: i
      } = e;
      return {
        valueKey: t,
        type: n,
        identifier: i
      };
    })) ?? [];
    if (d.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "relative flex min-h-44 max-w-800 flex-1 items-center pb-10",
        children: reactJsxRuntimeCoreReexport.jsx(ei, {
          list: d,
          modeSelectsItems: c,
          className: "gap-6",
          customControl: !s,
          toolButtonProps: {
            skill: i,
            type: "editor",
            chatId: r,
            scene: o,
            chatType: a,
            trackParams: l,
            asTool: false
          }
        })
      });
    } else {
      return null;
    }
  };
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  let es = e => reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
    color: "grey-outline",
    size: "md",
    className: r("size-36 !rounded-full p-9 !outline-transparent", "[&_svg:not([class*=\"size-\"])]:size-[18px]"),
    onClick: () => !e.disabled && teaAnalyticsEventTracker.trackEvent("click_upload_entrance", e.trackParams),
    children: reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {})
  });
  let eu = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnPageReady(() => Promise.all([require.e("ui-primitives-utils") /*id: 4603*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("async-input-engine-infra") /*id: 63727*/]).then(require.bind(require, "input-tool-menu-dropdown-foundation") /*id: 806712*/).then(e => ({
    default: e.InputToolMenuDropdownFoundation
  })))), () => reactJsxRuntimeCoreReexport.jsx(es, {
    disabled: true,
    trackParams: {}
  }));
  let ec = e => {
    let {
      config: i,
      skill: o,
      chatId: a,
      scene: l,
      chatType: s,
      trackParams: u,
      templatePopoverRef: c,
      autoFold: d = true
    } = e;
    let {
      actions: h,
      modeSelectsItems: m = []
    } = i ?? {};
    let f = (h == null ? undefined : h.filter(e => e.type === "menu-option").map(e => e.pluginIdentifier)) ?? [];
    let p = h == null ? undefined : h.every(e => e.type === "menu-option" || e.type === "action-bar-item");
    let _ = (h == null ? undefined : h.filter(e => e.type === "tool-button" || e.type === "mode-select").map(e => {
      let {
        valueKey: t,
        type: n,
        pluginIdentifier: i
      } = e;
      return {
        valueKey: t,
        type: n,
        identifier: i
      };
    })) ?? [];
    let v = u ?? {};
    let b = {
      skill: o,
      type: "editor",
      onClickExitButton: () => chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: chatSkillExitEventTracker.EventInputTypes.Click,
        trackParams: v
      }),
      chatId: a,
      scene: l,
      chatType: s,
      trackParams: v,
      expandPopoverRef: c,
      asTool: true
    };
    let S = (f == null ? undefined : f.length) ? reactJsxRuntimeCoreReexport.jsx(eu, {
      ...b,
      list: f,
      children: reactJsxRuntimeCoreReexport.jsx(es, {
        trackParams: v
      })
    }) : undefined;
    if (p) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "relative flex h-36 w-36 items-center justify-center",
        children: S
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r("max-w-full flex-1", "relative flex items-center", S ? "h-36" : "h-32"),
        children: [S, S && reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mx-8 h-16 w-1 bg-dbx-line-10"
        }), reactJsxRuntimeCoreReexport.jsx(ei, {
          list: _,
          modeSelectsItems: m,
          className: "min-w-0 flex-1 gap-4",
          customControl: !d,
          toolButtonProps: b
        })]
      });
    }
  };
  let ed = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnPageReady(() => Promise.all([require.e("semi-form-components") /*id: 49598*/, require.e("sync-input-engine-infra-interactive") /*id: 49765*/]).then(require.bind(require, "chat-input-engine-core") /*id: 769064*/).then(e => ({
    default: e.InputEnginePromptEditorPluginFoundation
  })))), () => null);
  let eh = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([require.e("ui-primitives-utils") /*id: 4603*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("async-input-engine-infra") /*id: 63727*/]).then(require.bind(require, "input-engine-ref-area") /*id: 731253*/).then(e => ({
    default: e.InputEngineReferenceArea
  })))), () => null);
  let em = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([require.e("ui-primitives-utils") /*id: 4603*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("async-input-engine-infra") /*id: 63727*/]).then(require.bind(require, "input-engine-attachment-area") /*id: 865521*/).then(e => ({
    default: e.InputEngineAttachmentArea
  })))), () => null);
  let eg = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([require.e("ui-primitives-utils") /*id: 4603*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("async-input-engine-infra") /*id: 63727*/]).then(require.bind(require, "chat-input-plugin-foundation") /*id: 79648*/).then(e => ({
    default: e.InputEngineTemplatePluginFoundation
  })))), () => null);
  let ef = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([require.e("ui-primitives-utils") /*id: 4603*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("async-input-engine-infra") /*id: 63727*/]).then(require.bind(require, "chat-input-preset-prompt-bar") /*id: 551040*/).then(e => ({
    default: e.FlowChatInputEnginePresetPromptBarFoundation
  })))), () => null);
  let ep = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([require.e("ui-primitives-utils") /*id: 4603*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("async-input-engine-infra") /*id: 63727*/]).then(require.bind(require, "input-engine-send-button") /*id: 174113*/).then(e => ({
    default: e.InputEngineSendButton
  })))), () => reactJsxRuntimeCoreReexport.jsx(chatInputActionButtons.ChatInputActions, {
    disableToSend: true
  }));
  let e_ = e => {};
  let ev = new Promise(e => {
    e_ = e;
  });
  let eb = e => {};
  let eS = new Promise(e => {
    eb = e;
  });
  let eP = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    await Promise.race([flowLayoutStateRunner.runOnInteractive(() => Promise.resolve(true)), ev]);
    let {
      EngineSubmit: e
    } = await require.e("ondemand-submit") /*id: 7410*/.then(require.bind(require, "async-skill-engine-submit-component") /*id: 759834*/);
    eb(true);
    return {
      default: e
    };
  }));
  let eC = e => {
    let {
      guidanceSkillActiveInputMode: t,
      guidanceGenericInputMode: n
    } = chatGuidanceConfigSelector.useChatGuidanceConfig();
    if (e) {
      if (t === chatLauncherConfigHooks.toolBtnLayoutConstants.ToolBtnsBorderLessTop) {
        return "main-tools-top";
      } else {
        return "main-tools-bottom";
      }
    } else if (n === chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine) {
      return "default_one_line";
    } else {
      return "default_two_line";
    }
  };
  let ey = e => {
    let {
      reportParams: t,
      className: n,
      config: i,
      chatId: o,
      chatType: a,
      activeSkillType: l,
      scene: u
    } = e;
    let c = eC(l);
    let {
      inputMinRows: d
    } = chatGuidanceConfigSelector.useChatGuidanceConfig();
    let h = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(null);
    let v = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof performance != "undefined" && typeof performance.mark == "function") {
        performance.mark("TTV_input", {
          detail: {
            version: "inputEngine"
          }
        });
      }
    }, []);
    let {
      onPromptReady: b
    } = function (e) {
      let {
        config: t,
        submitControl: n
      } = e;
      let i = reactCoreLibraryReexport.useRef(false);
      let r = reactCoreLibraryReexport.useRef(false);
      let o = reactCoreLibraryReexport.useRef(false);
      let a = reactCoreLibraryReexport.useRef(false);
      let l = useLatestCallbackHook_1.useLatestCallback(() => {
        if (i.current) {
          return;
        }
        let {
          submitPipeline: e
        } = t;
        if (r.current && o.current && (typeof e != "function" || a.current)) {
          if (typeof performance != "undefined" && typeof performance.mark == "function") {
            performance.mark("TTU_input", {
              detail: {
                version: "inputEngine"
              }
            });
          }
          i.current = true;
        }
      });
      let s = useLatestCallbackHook_1.useLatestCallback(() => {
        r.current = true;
        l();
      });
      reactCoreLibraryReexport.useEffect(() => {
        n.then(() => {
          o.current = true;
          l();
        });
      }, [l, n]);
      reactCoreLibraryReexport.useEffect(() => {
        let e = false;
        let {
          submitPipeline: n
        } = t;
        if (typeof n != "function") {
          a.current = true;
          l();
          return () => {
            e = true;
          };
        } else {
          flowLayoutStateRunner.runOnInteractive(() => n()).then(t => {
            if (!e && t) {
              a.current = true;
              l();
            }
          }).catch(() => {
            if (e) {
              return;
            }
          });
          return () => {
            e = true;
          };
        }
      }, [t, l]);
      return {
        onPromptReady: s
      };
    }({
      config: i,
      submitControl: eS
    });
    let P = chatStoreManager.useStoreSelector("chatInputStore", e => {
      if (l && o) {
        return {
          ...e.skillMap?.[l],
          skill_type: l
        };
      } else {
        return undefined;
      }
    }, deepEqualityUtil.deepEqual);
    let {
      reportParams: y
    } = chatTrackingUtils.buildReportParams({
      chatId: o,
      chatType: a,
      activeSkill: P
    });
    let {
      conversation_type: E,
      chat_type: x
    } = U(o);
    let {
      trackParams: T
    } = chatTrackingUtils.buildTrackParams({
      chatId: o,
      chatType: a,
      activeSkill: P,
      bot_id: chatConstantId.chatConstantId,
      conversation_id: o,
      show_scene: u,
      conversation_type: E,
      chat_type: x
    });
    let L = P == null ? undefined : P.skill_type;
    let O = {
      skill_type: L,
      skill_type_str: skillTypeMappings.formatSkillId(L),
      skill_id: L ? L.toString() : null,
      ...y,
      ...t
    };
    let B = {
      skill_id: T.skill_id,
      skill_name: T.skill_name,
      ...y,
      ...t
    };
    let G = {
      chatId: o,
      skill: P,
      chatType: a,
      scene: u,
      trackParams: T,
      reportParams: O
    };
    let j = reactCoreLibraryReexport.useRef(null);
    let W = useLatestCallbackHook_1.useLatestCallback(async function () {
      var e;
      var t;
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      e_(true);
      await eS;
      if (j != null && (t = j.current) !== null && t !== undefined && (e = t.submit) !== null && e !== undefined) {
        e.call(t, ...i);
      }
    });
    z(v, W);
    autoFocusOnKeypressAndVisibilityChange.useAutoFocusOnKeyPress(v);
    let F = chatInputStoreHelpers.useExtractedText();
    chatSkillChangeHandlers.useChatIdChangeHandler(e => {
      chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(e);
      chatStoreManager.getStore("chatInputStore").setState({
        skillReportEvents: {}
      });
      chatInputStoreHelpers.clearTextValue();
    });
    return reactJsxRuntimeCoreReexport.jsxs(asyncSkillChatContext.ChatInputProvider, {
      value: u,
      children: [reactJsxRuntimeCoreReexport.jsx(eP, {
        ref: j,
        config: i,
        chatId: o,
        scene: u,
        skill: P,
        reportParams: B
      }), c === "default_one_line" && reactJsxRuntimeCoreReexport.jsx(er, {
        ...G,
        autoFold: !!P,
        config: i
      }), reactJsxRuntimeCoreReexport.jsx(k, {
        id: "input-engine-container",
        ref: h,
        className: n,
        mode: i.inputLayoutMode || c,
        onClick: () => {
          var e;
          var t;
          if (v == null) {
            return undefined;
          } else if ((t = v.current) === null || t === undefined) {
            return undefined;
          } else if ((e = t.focus) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(t, {});
          }
        },
        leftTools: reactJsxRuntimeCoreReexport.jsx(ec, {
          ...G,
          autoFold: !!P,
          templatePopoverRef: f,
          config: i
        }),
        customArea: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [i.attachments && reactJsxRuntimeCoreReexport.jsx(em, {
            ...G,
            onSubmit: (e, t) => W(undefined, t),
            attachmentAreaConfig: i.attachments
          }), i.reference && reactJsxRuntimeCoreReexport.jsx(eh, {
            ...G,
            referenceConfig: i.reference
          }), i.presetPrompts && reactJsxRuntimeCoreReexport.jsx(ef, {
            ...G,
            onSubmit: e => W(undefined, e),
            presetPromptConfig: i.presetPrompts
          })]
        }),
        rightSendBtn: reactJsxRuntimeCoreReexport.jsx(ep, {
          ...G,
          onSubmit: W,
          config: i
        }),
        topAnchor: i.template && reactJsxRuntimeCoreReexport.jsx(eg, {
          containerRef: h,
          popoverRef: f,
          ...G
        }),
        placeholderContent: F,
        renderEditor: e => {
          let {
            className: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: r(d === "2" ? "min-h-48" : "min-h-24", "w-full"),
            onClick: e => e.stopPropagation(),
            children: reactJsxRuntimeCoreReexport.jsx(ed, {
              controllerRef: v,
              className: t,
              chatId: o,
              chatType: a,
              onSubmit: W,
              onPromptReady: b,
              promptType: i.prompt,
              trackParams: G.trackParams,
              reportParams: G.reportParams,
              skill: G.skill
            })
          });
        }
      })]
    });
  };
  let eE = e => {
    let {
      className: t,
      ...n
    } = e;
    let i = u();
    let r = i == null ? undefined : i[n.activeSkillType || "generic"];
    let o = reactUseChangedRef.useChangedRef(typeof r == "function" ? r() : r, deepEqualUtil_1.deepEqual);
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(ey, {
        ...n,
        config: o
      });
    } else {
      return null;
    }
  };
  let ex = e => {
    var t;
    let n = (t = e.ready) === null || t === undefined || t;
    let i = e.activeSkillType || "generic";
    let s = u();
    let c = !!(s == null ? undefined : s[i]);
    let {
      cssVar: d,
      renderFallback: h
    } = f(e.activeSkillType);
    let m = n && s ? c ? reactJsxRuntimeCoreReexport.jsx(eE, {
      ...e
    }) : reactJsxRuntimeCoreReexport.jsx(b, {
      ...e
    }) : h();
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      errorBoundaryName: "guidance_input_error",
      logger: loggerServiceCore.defaultLogger,
      errorBoundaryScope: chatTargetTypes.chatTargetTypes.Component,
      fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(e.className, "relative flex flex-col w-full", "min-h-(--input-guidance-input-container-min-height)", "max-h-(--input-guidance-input-container-max-height)", "max-w-(--content-max-width)"),
        style: d,
        children: m
      })
    });
  };
  require.d(exports, {
    ChatInputGuidance: function () {
      return ex;
    }
  });
}