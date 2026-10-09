// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pt' to 'getDriveMetaBatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 598363
         */
module.exports = function (module, exports, require) {
  var driveUrlParserAxios = require("drive-url-parser-axios") /*id: 508792*/;
  let o = "/api/meta/batch";
  var driveNodeTypeConstants_1 = require("drive-node-type-constants_1") /*id: 702441*/;
  var httpRequestInterceptorUtils = require("http-request-interceptor-utils") /*id: 675018*/;
  var componentBizTeaCollector = require("component-biz-tea-collector") /*id: 568420*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var mixedHashUtil = require("mixed-hash-util") /*id: 703059*/;
  var i18nLanguageDetector = require("i18n-language-detector") /*id: 1451*/;
  async function d(e) {
    let g = {};
    let b = new Set();
    let p = new Set();
    let h = new Map();
    for (let {
      typeNum: t,
      token: r,
      blockTypeNum: n,
      blockToken: o
    } of e) {
      b.add(r);
      if (g[t]) {
        g[t].push(r);
      } else {
        g[t] = [r];
      }
      if (o && n) {
        b.add(o);
        h.set(o, r);
        g[n] ||= [];
        g[n].push(o);
      } else {
        p.add(r);
      }
    }
    let m = e => {
      componentBizTeaCollector.collectComponentBizEvent(driveNodeTypeConstants_1.apiServiceNames.REQUEST_BATCH, {
        duration: e.duration,
        result: e.result,
        log_id: e.logId
      });
    };
    let w = Date.now();
    try {
      let e = await function (e, t = {}) {
        return driveUrlParserAxios.getAxiosInstance().post(o, e, Object.assign({
          ignoreResponseInterceptors: true
        }, t));
      }({
        tokens: g
      });
      let {
        data: a = {}
      } = httpRequestInterceptorUtils.formatResponseData(e);
      let c = {};
      b.forEach(e => {
        c[mixedHashUtil.generateHash(e)] = a[e] ? objectPathGetDefault.getObjectPathDefault(a, `${e}.title_secure_key_deleted`, false) ? "key_invalid" : "success" : "failed";
      });
      m({
        duration: Date.now() - w,
        logId: (e == null ? undefined : e.config)?.headers?.["X-TT-LOGID"] || "",
        result: JSON.stringify(c)
      });
      let d = new Set();
      h.forEach((e, t) => {
        let r = a[e];
        let n = a[t];
        if (!r) {
          d.add(t);
          return;
        }
        if (!n) {
          return;
        }
        let o = r.title || i18nLanguageDetector.getUntitledDocumentName(r.type);
        let i = n.title || i18nLanguageDetector.getUntitledDocumentName(n.type);
        Object.assign(n, {
          title: `${o} > ${i}`,
          source_token: e,
          source_type: r.type
        });
        d.add(e);
      });
      d.forEach(e => {
        if (!p.has(e)) {
          delete a[e];
        }
      });
      Object.keys(a).forEach(e => {
        if (objectPathGetDefault.getObjectPathDefault(a, `${e}.title_secure_key_deleted`, false)) {
          delete a[e];
        }
      });
      return a;
    } catch (e) {
      m({
        duration: Date.now() - w,
        result: (e == null ? undefined : e.msg) || "failed",
        logId: (e == null ? undefined : e.config)?.headers?.["X-TT-LOGID"]
      });
      return null;
    }
  }
  async function f(e, t) {
    let r = Date.now();
    driveUrlParserAxios.setAxiosInstance(t);
    let o = Math.ceil(e.length / 100);
    let i = [];
    for (let t = 0; t < o; t++) {
      let r = e.slice(t * 100, t * 100 + 100);
      i.push(d(r));
    }
    let s = {};
    await Promise.all(i).then(e => void Object.assign(s, ...e));
    let u = {};
    e.forEach(e => u[mixedHashUtil.generateHash(e.token)] = s[e.token] ? "success" : "failed");
    componentBizTeaCollector.collectComponentBizEvent(driveNodeTypeConstants_1.apiServiceNames.GET_METAS, {
      result: JSON.stringify(u),
      duration: Date.now() - r
    });
    return s;
  }
  require.d(exports, {
    getDriveMetaBatch: function () {
      return f;
    }
  });
}