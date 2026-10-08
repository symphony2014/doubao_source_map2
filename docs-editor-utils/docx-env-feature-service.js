// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A5' to 'getApiBaseUrl'
// - Renamed export 'Sf' to 'getAppVersion'
// - Renamed export 'ZP' to 'ownerFeatureService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 23798
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxClientVarsService = require("docx-client-vars-service") /*id: 595324*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function f(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  function h() {
    let {
      isDocsSDK: e
    } = browserEnvironmentDetectionUtils.browserDetector;
    if (e) {
      return function () {
        let e = window.navigator.userAgent;
        return objectPathGetDefault.getObjectPathDefault(e.match(/DocsSDK\/([0-9.]+)/i), "[1]");
      }();
    }
    let n = navigator.userAgent || "";
    return objectPathGetDefault.getObjectPathDefault(n.match(/Docs[^SDK/]*\/([0-9.]+)/), "[1]");
  }
  function _() {
    let e = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.domain.lark_api", {});
    if (runtimeEnvFlags.isLocalDev) {
      return "/";
    } else {
      return `https://${e}`;
    }
  }
  function p() {
    let e = "";
    let n = reduxStoreInitializer.reduxStore.getState();
    if (n) {
      let u;
      let a;
      let s = docTokenHelperUtils.getRawDocToken();
      let d = platformDocUtils.gGk();
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        var r;
        var i;
        u = `${d}:${s}`;
        a = (r = (i = n.entities.objs).get) === null || r === undefined ? undefined : r.call(i, u);
      } else {
        u = s;
        a = n.entities.objs[u];
      }
      e = a == null ? undefined : a.owner_id;
    }
    return e;
  }
  exports.ownerFeatureService = new class {
    constructor() {
      var e = this;
      f(this, "cancelStoreSubscription", null);
      f(this, "fetchPromise", null);
      f(this, "forceUseCacheTimeout", undefined);
      f(this, "forceUseCache", false);
      f(this, "cacheFeaturesMap", new Map());
      f(this, "startWatchOwnerFg", () => {
        if (p()) {
          this.getOwnerFg();
        } else {
          this.cancelStoreSubscription = reduxStoreInitializer.reduxStore.subscribe(() => {
            if (p()) {
              var e;
              this.getOwnerFg(undefined, false);
              if ((e = this.cancelStoreSubscription) !== null && e !== undefined) {
                e.call(this);
              }
            }
          });
        }
      });
      f(this, "stopWatchOwnerFg", () => {
        var e;
        if ((e = this.cancelStoreSubscription) !== null && e !== undefined) {
          e.call(this);
        }
        this.forceUseCache = false;
        if (this.forceUseCacheTimeout) {
          window.clearTimeout(this.forceUseCacheTimeout);
        }
      });
      f(this, "fetchOwnerFg", async (e, n, r, o, i) => {
        this.fetchPromise = this.fetchPromise ?? docxClientVarsService.docxApiService.fetchOwnerFg(n, r, o, i);
        let c = await this.fetchPromise;
        this.fetchPromise = null;
        this.forceUseCache = true;
        if (this.forceUseCacheTimeout) {
          window.clearTimeout(this.forceUseCacheTimeout);
        }
        this.forceUseCacheTimeout = window.setTimeout(() => {
          this.forceUseCache = false;
        }, 1000);
        if (c) {
          this.cacheFeaturesMap.set(e, c);
        }
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.OWNER_FG_UPDATED);
        return c;
      });
      f(this, "innerGetOwnerFg", async function (n) {
        let r;
        let o = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        try {
          let n = function () {
            let e = p();
            if (!e) {
              return null;
            }
            let n = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.channel");
            let r = "0.0.3";
            let o = "web";
            if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              r = h();
              o = browserEnvironmentDetectionUtils.browserDetector.isH5 ? "web" : browserEnvironmentDetectionUtils.browserDetector.isAndroid ? "android" : browserEnvironmentDetectionUtils.browserDetector.isIPad ? "ipad" : browserEnvironmentDetectionUtils.browserDetector.isIOS ? "iphone" : "web";
            }
            return {
              userId: e,
              platform: o,
              version: r,
              channel: n
            };
          }();
          if (!n) {
            return false;
          }
          let {
            userId: c,
            platform: u,
            version: a,
            channel: s
          } = n;
          let d = `${c}-${u}-${a}-${s}`;
          r = (e.forceUseCache || o) && e.cacheFeaturesMap.has(d) ? e.cacheFeaturesMap.get(d) : await e.fetchOwnerFg(d, c, u, a, s);
        } catch (e) {}
        return !!r && !!r[n];
      });
      f(this, "getOwnerFg", function (n = "") {
        let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        return new Promise(async o => {
          if (!p()) {
            docxEditorEventConstantsAndManager.globalEventEmitter.once(docxEditorEventConstantsAndManager.eventConstants.COMMON.OWNER_FG_UPDATED, async () => {
              o(await e.innerGetOwnerFg(n));
            });
            return;
          }
          o(await e.innerGetOwnerFg(n, r));
        });
      });
    }
  }();
  require.d(exports, {
    getApiBaseUrl: function () {
      return _;
    },
    getAppVersion: function () {
      return h;
    }
  });
}