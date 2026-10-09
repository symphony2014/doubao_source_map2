// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable '_' to 'eventEmitterPolyfill'
// - Resolved require(361873) to 'event-emitter-polyfill'
// - Renamed variable 'E' to 'reminderTypesEnum'
// - Resolved require(70215) to 'reminder-types-enum'
// - Renamed variable 'R' to 'suiteLanguageManager'
// - Resolved require(239790) to 'suite-language-manager'
// - Renamed variable 'P' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'T' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'b' to 'contentTypeEnums_1'
// - Resolved require(263557) to 'content-type-enums_1'
// - Renamed variable 'U' to 'queryStringUtils_4'
// - Resolved require(690064) to 'query-string-utils_4'
// - Renamed variable 'H' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable '$' to 'partitionedLocalStorage'
// - Resolved require(991902) to 'partitioned-local-storage'
// - Renamed variable 'er' to 'jsSdkBaseConstants'
// - Resolved require(32813) to 'js-sdk-base-constants'
// - Renamed variable 'ea' to 'appConfigGrpcMessage'
// - Resolved require(158731) to 'app-config-grpc-message'
// - Updated imported property 'PN' to 'ReminderTypes' (module 70215)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'B' to 'createStorageMgr' (module 991902)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// - Updated imported property 't9' to 'callApiStub' (module 32813)
// - Updated imported property 'SQ' to 'SdkLanguages' (module 32813)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58290.e04a4e09.js
         * chunkId: 58290
         * moduleId: 768833
         */
module.exports = function (module, exports, require) {
  let r;
  let i;
  let a;
  let o;
  var l;
  var s;
  var c;
  var u;
  var f;
  var g;
  var h;
  var d;
  var m;
  var v;
  var p;
  var y;
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  var reminderTypesEnum = require("reminder-types-enum") /*id: 70215*/;
  let w = navigator.platform.indexOf("Mac") > -1 ? "Command" : "Ctrl";
  let S = "lark_web_settings";
  let N = {
    uiSetting: {
      doneNext: true
    },
    shortcut: {
      send: "Enter",
      openQuickSearch: `${w}+K`,
      openSecondQuickSearch: `${w}+F`
    },
    notifySetting: {
      notifySound: true,
      showDetail: true,
      showUnreadNumber: true,
      newMessagePush: true,
      badgeStyle: reminderTypesEnum.ReminderTypes.WEAK_REMIND
    }
  };
  let L = {
    "lark.custom": JSON.stringify(N)
  };
  let I = null;
  let A = {
    async get(e) {
      if (!I) {
        try {
          I = JSON.parse(localStorage.getItem(S));
          let e = JSON.parse(I["lark.custom"]);
          if (e) {
            Object.keys(e).forEach(t => N[t] && typeof e[t] == "object" && (e[t] = {
              ...N[t],
              ...e[t]
            }));
          }
          if (e) {
            I["lark.custom"] = JSON.stringify(e);
          }
        } catch (e) {
          I = L;
        }
        I = I || L;
        localStorage.setItem(S, JSON.stringify(I));
      }
      return e.reduce((e, t) => [...e, I[t]], []);
    },
    set: async e => {
      I = {
        ...I,
        ...e
      };
      localStorage.setItem(S, JSON.stringify(I));
      return I;
    }
  };
  var suiteLanguageManager = require("suite-language-manager") /*id: 239790*/;
  let O = e => {
    e = e.replace("_", "-");
    document.cookie = `i18n_locale=${e};path=/;expires=${new Date(Date.now() + 31536000000)};`;
    suiteLanguageManager.setSuiteLang(e);
    location.href = new URL("/messenger", location.origin).href;
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var contentTypeEnums_1 = require("content-type-enums_1") /*id: 263557*/;
  let k = {
    env: {},
    domains: {}
  };
  function D(e) {
    let t = objectPathGetDefault.getObjectPathDefault(k, e);
    if (e.startsWith("runtime")) {
      return t;
    } else {
      return deepCloneWrapper_1.deepClone(t);
    }
  }
  let C = new Proxy({}, {
    get(e, t) {
      if (t === "appName") {
        let e = function () {
          let e = window.globalKaConfig;
          if (!(e == null ? undefined : e.i18n) || !e.i18n.app_name) {
            return;
          }
          let t = C.locale || C.lang;
          if (t) {
            t = t.replace("_", "-");
            return e.i18n.app_name[t] || e.i18n.app_name.$base;
          }
        }();
        if (e) {
          return e;
        }
      }
      let n = D("env");
      if (n === undefined) {
        return e[t];
      } else if (n[t] !== undefined) {
        return n[t];
      } else {
        return e[t];
      }
    }
  });
  C.update = () => {};
  var queryStringUtils_4 = require("query-string-utils_4") /*id: 690064*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var partitionedLocalStorage = require("partitioned-local-storage") /*id: 991902*/;
  function G(e, t, n) {
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
  (l = h ||= {})[l.SILENT = 0] = "SILENT";
  l[l.TRACE = 1] = "TRACE";
  l[l.DEBUG = 2] = "DEBUG";
  l[l.INFO = 3] = "INFO";
  l[l.WARN = 4] = "WARN";
  l[l.ERROR = 5] = "ERROR";
  let J = ["trace", "debug", "info", "warn", "error", "silent"];
  function j(e) {
    let t = J.indexOf(e);
    if (t === -1) {
      return h.SILENT;
    } else {
      return t;
    }
  }
  let B = {
    [h.TRACE]: "trace",
    [h.DEBUG]: "debug",
    [h.INFO]: "info",
    [h.WARN]: "warn",
    [h.ERROR]: "error",
    [h.SILENT]: "trace"
  };
  let F = {};
  class K {
    static getLogger(e, t) {
      F[e] = F[e] || new K(e, t);
      return F[e];
    }
    setLevel(e) {
      this.logLevel = j(e);
    }
    enableAll() {
      this.setLevel("trace");
    }
    disableAll() {
      this.setLevel("silent");
    }
    trace(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var r = 1;
      for (; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.log(h.TRACE, e, n);
    }
    debug(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var r = 1;
      for (; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.log(h.DEBUG, e, n);
    }
    info(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var r = 1;
      for (; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.log(h.INFO, e, n);
    }
    perf(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var r = 1;
      for (; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.log(h.INFO, e, n);
    }
    warn(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var r = 1;
      for (; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.log(h.WARN, e, n);
    }
    error(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var r = 1;
      for (; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.log(h.ERROR, e, n);
    }
    print(e) {
      let {
        traceId: t,
        scene: n
      } = e;
      var r = arguments.length;
      var i = Array(r > 1 ? r - 1 : 0);
      var a = 1;
      for (; a < r; a++) {
        i[a - 1] = arguments[a];
      }
      let o = n[0];
      let l = n[1];
      let s = n[2];
      let c = n[3];
      let u = [];
      if (c) {
        let e = c.split("{}");
        for (let t = 0, n = e.length; t < n; t++) {
          if (!e[t] || t !== n - 1) {
            u.push(e[t]);
            if (n > 1 && i[t] !== undefined) {
              u.push(i[t]);
            }
          }
        }
      }
      this.log(j(s), `[${t}][${o}][${l}]`, [...u]);
    }
    generateTraceId() {
      return [...Array(8)].map(() => Math.floor(Math.random() * 36).toString(36)).join("");
    }
    log(e, t, n) {
      if (this.logLevel !== h.SILENT && (!this.logLevel || !(e < this.logLevel))) {
        this.loggerImpl.log({
          level: e,
          template: t,
          args: n,
          namespace: this.namespace
        });
      }
    }
    constructor(e, t) {
      G(this, "namespace", undefined);
      G(this, "logLevel", undefined);
      G(this, "loggerImpl", undefined);
      this.namespace = e;
      this.logLevel = h.DEBUG;
      this.loggerImpl = t;
    }
  }
  let Y = {
    log(e) {
      let {
        level: t,
        template: n,
        args: r,
        namespace: i
      } = e;
      let a = B[t];
      (console[a] || console.log)(i, n, ...r);
    }
  };
  let Z = function (e, t = Y) {
    return K.getLogger(e, t);
  };
  let W = {
    getLogger: Z,
    getLoggerWithLogId: Z
  }.getLogger("frontend");
  function x(e) {
    return new Promise((t, n) => Promise.resolve(e).then(n, t));
  }
  let M = new eventEmitterPolyfill.EventEmitter();
  let Q = partitionedLocalStorage.createStorageMgr("foundation", "settingsV3");
  let z = false;
  function V() {
    return Q.getItem("data").then(e => {
      if (!e) {
        let e = "[Lark Runtime] setting v3: no cached data";
        W.error(e);
        throw Error(e);
      }
      return {
        data: e,
        meta: undefined
      };
    });
  }
  async function q(e = 3) {
    try {
      return await function () {
        let {
          appId: e,
          domains: t
        } = ["appId", "domains"].reduce((e, t) => {
          let n = D(t);
          if (n !== undefined) {
            e[t] = n;
          }
          return e;
        }, {});
        let n = (t || {})[contentTypeEnums_1.YHf.API];
        let r = n ? n[0] : "";
        let {
          appVersion: i,
          channel: o
        } = C;
        let l = {
          version: i,
          app_id: e,
          app: "lark",
          platform: "web",
          action: "startup",
          app_channel: o
        };
        if (a) {
          let {
            user_etag: e,
            data_etag: t,
            version_code: n
          } = a;
          l.data_etag = t;
          l.version_code = n;
          l.user_etag = e;
        }
        let s = `https://${r}/settings/v3/`;
        W.info("[Lark Runtime] setting v3: server data fetch start, url={}, params={}", s, JSON.stringify(l));
        return function (e) {
          let {
            headers: t,
            data: n,
            method: r
          } = e;
          let {
            url: i
          } = e;
          let a = {
            method: r,
            headers: (t && (t.requestId || (t["x-request-id"] = uuidGeneratorUtil.generateUuid())), t),
            mode: "cors",
            credentials: "include"
          };
          if (n) {
            switch (r) {
              case "GET":
                i = queryStringUtils_4.stringifyUrl({
                  url: i,
                  query: n
                });
                break;
              case "POST":
                a.body = n;
            }
          }
          return fetch(i, a);
        }({
          url: s,
          method: "GET",
          data: l
        }).then(e => e.json());
      }();
    } catch (t) {
      W.error("[Lark Runtime] setting v3: fetch data error while initializing", t);
      if (e <= 0) {
        W.error("[Lark Runtime] setting v3: will try to use local cache");
        return V();
      }
      W.info("[Lark Runtime] setting v3: will retry fetching in 10 seconds...");
      await new Promise(e => {
        setTimeout(() => e(), 10000);
      });
      return q(e - 1);
    }
  }
  async function X() {
    let e = q();
    e.then(e => {
      var t;
      var n;
      if (Object.keys(n = e.data).length !== 0) {
        M.emit("SETTINGS_UPDATE", n);
        i = Object.assign({}, i, n);
        Q.setItem("data", i);
      }
      if (t = e.meta) {
        a = t;
      }
    }).finally(() => {
      z = true;
      (function () {
        if (o) {
          clearTimeout(o);
          o = null;
        }
        let e = objectPathGetDefault.getObjectPathDefault(a, "ttl");
        let t = e ? e * 1000 : 3600000;
        o = (window || self).setTimeout(async () => {
          o = null;
          r = X();
        }, t);
        W.info(`[Lark Runtime] setting v3: next fetch scheduled, timeout: ${t}`);
      })();
    });
    return e;
  }
  async function ee() {
    if (z) {
      return Promise.resolve();
    }
    if (!r) {
      W.info("[Lark Runtime] setting v3: first fetch");
      r = X();
    }
    await r;
  }
  async function et(e) {
    if (arguments.length > 1 && arguments[1] !== undefined) {
      arguments[1];
    }
    let t = await (i ? Promise.resolve(i) : (z || ee(), x(Promise.all([V(), r].map(x))).then(e => e.data).catch(() => {
      throw Error("setting v3 init error");
    })));
    let n = {};
    e.forEach(e => {
      let r = objectPathGetDefault.getObjectPathDefault(t, e);
      n[e] = deepCloneWrapper_1.deepClone(r);
    });
    return n;
  }
  async function en(e) {
    return (await et([e]))[e];
  }
  var jsSdkBaseConstants = require("js-sdk-base-constants") /*id: 32813*/;
  async function ei(e, t, n) {
    let r;
    let {
      value: i,
      command: a
    } = function (e) {
      let [t, n, r, i, a] = e.split("|");
      return {
        value: parseInt(t, 10),
        requestPb: n,
        responsePb: r,
        type: i,
        command: a
      };
    }(e);
    if (isNaN(i)) {
      throw Error(`transport::callApi invalid cmd: ${e}`);
    }
    W.info(`transport::callApi:start ${a || "unknown command"}(${i})`);
    try {
      r = await jsSdkBaseConstants.callApiStub(e, t);
    } catch (e) {
      W.info(`transport::callApi:end:error ${a || "unknown command"}(${i})`);
      throw e;
    }
    W.info(`transport::callApi:end:success ${a || "unknown command"}(${i})`);
    return r;
  }
  (s = d ||= {}).ZhCn = "zh_CN";
  s.ZhHk = "zh_HK";
  s.ZhTw = "zh_TW";
  s.EnUs = "en_US";
  s.JaJp = "ja_JP";
  s.Rw = "rw";
  s.Es = "es_ES";
  s.It = "it_IT";
  s.De = "de_DE";
  s.Fr = "fr_FR";
  s.PtBr = "pt_BR";
  s.Id = "id_ID";
  s.ViVn = "vi_VN";
  s.Th = "th_TH";
  s.KoKr = "ko_KR";
  s.Ru = "ru_RU";
  s.HiIn = "hi_IN";
  (c = m ||= {}).Web = "web";
  c.Native = "native";
  (u = v ||= {}).Hosted = "hosted";
  u.OnPremise = "on-premise";
  u.Saas = "saas";
  (f = p ||= {}).UnitNC = "eu_nc";
  f.UnitEA = "eu_ea";
  (g = y ||= {}).Dev = "development";
  g.Alpha = "alpha";
  g.Staging = "staging";
  g.PreRelease = "prerelease";
  g.Production = "production";
  d.ZhCn;
  jsSdkBaseConstants.SdkLanguages.Chinese;
  d.EnUs;
  jsSdkBaseConstants.SdkLanguages.English;
  d.JaJp;
  jsSdkBaseConstants.SdkLanguages.Japanese;
  contentTypeEnums_1.YHf.API;
  contentTypeEnums_1.YHf.LONG;
  contentTypeEnums_1.YHf.PASSPORT;
  contentTypeEnums_1.YHf.FILE;
  contentTypeEnums_1.YHf.SUITE_TKLOG;
  contentTypeEnums_1.YHf.SUITE_MAIN_DOMAIN;
  contentTypeEnums_1.YHf.OPEN;
  contentTypeEnums_1.YHf.INTERNAL_API;
  contentTypeEnums_1.YHf.OPEN_APPCENTER3;
  var appConfigGrpcMessage = require("app-config-grpc-message") /*id: 158731*/;
  let eo = new eventEmitterPolyfill.EventEmitter();
  async function el(e) {
    return (await A.get([e]))[0];
  }
  async function es(e) {
    return (await A.get(e)).reduce((t, n, r) => {
      t[e[r]] = n;
      return t;
    }, {});
  }
  async function ec(e, t) {
    let n = await A.set({
      [e]: t
    });
    eo.emit("changed", [e]);
    return n;
  }
  async function eu(e) {
    let t = await A.set(e);
    let n = Object.keys(e);
    eo.emit("changed", n);
    return t;
  }
  function ef(e, t) {
    let n = async n => {
      let r = n.filter(t => e.includes(t));
      let i = await es(r);
      if (r.length > 0) {
        t(i);
      }
    };
    eo.on("changed", n);
    return () => {
      eo.off("changed", n);
    };
  }
  async function eg() {
    return el("lark.custom").then(e => ({
      settings: e
    }));
  }
  async function eh(e) {
    await ec("lark.custom", e.settings);
  }
  ef(["lark.locale"], e => e["lark.locale"] && O(e["lark.locale"]));
  let ed = el;
  let em = es;
  let ev = ec;
  let ep = eu;
  let ey = ef;
  async function e_() {
    var t;
    let n;
    let r;
    try {
      n = await en("client_dynamic_link");
    } catch (e) {
      W.error("Get client_dynamic_l error: ", e);
    }
    try {
      r = await ei(appConfigGrpcMessage.QX8, {});
    } catch (e) {
      W.error("GET_APP_CONFIG error: ", e);
    }
    return {
      ...((r == null ? undefined : (t = r.appConfig) === null || t === undefined ? undefined : t.resource?.addrs) || {}),
      ...(n || {})
    };
  }
  require.r(exports);
  require.d(exports, {
    setItems: function () {
      return eu;
    },
    setLocalSettings: function () {
      return ep;
    },
    observe: function () {
      return ef;
    },
    getItems: function () {
      return es;
    },
    getLocalSetting: function () {
      return ed;
    },
    observeLocalSetting: function () {
      return ey;
    },
    setClientStatus: function () {
      return eh;
    },
    setLocalSetting: function () {
      return ev;
    },
    set: function () {
      return ec;
    },
    getPrivacyPolicyAndRelatedLink: function () {
      return e_;
    },
    get: function () {
      return el;
    },
    getLocalSettings: function () {
      return em;
    },
    getClientStatus: function () {
      return eg;
    }
  });
}