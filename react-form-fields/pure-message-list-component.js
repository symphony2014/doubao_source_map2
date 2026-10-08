// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rx' to 'PureMessageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 42720
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageErrorFallback = require("message-error-fallback") /*id: 428170*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var messageBoxFoundation = require("message-box-foundation") /*id: 238658*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let v = reactCoreLibraryReexport.createContext({
    message: null
  });
  let g = () => {
    let {
      message: e,
      ...t
    } = reactCoreLibraryReexport.useContext(v);
    if (e) {
      return {
        ...t,
        message: e
      };
    } else {
      return {
        ...t,
        message: {
          is_delta: false
        }
      };
    }
  };
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var blockTreeBuilderUtils = require("block-tree-builder-utils") /*id: 600253*/;
  var userEntityTypes = require("user-entity-types") /*id: 193694*/;
  var dotFlashingLoaderComponent = require("dot-flashing-loader-component") /*id: 920732*/;
  var flowApiServiceManagerModules = require("flow-api-service-manager-modules") /*id: 841401*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = () => null;
  let C = e => {
    let {
      message: t,
      inView: n,
      mouseOver: o,
      theme: i,
      contextSceneType: a,
      updateReady: s
    } = e;
    let {
      pluginIdentifier: l,
      plugin: c,
      loading: d,
      duplicateIdentifierList: u
    } = flowApiServiceManagerModules.unknown_2(t);
    if (u.length > 1) {
      let e = Error(`${u.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box",
        error: e
      });
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (!d) {
        s();
      }
    }, [d]);
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx(dotFlashingLoaderComponent.DotFlashingLoader, {});
    }
    if (!c) {
      return null;
    }
    let {
      Content: p = j
    } = c;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-plugin-identifier": String(l),
      className: "flex w-full justify-end",
      children: reactJsxRuntimeCoreReexport.jsx(p, {
        message: t,
        inView: n,
        mouseOver: o,
        contextSceneType: a,
        theme: i
      })
    });
  };
  var messageNodeErrorBoundaryWrapper = require("message-node-error-boundary-wrapper") /*id: 970489*/;
  var messageRenderStatusTracker = require("message-render-status-tracker") /*id: 899708*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var messageStatusContentBlocksMapper = require("message-status-content-blocks-mapper") /*id: 328113*/;
  var chatAbilityTypeUtil = require("chat-ability-type-util") /*id: 964052*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var pluginNodeWrap = require("plugin-node-wrap") /*id: 443134*/;
  let M = () => "flex justify-end";
  let P = e => {
    let {
      pluginIdentifier: t,
      node: n,
      pluginLoadCounter: o,
      inView: i,
      mouseOver: a,
      contextSceneType: s,
      theme: l,
      renderContext: c
    } = e;
    let {
      plugin: d,
      loading: u,
      error: p
    } = chatPluginIocManager.sendMsgNodeHook(t, "THREAD_SHARE");
    let f = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o != null) {
        o(f, u);
      }
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o != null) {
        o(f, u);
      }
      return () => {
        if (o != null) {
          o(f, false);
        }
      };
    }, [f]);
    if (p) {
      throw p;
    }
    if (u) {
      return null;
    }
    let h = pluginNodeWrap.PluginNodeWrap;
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        useDefaultClassName: M,
        plugin: d,
        node: n,
        inView: i,
        contextSceneType: s,
        mouseOver: a,
        theme: l,
        renderContext: c
      });
    } else {
      return null;
    }
  };
  let F = e => ({
    messageNodeRenderConfigs: e.filter(e => !!e.type).map(e => ({
      node: e,
      pluginIdentifier: e.type,
      PluginNodeRender: P
    }))
  });
  let A = e => {
    let {
      message: t,
      inView: n,
      mouseOver: o,
      theme: i,
      contextSceneType: a,
      updateReady: s
    } = e;
    let l = blockTreeBuilderUtils.buildBlockTree(t.content_blocks_v2 || []);
    let {
      renderStatus: c,
      resetRenderStatus: d,
      onMessageNodeRenderError: p
    } = messageRenderStatusTracker.useMessageRenderStatusTracker(t, l, "shared-send");
    let {
      messageNodeRenderConfigs: f
    } = F(l);
    let h = reactCoreLibraryReexport.useMemo(() => ({
      message: t
    }), [t]);
    let m = messageStatusContentBlocksMapper.mapMessageToStatusAndBlocks(t);
    let v = (e, t) => {
      if (!t) {
        s();
      }
    };
    let g = e => {
      s();
      p(e);
    };
    if (f == null ? undefined : f.length) {
      if (l.every(e => c[e.id])) {
        return reactJsxRuntimeCoreReexport.jsx(messageErrorFallback.MessageErrorView, {
          error: Error("message render error"),
          resetErrorBoundary: d
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex w-full flex-col gap-20",
          children: reactJsxRuntimeCoreReexport.jsx(messageContextDefinition.MessageProvider, {
            value: h,
            children: f.map(e => {
              let {
                pluginIdentifier: s,
                PluginNodeRender: l,
                node: c
              } = e;
              return reactJsxRuntimeCoreReexport.jsx(messageNodeErrorBoundaryWrapper.MessageNodeErrorBoundary, {
                node: c,
                scene: "flow-share",
                type: "shared-send",
                onError: g,
                conversationId: t.conversation_id,
                sessionId: t.session_id,
                messageId: t.message_id,
                abilityType: chatAbilityTypeUtil.getChatAbilityType(t),
                llmIntentionDetail: t.ext?.llm_intention_detail,
                children: reactJsxRuntimeCoreReexport.jsx(l, {
                  pluginIdentifier: s,
                  pluginLoadCounter: v,
                  node: c,
                  inView: n,
                  mouseOver: o,
                  contextSceneType: a,
                  theme: i,
                  renderContext: m
                }, c.id)
              }, c.id);
            })
          })
        });
      }
    } else {
      return null;
    }
  };
  let z = e => {
    let {
      inView: n,
      mouseOver: o
    } = e;
    let [i, a] = reactCoreLibraryReexport.useState(false);
    let {
      message: l,
      contextSceneType: c,
      theme: d = "samantha",
      boxBackground: u,
      botType: p
    } = g();
    let f = blockTreeBuilderUtils.useMemoBlockNodes(l.content_blocks_v2 || []);
    let h = blockTreeBuilderUtils.checkBlockTypeMatch(f) ? A : C;
    let m = d === "coco" && !collectionIncludesUtil.includes([userEntityTypes.UserTypes.Coco, userEntityTypes.UserTypes.CocoWeb], p ?? -1);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-theme": d,
      "data-ready": Number(i),
      "data-testid": "message_content",
      "data-message-id": l.message_id,
      className: s("flex flex-row mt-12 justify-end w-full", {
        background: u
      }, m ? "ml-36 !w-[calc(100%-36px)]" : undefined),
      children: reactJsxRuntimeCoreReexport.jsx(h, {
        message: l,
        inView: n,
        updateReady: () => a(true),
        mouseOver: o,
        contextSceneType: c,
        theme: d
      }, l.unique_id ?? l.message_id)
    });
  };
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var L = clipboardCopyHelper;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useCheckedStateHook = require("use-checked-state-hook") /*id: 28538*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  let J = e => {
    if (e == null ? undefined : e.content_blocks_v2?.length) {
      return e.content_blocks_v2[0].block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
    } else if (e == null ? undefined : e.content_blocks?.length) {
      return e.content_blocks[0].block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
    } else {
      return messageContentTypeAndStatusChecker.isLyricsToSongLyric(e) || messageContentTypeAndStatusChecker.G7Q(e);
    }
  };
  let G = e => {
    let {
      message: t,
      enableCopyAction: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let {
      setChecked: o,
      checked: i
    } = useCheckedStateHook.useCheckedState();
    let a = () => {
      if (t && messageContentTypeAndStatusChecker.isLyricsToSongLyric(t)) {
        let e = messageContentUtils.getLyricsText(t);
        L(e || "");
      } else {
        var o;
        if (t.content_blocks_v2?.length === 1 && t.content_blocks_v2[0].block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
          L(((o = t.content_blocks_v2[0].content) === null || o === undefined ? undefined : o.text_block?.text) || "");
        } else if (t.content_blocks?.length === 1 && t.content_blocks[0].block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
          L(t.content_blocks[0].content_obj?.text || "");
        } else {
          let e = t && messageContentUtils.formatMessage(t);
          L((t == null ? undefined : t.tts_content) || (isStringTypeCheck.isString(e) ? e.trimStart() : "") || "");
        }
      }
    };
    if (J(t) && n) {
      return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
        tooltipContent: r("message_long_press_copy"),
        prefix: i ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
          "data-testid": "message_action_icon_checked"
        }) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {}),
        onClick: () => {
          a();
          o();
        }
      });
    } else {
      return null;
    }
  };
  var feedbackModalBase = require("feedback-modal-base") /*id: 462416*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var iconInfoOutline = require("icon-info-outline") /*id: 134147*/;
  let en = e => {
    let {
      reasons: t,
      enableReportAction: n,
      shareId: o,
      sharePlatform: i
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let [s, l] = reactCoreLibraryReexport.useState(false);
    let [c, d] = reactCoreLibraryReexport.useState([]);
    let u = async e => {
      let {
        type: t,
        content: n
      } = e;
      try {
        let e = i === "mobile" ? apiServicesCollection.MessageApiService.MessageShareReport : apiServicesCollection.SamanthaApiService.ReportShare;
        await e({
          share_id: o,
          reason_ids: [t],
          reason_detail: n
        });
        samanthaToastFactory.defaultToast.success({
          content: a("report_success"),
          showClose: false,
          theme: "light"
        });
        l(false);
      } catch {
        samanthaToastFactory.defaultToast.error({
          content: a("notification_system_error_toast"),
          showClose: false,
          theme: "light"
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (t && t.length > 0) {
        d(t.map(e => {
          let {
            id: t,
            name: n
          } = e;
          return {
            text: n || "",
            value: t || 0
          };
        }));
      }
    }, [t, d]);
    if (n && t) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
          prefix: reactJsxRuntimeCoreReexport.jsx(iconInfoOutline.InfoIcon, {}),
          tooltipContent: a("bot_response_report"),
          onClick: () => {
            l(true);
          }
        }), s ? reactJsxRuntimeCoreReexport.jsx(feedbackModalBase.FeedbackModalBase, {
          visible: true,
          title: a("bot_response_report"),
          okText: a("dislike_feedback_submit"),
          cancelText: a("create_bot_cancel"),
          hasCancel: true,
          presetOptions: c,
          placeholder: a("report_reason_text_placeholder"),
          maxTextCount: 500,
          okButtonDisable: true,
          onHide: () => {
            l(false);
          },
          onSubmit: u
        }) : null]
      });
    } else {
      return null;
    }
  };
  var debugMessageContext = require("debug-message-context") /*id: 818296*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var userIcon = require("user-icon") /*id: 978821*/;
  let ea = e => {
    let {
      message: t
    } = e;
    let {
      open: n,
      enableMessageDebug: r
    } = debugMessageContext.useDebugMessage();
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
        className: "mr-12 bg-transparent !text-s-color-text-tertiary min-w-24 h-24 w-fit justify-center items-center !p-2",
        icon: reactJsxRuntimeCoreReexport.jsx(userIcon.UserIcon, {}),
        onClick: () => t && (n == null ? undefined : n({
          message: t,
          showPrompt: messageContentTypeAndStatusChecker.Yns
        }))
      });
    } else {
      return null;
    }
  };
  let es = e => {
    let {
      message: t,
      mouseOver: n,
      enableCopyAction: r,
      reasons: o,
      enableReportAction: i,
      shareId: a,
      sharePlatform: l
    } = e;
    if (messageContentTypeAndStatusChecker.Ioq(t)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s("flex items-center mt-16 flex-row-reverse  gap-12", {
          "opacity-0": !n
        }),
        children: [reactJsxRuntimeCoreReexport.jsx(G, {
          message: t,
          enableCopyAction: r
        }), reactJsxRuntimeCoreReexport.jsx(en, {
          message: t,
          reasons: o,
          enableReportAction: i,
          shareId: a,
          sharePlatform: l
        }), reactJsxRuntimeCoreReexport.jsx(ea, {
          message: t
        })]
      });
    }
  };
  let el = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      theme: o,
      enableCopyAction: i,
      enableReportAction: a,
      reasons: s,
      shareId: l,
      sharePlatform: c
    } = g();
    let {
      plugin: d,
      duplicateIdentifierList: u
    } = flowApiServiceManagerModules.unknown_1(r);
    if (u.length > 1) {
      let e = Error(`${u.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_bottom",
        error: e
      });
    }
    if (!d) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-48"
      });
    }
    let {
      Content: p
    } = d;
    return reactJsxRuntimeCoreReexport.jsx(p, {
      message: r,
      mouseOver: t,
      inView: n,
      actionBarComponentNode: reactJsxRuntimeCoreReexport.jsx(es, {
        message: r,
        mouseOver: t,
        theme: o,
        enableCopyAction: i,
        reasons: s,
        enableReportAction: a,
        shareId: l,
        sharePlatform: c,
        inView: n
      })
    });
  };
  let ec = e => {
    let {
      message: t,
      theme: n,
      boxBackground: o,
      contextSceneType: i,
      enableOnboarding: a,
      enableCopyAction: l,
      enableReportAction: d,
      reasons: u,
      shareId: p,
      sharePlatform: f,
      botType: g
    } = e;
    let b = chatStoreManager.useStoreSelector("chatMessageBoxLayoutStore", e => e.getMessageBoxArea(), deepEqualityUtil.deepEqual);
    let y = reactCoreLibraryReexport.useMemo(() => ({
      message: t,
      theme: n,
      boxBackground: o,
      contextSceneType: i,
      enableOnboarding: a,
      enableCopyAction: l,
      enableReportAction: d,
      reasons: u,
      shareId: p,
      sharePlatform: f,
      botType: g
    }), [t, n, o, i, a, l, d, u, p, f, g]);
    return reactJsxRuntimeCoreReexport.jsx(v.Provider, {
      value: y,
      children: reactJsxRuntimeCoreReexport.jsx(messageBoxFoundation.MessageBoxFoundation, {
        dataAttributes: {
          "data-testid": "send_message"
        },
        className: s("w-full max-w-full s-font-base text-s-color-text-secondary p-0 rounded-s-radius-s bg-transparent", "message-item"),
        inlineEnd: true,
        MessageBoxTopFoundation: null,
        MessageBoxLeftFoundation: null,
        MessageBoxBottomFoundation: b.bottom.visible ? el : null,
        MessageBoxRightFoundation: null,
        MessageBoxCenterFoundation: z
      })
    });
  };
  var messageContextHook = require("message-context-hook") /*id: 30115*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var chatMessagePluginRenderHooks = require("chat-message-plugin-render-hooks") /*id: 781098*/;
  let em = () => null;
  let ev = e => {
    let {
      message: t,
      inView: n,
      mouseOver: o,
      contextSceneType: i,
      theme: a,
      updateReady: l
    } = e;
    let {
      plugin: c,
      pluginIdentifier: d,
      loading: u,
      duplicateIdentifierList: p
    } = chatMessagePluginRenderHooks.useReceiveBoxThreadShare(t);
    if (p.length > 1) {
      let e = Error(`${p.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_box",
        error: e
      });
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (!u) {
        l();
      }
    }, [u]);
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(dotFlashingLoaderComponent.DotFlashingLoader, {});
    }
    if (!c) {
      return null;
    }
    let {
      Content: f = em
    } = c;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-plugin-identifier": String(d),
      className: s("w-full"),
      children: reactJsxRuntimeCoreReexport.jsx(f, {
        message: t,
        inView: n,
        mouseOver: o,
        theme: a,
        contextSceneType: i
      })
    });
  };
  let eg = () => "";
  let eb = e => {
    let {
      pluginIdentifier: t,
      node: n,
      pluginLoadCounter: o,
      inView: i,
      mouseOver: a,
      contextSceneType: s,
      theme: l,
      renderContext: c
    } = e;
    let {
      plugin: d,
      loading: u,
      error: p
    } = chatPluginIocManager.receiveMsgNodeHook(t, "THREAD_SHARE");
    let f = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o != null) {
        o(f, u);
      }
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o != null) {
        o(f, u);
      }
      return () => {
        if (o != null) {
          o(f, false);
        }
      };
    }, [f]);
    if (p) {
      throw p;
    }
    if (u) {
      return null;
    }
    let h = pluginNodeWrap.PluginNodeWrap;
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        useDefaultClassName: eg,
        plugin: d,
        node: n,
        inView: i,
        mouseOver: a,
        contextSceneType: s,
        theme: l,
        renderContext: c
      });
    } else {
      return null;
    }
  };
  let ey = e => ({
    messageNodeRenderConfigs: e.filter(e => !!e.type).map(e => ({
      node: e,
      pluginIdentifier: e.type,
      PluginNodeRender: eb
    }))
  });
  let e_ = e => {
    let {
      message: t,
      inView: n,
      mouseOver: o,
      contextSceneType: i,
      theme: a,
      updateReady: l
    } = e;
    let c = blockTreeBuilderUtils.buildBlockTree(t.content_blocks_v2 || []);
    let {
      renderStatus: d,
      resetRenderStatus: p,
      onMessageNodeRenderError: f
    } = messageRenderStatusTracker.useMessageRenderStatusTracker(t, c, "shared-receive");
    let {
      messageNodeRenderConfigs: h
    } = ey(c);
    let m = reactCoreLibraryReexport.useMemo(() => ({
      message: t
    }), [t]);
    let v = messageStatusContentBlocksMapper.mapMessageToStatusAndBlocks(t);
    let g = (e, t) => {
      if (!t) {
        l();
      }
    };
    let b = e => {
      l();
      f(e);
    };
    if (h == null ? undefined : h.length) {
      if (c.every(e => d[e.id])) {
        return reactJsxRuntimeCoreReexport.jsx(messageErrorFallback.MessageErrorView, {
          error: Error("message render error"),
          resetErrorBoundary: p
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("flex w-full flex-col [&>div:not(:first-child):not(:empty)]:mt-20"),
          children: reactJsxRuntimeCoreReexport.jsx(messageContextDefinition.MessageProvider, {
            value: m,
            children: h.map(e => {
              let {
                pluginIdentifier: s,
                PluginNodeRender: l,
                node: c
              } = e;
              return reactJsxRuntimeCoreReexport.jsx(messageNodeErrorBoundaryWrapper.MessageNodeErrorBoundary, {
                node: c,
                scene: "flow-share",
                type: "shared-receive",
                onError: b,
                conversationId: t.conversation_id,
                sessionId: t.session_id,
                messageId: t.message_id,
                abilityType: chatAbilityTypeUtil.getChatAbilityType(t),
                llmIntentionDetail: t.ext?.llm_intention_detail,
                children: reactJsxRuntimeCoreReexport.jsx(l, {
                  pluginIdentifier: s,
                  pluginLoadCounter: g,
                  node: c,
                  inView: n,
                  mouseOver: o,
                  contextSceneType: i,
                  theme: a,
                  renderContext: v
                }, c.id)
              }, c.id);
            })
          })
        });
      }
    } else {
      return null;
    }
  };
  let ex = e => {
    let {
      message: n,
      inView: r,
      updateReady: o
    } = e;
    let i = n.content_blocks_tree?.children || [];
    let {
      contentBlockRenderConfigs: a
    } = chatMessagePluginRenderHooks.useReceiveContentBlockThreadShare(i);
    if (!(a == null ? undefined : a.length)) {
      return null;
    }
    let s = (e, t) => {
      if (!t) {
        o();
      }
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex w-full flex-col gap-20",
      children: a.map(e => {
        let {
          pluginIdentifier: t,
          PluginContentRender: o,
          block: i,
          duplicateIdentifierList: a
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(o, {
          pluginIdentifier: t,
          pluginLoadCounter: s,
          duplicateIdentifierList: a,
          contentBlock: i,
          message: n,
          inView: r
        }, i.id);
      })
    });
  };
  let ew = e => {
    var t;
    var n;
    let {
      inView: i,
      mouseOver: a
    } = e;
    let [l, c] = reactCoreLibraryReexport.useState(false);
    let {
      message: d,
      theme: u = "samantha",
      contextSceneType: p = "share-conversation",
      botType: f,
      botImageUrl: h,
      botNickName: m
    } = messageContextHook.useMessage();
    let v = u === "coco" && !collectionIncludesUtil.includes([userEntityTypes.UserTypes.Coco, userEntityTypes.UserTypes.CocoWeb], f ?? -1);
    let g = blockTreeBuilderUtils.useMemoBlockNodes(d.content_blocks_v2 || []);
    let x = reactCoreLibraryReexport.useMemo(() => blockTreeBuilderUtils.checkBlockTypeMatch(g) ? "v2" : d.content_blocks_tree ? "v1" : "v0", [g, d]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "mt-12 flex w-full flex-col",
      "data-ready": Number(l),
      children: [v ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mb-4 flex h-17 text-neutral-70",
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          className: "mr-8 h-28 w-28 rounded-full",
          src: xssContentSanitizer.sanitizeUrl(h, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWxwMlp*-zFhMWxZ$W5Ca%1q%jJZekpv-%dOdFZ-%mtNbFpw$EROT2$WbD$PWFJh$0%1NldWZ*tiRXd5T$d4ak0wNW9XakpWZEZsdE9%%k1NMHBz$1RK$2NH%nRWWFJp$jFaNll6SkdibHB%T$dsa%0yZDJX$EpXZFdSSFZubE1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
          })
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "text-12 leading-17",
          children: m
        })]
      }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
        "data-theme": u,
        "data-testid": "message_content",
        "data-message-id": d.message_id,
        style: x === "v2" ? chatThemeStyleConfig.chatThemeConfig[u].cssVar : {},
        className: s("flex flex-row w-full", v ? "ml-36 !w-[calc(100%-36px)]" : undefined, x === "v2" ? (n = chatThemeStyleConfig.chatThemeConfig[u]) === null || n === undefined ? undefined : (t = n.receiveClassNames) === null || t === undefined ? undefined : t.filter(e => userAgentDeviceDetector.isMobileCached() || e !== "!w-fit") : undefined),
        children: reactJsxRuntimeCoreReexport.jsx(x === "v2" ? e_ : x === "v1" ? ex : ev, {
          inView: i,
          updateReady: () => c(true),
          mouseOver: a,
          message: d,
          theme: u,
          contextSceneType: p
        }, d.unique_id ?? d.message_id)
      })]
    });
  };
  let ek = e => {
    let {
      message: t,
      mouseOver: n,
      theme: r,
      enableCopyAction: o,
      reasons: i,
      enableReportAction: a,
      shareId: l,
      sharePlatform: c,
      botType: u
    } = e;
    let p = !messageContentTypeAndStatusChecker.Ioq(t);
    let f = r === "coco" && !collectionIncludesUtil.includes([userEntityTypes.UserTypes.Coco, userEntityTypes.UserTypes.CocoWeb], u ?? -1);
    if (p) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s("flex items-center mt-16 gap-12", {
          "opacity-0": !n
        }, {
          "ml-36": f
        }),
        children: [reactJsxRuntimeCoreReexport.jsx(ea, {
          message: t
        }), reactJsxRuntimeCoreReexport.jsx(en, {
          message: t,
          reasons: i,
          enableReportAction: a,
          shareId: l,
          sharePlatform: c
        }), reactJsxRuntimeCoreReexport.jsx(G, {
          message: t,
          enableCopyAction: o
        })]
      });
    } else {
      return null;
    }
  };
  let eE = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      theme: o,
      enableCopyAction: i,
      enableReportAction: a,
      reasons: s,
      shareId: l,
      sharePlatform: c,
      botType: d
    } = messageContextHook.useMessage();
    let {
      plugin: u,
      duplicateIdentifierList: p
    } = chatMessagePluginRenderHooks.useReceiveBoxBottomPlugin(r);
    if (p.length > 1) {
      let e = Error(`${p.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_bottom",
        error: e
      });
    }
    if (!u) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-48"
      });
    }
    let {
      Content: f
    } = u;
    return reactJsxRuntimeCoreReexport.jsx(f, {
      message: r,
      mouseOver: t,
      inView: n,
      actionBarComponentNode: reactJsxRuntimeCoreReexport.jsx(ek, {
        message: r,
        mouseOver: t,
        theme: o,
        enableCopyAction: i,
        reasons: s,
        enableReportAction: a,
        shareId: l,
        sharePlatform: c,
        inView: n,
        botType: d
      }),
      suggestList: {}
    });
  };
  let ej = e => {
    var t;
    var n;
    var o;
    let {
      message: i,
      theme: a,
      boxBackground: l,
      contextSceneType: d,
      enableOnboarding: u,
      enableCopyAction: p,
      enableReportAction: f,
      reasons: v,
      shareId: g,
      sharePlatform: b,
      botType: _,
      botImageUrl: x,
      botNickName: w
    } = e;
    let k = chatStoreManager.useStoreSelector("chatMessageBoxLayoutStore", e => e.getMessageBoxArea(), deepEqualityUtil.deepEqual);
    let j = blockTreeBuilderUtils.useMemoBlockNodes(i.content_blocks_v2 || []);
    let C = reactCoreLibraryReexport.useMemo(() => {
      return (i == null ? undefined : i.ext?.chat_next) === "1" && blockTreeBuilderUtils.checkBlockTypeMatch(j);
    }, [j, i]);
    let S = (o = (t = (n = CSS).supports) === null || t === undefined ? undefined : t.call(n, "selector(:has(*))")) !== null && o !== undefined && o;
    return reactJsxRuntimeCoreReexport.jsx(messageContextHook.MessageContext.Provider, {
      value: {
        message: i,
        theme: a,
        boxBackground: l,
        contextSceneType: d,
        enableOnboarding: u,
        enableCopyAction: p,
        enableReportAction: f,
        reasons: v,
        shareId: g,
        sharePlatform: b,
        botType: _,
        botImageUrl: x,
        botNickName: w
      },
      children: reactJsxRuntimeCoreReexport.jsx(messageBoxFoundation.MessageBoxFoundation, {
        dataAttributes: {
          "data-testid": "receive_message"
        },
        className: s("w-full max-w-full s-font-base text-s-color-text-secondary p-0 rounded-s-radius-s bg-transparent", "message-item", C && S ? "hidden has-[div[data-plugin-identifier]]:flex" : ""),
        MessageBoxTopFoundation: null,
        MessageBoxLeftFoundation: null,
        MessageBoxBottomFoundation: k.bottom.visible ? eE : null,
        MessageBoxRightFoundation: null,
        MessageBoxCenterFoundation: ew
      })
    });
  };
  let eC = e => {
    let {
      messageLink: t,
      getMessage: n,
      contextSceneType: r,
      theme: o,
      boxBackground: i,
      enableOnboarding: a,
      enableCopyAction: s,
      enableReportAction: l,
      reasons: h,
      shareId: m,
      sharePlatform: v,
      botType: g,
      botImageUrl: b,
      botNickName: y
    } = e;
    let _ = reactUseChangedRef.useChangedRef(n(t), deepEqualityUtil.deepEqual);
    if (!messageContentTypeAndStatusChecker.z_e(_, !a) || !_) {
      return null;
    }
    let x = messageContentTypeAndStatusChecker.Yns(_);
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      errorBoundaryName: "share_message_box_error",
      FallbackComponent: messageErrorFallback.MessageErrorView,
      children: x ? reactJsxRuntimeCoreReexport.jsx(ec, {
        message: _,
        contextSceneType: r,
        theme: o,
        enableCopyAction: s,
        enableReportAction: l,
        reasons: h,
        shareId: m,
        sharePlatform: v,
        botType: g
      }) : reactJsxRuntimeCoreReexport.jsx(ej, {
        message: _,
        contextSceneType: r,
        theme: o,
        enableCopyAction: s,
        enableReportAction: l,
        boxBackground: i,
        reasons: h,
        shareId: m,
        sharePlatform: v,
        botType: g,
        botImageUrl: b,
        botNickName: y
      })
    });
  };
  var scrollViewContext = require("scroll-view-context") /*id: 611454*/;
  let eT = () => typeof document != "undefined" && !!document.querySelector("[data-testid=\"message_content\"]");
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  function eO(e, t) {
    var n = e.length;
    if (n) {
      t += t < 0 ? n : 0;
      if (isValidLengthUtil.isValidLength(t, n)) {
        return e[t];
      } else {
        return undefined;
      }
    }
  }
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  function e$(e, t) {
    if (e && e.length) {
      return eO(e, toIntegerUtil_1.toInteger(t));
    } else {
      return undefined;
    }
  }
  var safePropertyCollectionTransform = require("safe-property-collection-transform") /*id: 539057*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var messageBlockUtils = require("message-block-utils") /*id: 829688*/;
  let eL = "__thread_share_section__";
  let eD = e => (e == null ? undefined : e.type) === "single";
  let eW = e => {
    return safeJsonUtils.safeParse(e == null ? undefined : e.ext?.source_share, undefined);
  };
  let eV = (e, t) => {
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let o = e$(e, r);
      let i = e$(e, r + 1);
      if (!o || !eD(o)) {
        continue;
      }
      let a = [];
      if (messageContentTypeAndStatusChecker.Q5B(t(o.data)) && i && eD(i) && messageContentTypeAndStatusChecker.Q5B(t(i.data))) {
        a.push(o.data, i.data);
        r++;
      } else {
        n.push(o);
        continue;
      }
      if (a.length) {
        n.push({
          type: "block",
          data: a,
          id: `block_${o.data.messageKey || o.data.messageId}`,
          conversationId: ""
        });
      }
    }
    return n;
  };
  let eH = e => ({
    messageLinks: reactCoreLibraryReexport.useMemo(() => {
      return (e == null ? undefined : e.map(e => ({
        messageId: e.message_id || "",
        isLocalMessage: false
      }))) ?? [];
    }, [e == null ? undefined : e.length]),
    getMessage: chatMessageUtils_2_1.getMessageGetter({
      messageMap: safePropertyCollectionTransform.safePropTransform(e, "message_id"),
      localMessageMap: {}
    })
  });
  let eU = (e, t) => {
    let r = genericReduceUtil.genericReduce(e, (e, n) => {
      let o = t(n);
      let i = eW(o)?.share_id ? eL : o == null ? undefined : o.section_id;
      let a = arrayFindLastIndexUtil.findLastIndex(e, e => e.sectionId === i);
      if (~a) {
        e[a].messageLinks.push(n);
        e[a].visibleMessageCount += 1;
      } else {
        e.push({
          sectionId: i,
          visibleMessageCount: 1,
          messageLinks: [n]
        });
      }
      return e;
    }, []);
    let o = r[r.length - 1]?.sectionId || "__EMPTY__";
    let i = [];
    r.forEach((e, n) => {
      var a;
      let {
        sectionId: s,
        visibleMessageCount: l,
        messageLinks: c
      } = e;
      let u = (a = r.at(n + 1)) === null || a === undefined ? undefined : a.messageLinks[0];
      let p = false;
      if (u) {
        let e = t(u);
        p = messageContentTypeAndStatusChecker.Kzj(e);
      }
      let f = !!s && l > 0;
      let h = n === r.length - 1 ? f && !!o && s !== o && !p : f && !p;
      let m = c.map(e => ({
        type: "single",
        data: e,
        id: `real_${e.messageId}`,
        conversationId: ""
      }));
      i.push(...eV(m, t));
      let v = lastElementHelper.getLastElement(i);
      if (h && (!v || !messageBlockUtils.isDividerType(v))) {
        let e;
        if (v) {
          let n = arrayIsArrayUtil.isArray(v.data) ? v.data[v.data.length - 1] : v.data;
          if (n) {
            e = eW(t(n));
          }
        }
        if (s === eL) {
          i.push({
            type: "divider",
            dividerType: "shared",
            id: `divider_${s}`,
            data: {
              sourceShare: e
            }
          });
        } else {
          i.push({
            type: "divider",
            dividerType: "normal",
            id: `divider_${s}`,
            data: null
          });
        }
      }
    });
    return i;
  };
  let eX = e => {
    let {
      messageLinks: t,
      getMessage: n
    } = e;
    return reactCoreLibraryReexport.useMemo(() => (t == null ? undefined : t.length) ? eU(t, n) : [], [t]);
  };
  let eK = Date.now();
  let eJ = {};
  let eG = e => {
    if (typeof window == "object" && !eJ[e]) {
      eJ[e] = true;
      if (e !== "leave_page" || !eJ.list_mount) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "pure_message_list_mount_stage",
          meta: {
            [e]: Date.now() - eK
          }
        });
      }
    }
  };
  var messageSectionDivider = require("message-section-divider") /*id: 822506*/;
  let eQ = e => ({
    ref: reactCoreLibraryReexport.useRef(null),
    controller: {
      scrollTo: emptyExportFunction.emptyFunction,
      scrollToTop: emptyExportFunction.emptyFunction,
      scrollToBottom: emptyExportFunction.emptyFunction,
      getScrollTop: () => 0,
      getScrollBottom: () => 0,
      getContainerHeight: () => 0,
      getContainer: () => document.body,
      refreshAnchor: emptyExportFunction.emptyFunction,
      disableScroll: emptyExportFunction.emptyFunction,
      enableScroll: emptyExportFunction.emptyFunction,
      isNearBottom: emptyExportFunction.emptyFunction
    }
  });
  let e0 = e => {
    let {
      dataList: t,
      children: n,
      className: o
    } = e;
    let {
      ref: i,
      controller: a
    } = eQ({
      reverse: false
    });
    let s = reactCoreLibraryReexport.useCallback(e => {
      let {
        dataList: t,
        children: n
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t.map(e => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
          children: n(e)
        }, e.id))
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewContext.ScrollViewProvider, {
      containerRef: i,
      controller: a,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: o,
        ref: i,
        children: reactJsxRuntimeCoreReexport.jsx(s, {
          dataList: t,
          children: n
        })
      })
    });
  };
  let e1 = onceFunctionFactory.createOnce(() => {
    eG("list_mount");
    performanceStoreHook.usePerformanceStore.getState().addDurationPoint("pure_message_list_mount");
    if (eT()) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "pure_message_list_render_success"
      });
    }
  });
  let e2 = e => {
    let {
      message_list: t
    } = e;
    let {
      messageLinks: n,
      getMessage: o
    } = eH(t);
    let i = eX({
      messageLinks: n,
      getMessage: o
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!(i.length <= 0)) {
        e1();
      }
    }, [i]);
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "pure_message_list_mount"
      });
    }, []);
    return {
      unionMessageList: i,
      inIniting: false,
      rawMessageLinks: n,
      getMessage: o
    };
  };
  let e5 = e => {
    let {
      message_list: t,
      noMore: n,
      overrideChatContext: r,
      contextSceneType: o,
      isEnableDebug: i
    } = e;
    let {
      getMessage: a,
      unionMessageList: l
    } = e2({
      message_list: t,
      noMore: n
    });
    let {
      theme: c,
      displayOptions: d,
      bot: u,
      reasons: p,
      shareId: f,
      sharePlatform: h
    } = chatContextProviders.useThemeContext();
    let m = chatContextProviders.useLatestCallback(a);
    let v = c === "coco-immerse" ? u == null ? undefined : u.dialog_box_hue : undefined;
    return reactJsxRuntimeCoreReexport.jsx(chatContextProviders.ChatRootProvider, {
      getMessage: m,
      overrideChatContext: r,
      isEnableDebug: i,
      children: reactJsxRuntimeCoreReexport.jsx(e0, {
        className: s("message-list-root-sGbbHY", {
          "message-list-root-coco-fWdcUn": c === "coco" || c === "coco-immerse"
        }),
        dataList: l,
        top: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
        bottom: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
        children: e => {
          if (eD(e)) {
            let {
              id: n,
              data: r
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(eC, {
              messageLink: r,
              getMessage: a,
              contextSceneType: o,
              theme: c,
              boxBackground: v,
              enableOnboarding: d == null ? undefined : d.enableOnboarding,
              enableCopyAction: d == null ? undefined : d.enableCopyAction,
              enableReportAction: d == null ? undefined : d.enableReportAction,
              reasons: p,
              shareId: f,
              sharePlatform: h,
              botType: u == null ? undefined : u.bot_type,
              botImageUrl: u == null ? undefined : u.image?.tiny_url,
              botNickName: u == null ? undefined : u.name
            }, n);
          }
          if (messageBlockUtils.isDividerType(e)) {
            let {
              id: t
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(messageSectionDivider.MessageDivider, {
              dividerItem: e
            }, t && `section-divider-${t}`);
          }
          return null;
        }
      })
    });
  };
  let e6 = e => {
    let {
      message_list: t,
      noMore: n,
      displayOptions: r,
      theme: o,
      themeContextedVal: i,
      overrideChatContext: a,
      contextSceneType: s,
      isEnableDebug: l,
      onArtifactCardClick: c
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatContextProviders.ArtifactClickProv, {
      onArtifactCardClick: c,
      children: reactJsxRuntimeCoreReexport.jsx(chatContextProviders.ThemeProvider, {
        theme: o,
        themeContextValue: i,
        displayOptions: r,
        children: reactJsxRuntimeCoreReexport.jsx(e5, {
          message_list: t,
          noMore: n,
          overrideChatContext: a,
          contextSceneType: s,
          isEnableDebug: l
        })
      })
    });
  };
  require.d(exports, {
    PureMessageList: function () {
      return e6;
    }
  });
}