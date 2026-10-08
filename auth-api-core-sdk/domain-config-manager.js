// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KI' to 'getDomainConfig'
// - Renamed export 'bm' to 'domainKeyMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 318593
         */
module.exports = function (module, exports, require) {
  let n;
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var webLoggerManager = require("web-logger-manager") /*id: 400425*/;
  var webCoreSettingsManager = require("web-core-settings-manager") /*id: 743945*/;
  var serviceBlockConstants = require("service-block-constants") /*id: 141454*/;
  var objectUndefinedUtils = require("object-undefined-utils") /*id: 250122*/;
  var noopArgumentHelper = require("noop-argument-helper") /*id: 391235*/;
  let f = webLoggerManager.loggerManager.getLogger("domain");
  let d = {};
  let h = new eventEmitterPolyfill.EventEmitter();
  let p = {
    lark_domains_v3: e => {
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
    },
    biz_domain_config: e => {
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
    }
  };
  function g(e) {
    let t = {};
    Object.entries(p).forEach(r => {
      let [n, i] = r;
      let o = e[n];
      if (o) {
        objectUndefinedUtils.assignDefined(t, i(o));
      }
    });
    objectUndefinedUtils.assignDefined(d, t);
    h.emit("CHANGE", d);
  }
  function v(e) {
    noopArgumentHelper.noopHelper("domain", "settings", "2.0.0");
    if (n) {
      return n;
    }
    let t = serviceBlockLocaleUtils.getConfig("domains");
    if (t) {
      objectUndefinedUtils.assignDefined(d, t);
    }
    if (e) {
      objectUndefinedUtils.assignDefined(d, e);
    }
    let r = "";
    Object.entries(d).forEach(e => {
      let [t, n] = e;
      r += `${t}: [${n && n.map ? n.map(e => e.length).join(",") : n}]`;
    });
    f.info("domains startup update data:", r);
    n = webCoreSettingsManager.getSettingsAsync().then(g);
    webCoreSettingsManager.onSettingsChange(g);
    return n;
  }
  function m(e) {
    return function (e) {
      if (!n) {
        v();
      }
      let t = y(e);
      if (t.length) {
        return Promise.resolve(t);
      } else {
        return n.then(() => y(e));
      }
    }(e).then(e => e[0]);
  }
  function y(e) {
    if (!n) {
      v();
    }
    let t = serviceBlockLocaleUtils.getConfig("domains");
    if (t && t[e]) {
      return t[e];
    }
    let r = d[e];
    if (!r) {
      f.warn(`domain::getDomains: domain not found: ${e}`);
    }
    return r || [];
  }
  require.d(exports, {
    getDomainConfig: function () {
      return m;
    },
    domainKeyMap: function () {
      return serviceBlockConstants.s0l;
    }
  });
}