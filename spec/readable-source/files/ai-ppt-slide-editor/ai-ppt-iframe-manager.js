// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'AiPptIframeManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 788603
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var skillMessageBox = require("skill-message-box") /*id: 111120*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var selectionStoreHook = require("selection-store-hook") /*id: 977019*/;
  let c = {
    aiEditPageEnabled: true
  };
  var globalEventEmitter_1 = require("global-event-emitter_1") /*id: 87667*/;
  var slideToastManager = require("slide-toast-manager") /*id: 842073*/;
  let g = ["https://www.doubao.com", "https://www.doubao.com.cn", "https://inhouse.doubao.com", "https://beta.doubao.com", "https://feishu.doubao.com"];
  let h = e => g.includes(e.origin);
  var themeDetectionUtility = require("theme-detection-utility") /*id: 452866*/;
  var appIdentityInfo = require("app-identity-info") /*id: 838408*/;
  var feishuTempConfigLoader = require("feishu-temp-config-loader") /*id: 767490*/;
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  function x(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let S = new class {
    getLang() {
      return languageCodeNormalizer.normalizeLanguageCode(i18nLanguageStorageUtils.getUserLanguage());
    }
    getPolicyEnv() {
      return appIdentityInfo.getAppIdentity();
    }
    constructor() {
      x(this, "getAuthHeaders", async () => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "[SlideInitializer] get auth headers"
        });
        let e = feishuAccessTokenService.getFeishuAccessTokenService();
        if (!e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "[SlideInitializer] get auth headers error",
            error: Error("feishuAccessTokenService is null")
          });
          return {};
        }
        let t = await e.getAuthHeadersAsync();
        let i = [];
        if (!(t == null ? undefined : t.Authorization)) {
          i.push("Authorization header is undefined");
        }
        if (!(t == null ? undefined : t.DPoP)) {
          i.push("DPoP header is undefined");
        }
        if (i.length > 0) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "[SlideInitializer] get auth headers error",
            error: Error(i.join(", "))
          });
        }
        return t;
      });
      x(this, "getTmplConf", async () => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "[SlideInitializer] fetch tmpl conf"
        });
        let t = chatUserInfoActions.getUserInfo()?.user_id;
        let i = t ? {
          indexedDB: window.indexedDB,
          userId: t
        } : undefined;
        return await feishuTempConfigLoader.getFeishuTempConfig({
          getAuthHeaders: this.getAuthHeaders,
          indexedDB: i,
          logger: loggerServiceCore.defaultLogger
        });
      });
      x(this, "loadConfig", async () => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "[SlideInitializer] load config"
        });
        let t = this.getLang();
        let i = await this.getTmplConf();
        let {
          user_id: r,
          tenant_id: n,
          client_features: a = "{}",
          globalConfig: l = "{}",
          cdn_host: s,
          cdn_host_v2: d
        } = i;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "partner_ccm_slide_context",
          meta: {
            slide_sdk_version: "1.0.0.978",
            slide_ccm_base_version: "1.0.0.202",
            slide_user_id: r,
            slide_tenant_id: n
          }
        });
        let c = {
          id: r,
          sz: i.sz,
          suid: i.suid,
          tenantId: n,
          tenant_tag: i == null ? undefined : i.current_user?.TenantTag,
          departmentId: i.department_id,
          language: t,
          host: i.host,
          abTest: i.ab_test,
          abTestV2: i.ab_test_new,
          encryptedUserId: i.temp_encrypt_user_id,
          encryptedTenantId: i.temp_encrypt_tenant_id,
          settingsConfig: JSON.parse(i.settings_config || "{}"),
          clientFeatures: JSON.parse(a),
          appConfig: {},
          domain: i.domain,
          wsTicket: i.ws_ticket,
          wsServer: i.ws_server,
          user_agent: i.user_agent,
          isFeedEnv: false
        };
        return {
          user_id: r,
          tenant_id: n,
          client_features: a,
          language: t,
          globalConfig: JSON.parse(l),
          user: c,
          cdn_host: s,
          cdn_host_v2: d
        };
      });
    }
  }();
  function y(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class R {
    _sendSavedRequest() {
      if (this.savedRequest.length > 0) {
        this.savedRequest.forEach(e => {
          let {
            method: t,
            params: i,
            resolve: r,
            reject: n
          } = e;
          this.request(t, i).then(r).catch(n);
        });
        this.savedRequest.length = 0;
      }
    }
    bindPort(e) {
      this.port = e;
      this.port.onmessage = this.handleMessage.bind(this);
      this._sendSavedRequest();
    }
    request(e, t) {
      return new Promise(this.port ? (i, r) => {
        if (!this.port) {
          return r(Error("RpcClient not bound to a port"));
        }
        this.id++;
        if (this.id >= Number.MAX_SAFE_INTEGER) {
          this.id = 0;
          this.pendingRequests.forEach(e => {
            let {
              reject: t
            } = e;
            t(Error("Rpc Timeout"));
          });
          this.pendingRequests.clear();
        }
        let {
          id: n
        } = this;
        this.pendingRequests.set(n, {
          resolve: i,
          reject: r
        });
        this.port.postMessage({
          jsonrpc: "2.0",
          id: n,
          method: e,
          params: t
        });
      } : (i, r) => {
        this.savedRequest.push({
          method: e,
          params: t,
          resolve: i,
          reject: r
        });
      });
    }
    register(e, t) {
      this.methods.set(e, t);
    }
    postMessage(e) {
      var t;
      if ((t = this.port) !== null && t !== undefined) {
        t.postMessage(e);
      }
    }
    async handleMessage(e) {
      let {
        data: t
      } = e;
      if (t && t.jsonrpc === "2.0" && this.port) {
        if (t.method) {
          let e = this.methods.get(t.method);
          if (e) {
            try {
              let i = await e(t.params);
              let r = {
                jsonrpc: "2.0",
                id: t.id,
                result: i
              };
              this.postMessage(r);
            } catch (i) {
              let e = {
                jsonrpc: "2.0",
                id: t.id,
                error: {
                  code: -32603,
                  message: i.message || "Internal error"
                }
              };
              this.postMessage(e);
            }
          } else {
            let e = {
              jsonrpc: "2.0",
              id: t.id,
              error: {
                code: -32601,
                message: `Method [${t.method}] not found`
              }
            };
            this.postMessage(e);
          }
        } else if (t.id !== undefined) {
          let e = this.pendingRequests.get(t.id);
          if (e) {
            if (t.error) {
              e.reject(t.error);
            } else {
              e.resolve(t.result);
            }
            this.pendingRequests.delete(t.id);
          }
        }
      }
    }
    destroy() {
      if (this.port) {
        this.port.onmessage = null;
        this.port.close();
        this.port = undefined;
      }
      for (let [e, t] of this.pendingRequests) {
        t.reject(Error("[ai-ppt] rpc Client destroyed"));
      }
      this.pendingRequests.clear();
      if (this.savedRequest.length > 0) {
        this.savedRequest.forEach(e => {
          e.reject(Error("[ai-ppt] rpc Client destroyed"));
        });
        this.savedRequest = [];
      }
      this.methods.clear();
    }
    constructor(e) {
      y(this, "port", undefined);
      y(this, "id", undefined);
      y(this, "pendingRequests", undefined);
      y(this, "methods", undefined);
      y(this, "savedRequest", []);
      this.port = e;
      this.id = 1;
      this.pendingRequests = new Map();
      this.methods = new Map();
      if (this.port) {
        this.port.onmessage = this.handleMessage.bind(this);
      }
    }
  }
  var aiSlideMessageBuilder = require("ai-slide-message-builder") /*id: 329004*/;
  async function C(e) {
    let {
      inputValue: t,
      selectedPositions: i,
      artifactVersionId: r,
      docToken: n,
      structureVersion: l
    } = e;
    let s = skillMessageBox.getMessage("canvas", "vmokDoubaoIMService");
    if (!s) {
      return null;
    }
    let {
      conversationInfo: o
    } = s.getContext() || {};
    if (!o) {
      return null;
    }
    let {
      conversation_id: d
    } = o || {};
    return aiSlideMessageBuilder.createSlideMessage({
      conversationId: d ?? "",
      presentationId: n || "",
      artifactVersionId: r || "",
      inputValue: t,
      selectedPositions: i,
      structureVersion: l
    });
  }
  var flowAiPptIframeConstants = require("flow-ai-ppt-iframe-constants") /*id: 625035*/;
  function j(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class E {
    getIframe() {
      return this._iframe;
    }
    init() {
      window.addEventListener("message", this.messageHandler);
    }
    updateBizDeps(e) {
      this.bizDeps = e;
    }
    destroy() {
      this._eventEmitter.removeAllListeners();
      window.removeEventListener("message", this.messageHandler);
      this._client.destroy();
    }
    on(e, t) {
      return this._eventEmitter.on(e, t);
    }
    off(e, t) {
      return this._eventEmitter.off(e, t);
    }
    emitSelf(e, t) {
      return this._eventEmitter.emit(e, t);
    }
    emitToChild(e, t) {
      this._client.request(flowAiPptIframeConstants.pptActionTypes.Event, {
        type: e,
        data: t
      });
    }
    register() {
      let e = this._client;
      e.register(flowAiPptIframeConstants.apiMethodNames.Event, this.handleEvent);
      e.register(flowAiPptIframeConstants.apiMethodNames.getAuthHeadersAsync, () => {
        var e;
        if ((e = feishuAccessTokenService.getFeishuAccessTokenService()) === null || e === undefined) {
          return undefined;
        } else {
          return e.getAuthHeadersAsync();
        }
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.getTmplConf, () => S.getTmplConf());
      e.register(flowAiPptIframeConstants.apiMethodNames.getPolicyEnv, () => S.getPolicyEnv());
      e.register(flowAiPptIframeConstants.apiMethodNames.loadConfig, () => S.loadConfig());
      e.register(flowAiPptIframeConstants.apiMethodNames.showToast, e => {
        slideToastManager.slideToastManager.showToast(e);
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.hideToast, e => {
        slideToastManager.slideToastManager.hideToast(e);
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.trackEvent, e => {
        var t;
        let i = (t = this.bizDeps) === null || t === undefined ? undefined : t.getMessageId();
        let [r, n, ...a] = e;
        return teaAnalyticsEventTracker.trackEvent(r, {
          ...n,
          message_id: i
        }, ...a);
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.searchPPTImages, e => apiServicesCollection.AiPptFacadeApiService.AGWSearchPPTImages(e, {
        overrideConfig: {
          timeout: 60000
        }
      }));
      e.register(flowAiPptIframeConstants.apiMethodNames.genPPTImages, e => apiServicesCollection.AiPptFacadeApiService.AGWGenPPTImages(e, {
        overrideConfig: {
          timeout: 60000
        }
      }));
      e.register(flowAiPptIframeConstants.apiMethodNames.getSlardarContext, () => {
        var e;
        var t;
        if ((t = window.inlineSlardarInstance) === null || t === undefined) {
          return undefined;
        } else if ((e = t.context) === null || e === undefined) {
          return undefined;
        } else {
          return e.toString();
        }
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.persistLog, e => {
        let {
          type: t,
          args: i
        } = e;
        switch (t) {
          case "log":
            loggerServiceCore.defaultLogger.persist.log(i);
            break;
          case "info":
            loggerServiceCore.defaultLogger.persist.info(i);
            break;
          case "error":
            loggerServiceCore.defaultLogger.persist.error(i);
            break;
          case "warning":
            loggerServiceCore.defaultLogger.persist.warning(i);
            break;
          case "fatal":
            loggerServiceCore.defaultLogger.persist.fatal(i);
            break;
          case "success":
            loggerServiceCore.defaultLogger.persist.success(i);
        }
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.createIntelligentEditMessage, e => {
        var t;
        var i;
        let {
          inputValue: r,
          selectedPositions: n,
          structureVersion: a
        } = e;
        return C({
          inputValue: r,
          selectedPositions: n,
          artifactVersionId: (t = this.bizDeps) === null || t === undefined ? undefined : t.getArtifactVersionId(),
          docToken: (i = this.bizDeps) === null || i === undefined ? undefined : i.getDocToken(),
          structureVersion: a
        });
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.getTrackCommonParams, () => {
        var e;
        if ((e = this.bizDeps) === null || e === undefined) {
          return undefined;
        } else {
          return e.getTrackCommonParams();
        }
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.getMessageId, () => {
        var e;
        if ((e = this.bizDeps) === null || e === undefined) {
          return undefined;
        } else {
          return e.getMessageId();
        }
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.sendMessage, e => {
        let t = skillMessageBox.getMessage("canvas", "vmokDoubaoIMService");
        if (!t) {
          throw Error("[ai-ppt] im service not found");
        }
        t.sendMessage(e);
        return true;
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.permissionChangeToNopermission, () => {
        globalEventEmitter_1.globalEmitter.emit("slides-permission-change-to-no-access");
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.getRootTheme, () => themeDetectionUtility.getCurrentTheme());
      e.register(flowAiPptIframeConstants.apiMethodNames.openSelectBar, e => {
        selectionStoreHook.useSelectionStore.getState().setSelection(e);
        return true;
      });
      e.register(flowAiPptIframeConstants.apiMethodNames.getFGConfig, () => c);
    }
    ready() {
      return this._readyPromise;
    }
    bindPort(e) {
      var t;
      this._client.bindPort(e);
      if ((t = this._readyResolve) !== null && t !== undefined) {
        t.call(this);
      }
    }
    startPlayFromCurrentPage() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.startPlayFromCurrentPage);
    }
    openFontReplacePanel() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.openFontReplacePanel);
    }
    exportPPTX() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.exportPPTX);
    }
    exportPDF() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.exportPDF);
    }
    openFindReplacePanel() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.openFindReplacePanel);
    }
    getSlidesTitle() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getSlidesTitle);
    }
    openHistoryList() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.openHistoryList);
    }
    presentationFromBeginning() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.presentationFromBeginning);
    }
    toggleDarkTheme(e) {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.toggleDarkMode, e);
    }
    revertHistory(e, t) {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.revertHistory, {
        token: e,
        version: t
      });
    }
    historyCloseList() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.historyCloseList);
    }
    historyPlayNextDiff() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.historyPlayNextDiff);
    }
    historyPlayPrevDiff() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.historyPlayPrevDiff);
    }
    switchReadonlyMode(e) {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.switchReadonlyMode, e);
    }
    getSelectedPositions() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getSelectedPositions);
    }
    getStructureVersion() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getStructureVersion);
    }
    getCurrentMinorVersion() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getCurrentMinorVersion);
    }
    getCurrentVersionCreateTime() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getCurrentVersionCreateTime);
    }
    handleReplaceImage(e) {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.handleReplaceImage, e);
    }
    forceHideToolbox() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.forceHideToolbox);
    }
    clearForceHideToolbox() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.clearForceHideToolbox);
    }
    getElementReportParams() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getElementReportParams);
    }
    getSelectedImageToken() {
      return this._client.request(flowAiPptIframeConstants.pptActionTypes.getSelectedImageToken);
    }
    constructor({
      bizDeps: e,
      iframe: t
    }) {
      j(this, "bizDeps", undefined);
      j(this, "_client", undefined);
      j(this, "_readyPromise", undefined);
      j(this, "_readyResolve", undefined);
      j(this, "_eventEmitter", new eventEmitterWrapper_1.eventEmitter());
      j(this, "_iframe", undefined);
      j(this, "messageHandler", e => {
        if (h(e) && e.data === flowAiPptIframeConstants.iframeChannelId && e.source === this._iframe.contentWindow) {
          let t = e.ports[0];
          if (t) {
            this._client.bindPort(t);
          }
        }
      });
      j(this, "handleEvent", e => {
        let {
          type: t,
          data: i
        } = e;
        this._eventEmitter.emit(t, i);
      });
      this.bizDeps = e;
      this._client = new R();
      this._readyPromise = new Promise(e => {
        this._readyResolve = e;
      });
      this._iframe = t;
      this.register();
      this.init();
    }
  }
  require.d(exports, {
    AiPptIframeManager: function () {
      return E;
    }
  });
}