// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'L' to 'eventEmitterPolyfill'
// - Resolved require(361873) to 'event-emitter-polyfill'
// - Renamed variable 'I' to 'suiteLanguageManager'
// - Resolved require(239790) to 'suite-language-manager'
// - Renamed variable 'k' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'R' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'A' to 'errorConstantsCodes'
// - Resolved require(850732) to 'error-constants-codes'
// - Renamed variable 'C' to 'queryStringUtils_4'
// - Resolved require(690064) to 'query-string-utils_4'
// - Renamed variable 'F' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'x' to 'partitionedLocalStorage'
// - Resolved require(991902) to 'partitioned-local-storage'
// - Renamed variable 'er' to 'jsSdkBaseConstants'
// - Resolved require(32813) to 'js-sdk-base-constants'
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'B' to 'createStorageMgr' (module 991902)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// - Updated imported property 't9' to 'callApiStub' (module 32813)
// - Updated imported property 'SQ' to 'SdkLanguages' (module 32813)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89676.78fba998.js
         * chunkId: 89676
         * moduleId: 784292
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  let o;
  let a;
  var s;
  var l;
  var u;
  var c;
  var f;
  var p;
  var g;
  var h;
  var d;
  var m;
  var v;
  var y;
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  let b = navigator.platform.indexOf("Mac") > -1 ? "Command" : "Ctrl";
  let S = "lark_web_settings";
  let E = {
    uiSetting: {
      doneNext: true
    },
    shortcut: {
      send: "Enter",
      openQuickSearch: `${b}+K`,
      openSecondQuickSearch: `${b}+F`
    },
    notifySetting: {
      notifySound: true,
      showDetail: true,
      showUnreadNumber: true,
      newMessagePush: true,
      badgeStyle: 1
    }
  };
  let _ = {
    "lark.custom": JSON.stringify(E)
  };
  let w = null;
  let O = {
    async get(e) {
      if (!w) {
        try {
          w = JSON.parse(localStorage.getItem(S));
          let e = JSON.parse(w["lark.custom"]);
          if (e) {
            Object.keys(e).forEach(t => E[t] && typeof e[t] == "object" && (e[t] = {
              ...E[t],
              ...e[t]
            }));
          }
          if (e) {
            w["lark.custom"] = JSON.stringify(e);
          }
        } catch (e) {
          w = _;
        }
        w = w || _;
        localStorage.setItem(S, JSON.stringify(w));
      }
      return e.reduce((e, t) => [...e, w[t]], []);
    },
    set: async e => {
      w = {
        ...w,
        ...e
      };
      localStorage.setItem(S, JSON.stringify(w));
      return w;
    }
  };
  var suiteLanguageManager = require("suite-language-manager") /*id: 239790*/;
  let N = e => {
    e = e.replace("_", "-");
    document.cookie = `i18n_locale=${e};path=/;expires=${new Date(Date.now() + 31536000000)};`;
    suiteLanguageManager.setSuiteLang(e);
    location.href = new URL("/messenger", location.origin).href;
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  let j = {
    env: {},
    domains: {}
  };
  function T(e) {
    let t = objectPathGetDefault.getObjectPathDefault(j, e);
    if (e.startsWith("runtime")) {
      return t;
    } else {
      return deepCloneWrapper_1.deepClone(t);
    }
  }
  let P = new Proxy({}, {
    get(e, t) {
      if (t === "appName") {
        let e = function () {
          let e = window.globalKaConfig;
          if (!(e == null ? undefined : e.i18n) || !e.i18n.app_name) {
            return;
          }
          let t = P.locale || P.lang;
          if (t) {
            t = t.replace("_", "-");
            return e.i18n.app_name[t] || e.i18n.app_name.$base;
          }
        }();
        if (e) {
          return e;
        }
      }
      let r = T("env");
      if (r === undefined) {
        return e[t];
      } else if (r[t] !== undefined) {
        return r[t];
      } else {
        return e[t];
      }
    }
  });
  P.update = () => {};
  var queryStringUtils_4 = require("query-string-utils_4") /*id: 690064*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var partitionedLocalStorage = require("partitioned-local-storage") /*id: 991902*/;
  function $(e, t, r) {
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
  (s = g ||= {})[s.SILENT = 0] = "SILENT";
  s[s.TRACE = 1] = "TRACE";
  s[s.DEBUG = 2] = "DEBUG";
  s[s.INFO = 3] = "INFO";
  s[s.WARN = 4] = "WARN";
  s[s.ERROR = 5] = "ERROR";
  let U = ["trace", "debug", "info", "warn", "error", "silent"];
  function D(e) {
    let t = U.indexOf(e);
    if (t === -1) {
      return g.SILENT;
    } else {
      return t;
    }
  }
  let H = {
    [g.TRACE]: "trace",
    [g.DEBUG]: "debug",
    [g.INFO]: "info",
    [g.WARN]: "warn",
    [g.ERROR]: "error",
    [g.SILENT]: "trace"
  };
  let J = {};
  class K {
    static getLogger(e, t) {
      J[e] = J[e] || new K(e, t);
      return J[e];
    }
    setLevel(e) {
      this.logLevel = D(e);
    }
    enableAll() {
      this.setLevel("trace");
    }
    disableAll() {
      this.setLevel("silent");
    }
    trace(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      this.log(g.TRACE, e, r);
    }
    debug(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      this.log(g.DEBUG, e, r);
    }
    info(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      this.log(g.INFO, e, r);
    }
    perf(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      this.log(g.INFO, e, r);
    }
    warn(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      this.log(g.WARN, e, r);
    }
    error(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      this.log(g.ERROR, e, r);
    }
    print(e) {
      let {
        traceId: t,
        scene: r
      } = e;
      var n = arguments.length;
      var i = Array(n > 1 ? n - 1 : 0);
      var o = 1;
      for (; o < n; o++) {
        i[o - 1] = arguments[o];
      }
      let a = r[0];
      let s = r[1];
      let l = r[2];
      let u = r[3];
      let c = [];
      if (u) {
        let e = u.split("{}");
        for (let t = 0, r = e.length; t < r; t++) {
          if (!e[t] || t !== r - 1) {
            c.push(e[t]);
            if (r > 1 && i[t] !== undefined) {
              c.push(i[t]);
            }
          }
        }
      }
      this.log(D(l), `[${t}][${a}][${s}]`, [...c]);
    }
    generateTraceId() {
      return [...Array(8)].map(() => Math.floor(Math.random() * 36).toString(36)).join("");
    }
    log(e, t, r) {
      if (this.logLevel !== g.SILENT && (!this.logLevel || !(e < this.logLevel))) {
        this.loggerImpl.log({
          level: e,
          template: t,
          args: r,
          namespace: this.namespace
        });
      }
    }
    constructor(e, t) {
      $(this, "namespace", undefined);
      $(this, "logLevel", undefined);
      $(this, "loggerImpl", undefined);
      this.namespace = e;
      this.logLevel = g.DEBUG;
      this.loggerImpl = t;
    }
  }
  let G = {
    log(e) {
      let {
        level: t,
        template: r,
        args: n,
        namespace: i
      } = e;
      let o = H[t];
      (console[o] || console.log)(i, r, ...n);
    }
  };
  let B = function (e, t = G) {
    return K.getLogger(e, t);
  };
  let M = {
    getLogger: B,
    getLoggerWithLogId: B
  }.getLogger("frontend");
  function Z(e) {
    return new Promise((t, r) => Promise.resolve(e).then(r, t));
  }
  let V = new eventEmitterPolyfill.EventEmitter();
  let Y = partitionedLocalStorage.createStorageMgr("foundation", "settingsV3");
  let W = false;
  function q() {
    return Y.getItem("data").then(e => {
      if (!e) {
        let e = "[Lark Runtime] setting v3: no cached data";
        M.error(e);
        throw Error(e);
      }
      return {
        data: e,
        meta: undefined
      };
    });
  }
  async function Q(e = 3) {
    try {
      return await function () {
        let {
          appId: e,
          domains: t
        } = ["appId", "domains"].reduce((e, t) => {
          let r = T(t);
          if (r !== undefined) {
            e[t] = r;
          }
          return e;
        }, {});
        let r = (t || {})[errorConstantsCodes.YHf.API];
        let n = r ? r[0] : "";
        let {
          appVersion: i,
          channel: a
        } = P;
        let s = {
          version: i,
          app_id: e,
          app: "lark",
          platform: "web",
          action: "startup",
          app_channel: a
        };
        if (o) {
          let {
            user_etag: e,
            data_etag: t,
            version_code: r
          } = o;
          s.data_etag = t;
          s.version_code = r;
          s.user_etag = e;
        }
        let l = `https://${n}/settings/v3/`;
        M.info("[Lark Runtime] setting v3: server data fetch start, url={}, params={}", l, JSON.stringify(s));
        return function (e) {
          let {
            headers: t,
            data: r,
            method: n
          } = e;
          let {
            url: i
          } = e;
          let o = {
            method: n,
            headers: (t && (t.requestId || (t["x-request-id"] = uuidGeneratorUtil.generateUuid())), t),
            mode: "cors",
            credentials: "include"
          };
          if (r) {
            switch (n) {
              case "GET":
                i = queryStringUtils_4.stringifyUrl({
                  url: i,
                  query: r
                });
                break;
              case "POST":
                o.body = r;
            }
          }
          return fetch(i, o);
        }({
          url: l,
          method: "GET",
          data: s
        }).then(e => e.json());
      }();
    } catch (t) {
      M.error("[Lark Runtime] setting v3: fetch data error while initializing", t);
      if (e <= 0) {
        M.error("[Lark Runtime] setting v3: will try to use local cache");
        return q();
      }
      M.info("[Lark Runtime] setting v3: will retry fetching in 10 seconds...");
      await new Promise(e => {
        setTimeout(() => e(), 10000);
      });
      return Q(e - 1);
    }
  }
  async function z() {
    let e = Q();
    e.then(e => {
      var t;
      var r;
      if (Object.keys(r = e.data).length !== 0) {
        V.emit("SETTINGS_UPDATE", r);
        i = Object.assign({}, i, r);
        Y.setItem("data", i);
      }
      if (t = e.meta) {
        o = t;
      }
    }).finally(() => {
      W = true;
      (function () {
        if (a) {
          clearTimeout(a);
          a = null;
        }
        let e = objectPathGetDefault.getObjectPathDefault(o, "ttl");
        let t = e ? e * 1000 : 3600000;
        a = (window || self).setTimeout(async () => {
          a = null;
          n = z();
        }, t);
        M.info(`[Lark Runtime] setting v3: next fetch scheduled, timeout: ${t}`);
      })();
    });
    return e;
  }
  async function X() {
    if (W) {
      return Promise.resolve();
    }
    if (!n) {
      M.info("[Lark Runtime] setting v3: first fetch");
      n = z();
    }
    await n;
  }
  async function ee(e) {
    if (arguments.length > 1 && arguments[1] !== undefined) {
      arguments[1];
    }
    let t = await (i ? Promise.resolve(i) : (W || X(), Z(Promise.all([q(), n].map(Z))).then(e => e.data).catch(() => {
      throw Error("setting v3 init error");
    })));
    let r = {};
    e.forEach(e => {
      let n = objectPathGetDefault.getObjectPathDefault(t, e);
      r[e] = deepCloneWrapper_1.deepClone(n);
    });
    return r;
  }
  async function et(e) {
    return (await ee([e]))[e];
  }
  var jsSdkBaseConstants = require("js-sdk-base-constants") /*id: 32813*/;
  async function en(e, t, r) {
    let n;
    let {
      value: i,
      command: o
    } = function (e) {
      let [t, r, n, i, o] = e.split("|");
      return {
        value: parseInt(t, 10),
        requestPb: r,
        responsePb: n,
        type: i,
        command: o
      };
    }(e);
    if (isNaN(i)) {
      throw Error(`transport::callApi invalid cmd: ${e}`);
    }
    M.info(`transport::callApi:start ${o || "unknown command"}(${i})`);
    try {
      n = await jsSdkBaseConstants.callApiStub(e, t);
    } catch (e) {
      M.info(`transport::callApi:end:error ${o || "unknown command"}(${i})`);
      throw e;
    }
    M.info(`transport::callApi:end:success ${o || "unknown command"}(${i})`);
    return n;
  }
  (l = h ||= {}).ZhCn = "zh_CN";
  l.ZhHk = "zh_HK";
  l.ZhTw = "zh_TW";
  l.EnUs = "en_US";
  l.JaJp = "ja_JP";
  l.Rw = "rw";
  l.Es = "es_ES";
  l.It = "it_IT";
  l.De = "de_DE";
  l.Fr = "fr_FR";
  l.PtBr = "pt_BR";
  l.Id = "id_ID";
  l.ViVn = "vi_VN";
  l.Th = "th_TH";
  l.KoKr = "ko_KR";
  l.Ru = "ru_RU";
  l.HiIn = "hi_IN";
  (u = d ||= {}).Web = "web";
  u.Native = "native";
  (c = m ||= {}).Hosted = "hosted";
  c.OnPremise = "on-premise";
  c.Saas = "saas";
  (f = v ||= {}).UnitNC = "eu_nc";
  f.UnitEA = "eu_ea";
  (p = y ||= {}).Dev = "development";
  p.Alpha = "alpha";
  p.Staging = "staging";
  p.PreRelease = "prerelease";
  p.Production = "production";
  h.ZhCn;
  jsSdkBaseConstants.SdkLanguages.Chinese;
  h.EnUs;
  jsSdkBaseConstants.SdkLanguages.English;
  h.JaJp;
  jsSdkBaseConstants.SdkLanguages.Japanese;
  errorConstantsCodes.YHf.API;
  errorConstantsCodes.YHf.LONG;
  errorConstantsCodes.YHf.PASSPORT;
  errorConstantsCodes.YHf.FILE;
  errorConstantsCodes.YHf.SUITE_TKLOG;
  errorConstantsCodes.YHf.SUITE_MAIN_DOMAIN;
  errorConstantsCodes.YHf.OPEN;
  errorConstantsCodes.YHf.INTERNAL_API;
  errorConstantsCodes.YHf.OPEN_APPCENTER3;
  let ei = new eventEmitterPolyfill.EventEmitter();
  async function eo(e) {
    return (await O.get([e]))[0];
  }
  async function ea(e) {
    return (await O.get(e)).reduce((t, r, n) => {
      t[e[n]] = r;
      return t;
    }, {});
  }
  async function es(e, t) {
    let r = await O.set({
      [e]: t
    });
    ei.emit("changed", [e]);
    return r;
  }
  async function el(e) {
    let t = await O.set(e);
    let r = Object.keys(e);
    ei.emit("changed", r);
    return t;
  }
  function eu(e, t) {
    let r = async r => {
      let n = r.filter(t => e.includes(t));
      let i = await ea(n);
      if (n.length > 0) {
        t(i);
      }
    };
    ei.on("changed", r);
    return () => {
      ei.off("changed", r);
    };
  }
  async function ec() {
    return eo("lark.custom").then(e => ({
      settings: e
    }));
  }
  async function ef(e) {
    await es("lark.custom", e.settings);
  }
  eu(["lark.locale"], e => e["lark.locale"] && N(e["lark.locale"]));
  let ep = eo;
  let eg = ea;
  let eh = es;
  let ed = el;
  let em = eu;
  async function ev() {
    var t;
    let r;
    let n;
    try {
      r = await et("client_dynamic_link");
    } catch (e) {
      M.error("Get client_dynamic_l error: ", e);
    }
    try {
      n = await en("3140|basic.v1.GetAppConfigRequest|basic.v1.GetAppConfigResponse|1|GET_APP_CONFIG", {});
    } catch (e) {
      M.error("GET_APP_CONFIG error: ", e);
    }
    return {
      ...((n == null ? undefined : (t = n.appConfig) === null || t === undefined ? undefined : t.resource?.addrs) || {}),
      ...(r || {})
    };
  }
  require.r(exports);
  require.d(exports, {
    setItems: function () {
      return el;
    },
    setLocalSettings: function () {
      return ed;
    },
    observe: function () {
      return eu;
    },
    getItems: function () {
      return ea;
    },
    getLocalSetting: function () {
      return ep;
    },
    observeLocalSetting: function () {
      return em;
    },
    setClientStatus: function () {
      return ef;
    },
    setLocalSetting: function () {
      return eh;
    },
    set: function () {
      return es;
    },
    getPrivacyPolicyAndRelatedLink: function () {
      return ev;
    },
    get: function () {
      return eo;
    },
    getLocalSettings: function () {
      return eg;
    },
    getClientStatus: function () {
      return ec;
    }
  });
}