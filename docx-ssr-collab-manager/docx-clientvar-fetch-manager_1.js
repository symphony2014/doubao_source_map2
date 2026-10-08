// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'DocxClientvarFetchManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 21095
         */
module.exports = function (module, exports, require) {
  var s;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var fetchSyncConstants = require("fetch-sync-constants") /*id: 290082*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  function u(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class f {
    get blockMap() {
      return this.manager.blockMap;
    }
    setFetchCallback(e) {
      this.fetchCallback.push(e);
    }
    runFetchCallback(e) {
      setTimeout(() => {
        this.fetchCallback.forEach(i => {
          try {
            i(e);
          } catch (e) {}
        });
      }, 1000);
    }
    constructor(e) {
      u(this, "registerHook", undefined);
      u(this, "deregisterHook", undefined);
      u(this, "manager", undefined);
      u(this, "fetchCallback", []);
      this.manager = e;
    }
  }
  function v(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class g extends f {
    constructor(...e) {
      super(...e);
      v(this, "registerHook", (e, i) => {});
      v(this, "deregisterHook", (e, i) => {});
    }
  }
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  function _(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class m extends f {
    constructor(...e) {
      super(...e);
      _(this, "registerHook", e => {});
      _(this, "deregisterHook", emptyExportFunction.emptyFunction);
    }
  }
  function E(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class b extends f {
    constructor(...e) {
      super(...e);
      E(this, "registerHook", (e, i) => {});
      E(this, "deregisterHook", emptyExportFunction.emptyFunction);
    }
  }
  function y(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class S extends f {
    constructor(...e) {
      super(...e);
      y(this, "registerHook", e => {});
      y(this, "deregisterHook", (e, i) => {});
    }
  }
  (s = {}).ActionManagerPlugin = "ActionManagerPlugin";
  s.MetaPlugin = "MetaPlugin";
  s.PasteProtectionPlugin = "PasteProtectionPlugin";
  s.PermissionPlugin = "PermissionPlugin";
  let C = s;
  let T = {
    MsgBox: undefined,
    store: undefined,
    fetchUserPermissionOnSuite: undefined,
    fetchSuitePublicPermission: undefined,
    fetchCurrentSuite: undefined,
    importPasteSDkDynamic: undefined,
    handleSecretUpdated: undefined,
    setUtil(e) {
      let {
        MsgBox: i,
        store: r,
        fetchUserPermissionOnSuite: s,
        fetchCurrentSuite: n,
        importPasteSDkDynamic: o,
        fetchSuitePublicPermission: a,
        handleSecretUpdated: l
      } = e;
      this.MsgBox = i;
      this.store = r;
      this.fetchUserPermissionOnSuite = s;
      this.fetchSuitePublicPermission = a;
      this.fetchCurrentSuite = n;
      this.importPasteSDkDynamic = o;
      this.handleSecretUpdated = l;
    }
  };
  function I(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  let R = new class {
    static setBussinessCommonUtil(e) {
      T.setUtil(e);
    }
    getAllBlockInfo() {
      return Array.from(this.blockMap.values()).filter(e => !e.beenDeleted);
    }
    getBlockSourceInfo(e) {
      let i = this.getAllBlockInfo().filter(i => i.token === e)[0];
      return (i == null ? undefined : i.sourceInfo) || i || {};
    }
    constructor() {
      I(this, "blockMap", new Map());
      I(this, "plugins", {});
      I(this, "getPlugins", () => {
        let e = {
          [C.PermissionPlugin]: new g(this),
          [C.MetaPlugin]: new b(this),
          [C.ActionManagerPlugin]: new S(this),
          [C.PasteProtectionPlugin]: new m(this)
        };
        return this.plugins = e;
      });
      I(this, "checkHasSameToken", e => {
        let i = this.blockMap.get(e);
        let r = false;
        if (i) {
          this.blockMap.forEach((s, n) => {
            if (s.token === i.token && e !== n && !s.beenDeleted) {
              r = true;
            }
          });
        }
        return r;
      });
      I(this, "runRegisterHook", e => {
        let i = this.checkHasSameToken(e);
        Object.entries(this.plugins).forEach(r => {
          let [s, n] = r;
          try {
            if (n != null) {
              n.registerHook(e, i);
            }
          } catch (e) {}
        });
      });
      I(this, "runDeregisterHook", e => {
        let i = this.checkHasSameToken(e);
        Object.entries(this.plugins).forEach(r => {
          let [s, n] = r;
          try {
            if (n != null) {
              n.deregisterHook(e, i);
            }
          } catch (e) {}
        });
      });
      I(this, "storeActionManager", (e, i) => {
        try {
          if (!this.blockMap.get(e)) {
            return;
          }
          let r = {
            ...this.blockMap.get(e),
            actionManager: i
          };
          this.blockMap.set(e, r);
          this.plugins[C.ActionManagerPlugin].registerHook(e);
        } catch (e) {}
      });
      I(this, "register", e => {
        try {
          let {
            blockId: i
          } = e;
          if (!i) {
            return;
          }
          this.blockMap.set(i, e);
          this.runRegisterHook(i);
        } catch (e) {}
      });
      I(this, "deregister", e => {
        try {
          let i = this.blockMap.get(e);
          if (!i) {
            return;
          }
          this.runDeregisterHook(e);
          this.blockMap.set(e, {
            ...i,
            beenDeleted: true
          });
        } catch (e) {}
      });
      I(this, "deregisterAll", () => {
        try {
          this.blockMap.forEach((e, i) => this.deregister(i));
          this.blockMap.clear();
        } catch (e) {}
      });
      try {
        this.getPlugins();
      } catch (e) {}
    }
  }();
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  async function k(e, i) {
    let {
      setUseCompleteCache: s,
      token: n,
      rootType: o,
      getLastBackupIsRestored: a
    } = i;
    let l = await docxApiConstantsExports.docxApiService.fetchClientVarsSlicedByCache(e, n, o, a);
    if (!l) {
      return;
    }
    let c = await l.clientVarsCache;
    if (!c) {
      return;
    }
    let {
      isMockData: h
    } = l;
    let d = !!c.data.skip_blocks?.length;
    let u = !c.data.has_more && !d;
    if (!h) {
      s(u);
    }
    return c;
  }
  var docxEventCollectorWrap = require("docx-event-collector-wrap") /*id: 140253*/;
  let {
    docxClientvarFetchManager: P,
    DocxClientvarInteractionModule: O
  } = window;
  async function L() {
    return (await require.e("docx-clientvar-fetch-loadable") /*id: 28086*/.then(require.bind(require, "docx-clientvar-fetch-module") /*id: 24501*/)).default;
  }
  async function w() {
    return new (await require.e("docx-clientvar-fetch-loadable") /*id: 28086*/.then(require.bind(require, "docx-clientvar-fetch-manager") /*id: 691508*/)).InteractionModule();
  }
  var docxFetchConcurrencyKeys = require("docx-fetch-concurrency-keys") /*id: 177633*/;
  var hybridDeployToastControl = require("hybrid-deploy-toast-control") /*id: 862984*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var docxFetchConcurrencyConfig = require("docx-fetch-concurrency-config") /*id: 858864*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var apiRetryInterceptor = require("api-retry-interceptor") /*id: 392268*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var storeDocActions = require("store-doc-actions") /*id: 567140*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let K = !!browserEnvironmentDetectionUtils.browserDetector.isMobile && !!objectPathGetDefault.getObjectPathDefault(platformDocUtils.H8b(), ["ccm.docx.h5.ttu", "reuse_client_var"], false);
  function z(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class q {
    get clientvarFrom() {
      return this._clientvarFrom;
    }
    setClientvarFrom(e) {
      this._clientvarFrom = e;
    }
    registerGetLastBackupIsRestored(e) {
      this.getLastBackupIsRestored = e;
    }
    getClientVarToken(e) {
      try {
        let i = objectPathGetDefault.getObjectPathDefault(e, "config.url", "");
        if (i.indexOf("/api/docx/pages/client_vars") !== -1) {
          let {
            searchParams: e
          } = new URL(i);
          if (syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
            return e.get("block_id");
          }
          return e.get("id");
        }
        if (syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
          return objectPathGetDefault.getObjectPathDefault(e, "config.params.block_id");
        }
        return objectPathGetDefault.getObjectPathDefault(e, "config.params.id");
      } catch (e) {}
    }
    uploadHandler(e) {
      if ((e == null ? undefined : e.code) === errorStatusCodes.ErrorCode.COLD_DELETE) {
        hybridDeployToastControl.showDeployToast();
      } else {
        var i;
        if (e == null ? undefined : (i = e.url) === null || i === undefined ? undefined : i.includes(apiEndpointConstants.apiEndpoints.clientVars)) {
          hybridDeployToastControl.hideDeployToast();
        }
      }
      if ((e == null ? undefined : e.RetryCount) >= apiRetryInterceptor.MAX_RETRY_LIMIT) {
        hybridDeployToastControl.hideDeployToast();
      }
      browserEnvironmentDetectionUtils.browserDetector.isMobile;
      docxEventCollectorWrap.wrapDocxCollector(docxFetchConcurrencyKeys.fetchStateKeys.DOCX_WORKER_FETCH_CLIENTVAR, e);
    }
    async waitFetchManager() {
      var i;
      var r;
      let s = reduxStoreInitializer.reduxStore.getState();
      let o = (r = s == null ? undefined : (i = s.appState) === null || i === undefined ? undefined : i.flowSetting?.enableDocInline) !== null && r !== undefined && r;
      if (this.rootRecordId !== docTokenHelperUtils.resolveDocToken() || o) {
        if (O) {
          this.clientvarFetchManager = new O();
        } else {
          this.clientvarFetchManager = await w();
        }
      } else {
        this.clientvarFetchManager = await L();
      }
      return this.clientvarFetchManager;
    }
    async start(e, i, r, s) {
      let o;
      let u;
      let f;
      if (!this.clientvarFetchManager) {
        await this.waitFetchManager();
      }
      this.clientvarFetchManager.uploadHandler = this.uploadHandler;
      if (this.clientvarFetchManager.hasColdDeleteError) {
        hybridDeployToastControl.showDeployToast();
      }
      this.cacheManager = r;
      let v = "";
      let g = "";
      if ((s == null ? undefined : s.rootType) === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
        g = this.rootRecordId;
        o = fetchSyncConstants.fetchModes.SPECIFIC;
      } else if (syncUrlBlockUtils.isSyncingActive()) {
        g = syncUrlBlockUtils.getUrlToken();
        o = fetchSyncConstants.fetchModes.SPECIFIC;
      } else {
        v = window.location.hash.slice(1);
        g = v = (v = docTokenHelperUtils.transformTokenId(v)) && v.startsWith("fdc") ? v : "";
        o = docxFetchConcurrencyConfig.getFetchMode(v, browserEnvironmentDetectionUtils.browserDetector);
      }
      if ((!K || browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) && offlineStatusSelectorsUtils.isMobileOrOffline()) {
        var _;
        let {
          awaitToken: e
        } = s || {};
        this._awaitToken = e;
        let i = this.rootRecordId;
        try {
          let {
            id: e = "",
            meta_map: r
          } = ((u = await k(o, {
            clearCache: this.cacheManager.deleteCache.bind(this.cacheManager),
            setUseCompleteCache: this.cacheManager.setUseCompleteCache.bind(this.cacheManager),
            token: i,
            rootType: (s == null ? undefined : s.rootType) || docBlockTypeConstants.blockTypeConstants.PAGE,
            setClientvarFrom: this.setClientvarFrom.bind(this),
            getLastBackupIsRestored: this.getLastBackupIsRestored
          })) == null ? undefined : u.data) || {};
          let n = r == null ? undefined : r[e];
          if (e && n) {
            reduxStoreInitializer.reduxStore.dispatch(storeDocActions.updateDocMetaMap(e, n));
          }
        } catch (e) {}
        let r = u == null ? undefined : u.data?.block_map;
        if (r == null ? undefined : r[i || ""]) {
          let e = (_ = r[i].data.children) === null || _ === undefined ? undefined : _.filter(e => !r[e]).map(e => docxFetchConcurrencyConfig.getShortId(e));
          if (e != null) {
            e.length;
          }
        }
        if (this._awaitToken !== e) {
          return true;
        }
      } else {
        u = s == null ? undefined : s.awaitFirstSliceResult;
      }
      let {
        limit: m,
        concurrency: E,
        restartCodes: b
      } = s || {};
      let y = {};
      if (boolDefaultUtil.getDefaultBool("docx_trace_enable", false)) {
        y["X-TT-Trace"] = 1;
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
        y = {
          ...y,
          ...platformDocUtils.HoC()
        };
      }
      if (platformDocUtils.Kvd) {
        f = platformDocUtils.Kvd();
      }
      let S = {
        token: e,
        stage: i,
        blockId: g,
        mode: o,
        cacheClientvar: u,
        limit: m,
        concurrency: E || this.maxConcurrency,
        noUseWorker: true,
        extraParams: f,
        header: y,
        errorHandler: this.handleError,
        uploadHandler: this.uploadHandler,
        fallbackFetch: docxApiConstantsExports.docxApiService.fetchClientVarSlicedWithAnyParams,
        finishCb: (e, i) => {
          let [r] = i();
          let {
            id: s,
            meta_map: n
          } = r;
          let o = n[s];
          if (s && o) {
            reduxStoreInitializer.reduxStore.dispatch(storeDocActions.updateDocMetaMap(s, o));
          }
        }
      };
      let C = this.clientvarFetchManager.start(S);
      let T = {};
      if (u && u.data) {
        let i = u.data;
        (T = throttledPathFilterStringify.throttledPathStr(i, ["concurrent", "cursor", "has_more", "next_cursors", "structure_version"])).skip_blocks = (i.skip_blocks || []).map(docxFetchConcurrencyConfig.getShortId);
        if (navigator.onLine && e) {
          docxApiConstantsExports.docxApiService.fetchClientVarSlicedWithAnyParams({
            id: e,
            mode: o
          }).then(i => {
            var s;
            let n = i == null ? undefined : (s = i.data) === null || s === undefined ? undefined : s.meta_map?.[e];
            if (e && n) {
              reduxStoreInitializer.reduxStore.dispatch(storeDocActions.updateDocMetaMap(e, n));
            }
          }).catch(e => {
            docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.SUITE_DOCUMENT_ON_ERROR, {
              error: e.errorOption
            });
          });
        }
      }
      let I = Object.assign(throttledPathFilterStringify.throttledPathStr(S, ["header", "stage", "concurrency"]), {
        start: C,
        useCache: +!!this.clientvarFetchManager.getRemainInfo(),
        cacheClientvar: T,
        isMobile: Number(this.isMobile),
        noUseWorker: Number(this.noUseWorker),
        token: docxFetchConcurrencyConfig.getShortId(S.token || ""),
        blockId: docxFetchConcurrencyConfig.getShortId(S.blockId || ""),
        isAsyncFetchManager: +!P
      });
      docxEventCollectorWrap.wrapDocxCollector(docxFetchConcurrencyKeys.fetchStateKeys.PRE_CONCURRENCY_FETCH_INIT, I);
      if (!C && e && b && b.length > 0) {
        let r = this.clientvarFetchManager.getClientvar(e);
        if (r && r.code && b.includes(r.code)) {
          this.clientvarFetchManager.start({
            token: "",
            stage: i,
            mode: o
          });
          this.clientvarFetchManager.start(S);
        } else if (!r) {
          this.clientvarFetchManager.fetchClientvar(e).catch(e => {
            if (e && e.code && b.includes(e.code)) {
              this.clientvarFetchManager.start({
                token: "",
                stage: i,
                mode: o
              });
              this.clientvarFetchManager.start(S);
            }
          });
        }
      }
    }
    stop(e) {
      if (e === this._awaitToken) {
        this._awaitToken = "";
      }
      this._clientvarFrom = "";
    }
    constructor(e) {
      this.rootRecordId = e;
      z(this, "clientvarFetchManager", undefined);
      z(this, "cacheManager", undefined);
      z(this, "getLastBackupIsRestored", undefined);
      z(this, "isMobile", undefined);
      z(this, "isPreFetchEnable", undefined);
      z(this, "maxConcurrency", undefined);
      z(this, "noUseWorker", false);
      z(this, "_awaitToken", "");
      z(this, "_clientvarFrom", "");
      z(this, "handleError", e => {
        var i;
        var r;
        var s;
        let n = {};
        if (e) {
          reduxStoreInitializer.reduxStore.dispatch(storeDocActions.updateVarErrorCode(e.code));
          n.code = e.code;
          n.isAxiosError = e.isAxiosError;
          n.status = e.status;
          n.statusText = e.statusText;
          n.url = e.url;
          n.timeout = e.timeout;
          n.timeoutErrorMessage = e.timeoutErrorMessage;
          n.msg = e.msg;
          n.resMsg = e.resMsg;
          n.message = `inDocx:${e.message || e.msg || e.resMsg || ""}`;
          n.stringify = JSON.stringify(e);
          n.str = e.toString && e.toString() || "";
          n.stack = e.stack || "";
        }
        docxEventCollectorWrap.wrapDocxCollector(docxFetchConcurrencyKeys.fetchStateKeys.PRE_CONCURRENCY_FETCH_OOPS, n);
        if (e.code === errorStatusCodes.ErrorCode.KEY_INVALID) {
          docComponentStubConfig.emptyObject_2.trigger(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.DOCUMENT_KEY_INVALID);
          if ((i = this.cacheManager) !== null && i !== undefined) {
            i.deleteCache();
          }
          if ((r = this.cacheManager) !== null && r !== undefined) {
            r.deleteSSRCache();
          }
        } else if (e.code === errorStatusCodes.ErrorCode.TNS_BLOCK_CODE) {
          let i = this.getClientVarToken(e);
          let r = R == null ? undefined : (s = R.getAllBlockInfo()) === null || s === undefined ? undefined : s.map(e => e.token);
          if (!(r == null ? undefined : r.includes(i)) && platformDocUtils.OLt !== null && platformDocUtils.OLt !== undefined) {
            platformDocUtils.OLt({
              code: e.code,
              url: e.tnsBlockUrl
            });
          }
        }
      });
      this.isMobile = browserEnvironmentDetectionUtils.browserDetector.isMobile;
      let i = docxFetchConcurrencyConfig.getFetchConfig();
      this.maxConcurrency = i.concurrency;
      this.noUseWorker = i.noWorker;
      if (e === docTokenHelperUtils.resolveDocToken()) {
        this.clientvarFetchManager = P;
      }
    }
  }
  function Y(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class J {
    static getInstance() {
      J._instance ||= new J();
      return J._instance;
    }
    register(e = docTokenHelperUtils.resolveDocToken()) {
      if (this.fetcherMap.has(e)) {
        return;
      }
      let i = new q(e);
      this.fetcherMap.set(e, i);
    }
    unregister(e = docTokenHelperUtils.resolveDocToken()) {
      if (this.fetcherMap.has(e)) {
        this.fetcherMap.delete(e);
      }
    }
    getFetcher(e = docTokenHelperUtils.resolveDocToken(), i) {
      if (!this.fetcherMap.has(e)) {
        this.register(e);
      }
      let r = this.fetcherMap.get(e);
      if (!r.getLastBackupIsRestored && i) {
        r.registerGetLastBackupIsRestored(i);
      }
      return r;
    }
    constructor() {
      Y(this, "fetcherMap", new Map());
    }
  }
  Y(J, "_instance", undefined);
  require.d(exports, {
    DocxClientvarFetchManager: function () {
      return J;
    }
  });
}