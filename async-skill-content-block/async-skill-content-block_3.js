// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yC' to 'AsyncSkillContentBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 429067
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var searchCanvasServiceHook = require("search-canvas-service-hook") /*id: 583489*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var chatDeepSearchErrorRetry = require("chat-deep-search-error-retry") /*id: 718314*/;
  var searchReferenceContentBlock = require("search-reference-content-block") /*id: 583262*/;
  var asyncSkillReceiveMessageAction_2 = require("async-skill-receive-message-action_2") /*id: 169033*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = e => {
    var i;
    var r;
    let {
      contentBlock: c,
      message: h,
      isLatestBlock: v
    } = e;
    let _ = chatMessageStatusCheck.isMessageFinished(h);
    let y = c == null ? undefined : c.text;
    let w = !v || chatMessageStatusCheck.isMessageFinished(h);
    let C = !!v && messageContentTypeAndStatusChecker.vlk(h);
    let S = (c == null ? undefined : c.search_references) || [];
    let T = {
      has_more: false,
      query_params: {
        text_card: [{
          offset: 0,
          search_type: "text_card",
          search_id: "",
          has_more: true
        }]
      },
      search_result: {
        text_card: {
          card_list: S.map(e => e.text_card).filter(Boolean)
        },
        video_card: {
          card_list: S.map(e => e.video_card).filter(Boolean)
        }
      },
      ext: {
        search_url_web: ""
      }
    };
    let {
      meta_infos: R = []
    } = c || {};
    let E = safeJsonUtils.safeParse((h == null ? undefined : h.ext?.search_tags) ?? "[]", []);
    let $ = E.length ? E : (h == null ? undefined : h.content_obj?.tags) ?? [];
    let j = T == null ? undefined : (r = T.query_params) === null || r === undefined ? undefined : (i = r.text_card) === null || i === undefined ? undefined : i.map(e => {
      return e.query ?? "";
    }).filter(Boolean);
    return {
      meta: R,
      textContent: y ?? "",
      textFinish: w,
      textBroken: C,
      searchType: searchSkillTypes.searchSkillTypes.SimpleSearch,
      searchReferenceData: T,
      isTextMessageFinished: _,
      searchTagMeta: {
        tagList: $,
        queryTextList: j
      },
      onTrackEvent: (e, t) => {
        var n;
        if (!(h == null ? undefined : h.conversation_id)) {
          return;
        }
        let o = (n = conversationMessageUtils_1.filterReplyLinks(chatMessageStoreFactory.createMessageStore.getState(), h)) === null || n === undefined ? undefined : n.find(e => (e == null ? undefined : e.message_id) !== h.message_id);
        teaAnalyticsEventTracker.trackEvent(e, {
          bot_id: h == null ? undefined : h.bot_id,
          message_id: String(h == null ? undefined : h.message_id),
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", h == null ? undefined : h.conversation_id),
          conversation_id: h == null ? undefined : h.conversation_id,
          conversation_type: chatConversationSelectorUtils.getConversationType(h == null ? undefined : h.conversation_id),
          skill_id: o == null ? undefined : o.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(o == null ? undefined : o.skill?.skill_type_no_default),
          search_type: searchSkillTypes.searchSkillTypes.SimpleSearch,
          ...t
        });
      },
      onReportMessageShowError: e => {
        let {
          reason: t
        } = e;
        messageErrorHandler.handleMessageShowError({
          message: h,
          reason: t
        });
      }
    };
  };
  let j = e => {
    var n;
    let {
      inView: u,
      meta: p,
      searchType: m,
      message: f,
      textContent: g,
      textFinish: b,
      textBroken: k,
      isTextMessageFinished: x,
      searchReferenceData: $,
      onTrackEvent: j,
      searchTagMeta: I,
      onReportMessageShowError: P
    } = e;
    if (!f) {
      return null;
    }
    let N = messageContentTypeAndStatusChecker.xsI(f);
    let [O, A] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.canvasStatus, e.thirdPageSidePanel], deepEqualityUtil_1.isDeepEqual);
    let {
      userSeleteStatus: M = false
    } = O ?? {};
    let L = reactCoreLibraryReexport.useRef(null);
    let B = messageContentTypeAndStatusChecker.f8g(f);
    let Z = !!g || messageContentTypeAndStatusChecker.R6A(f);
    let F = messageContentTypeAndStatusChecker.lcM(f) || messageContentTypeAndStatusChecker.qOw(f);
    let {
      searchReferenceInAll: W
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        sources: e
      } = aiChatSourceExtractor.extractChatSources($ == null ? undefined : $.search_result, []);
      return {
        searchReferenceInAll: e
      };
    }, [$]);
    let [D, V, z] = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => [e.isExpand, e.matchedCanvasPluginIdentifier, e.messageId], deepEqualityUtil_1.isDeepEqual);
    let H = B && !(f == null ? undefined : f.think_reason_is_hide);
    let {
      onOpenSearchCanvas: X
    } = searchCanvasServiceHook.useSearchCanvas({
      searchType: m,
      messageReplyId: f == null ? undefined : f.reply_id,
      conversationId: f == null ? undefined : f.conversation_id,
      isAutoOpen: M,
      isInSearch: !x,
      referenceInAll: W,
      referenceInUsed: [],
      useDeepThinking: B,
      isAutoOpenCanvasInNarrow: true,
      onTrackEvent: j
    });
    let U = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 800
    });
    let K = U !== "md" && U !== "sm" && V !== "write-artifact-preview" && (!A.visible || !A.webviewInfo?.autoOpen);
    reactCoreLibraryReexport.useEffect(() => {
      if (!B) {
        (() => {
          try {
            if (W && W.length > 0 && !x && D && K && V === "receive-search-result-canvas" && z !== (f == null ? undefined : f.reply_id)) {
              var e;
              X();
              if (L != null && (e = L.current) !== null && e !== undefined) {
                e.updateRedNoteStatus();
              }
            }
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.warning({
              eventName: "get_search_sider_status_error"
            });
          }
        })();
      }
    }, [W]);
    let J = reactCoreLibraryReexport.useRef(null);
    useElementMountMonitor.useElementMountMonitor({
      inView: u,
      reportOnInView: true,
      enable: Z,
      getElement: () => {
        var e;
        if ((e = J.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.getRootElement();
        }
      },
      checkMessageShowError: e => messageErrorHandler.checkImageLoadStatus({
        ...e,
        hasImage: messageContentTypeAndStatusChecker.t2s(f),
        defaultNaturalHeight: 192,
        defaultNaturalWidth: 256
      }),
      onError: e => P == null ? undefined : P({
        ...e,
        from: "search_receive_images"
      })
    });
    let G = messageContentTypeAndStatusChecker.iFC(f);
    let q = f == null ? undefined : (n = f.meta_infos) === null || n === undefined ? undefined : n.some(e => e.type === chatMessageTypes.MetaType.WebDocReference);
    useElementMountMonitor.useElementMountMonitor({
      enable: Z,
      getElement: () => {
        var e;
        if ((e = J.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.getRootElement();
        }
      },
      checkMessageShowError: e => {
        let {
          element: t,
          onError: n
        } = e;
        if (G) {
          let e = false;
          let i = t.querySelectorAll("[data-validate-id=video-box-bg-image]");
          if (i.length === 0) {
            if (n != null) {
              n({
                reason: "search_video_render_error"
              });
            }
          } else {
            i.forEach(t => {
              let n = t.getAttribute("data-complete");
              let i = t.getAttribute("data-natural-width");
              let r = t.getAttribute("data-natural-height");
              if (n === "true" && i && Number(i) && r && Number(r)) {
                e = true;
              }
            });
            if (!e && n != null) {
              n({
                reason: "search_all_video_bg_image_load_error"
              });
            }
          }
        }
        if (q && t.querySelectorAll("[data-validate-id=ref_content_circle]").length === 0) {
          if (n != null) {
            n({
              reason: "search_ref_content_render_error"
            });
          }
        }
      },
      onError: e => P == null ? undefined : P({
        ...e,
        from: "search_receive_videos"
      })
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(asyncSkillReceiveMessageAction_2.AsyncSkillReceiveMessageAction, {
        hidden: !H,
        message: f,
        searchType: m,
        onTrackEvent: j,
        searchReferenceData: $
      }), Z && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        ref: J,
        inView: u,
        message: f,
        messageBlockText: g,
        messageBlockMeta: p,
        messageBlockTextFinish: b,
        messageBlockTextBroken: k,
        customRenderOptions: {
          enableCustomIndicator: F
        }
      }), reactJsxRuntimeCoreReexport.jsx(searchReferenceContentBlock.SearchRefContent, {
        ref: L,
        searchType: m,
        searchTagMeta: I,
        conversationId: (f == null ? undefined : f.conversation_id) ?? "",
        searchReferenceData: $,
        onTrackEvent: j,
        message: f
      }), N && reactJsxRuntimeCoreReexport.jsx(chatDeepSearchErrorRetry.DeepSearchErrorRetry, {
        message: f
      })]
    });
  };
  let I = e => {
    let {
      inView: t,
      message: n
    } = e;
    let {
      meta: i,
      textContent: r,
      textFinish: o,
      textBroken: l,
      searchType: a,
      searchReferenceData: s,
      isTextMessageFinished: c,
      searchTagMeta: d,
      onTrackEvent: u,
      onReportMessageShowError: p
    } = $(e);
    return reactJsxRuntimeCoreReexport.jsx(j, {
      meta: i,
      inView: t != null && t,
      textContent: r,
      textFinish: o,
      textBroken: l,
      message: n,
      searchTagMeta: d,
      searchReferenceData: s,
      isTextMessageFinished: c,
      searchType: a,
      onTrackEvent: u,
      onReportMessageShowError: p
    });
  };
  require.d(exports, {
    AsyncSkillContentBlock: function () {
      return I;
    }
  });
}