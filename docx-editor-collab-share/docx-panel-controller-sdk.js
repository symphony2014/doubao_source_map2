// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'DocxPanelControllerSdk'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 631134
         */
module.exports = function (module, exports, require) {
  var i;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  let v = corpcDebugLoggers.getServiceDebug("streaming");
  let g = {
    async getStreamingStatus(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        try {
          return await t.call(e, "streaming.getStatus");
        } catch (e) {
          if (e instanceof rpcChannelCore.RpcError) {
            v("[warn] getStreamingStatus failed:", e.message);
          }
          throw e;
        }
      }
    },
    subscribeStreamingStatus(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        return n.on(e, "streaming.statusChanged", t);
      } else {
        return emptyExportFunction.emptyFunction;
      }
    },
    subscribeEvents(e, t) {
      if (!e) {
        return emptyExportFunction.emptyFunction;
      }
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        return emptyExportFunction.emptyFunction;
      }
      let i = [];
      let r = false;
      let o = () => {
        if (t.onStreamingStatusChanged) {
          i.push(n.on(e, "streaming.statusChanged", e => {
            var n;
            r = true;
            if ((n = t.onStreamingStatusChanged) !== null && n !== undefined) {
              n.call(t, e);
            }
          }));
        }
      };
      let s = () => {
        i.forEach(e => e());
        i = [];
      };
      let a = async () => {
        if (!r) {
          try {
            let i = await n.call(e, "streaming.getStatus");
            if (!r && t.onStreamingStatusChanged) {
              r = true;
              t.onStreamingStatusChanged(i);
            }
          } catch (e) {
            v("[debug] checkAndFireInitialStatus failed:", e);
          }
        }
      };
      if (n.isClientConnected(e)) {
        o();
        a();
      }
      let l = n.onConnection(t => {
        if (t === e && i.length === 0) {
          o();
          a();
        }
      });
      let c = n.onDisconnection(t => {
        if (t === e) {
          s();
          r = false;
        }
      });
      return () => {
        s();
        l();
        c();
      };
    }
  };
  var docLauncherStatus = require("doc-launcher-status") /*id: 126777*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let w = e => {
    let t = chatViewCoreSelectors.getChatId();
    let n = chatMessageStoreFactory.createMessageStore.subscribe(i => {
      if (!t) {
        return;
      }
      let r = conversationMessageUtils_1.getReplyMessage(i, t);
      let o = i.messageLinkMap[t];
      if (!o.length) {
        return;
      }
      let s = o[o.length - 1].messageId;
      if ((r == null ? undefined : r.message_id) === s && messageContentTypeAndStatusChecker.vlk(r)) {
        n();
        e();
      }
    });
    return n;
  };
  var behaviorSubjectWrapper = require("behavior-subject-wrapper") /*id: 633889*/;
  class E extends behaviorSubjectWrapper.BehaviorWrapper {
    init() {
      let e;
      this.controller.eventEmitter.on("init", () => {
        let t = this.afterDocInit();
        if (t) {
          e = t;
        }
      });
      return e;
    }
    constructor({
      initial: e,
      controller: t
    }) {
      var n;
      var i;
      var r;
      super(e, false);
      i = undefined;
      if ((n = typeof (r = function (e, t) {
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
      }(n = "controller", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = i;
      }
      this.controller = t;
      this.setup();
    }
  }
  function S(e, t, n) {
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
  class _ extends E {
    afterDocInit() {
      let e = this.controller.rpcClientId;
      if (!e) {
        return;
      }
      let t = false;
      let n = null;
      let i = null;
      let r = () => {
        if (n) {
          clearTimeout(n);
          n = null;
        }
      };
      let o = () => {
        if (i != null) {
          i();
        }
        i = null;
        r();
      };
      let s = () => {
        r();
        n = setTimeout(() => {
          this.next({
            enabled: false,
            source: docLauncherStatus.getLaunchStatus.Mock,
            userId: chatUserInfoActions.getUserIdStr(),
            breakable: false,
            directAccept: false
          });
        }, 10000);
      };
      let d = () => {
        if (i) {
          return;
        }
        let e = true;
        i = chatMessageStoreFactory.createMessageStore.subscribe(t => {
          let o = chatStoreManager.getStore("chatViewCoreStore").getState().currentChatViewConfig?.chatId;
          if (!o) {
            return;
          }
          let a = !!conversationMessageUtils_1.getAvailableMessage(t, o);
          if (e && !a && this.value?.enabled) {
            s();
          }
          if (!e && a) {
            r();
          }
          e = a;
        });
      };
      let h = g.subscribeStreamingStatus(e, e => {
        t = true;
        r();
        this.next(e);
        if (e == null ? undefined : e.enabled) {
          d();
        } else {
          o();
        }
      });
      g.getStreamingStatus(e).then(e => {
        if (e !== undefined && !t) {
          this.next(e);
        }
      }).catch(() => {});
      this.cleanupAfterDocInit = () => {
        h();
        o();
      };
    }
    destory() {
      var e;
      super.destory();
      if ((e = this.cleanupAfterDocInit) !== null && e !== undefined) {
        e.call(this);
      }
      this.cleanupAfterDocInit = null;
    }
    setMockStreaming(e = {}) {
      let {
        source: t = docLauncherStatus.getLaunchStatus.Mock,
        timeout: n = 15000,
        onTimeout: i,
        onResolve: r
      } = e;
      if (this.isMockStream) {
        return;
      }
      this.isMockStream = true;
      let o = this.value;
      this.next({
        enabled: true,
        source: t,
        userId: chatUserInfoActions.getUserIdStr(),
        breakable: false,
        directAccept: false
      });
      let s = w(() => {
        if (this.isMockStream) {
          this.isMockStream = false;
          this.next({
            enabled: false,
            source: t,
            userId: chatUserInfoActions.getUserIdStr(),
            breakable: false,
            directAccept: false
          });
        }
      });
      let a = this.reactive.subscribe(e => {
        a.unsubscribe();
        s();
        this.isMockStream = false;
        if (r != null) {
          r(e);
        }
      });
      setTimeout(() => {
        s();
        if (this.isMockStream) {
          a.unsubscribe();
          if (i != null) {
            i();
          }
          this.next(o);
          this.isMockStream = false;
        }
      }, n);
    }
    constructor(...e) {
      super(...e);
      S(this, "isMockStream", false);
      S(this, "cleanupAfterDocInit", null);
    }
  }
  var docxPanelUtils = require("docx-panel-utils") /*id: 678171*/;
  class k extends E {
    afterDocInit() {
      let e = this.controller.rpcClientId;
      if (!e) {
        return;
      }
      let t = false;
      let n = docxPanelUtils.docPanelUtils.subscribeIsBlankDoc(e, e => {
        t = true;
        this.next(e);
      });
      docxPanelUtils.docPanelUtils.isBlankDoc(e).then(e => {
        if (e !== undefined && !t) {
          this.next(e);
        }
      }).catch(() => {});
      return n;
    }
  }
  function R(e, t, n) {
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
  class N {
    destory() {
      this.streaming.destory();
    }
    constructor({
      controller: e
    }) {
      R(this, "streaming", undefined);
      R(this, "emptyDoc", undefined);
      this.streaming = new _({
        controller: e,
        initial: null
      });
      this.emptyDoc = new k({
        controller: e,
        initial: null
      });
    }
  }
  var onboardingDocEnum = require("onboarding-doc-enum") /*id: 49559*/;
  var lifecycleEventManager = require("lifecycle-event-manager") /*id: 597916*/;
  var docxPanelEventConstKeys = require("docx-panel-event-const-keys") /*id: 212120*/;
  let D = corpcDebugLoggers.getServiceDebug("config");
  let M = {
    async getShareHost(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t || !e) {
        return null;
      }
      try {
        return await t.call(e, docxPanelEventConstKeys.configShareHost);
      } catch (e) {
        D("[debug] getShareHost failed:", e);
        return null;
      }
    }
  };
  (i = {}).docxPartComment = "docxPartComment";
  i.docxCheckComment = "docxCheckComment";
  i.docxBlockAreaComment = "docxBlockAreaComment";
  i.globalComment = "globalComment";
  i.historyComment = "historyComment";
  i.noticeCenter = "noticeCenter";
  i.docxPresentationModePartComment = "docxPresentationModePartComment";
  var O = i;
  var commentRpcServiceClient = require("comment-rpc-service-client") /*id: 433602*/;
  function B(e, t, n) {
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
  class L {
    async toggleCommentBox() {
      let e = await this.isCommentViewVisible();
      await (commentRpcServiceClient.commentRpcService === null || commentRpcServiceClient.commentRpcService === undefined ? undefined : commentRpcServiceClient.commentRpcService.toggleCommentViewShow(O.docxPartComment, !e, this.clientId));
    }
    async isCommentViewVisible() {
      return (await (commentRpcServiceClient.commentRpcService === null || commentRpcServiceClient.commentRpcService === undefined ? undefined : commentRpcServiceClient.commentRpcService.isCommentViewVisible(O.docxPartComment, this.clientId))) || false;
    }
    commentViewVisibleSubscribe(e) {
      if (commentRpcServiceClient.commentRpcService === null || commentRpcServiceClient.commentRpcService === undefined) {
        return undefined;
      } else {
        return commentRpcServiceClient.commentRpcService.subscribeEvents(this.clientId, {
          onCommentViewVisibleChange: e
        });
      }
    }
    commentCountSubscribe(e) {
      if (commentRpcServiceClient.commentRpcService === null || commentRpcServiceClient.commentRpcService === undefined) {
        return undefined;
      } else {
        return commentRpcServiceClient.commentRpcService.subscribeEvents(this.clientId, {
          onCommentCountChange: e
        });
      }
    }
    async toggleHistoryCommentBox(e) {
      await (commentRpcServiceClient.commentRpcService === null || commentRpcServiceClient.commentRpcService === undefined ? undefined : commentRpcServiceClient.commentRpcService.toggleHistoryCommentBox(e, this.clientId));
    }
    async hideHistoryCommentBox() {
      await (commentRpcServiceClient.commentRpcService === null || commentRpcServiceClient.commentRpcService === undefined ? undefined : commentRpcServiceClient.commentRpcService.hideHistoryCommentBox(this.clientId));
    }
    constructor(e) {
      B(this, "bearWebSignalService", null);
      B(this, "clientId", undefined);
      this.clientId = e.clientId;
    }
  }
  var sizeConstants = require("size-constants") /*id: 786746*/;
  var docxPanelBridge = require("docx-panel-bridge") /*id: 827167*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let F = corpcDebugLoggers.getServiceDebug("more-options");
  let U = {
    subscribeEvents(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        return emptyExportFunction.emptyFunction;
      }
      let i = [["onShortcutViewVisibleChange", "commandSidebarService.shortcutViewVisibleSubscribe"], ["onWidthModeChange", "widthModeService.widthModeSubscribe"]];
      let r = [];
      let o = () => {
        i.forEach(i => {
          let [o, s] = i;
          let a = t[o];
          if (a) {
            r.push(n.on(e, s, a));
          }
        });
      };
      let s = () => {
        r.forEach(e => e());
        r = [];
      };
      if (n.isClientConnected(e)) {
        o();
      }
      let a = n.onConnection(t => {
        if (t === e && r.length === 0) {
          o();
        }
      });
      let l = n.onDisconnection(t => {
        if (t === e) {
          s();
        }
      });
      return () => {
        a();
        l();
        s();
      };
    },
    async openFindReplaceBox(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        F("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "findReplaceService.openFindReplaceBox");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] openFindReplaceBox failed:", e.message);
        }
        throw e;
      }
    },
    async toggleSwitchWidthMode(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!t) {
        F("[warn] No client connected");
        return;
      }
      try {
        await n.call(t, "widthModeService.toggleSwitchWidthMode", e);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] toggleSwitchWidthMode failed:", e.message);
        }
        throw e;
      }
    },
    async getWidthMode(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        F("[warn] No client connected");
        return;
      }
      try {
        return await t.call(e, "widthModeService.getWidthMode");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] getWidthMode failed:", e.message);
        }
        throw e;
      }
    },
    async togglePrintBox(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        F("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "printService.print");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] print failed:", e.message);
        }
        throw e;
      }
    },
    async toggleHelpPanel(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        F("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "commandSidebarService.toggleHelpPanel");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] toggleHelpPanel failed:", e.message);
        }
        throw e;
      }
    },
    async deleteDoc(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        F("[warn] No client connected");
        return;
      }
      try {
        return await t.call(e, "docxOperationService.deleteDoc");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] deleteDoc failed:", e.message);
        }
        throw e;
      }
    },
    async createAndOpenBlankDoc(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        F("[warn] No client connected");
        return;
      }
      try {
        return await t.call(e, "docxOperationService.createAndOpenBlankDoc");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] createAndOpenBlankDoc failed:", e.message);
        }
        throw e;
      }
    },
    async createDocCopy(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        F("[warn] RpcHost not initialized");
        return "";
      }
      if (!t) {
        F("[warn] No client connected");
        return "";
      }
      try {
        let i = await n.call(t, "docxOperationService.createCopyDoc", e);
        return objectPathGetDefault.getObjectPathDefault(i, "data.obj_token", "");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] createCopyDoc failed:", e.message);
        }
        throw e;
      }
    },
    async getCopyAllData(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        F("[warn] RpcHost not initialized");
        return;
      }
      if (!t) {
        F("[warn] No client connected");
        return;
      }
      try {
        return await n.call(t, "clipboardService.getCopyAllData", e);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          F("[warn] getCopyAllData failed:", e.message);
        }
        throw e;
      }
    }
  };
  function $(e, t, n) {
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
  class W {
    ensureSubscribed() {
      this.unsubscribeEvents ||= U.subscribeEvents(this.clientId, {
        onShortcutViewVisibleChange: e => {
          var t;
          if ((t = this.shortcutViewCallback) === null || t === undefined) {
            return undefined;
          } else {
            return t.call(this, e);
          }
        },
        onWidthModeChange: e => {
          var t;
          if ((t = this.widthModeCallback) === null || t === undefined) {
            return undefined;
          } else {
            return t.call(this, e);
          }
        }
      });
    }
    async copyDoc(e) {
      let {
        withRoot: n = true,
        eraseRevision: i = true
      } = e;
      let r = docxPanelBridge.getDocxBridge(this.clientId);
      if (r == null ? undefined : r.utils?.copyAllDoc) {
        r.utils.copyAllDoc({
          eraseRevisionType: i ? "accept" : "reject",
          withRoot: n
        });
        return {
          type: "direct",
          data: {}
        };
      } else {
        return {
          type: "event",
          data: await U.getCopyAllData({
            eraseRevisionType: i ? "accept" : "reject",
            withRoot: n
          }, this.clientId)
        };
      }
    }
    shortcutViewVisibleSubscribe(e) {
      this.shortcutViewCallback = e;
      this.ensureSubscribed();
      return () => {
        this.shortcutViewCallback = undefined;
      };
    }
    openFindReplaceBox() {
      U.openFindReplaceBox(this.clientId);
    }
    toggleSwitchWidthMode(e) {
      U.toggleSwitchWidthMode(e, this.clientId);
    }
    widthModeSubscribe(e) {
      this.widthModeCallback = e;
      this.ensureSubscribed();
      return () => {
        this.widthModeCallback = undefined;
      };
    }
    async getWidthMode() {
      return (await U.getWidthMode(this.clientId)) ?? sizeConstants.sizeConstants.STANDARD;
    }
    togglePrintBox() {
      if (U != null) {
        U.togglePrintBox(this.clientId);
      }
    }
    toggleHelpPanel() {
      if (U != null) {
        U.toggleHelpPanel(this.clientId);
      }
    }
    async deleteDoc() {
      return await (U == null ? undefined : U.deleteDoc(this.clientId));
    }
    async createAndOpenBlankDoc() {
      return await (U == null ? undefined : U.createAndOpenBlankDoc(this.clientId));
    }
    async createDocCopy(e) {
      return await U.createDocCopy(e, this.clientId);
    }
    dispose() {
      var e;
      if ((e = this.unsubscribeEvents) !== null && e !== undefined) {
        e.call(this);
      }
      this.unsubscribeEvents = null;
      this.shortcutViewCallback = undefined;
      this.widthModeCallback = undefined;
    }
    constructor(e) {
      $(this, "clientId", undefined);
      $(this, "unsubscribeEvents", null);
      $(this, "shortcutViewCallback", undefined);
      $(this, "widthModeCallback", undefined);
      this.clientId = e.clientId;
    }
  }
  var historyRpcService = require("history-rpc-service") /*id: 573398*/;
  function Z(e, t, n) {
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
  class q {
    onHistoryBoxReady(e) {
      this._onReadyCallback = e;
    }
    toggleHistoryBox() {
      var e;
      if ((e = this._onShow) !== null && e !== undefined) {
        e.call(this);
      }
      historyRpcService.historyService.openHistory(this.clientId).catch(e => {});
    }
    onCloseHistory() {
      var e;
      if ((e = this._onClose) !== null && e !== undefined) {
        e.call(this);
      }
    }
    dispose() {
      var e;
      if ((e = this.unsubscribeEvents) !== null && e !== undefined) {
        e.call(this);
      }
      this.unsubscribeEvents = null;
    }
    constructor(e) {
      Z(this, "clientId", undefined);
      Z(this, "_onClose", undefined);
      Z(this, "_onShow", undefined);
      Z(this, "_onReadyCallback", undefined);
      Z(this, "unsubscribeEvents", null);
      this.clientId = e.clientId;
      this._onClose = e.onClose;
      this._onShow = e.onShow;
      this._onReadyCallback = e.onReady;
      this.unsubscribeEvents = historyRpcService.historyService.subscribeEvents(this.clientId, {
        onClose: () => this.onCloseHistory(),
        onReady: () => {
          var e;
          if ((e = this._onReadyCallback) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(this);
          }
        }
      });
    }
  }
  let K = corpcDebugLoggers.getServiceDebug("undo");
  let G = {
    async undo(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        K("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        K("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "undo.undo");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          K("[warn] undo failed:", e.message);
        }
        throw e;
      }
    },
    async redo(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        K("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        K("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "undo.redo");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          K("[warn] redo failed:", e.message);
        }
        throw e;
      }
    },
    async getUndoRedoStatus(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        K("[warn] getUndoRedoStatus: RpcHost not initialized, returning default");
        return {
          canUndo: false,
          canRedo: false
        };
      }
      if (!e) {
        K("[warn] getUndoRedoStatus: clientId is empty, returning default");
        return {
          canUndo: false,
          canRedo: false
        };
      }
      try {
        return await t.call(e, "undo.getUndoRedoStatus");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          K("[warn] getUndoRedoStatus RPC failed:", e.message, ", returning default");
        } else {
          K("[warn] getUndoRedoStatus unexpected error:", e, ", returning default");
        }
        return {
          canUndo: false,
          canRedo: false
        };
      }
    },
    onStatusChanged(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        K("[warn] RpcHost not initialized");
        return emptyExportFunction.emptyFunction;
      }
      if (!e) {
        K("[warn] No client connected");
        return emptyExportFunction.emptyFunction;
      }
      let i = null;
      let r = async () => {
        try {
          let i = await n.call(e, "undo.getUndoRedoStatus");
          t(i);
        } catch (e) {
          K("[debug] fetchInitialStatus failed:", e);
        }
      };
      let o = () => {
        i = n.on(e, "undo.statusChanged", t);
        r();
      };
      if (n.isClientConnected(e)) {
        o();
      }
      let s = n.onConnection(t => {
        if (t === e && !i) {
          o();
        }
      });
      let a = n.onDisconnection(t => {
        if (t === e) {
          i = null;
        }
      });
      return () => {
        s();
        a();
        if (i != null) {
          i();
        }
      };
    }
  };
  function X(e, t, n) {
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
  class Q {
    undo() {
      G.undo(this.clientId).catch(e => {});
    }
    redo() {
      G.redo(this.clientId).catch(e => {});
    }
    getUndoRedoStatus() {
      return {
        canUndo: this._canUndo,
        canRedo: this._canRedo
      };
    }
    onStatusChange(e) {
      this.statusListeners.add(e);
      return {
        unsubscribe: () => this.statusListeners.delete(e)
      };
    }
    destroy() {
      var e;
      if ((e = this.removeStatusListener) !== null && e !== undefined) {
        e.call(this);
      }
      this.removeStatusListener = null;
      this.statusListeners.clear();
    }
    constructor({
      clientId: e
    }) {
      X(this, "clientId", undefined);
      X(this, "_canUndo", false);
      X(this, "_canRedo", false);
      X(this, "statusListeners", new Set());
      X(this, "removeStatusListener", null);
      this.clientId = e;
      this.removeStatusListener = G.onStatusChanged(this.clientId, e => {
        this._canUndo = e.canUndo;
        this._canRedo = e.canRedo;
        this.statusListeners.forEach(e => e());
      });
    }
  }
  var aiDocGuidanceTracking = require("ai-doc-guidance-tracking") /*id: 991942*/;
  function J(e, t, n) {
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
  class ee {
    get blockManager() {
      return this._blockManager;
    }
    init() {
      this.eventEmitter.emit("init");
      this.initModuleService();
      this.initShareHost();
      this.initPromiseHandler.resolve();
    }
    async initShareHost() {
      let e = await M.getShareHost(this.rpcClientId);
      if (typeof e == "string") {
        if (e.startsWith("http://") || e.startsWith("https://")) {
          this.shareHost = e;
        } else {
          this.shareHost = `https://${e}`;
        }
      } else {
        this.shareHost = "https://feishu.doubao.com";
      }
    }
    get sdkReady() {
      return this.initPromise;
    }
    initModuleService() {
      this._commentService = new L({
        clientId: this.rpcClientId
      });
      this._moreOptionsService = new W({
        clientId: this.rpcClientId
      });
      this._historyService = new q({
        clientId: this.rpcClientId,
        onClose: () => {
          var e;
          this.eventEmitter.emit("history.close");
          if ((e = docxPanelBridge.docxBridgeManager.get()) !== null && e !== undefined) {
            e.eventEmitter.emit("history.close");
          }
        },
        onShow: () => {
          var e;
          this.eventEmitter.emit("history.show");
          if ((e = docxPanelBridge.docxBridgeManager.get()) !== null && e !== undefined) {
            e.eventEmitter.emit("history.show");
          }
        }
      });
      this._undoService = new Q({
        clientId: this.rpcClientId
      });
    }
    get commentService() {
      return this._commentService;
    }
    get moreOptionsService() {
      return this._moreOptionsService;
    }
    get undoService() {
      return this._undoService;
    }
    get historyService() {
      return this._historyService;
    }
    async getPageMeta() {
      await this.initPromise;
      return docxPanelUtils.docPanelUtils.getPageMeta(this.rpcClientId);
    }
    destroy() {
      var e;
      var t;
      var n;
      this._blockManager = null;
      if ((t = this._commentService) !== null && t !== undefined && (e = t.destroy) !== null && e !== undefined) {
        e.call(t);
      }
      this._commentService = null;
      if ((n = this._undoService) !== null && n !== undefined) {
        n.destroy();
      }
      this._undoService = null;
    }
    constructor(e) {
      J(this, "initPromiseHandler", {
        resolve: () => {},
        reject: () => {}
      });
      J(this, "_blockManager", null);
      J(this, "initPromise", undefined);
      J(this, "eventEmitter", new eventEmitterWrapper_1.getEventEmitter());
      J(this, "_commentService", null);
      J(this, "_moreOptionsService", null);
      J(this, "_undoService", null);
      J(this, "_historyService", null);
      J(this, "rpcClientId", undefined);
      J(this, "shareHost", "");
      this.rpcClientId = e;
      this.initPromise = new Promise((e, t) => {
        this.initPromiseHandler = {
          resolve: e,
          reject: t
        };
      });
      lifecycleEventManager.lifecycleManager.subscribeEvents(e, {
        onEditorReady: () => {
          this.init();
          (function (e) {
            Promise.all([docxPanelUtils.docPanelUtils.getPageMeta(e), docxPanelUtils.docPanelUtils.getIsFirstLineEmpty(e)]).then(e => {
              let [t, n] = e;
              let i = (t == null ? undefined : t.source) === onboardingDocEnum.OnboardingDocEnum.OnboardingDoc;
              aiDocGuidanceTracking.trackPageEntry({
                currentPage: aiDocGuidanceTracking.aiDocPageTypes.AI_DOC_DETAIL,
                docStatus: +!n,
                isOnboardingDoc: i
              });
            });
          })(e);
        }
      });
    }
  }
  function et(e, t, n) {
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
  class en extends ee {
    get logMeta() {
      if (isFunctionUtil_1.isFunction(this._logMeta)) {
        return this._logMeta();
      } else {
        return this._logMeta;
      }
    }
    logWhenInit() {
      this.eventEmitter.on("init", () => {
        this.isEditorReady = true;
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_init",
          meta: {
            ...this.logMeta,
            doc_id: this.docId
          }
        });
      });
    }
    destory() {
      super.destroy();
      this.status.destory();
    }
    constructor({
      docId: e,
      rpcClientId: t,
      logMeta: n
    }) {
      super(t);
      et(this, "docPath", "ccm-sdk");
      et(this, "docId", undefined);
      et(this, "isEditorReady", false);
      et(this, "_logMeta", undefined);
      et(this, "bizEvents", new eventEmitterWrapper_1.getEventEmitter());
      et(this, "status", undefined);
      this.docId = e;
      this._logMeta = n;
      this.status = new N({
        controller: this
      });
      this.logWhenInit();
    }
  }
  require.d(exports, {
    DocxPanelControllerSdk: function () {
      return en;
    }
  });
}