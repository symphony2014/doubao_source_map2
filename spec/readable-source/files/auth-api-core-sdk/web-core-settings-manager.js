// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z2' to 'onSettingsChange'
// - Renamed export 'Gw' to 'getSettingsAsync'
// - Renamed export 'rA' to 'getSettingsInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 743945
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var tracedFetchWrapper = require("traced-fetch-wrapper") /*id: 87525*/;
  var idbStoreManagerFactory = require("idb-store-manager-factory") /*id: 297530*/;
  var webCoreLoggerManager = require("web-core-logger-manager") /*id: 101534*/;
  var serviceBlockConstants = require("service-block-constants") /*id: 141454*/;
  var objectUndefinedUtils = require("object-undefined-utils") /*id: 250122*/;
  function h(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let p = {
    bizDomainConfig: e => {
      let t = {};
      Object.entries(e).forEach(e => {
        let [r, n] = e;
        let i = r.toUpperCase();
        let o = serviceBlockConstants.s0l[i];
        if (o) {
          t[o] = n;
        }
        t[r] = n;
      });
      return t;
    },
    larkDomainsV3: e => {
      let t = {};
      Object.entries(e).forEach(e => {
        let [r, n] = e;
        let i = r.toUpperCase();
        let o = serviceBlockConstants.s0l[i];
        if (o) {
          t[o] = Object.keys(n.domains);
        }
      });
      return t;
    }
  };
  class g {
    getDomain(e) {
      let t = this.getDomains(e);
      return t && t[0] || "";
    }
    getDomains(e) {
      let t = this.domains[e];
      return t || [];
    }
    getDomainAsync(e) {
      return this.getDomainsAsync(e).then(() => this.getDomain(e));
    }
    getDomainsAsync(e) {
      return this.getDomainsFromSettingsAsync().then(() => this.getDomains(e));
    }
    getDomainsFromSettingsAsync() {
      return this.settings.getSettingsAsync().then(e => {
        if (e && e.lark_domains_v3) {
          let t = p.larkDomainsV3(e.lark_domains_v3);
          objectUndefinedUtils.assignDefined(this.domains, t);
        }
        if (e && e.biz_domain_config) {
          let t = p.bizDomainConfig(e.biz_domain_config);
          objectUndefinedUtils.assignDefined(this.domains, t);
        }
      });
    }
    constructor(e) {
      h(this, "settings", undefined);
      h(this, "domains", {});
      this.settings = e;
    }
  }
  function v(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class m {
    isFeatureEnabled(e) {
      return this.features[e];
    }
    isFeatureEnabledAsync(e) {
      return this.getFeaturesFromSettingsAsync().then(() => this.isFeatureEnabled(e));
    }
    getFeaturesFromSettingsAsync() {
      return this.settings.getSettingsAsync().then(e => {
        if (e && e.lark_features) {
          let {
            features: t,
            values: r
          } = function (e) {
            if (!e) {
              return {
                features: {},
                values: {}
              };
            }
            let t = {};
            if (Array.isArray(e.online)) {
              t = e.online.reduce((e, t) => {
                e[t] = true;
                return e;
              }, {});
            }
            return {
              features: t,
              values: e.values
            };
          }(e.lark_features);
          objectUndefinedUtils.assignDefined(this.features, t);
          objectUndefinedUtils.assignDefined(this.values, r);
        }
      });
    }
    constructor(e) {
      v(this, "settings", undefined);
      v(this, "features", {});
      v(this, "values", {});
      this.settings = e;
    }
  }
  function y(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let b = "SETTINGS_UPDATE";
  async function _(e, t, r = 3, n = 1000) {
    try {
      return await function (e, t, r) {
        let {
          appId: n,
          baseUrl: i,
          locale: a,
          appVersion: s,
          channel: u,
          meta: f,
          userBrand: h,
          userUnit: p
        } = e;
        let g = objectUndefinedUtils.filterUndefined({
          version: s,
          app_id: n,
          app: "lark",
          platform: "web",
          action: "startup",
          locale: a || serviceBlockLocaleUtils.localeCodes.ZhCn,
          app_channel: u,
          user_brand: h,
          user_unit: p
        });
        if (f) {
          ["user_etag", "data_etag", "version_code"].forEach(e => {
            if (Object.prototype.hasOwnProperty.call(f, e)) {
              g[e] = f[e];
            }
          });
        }
        let v = `${i}/settings/v3/`;
        let m = t.startSpan("wcore-settings.request", {
          data: {
            url: v,
            params: g,
            remainTimes: r
          }
        });
        return tracedFetchWrapper.sendTracedRequest({
          url: v,
          method: "GET",
          data: g,
          headers: {
            "X-LS-Caller-Type": "web-core"
          }
        }).then(e => e.json()).then(e => {
          if (e == null ? undefined : e.data) {
            if (!(e == null ? undefined : e.meta?.complete) && r > 0) {
              throw Error("settings data is not complete");
            }
            m.endSpan();
            return e;
          }
          throw Error("no data returned from server");
        }).catch(e => {
          m.endSpan({
            status: webCoreLoggerManager.CanonicalCode.INTERNAL,
            message: e.message,
            stack: e.stack
          });
          throw e;
        });
      }(e, t, r);
    } catch (i) {
      if (r <= 0) {
        t.error(i);
        t.error("fetch settings with retry failed!");
        throw i;
      }
      await new Promise(e => {
        setTimeout(() => e(), n);
      });
      return _(e, t, r - 1, n * 2);
    }
  }
  function E() {
    return Error("请先调用 init 方法初始化");
  }
  var w = class {
    async _init(e, t) {
      if (this.isInitialized()) {
        return;
      }
      this.inited = true;
      this.options = e;
      this.domains = new g(this);
      this.featureGatings = new m(this);
      this.storage = idbStoreManagerFactory.getIdbStoreManager(`lark_web_core_${e.appId || "default"}`, "settingsV3");
      let r = (t || webCoreLoggerManager.coreLoggerInstance).startSpan("wcore-settings.init");
      if (e.userId && e.tenantId) {
        this.cacheId = e.userId + e.tenantId;
        this.getCachePromise = this.getSettingsFromCache(r).finally(() => {
          this.getCachePromise = undefined;
        });
        let t = await this.getCachePromise;
        if (t) {
          this.updateData(t);
          this.domains.getDomainsFromSettingsAsync();
          this.featureGatings.getFeaturesFromSettingsAsync();
          this.setUpdateTimer(r);
          return;
        }
      }
      await this._tryFetchData(r).finally(() => {
        this.setUpdateTimer(r);
      });
      this.domains.getDomainsFromSettingsAsync();
      this.featureGatings.getFeaturesFromSettingsAsync();
    }
    async init(e, t) {
      this._initPromise ||= this._init(e, t);
      return this._initPromise;
    }
    getSettingsAsync(e) {
      if (this.data) {
        return Promise.resolve(this.data);
      }
      if (this.fetchPromise) {
        return this.fetchPromise.then(e => e.data);
      }
      if (this.getCachePromise) {
        return this.getCachePromise.then(e => e ? e.data : {});
      }
      if (this.options) {
        let t = (e || webCoreLoggerManager.coreLoggerInstance).startSpan("wcore-settings.getSettingsAsync");
        return _(this.options, t);
      }
      throw E();
    }
    getSettings() {
      if (!this.data) {
        throw Error("settings 尚未完成初始化，请使用 getSettings 或者提前调用 init 方法初始化");
      }
      return this.data;
    }
    onChange(e) {
      this.emitter.addListener(b, e);
      return () => {
        this.emitter.removeListener(b, e);
      };
    }
    isInitialized() {
      return this.inited && (!!this.data || !!this.fetchPromise || !!this.getCachePromise);
    }
    async _tryFetchData(e) {
      if (!this.fetchPromise) {
        if (!this.options) {
          throw E();
        }
        this.fetchPromise = this.fetchData(this.options, e);
        this.fetchPromise.finally(() => {
          this.fetchPromise = undefined;
        });
      }
      await this.fetchPromise;
    }
    async fetchData(e, t) {
      e.meta = e.meta || this.meta;
      let r = await _(e, t);
      this.updateData(r, e && e.meta && Object.prototype.hasOwnProperty.call(e.meta, "user_etag"));
      return {
        data: this.data,
        meta: this.meta
      };
    }
    getSettingsFromCache(e) {
      if (this.cacheId) {
        return this.storage.getItem(this.cacheId).then(t => {
          if (!t) {
            e.warn("no cached data");
            return;
          }
          return t;
        }).catch(t => {
          e.error(t);
          e.error("get cached settings faile!");
        });
      } else {
        return Promise.resolve(undefined);
      }
    }
    setUpdateTimer(e) {
      if (this.updateTimer) {
        clearTimeout(this.updateTimer);
        this.updateTimer = null;
      }
      let t = this.meta && this.meta.ttl;
      let r = t ? t * 1000 : 60000;
      this.updateTimer = (window || self).setTimeout(async () => {
        this.updateTimer = null;
        this._tryFetchData(e);
      }, r);
      e.debug(`setting v3: next fetch scheduled, timeout: ${r}`);
    }
    updateData(e, t = false) {
      if (e) {
        if (e.data) {
          this.data = t ? throttledDeepCloneUtil.throttledDeepClone(this.data || {}, e.data) : e.data;
          this.domains.getDomainsFromSettingsAsync();
          this.featureGatings.getFeaturesFromSettingsAsync();
          this.emitter.emit(b, this.data);
        }
        if (e.meta) {
          this.meta = e.meta;
        }
        if (this.cacheId) {
          this.storage.setItem(this.cacheId, {
            meta: this.meta,
            data: this.data
          });
        }
      }
    }
    constructor() {
      y(this, "options", undefined);
      y(this, "meta", undefined);
      y(this, "data", undefined);
      y(this, "updateTimer", undefined);
      y(this, "fetchPromise", undefined);
      y(this, "getCachePromise", undefined);
      y(this, "emitter", new eventEmitterPolyfill.EventEmitter());
      y(this, "storage", undefined);
      y(this, "inited", false);
      y(this, "cacheId", "");
      y(this, "domains", undefined);
      y(this, "featureGatings", undefined);
      y(this, "_initPromise", undefined);
    }
  };
  async function S() {
    if (!n) {
      i ||= O().catch(e => {
        i = undefined;
        throw e;
      });
      return i;
    }
  }
  async function O() {
    let {
      domains: e,
      ...t
    } = serviceBlockLocaleUtils.getConfigs(["locale", "appId", "domains", "appVersion", "channel", "userBrand", "userUnit"]);
    let r = (e || {})[1];
    let i = r ? r[0] : "";
    if (!i) {
      throw "APINotProvided";
    }
    let a = new w();
    await a.init({
      ...t,
      baseUrl: `https://${i}`
    });
    n = a;
  }
  async function A() {
    await S();
    return n && n.getSettingsAsync();
  }
  async function D() {
    await S();
    return n;
  }
  function I(e) {
    if (!n) {
      let t;
      S().then(() => {
        t = n && n.onChange(e);
      });
      return () => t && t();
    }
    if (n) {
      return n.onChange(e);
    } else {
      return () => undefined;
    }
  }
  require.d(exports, {
    onSettingsChange: function () {
      return I;
    },
    getSettingsAsync: function () {
      return A;
    },
    getSettingsInstance: function () {
      return D;
    }
  });
}