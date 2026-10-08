// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ai' to 'useSearchMessageData'
// - Renamed export 'cP' to 'SearchReceiveMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 98627.0a5ac666.js
         * chunkId: 98627
         * moduleId: 543703
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var searchCanvasServiceHook = require("search-canvas-service-hook") /*id: 583489*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var getBotChatIdOrSession = require("get-bot-chat-id-or-session") /*id: 429156*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var searchSkillMessageUtils = require("search-skill-message-utils") /*id: 67970*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var searchReferenceContentBlock = require("search-reference-content-block") /*id: 583262*/;
  var asyncSkillReceiveMessageAction_2 = require("async-skill-receive-message-action_2") /*id: 169033*/;
  var chatDeepSearchErrorRetry = require("chat-deep-search-error-retry") /*id: 718314*/;
  var asyncSkillContentBlock = require("async-skill-content-block") /*id: 372101*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = [aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchCard, chatMessageTypes.ContentType.Widget];
  let I = e => {
    var s;
    let {
      inView: d,
      searchType: p,
      message: v,
      isTextMessageFinished: g,
      searchReferenceData: y,
      enableOpenCanvas: b = true,
      onTrackEvent: w,
      searchTagMeta: x,
      onReportMessageShowError: R
    } = e;
    let T = asyncSkillContentBlock.skillContentBlock.enableOpenCanvas ?? b;
    if (!v) {
      return null;
    }
    let E = messageContentTypeAndStatusChecker.xsI(v);
    let [j, I] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.canvasStatus, e.thirdPageSidePanel], deepEqualityUtil_1.isDeepEqual);
    let {
      userSeleteStatus: A = false
    } = j ?? {};
    let Z = reactCoreLibraryReexport.useRef(null);
    let M = messageContentTypeAndStatusChecker.f8g(v);
    let F = !!(v == null ? undefined : v.content_obj?.text) || messageContentTypeAndStatusChecker.R6A(v);
    let W = !(v == null ? undefined : v.content_obj?.text) && messageContentTypeAndStatusChecker.R6A(v);
    let B = messageContentTypeAndStatusChecker.lcM(v) || messageContentTypeAndStatusChecker.qOw(v);
    let z = (y == null ? undefined : y.copilot) ? y : y == null ? undefined : y.search_result;
    let {
      searchReferenceInAll: K
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        sources: e
      } = aiChatSourceExtractor.extractChatSources(z, []);
      return {
        searchReferenceInAll: e
      };
    }, [y]);
    let [H, U, V] = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => [e.isExpand, e.matchedCanvasPluginIdentifier, e.messageId], deepEqualityUtil_1.isDeepEqual);
    let J = M && !(v == null ? undefined : v.think_reason_is_hide);
    let {
      onOpenSearchCanvas: G
    } = searchCanvasServiceHook.useSearchCanvas({
      searchType: p,
      messageReplyId: v == null ? undefined : v.reply_id,
      conversationId: v == null ? undefined : v.conversation_id,
      isAutoOpen: A,
      isInSearch: !g,
      referenceInAll: K,
      referenceInUsed: [],
      useDeepThinking: M,
      isAutoOpenCanvasInNarrow: true,
      onTrackEvent: w
    });
    let X = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 800
    });
    let q = X !== "md" && X !== "sm" && T && U !== "write-artifact-preview" && (!I.visible || !I.webviewInfo?.autoOpen);
    reactCoreLibraryReexport.useEffect(() => {
      if (!M) {
        (() => {
          try {
            if (K && K.length > 0 && !g && H && q && U === "receive-search-result-canvas" && V !== (v == null ? undefined : v.reply_id)) {
              var e;
              G();
              if (Z != null && (e = Z.current) !== null && e !== undefined) {
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
    }, [K]);
    let Q = reactCoreLibraryReexport.useRef(null);
    useElementMountMonitor.useElementMountMonitor({
      inView: d,
      reportOnInView: true,
      enable: F,
      getElement: () => {
        var e;
        if ((e = Q.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.getRootElement();
        }
      },
      checkMessageShowError: e => messageErrorHandler.checkImageLoadStatus({
        ...e,
        hasImage: messageContentTypeAndStatusChecker.t2s(v),
        defaultNaturalHeight: 192,
        defaultNaturalWidth: 256
      }),
      onError: e => R == null ? undefined : R({
        ...e,
        from: "search_receive_images"
      })
    });
    let Y = messageContentTypeAndStatusChecker.iFC(v);
    let ee = v == null ? undefined : (s = v.meta_infos) === null || s === undefined ? undefined : s.some(e => e.type === chatMessageTypes.MetaType.WebDocReference);
    useElementMountMonitor.useElementMountMonitor({
      enable: F,
      getElement: () => {
        var e;
        if ((e = Q.current) === null || e === undefined) {
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
        if (Y) {
          let e = false;
          let r = t.querySelectorAll("[data-validate-id=video-box-bg-image]");
          if (r.length === 0) {
            if (n != null) {
              n({
                reason: "search_video_render_error"
              });
            }
          } else {
            r.forEach(t => {
              let n = t.getAttribute("data-complete");
              let r = t.getAttribute("data-natural-width");
              let i = t.getAttribute("data-natural-height");
              if (n === "true" && r && Number(r) && i && Number(i)) {
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
        if (ee && t.querySelectorAll("[data-validate-id=ref_content_circle]").length === 0) {
          if (n != null) {
            n({
              reason: "search_ref_content_render_error"
            });
          }
        }
      },
      onError: e => R == null ? undefined : R({
        ...e,
        from: "search_receive_videos"
      })
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(asyncSkillReceiveMessageAction_2.AsyncSkillReceiveMessageAction, {
        message: v,
        hidden: !J,
        searchType: p,
        onTrackEvent: w,
        searchReferenceData: y
      }), F && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        ref: Q,
        inView: d,
        message: v,
        messageBlockText: undefined,
        messageBlockTextBroken: undefined,
        messageBlockTextFinish: undefined,
        customRenderOptions: {
          enableCustomIndicator: B,
          ...(W ? {
            overrideTextContent: ""
          } : {})
        }
      }), reactJsxRuntimeCoreReexport.jsx(searchReferenceContentBlock.SearchRefContent, {
        ref: Z,
        searchType: p,
        searchTagMeta: x,
        conversationId: v.conversation_id || "",
        searchReferenceData: y,
        enableOpenCanvas: T,
        onTrackEvent: w,
        message: v
      }), E && reactJsxRuntimeCoreReexport.jsx(chatDeepSearchErrorRetry.DeepSearchErrorRetry, {
        message: v
      })]
    });
  };
  let A = e => {
    var r;
    var i;
    let {
      message: c
    } = e;
    let h = getBotChatIdOrSession.getBotChatIdOrSession();
    let {
      searchReferenceData: m,
      searchType: _,
      isTextMessageFinished: S,
      meta: k
    } = chatMessageStoreFactory.createMessageStore(e => {
      var o;
      let a;
      let l = conversationMessageUtils_1.findMessageById(e, c.conversation_id || "", (c == null ? undefined : c.reply_id) || "");
      let s = chatMessageStatusCheck.isMessageFinished(c);
      let h = (c == null ? undefined : c.content_obj?.search_references) || [];
      let p = {
        has_more: false,
        query_params: {
          text_card: [{
            query: (l == null ? undefined : l.content_obj?.text) ?? "",
            offset: 0,
            search_type: "text_card",
            search_id: "",
            has_more: true
          }]
        },
        queries: (c == null ? undefined : c.content_obj?.queries) || [],
        search_result: {
          text_card: {
            card_list: h.map(e => e.text_card).filter(Boolean)
          },
          video_card: {
            card_list: h.map(e => e.video_card).filter(Boolean)
          }
        },
        ext: {
          search_url_web: ""
        }
      };
      let f = searchSkillTypes.searchSkillTypes.SimpleSearch;
      if (c && (a = (o = conversationMessageUtils_1.filterReplyLinks(chatMessageStoreFactory.createMessageStore.getState(), c)) === null || o === undefined ? undefined : o.find(e => (e == null ? undefined : e.message_id) !== c.message_id && !localRegenCheck.shouldRegenerate(e)))) {
        f = searchSkillMessageUtils.determineSearchSkillType(a);
      }
      let {
        meta_infos: m = []
      } = c || {};
      return {
        meta: m,
        message: c,
        searchType: f,
        isTextMessageFinished: s,
        searchReferenceData: (a == null ? undefined : a.content_type) && !j.includes(a.content_type) ? a.content_obj : p
      };
    }, deepEqualUtil_1.deepEqual) ?? {};
    let C = safeJsonUtils.safeParse((c == null ? undefined : c.ext?.search_tags) ?? "[]", []);
    let N = C.length ? C : (c == null ? undefined : c.content_obj?.tags) ?? [];
    let O = m == null ? undefined : (i = m.query_params) === null || i === undefined ? undefined : (r = i.text_card) === null || r === undefined ? undefined : r.map(e => {
      return e.query ?? "";
    }).filter(Boolean);
    return {
      meta: k,
      searchType: _,
      searchReferenceData: m,
      isTextMessageFinished: S,
      searchTagMeta: {
        tagList: N,
        queryTextList: O
      },
      botId: h,
      onTrackEvent: (e, t) => {
        let i = conversationMessageUtils_1.findMessageById(chatMessageStoreFactory.createMessageStore.getState(), c.conversation_id || "", c.reply_id || "");
        teaAnalyticsEventTracker.trackEvent(e, {
          bot_id: h,
          message_id: String(c == null ? undefined : c.message_id),
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", c.conversation_id || ""),
          conversation_id: c.conversation_id || "",
          conversation_type: chatConversationSelectorUtils.getConversationType(c.conversation_id || ""),
          skill_id: i == null ? undefined : i.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(i == null ? undefined : i.skill?.skill_type_no_default),
          search_type: _,
          ...t
        });
      },
      onReportMessageShowError: e => {
        let {
          reason: t
        } = e;
        messageErrorHandler.handleMessageShowError({
          message: c,
          reason: t
        });
      }
    };
  };
  function Z(e) {
    let {
      inView: n,
      message: r,
      enableOpenCanvas: i = true
    } = e;
    let o = asyncSkillContentBlock.skillContentBlock.enableOpenCanvas ?? i;
    if (!r) {
      return null;
    }
    let {
      meta: a,
      searchType: l,
      searchReferenceData: s,
      isTextMessageFinished: c,
      searchTagMeta: u,
      onTrackEvent: d,
      onReportMessageShowError: h
    } = A({
      message: r
    });
    return reactJsxRuntimeCoreReexport.jsx(I, {
      meta: a,
      inView: n,
      searchTagMeta: u,
      message: r,
      searchReferenceData: s,
      isTextMessageFinished: c,
      searchType: l,
      enableOpenCanvas: o,
      onTrackEvent: d,
      onReportMessageShowError: h
    });
  }
  require.d(exports, {
    useSearchMessageData: function () {
      return A;
    },
    SearchReceiveMessage: function () {
      return Z;
    }
  });
}