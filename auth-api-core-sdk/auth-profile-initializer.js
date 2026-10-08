// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TK' to 'initAndGetProfile'
// - Renamed export 'yr' to 'setupUserProfile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 767286
         */
module.exports = function (module, exports, require) {
  var getUserProfileInfo = require("get-user-profile-info") /*id: 229279*/;
  require("account-logout-service") /*id: 393845*/;
  var globalConfigHttpClientInit = require("global-config-http-client-init") /*id: 36595*/;
  require("auth-event-emitter") /*id: 60885*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var domainConfigManager = require("domain-config-manager") /*id: 318593*/;
  async function s(e) {
    let t = e;
    if (!t) {
      let {
        locale: e,
        isOversea: r,
        passport: n
      } = serviceBlockLocaleUtils.getConfigs(["locale", "isOversea", "passport", "getExtraHeaders"]);
      t = Object.fromEntries(Object.entries(t = Object.assign({
        locale: e ? e.replace("_", "-") : undefined,
        isOversea: r,
        appId: 12
      }, n)).filter(e => {
        let [t, r] = e;
        return r !== undefined;
      }));
    }
    let r = serviceBlockLocaleUtils.getConfig("getExtraHeaders");
    if (typeof r == "function") {
      t.getExtraHeaders = r;
    }
    let n = "";
    if (!t.origin) {
      let e = await domainConfigManager.getDomainConfig(domainConfigManager.domainKeyMap.API);
      t.origin = `//${e}`;
      n = e;
    }
    if (!t.apiDomain) {
      try {
        if (n) {
          t.apiDomain = n;
        } else {
          let e = new URL(t.origin);
          t.apiDomain = e.hostname;
        }
      } catch (e) {}
    }
    globalConfigHttpClientInit.default(t);
  }
  function c() {
    return getUserProfileInfo.default().then(e => {
      let {
        user: t
      } = e;
      return {
        userId: t.id,
        tenantId: t.tenant.id,
        ...t
      };
    });
  }
  async function u() {
    await s();
    return c();
  }
  async function l(e) {
    let {
      baseUrl: t,
      requestId: r,
      appId: n = 12,
      ...i
    } = e;
    let o = n;
    if ([161471, 161472].includes(n)) {
      o = 12;
    }
    await s({
      ...i,
      appId: o,
      origin: t
    });
    return c();
  }
  require.d(exports, {
    initAndGetProfile: function () {
      return l;
    },
    setupUserProfile: function () {
      return u;
    }
  });
}