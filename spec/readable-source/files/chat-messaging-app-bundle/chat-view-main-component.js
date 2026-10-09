// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'ChatViewMainComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 912509
         */
module.exports = function (module, exports, require) {
  let r;
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var chatAsrOverlayTab = require("chat-asr-overlay-tab") /*id: 155113*/;
  var routeStoreHook = require("route-store-hook") /*id: 795456*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var debugMessageContext = require("debug-message-context") /*id: 818296*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var messageListComponent = require("message-list-component") /*id: 498508*/;
  var chatLoadMoreObserver = require("chat-load-more-observer") /*id: 213244*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatInputSlotRenderer = require("chat-input-slot-renderer") /*id: 793887*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatGuidanceSidebarSkillHook = require("chat-guidance-sidebar-skill-hook") /*id: 478924*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var flowDebugStatus = require("flow-debug-status") /*id: 553601*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var imChatFlowSelectBar = require("im-chat-flow-select-bar") /*id: 808678*/;
  var flowLayoutStateRunner = require("flow-layout-state-runner") /*id: 358717*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var chatAsrOverlayTabHook = require("chat-asr-overlay-tab-hook") /*id: 440106*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  var businessStatusConstants = require("business-status-constants") /*id: 215311*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var A = {
    "disabled-tips": "disabled-tips-LkKEEq"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  r = e => {
    let {
      chatId: t
    } = e;
    let n = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let r = conversationRateLimit.useConvDisabled();
    let l = chatConversationSelectors.selectConversation(t);
    let i = (l == null ? undefined : l.bot_id) || t;
    let o = botStoreManager.selectBotInfo(i);
    if ((() => {
      let e = (o == null ? undefined : o.bot_mode) === chatEnumConstants.RoleType.subject;
      return !!n && (o == null ? undefined : o.disabled_tag) !== businessStatusConstants.businessStatus.Ban && ((o == null ? undefined : o.disabled_tag) !== businessStatusConstants.businessStatus.Rollback || !e);
    })()) {
      return r;
    } else {
      return {
        isDisabled: false
      };
    }
  };
  let O = function (e) {
    let {
      chatId: t,
      chatType: n
    } = e;
    let {
      isDisabled: l,
      disabledText: i
    } = r({
      chatId: t,
      chatType: n
    });
    if (l) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: A["disabled-tips"],
        children: i
      });
    } else {
      return null;
    }
  };
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageLinkRetriever = require("chat-message-link-retriever") /*id: 186068*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatSkillBarPopover = require("chat-skill-bar-popover") /*id: 325887*/;
  var chatSkillChangeHandlers = require("chat-skill-change-handlers") /*id: 378957*/;
  var chatInputMessageBuilder = require("chat-input-message-builder") /*id: 659934*/;
  var chatInputGuidanceEngine = require("chat-input-guidance-engine") /*id: 956394*/;
  var chatGuidanceConfigSelector = require("chat-guidance-config-selector") /*id: 811136*/;
  let Q = e => {
    let {
      fallback: t = reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-20"
      })
    } = e;
    let {
      matcher: n
    } = chatPluginMatcherRegistry.useFooterDisclaimerMatcher();
    let r = n == null ? undefined : n.map(e => e()).find(e => e !== undefined);
    let {
      plugin: l,
      loading: i
    } = chatPluginIocManager.chatFooterDisclaimerHook(r);
    if (!l || i) {
      return t;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(l.Content, {});
    }
  };
  let J = e => {
    var t;
    var n;
    var r;
    let {
      activeSkillType: l,
      className: i
    } = e;
    let s = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let c = (s == null ? undefined : s.chatId) || "";
    let d = (s == null ? undefined : s.chatType) || chatConversationTypes.ConversationTypes.Conversation;
    let v = chatConversationSelectors.selectConvLink(c, d);
    let p = chatConversationSelectors.selectConversation(c);
    let m = d === chatConversationTypes.ConversationTypes.Conversation && !p;
    let {
      selectSkill: g
    } = chatSkillBarPopover.useSkillSelection({});
    chatSkillChangeHandlers.useChatIdChangeHandler((e, t) => {
      let n = chatMessageLinkRetriever.getRecentMessages(t, 3);
      let r = n == null ? undefined : n[(n == null ? undefined : n.length) - 1];
      if (messageContentTypeAndStatusChecker.ey$(r)) {
        g({
          skillType: r == null ? undefined : r.skill?.skill_type
        });
      }
    });
    let {
      isExpand: _,
      inputPortalTarget: b,
      matchedCanvasPluginIdentifier: y
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isExpand: e.isExpand,
      inputPortalTarget: e.inputPortalTarget,
      matchedCanvasPluginIdentifier: e.matchedCanvasPluginIdentifier
    }), deepEqualityUtil.deepEqual);
    let {
      showAsrOverlayTab: k
    } = chatAsrOverlayTabHook.useAsrOverlayTab();
    let w = k && (!_ || y !== writeArtifactPreviewId.artifactPreviewId);
    let S = () => reactJsxRuntimeCoreReexport.jsx(O, {
      chatId: c,
      chatType: d
    });
    let j = () => v || m ? reactJsxRuntimeCoreReexport.jsx(chatInputGuidanceEngine.ChatInputGuidance, {
      activeSkillType: l,
      chatId: c,
      chatType: d,
      ready: !m,
      scene: "bottom_bar"
    }) : reactJsxRuntimeCoreReexport.jsx(chatInputMessageBuilder.ChatInputComponent, {
      chatId: c,
      chatType: d,
      forceUseChatInputPlugin: true
    });
    let C = () => _ && b ? reactDomEntryWrapper.createPortal(j(), b) : j();
    let M = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.canvasContent);
    let I = chatStoreManager.useStoreSelector("chatInputStore", e => {
      let r = c ? e.activeSkillTypeMap?.[c] : undefined;
      if (r && c) {
        return e.skillMap?.[r];
      } else {
        return undefined;
      }
    });
    let T = {
      chatView: {
        isImmersiveMode: (r = s == null ? undefined : s.isImmersiveMode) !== null && r !== undefined && r
      },
      chatCanvas: {
        ...M
      },
      inputActiveSkill: I
    };
    let {
      matcher: N
    } = chatPluginMatcherRegistry.useSkillBarMatcher();
    let L = N == null ? undefined : N.map(e => e(T)).find(e => e !== undefined);
    let {
      plugin: E,
      loading: Z
    } = chatPluginIocManager.skillBarPluginHook(L);
    let D = () => !E || Z || d === undefined ? null : reactJsxRuntimeCoreReexport.jsx(E.Content, {
      chatId: c,
      chatType: d
    });
    let z = () => reactJsxRuntimeCoreReexport.jsx(Q, {});
    let P = (n = chatGuidanceConfigSelector.useChatGuidanceConfig()) === null || n === undefined ? undefined : (t = n.inputAggregateList) === null || t === undefined ? undefined : t.includes("generic");
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a("w-full max-w-[var(--content-max-width)]", {
          "opacity-20": w
        }, i),
        children: [S == null ? undefined : S(), (!P || !!l) && (D == null ? undefined : D()), C == null ? undefined : C(), z == null ? undefined : z()]
      })
    });
  };
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var conversationCreationAndMonitoring = require("conversation-creation-and-monitoring") /*id: 236233*/;
  var globalEventEmitter = require("global-event-emitter") /*id: 366024*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  let er = () => {
    let {
      toChatPage: e
    } = chatContextUtil.useChatContext();
    reactCoreLibraryReexport.useEffect(() => e == null ? undefined : e({
      replace: true,
      relative: "route"
    }), []);
    return null;
  };
  let el = e => {
    let {
      chatId: t,
      chatType: n
    } = e;
    let r = userInfoStatusSelectors.selectUserInfoSuccess_1();
    useOnUnmountHook.useOnUnmount(() => chatStoreManager.getStore("chatViewCoreStore").setState({
      currentLocalConversationId: ""
    }));
    let {
      scrollRef: l
    } = chatRefsContext.useChatRefs();
    let o = conversationCreationAndMonitoring.createConversationMessages({
      chatType: n
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = async (e, r) => t && n !== chatConversationTypes.ConversationTypes.Conversation ? await o(t, r) : r;
      let r = (e, t) => {
        var n;
        if ((n = l.current) !== null && n !== undefined) {
          n.scrollToBottom();
        }
        return t;
      };
      globalEventEmitter.eventEmitterInstance.on("processMessageBefore", e);
      globalEventEmitter.eventEmitterInstance.on("beforeMessageSending", r);
      return () => {
        globalEventEmitter.eventEmitterInstance.off("processMessageBefore", e);
        globalEventEmitter.eventEmitterInstance.off("beforeMessageSending", r);
      };
    }, [o, t]);
    conversationCreationAndMonitoring.useConversationMonitor(t);
    if (!chatConversationSelectors.selectConvDetail(t) && r) {
      return reactJsxRuntimeCoreReexport.jsx(er, {});
    } else {
      return null;
    }
  };
  let ei = () => null;
  let eo = e => {
    let {
      conversationId: t,
      conversationType: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(el, {
      chatId: t,
      chatType: n
    });
  };
  let es = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      conversationId: n,
      conversationType: r
    } = e;
    let l = chatConversationSelectors.selectConvLink(n, r);
    let [o, s] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      flowLayoutStateRunner.onPageInteractive(s);
    }, []);
    let a = [];
    if (l) {
      a.push({
        Comp: ei,
        withRef: false
      });
    }
    if (r === chatConversationTypes.ConversationTypes.Conversation) {
      a.push({
        Comp: ei,
        withRef: false
      });
    }
    if (r === chatConversationTypes.ConversationTypes.ThreadLocalConversation) {
      a.push({
        Comp: eo,
        withRef: false
      });
    }
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: a.map((n, r) => {
          let {
            Comp: l,
            withRef: o
          } = n;
          if (o) {
            return reactCoreLibraryReexport.createElement(l, {
              ...e,
              ref: t,
              key: r
            });
          } else {
            return reactCoreLibraryReexport.createElement(l, {
              ...e,
              key: r
            });
          }
        })
      });
    } else {
      return null;
    }
  });
  var ea = {
    "slide-up": "slide-up-_jqK4C",
    slideUp: "slide-up-_jqK4C",
    "slide-down": "slide-down-NuAq2D",
    slideDown: "slide-down-NuAq2D",
    "fade-entering": "fade-entering-s4s1pp",
    fadeEntering: "fade-entering-s4s1pp",
    fadein: "fadein-vatgKJ",
    "fade-exiting": "fade-exiting-glKaEs",
    fadeExiting: "fade-exiting-glKaEs",
    fadeout: "fadeout-ZBMLGL",
    "fade-exited": "fade-exited-xyWYmG",
    fadeExited: "fade-exited-xyWYmG",
    "chat-header-placeholder": "chat-header-placeholder-PLJ4fG",
    chatHeaderPlaceholder: "chat-header-placeholder-PLJ4fG"
  };
  let eu = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
    default: await Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("async-after-interactive-event-tracker") /*id: 38237*/]).then(require.bind(require, "chat-page-event-tracker") /*id: 30933*/).then(e => e.EventTracker)
  }))), () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}));
  let ec = reactCoreLibraryReexport.memo(reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: n,
      className: r,
      ...l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("pl-8 pr-0 w-full", "max-dbx-xs:supports-[-webkit-overflow-scrolling:touch]:pr-12"),
      ref: t,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("my-0 w-full mx-auto max-w-(--content-max-width)", "has-[.side-by-side-messages]:mx-0 has-[.side-by-side-messages]:max-w-full"),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: a("w-full", r),
          ...l,
          children: n
        })
      })
    });
  }));
  let ed = e => {
    let {
      conversationId: t,
      conversationType: n
    } = e;
    chatPageInteractiveTracker.useChatPageInitTracker();
    let {
      chatInputRef: r,
      chatViewRef: s
    } = chatRefsContext.useChatRefs();
    let M = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualityUtil.deepEqual);
    let {
      chatId: L
    } = M ?? {};
    let B = routeStoreHook.routeStore(e => e.activeKey);
    let {
      activeSkillType: Z
    } = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return {
        activeSkillType: L ? e.activeSkillTypeMap?.[L] : undefined
      };
    }, deepEqualityUtil.deepEqual);
    let D = chatConversationSelectors.selectConversation(L || "");
    let z = chatGuidanceSidebarSkillHook.useChatGuidanceSidebarSkill(D);
    let P = (z == null ? undefined : z.skill_type) || Z;
    let {
      isExpand: A,
      matchedCanvasPluginIdentifier: O
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isExpand: e.isExpand,
      matchedCanvasPluginIdentifier: e.matchedCanvasPluginIdentifier
    }), deepEqualityUtil.deepEqual);
    let {
      wrapperRef: H,
      asrTabLeftPos: W,
      asrTabWidth: F,
      showAsrOverlayTab: G,
      asrVolume: U,
      asrStartMethod: q,
      asrStatus: K
    } = chatAsrOverlayTabHook.useAsrOverlayTab({
      extraDeps: [A]
    });
    let X = G && (!A || O !== writeArtifactPreviewId.artifactPreviewId);
    let $ = chatFgStoreHooks.getSourceValue("enable_followup", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1";
    let Q = () => {
      chatIocServiceLoaderHook.loadServiceAsync("chatConversationService").then(e => e == null ? undefined : e.refreshConversationInfo({
        conversationId: t,
        scene: "refreshChatView"
      }));
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        if (document.visibilityState === "visible") {
          Q();
        }
      };
      window.addEventListener("visibilitychange", e);
      return () => {
        window.removeEventListener("visibilitychange", e);
      };
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = !userAgentDeviceDetector.isIOS() && B !== (M == null ? undefined : M.chatKey);
      if (e) {
        var t;
        if ((t = r.current) !== null && t !== undefined) {
          t.focus();
        }
      }
      let n = () => {
        if (document.visibilityState === "visible" && e) {
          var t;
          if ((t = r.current) !== null && t !== undefined) {
            t.focus();
          }
        }
      };
      window.addEventListener("visibilitychange", n);
      return () => {
        window.removeEventListener("visibilitychange", n);
      };
    }, [B, M]);
    let {
      loadMore: Y
    } = conversationMessageUtils_2.useClearConversation(t, {
      isLoggedIn: userInfoStatusSelectors.selectUserInfoSuccess()
    });
    reactCoreLibraryReexport.useImperativeHandle(s, () => ({
      onLoadMore: Y,
      syncData: Q
    }), [t]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(eu, {}), reactJsxRuntimeCoreReexport.jsx("div", {
        ref: H,
        className: "flex h-full w-full flex-col items-center",
        children: reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
          children: reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
            in: true,
            timeout: 400,
            appear: chatConversationTypes.ConversationTypes.Conversation !== (M == null ? undefined : M.chatType),
            exit: false,
            children: e => {
              return reactJsxRuntimeCoreReexport.jsxs("div", {
                className: "flex h-full min-h-0 w-full flex-1 flex-col",
                children: [reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a("w-full flex-shrink flex-grow basis-0 min-h-100", "flex items-center flex-col", $ ? a(imChatFlowSelectBar.flowDisableClass, disableSelectBarConst.disableSelectBar) : ""),
                  ...($ ? {
                    ...imChatFlowSelectBar.editorAriaProps
                  } : {}),
                  style: {
                    "--message-message-list-bottom-placeholder-intersect-input-height": "0px"
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(debugMessageContext.DebugMessageProvider, {
                    enableMessageDebug: flowDebugStatus.isDebugEnabled(),
                    children: reactJsxRuntimeCoreReexport.jsx(messageListComponent.MessageListComponent, {
                      className: a(ea[`fade-${e}`], ea["slide-up"], "!transition-none"),
                      conversationId: t,
                      enableLoadMore: n === chatConversationTypes.ConversationTypes.Conversation,
                      LoadMoreSlot: chatLoadMoreObserver.ChatLoadMoreObserver,
                      Container: ec,
                      InnerAfterMessageListSlot: () => null,
                      MessageBeforeSlot: () => null,
                      LargeAvatarSlot: () => null
                    }, (M == null ? undefined : M.chatKey) ?? (M == null ? undefined : M.chatId))
                  })
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a("pointer-events-none relative w-[calc(100%-var(--scrollbar-width,9px))]"),
                  children: reactJsxRuntimeCoreReexport.jsx("div", {
                    className: "absolute inset-x-0 bottom-0 h-20",
                    children: reactJsxRuntimeCoreReexport.jsx("div", {
                      className: a("h-full bg-linear-to-t from-s-color-bg-body to-transparent")
                    })
                  })
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a("pl-16 pr-7 w-[calc(100%-var(--scrollbar-width,9px))] flex-shrink-0"),
                  children: reactJsxRuntimeCoreReexport.jsx(chatInputSlotRenderer.renderChatInputSlot, {
                    chatId: (M == null ? undefined : M.chatId) || "",
                    chatType: (M == null ? undefined : M.chatType) || chatConversationTypes.ConversationTypes.Conversation,
                    chatKey: M == null ? undefined : M.chatKey,
                    ChatInputSlot: null,
                    renderFallback: () => reactJsxRuntimeCoreReexport.jsx(J, {
                      className: a("relative mx-auto rounded-dbx-4xl"),
                      activeSkillType: P
                    })
                  })
                })]
              });
            }
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx(es, {
        conversationId: t,
        conversationType: n
      }), X && reactJsxRuntimeCoreReexport.jsx(chatAsrOverlayTab.AsrOverlayTab, {
        leftCenterPos: W,
        tabWidth: F,
        asrVolume: U,
        asrStartMethod: q,
        asrStatus: K
      })]
    });
  };
  let ef = reactCoreLibraryReexport.memo(function (e) {
    return reactJsxRuntimeCoreReexport.jsx(ed, {
      ...e
    });
  });
  require.d(exports, {
    ChatViewMainComponent: function () {
      return ef;
    }
  });
}