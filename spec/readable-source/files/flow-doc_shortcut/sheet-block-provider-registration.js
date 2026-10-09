// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerSheetBlockProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 710837
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var p;
  var f;
  var g;
  var m;
  var v;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var eventBreakRuleToken = require("event-break-rule-token") /*id: 727603*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var alwaysTrueUtil = require("always-true-util") /*id: 74190*/;
  var layoutNodeConfig = require("layout-node-config") /*id: 266509*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  function R(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  var docxCommentEventCollector = require("docx-comment-event-collector") /*id: 554914*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  function z(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function H(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function $(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let W = new class {
    constructor(e) {
      R(this, "taskList", undefined);
      R(this, "count", undefined);
      R(this, "maxNum", undefined);
      R(this, "add", async e => {
        let i;
        if (this.count >= this.maxNum) {
          await new Promise(e => {
            this.taskList.push(e);
          });
        }
        this.count++;
        try {
          i = await e();
        } catch (e) {}
        this.count--;
        if (this.taskList.length > 0) {
          var r;
          if ((r = this.taskList.shift()) !== null && r !== undefined) {
            r("success");
          }
        }
        return i;
      });
      this.taskList = [];
      this.count = 0;
      this.maxNum = e;
    }
  }(3);
  let V = e => ![docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.ISV].includes(e);
  u = class extends docBlockModelClass.DocBlockModel {
    get serviceToken() {
      return this.snapshot.token;
    }
    get preLoadDataCache() {
      return this.innerPreLoadDataCache.concat([]);
    }
    get config() {
      return this.editorAPI.config;
    }
    get commentModule() {
      return this.editorContext?.commentModule;
    }
    get pageToken() {
      return this.config.get("token");
    }
    get isPresentationPaginationMode() {
      return docxViewStateUtil.getViewType(reduxStoreInitializer.reduxStore.getState()) === viewStateTypeConstants.viewTypes.PAGINATION;
    }
    preloadComment(e) {
      var i;
      if ((i = this.commentModule) !== null && i !== undefined) {
        i.ready(() => {
          var i;
          var r;
          if ((i = this.commentModule) === null || i === undefined ? undefined : i.getIsReady()) {
            this.preloadCommentUpdate(e);
          } else if ((r = this.commentModule) !== null && r !== undefined) {
            r.once(commentEventConstants.CommentEvents.COMMENT_READY, () => this.preloadCommentUpdate(e));
          }
        });
      }
    }
    filterAndCachePreloadData(e) {
      let i = [];
      e.forEach(e => {
        var r;
        let n = (r = this.commentModule) === null || r === undefined ? undefined : r.getCommentByCommentId(e.commentId);
        if (n && !docxCommentUtils.isCommentFinished(n)) {
          e.isPreload = true;
          i.push(e);
        }
      });
      this.innerPreLoadDataCache = i.concat([]);
      return i;
    }
    preloadCommentUpdate(e) {
      var i;
      if (this.commentLoadedResolver === undefined) {
        return;
      }
      let r = this.filterAndCachePreloadData(e);
      if (r.length === 0) {
        return;
      }
      if ((i = this.commentModule) !== null && i !== undefined) {
        i.handleThirdPartyUpdated(this.record.id, r, true);
      }
      let n = {
        commentList: r.map(e => e.commentId),
        parentType: this.serviceType,
        costTime: new Date().getTime() - this.initTime,
        parentId: this.serviceToken
      };
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(docxCommentEventCollector.commentDevName, {
        action: docxCommentConstants.commentActionEvents.thirdPartyCommentLoaded,
        data: n
      });
    }
    resolveLoadedResolver() {
      if (typeof this.commentLoadedResolver == "function") {
        this.commentLoadedResolver("done");
        this.commentLoadedResolver = undefined;
      }
    }
    getServiceTypeAndServiceToken() {
      return {
        serviceType: this.serviceType,
        serviceToken: this.snapshot.token
      };
    }
    onDestroy() {
      this.innerPreLoadDataCache = [];
      this.resolveLoadedResolver();
    }
    async addRemoteComment(e) {}
    isResolvedCommentInBlock(e) {
      return !!this.getResolvedComments().find(i => i.commentId === e);
    }
    constructor(e) {
      var i;
      super(e);
      i = this;
      H(this, "commentLoadedResolver", undefined);
      H(this, "waitForCommentLoaded", new Promise(e => {
        this.commentLoadedResolver = e;
      }));
      H(this, "initTime", new Date().getTime());
      z(this, "editorContext", c, this);
      z(this, "blockManager", d, this);
      H(this, "serviceType", undefined);
      H(this, "isThirdPartyCommentBlock", true);
      H(this, "innerPreLoadDataCache", []);
      H(this, "startPreloadClientvar", async () => {
        let e = await this.preloadClientvar();
        if (e) {
          this.onClientvarLoaded(e);
        }
      });
      H(this, "loadBridge", () => this.loadBridgeImpl());
      H(this, "handleCommentLoaded", e => {
        e.handleThirdPartyLoaded(this.record.id);
        this.resolveLoadedResolver();
      });
      H(this, "handleCommentDisconnected", e => {
        e.handleRemoveThirdPartyLoaded(this.record.id);
      });
      H(this, "handleCommentUpdated", (e, i) => {
        let r;
        let n;
        if (e.isThirdPartyCommentLoaded(this.record.id)) {
          r = this.getComments();
          n = false;
        } else {
          let {
            newPreloadData: e
          } = i || {};
          r = e ? this.filterAndCachePreloadData(e) : this.preLoadDataCache;
          n = true;
        }
        e.handleThirdPartyUpdated(this.record.id, r, n);
      });
      H(this, "handleCommentDidAdd", (e, i) => {
        e.handleThirdPartyCommentDidAdd(this.record.id, i);
      });
      H(this, "setCommentsFilter", (e, i) => {
        e.setCommentsFilter(i);
      });
      H(this, "activeCommentChange", function (e, r) {
        let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        let l = i.getActiveComments()[0]?.commentId || "";
        if (l) {
          if ((e == null ? undefined : e.activeCommentId) === l && platformDocUtils.f1J(reduxStoreInitializer.reduxStore.getState())) {
            return;
          }
          if (r) {
            r.removeAllSelection(true);
          }
          if (e) {
            e.activateComment(l, undefined, docxCommentConstants.commentSourceTypes.thirdParty, undefined, undefined, undefined, undefined, {
              traceId: o.traceId
            });
          }
        } else if (e) {
          e.deactivateComment(docxCommentConstants.commentInteractionEvents.thirdParty);
        }
      });
      if (!this.config.get("isSSR") && (!browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isMobile && V(e.type))) {
        W.add(this.startPreloadClientvar);
      }
    }
  };
  H(u, "abstractType", docBlockTypeConstants.thirdPartyCommentBlock);
  c = $(u.prototype, "editorContext", [compatibleEditorContext_1.compatibleContext], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  d = $(u.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let U = u;
  var tempTransactionConst = require("temp-transaction-const") /*id: 825163*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var waitingMonitorService = require("waiting-monitor-service") /*id: 622032*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  var docxVersionDataManager = require("docx-version-data-manager") /*id: 667955*/;
  var docxExternalHistoryHandler = require("docx-external-history-handler") /*id: 234536*/;
  var docxSheetPasteCommentFetcher = require("docx-sheet-paste-comment-fetcher") /*id: 91861*/;
  var sheetBlockdepLoaderProvider = require("sheet-blockdep-loader-provider") /*id: 16546*/;
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  function ei(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function er(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function en(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let eo = new Set();
  h = dependencyInjectionContainer.Optional();
  g = class extends U {
    isBridgeLoaded() {
      return !!this.depLoader.getLoadedBridge();
    }
    getMemberId() {
      return flowDocChatMemberIo.getChatIoInstance().getMemberId().toString();
    }
    async preloadClientvar() {
      return await docxSheetPasteCommentFetcher.fetchSheetComments(this);
    }
    async onClientvarLoaded(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (!i || !e) {
        return;
      }
      let r = e[i] || [];
      this.preloadComment(r);
    }
    async setCommentData(e, i) {
      let {
        id: r
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (r) {
        await this.setOnCommentBatchUpdateOnce(r, () => this.handleCommentUpdated(i), e => this.handleCommentDidAdd(i, e));
        await this.bridge.setCommentData(r, e);
        this.handleCommentUpdated(i);
      }
    }
    startNewComment(e, i) {
      let {
        id: r
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (!r) {
        return "";
      }
      let {
        cellCordinate: n
      } = this.bridge.startNewComment(r, e, i);
      return n;
    }
    saveCommentMark(e, i) {
      let {
        id: r
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (r) {
        return this.bridge.saveComment(r, i, e);
      }
    }
    removeCommentMark(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (i) {
        return this.bridge.removeComment(i, e);
      }
    }
    removeTempComment(e) {
      return this.removeCommentMark(e);
    }
    resolveComment(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (i) {
        return this.bridge.resolveComment(i, e);
      }
    }
    reopenComment(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (i) {
        return this.bridge.reopenComment(i, e);
      }
    }
    getComments() {
      let {
        id: e
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (e) {
        return docxSheetPasteUtils.formatCommentData(this.bridge.getComments(e));
      } else {
        return [];
      }
    }
    getActiveComments() {
      let {
        id: e
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (!e || this.isPresentationPaginationMode) {
        return [];
      } else {
        return docxSheetPasteUtils.formatCommentData(this.bridge.getActiveComments(e));
      }
    }
    getResolvedComments() {
      let {
        id: e
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (e) {
        return docxSheetPasteUtils.formatCommentData(this.bridge.getResolvedComments(e));
      } else {
        return [];
      }
    }
    async locateComment(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (!i) {
        return null;
      }
      let r = await this.bridge.findComment(i, e);
      if (!r) {
        return null;
      }
      let {
        offsetHeight: n,
        offsetTop: o
      } = r;
      return {
        top: o,
        height: n
      };
    }
    getCommentRelativeTop(e) {
      let n = e.relativeTopToThirdParty ?? 0;
      if (this.blockManager.hasBlockViewByBlockId(this.id) && (this.blockManager.viewService.getBlockViewByBlockId(this.id).props.zoom ?? 1) !== 1) {
        return n + 16;
      } else {
        return n;
      }
    }
    getText() {
      return `[${t("common.sheet")}]`;
    }
    getHistoryBlockVersionData() {
      return docxVersionDataManager.docxVersionManager.getData(this.type, this.snapshot.token);
    }
    onInit() {
      super.onInit();
      if (this.config.get("isHistory")) {
        this.subs.push(this.editorAPI.viewService.didMount$.subscribe(this.previewHistory));
      }
    }
    onDestroy() {
      super.onDestroy();
      let {
        token: e,
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      if (e) {
        docxSheetPasteCommentFetcher.sheetCommentCache.delete(e);
      }
      eo.delete(`${e}_${i}`);
      if (e) {
        eo.delete(e);
      }
      this.subs.forEach(e => e.unsubscribe());
      let {
        recordId: r
      } = this;
      docTempTransactionManager.cancelTempTx(this.blockManager, `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(r)}`);
    }
    getSheetCoordByDocCoord(e, i) {
      let {
        id: r
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      return this.bridge.getSheetCoordByDocCoord(r, e, i);
    }
    getDocCoordBySheetCoord(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
      return this.bridge.getDocCoordBySheetCoord(i, e);
    }
    constructor(e) {
      var i;
      super(e);
      i = this;
      er(this, "serviceType", "SHEET_BLOCK");
      er(this, "bridge", undefined);
      er(this, "subs", []);
      ei(this, "depLoader", p, this);
      ei(this, "incompleteModelMonitor", f, this);
      er(this, "setOnCommentBatchUpdateOnce", onceFunctionFactory.createOnce(function () {
        var e = arguments.length;
        var r = Array(e);
        var n = 0;
        for (; n < e; n++) {
          r[n] = arguments[n];
        }
        return i.bridge.setOnCommentBatchUpdate(...r);
      }));
      er(this, "loadBridgeImpl", async () => {
        let {
          token: e
        } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
        if (e) {
          this.bridge = await this.depLoader.getBridge(e, {
            isHistory: this.config.get("isHistory") || false
          });
          return this.bridge;
        }
      });
      er(this, "getSheetHistoryUsers", () => {
        let e = this.getHistoryBlockVersionData();
        if (e) {
          return Object.keys(e.users || {}).reduce((i, r) => {
            let n = e.users[r];
            i[r] = {
              textColor: n.textColor,
              bgColor: n.backgroundColor || n.bgColor,
              labelColor: n.labelColor,
              cn_name: n.cn_name,
              en_name: n.en_name,
              enName: n.en_name,
              name: n.cn_name
            };
            return i;
          }, {});
        } else {
          return {};
        }
      });
      er(this, "previewHistory", async () => {
        let e = this.getHistoryBlockVersionData();
        let {
          token: i,
          id: r
        } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
        let n = `${i}_${r}`;
        this.bridge = await this.loadBridge();
        if (i && this.config.get("isHistory") && !eo.has(n)) {
          eo.add(n);
          let r = !!(e == null ? undefined : e.isShowDiff);
          let o = e == null ? undefined : e.fromVer;
          let l = e == null ? undefined : e.toVer;
          let s = this.getSheetHistoryUsers();
          let a = [];
          if (!eo.has(i)) {
            eo.add(i);
            a = (await this.bridge.previewHistory(o, l, {
              isHighlight: r,
              users: s
            })).payload;
          }
          docxExternalHistoryHandler.DocxExternalHistory.onHistoryResultReady(this.type, this.snapshot.token, a);
        }
      });
      er(this, "highlightHistory", async () => {
        let {
          id: e
        } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
        return this.bridge.locateHistory(e);
      });
      er(this, "clearHighlightHistory", async () => {
        let {
          id: e
        } = docxSheetPasteUtils.parseTokenId(this.snapshot.token);
        return this.bridge.clearHistoryLabel(e);
      });
    }
  };
  er(g, "type", docBlockTypeConstants.blockTypeConstants.SHEET);
  p = en(g.prototype, "depLoader", [sheetBlockdepLoaderProvider.sheetBlockdepLoader], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  f = en(g.prototype, "incompleteModelMonitor", [h, waitingMonitorService.waitingMonitor], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let el = g;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxI18nLoaderUtils = require("docx-i18n-loader-utils") /*id: 619747*/;
  var userColorUtilities = require("user-color-utilities") /*id: 511417*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var staticPgFlag = require("static-pg-flag") /*id: 902976*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function ep(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let ef = "$merge_spliter$";
  class eg {
    report(e, i, r) {
      if (!r || !r.delay) {
        docxEventCollector.wrappedCollector(e, i);
        return;
      }
      let n = `${e}${ef}${r.mergeKey || ""}`;
      if (this.mergeEvents[n]) {
        if (r.mergeKey) {
          this.mergeEvents[n][r.mergeKey] ||= [];
          let e = i[r.mergeKey];
          if (Array.isArray(e)) {
            this.mergeEvents[n][r.mergeKey].push(...e);
          } else {
            this.mergeEvents[n][r.mergeKey].push(i[r.mergeKey]);
          }
        }
      } else {
        this.mergeEvents[n] = i;
      }
      let o = this.debounceReport(n, r.delay);
      if (o) {
        this.reportTimers[n] = o;
      }
    }
    destroy() {
      this.mergeEvents = {};
      Object.keys(this.reportTimers).forEach(e => {
        window.clearTimeout(this.reportTimers[e]);
      });
    }
    constructor() {
      var e = this;
      ep(this, "mergeEvents", {});
      ep(this, "reportTimers", {});
      ep(this, "debounceReport", function (i, r = 0) {
        let n = i.split(ef)[0];
        let o = e.mergeEvents[i];
        if (r) {
          if (e.reportTimers[i]) {
            window.clearTimeout(e.reportTimers[i]);
          }
          return window.setTimeout(() => {
            docxEventCollector.wrappedCollector(n, o);
            delete e.mergeEvents[i];
          }, r);
        } else {
          docxEventCollector.wrappedCollector(n, o);
          delete e.mergeEvents[i];
          return null;
        }
      });
    }
  }
  var structureQueryToken = require("structure-query-token") /*id: 763917*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function eb(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let ey = dependencyInjectionContainer.Provide(sheetBlockdepLoaderProvider.sheetBlockdepLoader)((n = (m = class {
    get config() {
      return this.blockManager.editorAPI.config;
    }
    get blockManager() {
      return this.context.blockManager;
    }
    get isPreview() {
      return this.config.get("isPreview");
    }
    get isPresentationMode() {
      return this.config.get("isPresentationMode");
    }
    async unmountAllSheet(e) {
      var r;
      var n;
      if (!((n = this.bridge) === null || n === undefined ? undefined : (r = n.bridge) === null || r === undefined ? undefined : r.sheetManager?.mountedSheets)) {
        return;
      }
      let o = [...e.bridge.sheetManager.mountedSheets].map(e => this.bridge.unmountSheet(e));
      await Promise.allSettled(o).catch(e => undefined);
    }
    onServiceDispose() {
      this.destroy();
      delete window.__ROADSTER_LITE_CONTEXT__;
    }
    constructor() {
      var e;
      var i;
      eb(this, "bridge", undefined);
      eb(this, "sheetToolbar", undefined);
      eb(this, "membersBeforeSetup", undefined);
      eb(this, "initPromise", undefined);
      eb(this, "inited", false);
      eb(this, "initOptions", undefined);
      eb(this, "enterTranslate", false);
      e = "context";
      if (i = v) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      eb(this, "token", "");
      eb(this, "reporter", new eg());
      eb(this, "getToolbar", () => {
        if (!this.sheetToolbar && this.bridge) {
          this.sheetToolbar = document.createElement("div");
          this.bridge.bridge.setToolbarHost(this.sheetToolbar);
        }
        return this.sheetToolbar;
      });
      eb(this, "preloadBridge", () => {
        let e = platformDocUtils.Gjw;
        if (staticPgFlag.isPgFlag) {
          platformDocUtils.edo().then(e => {
            let {
              loadDocSheetBridge: i
            } = e;
            i();
          }).catch(e => {});
        } else {
          e();
        }
      });
      eb(this, "init", async (e, i) => {
        var n;
        var o;
        this.inited = false;
        this.initPromise = undefined;
        this.token = e;
        this.initOptions = i;
        this.sheetToolbar = null;
        let l = (i == null ? undefined : i.isHistory) || false;
        if (docxFeatureFlags.isHqEnabled()) {
          await docxI18nLoaderUtils.loadI18nForApp(docxI18nLoaderUtils.defaultAppType);
        }
        let s = platformDocUtils.fa8;
        let a = platformDocUtils.Gjw;
        if (staticPgFlag.isPgFlag) {
          let {
            LoadableSheetBridge: e,
            loadDocSheetBridge: i
          } = await platformDocUtils.edo();
          a = i;
          s = e;
        }
        this.bridge = new s({
          token: e,
          editor: null,
          isTemplate: this.isPreview || false,
          getOrders: this.getAllSheetIdInOrder,
          getMountStatus: () => true,
          isInHistory: l || this.isPresentationMode,
          onCommentBinded: this.context.commentModule?.afterThirdPartyAddApplyCommentAccepted,
          setPermanentStageTime: (e, i) => {
            blockLoadPerformanceTracker.BlockLoadPerformanceTracker.registerPermanentStage(docBlockTypeConstants.blockTypeConstants.SHEET, e, i);
          },
          userColorHelper: {
            getColorByUserId: userColorUtilities.getColorByUserId,
            getUserColorId: userColorUtilities.getUserColorId,
            resetUserColor: userColorUtilities.resetUserColor
          }
        });
        await a();
        await collaborativeEditingFlowSyncModule._v(0);
        if (e !== "" && !l) {
          this.bridge.fetchClientVars([...new Set(this.getAllSheetIdInOrder())]);
        }
        if (this.membersBeforeSetup) {
          this.notifyMembersUpdate(this.membersBeforeSetup);
        }
        if ((n = (o = this.bridge).setUpdateToolbarFn) !== null && n !== undefined) {
          n.call(o, e => {
            docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.SHEET.SET_TOOLBAR_DATA, e);
          });
        }
        this.inited = true;
        this.checkEnterTranslateMode();
        let c = this.blockManager.editorAPI.getService(waitingMonitorService.waitingMonitor, {
          optional: true
        });
        if (c != null) {
          c.addCallback(docBlockTypeConstants.blockTypeConstants.SHEET, "", () => {
            var e;
            var i;
            var r;
            var n;
            if ((n = this.bridge) === null || n === undefined) {
              return undefined;
            } else if ((r = n.bridge) === null || r === undefined) {
              return undefined;
            } else if ((i = r.sheetManager) === null || i === undefined) {
              return undefined;
            } else if ((e = i.engine) === null || e === undefined) {
              return undefined;
            } else {
              return e.getUserChangeSendingOrSaving();
            }
          });
        }
      });
      eb(this, "resetBridge", async () => {
        this.initPromise = this.init(this.token, this.initOptions);
        await this.initPromise;
      });
      eb(this, "checkEnterTranslateMode", () => {
        if (this.bridge && this.enterTranslate && this.bridge.enterTranslateMode) {
          this.bridge.enterTranslateMode();
        }
      });
      eb(this, "enterTranslateMode", () => {
        this.enterTranslate = true;
        if (this.bridge && this.bridge.enterTranslateMode) {
          this.bridge.enterTranslateMode();
        }
      });
      eb(this, "exitTranslateMode", () => {
        this.enterTranslate = false;
        if (this.bridge && this.bridge.exitTranslateMode) {
          this.bridge.exitTranslateMode();
        }
      });
      eb(this, "getAllSheetIdInOrder", () => {
        let e = [];
        this.blockManager.editorAPI.getService(structureQueryToken.structureQueryToken).traverseRecord(this.blockManager.rootRecordId, i => {
          if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.SHEET) {
            let {
              id: r
            } = docxSheetPasteUtils.parseTokenId(i.snapshot.token);
            e.push(r || i.id);
          }
          return true;
        });
        return e;
      });
      eb(this, "notifyMembersUpdate", e => {
        var i;
        var r;
        if (!this.bridge) {
          this.membersBeforeSetup = e;
          return;
        }
        this.membersBeforeSetup = null;
        if ((i = (r = this.bridge).notifyMembersUpdate) !== null && i !== undefined) {
          i.call(r, e);
        }
      });
      eb(this, "getBridge", async (e, i) => {
        if (!this.inited) {
          this.initPromise ||= this.init(e, i);
          await this.initPromise.catch(e => {
            this.initPromise = undefined;
            throw e;
          });
        }
        return this.bridge;
      });
      eb(this, "getLoadedBridge", () => this.bridge);
      eb(this, "destroy", () => {
        if (this.sheetToolbar) {
          this.sheetToolbar = null;
          this.bridge.bridge.setToolbarHost(null);
        }
        this.inited = false;
        this.initPromise = undefined;
        this.token = "";
        this.initOptions = undefined;
        if (this.bridge) {
          this.bridge.destroy();
        }
        this.bridge = null;
        let e = this.blockManager.editorAPI.getService(waitingMonitorService.waitingMonitor, {
          optional: true
        });
        if (e != null) {
          e.removeCallback(docBlockTypeConstants.blockTypeConstants.SHEET, "");
        }
      });
    }
  }).prototype, o = "context", l = [compatibleEditorContext_1.compatibleContext], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), v = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, m)) || m;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docEditorShortcuts = require("doc-editor-shortcuts") /*id: 433866*/;
  let eS = e => {
    let {
      commandName: i,
      event: r,
      selectionAPI: n
    } = e;
    let o = n.getSelection();
    let {
      target: l
    } = r;
    return o.length === 0 && !!(l instanceof HTMLElement) && !!i && !docEditorShortcuts.coreCommands.includes(i) && !!docxBlockUtils_1.findBlockElement(l, {
      type: docBlockTypeConstants.blockTypeConstants.SHEET
    });
  };
  var sheetBlockViewManager = require("sheet-block-view-manager") /*id: 137221*/;
  function ex(e) {
    var i;
    docxEditorCore.registerProviders([ey, {
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useClass: layoutNodeConfig.LayoutNodeConfig,
      args: [docBlockTypeConstants.blockTypeConstants.SHEET, (i = {
        isAsync: true,
        disableLazyIdleRender: true,
        defaultHeight: 220
      }, docxFeatureFlags.isMobileLargeDocIdle() ? e => Object.assign({}, i, {
        disableLazyIdleRender: alwaysTrueUtil.alwaysTrue(e.snapshot)
      }) : () => i)]
    }, {
      provide: eventBreakRuleToken.eventBreakRuleToken,
      useValue: eS
    }]);
    docxEditorCore.registerViewModel(el, {
      viewCreator: sheetBlockViewManager.SheetBlockViewManager,
      extensions: e
    });
  }
  require.d(exports, {
    registerSheetBlockProvider: function () {
      return ex;
    }
  });
}