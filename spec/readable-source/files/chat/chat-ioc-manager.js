// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XQ' to 'getResourceCtrl'
// - Renamed export 'ne' to 'getGlobalStore'
// - Renamed export 'Zd' to 'initSceneCtrl'
// - Renamed export 'lW' to 'setActiveScene'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 998196
         */
module.exports = function (module, exports, require) {
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var resourceLoaderFactory = require("resource-loader-factory") /*id: 412557*/;
  var asyncMemoizeUtil = require("async-memoize-util") /*id: 855254*/;
  let l = e => {
    let t = {};
    for (let n of Object.keys(e)) {
      let i = e[n];
      let r = Reflect.ownKeys(i).map(e => i[e]);
      if (r.every(e => e.priority === undefined)) {
        t[n] = resourceLoaderFactory.loaderFactory.onDemand(() => Promise.all(r.map(e => asyncMemoizeUtil.asyncMemoize(e.loadResource))));
      } else {
        r.sort((e, t) => {
          return (e.priority ?? 0) - (t.priority ?? 0);
        });
        t[n] = resourceLoaderFactory.loaderFactory.onDemand(() => Promise.all(r.map(e => asyncMemoizeUtil.asyncMemoize(e.loadResource))));
      }
    }
    return t;
  };
  let s = e => {
    let {
      pluginList: b = [],
      core: S
    } = e;
    let P = b.reduce((e, t) => function (e, t) {
      let n = {
        ...e
      };
      for (let e of Object.keys(t)) {
        let a = t[e] ?? {};
        for (let e of Object.keys(a)) {
          let t = a[e] ?? {};
          let i = n[e] ?? {};
          let l = t.resource;
          n[e] = {
            ...i,
            ...l
          };
        }
      }
      return n;
    }(e, t), {});
    let C = b.map(e => {
      let {
        input: t,
        message: n,
        chatLayout: i,
        guidance: r,
        feed: o,
        launcher: a
      } = e;
      return {
        message: n ? Object.keys(n).reduce((e, t) => {
          let i = n[t];
          if (i && "matcher" in i) {
            return {
              ...e,
              [`${t}Matcher`]: i.matcher
            };
          } else {
            return e;
          }
        }, {}) : undefined,
        input: t ? Object.keys(t).reduce((e, n) => {
          let i = t[n];
          if (i && "matcher" in i) {
            return {
              ...e,
              [`${n}Matcher`]: i.matcher
            };
          } else {
            return e;
          }
        }, {}) : undefined,
        guidance: r ? Object.keys(r).reduce((e, t) => {
          let n = r[t];
          if (n && "matcher" in n) {
            return {
              ...e,
              [`${t}Matcher`]: n.matcher
            };
          } else {
            return e;
          }
        }, {}) : undefined,
        chatLayout: i ? Object.keys(i).reduce((e, t) => {
          let n = i[t];
          if (n && "matcher" in n) {
            return {
              ...e,
              [`${t}Matcher`]: n.matcher
            };
          } else {
            return e;
          }
        }, {}) : undefined,
        feed: o ? Object.keys(o).reduce((e, t) => {
          let n = o[t];
          if (n && "matcher" in n) {
            return {
              ...e,
              [`${t}Matcher`]: n.matcher
            };
          } else {
            return e;
          }
        }, {}) : undefined,
        ...(a ? {
          launcher: Object.keys(a).reduce((e, t) => {
            let n = a[t];
            if (n && "matcher" in n) {
              return {
                ...e,
                [`${t}Matcher`]: n.matcher
              };
            } else {
              return e;
            }
          }, {})
        } : undefined)
      };
    }).reduce((e, t) => function (e, t) {
      let n = {
        ...e
      };
      for (let e of Object.keys(t)) {
        let a = t[e] ?? {};
        for (let e of Object.keys(a)) {
          let t = a[e] ?? {};
          n[e] = {
            ...(n[e] ?? {}),
            ...t
          };
        }
      }
      return n;
    }(e, t), {});
    return {
      chatBotService: S.chat?.chatBotService,
      chatFeedService: S.chat?.chatFeedService,
      chatViewService: S.chat?.chatViewService,
      chatGuidanceService: S.guidance?.chatGuidanceService,
      chatInputStoreService: S.input?.chatInputStoreService,
      chatInputService: S.input?.chatInputService,
      refContentStoreService: S.input?.refContentStoreService,
      attachmentsStoreService: S.input?.attachmentsStoreService,
      attachmentUploadStoreService: S.input?.attachmentUploadStoreService,
      chatMessageService: S.message?.chatMessageService,
      chatIMService: S.message?.chatIMService,
      chatNavigateService: S.chatCoreService?.chatNavigateService,
      chatConversationService: S.chatCoreService?.chatConversationService,
      chatMessageConfig: S.message?.chatMessageConfig,
      chatMessageBoxConfig: S.message?.chatMessageBoxConfig,
      chatCommandService: S.message?.chatCommandService,
      chatSocketService: S.message?.chatSocketService,
      ...P,
      ...l(C)
    };
  };
  let u = e => {
    let {
      core: b
    } = e;
    return {
      chatViewCoreStore: b.chat?.chatViewCoreStore,
      chatViewCanvasStore: b.chat?.chatViewCanvasStore,
      chatMessageStore: b.message?.chatMessageStore,
      aliceChatProtocolStore: b.message?.aliceChatProtocolStore,
      samanthaChatProtocolStore: b.message?.samanthaChatProtocolStore,
      chatMessageGroupLayoutStore: b.message?.chatMessageGroupLayoutStore,
      chatMessageBoxLayoutStore: b.message?.chatMessageBoxLayoutStore,
      sidebarStore: b.chatLayout?.sidebarStore,
      launcherRawSettingStore: b.launcher?.launcherRawSettingStore,
      chatGuidanceStore: b.guidance?.chatGuidanceStore,
      chatInputStore: b.input?.chatInputStore,
      attachmentsStore: b.input?.attachmentsStore,
      attachmentUploadStore: b.input?.attachmentUploadStore,
      refContentStore: b.input?.refContentStore,
      deepThinkingControlStore: b.input?.deepThinkingControlStore,
      skillStore: b.skill?.skillStore,
      flowWebLayoutStore: b.chatLayout?.flowWebLayoutStore,
      flowWebFeedStore: b.feed?.flowWebFeedStore
    };
  };
  var bindingManager = require("binding-manager") /*id: 503351*/;
  function d(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class h {
    constructor({
      loader: e
    }) {
      d(this, "resourceStore", undefined);
      d(this, "storeContainer", undefined);
      d(this, "serviceContainer", undefined);
      d(this, "pluginMatcherContainer", undefined);
      d(this, "configContainer", undefined);
      d(this, "pluginContainerMap", undefined);
      this.resourceStore = reactStoreHookFactory.createStoreHook(() => e);
      this.storeContainer = new bindingManager.BindingManager();
      this.serviceContainer = new bindingManager.BindingManager();
      this.pluginContainerMap = {};
      this.pluginMatcherContainer = new bindingManager.BindingManager();
      this.configContainer = new bindingManager.BindingManager();
    }
  }
  let m = {
    activeScene: "PC_MAIN_BOT_WEB"
  };
  let g = (e, t) => {
    m.activeScene = e;
    f(t);
    p(e, t);
  };
  let f = e => {
    if (!userAgentDeviceDetector.isWindowDefined) {
      m.GLOBAL_STORE = undefined;
    }
    m.GLOBAL_STORE ||= new h({
      loader: u(e)
    });
  };
  let p = (e, t) => {
    if (!userAgentDeviceDetector.isWindowDefined) {
      m[e] = undefined;
    }
    if (m[e] === undefined) {
      let n = new h({
        loader: s(t)
      });
      m[e] = n;
      (function (e) {
        let {
          pluginList: t = []
        } = e;
        for (let e of t) {
          if (e.lifeCycles?.onInit) {
            try {
              e.lifeCycles.onInit();
            } catch (e) {}
          }
        }
      })(t);
    }
  };
  let _ = e => {
    let {
      activeScene: t
    } = m;
    let n = e ?? t;
    let i = m[n];
    if (i === undefined) {
      throw Error(`chat-ioc-manager: Resource controller of Scene ${n} not found`);
    }
    return i;
  };
  let v = () => {
    if (m.GLOBAL_STORE === undefined) {
      throw Error("chat-ioc-manager: Resource controller of GLOBAL_STORE not found");
    }
    return m.GLOBAL_STORE;
  };
  require.d(exports, {
    getResourceCtrl: function () {
      return _;
    },
    getGlobalStore: function () {
      return v;
    },
    initSceneCtrl: function () {
      return p;
    },
    setActiveScene: function () {
      return g;
    }
  });
}