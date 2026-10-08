// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oq' to 'MessageListComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 498508
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var messageViewActions = require("message-view-actions") /*id: 732796*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let g = function (e) {
    var t;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let r = reactCoreLibraryReexport.useRef({});
    let {
      currentChatViewConfig: i
    } = chatStoreManager.getStoreState("chatViewCoreStore");
    let o = (i == null ? undefined : (t = i.chatKey) === null || t === undefined ? undefined : t.startsWith("local_")) || e.startsWith("local_");
    let [s, a] = function (e, t) {
      let [n, r] = reactCoreLibraryReexport.useState(e);
      let i = reactCoreLibraryReexport.useRef(null);
      reactCoreLibraryReexport.useEffect(() => () => {
        if (i.current) {
          clearTimeout(i.current);
        }
      }, []);
      return [n, e => {
        if (i.current) {
          clearTimeout(i.current);
        }
        i.current = setTimeout(() => {
          r(e);
        }, 200);
      }];
    }(!n && !o, 0);
    let u = reactCoreLibraryReexport.useCallback((e, t) => {
      r.current[e] = +!t;
    }, [e]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        a(false);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "message_list_skeleton_hide_by_disabled"
        });
        return;
      }
      let e = setInterval(() => {
        if ((isEmptyUtil.isEmpty(r.current) ? 0 : objectValuesHelper.getObjectValues(r.current).reduce((e, t) => e * t, 1)) === 1) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "message_list_skeleton_hide_by_plugins_loaded"
          });
          clearTimeout(t);
          clearInterval(e);
          a(false);
        }
      }, 100);
      let t = setTimeout(() => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "message_list_skeleton_hide_by_plugins_load_timeout"
        });
        clearInterval(e);
        a(false);
      }, 4000);
      return () => {
        clearInterval(e);
        clearTimeout(t);
      };
    }, [e, n]);
    return {
      skeletonShow: s,
      pluginLoadCounter: u
    };
  };
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var messageErrorFallback = require("message-error-fallback") /*id: 428170*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    let {
      className: t,
      MessageGroupBottomFoundation: n,
      MessageGroupCenterFoundation: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("flex flex-col w-full", t),
      children: [r && reactJsxRuntimeCoreReexport.jsx(r, {}), n && reactJsxRuntimeCoreReexport.jsx(n, {})]
    });
  };
  let w = reactCoreLibraryReexport.createContext({
    message: null,
    conversationId: "",
    pluginLoadCounter: () => null
  });
  let S = () => {
    let {
      message: e,
      ...t
    } = reactCoreLibraryReexport.useContext(w);
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
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var infraStringFilter = require("infra-string-filter") /*id: 435337*/;
  let I = (e, t) => {
    let {
      matcher: n = []
    } = chatPluginMatcherRegistry.useReceiveGroupBottomMatcher();
    let r = (n ?? []).map(n => n.matchPlugin(e, t) ? n.pluginIdentifier : undefined).filter(e => e !== undefined);
    let l = r[0];
    let i = infraStringFilter.filterInfraStrings(r);
    let {
      plugin: o,
      loading: s
    } = chatPluginIocManager.msgGroupBottomHook(l);
    return {
      plugin: o,
      pluginIdentifier: l,
      loading: s,
      duplicateIdentifierList: i
    };
  };
  let T = (e, t) => {
    let {
      matcher: n = []
    } = chatPluginMatcherRegistry.useReceiveGroupMatcher();
    let r = (n ?? []).map(n => n.matchPlugin(e, t) ? n.pluginIdentifier : undefined).filter(e => e !== undefined);
    let i = r[0];
    let o = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [i]);
    let s = infraStringFilter.filterInfraStrings(r);
    let {
      plugin: a,
      loading: u
    } = chatPluginIocManager.receiveMsgGroupHook(i);
    return {
      pluginLoadId: o,
      plugin: a,
      pluginIdentifier: i,
      loading: u,
      duplicateIdentifierList: s
    };
  };
  var messageBoxFoundation = require("message-box-foundation") /*id: 238658*/;
  var chatMessagePluginRenderHooks = require("chat-message-plugin-render-hooks") /*id: 781098*/;
  let E = reactCoreLibraryReexport.createContext({
    message: null,
    pluginLoadCounter: () => null,
    isLastMessage: undefined,
    scene: "box"
  });
  let R = () => {
    let {
      message: e,
      ...t
    } = reactCoreLibraryReexport.useContext(E);
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
  let B = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r
    } = R();
    let {
      plugin: l,
      duplicateIdentifierList: i
    } = chatMessagePluginRenderHooks.useReceiveBoxTopPlugin(r);
    if (i.length > 1) {
      let e = Error(`${i.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_box_top",
        error: e
      });
    }
    if (!l) {
      return null;
    }
    let {
      Content: o
    } = l;
    return reactJsxRuntimeCoreReexport.jsx(o, {
      message: r,
      mouseOver: t,
      inView: n
    });
  };
  let Z = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r
    } = R();
    let {
      plugin: l,
      duplicateIdentifierList: i
    } = chatMessagePluginRenderHooks.useReceiveBoxRightPlugin(r);
    if (i.length > 1) {
      let e = Error(`${i.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_box_right",
        error: e
      });
    }
    if (!l) {
      return null;
    }
    let {
      Content: o
    } = l;
    return reactJsxRuntimeCoreReexport.jsx(o, {
      message: r,
      mouseOver: t,
      inView: n
    });
  };
  var collectionMatchUtil = require("collection-match-util") /*id: 394199*/;
  var blockTypeConstants_1 = require("block-type-constants_1") /*id: 701432*/;
  var blockTreeBuilderUtils = require("block-tree-builder-utils") /*id: 600253*/;
  let A = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r
    } = R();
    let {
      plugin: i,
      duplicateIdentifierList: o
    } = chatMessagePluginRenderHooks.useReceiveBoxLeftPlugin(r);
    if (o.length > 1) {
      let e = Error(`${o.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_left",
        error: e
      });
    }
    let s = blockTreeBuilderUtils.useMemoBlockNodes(r.content_blocks_v2 || []);
    let a = reactCoreLibraryReexport.useMemo(() => !s.length || collectionMatchUtil.checkCollectionMatch(s, e => e.type && blockTypeConstants_1.blockTypes.includes(e.type)), [s]);
    if (!i || !a) {
      return null;
    }
    let {
      Content: u
    } = i;
    return reactJsxRuntimeCoreReexport.jsx(u, {
      message: r,
      mouseOver: t,
      inView: n
    });
  };
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var triggerMethodManager = require("trigger-method-manager") /*id: 911967*/;
  let U = e => {
    let {
      inView: t,
      message: n,
      scrollContainerTarget: r
    } = e;
    let i = reactCoreLibraryReexport.useRef(n);
    let o = reactCoreLibraryReexport.useRef({
      end_method: "",
      start_method: "",
      is_stream: 0,
      show_end_timestamp: 0,
      show_start_timestamp: 0,
      stream_end_timestamp: 0,
      stream_start_timestamp: 0
    });
    let s = e => {
      if (!isNullishCheck.isNil(e)) {
        triggerMethodManager.triggerManager.setCurrentMethod(e);
      }
    };
    let a = () => {
      if (o.current.stream_start_timestamp === 0) {
        o.current.is_stream = 1;
        o.current.stream_start_timestamp = Date.now();
      }
    };
    let u = () => {
      o.current.show_start_timestamp = Date.now();
      o.current.start_method = triggerMethodManager.triggerManager.getStartMethod();
    };
    let c = () => {
      if (o.current.stream_start_timestamp !== 0) {
        o.current.stream_end_timestamp = Date.now();
      }
    };
    let d = () => {
      o.current.show_end_timestamp = Date.now();
      o.current.end_method = triggerMethodManager.triggerManager.getEndMethod();
    };
    let f = () => {
      o.current = {
        end_method: "",
        start_method: "",
        is_stream: 0,
        show_end_timestamp: 0,
        show_start_timestamp: 0,
        stream_end_timestamp: 0,
        stream_start_timestamp: 0
      };
    };
    let v = () => {
      d();
      c();
      let e = {
        read_duration: o.current.stream_end_timestamp - o.current.stream_start_timestamp,
        show_duration: o.current.show_end_timestamp - o.current.show_start_timestamp
      };
      return {
        run: t => {
          s(t);
          m(e, !isNullishCheck.isNil(t));
          f();
        },
        current_end_method: o.current.end_method,
        current_start_method: o.current.start_method
      };
    };
    let m = (e, t) => {
      var s;
      var u;
      var f;
      teaAnalyticsEventTracker.trackEvent("read_message", {
        bot_id: i.current.bot_id,
        message_id: i.current?.message_id,
        conversation_id: i.current?.conversation_id,
        skill_id: (s = i.current) === null || s === undefined ? undefined : s.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName((u = i.current) === null || u === undefined ? undefined : u.skill?.skill_type_no_default),
        reply_id: i.current?.reply_id,
        section_id: i.current?.section_id,
        is_finish: +!!chatMessageStatusCheck.isMessageFinished(i.current),
        is_stream: o.current.is_stream,
        is_regenerate: +((f = i.current) !== null && f !== undefined && !!f.is_regen),
        read_duration: e.read_duration > 0 ? e.read_duration : 0,
        show_duration: e.show_duration < 1000 ? 0 : e.show_duration,
        start_method: o.current.start_method,
        end_method: t ? triggerMethodManager.triggerManager.getEndMethod() : o.current.end_method
      });
    };
    let g = e => {
      if (!isNullishCheck.isNil(e)) {
        s(e);
      }
      u();
    };
    let h = chatMessageStatusCheck.isMessageFinished(i.current);
    reactCoreLibraryReexport.useEffect(() => triggerMethodManager.triggerManager.addScrollContainerListener(r), [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        let e = () => {
          g();
        };
        let t = () => {
          var e;
          if ((e = v()) !== null && e !== undefined) {
            e.run();
          }
        };
        g();
        triggerMethodManager.triggerManager.addVisibleChangeListener({
          show: e,
          hide: t
        });
        return () => {
          triggerMethodManager.triggerManager.removeVisibleChangeListener({
            show: e,
            hide: t
          });
          let n = v();
          setTimeout(() => {
            let t = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId;
            if (t) {
              if (i.current.conversation_id !== t) {
                n.run(triggerMethodManager.TriggerMethodType.ChatChange);
              } else if (messageContentTypeAndStatusChecker.vlk(i.current)) {
                n.run(triggerMethodManager.TriggerMethodType.ScrollChange);
              } else {
                if (i.current.conversation_id === t && n.current_end_method === "leave_chat") {
                  return;
                }
                n.run();
              }
            }
          }, 50);
        };
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      i.current = n;
      if (h) {
        c();
      } else {
        a();
      }
    }, [n]);
  };
  var q = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    fill: "none",
    viewBox: "0 0 18 18",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 16.5,
      height: 16.5,
      x: 0.75,
      y: 0.75,
      stroke: "currentColor",
      strokeWidth: 1.5,
      rx: 8.25
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M8.214 9.588q.026.753.779.753.735 0 .761-.762l.132-3.87a.77.77 0 0 0-.245-.63.93.93 0 0 0-.657-.246.9.9 0 0 0-.648.245.76.76 0 0 0-.236.622zM8.284 12.845q.297.263.709.263.42 0 .709-.254a.86.86 0 0 0 .297-.674q0-.403-.297-.666a1.01 1.01 0 0 0-.71-.262q-.42 0-.708.262a.86.86 0 0 0-.289.666q0 .402.289.665"
    })]
  }), {}));
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  let X = e => {
    let {
      message: t,
      className: n
    } = e;
    let r = messageContentTypeAndStatusChecker.FFC(t);
    let l = async () => {
      (await chatMessageRetryHandler.retrySendMessage({
        message: t
      }))();
    };
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(q, {
        "data-testid": "message_box_failed_icon",
        className: n,
        onClick: l
      });
    } else {
      return null;
    }
  };
  let $ = e => {
    let {
      message: t,
      className: n
    } = e;
    let r = messageContentTypeAndStatusChecker.FFC(t);
    let l = messageContentTypeAndStatusChecker.Jlm(t) || messageContentTypeAndStatusChecker.aEU(t);
    let i = async () => {
      (await chatMessageRetryHandler.retryReceiveMessage({
        message: t
      }))();
    };
    if (r && !l) {
      return reactJsxRuntimeCoreReexport.jsx(q, {
        "data-testid": "message_box_failed_icon",
        className: n,
        onClick: i
      });
    } else {
      return null;
    }
  };
  var scrollViewContext = require("scroll-view-context") /*id: 611454*/;
  var dotFlashingLoaderComponent = require("dot-flashing-loader-component") /*id: 920732*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  let ee = () => null;
  let et = e => {
    var n;
    let {
      message: r,
      inView: i,
      mouseOver: o,
      pluginLoadCounter: s
    } = e;
    let {
      plugin: a,
      pluginIdentifier: u,
      loading: c,
      duplicateIdentifierList: d,
      pluginLoadId: f
    } = chatMessagePluginRenderHooks.useReceiveBoxPlugin(r);
    let v = reactCoreLibraryReexport.useRef(false);
    let p = messageContentTypeAndStatusChecker.FFC(r);
    if (d.length > 1) {
      let e = Error(`${d.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_box",
        error: e
      });
    }
    reactCoreLibraryReexport.useEffect(() => {
      s(f, c);
    }, [c]);
    reactCoreLibraryReexport.useEffect(() => {
      s(f, c);
      return () => {
        if (s != null) {
          s(f, false);
        }
      };
    }, [f]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r.is_finish && !v.current) {
        v.current = true;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "deprecated_message_render",
          meta: {
            type: "receive",
            pluginType: "content",
            messageId: r.message_id || r.local_message_id,
            pluginId: String(u)
          }
        });
      }
    }, [r.is_finish]);
    if (c) {
      return reactJsxRuntimeCoreReexport.jsx(dotFlashingLoaderComponent.DotFlashingLoader, {});
    }
    if (!a) {
      return null;
    }
    let {
      Content: g = ee
    } = a;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-plugin-identifier": String(u),
      className: p ? "" : "w-full",
      children: [reactJsxRuntimeCoreReexport.jsx(g, {
        message: r,
        inView: i,
        mouseOver: o
      }), (chatMessageStatusCheck.isMessageFinished(r) || messageContentTypeAndStatusChecker.vlk(r)) && reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (n = r.verbose) === null || n === undefined ? undefined : n.extra?.risk_tips
      })]
    });
  };
  var chatMessagePerfStore = require("chat-message-perf-store") /*id: 308749*/;
  var messageNodeErrorBoundaryWrapper = require("message-node-error-boundary-wrapper") /*id: 970489*/;
  var messageRenderStatusTracker = require("message-render-status-tracker") /*id: 899708*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var messageStatusContentBlocksMapper = require("message-status-content-blocks-mapper") /*id: 328113*/;
  var chatAbilityTypeUtil = require("chat-ability-type-util") /*id: 964052*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var pluginNodeRenderUtils = require("plugin-node-render-utils") /*id: 595785*/;
  let ec = e => {
    let t = e.unique_id || e.message_id;
    return reactCoreLibraryReexport.useCallback(n => {
      if (t && n !== undefined) {
        chatMessagePerfStore.updateRecvMsgPerf(t, {
          end: performanceTimeUtil.getPerformanceNow(),
          nodeId: n
        });
      }
      let r = chatMessagePerfStore.getRecvMsgPerf(t);
      if (t && r && e.create_from !== "sse-stream") {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "im_chat_message_render_perf",
          meta: {
            receive_message_perf: r.start && r.end ? r.end - r.start : undefined,
            receive_message_node_id: r == null ? undefined : r.nodeId,
            is_create_new_conversation: false,
            render_type: r == null ? undefined : r.render_type
          }
        });
        chatMessagePerfStore.deleteRecvMsgPerf(t);
      }
    }, [t]);
  };
  let ed = e => {
    let {
      message: t,
      inView: n,
      mouseOver: r,
      pluginLoadCounter: i
    } = e;
    let o = blockTreeBuilderUtils.buildBlockTree(t.content_blocks_v2 || []);
    let {
      renderStatus: a,
      resetRenderStatus: u,
      onMessageNodeRenderError: c
    } = messageRenderStatusTracker.useMessageRenderStatusTracker(t, o, "receive");
    let {
      messageNodeRenderConfigs: d
    } = pluginNodeRenderUtils.createMessageNodeConfigs(o);
    let f = reactCoreLibraryReexport.useMemo(() => ({
      message: t
    }), [t]);
    let v = ec(t);
    let p = messageStatusContentBlocksMapper.mapMessageToStatusAndBlocks(t);
    if (d == null ? undefined : d.length) {
      if (o.every(e => a[e.id])) {
        return reactJsxRuntimeCoreReexport.jsx(messageErrorFallback.MessageErrorView, {
          error: Error("message render error"),
          resetErrorBoundary: u
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("flex w-full flex-col", "space-y-20", "[&>div:not(:has(*))]:-mt-20"),
          children: reactJsxRuntimeCoreReexport.jsx(messageContextDefinition.MessageProvider, {
            value: f,
            children: d.map(e => {
              let {
                pluginIdentifier: o,
                PluginNodeRender: s,
                node: a
              } = e;
              return reactJsxRuntimeCoreReexport.jsx(messageNodeErrorBoundaryWrapper.MessageNodeErrorBoundary, {
                node: a,
                scene: "flow-chat",
                type: "receive",
                onError: c,
                conversationId: t.conversation_id,
                sessionId: t.session_id,
                messageId: t.message_id,
                abilityType: chatAbilityTypeUtil.getChatAbilityType(t),
                llmIntentionDetail: t.ext?.llm_intention_detail,
                children: reactJsxRuntimeCoreReexport.jsx(s, {
                  pluginIdentifier: o,
                  node: a,
                  inView: n,
                  mouseOver: r,
                  pluginLoadCounter: i,
                  onFirstRender: v,
                  renderContext: p
                }, a.id)
              }, a.id);
            })
          })
        });
      }
    } else {
      return null;
    }
  };
  let ef = e => {
    let {
      message: n,
      inView: r,
      pluginLoadCounter: i
    } = e;
    let o = reactCoreLibraryReexport.useRef(false);
    let a = n.content_blocks_tree?.children || [];
    let {
      contentBlockRenderConfigs: u
    } = chatMessagePluginRenderHooks.useReceiveContentBlock(a);
    reactCoreLibraryReexport.useEffect(() => {
      if (n.is_finish && !o.current) {
        o.current = true;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "deprecated_message_render",
          meta: {
            type: "receive",
            pluginType: "block-v1",
            messageId: n.message_id || n.local_message_id,
            pluginIdList: u.map(e => {
              let {
                pluginIdentifier: t
              } = e;
              return String(t);
            }).join(",")
          }
        });
      }
    }, [n.is_finish]);
    if (u == null ? undefined : u.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("flex w-full flex-col", "gap-20"),
        "data-render-engine": "block",
        children: u.map(e => {
          let {
            pluginIdentifier: t,
            PluginContentRender: l,
            block: o,
            duplicateIdentifierList: s
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(l, {
            pluginIdentifier: t,
            duplicateIdentifierList: s,
            contentBlock: o,
            message: n,
            inView: r,
            pluginLoadCounter: i
          }, o.id);
        })
      });
    } else {
      return null;
    }
  };
  let ev = e => {
    let {
      inView: t,
      mouseOver: n
    } = e;
    let {
      message: r,
      pluginLoadCounter: l
    } = R();
    let i = blockTreeBuilderUtils.useMemoBlockNodes(r.content_blocks_v2 || []);
    let o = r.content_blocks_tree;
    let s = blockTreeBuilderUtils.checkBlockTypeMatch(i) ? ed : o ? ef : et;
    let {
      ref: {
        current: a
      }
    } = scrollViewContext.useScrollView();
    U({
      inView: t,
      message: r,
      scrollContainerTarget: a
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "message_content",
      "data-message-id": r.message_id,
      className: "relative flex-row flex w-full",
      children: [reactJsxRuntimeCoreReexport.jsx(s, {
        inView: t,
        mouseOver: n,
        message: r,
        pluginLoadCounter: l
      }, r.unique_id || r.message_id || r.local_message_id), reactJsxRuntimeCoreReexport.jsx($, {
        message: r,
        className: "m-8 flex-shrink-0 text-s-color-alert"
      })]
    });
  };
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var checkLastSectionId = require("check-last-section-id") /*id: 320509*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var suggestionExtractorUtils = require("suggestion-extractor-utils") /*id: 636335*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var extractCollectionIdUtil = require("extract-collection-id-util") /*id: 740633*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  let eM = e => {
    let {
      message: t,
      suggests: n,
      loading: r,
      className: i
    } = e;
    let o = chatViewCoreSelectors.useChatViewConfig();
    let s = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
      messageId: (t == null ? undefined : t.reply_id) || "",
      isLocalMessage: false
    });
    let a = () => {
      teaAnalyticsEventTracker.trackEvent("show_suggested_prompt", {
        bot_id: t == null ? undefined : t.bot_id,
        message_id: t == null ? undefined : t.message_id,
        conversation_id: t == null ? undefined : t.conversation_id,
        prompt_cnt: n == null ? undefined : n.length,
        suggested_type: "suggested_prompt",
        collection_id: extractCollectionIdUtil.getCollectionId(s).collection_id,
        web_show_method: "enter_chat",
        click_from: "direct"
      }, {
        key: `${t == null ? undefined : t.message_id}`
      });
      n.forEach((e, n) => {
        teaAnalyticsEventTracker.trackEvent("show_suggested_prompt_single_question", {
          bot_id: t == null ? undefined : t.bot_id,
          message_id: t == null ? undefined : t.message_id,
          conversation_id: t == null ? undefined : t.conversation_id,
          prompt_position: n + 1,
          collection_id: extractCollectionIdUtil.getCollectionId(s).collection_id,
          web_show_method: "enter_chat",
          click_from: "direct"
        }, {
          key: `${t == null ? undefined : t.message_id}_${n}`,
          duration: 300
        });
      });
    };
    eL(r, t, n == null ? undefined : n.length);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isEmptyUtil.isEmpty(n) && n.length === 3) {
        a();
      }
    }, [n.length, t == null ? undefined : t.reply_id]);
    let {
      matcher: v
    } = chatPluginMatcherRegistry.useReceiveSuggestMatcher();
    let {
      pluginIdentifier: p
    } = (v == null ? undefined : v.find(e => e.matchPlugin(t))) || {};
    let {
      plugin: {
        Content: m
      } = {}
    } = chatPluginIocManager.receiveMsgSuggestHook(p);
    let g = reactCoreLibraryReexport.useMemo(() => n.length ? [...n.map(e => ({
      value: e,
      label: e.content
    }))] : [], [n]);
    if (m) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        "data-foundation-type": "receive-message-suggest-foundation",
        className: "select-none",
        children: reactJsxRuntimeCoreReexport.jsx(m, {
          onTrackClickEvent: (e, n) => {
            let r = userInfoStatusSelectors.selectUserInfoSuccess();
            let l = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
              messageId: (t == null ? undefined : t.reply_id) || "",
              isLocalMessage: false
            });
            teaAnalyticsEventTracker.trackEvent("click_suggested_prompt", {
              bot_id: t == null ? undefined : t.bot_id,
              message_id: t == null ? undefined : t.message_id,
              click_position: n + 1,
              conversation_id: t == null ? undefined : t.conversation_id,
              suggested_type: "suggested_prompt",
              collection_id: extractCollectionIdUtil.getCollectionId(l).collection_id,
              web_show_method: "enter_chat",
              click_from: "direct"
            });
            if (!r && (o == null ? undefined : o.chatType) === chatConversationTypes.ConversationTypes.Bot) {
              chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage("unlog_click_bot_onboarding"));
              return chatEventEmitter.chatEmitter.emit("chat.guest.login", {
                bot: true,
                source: "unlog_click_bot_onboarding"
              });
            }
          },
          loading: r,
          message: t,
          suggests: g,
          className: i
        })
      });
    } else if (g.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-24 gap-8",
        children: g.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
          className: "h-38"
        }, t))
      });
    } else {
      return null;
    }
  };
  let eI = e => {
    let {
      suggests: r
    } = conversationMessageUtils_2.useGetSuggestMessage(e.conversation_id || "", e == null ? undefined : e.reply_id) || {};
    return reactCoreLibraryReexport.useMemo(() => {
      return suggestionExtractorUtils.extractSuggestions(e) ?? (r == null ? undefined : r.map(e => ({
        content: e
      })));
    }, [e == null ? undefined : e.ext?.sp, e == null ? undefined : e.ext?.sp_v2, e == null ? undefined : e.content_blocks]);
  };
  let eT = e => {
    let n = eI(e);
    let r = e.local_info?.from === chatCoreConstants.ChatSourceTypes.Api;
    let [i, o] = reactCoreLibraryReexport.useState(!!r || (n == null ? undefined : n.length) === suggestionExtractorUtils.suggestionVersion);
    let s = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        return;
      }
      let e = false;
      if ((n == null ? undefined : n.length) === suggestionExtractorUtils.suggestionVersion) {
        o(true);
        return;
      }
      o(false);
      s.current = setTimeout(() => {
        if (!e) {
          o(true);
        }
      }, 3000);
      return () => {
        e = true;
        if (s.current) {
          clearTimeout(s.current);
        }
      };
    }, [n]);
    return {
      failed: false,
      loading: !i,
      suggests: n
    };
  };
  let eN = e => {
    let t = checkLastSectionId.isLastSection(e);
    let n = messageContentTypeAndStatusChecker.RF2(e);
    let r = chatMessageStatusCheck.isMessageFinished(e);
    let l = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      isDisabled: i
    } = conversationRateLimit.useConvDisabled();
    let o = messageContentTypeAndStatusChecker.LxO(e);
    let {
      loading: s,
      suggests: a
    } = eT(e);
    let d = messageContentTypeAndStatusChecker.v08(e);
    let f = chatMessageStoreFactory.createMessageStore(t => {
      return conversationMessageUtils_1.findLastMessageLink(t, e.conversation_id || "", t.messageLinkMap[e.conversation_id || ""] ?? [])?.messageId;
    }, deepEqualityUtil.deepEqual);
    let v = e.message_id === f;
    if (o && a && !d && t && v && !n && r && (!l || !i)) {
      return {
        suggestListComponentNode: reactJsxRuntimeCoreReexport.jsx(eM, {
          message: e,
          suggests: a,
          loading: s
        }, e.conversation_id),
        suggestLoading: s,
        suggestsLength: a == null ? undefined : a.length
      };
    } else {
      return null;
    }
  };
  let eL = function (e, t, n = 0) {
    let r = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (!e || n > 0) {
        if (r.current) {
          clearTimeout(r.current);
        }
        return;
      }
      let {
        receiveSuggestStartTimeout: l = chatMessagingConstants.requestTimeout
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      r.current = setTimeout(() => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "suggest_list_timeout",
          meta: {
            message_id: t == null ? undefined : t.message_id,
            conversation_id: t == null ? undefined : t.conversation_id
          }
        });
      }, l);
      return () => {
        if (r.current) {
          clearTimeout(r.current);
        }
      };
    }, [e, n]);
  };
  var arrayUniqBy = require("array-uniq-by") /*id: 342321*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var blueprintOverflowList = require("blueprint-overflow-list") /*id: 172119*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var horizontalDotsIcon = require("horizontal-dots-icon") /*id: 743464*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  let eO = e => {
    let {
      children: t,
      unmountPopover: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let i = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      tooltipContent: r("message_action_button_more_tooltip"),
      prefix: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {}),
      "data-testid": "message_action_more"
    }), []);
    if (n) {
      return i;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        modal: false,
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          children: i
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            side: "bottom",
            children: t
          })
        })]
      });
    }
  };
  (r = {})[r["canvas-read"] = 0] = "canvas-read";
  r[r["outline-gen-doc"] = 1] = "outline-gen-doc";
  r[r.copy = 2] = "copy";
  r[r.regenerate = 3] = "regenerate";
  r[r.tts = 4] = "tts";
  r[r.feedback = 5] = "feedback";
  r[r["thread-share"] = 6] = "thread-share";
  r[r.insert = 7] = "insert";
  r[r["re-translate"] = 8] = "re-translate";
  r[r["deep-search"] = 9] = "deep-search";
  r[r["outline-gen"] = 10] = "outline-gen";
  r[r.edit = 11] = "edit";
  r[r["creation-download"] = 12] = "creation-download";
  r[r["create-doc-by-message"] = 13] = "create-doc-by-message";
  r[r.ref = 14] = "ref";
  r[r.aispace = 15] = "aispace";
  r[r["thread-collection"] = 16] = "thread-collection";
  r[r.followup = 17] = "followup";
  r[r.report = 18] = "report";
  r[r.delete = 19] = "delete";
  r[r.debug = 20] = "debug";
  let eH = r;
  let eW = e => {
    return eH[e] ?? Number.MAX_SAFE_INTEGER;
  };
  let eF = e => e == null ? undefined : e.sort((e, t) => eW(e.actionType) - eW(t.actionType));
  var eG = {
    "message-action-bar": "message-action-bar-raqbg0"
  };
  let eU = () => null;
  let eq = "expanded_more_item";
  let eK = (e, t, n, r, l) => {
    if (e === eq) {
      return eX(n, t, r, l);
    }
    let {
      ButtonContentGroupLoader: i = eU,
      onEnterEditMode: o,
      onEnterActionMode: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(i, {
      pluginIdentifier: e.pluginIdentifier,
      message: t,
      onEnterEditMode: o,
      onEnterActionMode: s,
      reportParams: l,
      actionVisible: r
    }, String(e.pluginIdentifier));
  };
  let eX = (e, t, n, r) => {
    let l = e.filter(e => e !== eq).map(e => {
      let {
        DropdownItemContentGroupLoader: l = eU,
        onEnterEditMode: i,
        onEnterActionMode: o
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(l, {
        pluginIdentifier: e.pluginIdentifier,
        message: t,
        onEnterEditMode: i,
        onEnterActionMode: o,
        reportParams: r,
        actionVisible: n
      }, String(e.pluginIdentifier));
    });
    return reactJsxRuntimeCoreReexport.jsx(eO, {
      unmountPopover: !n,
      children: l
    }, eq);
  };
  let e$ = e => {
    let t = messageContentTypeAndStatusChecker.xsI(e);
    let n = messageContentTypeAndStatusChecker.RF2(e);
    let r = messageContentTypeAndStatusChecker.Ioq(e) || messageContentTypeAndStatusChecker.$sc(e);
    let l = messageContentTypeAndStatusChecker.pp8(e);
    let i = messageContentTypeAndStatusChecker.mT2(e);
    let o = messageContentTypeAndStatusChecker.q8s(e);
    let s = messageContentTypeAndStatusChecker.gch(e);
    let a = userInfoStatusSelectors.selectUserInfoSuccess();
    let d = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
    return !a && d || t || r && !l && !i || o || s || n || messageContentTypeAndStatusChecker.Kzj(e);
  };
  let eQ = e => !userInfoStatusSelectors.selectUserInfoSuccess() || messageContentTypeAndStatusChecker.DXD(e) && messageContentTypeAndStatusChecker.hWN(e);
  let eJ = e => {
    let t = messageContentTypeAndStatusChecker.ZRq(e);
    let n = userInfoStatusSelectors.selectUserInfoSuccess();
    let r = checkLastSectionId.isLastSection(e);
    let l = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
    return !messageContentTypeAndStatusChecker.hWN(e) && n && r && l && t;
  };
  let eY = e => {
    let {
      message: t,
      pluginConfigs: n,
      mouseOver: r,
      inView: l,
      className: i,
      observeParents: o,
      reportParams: a
    } = e;
    let u = eF(n);
    let c = arrayUniqBy.arrayUniqBy(genericFilterUtil.genericFilter(u, e => e.area === "main"), (e, t) => !!e.actionType && !!t.actionType && e.actionType === t.actionType);
    let d = arrayUniqBy.arrayUniqBy(genericFilterUtil.genericFilter(u, e => e.area === "fold"), (e, t) => !!e.actionType && !!t.actionType && e.actionType === t.actionType);
    let f = arrayUniqBy.arrayUniqBy(genericFilterUtil.genericFilter(u, e => e.area === "expand"), (e, t) => !!e.actionType && !!t.actionType && e.actionType === t.actionType);
    let v = arrayUniqBy.arrayUniqBy(genericFilterUtil.genericFilter(u, e => e.area === "third"), (e, t) => !!e.actionType && !!t.actionType && e.actionType === t.actionType);
    let p = e$(t);
    let m = eJ(t);
    let g = eQ(t);
    let h = !messageContentTypeAndStatusChecker.Yns(t) && chatFgStoreHooks.getSourceValue("receive_actionbar_always_show", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1";
    if (p) {
      return null;
    }
    if (g) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("flex flex-col justify-end h-40 w-full select-none"),
        "data-testid": "message_action_bar"
      });
    }
    let _ = [...c, ...(d.length > 0 ? [eq] : [])];
    let b = h || m || r;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s("flex flex-col justify-end h-40 w-full select-none", b ? "opacity-100" : "opacity-0 pointer-events-none"),
      "data-testid": "message_action_bar",
      children: h || m || l ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s(eG["message-action-bar"], "flex flex-row w-full group", i),
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          "data-button-mode": "max",
          className: "hidden"
        }), (_ == null ? undefined : _.length) ? reactJsxRuntimeCoreReexport.jsx(blueprintOverflowList.OverflowList, {
          className: s("message-action-button-main", "flex w-fit min-w-0 items-center gap-10 self-center"),
          "data-button-mode": "max",
          items: _,
          minVisibleItems: 0,
          visibleItemRenderer: e => eK(e, t, d, b, a),
          collapseFrom: "end",
          overflowRenderer: e => eX([...e, ...d], t, b, a),
          observeParents: o
        }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
              mr-12 hidden h-12 w-0 items-center self-center rounded-[0.5px]
              border-[0.5px] border-solid
              border-[var(--s-color-border-secondary)]
              first:hidden
              last:hidden
              [&:has(+.message-action-button-expand)]:block
            `
        }), (f == null ? undefined : f.length) ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("message-action-button-expand", "flex w-fit min-w-0 items-center gap-10 self-center"),
          children: f.map(e => eK(e, t, [], b, a))
        }) : null, (v == null ? undefined : v.length) ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("message-action-button-third", "flex w-fit min-w-0 items-center gap-12 self-center"),
          children: v.map(e => eK(e, t, [], b))
        }) : null]
      }) : null
    });
  };
  let e0 = e => {
    let {
      message: t,
      pluginConfigs: n,
      inView: r,
      mouseOver: l,
      observeParents: i,
      reportParams: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(eY, {
      className: "relative -right-10 justify-end",
      message: t,
      pluginConfigs: n,
      inView: r,
      mouseOver: l,
      observeParents: i,
      reportParams: o
    });
  };
  let e1 = e => {
    let {
      message: t,
      pluginConfigs: n,
      inView: r,
      mouseOver: l,
      observeParents: i,
      reportParams: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(eY, {
      message: t,
      pluginConfigs: n,
      inView: r,
      mouseOver: l,
      observeParents: i,
      reportParams: o
    });
  };
  let e2 = e => {
    let {
      pluginIdentifier: t,
      ...n
    } = e;
    let {
      plugin: r,
      loading: l
    } = chatPluginIocManager.receiveMsgActionBtnHook(t);
    if (l) {
      return null;
    }
    let i = r == null ? undefined : r.ButtonContentGroups;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i ? i.map((e, t) => reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      }, t)) : null
    });
  };
  let e4 = e => {
    let {
      pluginIdentifier: t,
      ...n
    } = e;
    let {
      plugin: r,
      loading: l
    } = chatPluginIocManager.receiveMsgActionBtnHook(t);
    if (l) {
      return null;
    }
    let i = r == null ? undefined : r.DropdownItemContentGroups;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i ? i.map((e, r) => reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      }, String(t) + r)) : null
    });
  };
  let e3 = (e, t) => {
    let {
      matcher: n = []
    } = chatPluginMatcherRegistry.useReceiveActionBtnMatcher();
    return {
      messageActionPluginConfig: (n ?? []).filter(e => !!e).map(t => t.matchPlugin(e) ? t : undefined).filter(e => (e == null ? undefined : e.pluginIdentifier) !== undefined).map(e => ({
        pluginIdentifier: e.pluginIdentifier,
        area: e.area,
        actionType: e.actionType,
        onEnterActionMode: t,
        ButtonContentGroupLoader: e2,
        DropdownItemContentGroupLoader: e4
      }))
    };
  };
  let e6 = (e, t) => {
    let {
      matcher: n = []
    } = chatPluginMatcherRegistry.useReceiveActionBottomMatcher();
    let r = (n ?? []).map(n => n.matchPlugin(e, t) ? n.pluginIdentifier : undefined).filter(e => e !== undefined);
    let l = r[0];
    let i = infraStringFilter.filterInfraStrings(r);
    let {
      plugin: o,
      loading: s
    } = chatPluginIocManager.receiveMsgActionBotHook(l);
    return {
      plugin: o,
      pluginIdentifier: l,
      loading: s,
      duplicateIdentifierList: i
    };
  };
  let e5 = e => {
    let {
      matcher: t = []
    } = chatPluginMatcherRegistry.useReceiveActionRightMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let l = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: i,
      loading: o
    } = chatPluginIocManager.receiveMsgActionRightHook(r);
    return {
      plugin: i,
      pluginIdentifier: r,
      loading: o,
      duplicateIdentifierList: l
    };
  };
  let e7 = () => null;
  let e9 = e => {
    let {
      message: t
    } = e;
    let {
      plugin: n
    } = e5(t);
    let {
      Content: r = e7
    } = n || {};
    return reactJsxRuntimeCoreReexport.jsx(r, {
      message: t
    });
  };
  let e8 = () => null;
  let te = e => {
    let {
      message: t,
      actionMode: n,
      updateActionMode: r
    } = e;
    let {
      plugin: l
    } = e6(t, n);
    let {
      Content: i = e8
    } = l || {};
    return reactJsxRuntimeCoreReexport.jsx(i, {
      message: t,
      onExitActionMode: () => r("")
    });
  };
  let tt = e => {
    let {
      message: t,
      inView: n,
      mouseOver: r,
      scene: i
    } = e;
    let [o, s] = reactCoreLibraryReexport.useState("");
    let {
      messageActionPluginConfig: a
    } = e3(t, s);
    let u = blockTreeBuilderUtils.useMemoBlockNodes(t.content_blocks_v2 || []);
    if (!reactCoreLibraryReexport.useMemo(() => !u.length || collectionMatchUtil.checkCollectionMatch(u, e => e.type && blockTypeConstants_1.blockTypes.includes(e.type)), [u])) {
      return null;
    }
    let c = i === "group" ? a.filter(e => ["copy", "debug", "report", "tts"].includes(e.actionType)) : a;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-row flex max-w-full min-w-0 flex-grow select-none",
        "data-foundation-type": "receive-message-action-bar",
        children: [reactJsxRuntimeCoreReexport.jsx(e1, {
          inView: i === "group" || n,
          mouseOver: i === "group" || r,
          message: t,
          pluginConfigs: c
        }), reactJsxRuntimeCoreReexport.jsx(e9, {
          message: t
        })]
      }), reactJsxRuntimeCoreReexport.jsx(te, {
        message: t,
        actionMode: o,
        updateActionMode: () => s("")
      })]
    });
  };
  let tn = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      scene: l
    } = R();
    let {
      plugin: i,
      duplicateIdentifierList: o
    } = chatMessagePluginRenderHooks.useReceiveBoxBottomPlugin(r);
    if (o.length > 1) {
      let e = Error(`${o.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_box_bottom",
        error: e
      });
    }
    let s = eN(r);
    if (!i) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-40"
      });
    }
    let {
      Content: a
    } = i;
    return reactJsxRuntimeCoreReexport.jsx(a, {
      message: r,
      mouseOver: t,
      inView: n,
      actionBarComponentNode: reactJsxRuntimeCoreReexport.jsx(tt, {
        scene: l,
        message: r,
        mouseOver: l === "group" || t,
        inView: l === "group" || n
      }),
      suggestList: l === "group" ? null : s
    });
  };
  let tr = e => {
    let {
      scene: t = "box",
      message: n,
      pluginLoadCounter: r,
      lastAvaliableMessageId: i
    } = e;
    let o = chatStoreManager.useStoreSelector("chatMessageBoxLayoutStore", e => e.receiveMessageBoxConfig.containerDataAttr, deepEqualityUtil.deepEqual);
    let a = chatStoreManager.useStoreSelector("chatMessageBoxLayoutStore", e => e.getMessageBoxArea(), deepEqualityUtil.deepEqual);
    let u = i === n.message_id;
    let c = reactCoreLibraryReexport.useMemo(() => ({
      pluginLoadCounter: r,
      message: n,
      isLastMessage: u,
      scene: t
    }), [r, n, u]);
    let {
      top: d,
      left: f,
      bottom: v,
      right: m
    } = a;
    return reactJsxRuntimeCoreReexport.jsx(E.Provider, {
      value: c,
      children: reactJsxRuntimeCoreReexport.jsx(messageBoxFoundation.MessageBoxFoundation, {
        dataAttributes: {
          "data-attr": o,
          "data-testid": "receive_message",
          "data-copy-telemetry": "right_click_copy"
        },
        className: s("w-full max-w-full s-font-base text-s-color-text-secondary p-0 rounded-s-radius-s bg-transparent", "group data-[attr=select-mode]:-mt-10 data-[attr=select-mode]:py-10 data-[attr=select-mode]:px-16 data-[attr=select-mode]:sm:p-10 data-[attr=select-mode]:hover:bg-s-color-bg-base data-[attr=select-mode]:hover:rounded-s-radius-xs", "data-[attr=select-mode]:has-[:checked]:bg-s-color-bg-trans data-[attr=select-mode]:has-[:checked]:rounded-s-radius-xs", "data-[attr=select-mode]:pointer-events-none"),
        MessageBoxTopFoundation: t === "box" && d.visible ? B : null,
        MessageBoxLeftFoundation: t === "box" && f.visible ? A : null,
        MessageBoxBottomFoundation: t === "box" && v.visible || t === "group" ? tn : null,
        MessageBoxRightFoundation: t === "box" && m.visible ? Z : null,
        MessageBoxCenterFoundation: ev
      })
    });
  };
  let tl = () => {
    let {
      message: e,
      conversationId: t,
      pluginLoadCounter: n
    } = S();
    let {
      plugin: r,
      duplicateIdentifierList: i,
      loading: o,
      pluginLoadId: s
    } = T("", e);
    if (i.length > 1) {
      let e = Error(`${i.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_group_center",
        error: e
      });
    }
    reactCoreLibraryReexport.useEffect(() => {
      n(s, o);
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      n(s, o);
      return () => {
        if (n != null) {
          n(s, false);
        }
      };
    }, [s]);
    let a = reactCoreLibraryReexport.useMemo(() => ti(n), [n]);
    if (!r) {
      return null;
    }
    let {
      Content: u
    } = r;
    return reactJsxRuntimeCoreReexport.jsx(u, {
      ReceiveMessageBox: a,
      message: e,
      conversationId: t
    });
  };
  let ti = e => function (t) {
    return reactJsxRuntimeCoreReexport.jsx(tr, {
      ...t,
      pluginLoadCounter: e
    });
  };
  let to = () => {
    let {
      message: e,
      conversationId: t
    } = S();
    let {
      plugin: n,
      duplicateIdentifierList: r
    } = I("", e);
    if (r.length > 1) {
      let e = Error(`${r.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_group_bottom",
        error: e
      });
    }
    if (!n) {
      return null;
    }
    let {
      Content: l
    } = n;
    return reactJsxRuntimeCoreReexport.jsx(l, {
      message: e,
      conversationId: t
    });
  };
  let ts = e => {
    let {
      message: t,
      conversationId: n,
      pluginLoadCounter: r
    } = e;
    let {
      bottom: l
    } = chatStoreManager.useStoreSelector("chatMessageGroupLayoutStore", e => e.getMessageGroupArea(), deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(w.Provider, {
      value: {
        message: t,
        conversationId: n,
        pluginLoadCounter: r
      },
      children: reactJsxRuntimeCoreReexport.jsx(k, {
        MessageGroupBottomFoundation: l.visible ? to : null,
        MessageGroupCenterFoundation: tl
      })
    });
  };
  let ta = e => {
    let {
      conversationId: t,
      messageLink: n,
      pluginLoadCounter: r
    } = e;
    let l = chatMessageStoreFactory.createMessageStore(e => conversationMessageUtils_1.getMessageFromLink(e, t, n), deepEqualityUtil.deepEqual);
    if (l) {
      return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
        errorBoundaryName: "message_group_error",
        FallbackComponent: messageErrorFallback.MessageErrorView,
        onError: (e, n) => {
          messageErrorHandler.handleMessageShowError({
            message: l,
            reason: "base_message_group_error",
            error: e,
            from: "base_message_group_error",
            meta: {
              info: n
            }
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "message_group_error",
            error: e,
            meta: {
              info: n,
              conversation_id: t,
              message_id: l.message_id,
              content_type: String((l == null ? undefined : l.content_type) ?? "unknown"),
              is_send: 0
            }
          });
        },
        children: reactJsxRuntimeCoreReexport.jsx(ts, {
          message: l,
          conversationId: t,
          pluginLoadCounter: r
        })
      });
    } else {
      return null;
    }
  };
  var flowApiServiceManagerModules = require("flow-api-service-manager-modules") /*id: 841401*/;
  let tc = reactCoreLibraryReexport.createContext({
    onEnterEditMode: () => null,
    editMode: false,
    message: null,
    onExitEditMode: () => null,
    pluginLoadCounter: () => null
  });
  let td = () => {
    let {
      message: e,
      ...t
    } = reactCoreLibraryReexport.useContext(tc);
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
  let tf = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      editMode: l
    } = td();
    let {
      plugin: i,
      duplicateIdentifierList: o
    } = flowApiServiceManagerModules.unknown_3(r);
    if (o.length > 1) {
      let e = Error(`${o.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_top",
        error: e
      });
    }
    if (!i || l) {
      return null;
    }
    let {
      Content: s
    } = i;
    return reactJsxRuntimeCoreReexport.jsx(s, {
      message: r,
      mouseOver: t,
      inView: n
    });
  };
  let tv = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      editMode: l
    } = td();
    let {
      plugin: i,
      duplicateIdentifierList: o
    } = flowApiServiceManagerModules.unknown(r);
    if (o.length > 1) {
      let e = Error(`${o.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_right",
        error: e
      });
    }
    if (!i || l) {
      return null;
    }
    let {
      Content: s
    } = i;
    return reactJsxRuntimeCoreReexport.jsx(s, {
      message: r,
      mouseOver: t,
      inView: n
    });
  };
  let tp = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      editMode: l
    } = td();
    let {
      plugin: i,
      duplicateIdentifierList: o
    } = flowApiServiceManagerModules.unknown_4(r);
    if (o.length > 1) {
      let e = Error(`${o.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_left",
        error: e
      });
    }
    if (!i || l) {
      return null;
    }
    let {
      Content: s
    } = i;
    return reactJsxRuntimeCoreReexport.jsx(s, {
      message: r,
      mouseOver: t,
      inView: n
    });
  };
  let tm = () => null;
  let tg = e => {
    let {
      message: t,
      inView: n,
      editMode: r,
      onExitEditMode: i,
      mouseOver: o,
      pluginLoadCounter: s
    } = e;
    let a = reactCoreLibraryReexport.useRef(false);
    let {
      pluginIdentifier: u,
      plugin: c,
      loading: d,
      duplicateIdentifierList: f,
      pluginLoadId: v
    } = flowApiServiceManagerModules.unknown_2(t);
    if (f.length > 1) {
      let e = Error(`${f.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box",
        error: e
      });
    }
    reactCoreLibraryReexport.useEffect(() => {
      s(v, d);
    }, [d]);
    reactCoreLibraryReexport.useEffect(() => {
      s(v, d);
      return () => {
        if (s != null) {
          s(v, false);
        }
      };
    }, [v]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t.is_finish && !a.current) {
        a.current = true;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "deprecated_message_render",
          meta: {
            type: "send",
            pluginType: "content",
            messageId: t.message_id || t.local_message_id,
            pluginId: String(u)
          }
        });
      }
    }, [t.is_finish]);
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx(dotFlashingLoaderComponent.DotFlashingLoader, {});
    }
    if (!c) {
      return null;
    }
    let {
      EditableContent: p = tm,
      Content: g = tm
    } = c;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "max-w-full",
      "data-plugin-identifier": String(u),
      children: r ? reactJsxRuntimeCoreReexport.jsx(p, {
        message: t,
        onExit: i,
        inView: n,
        mouseOver: o
      }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(g, {
          message: t,
          inView: n,
          mouseOver: o
        })
      })
    });
  };
  var pluginNodeWrap = require("plugin-node-wrap") /*id: 443134*/;
  let t_ = () => "flex justify-end";
  let tb = e => {
    let {
      pluginIdentifier: t,
      node: n,
      pluginLoadCounter: r,
      inView: i,
      mouseOver: o,
      onFirstRender: s,
      renderContext: a
    } = e;
    let u = reactCoreLibraryReexport.useRef(false);
    let {
      plugin: c,
      loading: f,
      error: v
    } = chatPluginIocManager.sendMsgNodeHook(t);
    let p = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r != null) {
        r(p, f);
      }
      if (!f && !!c && !u.current) {
        u.current = true;
        if (s != null) {
          s(t);
        }
      }
    }, [f]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r != null) {
        r(p, f);
      }
      return () => {
        if (r != null) {
          r(p, false);
        }
      };
    }, [p]);
    if (v) {
      throw v;
    }
    if (f) {
      return null;
    }
    let m = pluginNodeWrap.PluginNodeWrap;
    if (c) {
      return reactJsxRuntimeCoreReexport.jsx(m, {
        useDefaultClassName: t_,
        plugin: c,
        node: n,
        inView: i,
        mouseOver: o,
        renderContext: a
      });
    } else {
      return null;
    }
  };
  let tx = e => {
    let {
      pluginIdentifier: t,
      node: n,
      pluginLoadCounter: r,
      inView: i,
      mouseOver: o,
      onExit: s,
      renderContext: a
    } = e;
    let {
      plugin: u,
      loading: c,
      error: f
    } = chatPluginIocManager.sendMsgNodeHook(t);
    let v = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r != null) {
        r(v, c);
      }
    }, [c]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r != null) {
        r(v, c);
      }
      return () => {
        if (r != null) {
          r(v, false);
        }
      };
    }, [v]);
    if (f) {
      throw f;
    }
    if (c) {
      return null;
    }
    let p = pluginNodeWrap.PluginNodeWrap;
    let m = u == null ? undefined : u.EditableContent;
    if (m) {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        useDefaultClassName: t_,
        plugin: {
          ...u,
          Content: m
        },
        node: n,
        inView: i,
        mouseOver: o,
        onExit: s,
        renderContext: a
      });
    } else {
      return null;
    }
  };
  let ty = e => ({
    messageNodeRenderConfigs: e.filter(e => !!e.type).map(e => ({
      node: e,
      pluginIdentifier: e.type,
      PluginNodeRender: tb,
      EditablePluginNodeRender: tx
    }))
  });
  let tk = e => {
    let t = e.unique_id || e.message_id;
    return reactCoreLibraryReexport.useCallback(n => {
      if (t && n !== undefined) {
        chatMessagePerfStore.updateSendMsgPerf(t, {
          end: performanceTimeUtil.getPerformanceNow(),
          nodeId: n
        });
      }
      let r = chatMessagePerfStore.getSendMsgPerf(t);
      if (t && r && e.create_from !== "sse-stream") {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "im_chat_message_render_perf",
          meta: {
            send_message_perf: r.start && r.end ? r.end - r.start : undefined,
            send_message_node_id: r == null ? undefined : r.nodeId,
            is_create_new_conversation: false,
            render_type: r == null ? undefined : r.render_type
          }
        });
        chatMessagePerfStore.deleteSendMsgPerf(t);
      }
    }, [t]);
  };
  let tw = e => {
    let {
      message: n,
      inView: r,
      mouseOver: i,
      editMode: o,
      onExitEditMode: s,
      pluginLoadCounter: a
    } = e;
    let u = blockTreeBuilderUtils.buildBlockTree(n.content_blocks_v2 || []);
    let {
      renderStatus: c,
      resetRenderStatus: d,
      onMessageNodeRenderError: f
    } = messageRenderStatusTracker.useMessageRenderStatusTracker(n, u, "send");
    let {
      messageNodeRenderConfigs: v
    } = ty(u);
    let p = reactCoreLibraryReexport.useMemo(() => ({
      message: n
    }), [n]);
    let m = tk(n);
    let g = messageStatusContentBlocksMapper.mapMessageToStatusAndBlocks(n);
    if (!(v == null ? undefined : v.length)) {
      return null;
    }
    if (u.every(e => c[e.id])) {
      return reactJsxRuntimeCoreReexport.jsx(messageErrorFallback.MessageErrorView, {
        error: Error("message render error"),
        resetErrorBoundary: d
      });
    }
    let h = {
      onError: f,
      conversationId: n.conversation_id,
      sessionId: n.session_id,
      messageId: n.message_id,
      abilityType: chatAbilityTypeUtil.getChatAbilityType(n),
      llmIntentionDetail: n.ext?.llm_intention_detail
    };
    let b = v.map(e => {
      let {
        pluginIdentifier: t,
        PluginNodeRender: n,
        EditablePluginNodeRender: l,
        node: u
      } = e;
      if (o) {
        return reactJsxRuntimeCoreReexport.jsx(messageNodeErrorBoundaryWrapper.MessageNodeErrorBoundary, {
          node: u,
          scene: "flow-chat",
          type: "edit",
          ...h,
          children: reactJsxRuntimeCoreReexport.jsx(l, {
            pluginIdentifier: t,
            node: u,
            inView: r,
            mouseOver: i,
            onExit: s,
            renderContext: g
          }, u.id)
        }, u.id);
      } else {
        return reactJsxRuntimeCoreReexport.jsx(messageNodeErrorBoundaryWrapper.MessageNodeErrorBoundary, {
          node: u,
          scene: "flow-chat",
          type: "send",
          ...h,
          children: reactJsxRuntimeCoreReexport.jsx(n, {
            pluginIdentifier: t,
            node: u,
            inView: r,
            mouseOver: i,
            pluginLoadCounter: a,
            onFirstRender: m,
            renderContext: g
          }, u.id)
        }, u.id);
      }
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex max-w-full flex-col gap-8",
      children: reactJsxRuntimeCoreReexport.jsx(messageContextDefinition.MessageProvider, {
        value: p,
        children: b
      })
    });
  };
  let tS = e => {
    let {
      inView: r,
      mouseOver: l
    } = e;
    let {
      message: i,
      editMode: o,
      onExitEditMode: s,
      pluginLoadCounter: u
    } = td();
    let c = blockTreeBuilderUtils.useMemoBlockNodes(i.content_blocks_v2 || []);
    let d = blockTreeBuilderUtils.checkBlockTypeMatch(c) ? tw : tg;
    let f = i.unique_id ?? i.local_message_id ?? i.message_id;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: e => {
        if (e && i.message_id) {
          messageViewActions.setMessageBoxItem(i.message_id, e);
        }
      },
      "data-testid": "message_content",
      "data-message-id": i.message_id,
      className: "flex-row flex w-full justify-end",
      children: [o ? null : reactJsxRuntimeCoreReexport.jsx(X, {
        message: i,
        className: "m-8 flex-shrink-0 text-s-color-alert"
      }), reactJsxRuntimeCoreReexport.jsx(d, {
        inView: r,
        mouseOver: l,
        message: i,
        pluginLoadCounter: u,
        editMode: o,
        onExitEditMode: s
      }, f)]
    });
  };
  let tj = e => {
    let {
      pluginIdentifier: t,
      ...n
    } = e;
    let {
      plugin: r,
      loading: l
    } = chatPluginIocManager.sendMsgActionBtnHook(t);
    if (l) {
      return null;
    }
    let i = r == null ? undefined : r.ButtonContentGroups;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i ? i.map((e, r) => reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      }, String(t) + r)) : null
    });
  };
  let tC = e => {
    let {
      pluginIdentifier: t,
      ...n
    } = e;
    let {
      plugin: r,
      loading: l
    } = chatPluginIocManager.sendMsgActionBtnHook(t);
    if (l) {
      return null;
    }
    let i = r == null ? undefined : r.DropdownItemContentGroups;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i ? i.map((e, r) => reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      }, String(t) + r)) : null
    });
  };
  let tM = (e, t) => {
    let {
      matcher: n = []
    } = chatPluginMatcherRegistry.useSendMessageActionMatcher();
    return {
      messageActionPluginConfig: (n ?? []).filter(e => !!e).map(t => t.matchPlugin(e) ? t : undefined).filter(e => (e == null ? undefined : e.pluginIdentifier) !== undefined).map(e => ({
        pluginIdentifier: e.pluginIdentifier,
        area: e.area,
        actionType: e.actionType,
        onEnterEditMode: t,
        ButtonContentGroupLoader: tj,
        DropdownItemContentGroupLoader: tC
      }))
    };
  };
  let tI = e => {
    let {
      message: t,
      inView: n,
      mouseOver: r,
      onEnterEditMode: l
    } = e;
    let {
      messageActionPluginConfig: i
    } = tM(t, l);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "select-none",
      "data-foundation-type": "send-message-action-bar",
      children: reactJsxRuntimeCoreReexport.jsx(e0, {
        message: t,
        inView: n,
        mouseOver: r,
        pluginConfigs: i
      })
    });
  };
  let tT = e => {
    let {
      mouseOver: t,
      inView: n
    } = e;
    let {
      message: r,
      editMode: l,
      onEnterEditMode: i
    } = td();
    let {
      plugin: o,
      duplicateIdentifierList: s
    } = flowApiServiceManagerModules.unknown_1(r);
    if (s.length > 1) {
      let e = Error(`${s.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_send_message_box_bottom",
        error: e
      });
    }
    if (!o) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-40"
      });
    }
    if (l) {
      return null;
    }
    let {
      Content: a
    } = o;
    return reactJsxRuntimeCoreReexport.jsx(a, {
      message: r,
      mouseOver: t,
      inView: n,
      actionBarComponentNode: reactJsxRuntimeCoreReexport.jsx(tI, {
        message: r,
        mouseOver: t,
        inView: n,
        onEnterEditMode: i
      })
    });
  };
  let tN = e => {
    let {
      message: t,
      pluginLoadCounter: n
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState(false);
    let o = reactCoreLibraryReexport.useCallback(() => {
      i(true);
    }, [i]);
    let a = reactCoreLibraryReexport.useCallback(() => {
      i(false);
    }, [i]);
    let d = conversationMessageUtils_1.checkMessageId(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t.message_id || "") && r;
    let f = chatStoreManager.useStoreSelector("chatMessageBoxLayoutStore", e => e.sendMessageBoxConfig.containerDataAttr, deepEqualityUtil.deepEqual);
    let v = chatStoreManager.useStoreSelector("chatMessageBoxLayoutStore", e => e.getMessageBoxArea(), deepEqualityUtil.deepEqual);
    let m = reactCoreLibraryReexport.useMemo(() => ({
      message: t,
      editMode: d,
      onEnterEditMode: o,
      onExitEditMode: a,
      pluginLoadCounter: n
    }), [t, d, o, a, n]);
    return reactJsxRuntimeCoreReexport.jsx(tc.Provider, {
      value: m,
      children: reactJsxRuntimeCoreReexport.jsx(messageBoxFoundation.MessageBoxFoundation, {
        dataAttributes: {
          "data-attr": f,
          "data-testid": "send_message"
        },
        className: s("w-full max-w-full s-font-base text-s-color-text-secondary p-0 rounded-s-radius-s bg-transparent", "data-[attr=select-mode]:-mt-10 data-[attr=select-mode]:py-10 data-[attr=select-mode]:px-16 data-[attr=select-mode]:sm:p-10 data-[attr=select-mode]:hover:bg-s-color-bg-base data-[attr=select-mode]:hover:rounded-s-radius-xs", "data-[attr=select-mode]:has-[:checked]:bg-s-color-bg-trans data-[attr=select-mode]:has-[:checked]:rounded-s-radius-xs", "data-[attr=select-mode]:pointer-events-none"),
        inlineEnd: true,
        MessageBoxTopFoundation: v.top.visible ? tf : null,
        MessageBoxLeftFoundation: v.left.visible ? tp : null,
        MessageBoxBottomFoundation: v.bottom.visible ? tT : null,
        MessageBoxRightFoundation: v.right.visible ? tv : null,
        MessageBoxCenterFoundation: tS
      })
    });
  };
  let tL = e => {
    let {
      conversationId: t,
      messageLink: n,
      pluginLoadCounter: r,
      lastAvaliableMessageId: l
    } = e;
    let i = chatMessageStoreFactory.createMessageStore(e => conversationMessageUtils_1.getMessageFromLink(e, t, n), deepEqualityUtil.deepEqual);
    let o = messageContentTypeAndStatusChecker.Yns(i);
    if (messageContentTypeAndStatusChecker.z_e(i) && i) {
      return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
        errorBoundaryName: "message_box_error",
        FallbackComponent: messageErrorFallback.MessageErrorView,
        onError: (e, n) => {
          messageErrorHandler.handleMessageShowError({
            message: i,
            reason: "base_message_box_error",
            error: e,
            from: "base_message_box_error",
            meta: {
              info: n
            }
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "message_box_error",
            error: e,
            meta: {
              info: n,
              conversation_id: t,
              message_id: i.message_id,
              content_type: String((i == null ? undefined : i.content_type) ?? "unknown"),
              is_send: +!!o
            }
          });
        },
        children: o ? reactJsxRuntimeCoreReexport.jsx(tN, {
          message: i,
          pluginLoadCounter: r
        }) : reactJsxRuntimeCoreReexport.jsx(tr, {
          message: i,
          pluginLoadCounter: r,
          lastAvaliableMessageId: l
        })
      });
    } else {
      return null;
    }
  };
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var cssModuleClassMapping = require("css-module-class-mapping") /*id: 511756*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  let tO = e => {
    let {
      conversationId: t
    } = e;
    if (!t) {
      return false;
    }
    let n = chatMessageStoreFactory.createMessageStore.getState();
    let r = conversationMessageUtils_1.getReplyMessage(n, t);
    return !!r && conversationMessageUtils_1.getAvailableMessage(n, t) === r;
  };
  var fpsMonitoringHook = require("fps-monitoring-hook") /*id: 510340*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var throttledArrayIntersection = require("throttled-array-intersection") /*id: 832949*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var reactDeepChangeCb = require("react-deep-change-cb") /*id: 699565*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let t2 = () => typeof performance != "undefined" ? performance.now() : Date.now();
  let t4 = e => {
    let {
      heightMap: t,
      ids: n,
      scrollTop: r,
      contentHeight: l
    } = e;
    let i = 0;
    for (let e of n) {
      let n = !isUndefinedCheck.isUndefined(l) && i < r && i + t[e] > r + l;
      if (i >= r || n) {
        return {
          id: e,
          top: i - r
        };
      }
      i += t[e] ?? 0;
    }
    return null;
  };
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var scrollIntoViewWrapper = require("scroll-into-view-wrapper") /*id: 180637*/;
  var resizeObserverWrapper = require("resize-observer-wrapper") /*id: 887176*/;
  function t9(e) {
    let {
      className: t,
      style: n,
      item: r,
      scrollIntoItemId: l,
      children: i,
      getId: o,
      onInView: a,
      onResize: u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(resizeObserverWrapper.ResizeObserverWrapper, {
      onResize: u,
      children: (e, u) => reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
        className: s("container-PvPoAn", t),
        style: n,
        onChange: e => {
          if (a != null) {
            a(o(r), e);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(scrollIntoViewWrapper.ScrollIntoViewWrap, {
          className: "item-kDun2N",
          ref: u,
          enabled: !isUndefinedCheck.isUndefined(l) && l === (o == null ? undefined : o(r)),
          children: i(r, {
            anchorTopRef: e
          })
        })
      })
    });
  }
  let t8 = reactCoreLibraryReexport.memo(t9, (e, t) => deepEqualUtil_1.deepEqual(objectExcludeFilterUtil.filterObjectExclude(e, isFunctionUtil_1.isFunction), objectExcludeFilterUtil.filterObjectExclude(t, isFunctionUtil_1.isFunction)));
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  let nt = {
    offsetHeight: 0,
    offsetWidth: 0,
    height: 0,
    width: 0
  };
  let nn = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      dataList: n,
      getId: r,
      children: i,
      top: o,
      bottom: a,
      keepedBottom: u,
      enableInterAnchor: c = true,
      enableHorizontalAnchor: d = true,
      enableVerticalAnchor: f = true,
      reverse: v = true,
      memorizeItem: p = false,
      bottomAttaching: m = true,
      anchorWhenOverflow: g = true,
      overflowAnchorOffset: h = 0,
      anchorWhenScrolling: _ = true,
      onScroll: b,
      onReachTop: x,
      onReachBottom: k,
      onInViewItemsChange: w,
      className: S,
      style: j,
      "data-testid": C
    } = e;
    let M = reactCoreLibraryReexport.useRef(null);
    let I = reactCoreLibraryReexport.useRef();
    let T = reactCoreLibraryReexport.useRef(null);
    let N = reactCoreLibraryReexport.useRef(null);
    let L = reactCoreLibraryReexport.useRef();
    let E = reactCoreLibraryReexport.useRef();
    let R = reactCoreLibraryReexport.useRef();
    let B = reactCoreLibraryReexport.useRef([]);
    let Z = reactCoreLibraryReexport.useMemo(() => n.map(r), [n]);
    let D = usePreviousHook.usePrevious(Z);
    let z = reactCoreLibraryReexport.useRef(v);
    let P = reactCoreLibraryReexport.useRef(!v);
    let A = reactCoreLibraryReexport.useRef(null);
    let V = reactCoreLibraryReexport.useRef();
    let O = reactCoreLibraryReexport.useRef();
    let [H, W] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(H)) {
        W(undefined);
      }
    }, [H]);
    reactDeepChangeCb.useDeepChangeCb(() => {
      if (!v && (!D || !throttledArrayIntersection.throttledIntersect(D, Z).length)) {
        var e;
        if ((e = M.current) !== null && e !== undefined) {
          e.scrollToBottom();
        }
      }
    }, [Z]);
    reactDeepChangeCb.useDeepChangeCb(() => {
      B.current = B.current.filter(e => Z.includes(e));
      if (!v) {
        X();
      }
    }, [Z]);
    let F = (e, t) => {
      I.current ||= {};
      let n = r(e);
      if (t !== I.current[n]) {
        I.current[n] = t;
      }
    };
    let G = e => {
      return I.current?.[r(e)];
    };
    let U = function (e = 0) {
      if (M.current) {
        z.current = M.current.getScrollBottom() < 20 + e;
      }
    };
    let q = function (e = 0) {
      if (M.current) {
        P.current = M.current.getScrollTop() < 20 + e;
      }
    };
    let K = () => !!M.current && M.current.getScrollBottom() < 20;
    let X = () => {
      if (M.current && z.current) {
        M.current.scrollToBottom();
      }
    };
    let $ = e => isBooleanUtil.isBoolean(m) ? m : m(e);
    let Q = e => {
      let {
        item: o,
        currentHeight: s,
        previousHeight: a
      } = e;
      if (!M.current || o !== lastElementHelper.getLastElement(n) || !(isBooleanUtil.isBoolean(g) ? g : g(o)) || !a) {
        return false;
      }
      let u = M.current.getContainerHeight();
      let c = n.indexOf(o);
      let d = isNumberUtil.isNumber(h) ? h : h(o);
      let f = n.slice(c - d, c);
      let v = arraySumByMatcher.sumByMatcher(f, e => {
        return G(e) ?? 0;
      });
      return s > u + 20 - (T.current?.clientHeight ?? 0) - (N.current?.clientHeight ?? 0) - v;
    };
    let J = e => isFunctionUtil_1.isFunction(_) ? _(e) : _;
    let Y = e => {
      var t;
      var n;
      let r = isFunctionUtil_1.isFunction(c) ? c(e) : c;
      return ((n = M.current) === null || n === undefined || (t = n.isScrollAnchoringPaused) === null || t === undefined || !t.call(n)) && r;
    };
    let ee = () => isUndefinedCheck.isUndefined(E.current) ? Infinity : t2() - E.current;
    let et = () => isUndefinedCheck.isUndefined(R.current) ? Infinity : t2() - R.current;
    let en = async e => {
      if (V.current !== e) {
        V.current = e;
        if (!!v && !!d && !K()) {
          await ef();
          ep();
        }
      }
    };
    let er = async e => {
      let {
        current: t,
        previous: n
      } = e;
      if (!n || t.offsetWidth === n.offsetWidth && t.offsetHeight !== n.offsetHeight && isUndefinedCheck.isUndefined(E.current)) {
        await promiseAsyncUtilities.createDelayedPromise(0);
        ep();
      }
    };
    let el = (e, t) => {
      let {
        current: l,
        previous: i = nt
      } = t;
      if (!M.current) {
        return;
      }
      let {
        offsetHeight: o
      } = l;
      let {
        offsetHeight: s
      } = i ?? {};
      let a = o - s;
      if (s) {
        U(Math.max(0, a));
        if ($(e) && !Q({
          item: e,
          currentHeight: o,
          previousHeight: s
        })) {
          X();
        }
      }
      let u = A.current?.id;
      if (u && Z.indexOf(r(e)) < Z.indexOf(u) && P.current) {
        let e = M.current.getScrollTop();
        if (a) {
          M.current.scrollTo(e + a);
        }
      }
    };
    let ei = (e, t) => {
      let {
        current: l,
        previous: i = nt,
        targetStandBy: o
      } = t;
      let {
        offsetHeight: s,
        offsetWidth: a
      } = l;
      let {
        offsetHeight: u,
        offsetWidth: c
      } = i ?? {};
      if (!c || !a) {
        return;
      }
      if (a !== c) {
        en(a);
        return;
      }
      if (!M.current || !Y(e) || !o) {
        return;
      }
      let d = ee();
      if (d < 50 && d > 1 && !J(e) || (s && o.offsetHeight !== s && (o.style.height = `${s}px`), M.current.getScrollBottom() < 20 && $(e) && !Q({
        item: e,
        currentHeight: s,
        previousHeight: u
      }))) {
        return;
      }
      let f = A.current?.id;
      if (!f || Z.indexOf(r(e)) < Z.indexOf(f)) {
        return;
      }
      let v = M.current.getScrollTop();
      let p = s - u;
      if (p < 0 && -p > v) {
        if (!isUndefinedCheck.isUndefined(L.current)) {
          M.current.scrollTo(L.current);
        }
        return;
      }
      M.current.scrollTo(v - p);
      L.current = M.current.getScrollTop();
    };
    let eo = skillPinModalCallback.useSkillPinCallback((e, t) => {
      if (t) {
        if (!B.current.includes(e)) {
          B.current.push(e);
        }
      } else {
        B.current = B.current.filter(t => t !== e);
      }
      if (w) {
        w(B.current.map(e => n.find(t => r(t) === e)).filter(e => !isUndefinedCheck.isUndefined(e)));
      }
    });
    let es = skillPinModalCallback.useSkillPinCallback((e, t) => {
      let {
        current: {
          offsetHeight: n
        }
      } = t;
      F(e, n);
      if (v) {
        ei(e, t);
      } else {
        el(e, t);
      }
    });
    let ea = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        previous: n,
        current: r
      } = e;
      O.current = r.offsetHeight;
      if (!v || !f || !n || !M.current) {
        return;
      }
      let {
        offsetHeight: l,
        offsetWidth: i
      } = n;
      let {
        offsetHeight: o,
        offsetWidth: s
      } = r;
      if (s !== i) {
        return;
      }
      let a = o - l;
      if (!a) {
        return;
      }
      let u = M.current.getScrollTop();
      let c = t4({
        heightMap: I.current ?? {},
        ids: Z,
        scrollTop: u,
        contentHeight: l
      });
      if (c) {
        ec(c);
      }
      M.current.scrollTo(u + a);
    });
    let eu = e => {
      let t = Z.indexOf(e.id);
      if (t === -1) {
        return;
      }
      let n = Z.slice(0, t);
      return (n.length ? arraySumByMatcher.sumByMatcher(n, e => {
        return I.current?.[e] ?? 0;
      }) : 0) - e.top;
    };
    let ec = skillPinModalCallback.useSkillPinCallback(e => {
      if (!M.current) {
        return;
      }
      let t = e ?? A.current;
      if (!t) {
        return;
      }
      let n = eu(t);
      if (isUndefinedCheck.isUndefined(n) || n < 0) {
        return;
      }
      let r = M.current.getContainer();
      if (!(n > r.scrollHeight - r.scrollTop)) {
        M.current.scrollTo(n);
      }
    });
    let ed = skillPinModalCallback.useSkillPinCallback(() => {
      if (!A.current || !M.current) {
        return;
      }
      let e = eu(A.current);
      if (isUndefinedCheck.isUndefined(e) || e < 0 || Math.abs(M.current.getScrollTop() - e) < 1) {
        return;
      }
      let t = M.current.getContainer();
      if (!(e > t.scrollHeight - t.scrollTop)) {
        M.current.scrollTo(e);
        R.current = t2();
      }
    });
    let ef = async () => {
      for (let e = 0; e < 5; e++) {
        await new Promise(e => requestAnimationFrame(e));
        ed();
      }
    };
    let ev = skillPinModalCallback.useSkillPinCallback(() => {
      if (!M.current) {
        return;
      }
      let e = M.current.getScrollTop();
      if ((!(ee() > 50) || e !== 0) && !(ee() > 50) && !(et() < 50)) {
        ep();
      }
    });
    let ep = skillPinModalCallback.useSkillPinCallback(() => {
      if (!M.current) {
        return;
      }
      let t = M.current.getScrollTop();
      let n = t4({
        heightMap: I.current ?? {},
        ids: Z,
        scrollTop: t,
        contentHeight: O.current
      });
      if (!deepEqualUtil_1.deepEqual(n, A.current)) {
        A.current = n;
      }
    });
    let em = e => e ? {
      ...e,
      scrollIntoItemsById: W
    } : null;
    let eg = reactCoreLibraryReexport.useCallback(e => {
      let n = em(e);
      if (isFunctionUtil_1.isFunction(t)) {
        t(n);
      } else if (t) {
        t.current = n;
      }
      M.current = e;
    }, []);
    let eh = reactJsxRuntimeCoreReexport.jsx("div", {
      ref: N,
      className: "top-FLPRDF",
      children: isFunctionUtil_1.isFunction(o) ? o() : o
    });
    let e_ = reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: T,
      className: "bottom-C8bVRp",
      children: [isFunctionUtil_1.isFunction(a) ? a() : a, isFunctionUtil_1.isFunction(u) ? u() : u]
    });
    let eb = p ? t8 : t9;
    return reactJsxRuntimeCoreReexport.jsxs(scrollViewComponent.ScrollView, {
      "data-testid": C,
      ref: eg,
      className: s("container-gkoWqI", S, {
        "reverse-BdVQca": v
      }),
      style: j,
      showScrollbar: !userAgentDeviceDetector.isWebKitDesktop(),
      reverse: v,
      onScroll: () => {
        ev();
        E.current = t2();
        if (b != null) {
          b();
        }
      },
      reachBottomThreshold: 20,
      reachTopThreshold: 20,
      onReachBottom: () => {
        if (k != null) {
          k();
        }
        U();
      },
      onLeaveBottom: U,
      onReachTop: () => {
        if (x != null) {
          x();
        }
        q();
      },
      onLeaveTop: q,
      onContentResize: ea,
      children: [v ? e_ : eh, reactJsxRuntimeCoreReexport.jsx(resizeObserverWrapper.ResizeObserverWrapper, {
        onResize: er,
        children: e => reactJsxRuntimeCoreReexport.jsx("div", {
          ref: e,
          className: s("inter-H_fm37"),
          children: n.map(e => reactJsxRuntimeCoreReexport.jsx(eb, {
            item: e,
            scrollIntoItemId: H,
            getId: r,
            onInView: eo,
            onResize: t => {
              es(e, t);
            },
            children: i
          }, r(e)))
        })
      }), v ? eh : e_]
    });
  });
  var messageContentValidator = require("message-content-validator") /*id: 841656*/;
  let nl = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      dataList: n,
      children: r,
      top: i,
      bottom: o,
      keepedBottom: s,
      onInViewItemsChange: a,
      className: d,
      style: f,
      onReachTop: v,
      onReachBottom: m,
      conversationId: g,
      ...h
    } = e;
    let {
      onScroll: _
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    let {
      chatViewRef: b,
      scrollRef: x
    } = chatRefsContext.useChatRefs();
    let {
      onScrollForFPS: k
    } = fpsMonitoringHook.useScrollTriggeredFps({
      eventName: "message-list-fps-report"
    });
    let w = reactCoreLibraryReexport.useCallback(() => {
      var t;
      if (_ != null) {
        _();
      }
      let r = chatMessageStatusCheck.isMessageFinished(conversationMessageUtils_1.getMessage(chatMessageStoreFactory.createMessageStore.getState(), g || ""));
      k({
        version: "0",
        message_count: n.length,
        last_message_is_finish: r ? "1" : "0",
        open_canvas: ((t = chatStoreManager.getStore("chatViewCanvasStore")) === null || t === undefined ? undefined : t.getState()?.isExpand) ? "1" : "0"
      });
    }, [_, k]);
    let S = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      setEnableInterAnchor: j
    }), []);
    let j = skillPinModalCallback.useSkillPinCallback(e => {
      S.current = e;
    });
    let C = skillPinModalCallback.useSkillPinCallback(() => S.current);
    let M = skillPinModalCallback.useSkillPinCallback(() => {
      var e;
      var t;
      if ((t = b.current) !== null && t !== undefined && (e = t.onLoadMore) !== null && e !== undefined) {
        e.call(t);
      }
      if (v != null) {
        v();
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(nn, {
      ...h,
      className: d,
      style: f,
      reverse: !messageContentValidator.isLegacyBrowser(),
      dataList: n,
      getId: e => {
        return (e == null ? undefined : e.id) ?? "";
      },
      top: i,
      bottom: o,
      keepedBottom: s,
      memorizeItem: true,
      onReachTop: M,
      onReachBottom: m,
      ref: x,
      onScroll: w,
      onInViewItemsChange: a,
      enableInterAnchor: C,
      anchorWhenOverflow: messageContentValidator.isValidMessageContent,
      overflowAnchorOffset: () => messageContentValidator.getMessageCount(),
      anchorWhenScrolling: messageContentValidator.isDividerOrValidMessage,
      children: r
    });
  });
  let ni = e => {
    let {
      bottomThreshold: t = 0,
      onShow: n,
      onHide: r
    } = e;
    let {
      inView: i,
      ref: o
    } = reactIntersectionObserver_1.useInView({
      initialInView: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        if (n != null) {
          n();
        }
      } else if (r != null) {
        r();
      }
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "container-E4s_D2",
      ref: o,
      style: {
        height: t
      }
    });
  };
  var toBottomButtonComponent = require("to-bottom-button-component") /*id: 256337*/;
  require("empty-module-function") /*id: 475553*/;
  let ns = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      conversationId: n,
      dataList: r,
      children: i,
      top: o,
      bottom: a,
      className: u,
      bottomCenterButton: c,
      onInViewItemsChange: d,
      style: f,
      Container: v = chatMaxWidthLayout.chatLayout.MaxWidthLayout
    } = e;
    let p = reactCoreLibraryReexport.useRef(null);
    let m = reactCoreLibraryReexport.useRef(0);
    let {
      scrollRef: g
    } = chatRefsContext.useChatRefs();
    let h = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = h.current) !== null && e !== undefined) {
        e.setEnableInterAnchor(true);
      }
    }, [r.length]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      "data-table-spillover": "true",
      "data-table-spillover-force-disable": "true",
      className: s(cssModuleClassMapping.classMapping["message-list"], cssModuleClassMapping.classMapping["table-spillover"], u),
      style: f,
      children: [reactJsxRuntimeCoreReexport.jsx(nl, {
        "data-testid": "message-list",
        ref: h,
        dataList: r,
        conversationId: n,
        top: reactJsxRuntimeCoreReexport.jsx(v, {
          className: cssModuleClassMapping.classMapping["top-item"],
          children: isFunctionUtil_1.isFunction(o) ? o() : o
        }),
        bottom: reactJsxRuntimeCoreReexport.jsx(v, {
          className: cssModuleClassMapping.classMapping["bottom-item"],
          children: isFunctionUtil_1.isFunction(a) ? a() : a
        }),
        keepedBottom: reactJsxRuntimeCoreReexport.jsx(ni, {
          onShow: () => {
            var e;
            if ((e = p.current) !== null && e !== undefined) {
              e.setVisible(false);
            }
            m.current += 1;
          },
          onHide: () => {
            var e;
            var t;
            var r;
            if (tO({
              conversationId: n
            })) {
              if ((t = p.current) !== null && t !== undefined) {
                t.setVisible(true);
              }
            } else if (m.current > 2) {
              if ((r = p.current) !== null && r !== undefined) {
                r.setVisible(true);
              }
            }
            m.current += 1;
            if ((e = h.current) !== null && e !== undefined) {
              e.setEnableInterAnchor(true);
            }
          },
          bottomThreshold: "min(100%, 50px)"
        }),
        onInViewItemsChange: d,
        onReachBottom: () => {
          var e;
          if ((e = h.current) !== null && e !== undefined) {
            e.setEnableInterAnchor(false);
          }
        },
        children: function (e, t = {}) {
          return reactJsxRuntimeCoreReexport.jsx(v, {
            "data-target-id": "message-box-target-id",
            className: cssModuleClassMapping.classMapping["inner-item"],
            ref: t.anchorTopRef,
            "data-testid": "union_message",
            children: i(e)
          });
        }
      }), reactJsxRuntimeCoreReexport.jsx(v, {
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(cssModuleClassMapping.classMapping["bottom-center-button"], "max-dbx-xs:!bottom-0"),
          children: [c, reactJsxRuntimeCoreReexport.jsx(toBottomButtonComponent.ToBottomButton, {
            ref: p,
            className: s(cssModuleClassMapping.classMapping["to-bottom-button"]),
            conversationId: n,
            onClick: () => {
              var e;
              var t;
              var n;
              if ((e = p.current) !== null && e !== undefined) {
                e.setVisible(false);
              }
              if ((t = h.current) !== null && t !== undefined) {
                t.setEnableInterAnchor(false);
              }
              if ((n = g.current) !== null && n !== undefined) {
                n.scrollToBottom({
                  smooth: true
                });
              }
            }
          })]
        })
      })]
    });
  });
  var messageBlockUtils = require("message-block-utils") /*id: 829688*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let nd = e => {
    let {
      messageLinks: t,
      resolveConversationId: n
    } = conversationMessageUtils_2.useResolveConversationInfo(e);
    return {
      unionMessageList: messageBlockUtils.useMessageBlocks(e),
      visibleMessageLinks: (t ?? []).filter(e => {
        let t = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), n, e);
        return (t == null ? undefined : t.status) !== chatMessageTypes.PushMessageStatus.InVisible;
      }),
      resolveConversationId: n,
      rawMessageLinks: t
    };
  };
  let nf = (e, t) => {
    let {
      settingData: n
    } = chatStoreManager.getStore("launcherRawSettingStore").getState();
    if (objectPathGetDefault.getObjectPathDefault(n, "ab_config.ab_results.enable_conv_page_perf") !== "true") {
      return false;
    }
    let r = new Set();
    let l = new Set();
    let o = chatMessageStoreFactory.createMessageStore.getState();
    for (let n of t) {
      let t = conversationMessageUtils_1.getMessageFromLink(o, e, n);
      let c = blockTreeBuilderUtils.buildBlockNodes((t == null ? undefined : t.content_blocks_v2) || []);
      if (!blockTreeBuilderUtils.checkBlockTypeMatch(c)) {
        return false;
      }
      if ((t == null ? undefined : t.create_from) !== "sse-stream" && ((t == null ? undefined : t.ext?.is_crowd_testing) !== "1" || !(objectPathGetDefault.getObjectPathDefault(t, "sub_message_v2.sub_message_list")?.length > 0))) {
        if ((t == null ? undefined : t.user_type) === chatConstantsEnum.userType.HUMAN) {
          for (let e of c) {
            if (e.type) {
              r.add(e.type);
            }
          }
        } else if ((t == null ? undefined : t.user_type) === chatConstantsEnum.userType.AIBOT) {
          for (let e of c) {
            if (e.type) {
              l.add(e.type);
            }
          }
        }
      }
    }
    let f = chatPluginIocManager.sendMsgNodeChecker([...r]);
    let v = chatPluginIocManager.receiveMsgNodeChecker([...l]);
    let m = [...Object.values(f), ...Object.values(v)];
    return m.length !== 0 && m.every(Boolean);
  };
  let nv = (e, t) => {
    let n = reactCoreLibraryReexport.useRef(false);
    let r = reactCoreLibraryReexport.useRef(performanceTimeUtil.getPerformanceNow());
    let i = reactCoreLibraryReexport.useRef(undefined);
    if (Array.isArray(t) && e) {
      if (!n.current && i.current === undefined) {
        i.current = t.length > 0 ? "hot-switch" : "cold-start";
      }
      if (!n.current && t.length > 0) {
        n.current = true;
        t.forEach(t => {
          let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, t);
          if ((n == null ? undefined : n.user_type) === chatConstantsEnum.userType.HUMAN) {
            chatMessagePerfStore.updateSendMsgPerf(t.messageId, {
              start: r.current,
              render_type: i.current
            });
          }
          if ((n == null ? undefined : n.user_type) === chatConstantsEnum.userType.AIBOT) {
            chatMessagePerfStore.updateRecvMsgPerf(t.messageId, {
              start: r.current,
              render_type: i.current
            });
          }
        });
      }
    }
  };
  let np = e => {
    var t;
    return !!((t = e || document) === null || t === undefined ? undefined : t.querySelector("[data-target-id=\"message-box-target-id\"]"));
  };
  var messageViewStore = require("message-view-store") /*id: 241059*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  let nh = e => {
    let {
      matcher: t,
      loading: n
    } = chatPluginMatcherRegistry.useMessageListBottomBtnMatcher();
    if (n || !t) {
      return null;
    }
    let r = t.map(t => t(e)).filter(e => e !== undefined);
    let l = r.find(e => e !== undefined);
    let i = infraStringFilter.filterInfraStrings(r);
    if (i.length > 1) {
      let e = Error(`${i.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_message_list_bottom_btn_plugin",
        error: e
      });
    }
    return l;
  };
  let n_ = e => {
    let {
      pluginIdentifier: t,
      ...n
    } = e;
    let {
      plugin: r,
      loading: l
    } = chatPluginIocManager.msgListBottomBtnHook(t);
    if (l || !r) {
      return null;
    }
    let {
      Content: i
    } = r;
    return reactJsxRuntimeCoreReexport.jsx(i, {
      ...n
    });
  };
  let nb = e => {
    let {
      conversationId: t,
      unionMessageList: n
    } = e;
    let {
      isSelectMode: r
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      isSelectMode: e.isSelectMode
    }), deepEqualityUtil.deepEqual);
    let {
      inViewMessageList: l
    } = messageViewStore.messageStore(e => ({
      inViewMessageList: e.inViewMessageList
    }), deepEqualityUtil.deepEqual);
    let i = nh({
      isSelectMode: r,
      inViewMessageList: l,
      conversationId: t,
      unionMessageList: n
    });
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(n_, {
        pluginIdentifier: i,
        conversationId: t,
        inViewMessageList: l,
        unionMessageList: n
      });
    } else {
      return null;
    }
  };
  var messageSectionDivider = require("message-section-divider") /*id: 822506*/;
  var messageSkeletonLoader = require("message-skeleton-loader") /*id: 449904*/;
  let nk = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "relative top-0 left-0 z-10 w-full px-16",
    children: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {})
    })
  });
  let nw = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => ({
      default: (await Promise.all([require.e("samantha-message-utils") /*id: 79175*/, require.e("webpack-chunk-revision-service") /*id: 32845*/]).then(require.bind(require, "message-list-ui-component") /*id: 777682*/)).MessageListUI
    })
  })));
  let nS = reactCoreLibraryReexport.memo(function (e) {
    let {
      LoadMoreSlot: n,
      InnerAfterMessageListSlot: r,
      MessageBeforeSlot: o,
      LargeAvatarSlot: f,
      enableLoadMore: v = false,
      className: p,
      conversationId: h,
      disableSkeleton: _ = false,
      Container: b = chatMaxWidthLayout.chatLayout.MaxWidthLayout
    } = e;
    let x = reactCoreLibraryReexport.useRef(null);
    let k = chatPluginIocManager.pluginKeysGetter("chatMessageListLifeCyclePlugin");
    let {
      pluginList: w,
      loading: S
    } = chatPluginIocManager.msgListLifeCycleHook(k);
    let {
      unionMessageList: j,
      visibleMessageLinks: C,
      resolveConversationId: M,
      rawMessageLinks: I
    } = nd(h);
    nv(M, C);
    let T = nf(M, C);
    let {
      skeletonShow: N,
      pluginLoadCounter: L
    } = g(M, _ || T || I.length !== 0 && C.length === 0);
    reactCoreLibraryReexport.useEffect(() => {
      messageViewActions.resetMessageView();
      return () => {
        messageViewActions.resetMessageView();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!S) {
        w.forEach(e => {
          var t;
          if (e != null && (t = e.mounted) !== null && t !== undefined) {
            t.call(e, {
              conversationId: h
            });
          }
        });
        return () => {
          w.forEach(e => {
            var t;
            if (e != null && (t = e.unmounted) !== null && t !== undefined) {
              t.call(e, {
                conversationId: h
              });
            }
          });
        };
      }
    }, [S, h]);
    let E = conversationMessageUtils_1.findLastMessageLink(chatMessageStoreFactory.createMessageStore.getState(), h, chatMessageStoreFactory.createMessageStore.getState().messageLinkMap[h] ?? []);
    reactCoreLibraryReexport.useEffect(() => {
      if (N || !M) {
        return;
      }
      let t = np(x.current);
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "message_list_render",
        meta: {
          conversation_type: chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), M)?.conversation_type,
          bot_type: chatSkillPinTypeDeterminer.determineSkillPinType("", M),
          success: +!!t
        }
      });
    }, [M, N]);
    let R = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (!N && !R.current && !N && objectPathGetDefault.getObjectPathDefault(window, "performance") !== undefined) {
        R.current = true;
        setTimeout(() => {
          performance.mark("TTV_messageList");
          performance.mark("TTU_messageList");
        }, 100);
      }
    }, [N]);
    let B = chatFgStoreHooks.getSourceValue("ab_config.ab_results.vlist", {
      source: chatStorageKeys.chatStorageKeys.setting
    }) === "1";
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [N ? reactJsxRuntimeCoreReexport.jsx(nk, {}) : null, reactJsxRuntimeCoreReexport.jsx(B ? nw : ns, {
        className: s(p, "opacity-0 transition-opacity duration-100", N ? "" : "opacity-100"),
        Container: b,
        ref: x,
        conversationId: M,
        enableLoadMore: v,
        dataList: j,
        bottom: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: cssModuleClassMapping.classMapping["bottom-placeholder"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: s(cssModuleClassMapping.classMapping["bottom-placeholder-intersect-input"], "max-dbx-xs:hidden")
          }), r && reactJsxRuntimeCoreReexport.jsx(r, {})]
        }),
        top: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [o && reactJsxRuntimeCoreReexport.jsx(o, {}), v && n && reactJsxRuntimeCoreReexport.jsx(n, {
            conversationId: M
          }), f && reactJsxRuntimeCoreReexport.jsx(f, {})]
        }),
        bottomCenterButton: reactJsxRuntimeCoreReexport.jsx(nb, {
          conversationId: M,
          unionMessageList: j
        }),
        onInViewItemsChange: e => messageViewActions.setInViewMessageList(e),
        children: e => {
          if (messageBlockUtils.isBlockType(e)) {
            let {
              id: t,
              data: n,
              isBatch: r
            } = e;
            return reactJsxRuntimeCoreReexport.jsx("div", {
              "data-testid": "message-block-container",
              className: "w-full",
              children: r ? reactJsxRuntimeCoreReexport.jsx(ta, {
                conversationId: M,
                messageLink: n[0],
                pluginLoadCounter: L
              }) : reactJsxRuntimeCoreReexport.jsx(tL, {
                messageLink: n[0],
                conversationId: M,
                pluginLoadCounter: L,
                lastAvaliableMessageId: E == null ? undefined : E.messageId
              })
            }, t);
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
      })]
    });
  });
  require.d(exports, {
    MessageListComponent: function () {
      return nS;
    }
  });
}