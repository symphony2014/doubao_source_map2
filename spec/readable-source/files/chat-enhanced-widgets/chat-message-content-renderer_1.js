// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WS' to 'getMessageContentData'
// - Renamed export 'rd' to 'ChatMessageContentRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 783136
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var fpsMonitoringHook = require("fps-monitoring-hook") /*id: 510340*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var useInViewHook = require("use-in-view-hook") /*id: 387169*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var dotFlashingLoader = require("dot-flashing-loader") /*id: 887785*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var safariSelectionHighlightHook = require("safari-selection-highlight-hook") /*id: 885774*/;
  var chatResponseTableComponent = require("chat-response-table-component") /*id: 127927*/;
  var idRegistryContext = require("id-registry-context") /*id: 683140*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var markdownPairedSymbolStrongFallbackPlugin = require("markdown-paired-symbol-strong-fallback-plugin") /*id: 419814*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let B = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let n = markdownPairedSymbolStrongFallbackPlugin.usePairedSymbolStrongFallback();
    return reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
      ref: t,
      ...e,
      ...n
    });
  });
  var chatMessageMetaRenderer = require("chat-message-meta-renderer") /*id: 146384*/;
  var wordSelectionToolbarAndCopyHandler = require("word-selection-toolbar-and-copy-handler") /*id: 514544*/;
  var messageCopyHandler = require("message-copy-handler") /*id: 541976*/;
  var messageAnalyticsEventHandlers = require("message-analytics-event-handlers") /*id: 189888*/;
  var useMessageSmoothStuckMonitor = require("use-message-smooth-stuck-monitor") /*id: 432053*/;
  var footnoteLinkType = require("footnote-link-type") /*id: 98049*/;
  var chatSelectionToolbar = require("chat-selection-toolbar") /*id: 365771*/;
  var codeBlockComponentSelector = require("code-block-component-selector") /*id: 346427*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var z = classnamesUtils;
  var flashingIndicatorComponent = require("flashing-indicator-component") /*id: 552709*/;
  let U = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      classname: n,
      message: l
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState(false);
    let [a, s] = reactCoreLibraryReexport.useState();
    let d = reactCoreLibraryReexport.useMemo(() => "academic_Continuously_loading", [l]);
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let u = () => {
      s(setTimeout(() => {
        i(true);
      }, 5000));
    };
    let m = () => {
      if (a) {
        clearTimeout(a);
      }
      i(false);
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      startDeepSearchClock: () => u(),
      updateDeepSearchClock: () => m()
    }));
    return reactJsxRuntimeCoreReexport.jsxs("span", {
      className: "search-custom-indicator",
      children: [reactJsxRuntimeCoreReexport.jsx(flashingIndicatorComponent.FlashingIndicator, {}), reactJsxRuntimeCoreReexport.jsx("span", {
        className: z("text-gcisZh", {
          "opacity-0": !r
        }, n),
        children: c(d)
      })]
    });
  });
  let G = () => [];
  let Q = e => {
    let {
      message: r,
      messageBlockText: i,
      messageBlockMeta: a
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let c = messageContentUtils.getSearchType(r) ?? "";
    let u = (r == null ? undefined : r.ext?.ref_info_data) ? JSON.parse(r.ext.ref_info_data) : [];
    let h = i || messageContentUtils.formatMessage(r, undefined, messageContentTypeAndStatusChecker.VN0(r) ? "" : (r == null ? undefined : r.ext?.default_display_content) || s("chat_unsupported_message_type"));
    let {
      content_type: _
    } = r || {};
    let p = a || r.meta_infos;
    let {
      insertingMetaInfos: v
    } = reactCoreLibraryReexport.useMemo(() => messageContentTypeAndStatusChecker.lpb({
      content_type: _
    }) || messageContentTypeAndStatusChecker.G7Q({
      content_type: _,
      is_delta: false
    }) || a ? {
      insertingMetaInfos: p ? markdownMetaRenderUtils.filterMetaObjects(p) : []
    } : {}, [p, h]);
    return {
      content: h,
      insertingMetaInfos: v,
      searchType: c,
      refInfoData: u
    };
  };
  let K = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var l;
    let {
      customRenderOptions: r,
      message: i,
      ...a
    } = e;
    let s = configSyncLoader.getConfig("chatMessageBoxConfig");
    let d = s == null ? undefined : (l = s.textContent) === null || l === undefined ? undefined : (n = l.getCustomRenderOptions) === null || n === undefined ? undefined : n.call(l, {
      conversationId: i.conversation_id || ""
    });
    let c = reactCoreLibraryReexport.useMemo(() => ({
      ...r,
      ...d
    }), [r, d]);
    return reactJsxRuntimeCoreReexport.jsx(Y, {
      ref: t,
      ...a,
      message: i,
      customRenderOptions: c
    });
  });
  let Y = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var m;
    var M;
    var J;
    let {
      inView: en,
      message: eo,
      messageBlockMeta: el,
      messageBlockText: er,
      messageBlockTextFinish: ei,
      messageBlockTextBroken: ea,
      imageOptions: es,
      customRenderOptions: ed,
      className: ec = ""
    } = e;
    let eu = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: em
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      startFPSRecord: eh,
      stopFPSRecord: e_
    } = fpsMonitoringHook.useFpsMonitorHook({
      eventName: "message_stream_fps"
    });
    let ep = messageContentTypeAndStatusChecker.FFC(eo);
    let ev = ea ?? messageContentTypeAndStatusChecker.vlk(eo);
    let ef = ei ?? chatMessageStatusCheck.isMessageFinished(eo);
    let eg = messageContentTypeAndStatusChecker.hT$(eo);
    let ex = reactCoreLibraryReexport.useRef(null);
    let ek = wordSelectionToolbarAndCopyHandler.useWordSelection(eo == null ? undefined : eo.message_id, eo == null ? undefined : eo.conversation_id);
    let {
      onCopy: ew,
      onFollowUp: eb
    } = wordSelectionToolbarAndCopyHandler.useWordSelectionToolbar(eo);
    safariSelectionHighlightHook.useSafariHighlight(ex, en);
    let ey = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => {
      return {
        flushSmoothCursor: ex.current?.flushSmoothCursor,
        getRootElement: ex.current?.getRootElement
      };
    });
    let eC = ed == null ? undefined : ed.enableCustomIndicator;
    let {
      imageEventCallbacks: eR,
      renderImagePreview: ej
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      conversationId: eo.conversation_id,
      messageId: eo.message_id || "",
      chatType: chatSkillPinTypeDeterminer.determineSkillPinType("", eo.conversation_id),
      conversationType: chatConversationSelectorUtils.getConversationType(eo.conversation_id) || "",
      botId: chatConversationBotId.getConversationBotId(eo.conversation_id) || "",
      skillId: eo == null ? undefined : eo.skill?.skill_id
    }, [], chatCoreConstants.MessageActions.Original);
    let {
      content: eN,
      insertingMetaInfos: eS,
      searchType: eT,
      refInfoData: eE
    } = Q({
      message: eo,
      messageBlockText: er,
      messageBlockMeta: el
    });
    let e$ = (ed == null ? undefined : ed.overrideTextContent) ?? eN;
    let eW = messageAnalyticsEventHandlers.createMessageAnalyticsHandlers({
      message: eo,
      messageTextContent: e$ || ""
    });
    let eZ = reactCoreLibraryReexport.useRef(e$ || "");
    eZ.current = e$ || "";
    reactCoreLibraryReexport.useEffect(() => {
      if (ef) {
        e_({
          message_length: eZ.current.length || 0,
          version: "0"
        });
      } else {
        eh();
      }
    }, [ef]);
    let eM = (e, t) => {
      let {
        skillMap: o
      } = chatStoreManager.getStore("chatInputStore").getState();
      let l = Object.values(o).find(e => {
        return (e == null ? undefined : e.skill_type) === (eo == null ? undefined : eo.skill?.skill_type);
      });
      teaAnalyticsEventTracker.trackEvent(e, {
        bot_id: eo.bot_id,
        message_id: eo.message_id,
        reply_id: eo.reply_id,
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(eo.conversation_id),
        conversation_id: eo.conversation_id,
        conversation_type: chatConversationSelectorUtils.getConversationType(eo.conversation_id),
        skill_id: eo == null ? undefined : eo.skill?.skill_id_no_default,
        search_type: eT,
        skill_name: l == null ? undefined : l.show_name,
        ...t
      });
    };
    let eF = (e, t) => {
      let {
        url: n,
        exts: o,
        openLink: l
      } = t;
      e.preventDefault();
      e.stopPropagation();
      if (o.type === "wiki") {
        teaAnalyticsEventTracker.trackEvent("click_special_soft_link");
        l(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(o.wiki_link || ""));
      } else if (o.type === "normal") {
        if (n == null ? undefined : n.includes(footnoteLinkType.footnoteLinkType)) {
          eP("footnote_link_click");
        }
        l(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(n));
      }
    };
    let eI = e => {
      let t = skillMessageProcessor.skillIdType(eo);
      let n = t ? {
        input_skill: JSON.stringify(t)
      } : {};
      if (em != null) {
        em([{
          text: e,
          reportParams: {
            scene: skillConstantsEnum.SceneType.SCENE_SUGGESTED_PROMPTS
          },
          extraExt: n
        }]);
      }
    };
    let eB = (ed == null ? undefined : (m = ed.useCustomEventCallbacks) === null || m === undefined ? undefined : m.call(ed, {
      message: eo
    })) ?? {};
    let eL = reactCoreLibraryReexport.useMemo(() => ({
      message: eo,
      metaInfos: eS ?? [],
      messageText: e$ ?? "",
      options: {
        isFinishedMessage: ef,
        enableHightLight: true
      },
      onLinkClick: eB.onLinkClick || eF,
      onSendMessage: eI,
      onTrackEvent: eM,
      refInfoData: eE,
      mdBoxRef: ex
    }), [eS, e$, ef, eE]);
    let eD = reactCoreLibraryReexport.useMemo(() => {
      if (isUndefinedCheck.isUndefined(e$) || e$ === "" && (eS == null ? undefined : eS.length) === 0) {
        return [];
      } else {
        return ((ed == null ? undefined : ed.getInitialReplacementElements) ?? chatMessageMetaRenderer.renderMessageMeta)(eL);
      }
    }, [eL, ed == null ? undefined : ed.getInitialReplacementElements]);
    let eO = ((ed == null ? undefined : ed.useCustomReplacementElements) || G)(eL);
    let eP = e => {
      teaAnalyticsEventTracker.trackEvent(e, {
        message_id: eo.message_id,
        bot_id: eo.bot_id,
        conversation_id: eo.conversation_id
      });
    };
    let eH = reactCoreLibraryReexport.useRef(null);
    let eX = idRegistryContext.useIdRegistered(eo.message_id ?? "", en);
    let {
      inView: eq
    } = useInViewHook.useInView({
      ref: () => {
        var e;
        return ((e = ex.current) === null || e === undefined ? undefined : e.getRootElement()) ?? null;
      }
    });
    messageCopyHandler.useMessageCopyHandler({
      messageId: eo.message_id,
      message: eo,
      markdown: e$ || "",
      extraParams: ed == null ? undefined : ed.rightClickCopyReportParams
    });
    let {
      onTextUpdate: eA,
      onFinish: eJ
    } = useMessageSmoothStuckMonitor.useMessageStuckMonitor({
      conversationId: eo.conversation_id,
      extraEventParams: {
        message_id: eo.message_id,
        bot_id: eo.bot_id,
        conversation_id: eo.conversation_id,
        skill_id: eo == null ? undefined : eo.skill?.skill_id,
        llm_intention: eo == null ? undefined : (M = eo.verbose) === null || M === undefined ? undefined : M.seed_intention?.intention,
        llm_intention_detail: eo == null ? undefined : (J = eo.verbose) === null || J === undefined ? undefined : J.seed_intention?.detail,
        total_length: e$ == null ? undefined : e$.length,
        is_nova: (eo == null ? undefined : eo.local_info?.from) === chatCoreConstants.ChatSourceTypes.SamanthaChat
      }
    });
    let ez = (ed == null ? undefined : ed.getCodebarConfig) ?? ((e, t) => {
      var o;
      let {
        codeBlocks: l
      } = e;
      let {
        isFinished: r,
        isFailed: i,
        isBroken: a
      } = t;
      let s = l.at(0)?.language;
      let d = (o = l.at(0)) === null || o === undefined ? undefined : o.code.trim();
      if ((!s && !d || s) && !d && "compute".startsWith(s ?? "") || d && s === "compute") {
        return {
          finished: r || i || a,
          defaultExpand: false,
          showCodeBar: true,
          expandedFinishedText: eu("deepResearch_tool_genCode_done"),
          unExpandFinishedText: eu("deepResearch_tool_genCode_done"),
          codeBarLoadingText: eu("deepResearch_tool_genCode"),
          compact: true
        };
      } else {
        return {
          finished: r || i || a,
          showCodeBar: false
        };
      }
    });
    let eV = {
      Indicator: eC ? () => reactJsxRuntimeCoreReexport.jsx(U, {
        ref: eH,
        message: eo
      }) : undefined,
      CodeBlock: reactCoreLibraryReexport.useCallback(e => {
        return reactJsxRuntimeCoreReexport.jsx(codeBlockComponentSelector.CodeBlockSplitter, {
          ...e,
          ...((ed == null ? undefined : ed.customSlotsProps?.CodeBlock) ?? {}),
          message: eo,
          hideDownload: ed == null ? undefined : ed.hideDownload,
          onDownload: ed == null ? undefined : ed.onDownload,
          customHandleEnterFullscreen: ed == null ? undefined : ed.customHandleEnterFullscreen,
          viewOnly: ed == null ? undefined : ed.viewOnly
        });
      }, [eo == null ? undefined : eo.message_id]),
      Table: reactCoreLibraryReexport.useCallback(e => reactJsxRuntimeCoreReexport.jsx(chatResponseTableComponent.ChatResponseTable, {
        ...e,
        message: eo
      }), [eo]),
      ...((ed == null ? undefined : ed.customSlots) ?? {})
    };
    if (eo && (!ep || e$)) {
      if (isUndefinedCheck.isUndefined(e$) || e$ === "" && eD.length === 0 && (eO == null ? undefined : eO.length) === 0) {
        if (ev) {
          return null;
        } else {
          return reactJsxRuntimeCoreReexport.jsx(dotFlashingLoader.DotFlashing, {});
        }
      } else {
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(B, {
            className: ec,
            ref: ex,
            theme: "samantha",
            mode: ey ? "dark" : "light",
            imageOptions: {
              forceHttps: true,
              ...(es ?? {
                responsiveNaturalSize: {
                  maxWidth: Infinity,
                  maxHeight: 600
                }
              })
            },
            markDown: e$,
            eventCallbacks: {
              onImageRender: e => {
                let {
                  src: t
                } = e;
                if (t) {
                  eR.onImageRender(t);
                }
              },
              onImageClick: (e, t) => {
                let {
                  src: n
                } = t;
                if (n) {
                  eR.onImageClick(e, n);
                }
              },
              onLinkClick: eF,
              onLinkRender: e => {
                var t;
                if ((t = e.url) === null || t === undefined ? undefined : t.includes(footnoteLinkType.footnoteLinkType)) {
                  eP("footnote_link_show");
                }
              },
              onSendMessage: eI,
              onCopyCodeBlock: eW.clickCodeBarCopyEvent,
              onCodeBarExpandChange: eW.clickCodeDetailButtonEvent,
              onCodeBlockShowEvent: eW.codeBlockShowEvent,
              onCodeBarMounted: eW.codeBarShowEvent,
              ...eB
            },
            showEllipsis: ev || ep,
            showIndicator: !ef && !ep,
            autoFixSyntax: (eX || eq) && {
              autoFixEnding: !ef || ev,
              imageEmphasisTitle: true
            },
            smooth: {
              enable: !ef,
              maxFirstTextSmoothSize: eg ? 9999 : 10,
              onUpdate: e => {
                var t;
                var n;
                let {
                  text: o
                } = e;
                if ((t = eH.current) !== null && t !== undefined) {
                  t.updateDeepSearchClock();
                }
                eA(o);
                if ((n = eH.current) !== null && n !== undefined) {
                  n.startDeepSearchClock();
                }
              },
              onSmoothFinished: () => {
                eJ();
              },
              onTextBreak: e => {
                var n;
                let {
                  prevText: o,
                  currentText: l
                } = e;
                loggerServiceCore.defaultLogger.persist.warning({
                  eventName: "message_text_break_change",
                  meta: {
                    prevText: o,
                    currentText: l,
                    is_immersive_mode: ((n = chatStoreManager.getStoreState("chatViewCoreStore")) === null || n === undefined ? undefined : n.currentChatViewConfig?.isImmersiveMode) ? "1" : "0"
                  }
                });
              }
            },
            slots: eV,
            insertedElements: [...eO, ...eD],
            autoFitRTL: localeDirectionCheck.isRtlLanguage(),
            onHop: e => {
              let {
                prevRenderedText: t,
                renderedText: n,
                prevEndNodeType: o,
                endNodeType: l
              } = e;
              teaAnalyticsEventTracker.trackEvent("rd_flow_message_hop", {
                message_id: eo.message_id,
                end_syntax_type: l,
                prev_end_syntax_type: o,
                platform: "web",
                reduce_char_count: t.length - n.length
              });
            },
            codeBarConfig: e => ez(e, {
              isFinished: ef,
              isBroken: ev,
              isFailed: ep
            }),
            translate: {
              copyTitle: eu("message_long_press_copy"),
              codeBarLoadingText: eu("code_block_compute_switch_button_generating"),
              codeBarExpandedFinishedText: eu("code_block_switch_button_hide_details"),
              codeBarUnExpandFinishedText: eu("code_block_switch_button_show_details")
            },
            forceBrInterSpacing: true,
            enhancedCopy: true,
            customLink: e => !urlParamUtils.isSpecialProtocol(e),
            footnote: false,
            enabledHtmlTags: ["doubaocanvas"],
            renderHtml: e => {
              let {
                tagName: t,
                children: n
              } = e;
              if (t === "doubaocanvas") {
                return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
                  children: n
                });
              }
            },
            "data-testid": "message_text_content"
          }), ej(), (ek == null ? undefined : ek.visible) && reactJsxRuntimeCoreReexport.jsx(chatSelectionToolbar.ChatSelectToolbar, {
            ...ek,
            onCopy: ew,
            onFollowUp: eb
          })]
        });
      }
    } else {
      return null;
    }
  });
  require.d(exports, {
    getMessageContentData: function () {
      return Q;
    },
    ChatMessageContentRenderer: function () {
      return K;
    }
  });
}