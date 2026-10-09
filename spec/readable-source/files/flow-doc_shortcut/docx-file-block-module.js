// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerFileBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 883568
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  var o;
  var s;
  var a;
  var c;
  var d;
  var h;
  var u;
  var p;
  var f;
  var v;
  var m;
  var g;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var layoutNodeConfig = require("layout-node-config") /*id: 266509*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var fileActionManagerUtils = require("file-action-manager-utils") /*id: 180452*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var waitingMonitorService = require("waiting-monitor-service") /*id: 622032*/;
  var offlineUploadProvider = require("offline-upload-provider") /*id: 363270*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  function k(e, i, n, r) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(r) : undefined
      });
    }
  }
  function N(e, i, n) {
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
  function I(e, i, n, r, l) {
    var o = {};
    Object.keys(r).forEach(function (e) {
      o[e] = r[e];
    });
    o.enumerable = !!o.enumerable;
    o.configurable = !!o.configurable;
    if ("value" in o || o.initializer) {
      o.writable = true;
    }
    o = n.slice().reverse().reduce(function (n, r) {
      return r(e, i, n) || n;
    }, o);
    if (l && o.initializer !== undefined) {
      o.value = o.initializer ? o.initializer.call(l) : undefined;
      o.initializer = undefined;
    }
    if (o.initializer === undefined) {
      Object.defineProperty(e, i, o);
      return null;
    } else {
      return o;
    }
  }
  c = dependencyInjectionContainer.Dynamic();
  d = dependencyInjectionContainer.Async();
  h = dependencyInjectionContainer.Optional();
  v = class extends docBlockModelClass.DocBlockModel {
    getText() {
      return `[${t("etherpad.Drive")}]`;
    }
    onDestroy() {
      var e;
      let {
        recordId: i
      } = this;
      if ((e = this.incompleteModelMonitor) !== null && e !== undefined) {
        e.delete(i);
      }
    }
    injectSSRRenderData(e) {
      this.ssrViewType = e;
    }
    constructor(e) {
      super(e);
      k(this, "blockManager", u, this);
      k(this, "offlineUpload", p, this);
      k(this, "incompleteModelMonitor", f, this);
      N(this, "ssrViewType", undefined);
      N(this, "getActionManager", () => {
        let {
          token: e
        } = this.snapshot.file;
        return fileActionManagerUtils.getFileActionMgr(e, this.blockManager);
      });
    }
  };
  N(v, "type", docxViewConfigConstants.viewTypeFile);
  u = I(v.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  p = I(v.prototype, "offlineUpload", [c, d, offlineUploadProvider.offlineUploadSvcId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  f = I(v.prototype, "incompleteModelMonitor", [h, waitingMonitorService.waitingMonitor], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let j = v;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  function A(e, i, n) {
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
  var L = class {
    toggleFileRender(e) {
      if (e !== this.shouldRender) {
        window.flow.biz.file.toggleRenderAll({
          render: e
        });
        this.shouldRender = e;
      }
    }
    init() {
      docxEditorEventConstantsAndManager.globalEventBus.on(docxHistoryConstants.historyVisibleChange, this.handleHistoryVisibleChange);
      docComponentStubConfig.emptyObject_2.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BITABLE.FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
      docComponentStubConfig.emptyObject_2.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.CHART.FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
      docComponentStubConfig.emptyObject_2.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.WHITEBOARD.FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
      docComponentStubConfig.emptyObject_2.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.MINDNOTE.EMBEDDED_FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
    }
    destroy() {
      docxEditorEventConstantsAndManager.globalEventBus.off(docxHistoryConstants.historyVisibleChange, this.handleHistoryVisibleChange);
      docComponentStubConfig.emptyObject_2.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BITABLE.FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
      docComponentStubConfig.emptyObject_2.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.CHART.FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
      docComponentStubConfig.emptyObject_2.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.WHITEBOARD.FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
      docComponentStubConfig.emptyObject_2.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.MINDNOTE.EMBEDDED_FULLSCREEN_CHANGE, this.handleBlockFullScreenChange);
    }
    constructor() {
      A(this, "shouldRender", undefined);
      A(this, "handleHistoryVisibleChange", e => {
        this.toggleFileRender(!e);
      });
      A(this, "handleBlockFullScreenChange", e => {
        this.toggleFileRender(!e);
      });
    }
  };
  var vcMutedProviderName = require("vc-muted-provider-name") /*id: 120758*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxFileBlockManager = require("docx-file-block-manager") /*id: 617182*/;
  var otterDocAttachmentFetcher = require("otter-doc-attachment-fetcher") /*id: 65767*/;
  var getDocxFileUri = require("get-docx-file-uri") /*id: 520427*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var mediaEnvironmentStubs = require("media-environment-stubs") /*id: 862836*/;
  let X = dependencyInjectionContainer.Provide(vcMutedProviderName.vcMutedProviderName)((r = (m = class {
    get isMuted() {
      return mediaEnvironmentStubs.muteStateSubject.isMuted$.getValue();
    }
    init() {
      this.transformFilesUri();
      if (browserEnvironmentDetectionUtils.browserDetector.isInVC && browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        this.mutedSub = mediaEnvironmentStubs.muteStateSubject.isMuted$.subscribe(e => {
          docxFileBlockManager.DocxFileBlockManager.playerList.forEach(i => {
            i.muted = e;
          });
        });
      }
    }
    transformFilesUri() {
      this.initFilesBlocksUri();
      this.blockManager.editorAPI.dataService.change$.subscribe(e => {
        let i = [];
        for (let c of e.recordOps) {
          var r;
          var s;
          var a;
          if ((c == null ? undefined : (r = c.record) === null || r === undefined ? undefined : r.snapshot?.type) === "file" && (c == null ? undefined : c.record?.id) && (c == null ? undefined : (a = c.record) === null || a === undefined ? undefined : (s = a.snapshot) === null || s === undefined ? undefined : s.file?.token)) {
            i.push(c.record.snapshot.file.token);
          }
        }
        this.updateFilesUri(i);
      });
    }
    initFilesBlocksUri() {
      let e = this.blockManager.structService.getAllBlockStructs();
      let i = [];
      for (let c of e) {
        var r;
        var s;
        var a;
        if ((c == null ? undefined : (r = c.record) === null || r === undefined ? undefined : r.snapshot?.type) === "file" && (c == null ? undefined : c.record?.id) && (c == null ? undefined : (a = c.record) === null || a === undefined ? undefined : (s = a.snapshot) === null || s === undefined ? undefined : s.file?.token)) {
          i.push(c.record.snapshot.file.token);
        }
      }
      this.updateFilesUri(i);
    }
    updateFilesUri(e) {
      let i = [];
      let n = reduxStoreInitializer.reduxStore.getState();
      for (let r of e) {
        if (getDocxFileUri.getDocxFileUri(n, r) === "") {
          i.push(r);
        }
      }
      if (i.length !== 0) {
        this.fetchFileUri(i);
      }
    }
    fetchFileUri(e) {
      let i = [];
      for (let n = 0; n < e.length; n += 10) {
        i.push(e.slice(n, n + 10));
      }
      i.forEach(async e => {
        let i = await otterDocAttachmentFetcher.fetchAttachmentInfo({
          pageToken: docTokenHelperUtils.resolveDocToken(),
          resourceKeys: e
        });
        let n = {};
        ((i == null ? undefined : i.attachments) || []).forEach(e => {
          let {
            key: i,
            uri: r
          } = e;
          if (i && r) {
            n[i] = r;
          }
        });
        reduxStoreInitializer.reduxStore.dispatch({
          type: storeActionConstants.actionTypes.UpdateFileUri,
          payload: n
        });
      });
    }
    onServiceDispose() {
      var e;
      if ((e = this.mutedSub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    constructor() {
      var e;
      var i;
      var n;
      var r;
      e = "blockManager";
      if (i = g) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      if ((n = typeof (r = function (e, i) {
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
      }(n = "mutedSub", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, n, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = null;
      }
    }
  }).prototype, l = "blockManager", o = [blockManagerToken.blockManagerToken], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), g = (a = o.slice().reverse().reduce(function (e, i) {
    return i(r, l, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(r, l, a), null) : a, m)) || m;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  function J(e, i) {
    docxEditorCore.registerProviders([{
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useClass: layoutNodeConfig.LayoutNodeConfig,
      args: [docBlockTypeConstants.blockTypeConstants.FILE, {
        shouldRetain: true,
        defaultHeight: 220
      }]
    }]);
    docxEditorCore.registerViewModel(j, {
      viewCreator: i,
      blockDeps: ["renderProps.viewType"],
      extensions: e
    });
    docxEditorCore.registerProviders([X]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(vcMutedProviderName.vcMutedProviderName).init();
      if (!dependencyInjectionContainer.get(docxEditorCore.CONFIG_TOKEN).get("isHistory") && fileUtilsAndViewHelpers.isNativeComponentSupported()) {
        let e = new L();
        e.init();
        return () => {
          e.destroy();
        };
      }
    });
  }
  require.d(exports, {
    registerFileBlock: function () {
      return J;
    }
  });
}