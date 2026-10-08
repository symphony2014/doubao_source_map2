// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'DocLauncher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 227005
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  function f(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class v {
    getTime() {
      return performance.now();
    }
    getContext() {
      let {
        docId: e,
        createTimes: i,
        closeTimes: n,
        errorTimes: r,
        offlineTimes: o,
        docInitTime: l,
        prevCreateTime: a,
        prevErrorTime: s,
        prevCloseTime: c,
        prevOfflineTime: d
      } = this;
      let u = this.getTime();
      return {
        docId: e,
        createTimes: i,
        closeTimes: n,
        errorTimes: r,
        offlineTimes: o,
        toInit: l && u - l,
        toPrevCreate: a && u - a,
        toPrevError: s && u - s,
        toPrevClose: c && u - c,
        toPrevOffline: d && u - d
      };
    }
    docInit() {
      if (this.docInitTime === null) {
        this.docInitTime = this.getTime();
      }
    }
    socketCreated() {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_socket_created",
        meta: this.getContext()
      });
      this.createTimes += 1;
      this.prevCreateTime = this.getTime();
    }
    socketClosed() {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_socket_closed",
        meta: this.getContext()
      });
      this.closeTimes += 1;
      this.prevCloseTime = this.getTime();
    }
    socketError() {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_socket_error",
        meta: this.getContext()
      });
      this.errorTimes += 1;
      this.prevErrorTime = this.getTime();
    }
    socketOffline() {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_socket_offline",
        meta: this.getContext()
      });
      this.offlineTimes += 1;
      this.prevOfflineTime = this.getTime();
    }
    constructor({
      docId: e,
      autoInit: i = true
    }) {
      f(this, "docId", undefined);
      f(this, "docInitTime", null);
      f(this, "prevCreateTime", null);
      f(this, "prevCloseTime", null);
      f(this, "prevErrorTime", null);
      f(this, "prevOfflineTime", null);
      f(this, "createTimes", 0);
      f(this, "closeTimes", 0);
      f(this, "errorTimes", 0);
      f(this, "offlineTimes", 0);
      this.docId = e;
      if (i) {
        this.docInit();
      }
    }
  }
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var docLauncherStatus = require("doc-launcher-status") /*id: 126777*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let E = e => {
    let i = chatViewCoreSelectors.getChatId();
    let n = chatMessageStoreFactory.createMessageStore.subscribe(r => {
      if (!i) {
        return;
      }
      let o = conversationMessageUtils_1.getReplyMessage(r, i);
      let l = r.messageLinkMap[i];
      if (!l.length) {
        return;
      }
      let a = l[l.length - 1].messageId;
      if ((o == null ? undefined : o.message_id) === a && messageContentTypeAndStatusChecker.vlk(o)) {
        n();
        e();
      }
    });
    return n;
  };
  var behaviorSubjectWrapper = require("behavior-subject-wrapper") /*id: 633889*/;
  class w extends behaviorSubjectWrapper.BehaviorWrapper {
    get blockManager() {
      return this.controller.blockManager;
    }
    init() {
      let e;
      this.controller.eventEmitter.on("init", () => {
        if (!this.blockManager) {
          return;
        }
        let i = this.afterDocInit();
        if (i) {
          e = i;
        }
      });
      return e;
    }
    constructor({
      initial: e,
      controller: i
    }) {
      var n;
      var r;
      var o;
      super(e, false);
      r = undefined;
      if ((n = typeof (o = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, i || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(n = "controller", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
      this.controller = i;
      this.setup();
    }
  }
  class M extends w {
    getPageStruct() {
      let {
        docId: e,
        blockManager: i
      } = this.controller;
      if (!i) {
        return;
      }
      let n = i.getBlockStructsByRecordId(e);
      return arrayFirstElement.getFirstElement(n);
    }
    afterDocInit() {
      let e = null;
      let i = i => {
        let n = i * 1000 - Date.now();
        if (e !== null) {
          clearTimeout(e);
          e = null;
        }
        let r = false;
        let o = this.reactive.subscribe(() => {
          if (r) {
            o.unsubscribe();
            return;
          }
          r = true;
        });
        e = window.setTimeout(() => {
          o.unsubscribe();
          if (this.value?.enabled && !r) {
            this.next({
              ...this.value,
              enabled: false
            });
          }
        }, Math.max(n, 30000));
      };
      let n = e => {
        let {
          enabled: o = false,
          operator_id: a = "",
          source: s = docLauncherStatus.getLaunchStatus.Unknown,
          expired_at: c,
          direct_accept: u = false
        } = (e.snapshot.status ?? {}).streaming ?? {};
        let h = infraUtilFunctions.parseNumber(c);
        let g = (!o || !!isUndefinedCheck.isUndefined(h) || !(h * 1000 < Date.now())) && o;
        this.next({
          enabled: g,
          userId: a,
          source: s,
          breakable: true,
          directAccept: u
        });
        if (!isUndefinedCheck.isUndefined(h)) {
          i(h);
        }
      };
      let r = e => {
        n(e.block.record);
      };
      let o = this.getPageStruct();
      if (o) {
        n(o.record);
        o.addDataListener(r);
        return () => {
          o.removeDataListener(r);
        };
      }
    }
    setMockStreaming(e = {}) {
      let {
        source: i = docLauncherStatus.getLaunchStatus.Mock,
        timeout: n = 15000,
        onTimeout: r,
        onResolve: o
      } = e;
      if (this.isMockStream) {
        return;
      }
      this.isMockStream = true;
      let l = this.value;
      this.next({
        enabled: true,
        source: i,
        userId: chatUserInfoActions.getUserIdStr(),
        breakable: false,
        directAccept: false
      });
      let a = E(() => {
        if (this.isMockStream) {
          this.isMockStream = false;
          this.next({
            enabled: false,
            source: i,
            userId: chatUserInfoActions.getUserIdStr(),
            breakable: false,
            directAccept: false
          });
        }
      });
      let s = this.reactive.subscribe(e => {
        s.unsubscribe();
        a();
        this.isMockStream = false;
        if (o != null) {
          o(e);
        }
      });
      setTimeout(() => {
        a();
        if (this.isMockStream) {
          s.unsubscribe();
          if (r != null) {
            r();
          }
          this.next(l);
          this.isMockStream = false;
        }
      }, n);
    }
    constructor(...e) {
      var i;
      var n;
      super(...e);
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, i || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i = "isMockStream", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = false;
      }
    }
  }
  var editorContainerUtils = require("editor-container-utils") /*id: 874690*/;
  class T extends w {
    afterDocInit() {
      if (!this.blockManager) {
        return;
      }
      let e = this.blockManager.dataService.change$.subscribe(this.updateIsBlankDoc.bind(this));
      this.updateIsBlankDoc();
      return () => {
        e.unsubscribe();
      };
    }
    constructor(...e) {
      var i;
      var n;
      var r;
      super(...e);
      i = "updateIsBlankDoc";
      n = () => {
        if (this.blockManager) {
          this.next(editorContainerUtils.checkEmptyEditor(this.blockManager));
        }
      };
      if ((i = typeof (r = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, i || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = n;
      }
    }
  }
  function R(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class A {
    destory() {
      this.streaming.destory();
    }
    constructor({
      controller: e
    }) {
      R(this, "streaming", undefined);
      R(this, "emptyDoc", undefined);
      this.streaming = new M({
        controller: e,
        initial: null
      });
      this.emptyDoc = new T({
        controller: e,
        initial: null
      });
    }
  }
  function x(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class N extends flowDocxEditorControllerModule.useDocWidthModeSelector {
    get logMeta() {
      if (isFunctionUtil_1.isFunction(this._logMeta)) {
        return this._logMeta();
      } else {
        return this._logMeta;
      }
    }
    getSyncVersion() {
      var e;
      let i = (e = this.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      if (i == null) {
        return undefined;
      } else {
        return i.getSyncVersion();
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
        let {
          updateDocMetaMap: e
        } = writingSkillStore.writingSkillStore.getState();
        e(this.docId, {
          structureVersion: this.getSyncVersion()
        });
      });
    }
    handleUpdateSyncVersion(e) {
      var n;
      let {
        updateDocMetaMap: r
      } = writingSkillStore.writingSkillStore.getState();
      let a = infraUtilFunctions.parseNumber(e.extra?.structure_version);
      let s = (n = this.blockManager) === null || n === undefined ? undefined : n.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      let h = objectPathGetDefault.getObjectPathDefault(s == null ? undefined : s.sync, "_updateSyncedVersionIfNeed");
      if (!h || isUndefinedCheck.isUndefined(a)) {
        return;
      }
      let {
        docId: p
      } = this;
      h(a);
      r(p, {
        structureVersion: a
      });
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_update_local_sync_version",
        meta: {
          docId: p,
          structureVersion: a
        }
      });
    }
    async setupSocketTracer() {
      let {
        docId: e
      } = this;
      try {
        await this.initPromise;
        let e = flowDocChatMemberIo.getChatIoInstance();
        let i = objectPathGetDefault.getObjectPathDefault(e, "ensureFrontierClient");
        if (!isFunctionUtil_1.isFunction(i)) {
          throw Error("Cannot get frontier client getter");
        }
        let n = await i.apply(e);
        if (!n) {
          throw Error("Cannot get frontier client of doc");
        }
        this.subscriptions.push(n.newActiveConnection$.subscribe(e => {
          if (!e) {
            this.socketTracer.socketOffline();
            return;
          }
          this.socketTracer.socketCreated();
        }));
        this.subscriptions.push(n.error$.subscribe(() => {
          this.socketTracer.socketError();
        }));
        this.subscriptions.push(n.close$.subscribe(() => {
          this.socketTracer.socketClosed();
        }));
      } catch (i) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_socket_tracer_setup_error",
          error: i,
          meta: {
            docId: e
          }
        });
      }
    }
    async registerIOEvents() {
      await this.initPromise;
      try {
        if (!this.dataCollab) {
          throw Error("Cannot get FlowCollab instance");
        }
        let e = arrayFirstElement.getFirstElement(this.dataCollab.sync.getWatchingIOEntities());
        if (!e) {
          throw Error("Cannot get io entities");
        }
        this.dataCollab.sync.io.addMessage(e, "flow_listener", {
          handler: e => {
            if (e) {
              if (e.type === "AIGC") {
                this.bizEvents.emit("io.aigc", e.content);
              } else if (e.type === "NEW_CHANGES") {
                this.bizEvents.emit("io.new-changes", e);
                this.handleUpdateSyncVersion(e);
              }
            }
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "register_io_events_error",
          error: e
        });
      }
    }
    unsubscribeAll() {
      for (let e of this.subscriptions) {
        e.unsubscribe();
      }
    }
    destory() {
      super.destroy();
      this.status.destory();
      this.unsubscribeAll();
    }
    constructor({
      docId: e,
      logMeta: i
    }) {
      super();
      x(this, "docPath", "flow-doc");
      x(this, "docId", undefined);
      x(this, "rpcClientId", undefined);
      x(this, "isEditorReady", false);
      x(this, "_logMeta", undefined);
      x(this, "socketTracer", undefined);
      x(this, "subscriptions", []);
      x(this, "bizEvents", new eventEmitterWrapper_1.getEventEmitter());
      x(this, "status", undefined);
      this.docId = e;
      this._logMeta = i;
      this.status = new A({
        controller: this
      });
      this.socketTracer = new v({
        docId: e
      });
      this.registerIOEvents();
      this.setupSocketTracer();
      this.logWhenInit();
    }
  }
  require.d(exports, {
    DocLauncher: function () {
      return N;
    }
  });
}