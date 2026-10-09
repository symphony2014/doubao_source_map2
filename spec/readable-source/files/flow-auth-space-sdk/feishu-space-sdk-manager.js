// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'FeishuSpaceManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57467.ca189123.js
         * chunkId: 57467
         * moduleId: 858515
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var slardarMonitorManager = require("slardar-monitor-manager") /*id: 309069*/;
  function n(e, t, i) {
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
  let s = e => e === null || typeof e != "object" && typeof e != "function";
  let o = (e, t) => i => {
    let r = (e == null ? undefined : e("context.toString")) || {};
    let n = e => {
      e.overrides = {
        context: {
          ...r,
          ...t
        }
      };
      return e;
    };
    if (e != null) {
      e("on", "report", n);
    }
    i();
    if (e != null) {
      e("off", "report", n);
    }
  };
  class a {
    setContext(e, t) {
      if (typeof e != "string" || !s(t)) {
        throw TypeError("Context key must be a string and value must be a plain value.");
      }
      this.ctx[e] = t;
    }
    sendEvent() {
      var e = arguments.length;
      var t = Array(e);
      var i = 0;
      for (; i < e; i++) {
        t[i] = arguments[i];
      }
      this.reportWithContext(() => {
        var e;
        var i;
        if ((i = slardarMonitorManager.slardarManager.getInstance()) !== null && i !== undefined && (e = i.sendEvent) !== null && e !== undefined) {
          e.call(i, ...t);
        }
      });
    }
    sendLog() {
      var e = arguments.length;
      var t = Array(e);
      var i = 0;
      for (; i < e; i++) {
        t[i] = arguments[i];
      }
      this.reportWithContext(() => {
        var e;
        var i;
        if ((i = slardarMonitorManager.slardarManager.getInstance()) !== null && i !== undefined && (e = i.sendLog) !== null && e !== undefined) {
          e.call(i, ...t);
        }
      });
    }
    sendCustomPerfMetric() {
      var e = arguments.length;
      var t = Array(e);
      var i = 0;
      for (; i < e; i++) {
        t[i] = arguments[i];
      }
      this.reportWithContext(() => {
        var e;
        var i;
        if ((i = slardarMonitorManager.slardarManager.getInstance()) !== null && i !== undefined && (e = i.sendCustomPerfMetric) !== null && e !== undefined) {
          e.call(i, ...t);
        }
      });
    }
    captureException() {
      var e = arguments.length;
      var t = Array(e);
      var i = 0;
      for (; i < e; i++) {
        t[i] = arguments[i];
      }
      this.reportWithContext(() => {
        var e;
        var i;
        if ((i = slardarMonitorManager.slardarManager.getInstance()) !== null && i !== undefined && (e = i.captureException) !== null && e !== undefined) {
          e.call(i, ...t);
        }
      });
    }
    startAction() {
      var e = arguments.length;
      var t = Array(e);
      var i = 0;
      for (; i < e; i++) {
        t[i] = arguments[i];
      }
      this.reportWithContext(() => {
        var e;
        var i;
        if ((i = slardarMonitorManager.slardarManager.getInstance()) !== null && i !== undefined && (e = i.startAction) !== null && e !== undefined) {
          e.call(i, ...t);
        }
      });
    }
    sendPageview() {
      var e = arguments.length;
      var t = Array(e);
      var i = 0;
      for (; i < e; i++) {
        t[i] = arguments[i];
      }
      this.reportWithContext(() => {
        var e;
        var i;
        if ((i = slardarMonitorManager.slardarManager.getInstance()) !== null && i !== undefined && (e = i.sendPageview) !== null && e !== undefined) {
          e.call(i, ...t);
        }
      });
    }
    constructor() {
      n(this, "ctx", {});
      n(this, "reportWithContext", o(slardarMonitorManager.slardarManager.getInstance(), this.ctx));
    }
  }
  var feishuTempConfigLoader = require("feishu-temp-config-loader") /*id: 767490*/;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var federationRuntimeManager = require("federation-runtime-manager") /*id: 380632*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  function v(e, t, i) {
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
  class g extends Error {
    constructor(e, t, i, r) {
      super(e);
      v(this, "code", undefined);
      v(this, "logId", undefined);
      v(this, "apiName", undefined);
      this.name = "feishusdkapierror";
      this.code = t;
      this.logId = i;
      this.apiName = r;
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  let k = e => ({
    fetchRecentTabs: async () => {
      let t = await e.fetchRecentTabs();
      if ((t == null ? undefined : t.code) === 0) {
        return {
          data: t.frontData
        };
      }
      {
        let e = new g(t.msg, t.code, t.logId, "fetchRecentTabs");
        if (t.code === -8 || t.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchRecentList: async t => {
      let i = await e.fetchRecentList(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchRecentList");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchChildrenList: async t => {
      let i = await e.fetchChildrenList(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchChildrenList");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchFolderPath: async t => {
      let i = await e.fetchFolderPath(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchFolderPath");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    }
  });
  let w = e => ({
    fetchRecentTabs: async () => {
      let t = await e.fetchRecentTabs();
      if ((t == null ? undefined : t.code) === 0) {
        return {
          data: t.frontData
        };
      }
      {
        let e = new g(t.msg, t.code, t.logId, "fetchRecentTabs");
        if (t.code === -8 || t.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchRecentList: async t => {
      let i = await e.fetchRecentList(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchRecentList");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    reportRecent: async t => {
      let i = await e.reportRecent(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "reportRecent");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchChildrenList: async t => {
      let i = await e.fetchChildrenList(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchChildrenList");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchFolderPath: async t => {
      let i = await e.fetchFolderPath(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchFolderPath");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchPublicPermission: async t => {
      let i = await e.fetchPublicPermission(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchPublicPermission");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    updatePublicPermission: async t => {
      let i = await e.updatePublicPermission(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "updatePublicPermission");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchPermissionState: async t => {
      let i = await e.fetchPermissionState(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: {
            ...i.frontData,
            code: i.code
          }
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchPermissionState");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    downloadFile: async t => {
      let i = await e.downloadFile(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "downloadFile");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    moveFile: async t => {
      let i = await e.moveFile(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "moveFile");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    removeFile: async t => {
      let i = await e.removeFile(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "removeFile");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    rename: async t => {
      let i = await e.rename(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "renameFile");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    createFile: async t => {
      let i = await e.createFile(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "createFile");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    requestCDN: async t => {
      let i = await e.requestCDN(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "requestCDN");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchMeta: async t => {
      let i = await e.fetchMeta(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchMeta");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    fetchFilePreviewSrc: async t => {
      let i = await e.fetchFilePreviewSrc(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchMeta");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    requestImgFileIconSrc: async t => {
      let i = await e.requestImgFileIconSrc(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "fetchMeta");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    }
  });
  let _ = e => ({
    async search(t) {
      let i = e.createCloudFileSearchInstance();
      let r = await i(t);
      if ((r == null ? undefined : r.code) === 0) {
        return {
          data: r == null ? undefined : r.frontData
        };
      }
      {
        let e = new g(r.msg, r.code, r.logId, "fetchMeta");
        samanthaToastFactory.toastInstance.error({
          content: r.msg || i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
          showClose: false
        });
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-feishusdk-api-error",
          error: e
        });
        throw e;
      }
    },
    async pullCloudFileSearchQueryHistory(t) {
      let i = e.pullCloudFileSearchQueryHistory;
      let r = await i(t);
      if ((r == null ? undefined : r.code) === 0) {
        return {
          data: r == null ? undefined : r.frontData
        };
      }
      {
        let e = new g(r.msg, r.code, r.logId, "pullCloudFileSearchQueryHistory");
        samanthaToastFactory.toastInstance.error({
          content: r.msg || i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
          showClose: false
        });
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-feishusdk-api-error",
          error: e
        });
        throw e;
      }
    },
    async putCloudFileSearchQueryHistory(t) {
      let i = e.putCloudFileSearchQueryHistory;
      let r = await i(t);
      if ((r == null ? undefined : r.code) === 0) {
        return {
          data: r == null ? undefined : r.frontData
        };
      }
      {
        let e = new g(r.msg, r.code, r.logId, "putCloudFileSearchQueryHistory");
        samanthaToastFactory.toastInstance.error({
          content: r.msg || i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
          showClose: false
        });
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-feishusdk-api-error",
          error: e
        });
        throw e;
      }
    },
    async deleteCloudFileSearchQueryHistory(t) {
      let i = e.deleteCloudFileSearchQueryHistory;
      let r = await i(t);
      if ((r == null ? undefined : r.code) === 0) {
        return {
          data: r == null ? undefined : r.frontData
        };
      }
      {
        let e = new g(r.msg, r.code, r.logId, "deleteCloudFileSearchQueryHistory");
        samanthaToastFactory.toastInstance.error({
          content: r.msg || i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
          showClose: false
        });
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-feishusdk-api-error",
          error: e
        });
        throw e;
      }
    }
  });
  let S = e => ({
    async uploadFiles(t) {
      let i = await e.uploadFiles(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "uploadFiles");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    async uploadFolder(t) {
      let i = await e.uploadFolder(t);
      if ((i == null ? undefined : i.code) === 0) {
        return {
          data: i.frontData
        };
      }
      {
        let e = new g(i.msg, i.code, i.logId, "uploadFolder");
        if (i.code === -8 || i.code === -10) {
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "aispace-feishusdk-api-error",
            error: e
          });
        }
        throw e;
      }
    },
    initUploadProcessCallback: (t, i) => e.initUploadProcessCallback(t, i),
    handleAllTaskProcess: t => e.handleAllTaskProcess(t),
    handleTaskProcess: (t, i, r) => e.handleTaskProcess(t, i, r),
    exitAllTask: () => e.exitAllTask(),
    exitTask: (t, i) => e.exitTask(t, i)
  });
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
  let P = "https://lf-package-cn.feishucdn.com/obj/feishu-static/ccm-vmok/web/space/1.0.0.264/vmok-manifest.json";
  class T {
    static getInstance() {
      this.intance ||= new T();
      return this.intance;
    }
    preloadFeishuSpaceSDK() {
      this.loadConfig();
      window.navigator.cdn_host = "//lf-package-cn.feishucdn.com/obj/feishu-static";
      federationRuntimeManager.federationRuntime.registerRemote("@ccm-vmok/space-runtime", P);
      federationRuntimeManager.federationRuntime.preloadRemote([{
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-list"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-init-module"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-upload"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-init-template-config"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-init-module"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-preview"],
        resourceCategory: "sync"
      }]);
    }
    preloadFeishuSpaceSearchSDK() {
      window.navigator.cdn_host = "//lf-package-cn.feishucdn.com/obj/feishu-static";
      federationRuntimeManager.federationRuntime.registerRemote("@ccm-vmok/space-runtime", P);
      federationRuntimeManager.federationRuntime.preloadRemote([{
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-list"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-list-first"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-init-module"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-upload"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-init-template-config"],
        resourceCategory: "all"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-share"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-search"],
        resourceCategory: "sync"
      }, {
        nameOrAlias: "@ccm-vmok/space-runtime",
        exposes: ["space-preview"],
        resourceCategory: "sync"
      }]);
    }
    async initSDK() {
      if (!this.sdkInited) {
        this.sdkInitPromise ||= this._initSDK();
        return this.sdkInitPromise;
      }
    }
    async _initSDK() {
      try {
        var e;
        if (this.sdkInited) {
          return;
        }
        this.destroying = false;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-init-sdk-start",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        let t = await this.loadConfig();
        window.navigator.cdn_host = t.cdn_host_v2;
        federationRuntimeManager.federationRuntime.registerRemote("@ccm-vmok/space-runtime", P);
        let {
          initTemplateConfig: i
        } = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-init-template-config");
        teaAnalyticsEventTracker.trackEvent("aispace-feishusdk-init-sdk-part-1-load", {
          timestamp: Date.now() - performance.timing.navigationStart
        });
        if (this.destroying) {
          return;
        }
        i(t);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-init-sdk-part-1-init",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        teaAnalyticsEventTracker.trackEvent("aispace-feishusdk-init-sdk-part-1-init", {
          timestamp: Date.now() - performance.timing.navigationStart
        });
        let {
          initModule: r,
          onLoginInfoChange: n
        } = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-init-module");
        this.sdkOnLoginInfoChange = n;
        let s = await this.getAuthHeaders();
        n(s);
        this.unSubscribeLoginInfoChange = (e = feishuAccessTokenService.getFeishuAccessTokenService()) === null || e === undefined ? undefined : e.subscribeTokenChange(this.onAuthHeeaderChange);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-init-sdk-part-2-load",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        teaAnalyticsEventTracker.trackEvent("aispace-feishusdk-init-sdk-part-2-load", {
          timestamp: Date.now() - performance.timing.navigationStart
        });
        if (this.destroying) {
          return;
        }
        r({
          getAuthHeaders: () => this.getAuthHeaders(),
          collectEvent: (e, t) => {
            teaAnalyticsEventTracker.trackEvent(`flow_doc_${e}`, t);
          },
          slardarWebClient: new a()
        });
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-init-sdk-part-2-init",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        teaAnalyticsEventTracker.trackEvent("aispace-feishusdk-init-sdk-part-2-init", {
          timestamp: Date.now() - performance.timing.navigationStart
        });
        this.sdkInited = true;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-init-sdk-end",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-init-sdk-error",
          error: e
        });
      }
    }
    async _getFeishuSpaceSDk() {
      try {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-space-sdk-load-start",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        await this.initSDK();
        let e = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-list");
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-space-list-load",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        teaAnalyticsEventTracker.trackEvent("aispace-feishusdk-space-list-load", {
          timestamp: Date.now() - performance.timing.navigationStart
        });
        this.feishuSDK = w(e);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-space-sdk-load-end",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-space-sdk-load-error",
          error: e
        });
      }
      return null;
    }
    async getFeishuSpaceSDK() {
      if (this.feishuSDK) {
        return this.feishuSDK;
      }
      this.spaceSdkFetchingPromise ||= this._getFeishuSpaceSDk();
      try {
        await this.spaceSdkFetchingPromise;
        this.spaceSdkFetchingPromise = null;
        if (this.feishuSDK) {
          return this.feishuSDK;
        }
        return null;
      } catch {
        return null;
      }
    }
    async _getFeishuSpaceFirstScreenSDk() {
      try {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-first-screen-sdk-load-start",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
        await this.initSDK();
        let e = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-list-first");
        this.feishuSDKFirstScreen = k(e);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-first-screen-sdk-load-end",
          meta: {
            time: Date.now() - performance.timing.navigationStart
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-first-screen-sdk-load-error",
          error: e
        });
      }
      return null;
    }
    async getFeishuSpaceFirstScreenSDk() {
      if (this.feishuSDKFirstScreen) {
        return this.feishuSDKFirstScreen;
      }
      this.spaceSdkFristScreenFetchingPromise ||= this._getFeishuSpaceFirstScreenSDk();
      try {
        await this.spaceSdkFristScreenFetchingPromise;
        this.spaceSdkFristScreenFetchingPromise = null;
        if (this.feishuSDKFirstScreen) {
          return this.feishuSDKFirstScreen;
        }
        return null;
      } catch {
        return null;
      }
    }
    async _getFeishuSpaceUploadSDk() {
      try {
        await this.initSDK();
        let e = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-upload");
        this.spaceUploadSDK = S(e);
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-sdk-load-error",
          error: e
        });
      }
      return null;
    }
    async getFeishuSpaceUploadSDk() {
      if (this.spaceUploadSDK) {
        return this.spaceUploadSDK;
      }
      this.spaceUploadSdkFetchingPromise ||= this._getFeishuSpaceUploadSDk();
      try {
        await this.spaceUploadSdkFetchingPromise;
        this.spaceUploadSdkFetchingPromise = null;
        if (this.spaceUploadSDK) {
          return this.spaceUploadSDK;
        }
        return null;
      } catch {
        return null;
      }
    }
    async _getFeishuSpaceSearchSDK() {
      try {
        await this.initSDK();
        let e = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-search");
        this.spaceSearchSDK = _(e);
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-sdk-load-error",
          error: e
        });
      }
      return null;
    }
    async getFeishuSpaceSearchSDK() {
      if (this.spaceSearchSDK) {
        return this.spaceSearchSDK;
      }
      this.spaceSearchSdkFetchingPromise ||= this._getFeishuSpaceSearchSDK();
      try {
        await this.spaceSearchSdkFetchingPromise;
        this.spaceSearchSdkFetchingPromise = null;
        if (this.spaceSearchSDK) {
          return this.spaceSearchSDK;
        }
        return null;
      } catch {
        return null;
      }
    }
    async _getFeishuPreviewSDK() {
      try {
        await this.initSDK();
        let e = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-preview");
        this.spacePreviewSDK = e;
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "aispace-preview-sdk-load-error",
          error: e
        });
      }
      return null;
    }
    async getFeishuPreviewSDK() {
      if (this.spacePreviewSDK) {
        return this.spacePreviewSDK;
      }
      this.spacePreviewSdkFetchingPromise ||= this._getFeishuPreviewSDK();
      try {
        await this.spacePreviewSdkFetchingPromise;
        this.spacePreviewSdkFetchingPromise = null;
        if (this.spacePreviewSDK) {
          return this.spacePreviewSDK;
        }
        return null;
      } catch {
        return null;
      }
    }
    async destroyFeishuSDKEnv() {
      var e;
      this.destroying = true;
      let {
        destroyModule: t
      } = await federationRuntimeManager.federationRuntime.getInstance().loadRemote("@ccm-vmok/space-runtime/space-init-module");
      this.sdkInitPromise = null;
      this.sdkInited = false;
      this.spaceSearchSDK = null;
      this.spaceUploadSDK = null;
      this.spacePreviewSDK = null;
      this.feishuSDKFirstScreen = null;
      this.feishuSDK = null;
      this.spaceSdkFristScreenFetchingPromise = null;
      this.spaceSdkFetchingPromise = null;
      this.spaceUploadSdkFetchingPromise = null;
      this.spaceSearchSdkFetchingPromise = null;
      this.spacePreviewSdkFetchingPromise = null;
      this.sdkOnLoginInfoChange = null;
      if ((e = this.unSubscribeLoginInfoChange) !== null && e !== undefined) {
        e.call(this);
      }
      this.unSubscribeLoginInfoChange = undefined;
      if (this.sdkInitPromise) {
        await this.sdkInitPromise;
      }
      if (t != null) {
        t();
      }
      federationRuntimeManager.federationRuntime.getInstance().remoteHandler.removeRemote({
        name: "@ccm-vmok/space-runtime"
      });
      this.destroying = false;
    }
    constructor() {
      y(this, "feishuSDK", null);
      y(this, "feishuSDKFirstScreen", null);
      y(this, "spaceUploadSDK", null);
      y(this, "spaceSearchSDK", null);
      y(this, "spacePreviewSDK", null);
      y(this, "loadConfigPromise", null);
      y(this, "sdkInitPromise", null);
      y(this, "sdkInited", false);
      y(this, "spaceSdkFetchingPromise", null);
      y(this, "spaceSdkFristScreenFetchingPromise", null);
      y(this, "spaceUploadSdkFetchingPromise", null);
      y(this, "spaceSearchSdkFetchingPromise", null);
      y(this, "spacePreviewSdkFetchingPromise", null);
      y(this, "config", null);
      y(this, "destroying", false);
      y(this, "sdkOnLoginInfoChange", null);
      y(this, "unSubscribeLoginInfoChange", undefined);
      y(this, "onAuthHeeaderChange", e => {
        var t;
        if ((t = this.sdkOnLoginInfoChange) !== null && t !== undefined) {
          t.call(this, e);
        }
      });
      y(this, "getAuthHeaders", async () => {
        var e;
        let t = {};
        if (!((t = await ((e = feishuAccessTokenService.getFeishuAccessTokenService()) === null || e === undefined ? undefined : e.getAuthHeadersAsync())) == null ? undefined : t.Authorization) || !(t == null ? undefined : t.DPoP)) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "ai-space-auth-header-empty",
            error: Error()
          });
        }
        return {
          Authorization: `${t == null ? undefined : t.Authorization}`,
          DPoP: t == null ? undefined : t.DPoP
        };
      });
      y(this, "_loadConfig", async () => {
        if (this.config) {
          return this.config;
        }
        let t = chatUserInfoActions.getUserInfo()?.user_id;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "aispace-feishusdk-loadconfig-start"
        });
        let i = t ? {
          indexedDB: window.indexedDB,
          userId: t
        } : undefined;
        try {
          let e = await feishuTempConfigLoader.getFeishuTempConfig({
            getAuthHeaders: this.getAuthHeaders,
            indexedDB: i,
            logger: loggerServiceCore.defaultLogger
          });
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "aispace-feishusdk-loadconfig-finish"
          });
          this.config = e;
          return e;
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "aispace-feishusdk-loadconfig-error",
            error: e
          });
        }
      });
      y(this, "loadConfig", async () => {
        this.loadConfigPromise ||= this._loadConfig();
        try {
          await this.loadConfigPromise;
        } catch (e) {}
        this.loadConfigPromise = null;
        return this.config;
      });
    }
  }
  y(T, "intance", null);
  require.d(exports, {
    FeishuSpaceManager: function () {
      return T;
    }
  });
}