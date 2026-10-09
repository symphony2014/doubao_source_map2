// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xb' to 'appEnvironments'
// - Renamed export 'ac' to 'initPromise'
// - Renamed export 'lY' to 'appConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 196878
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var localeConstants_1 = require("locale-constants_1") /*id: 182096*/;
  var asyncPromiseUtils = require("async-promise-utils") /*id: 860902*/;
  (n = i ||= {}).Dev = "development";
  n.Alpha = "alpha";
  n.Staging = "staging";
  n.Boe = "boe";
  n.Prerelease = "prerelease";
  n.Production = "production";
  let s = {
    appName: "unknown",
    appVersion: "0.0.0",
    appRegion: "cn",
    env: i.Production,
    locale: localeConstants_1.localeConstants.enUS,
    channel: "saas",
    urls: {
      larkAPIDomain: ""
    }
  };
  let c = {
    set(e) {
      s = Object.assign(s || {}, e, {
        urls: Object.assign({}, s == null ? undefined : s.urls, e.urls),
        tracingAttributes: Object.assign({}, s == null ? undefined : s.tracingAttributes, e.tracingAttributes)
      });
    },
    get() {
      if (!s) {
        throw Error("please set config first!");
      }
      return s;
    },
    getByKey(e) {
      if (!s) {
        throw Error("please set config first!");
      }
      return s[e];
    },
    isChinaMainlandGeo() {
      return s.user?.geo === "CN";
    },
    isFeishuBrand() {
      return s.user?.tenantBrand === "feishu";
    },
    isHostApp(e) {
      return !!s && (s.appName.toLowerCase() === e || !!s.tracingAttributes?.hostApp && s.tracingAttributes.hostApp.toLowerCase() === e);
    },
    getLarkVersion: () => "7.60.0-fix-emoji-alpha.0",
    init: e => Promise.resolve(),
    _inited: false
  };
  let u = new asyncPromiseUtils.DeferredPromise();
  require.d(exports, {
    appEnvironments: function () {
      return i;
    },
    initPromise: function () {
      return u;
    },
    appConfig: function () {
      return c;
    }
  });
}