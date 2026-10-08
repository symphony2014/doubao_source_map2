// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docTokenManager'
// - Resolved require(632370) to 'doc-token-manager'
// - Renamed variable 's' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'c' to 'docComponentStubConfig'
// - Resolved require(436674) to 'doc-component-stub-config'
// - Renamed variable 'a' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'u' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable '_' to 'apiClientInstance'
// - Resolved require(22981) to 'api-client-instance'
// - Renamed variable 'g' to 'spaceApiConfig'
// - Resolved require(11507) to 'space-api-config'
// - Renamed variable 'f' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'l' to 'docSyncConfigFlags'
// - Resolved require(934075) to 'doc-sync-config-flags'
// - Renamed variable 'd' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 'C' to 'bizSuiteMessageBoxManager'
// - Resolved require(443877) to 'biz-suite-message-box-manager'
// - Renamed variable 'v' to 'docxUtilityHelpers'
// - Resolved require(859002) to 'docx-utility-helpers'
// - Updated imported property 'ZP' to 'MessageBoxManager' (module 443877)
// - Updated imported property 'g4' to 'captureException' (module 859002)
// - Updated imported property 'ZP' to 'apiClient' (module 22981)
// - Updated imported property 'cA' to 'getSpaceApiFn' (module 11507)
// - Updated imported property 'wf' to 'syncConfig' (module 934075)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property '_c' to 'emptyObject_2' (module 436674)
// - Updated imported property 'U3' to 'emptyObject_1' (module 436674)
// - Updated imported property 'L' to 'getDocToken' (module 632370)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'BX' to 'globalEventEmitter' (module 267720)
// - Updated imported property 'U3' to 'eventConstants' (module 267720)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-downgrade.5a381e22.js
         * chunkId: 56364
         * moduleId: 238663
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docSyncConfigFlags = require("doc-sync-config-flags") /*id: 934075*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  (r = {})[r.PUSH_CPU_MANAGER_MAGICSHARE_SCENE_DOWNGRADE_STRATEGY = 800108] = "PUSH_CPU_MANAGER_MAGICSHARE_SCENE_DOWNGRADE_STRATEGY";
  let h = r;
  (i = {}).PushCpuManagerMagicShareSceneDowngradeStrategy = "PushCpuManagerMagicShareSceneDowngradeStrategy";
  let m = i;
  var bizSuiteMessageBoxManager = require("biz-suite-message-box-manager") /*id: 443877*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  async function y(e, t, n) {
    let r = {
      token: `NOTICE_${e}_${t}`,
      resourceType: `NOTICE_${e}`,
      routeKey: e,
      routeType: "token",
      subtype: "DEGRADE_CONFIG"
    };
    await bizSuiteMessageBoxManager.MessageBoxManager.register(r, n);
    await bizSuiteMessageBoxManager.MessageBoxManager.onError(r, e => {
      docxUtilityHelpers.captureException(e);
    });
    return () => E(e, t, n);
  }
  async function E(e, t, n) {
    let r = {
      token: `NOTICE_${e}_${t}`,
      resourceType: `NOTICE_${e}`,
      routeKey: e,
      routeType: "token",
      subtype: "DEGRADE_CONFIG"
    };
    await bizSuiteMessageBoxManager.MessageBoxManager.deregister(r, n);
  }
  function p(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let w = "PUSH_CPU_MANAGER_MAGICSHARE_SCENE_DOWNGRADE_STRATEGY";
  let D = async e => {
    try {
      let t = await apiClientInstance.apiClient.get("/rce/get_degrade_conf/", {
        params: {
          token: e
        },
        baseURL: spaceApiConfig.getSpaceApiFn()
      });
      if (t.code !== 0) {
        throw Error(t.msg);
      }
      return t.data;
    } catch (e) {}
    return null;
  };
  function b(e) {
    return !!e && typeof e == "object" && Object.keys(e).length > 0;
  }
  class N {
    get norminalSyncConfig() {
      return docSyncConfigFlags.syncConfig;
    }
    destroy() {
      var e;
      if ((e = this.deregisterMsgBox) !== null && e !== undefined) {
        e.call(this);
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        docComponentStubConfig.emptyObject_2.off(docComponentStubConfig.emptyObject_1.MOBILE.COMMON.NEW_DEGRADE_CONFIG, this.handleNewConfigFromRust);
      }
    }
    constructor() {
      p(this, "deregisterMsgBox", undefined);
      p(this, "token", undefined);
      p(this, "isDeviceDegrate", false);
      p(this, "deviceConfig", undefined);
      p(this, "isPageDegrate", false);
      p(this, "pageConfig", undefined);
      p(this, "currentConfig", undefined);
      p(this, "registerMsgBox", async () => {
        let e = docTokenManager.getDocToken();
        let t = platformDocUtils.gGk();
        this.deregisterMsgBox = await y(String(t), e, this.handleNewConfigFromBackend);
      });
      p(this, "initPushEvent", () => {
        let {
          ShellAPI: e
        } = window;
        if (!e) {
          return;
        }
        let t = false;
        try {
          e.app.ipc.on("SDK_PUSH", e => {
            if (t) {
              return;
            }
            let {
              detail: n
            } = e;
            if (n && n.content && n.command === h[w]) {
              this.handleNewConfigFromRust(n.content.msStrategy);
            }
          });
          let n = [{
            command: ~~h[w],
            pb: `tool.v1.${m.PushCpuManagerMagicShareSceneDowngradeStrategy}`
          }];
          return e.app.sdk.init({
            commands: n
          });
        } catch (e) {
          t = true;
          docxEventCollector.wrappedCollector("ms_sync_degrate_dev", {
            info: "init failed"
          });
        }
      });
      p(this, "getConfigByToken", async () => {
        let e = await D(this.token);
        this.handleNewConfigFromBackend(e);
      });
      p(this, "handleNewConfigFromBackend", e => {
        let {
          config: t
        } = e;
        let n = b(t);
        this.isPageDegrate = n;
        this.pageConfig = n ? t : docSyncConfigFlags.syncConfig;
        this.handleNewDowngradingConfig();
      });
      p(this, "handleNewConfigFromRust", e => {
        let t = b(e);
        this.isDeviceDegrate = t;
        this.deviceConfig = t ? e : docSyncConfigFlags.syncConfig;
        this.handleNewDowngradingConfig();
      });
      p(this, "handleNewDowngradingConfig", () => {
        try {
          if (!this.isDeviceDegrate && !this.isPageDegrate) {
            if (!deepEqualUtil_1.deepEqual(this.currentConfig, docSyncConfigFlags.syncConfig)) {
              docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOWN_GRADING, docSyncConfigFlags.syncConfig);
            }
            return;
          }
          let e = this.getMaxConfig();
          this.currentConfig = e;
          docxEventCollector.wrappedCollector("ms_sync_degrate_dev", {
            ...e
          });
          docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOWN_GRADING, e);
        } catch (e) {}
      });
      p(this, "getMaxConfig", () => {
        for (let e in this.deviceConfig) {
          if (this.deviceConfig[e] > this.pageConfig[e]) {
            return this.deviceConfig;
          }
        }
        return this.pageConfig;
      });
      this.currentConfig = docSyncConfigFlags.syncConfig;
      this.deviceConfig = docSyncConfigFlags.syncConfig;
      this.pageConfig = docSyncConfigFlags.syncConfig;
      this.token = docTokenManager.getDocToken();
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        docComponentStubConfig.emptyObject_2.on(docComponentStubConfig.emptyObject_1.MOBILE.COMMON.NEW_DEGRADE_CONFIG, this.handleNewConfigFromRust);
      } else {
        this.initPushEvent();
      }
      this.getConfigByToken();
      this.registerMsgBox();
    }
  }
  require.r(exports);
  require.d(exports, {
    SyncDowngrading: function () {
      return N;
    }
  });
}