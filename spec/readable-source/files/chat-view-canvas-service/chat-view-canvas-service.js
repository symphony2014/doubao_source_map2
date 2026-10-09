// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reduxDevtoolsPersistIntegration_1'
// - Resolved require(688840) to 'redux-devtools-persist-integration_1'
// - Renamed variable 'i' to 'reactStoreFactory'
// - Resolved require(960791) to 'react-store-factory'
// - Renamed variable 'r' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 's' to 'isFunctionUtil_1'
// - Resolved require(699491) to 'is-function-util_1'
// - Renamed variable 'o' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'v' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Renamed variable 'c' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'u' to 'performanceTimeUtil'
// - Resolved require(512870) to 'performance-time-util'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'p' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'h' to 'chatPanelLayoutResolver'
// - Resolved require(424315) to 'chat-panel-layout-resolver'
// - Updated imported property 'z' to 'getPerformanceNow' (module 512870)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Ue' to 'createStore' (module 960791)
// - Updated imported property 'XR' to 'withDevToolsEnhancer' (module 688840)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'l' to 'resolvePanelMode' (module 424315)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Hq' to 'loadChatCanvasMatcher' (module 107672)
// - Updated imported property 'Uy' to 'produce' (module 828474)
// - Updated imported property 'Q3' to 'chatCanvasPluginLoader' (module 232752)
// - Updated imported property 'Z' to 'isFunction' (module 699491)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10782.3050e48d.js
         * chunkId: 10782
         * moduleId: 74638
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  let d = 2000 / 24;
  let m = function (e = {
    maxCollectionDuation: 5000
  }) {
    let t = 0;
    let a = null;
    let n = 0;
    let i = [];
    let r = s => {
      if (s - n >= e.maxCollectionDuation) {
        if (a) {
          cancelAnimationFrame(a);
        }
        return;
      }
      if (t !== 0) {
        let e = s - t;
        i.push(e);
      }
      t = s;
      a = requestAnimationFrame(r);
    };
    return {
      start: () => {
        i = [];
        t = 0;
        n = performanceTimeUtil.getPerformanceNow();
        a = requestAnimationFrame(r);
      },
      end: () => new Promise(t => {
        setTimeout(() => {
          if (i.length <= 3) {
            return {
              normalJunkRate: 0,
              seriousJunkRate: 0
            };
          }
          let e = 0;
          let a = 0;
          let n = 0;
          for (let t = 3; t < i.length; t++) {
            let r = i[t];
            n += r;
            if (r > (i[t - 1] + i[t - 2] + i[t - 3]) / 3 * 2) {
              if (r > 125) {
                a += r;
                e += r;
                continue;
              }
              if (r > d) {
                e += r;
                continue;
              }
            }
          }
          t({
            normalJunkRate: e / n,
            seriousJunkRate: a / n
          });
        }, e.maxCollectionDuation);
      })
    };
  };
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatPanelLayoutResolver = require("chat-panel-layout-resolver") /*id: 424315*/;
  function f(e, t, a) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var n = a.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  let C = () => {
    var e;
    if ((e = Error("trace").stack) === null || e === undefined) {
      return undefined;
    } else {
      return e.split("\n").slice(3, 8).map(e => {
        var t;
        var a;
        if (e == null) {
          return undefined;
        } else if ((a = e.trim()) === null || a === undefined) {
          return undefined;
        } else if ((t = a.replace("at ", "- ")) === null || t === undefined) {
          return undefined;
        } else {
          return t.replace(/\(http.*\/static\/js\//, "(/static/js/");
        }
      }).reduce((e, t, a) => {
        e[`call_chain${a ? `_${a}` : ""}`] = t;
        return e;
      }, {});
    }
  };
  let g = (e, t) => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "chat_perf_canvas_action",
      meta: {
        type: e,
        ...t
      }
    });
  };
  let y = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(() => ({
    immersive: {},
    exactImmersiveMode: undefined
  })));
  class P {
    get exactImmersiveMode() {
      return y.getState().exactImmersiveMode;
    }
    get immersive() {
      return y.getState().immersive;
    }
    createOpenCanvasOpenEvent(e, t, a) {
      try {
        let {
          messageId: i,
          conversationId: s,
          canvasLayoutState: o,
          ignoreReopenLogger: v,
          artifactId: c,
          artifactKey: u,
          localArtifactType: d,
          preRenderNodeId: m,
          exactMatchedPlugin: _,
          ...f
        } = e;
        if (v && chatStoreManager.getStoreState("chatViewCanvasStore")?.isExpand) {
          return undefined;
        } else {
          return eventReportingService.createEventReporter({
            eventName: "flow_chat_view_open_canvas",
            meta: {
              ...C(),
              message_id: i,
              conversation_id: s,
              canvas_content_keys: Object.keys(f).join(","),
              layout_type: chatPanelLayoutResolver.resolvePanelMode(e),
              artifact_id: c,
              artifact_key: u,
              pre_render: m ? _ ? "1" : "-1" : "0",
              pre_render_plugin_name: objectPathGetDefault.getObjectPathDefault(_, "name"),
              local_artifact_type: d,
              canvas_enabled: this.canvasEnabled ? "1" : "0",
              open_by_rect: t ? "1" : "0",
              is_auto_open: a ? "1" : "0",
              auto_open_enabled: this.canvasAutoOpenEnaled ? "1" : "0"
            }
          });
        }
      } catch {
        return;
      }
    }
    async openCanvasPanel(e, t, a = !t) {
      let {
        messageId: n,
        conversationId: i,
        canvasLayoutState: r,
        ignoreReopenLogger: s,
        exactPluginIdentifier: c,
        preRenderNodeId: u,
        isVmokPlugin: d,
        ..._
      } = e;
      let p = this.createOpenCanvasOpenEvent(e, t, a);
      if (!this.canvasEnabled || !this.canvasAutoOpenEnaled && a) {
        return;
      }
      this._hasClosedReopen ||= true;
      if (!c) {
        await chatPluginMatcherRegistry.loadChatCanvasMatcher();
      }
      this._temporaryCanvasTeaParams = {};
      let {
        start: h,
        end: f
      } = m();
      h();
      chatStoreManager.getStore("chatViewCanvasStore").setState(immerCoreImplementation.produce(e => {
        e.conversationId = i;
        e.messageId = n;
        e.preRenderNodeId = u;
        e.canvasLayoutState = r;
        e.canvasContent = _;
        e.openingRect = t;
        e.matchedCanvasPluginIdentifier = c;
        e.isVmokPlugin = d;
        e.isAllowFullCanvas = false;
        e.fromUrlPrefetch = undefined;
      }));
      if (!c) {
        await this._refreshCanvasMatchedPlugin(p);
      }
      await this._refreshCanvasTypeForPlugin();
      chatStoreManager.getStore("chatViewCanvasStore").setState(immerCoreImplementation.produce(e => {
        e.isExpand = true;
      }));
      f().then(e => {
        let {
          normalJunkRate: t,
          seriousJunkRate: a
        } = e;
        let {
          matchedCanvasPluginIdentifier: n
        } = chatStoreManager.getStoreState("chatViewCanvasStore");
        g("open", {
          normalJunkRate: t,
          seriousJunkRate: a,
          pluginIdentifier: String(n ?? "")
        });
      });
    }
    async _refreshCanvasMatchedPlugin(e) {
      let t = await chatPluginMatcherRegistry.loadChatCanvasMatcher();
      chatStoreManager.getStore("chatViewCanvasStore").setState(immerCoreImplementation.produce(a => {
        let n = t.map(e => e({
          messageId: a.messageId || "",
          conversationId: a.conversationId || "",
          ...a.canvasContent
        })).find(e => !!e);
        if (n) {
          a.matchedCanvasPluginIdentifier = n;
          if (e != null) {
            e.success({
              meta: {
                matchedPluginIdentifier: String(n)
              }
            });
          }
        } else if (e != null) {
          e.errorIfIdle(3000, {
            reason: "no match plugin"
          });
        }
      }));
    }
    async _refreshCanvasTypeForPlugin() {
      let {
        matchedCanvasPluginIdentifier: e
      } = chatStoreManager.getStoreState("chatViewCanvasStore");
      if (e) {
        let t = await chatPluginIocManager.chatCanvasPluginLoader(e);
        if (t) {
          this._temporaryCanvasTeaParams = {
            ...this._temporaryCanvasTeaParams,
            canvas_type: t.teaCanvasType
          };
          chatStoreManager.getStore("chatViewCanvasStore").setState({
            isAllowFullCanvas: !!t.isAllowFullCanvas
          });
        }
      }
    }
    createCloseCanvasPanelEvent() {
      try {
        let {
          messageId: e,
          conversationId: t,
          canvasLayoutState: a,
          canvasContent: n,
          matchedCanvasPluginIdentifier: i,
          isExpand: r
        } = chatStoreManager.getStoreState("chatViewCanvasStore");
        return eventReportingService.createEventReporter({
          eventName: "flow_chat_view_close_canvas",
          meta: {
            ...C(),
            start_message_id: e,
            start_conversation_id: t,
            start_layout_type: chatPanelLayoutResolver.resolvePanelMode({
              canvasLayoutState: a
            }),
            start_canvas_enabled: this.canvasEnabled ? "1" : "0",
            start_canvas_expanded: r ? "1" : "0",
            start_matched_plugin_identifier: i ? String(i) : undefined,
            canvas_content_keys: Object.keys(n || {}).join(",")
          }
        });
      } catch {
        return;
      }
    }
    closeCanvasPanel() {
      if (chatStoreManager.getStoreState("chatViewCanvasStore").isExpand === false) {
        return;
      }
      let {
        start: e,
        end: t
      } = m();
      e();
      let a = this.createCloseCanvasPanelEvent();
      chatStoreManager.getStore("chatViewCanvasStore").setState({
        isExpand: false
      });
      this._hasClosedReopen = false;
      this._temporaryCanvasTeaParams = {};
      setTimeout(() => {
        chatStoreManager.getStore("chatViewCanvasStore").setState(immerCoreImplementation.produce(e => {
          if (this._hasClosedReopen) {
            if (a != null) {
              a.errorIfIdle(500, {
                reason: "stoke by other",
                meta: {
                  stoke_matched_plugin_identifier: e.matchedCanvasPluginIdentifier ? String(e.matchedCanvasPluginIdentifier) : undefined
                }
              });
            }
            return;
          }
          e.matchedCanvasPluginIdentifier = undefined;
          e.openingRect = undefined;
          e.conversationId = undefined;
          e.preRenderNodeId = undefined;
          e.messageId = undefined;
          e.canvasContent = undefined;
          e.isAllowFullCanvas = false;
          e.fromUrlPrefetch = undefined;
          e.getCanvasLayoutTrackParams = undefined;
          if (a != null) {
            a.success();
          }
        }));
      }, 500);
      t().then(e => {
        let {
          normalJunkRate: t,
          seriousJunkRate: a
        } = e;
        g("close", {
          normalJunkRate: t,
          seriousJunkRate: a,
          pluginIdentifier: ""
        });
      });
    }
    setCanvasLayoutState(e) {
      chatStoreManager.getStore("chatViewCanvasStore").setState({
        canvasLayoutState: e
      });
    }
    setTemporaryCanvasTeaParams(e) {
      this._temporaryCanvasTeaParams = isFunctionUtil_1.isFunction(e) ? e(this._temporaryCanvasTeaParams) : e;
    }
    constructor() {
      f(this, "canvasEnabled", true);
      f(this, "canvasAutoOpenEnaled", true);
      f(this, "_hasClosedReopen", false);
      f(this, "enterImmersiveMode", (e, t) => {
        y.setState({
          exactImmersiveMode: e,
          immersive: {
            [e]: t
          }
        });
      });
      f(this, "exitImmersiveMode", () => {
        y.setState({
          exactImmersiveMode: undefined,
          immersive: {}
        });
      });
      f(this, "_temporaryCanvasTeaParams", {});
      f(this, "getCanvasTeaParams", () => {
        let e = chatStoreManager.getStoreState("chatViewCanvasStore");
        let {
          canvasContent: t,
          isExpand: a
        } = e;
        if (a) {
          return {
            ...this._temporaryCanvasTeaParams,
            layout_type: chatPanelLayoutResolver.resolvePanelMode(e),
            canvas_type: this._temporaryCanvasTeaParams ? this._temporaryCanvasTeaParams.canvas_type : undefined,
            canvas_id: t == null ? undefined : t.artifactId,
            canvas_key: t == null ? undefined : t.artifactKey
          };
        } else {
          return {};
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ChatViewService: function () {
      return P;
    }
  });
}