// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'aiSpaceActionHandlerRegistry'
// - Resolved require(748480) to 'ai-space-action-handler-registry'
// - Renamed variable 'i' to 'chatPageInteractiveTracker'
// - Resolved require(798740) to 'chat-page-interactive-tracker'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'chatUrlActionPlugin'
// - Resolved require(742349) to 'chat-url-action-plugin'
// - Renamed variable 'o' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'l' to 'chatViewInitHook'
// - Resolved require(481960) to 'chat-view-init-hook'
// - Renamed variable 'u' to 'globalEventEmitter'
// - Resolved require(366024) to 'global-event-emitter'
// - Renamed variable 'c' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'd' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'h' to 'chatMessageSender_2'
// - Resolved require(656716) to 'chat-message-sender_2'
// - Renamed variable 'f' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'p' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Renamed variable 'm' to 'edenxSearchParamsHook'
// - Resolved require(471794) to 'edenx-search-params-hook'
// - Renamed variable 'g' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'v' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'y' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'b' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'w' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'x' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Resolved require.e(52823) to 'ai-coding-open-canvas-repo-plugin'
// - Resolved require.bind(15565) to 'open-coding-canvas-repo'
// - Resolved require.e(35117) to 'ai-coding-open-canvas-repo-pre-plugin'
// - Resolved require.bind(331203) to 'ai-coding-pre-send-plugin'
// - Renamed variable 'Z' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'iz' to 'MessageActions' (module 746101)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'l' to 'resolveSearchParams' (module 471794)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property '_' to 'useChatViewInit' (module 481960)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'S' to 'eventEmitterInstance' (module 366024)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'gF' to 'selectUserInfoLoading' (module 480327)
// - Updated imported property 'O' to 'sendMessage' (module 656716)
// - Updated imported property 'b3' to 'SceneType' (module 791429)
// - Updated imported property 'C' to 'ChatUrlActionPlugin' (module 742349)
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// - Updated imported property 'd' to 'aiSpaceActionHandlers' (module 748480)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.7ebab4bc.js
         * chunkId: 90814
         * moduleId: 985645
         */
module.exports = function (module, exports, require) {
  var aiSpaceActionHandlerRegistry = require("ai-space-action-handler-registry") /*id: 748480*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatUrlActionPlugin = require("chat-url-action-plugin") /*id: 742349*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatViewInitHook = require("chat-view-init-hook") /*id: 481960*/;
  var globalEventEmitter = require("global-event-emitter") /*id: 366024*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatMessageSender_2 = require("chat-message-sender_2") /*id: 656716*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function C(e) {
    if (!("reportParams" in e)) {
      return false;
    }
    if ("newChat" in e.reportParams || "text" in e) {
      return true;
    }
    if ("compositeContent" in e) {
      let {
        compositeContent: t
      } = e;
      return !!t && !!("text" in t) && !!["images", "files"].some(e => e in t);
    }
    return !!["image_key", "file_key"].some(t => t in e);
  }
  let O = e => {
    if (!e) {
      return e;
    }
    try {
      let n = JSON.parse(e);
      let r = n == null ? undefined : n.extraExt;
      if (r == null ? undefined : r.input_skill) {
        let e = JSON.parse(r.input_skill);
        if (e.skill_type && e.skill_id === undefined) {
          var t;
          let n = (t = e.skill_type) === null || t === undefined ? undefined : t.toString();
          if (n) {
            let t = {
              ...e,
              skill_id: n
            };
            r.input_skill = JSON.stringify(t);
          } else {
            delete r.input_skill;
          }
        }
      }
      return JSON.stringify(n);
    } catch {
      return e;
    }
  };
  let E = function ({
    isReady: e,
    query: t,
    reportEvent: n,
    reportParams: r,
    sendMessage: i
  } = {}) {
    let a = chatServiceContext.useChatService("chatMessageService");
    let o = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (t && e) {
        let e = function (e) {
          try {
            let t = JSON.parse(e);
            if (Array.isArray(t) ? t.every(e => C(e)) : C(t)) {
              return t;
            }
            return false;
          } catch {
            return false;
          }
        }(t);
        if (e && (e == null ? undefined : e.startJumpTime)) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "new-thread-send-message-phase1",
            meta: {
              duration: Date.now() - e.startJumpTime
            }
          });
          delete e.startJumpTime;
          o.current = Date.now();
        }
        let u = e ? {
          ...e,
          reportParams: {
            ...r,
            ...e.reportParams,
            scene: (e == null ? undefined : e.reportParams?.scene) || (r == null ? undefined : r.scene) || "message_from_query",
            send_source: "new_thread_auto"
          }
        } : {
          text: t,
          reportParams: {
            ...r,
            content_source: chatCoreConstants.MessageActions.Other,
            scene: (r == null ? undefined : r.scene) || "message_from_query",
            send_source: "new_thread_auto"
          }
        };
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "new_thread_auto_send_message",
          meta: {
            is_json: !!e,
            scene: u == null ? undefined : u.reportParams?.scene
          }
        });
        (i ?? a.sendMessage)([u]);
        if (n) {
          n.success();
        } else {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "new_thread_auto_send_message_no_tracing",
            meta: {
              is_json: !!e,
              payload: JSON.stringify(u)
            }
          });
        }
      }
      return () => {
        if (o.current) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "new-thread-send-message-phase2",
            meta: {
              duration: Date.now() - o.current
            }
          });
          performanceStoreHook.usePerformanceStore.setState({
            urlActionDuration: {
              urlActionNavEndTime: Date.now(),
              urlActionChatRenderEventName: "new-thread-send-message-phase3"
            }
          });
        }
      };
    }, [t, e]);
  };
  let S = e => {
    var t;
    var n;
    var r;
    var i;
    var y;
    let {
      urlActions: b
    } = e;
    let [w] = edenxSearchParamsHook.resolveSearchParams();
    let _ = (t = w.get("query")) === null || t === undefined ? undefined : t.trim();
    let C = (n = w.get("channel")) === null || n === undefined ? undefined : n.trim();
    let S = (r = w.get("action")) === null || r === undefined ? undefined : r.trim();
    let x = ((i = w.get("keywordid")) === null || i === undefined ? undefined : i.trim()) || undefined;
    let $ = ((y = w.get("keywordname")) === null || y === undefined ? undefined : y.trim()) || undefined;
    let Z = useNavigateRuntimeResolver.useNavigateResolver();
    let P = reactCoreLibraryReexport.useRef("");
    let {
      localThreadSendMessage: I,
      sendMessageHelper: M
    } = chatViewInitHook.useChatViewInit({
      chatId: "",
      chatType: chatConversationTypes.ConversationTypes.NewThread,
      navigate: Z
    });
    let {
      resolveLocalConversationId: j,
      toNewChat: T
    } = M();
    P.current ||= j;
    reactCoreLibraryReexport.useEffect(() => {
      let e = async (e, t) => await I(j, t);
      let t = async (e, t) => {
        T(true);
        return t;
      };
      globalEventEmitter.eventEmitterInstance.on("processMessageBefore", e);
      globalEventEmitter.eventEmitterInstance.on("beforeMessageSending", t);
      return () => {
        globalEventEmitter.eventEmitterInstance.off("processMessageBefore", e);
        globalEventEmitter.eventEmitterInstance.off("beforeMessageSending", t);
      };
    }, [I, M]);
    let {
      newThreadEvent: A,
      newChatQuery: k
    } = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      var n;
      var r;
      let i = eventReportingService.createEventReporter({
        eventName: "new_thread_by_page",
        meta: {
          flow_tracking_source: (e = w.get("flow_tracking_source")) === null || e === undefined ? undefined : e.trim(),
          op_tracking: (t = w.get("op_tracking")) === null || t === undefined ? undefined : t.trim(),
          utm_source: ((n = w.get("utm_source")) === null || n === undefined ? undefined : n.trim()) || "",
          source_scene: (r = w.get("source_scene")) === null || r === undefined ? undefined : r.trim()
        }
      });
      i.updateMeta({
        query: _ ? "1" : "0"
      });
      let s = O(_);
      i.updateMeta({
        query: s === _ ? "2" : _ ? "1" : "0"
      });
      i.addDurationPoint("before_navigate");
      return {
        newThreadEvent: i,
        newChatQuery: s
      };
    }, [w]);
    let N = userInfoStatusSelectors.selectUserInfoLoading();
    let D = (e, t) => chatMessageSender_2.sendMessage(e == null ? undefined : e.map(e => ({
      ...e,
      localConversationId: j,
      conversationId: undefined
    })), t);
    E({
      isReady: !N,
      query: k,
      reportEvent: A,
      reportParams: {
        scene: C ? skillConstantsEnum.SceneType.OUTSIDE : undefined,
        collection_id: x,
        collection_name: $
      },
      sendMessage: D
    });
    chatUrlActionPlugin.ChatUrlActionPlugin({
      sendMessage: D,
      onReadyToParse: async () => {
        await promiseAsyncUtilities.createDelayedPromise(300);
      },
      plugins: [...b]
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!_ && !S) {
        Z(chatRouteConstants.routeChatRoot, {
          replace: true
        });
      }
    }, [_, S]);
    return null;
  };
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let $ = [{
    matcher: e => e === aiActionConstants.aiActionConstants.Code_Canvas_Open_Repo,
    handler: e => {
      require.e("ai-coding-open-canvas-repo-plugin") /*id: 52823*/.then(require.bind(require, "open-coding-canvas-repo") /*id: 15565*/).then(t => {
        t.default(e);
      });
    },
    prehandler: e => require.e("ai-coding-open-canvas-repo-pre-plugin") /*id: 35117*/.then(require.bind(require, "ai-coding-pre-send-plugin") /*id: 331203*/).then(t => t.default(e))
  }];
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function P() {
    let {
      businessInit: e
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(S, {
        urlActions: [...$, ...aiSpaceActionHandlerRegistry.aiSpaceActionHandlers]
      });
    } else {
      return null;
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return P;
    }
  });
}