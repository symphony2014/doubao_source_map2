// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yP' to 'CanonicalCode'
// - Renamed export 'Bm' to 'EventTeaExporter'
// - Renamed export 'kn' to 'LogSlardarExporter'
// - Renamed export 'ZP' to 'coreLoggerInstance'
// - Renamed export 'jl' to 'createLoggerManager'
// - Renamed export 'HA' to 'IndexedDbExporter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 101534
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  let o;
  var a;
  var s;
  var c;
  var u;
  var l;
  var f;
  var d;
  var h;
  var p;
  var g;
  var v;
  var m;
  var aceLoggerCoreManager = require("ace-logger-core-manager") /*id: 711568*/;
  var uuidV4Generator = require("uuid-v4-generator") /*id: 466890*/;
  var cryptoHashUtils = require("crypto-hash-utils") /*id: 333934*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  let w = /SpaceApp/i.test(navigator.userAgent);
  function S() {
    if (w) {
      return "feishu_docs_client";
    } else if (browserEnvDetectionUtil.browserDetector.isFeed || browserEnvDetectionUtil.browserDetector.isLark) {
      return "lark";
    } else if (browserEnvDetectionUtil.browserDetector.isDocs) {
      return "doc_app";
    } else {
      return "web";
    }
  }
  function O() {
    let e = "others";
    if (browserEnvDetectionUtil.browserDetector.isWechat) {
      e = m.WECHAT;
    } else if (browserEnvDetectionUtil.browserDetector.isQQ) {
      e = m.QQ;
    } else if (browserEnvDetectionUtil.browserDetector.isWeibo) {
      e = m.WEIBO;
    } else if (browserEnvDetectionUtil.browserDetector.isToutiao) {
      e = m.TOUTIAO;
    } else if (browserEnvDetectionUtil.browserDetector.isMobile && !browserEnvDetectionUtil.browserDetector.isLark) {
      e = m.MOBILE_WEB;
    } else if (!browserEnvDetectionUtil.browserDetector.isMobile && (browserEnvDetectionUtil.browserDetector.isMac || browserEnvDetectionUtil.browserDetector.isWindows)) {
      e = m.PC_WEB;
    } else if (w) {
      e = m.PC_WEB;
    }
    return e;
  }
  function A() {
    let e;
    let t;
    let r;
    let n = screen.width;
    let i = screen.height;
    let {
      appVersion: o
    } = window.navigator;
    let {
      userAgent: a
    } = window.navigator;
    let {
      language: s
    } = window.navigator;
    let {
      referrer: c
    } = document;
    let u = c ? function (e) {
      let t = document.createElement("a");
      t.href = e;
      return t;
    }(c).hostname : "";
    let l = "";
    let f = "";
    let d = "";
    let h = `${parseFloat(o)}`;
    if ((e = a.indexOf("Opera")) !== -1) {
      d = "Opera";
      h = a.substring(e + 6);
      if ((e = a.indexOf("Version")) !== -1) {
        h = a.substring(e + 8);
      }
    }
    if ((e = a.indexOf("Edge")) !== -1) {
      d = "Microsoft Edge";
      h = a.substring(e + 5);
    } else if ((e = a.indexOf("MSIE")) !== -1) {
      d = "Microsoft Internet Explorer";
      h = a.substring(e + 5);
    } else if ((e = a.indexOf("Chrome")) !== -1) {
      d = "Chrome";
      h = a.substring(e + 7);
    } else if ((e = a.indexOf("Safari")) !== -1) {
      d = "Safari";
      h = a.substring(e + 7);
      if ((e = a.indexOf("Version")) !== -1) {
        h = a.substring(e + 8);
      }
    } else if ((e = a.indexOf("Firefox")) !== -1) {
      d = "Firefox";
      h = a.substring(e + 8);
    }
    if ((t = h.indexOf(";")) !== -1) {
      h = h.substring(0, t);
    }
    if ((t = h.indexOf(" ")) !== -1) {
      h = h.substring(0, t);
    }
    if ((t = h.indexOf(")")) !== -1) {
      h = h.substring(0, t);
    }
    let p = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(o) ? "wap" : "web";
    let g = [{
      s: "Windows 10",
      r: /(Windows 10.0|Windows NT 10.0)/
    }, {
      s: "Windows 8.1",
      r: /(Windows 8.1|Windows NT 6.3)/
    }, {
      s: "Windows 8",
      r: /(Windows 8|Windows NT 6.2)/
    }, {
      s: "Windows 7",
      r: /(Windows 7|Windows NT 6.1)/
    }, {
      s: "Android",
      r: /Android/
    }, {
      s: "Sun OS",
      r: /SunOS/
    }, {
      s: "Linux",
      r: /(Linux|X11)/
    }, {
      s: "iOS",
      r: /(iPhone|iPad|iPod)/
    }, {
      s: "Mac OS X",
      r: /Mac OS X/
    }, {
      s: "Mac OS",
      r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }];
    for (let e = 0; e < g.length; e++) {
      let t = g[e];
      if (t.r.test(a)) {
        l = t.s;
        break;
      }
    }
    function v(e, t) {
      let r = e.exec(t);
      if (r && r[1]) {
        return r[1];
      } else {
        return "";
      }
    }
    if (/Windows/.test(l)) {
      f = v(/Windows (.*)/, l);
      l = "windows";
    }
    switch (l) {
      case "Mac OS X":
        f = v(/Mac OS X (10[\.\_\d]+)/, a);
        l = "mac";
        break;
      case "Android":
        if (!(r = v(/Android ([\.\_\d]+)/, a))) {
          r = v(/Android\/([\.\_\d]+)/, a);
        }
        f = r;
        l = "android";
        break;
      case "iOS":
        f = (f = (/OS (\d+)_(\d+)_?(\d+)?/.exec(o) || [""])[0]) ? `${f[1]}.${f[2]}.${f[3] || 0}` : "";
        l = "ios";
        break;
      case "windows":
        break;
      default:
        l = "";
        f = "";
    }
    let m = new Date().getTimezoneOffset();
    let y = parseInt(`${-m / 60}`, 10);
    return {
      browser: d,
      browser_version: h,
      platform: p,
      os_name: l,
      os_version: f,
      resolution: `${n}x${i}`,
      device_model: function (e) {
        let t = "";
        try {
          if (e === "android") {
            navigator.userAgent.split(";").forEach(function (e) {
              if (e.indexOf("Build/") > -1) {
                t = e.slice(0, e.indexOf("Build/"));
              }
            });
          } else if (e === "ios" || e === "mac") {
            let e = navigator.userAgent.replace("Mozilla/5.0 (", "");
            let r = e.indexOf(";");
            t = e.slice(0, r);
          }
        } catch (e) {}
        return t.trim();
      }(l),
      language: s,
      referrer: c,
      referrer_host: u,
      sdk_version: "3.4.1",
      timezone: y,
      tz_offset: m * 60
    };
  }
  (p = m ||= {}).MOBILE_WEB = "mobile_web";
  p.PC_WEB = "pc_web";
  p.WECHAT = "weixin_web";
  p.QQ = "qq_web";
  p.WEIBO = "weibo_web";
  p.TOUTIAO = "toutiao_web";
  p.OTHERS = "others";
  var noopArgumentHelper = require("noop-argument-helper") /*id: 391235*/;
  A();
  S();
  O();
  function I() {
    return (I = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function C(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) {
      return e;
    }
    var n;
    var i;
    var o = r.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(n = o.next()).done) {
        a.push(n.value);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        if (n && !n.done && (r = o.return)) {
          r.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a;
  }
  function L(e, t, r) {
    if (r || arguments.length == 2) {
      var n;
      var i = 0;
      var o = t.length;
      for (; i < o; i++) {
        if (!!n || !(i in t)) {
          n ||= Array.prototype.slice.call(t, 0, i);
          n[i] = t[i];
        }
      }
    }
    return e.concat(n || Array.prototype.slice.call(t));
  }
  var T = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
  function P() {
    return {};
  }
  function N(e) {
    return e;
  }
  function x(e) {
    return typeof e == "object" && e !== null;
  }
  var R = Object.prototype;
  function j(e) {
    return R.toString.call(e) === "[object Array]";
  }
  function k(e) {
    return typeof e == "number";
  }
  function M(e) {
    return typeof e == "string";
  }
  function F(e, t) {
    if (!j(e) || e.length === 0) {
      return false;
    }
    for (var r = 0; r < e.length;) {
      if (e[r] === t) {
        return true;
      }
      r++;
    }
    return false;
  }
  function U(e, t) {
    if (!j(e)) {
      return e;
    }
    var r = e.indexOf(t);
    if (r >= 0) {
      var n = e.slice();
      n.splice(r, 1);
      return n;
    }
    return e;
  }
  function K(e, t, r) {
    var n;
    var i = C(t.split("."));
    var o = i[0];
    var a = i.slice(1);
    while (e && a.length > 0) {
      e = e[o];
      o = (n = C(a))[0];
      a = n.slice(1);
    }
    if (e) {
      return r(e, o);
    }
  }
  function B(e) {
    try {
      if (M(e)) {
        return e;
      } else {
        return JSON.stringify(e);
      }
    } catch (e) {
      return "[FAILED_TO_STRINGIFY]:" + String(e);
    }
  }
  "".padStart;
  function H() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }
  function G() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }
  function $(e) {
    return Math.random() < Number(e);
  }
  function W(e, t) {
    return e < Number(t);
  }
  function V(e) {
    return function (t) {
      var r = t;
      var n = 0;
      for (; n < e.length; n++) {
        if (r) {
          try {
            r = e[n](r);
          } catch (e) {
            H(e);
          }
        } else {
          break;
        }
      }
      return r;
    };
  }
  function z() {
    var e = function () {
      var e = Array(16);
      var t = 0;
      var r = 0;
      for (; r < 16; r++) {
        if ((r & 3) == 0) {
          t = Math.random() * 4294967296;
        }
        e[r] = t >>> ((r & 3) << 3) & 255;
      }
      return e;
    }();
    e[6] = e[6] & 15 | 64;
    e[8] = e[8] & 63 | 128;
    return function (e) {
      var t = [];
      var r = 0;
      for (; r < 256; ++r) {
        t[r] = (r + 256).toString(16).substr(1);
      }
      var n = 0;
      return [t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]]].join("");
    }(e);
  }
  function q(e) {
    var t;
    var r;
    var n;
    t = {};
    r = {};
    var i = n = {
      set: function (e, i) {
        t[e] = i;
        r[e] = B(i);
        return n;
      },
      merge: function (e) {
        t = I(I({}, t), e);
        Object.keys(e).forEach(function (t) {
          r[t] = B(e[t]);
        });
        return n;
      },
      delete: function (e) {
        delete t[e];
        delete r[e];
        return n;
      },
      clear: function () {
        t = {};
        r = {};
        return n;
      },
      get: function (e) {
        return r[e];
      },
      toString: function () {
        return I({}, r);
      }
    };
    e.provide("context", i);
    e.on("report", function (e) {
      e.extra ||= {};
      e.extra.context = i.toString();
      return e;
    });
  }
  function X() {
    return Date.now();
  }
  function Y(e) {
    if (e) {
      e.__SLARDAR_REGISTRY__ ||= {
        Slardar: {
          plugins: [],
          errors: [],
          subject: {}
        }
      };
      return e.__SLARDAR_REGISTRY__.Slardar;
    }
  }
  function J() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var r = Y(function () {
      if (typeof window == "object" && x(window)) {
        return window;
      }
    }());
    if (r) {
      r.errors ||= [];
      r.errors.push(e);
    }
  }
  var Z = "custom";
  function Q(e) {
    if (e && x(e) && e.name && M(e.name)) {
      var t = {
        name: e.name,
        type: "event"
      };
      if ("metrics" in e && x(e.metrics)) {
        var r = e.metrics;
        var n = {};
        for (var i in r) {
          if (k(r[i])) {
            n[i] = r[i];
          }
        }
        t.metrics = n;
      }
      if ("categories" in e && x(e.categories)) {
        var o = e.categories;
        var a = {};
        for (var i in o) {
          a[i] = B(o[i]);
        }
        t.categories = a;
      }
      return t;
    }
  }
  function ee(e) {
    if (e && x(e) && e.content && M(e.content)) {
      var t = {
        content: B(e.content),
        type: "log",
        level: "info"
      };
      if ("level" in e) {
        t.level = e.level;
      }
      if ("extra" in e && x(e.extra)) {
        var r = e.extra;
        var n = {};
        var i = {};
        for (var o in r) {
          if (k(r[o])) {
            n[o] = r[o];
          } else {
            i[o] = B(r[o]);
          }
        }
        t.metrics = n;
        t.categories = i;
      }
      return t;
    }
  }
  function et(e, t) {
    var r = e.common || {};
    r.sample_rate = t;
    e.common = r;
    return e;
  }
  function er(e, t, r, n, i) {
    var o;
    if (e) {
      o = i(n, t);
      return function () {
        return o;
      };
    } else {
      return function () {
        return r(t);
      };
    }
  }
  function en(e, t, r) {
    switch (r) {
      case "eq":
        return F(t, e);
      case "neq":
        return !F(t, e);
      case "gt":
        return e > t[0];
      case "gte":
        return e >= t[0];
      case "lt":
        return e < t[0];
      case "lte":
        return e <= t[0];
      case "regex":
        return !!e.match(new RegExp(t.join("|")));
      case "not_regex":
        return !e.match(new RegExp(t.join("|")));
      default:
        return false;
    }
  }
  function ei(e, t, r, n) {
    var i = K(e, t, function (e, t) {
      return e[t];
    });
    if (i === undefined) {
      return false;
    }
    var o = typeof i == "boolean" ? "bool" : k(i) ? "number" : "string";
    return en(i, n.map(function (e) {
      switch (o) {
        case "number":
          return Number(e);
        case "boolean":
          return e === "1";
        default:
          return String(e);
      }
    }), r);
  }
  function eo(e, t) {
    try {
      if (t.type === "rule") {
        return ei(e, t.field, t.op, t.values);
      } else if (t.type === "and") {
        return t.children.every(function (t) {
          return eo(e, t);
        });
      } else {
        return t.children.some(function (t) {
          return eo(e, t);
        });
      }
    } catch (e) {
      J(e);
      return false;
    }
  }
  function ea(e, t, r, n, i, o) {
    var a = {};
    Object.keys(e).forEach(function (s) {
      var c = e[s];
      var u = c.enable;
      var l = c.sample_rate;
      var f = c.conditional_sample_rules;
      if (u) {
        a[s] = {
          enable: u,
          sample_rate: l,
          effectiveSampleRate: l * r,
          hit: er(t, l, n, i, o)
        };
        if (f) {
          a[s].conditional_hit_rules = f.map(function (e) {
            var a = e.sample_rate;
            var s = e.filter;
            return {
              sample_rate: a,
              hit: er(t, a, n, i, o),
              effectiveSampleRate: a * r,
              filter: s
            };
          });
        }
      } else {
        a[s] = {
          enable: u,
          hit: function () {
            return false;
          },
          sample_rate: 0,
          effectiveSampleRate: 0
        };
      }
    });
    return a;
  }
  function es(e, t, r, n, i) {
    if (!t) {
      return N;
    }
    var o = t.sample_rate;
    var a = t.include_users;
    var s = t.sample_granularity;
    var c = t.rules;
    var u = t.r;
    var l = u === undefined ? Math.random() : u;
    if (F(a, e)) {
      return function (e) {
        return et(e, 1);
      };
    }
    var f = s === "session";
    var d = er(f, o, r, l, n);
    var h = ea(c, f, o, r, l, n);
    return function (e) {
      if (!d()) {
        if (f) {
          i[0]();
        }
        return false;
      }
      if (!(e.ev_type in h)) {
        return et(e, o);
      }
      if (!h[e.ev_type].enable) {
        if (f) {
          i[1](e.ev_type);
        }
        return false;
      }
      if (e.common?.sample_rate) {
        return e;
      }
      var r = h[e.ev_type];
      var n = r.conditional_hit_rules;
      if (n) {
        for (var a = 0; a < n.length; a++) {
          if (eo(e, n[a].filter)) {
            if (n[a].hit()) {
              return et(e, n[a].effectiveSampleRate);
            }
            return false;
          }
        }
      }
      if (r.hit()) {
        return et(e, r.effectiveSampleRate);
      } else {
        if ((!n || !n.length) && f) {
          i[1](e.ev_type);
        }
        return false;
      }
    };
  }
  var ec = {
    build: function (e) {
      return {
        ev_type: e.ev_type,
        payload: e.payload,
        common: I(I({}, e.extra || {}), e.overrides || {})
      };
    }
  };
  var eu = {
    sample_rate: 1,
    include_users: [],
    sample_granularity: "session",
    rules: {}
  };
  function el(e) {
    return I({}, e);
  }
  function ef(e) {
    return x(e) && "bid" in e && "transport" in e;
  }
  function ed(e) {
    return I({}, e);
  }
  function eh(e) {
    var t;
    var r;
    var n = e;
    var i = {};
    var o = P;
    var a = P;
    return {
      getConfig: function () {
        return n;
      },
      setConfig: function (e) {
        i = I(I({}, i), e || {});
        s();
        if (!t) {
          t = e;
          if (n.useLocalConfig || !n.bid) {
            r = {};
            o();
          } else {
            (function (e, t, r, n) {
              var i;
              if (!e.get) {
                return n({});
              }
              e.get({
                withCredentials: true,
                url: (i === undefined && (i = "/monitor_web/settings/browser-settings"), (t && t.indexOf("//") >= 0 ? "" : "https://") + t + i + "?bid=" + r + "&store=1"),
                success: function (e) {
                  n(e.data || {});
                },
                fail: function () {
                  n({
                    sample: {
                      sample_rate: 0.001
                    }
                  });
                }
              });
            })(n.transport, n.domain, n.bid, function (e) {
              r = function (e) {
                if (!e) {
                  return {};
                }
                var t = e.sample;
                var r = e.timestamp;
                var n = e.quota_rate;
                if (!t) {
                  return {};
                }
                var i = t.sample_rate;
                var o = t.sample_granularity;
                var a = t.include_users;
                var s = t.rules;
                return {
                  sample: {
                    include_users: a,
                    sample_rate: i * (n === undefined ? 1 : n),
                    sample_granularity: o === undefined ? "session" : o,
                    rules: (s === undefined ? [] : s).reduce(function (e, t) {
                      var r = t.name;
                      var n = t.enable;
                      var i = t.sample_rate;
                      var o = t.conditional_sample_rules;
                      e[r] = {
                        enable: n,
                        sample_rate: i,
                        conditional_sample_rules: o
                      };
                      return e;
                    }, {})
                  },
                  serverTimestamp: r
                };
              }(e);
              s();
              o();
            });
          }
        }
        return n;
      },
      onChange: function (e) {
        a = e;
      },
      onReady: function (e) {
        o = e;
        if (r) {
          o();
        }
      }
    };
    function s() {
      var t = I(I(I({}, e), r || {}), i);
      t.sample = ep(ep(e.sample, r == null ? undefined : r.sample), i.sample);
      n = t;
      a();
    }
  }
  function ep(e, t) {
    if (!e || !t) {
      return e || t;
    }
    var r = I(I({}, e), t);
    r.include_users = L(L([], C(e.include_users || []), false), C(t.include_users || []), false);
    r.rules = L(L([], C(Object.keys(e.rules || {})), false), C(Object.keys(t.rules || {})), false).reduce(function (r, n) {
      if (!(n in r)) {
        if (n in (e.rules || {}) && n in (t.rules || {})) {
          r[n] = I(I({}, e.rules[n]), t.rules[n]);
          r[n].conditional_sample_rules = L(L([], C(e.rules[n].conditional_sample_rules || []), false), C(t.rules[n].conditional_sample_rules || []), false);
        } else {
          r[n] = e.rules?.[n] || t.rules?.[n];
        }
      }
      return r;
    }, {});
    return r;
  }
  function eg(e, t) {
    var r = {
      url: "",
      protocol: "",
      domain: "",
      path: "",
      query: "",
      timestamp: Date.now(),
      sdk_version: t.version || "1.5.1",
      sdk_name: t.name || "SDK_BASE"
    };
    return I(I({}, e), {
      extra: I(I({}, r), e.extra || {})
    });
  }
  function ev(e) {
    e.on("report", function (t) {
      return eg(t, e.config());
    });
  }
  function em(e, t) {
    var r = {
      bid: t.bid,
      pid: t.pid,
      view_id: t.viewId,
      user_id: t.userId,
      device_id: t.deviceId,
      session_id: t.sessionId,
      release: t.release,
      env: t.env
    };
    return I(I({}, e), {
      extra: I(I({}, r), e.extra || {})
    });
  }
  function ey(e) {
    e.on("beforeBuild", function (t) {
      return em(t, e.config());
    });
  }
  function eb(e) {
    return {
      bid: "",
      pid: "",
      viewId: "__" + Date.now(),
      userId: z(),
      deviceId: z(),
      sessionId: z(),
      domain: "mon.zijieapi.com",
      release: "",
      env: "production",
      sample: eu,
      plugins: {},
      transport: {
        get: P,
        post: P
      },
      useLocalConfig: true
    };
  }
  if (g === undefined) {
    g = {};
  }
  (function (e) {
    e.on("start", function () {
      var t = e.config();
      var r = es(t.userId, t.sample, $, W, [function () {
        e.destroy();
      }, function (t) {
        e.destroyAgent.removeByEvType(t);
      }]);
      e.on("build", r);
    });
  })((u = (c = (s = (a = g) === undefined ? {} : a).createSender) === undefined ? function (e) {
    var t;
    var r;
    return function (e) {
      var t;
      var r = e.transport;
      var n = e.endpoint;
      var i = e.size;
      var o = i === undefined ? 10 : i;
      var a = e.wait;
      var s = a === undefined ? 1000 : a;
      var c = [];
      var u = 0;
      function l() {
        if (c.length) {
          var e = this.getBatchData();
          r.post({
            url: n,
            data: e,
            fail: function (r) {
              if (t) {
                t(r, e);
              }
            }
          });
          c = [];
        }
      }
      return {
        getSize: function () {
          return o;
        },
        getWait: function () {
          return s;
        },
        setSize: function (e) {
          o = e;
        },
        setWait: function (e) {
          s = e;
        },
        getEndpoint: function () {
          return n;
        },
        setEndpoint: function (e) {
          n = e;
        },
        send: function (e) {
          c.push(e);
          if (c.length >= o) {
            l.call(this);
          }
          clearTimeout(u);
          u = setTimeout(l.bind(this), s);
        },
        flush: function () {
          clearTimeout(u);
          l.call(this);
        },
        getBatchData: function () {
          if (c.length) {
            return JSON.stringify({
              ev_type: "batch",
              list: c
            });
          } else {
            return "";
          }
        },
        clear: function () {
          clearTimeout(u);
          c = [];
        },
        fail: function (e) {
          t = e;
        }
      };
    }({
      size: 20,
      endpoint: (t = e.domain, r === undefined && (r = "/monitor_browser/collect/batch/"), (t && t.indexOf("//") >= 0 ? "" : "https://") + t + r),
      transport: e.transport
    });
  } : c, l = s.builder, q(d = function (e) {
    var t;
    var r;
    var n;
    var i;
    var o;
    var a;
    var s = e.builder;
    var c = e.createSender;
    var u = e.createDefaultConfig;
    var l = e.createConfigManager;
    var f = e.userConfigNormalizer;
    var d = e.initConfigNormalizer;
    var h = e.validateInitConfig;
    var p = {};
    T.forEach(function (e) {
      return p[e] = [];
    });
    var g = false;
    var v = false;
    var m = false;
    var y = [];
    var b = [];
    t = false;
    r = {};
    n = function (e) {
      if (e.length) {
        e.forEach(function (e) {
          try {
            e();
          } catch (e) {}
        });
      }
      e.length = 0;
    };
    var _ = {
      set: function (e, i, o) {
        if (r[e]) {
          r[e].push([i, o]);
        } else {
          r[e] = [[i, o]];
        }
        if (t) {
          n(o);
        }
      },
      has: function (e) {
        return !!r[e];
      },
      remove: i = function (e) {
        if (r[e]) {
          r[e].forEach(function (e) {
            n(e[1]);
          });
        }
        r[e] = undefined;
      },
      removeByEvType: function (e) {
        Object.keys(r).forEach(function (t) {
          if (r[t]) {
            r[t].forEach(function (t) {
              if (t[0] === e) {
                n(t[1]);
              }
            });
          }
        });
      },
      clear: function () {
        t = true;
        Object.keys(r).forEach(function (e) {
          i(e);
        });
      }
    };
    var E = {
      getBuilder: function () {
        return s;
      },
      getSender: function () {
        return o;
      },
      getPreStartQueue: function () {
        return y;
      },
      init: function (e) {
        if (g) {
          G("already inited");
          return;
        }
        if (e && x(e) && h(e)) {
          var t = u(e);
          if (!t) {
            throw Error("defaultConfig missing");
          }
          var r = d(e);
          (a = l(t)).setConfig(r);
          a.onChange(function () {
            w("config");
          });
          if (!(o = c(a.getConfig()))) {
            throw Error("sender missing");
          }
          g = true;
          w("init", true);
        } else {
          throw Error("invalid InitConfig, init failed");
        }
      },
      set: function (e) {
        if (g && e && x(e)) {
          w("beforeConfig", false, e);
          if (a != null) {
            a.setConfig(e);
          }
        }
      },
      config: function (e) {
        if (g) {
          if (e && x(e)) {
            w("beforeConfig", false, e);
            if (a != null) {
              a.setConfig(f(e));
            }
          }
          if (a == null) {
            return undefined;
          } else {
            return a.getConfig();
          }
        }
      },
      provide: function (e, t) {
        if (F(b, e)) {
          G("cannot provide " + e + ", reserved");
          return;
        }
        E[e] = t;
        w("provide", false, e);
      },
      start: function () {
        var e = this;
        if (g && !v) {
          if (a != null) {
            a.onReady(function () {
              v = true;
              w("start", true);
              y.forEach(function (t) {
                return e.build(t);
              });
              y.length = 0;
            });
          }
        }
      },
      report: function (e) {
        if (e) {
          var t = V(p.beforeReport)(e);
          if (t) {
            var r = V(p.report)(t);
            if (r) {
              if (v) {
                this.build(r);
              } else {
                y.push(r);
              }
            }
          }
        }
      },
      build: function (e) {
        if (!v) {
          return;
        }
        var t = V(p.beforeBuild)(e);
        if (t) {
          var r = s.build(t);
          if (r) {
            var n = V(p.build)(r);
            if (n) {
              this.send(n);
            }
          }
        }
      },
      send: function (e) {
        if (v) {
          var t = V(p.beforeSend)(e);
          if (t) {
            o.send(t);
            w("send", false, t);
          }
        }
      },
      destroy: function () {
        _.clear();
        m = true;
        y.length = 0;
        w("beforeDestroy", true);
      },
      on: function (e, t) {
        if (e === "init" && g || e === "start" && v || e === "beforeDestroy" && m) {
          try {
            t();
          } catch (e) {}
        } else if (p[e]) {
          p[e].push(t);
        }
      },
      off: function (e, t) {
        p[e] &&= U(p[e], t);
      },
      destroyAgent: _
    };
    b = Object.keys(E);
    return E;
    function w(e, t = false) {
      var r = [];
      var n = 2;
      for (; n < arguments.length; n++) {
        r[n - 2] = arguments[n];
      }
      p[e].forEach(function (e) {
        try {
          e.apply(undefined, L([], C(r), false));
        } catch (e) {}
      });
      if (t) {
        p[e].length = 0;
      }
    }
  }({
    validateInitConfig: ef,
    initConfigNormalizer: el,
    userConfigNormalizer: ed,
    createSender: u,
    builder: l === undefined ? ec : l,
    createDefaultConfig: (f = s.createDefaultConfig) === undefined ? eb : f,
    createConfigManager: eh
  })), ey(d), ev(d), !function (e, t) {
    e.on("init", function () {
      var t = [];
      function r(r) {
        r.forEach(function (r) {
          var n = r.name;
          if (!F(t, n)) {
            t.push(n);
            r.setup(e);
            e.destroyAgent.set(n, n, [function () {
              t = U(t, n);
              if (r.tearDown) {
                r.tearDown();
              }
            }]);
          }
        });
      }
      e.provide("applyIntegrations", r);
      var n = e.config();
      if (n && n.integrations) {
        r(n.integrations);
      }
    });
  }(d), v = d));
  (h = v).provide("sendEvent", function (e) {
    var t = Q(e);
    if (t) {
      h.report({
        ev_type: Z,
        payload: t,
        extra: {
          timestamp: X()
        }
      });
    }
  });
  h.provide("sendLog", function (e) {
    var t = ee(e);
    if (t) {
      h.report({
        ev_type: Z,
        payload: t,
        extra: {
          timestamp: X()
        }
      });
    }
  });
  var e_ = v;
  let eE = e => typeof e == "function";
  let ew = function () {};
  let eS = () => {
    if (eE(XMLHttpRequest)) {
      return XMLHttpRequest;
    }
  };
  let eO = (e, t, r) => {
    let {
      url: n,
      data: i,
      success: o = ew,
      fail: a = ew,
      getResponseText: s = ew,
      withCredentials: c = false
    } = t;
    let u = new r();
    u.withCredentials = c;
    u.open(e, n, true);
    u.setRequestHeader("Content-Type", "application/json");
    u.onload = function () {
      if (s != null) {
        s(this.responseText);
      }
      try {
        if (this.responseText) {
          let e = JSON.parse(this.responseText);
          o(e);
        } else {
          o({});
        }
      } catch (e) {
        a(e);
      }
    };
    u.onerror = function () {
      a(Error("Network request failed"));
    };
    u.onabort = function () {
      a(Error("Network request aborted"));
    };
    u.send(i);
  };
  let eA = () => {
    let e = eS();
    if (e) {
      return {
        get(t) {
          eO("GET", t, e);
        },
        post(t) {
          eO("POST", t, e);
        }
      };
    } else {
      return {
        get: ew,
        post: ew
      };
    }
  };
  function eD(e, t, r) {
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
  class eI {
    sendEvents(e) {
      if (!e.length) {
        return;
      }
      let t = e.map(e => this.buildEvent(e[0], e[1]));
      this.sendEventsWithReadyCheck(t);
    }
    sendLogs(e) {
      if (!e.length) {
        return;
      }
      let t = e.map(e => this.buildLog(e));
      this.sendLogsWithReadyCheck(t);
    }
    async slardarInit(e) {
      let t = "";
      if (this.uid) {
        t = await cryptoHashUtils.generateSignature(this.uid);
      }
      e_.on("beforeSend", e => ({
        ...e,
        common: {
          ...e.common,
          ...(typeof window == "object" && window.location ? {
            url: location.href,
            protocol: location.protocol.slice(0, -1),
            domain: location.hostname,
            path: location.pathname,
            query: location.search.substring(1)
          } : {})
        }
      }));
      let r = eA();
      await e_.init({
        transport: r,
        userId: t,
        bid: e.bid,
        release: e.version,
        env: e.env,
        domain: e.domain
      });
      e_.start();
    }
    buildEvent(e, {
      category: t,
      metrics: r
    } = {}) {
      return {
        name: e,
        metrics: function (e) {
          let t = {};
          Object.keys(e).forEach(r => t[r] = Number(e[r]));
          return t;
        }(r),
        categories: function (e) {
          let t = {};
          Object.keys(e).forEach(r => t[r] = String(e[r]));
          return t;
        }(t)
      };
    }
    buildLog(e) {
      return {
        extra: {
          ...e.context,
          stack: e.stack || ""
        },
        content: e.message,
        level: e.context?.level
      };
    }
    sendPrecollect() {
      if (this.ready) {
        if (this.precollectEvents.length !== 0) {
          this.sendEventsWithReadyCheck(this.precollectEvents);
          this.precollectEvents.splice(0);
        }
        if (this.precollectLogs.length !== 0) {
          this.sendLogsWithReadyCheck(this.precollectLogs);
          this.precollectLogs.splice(0);
        }
      }
    }
    sendEventsWithReadyCheck(e) {
      if (e.length) {
        if (this.ready) {
          e.forEach(e => {
            var t;
            if ((t = e_.sendEvent) !== null && t !== undefined) {
              t.call(e_, e);
            }
          });
        } else {
          this.precollectEvents = [...this.precollectEvents, ...e];
        }
      }
    }
    sendLogsWithReadyCheck(e) {
      if (e.length) {
        if (this.ready) {
          e.forEach(e => {
            var t;
            if ((t = e_.sendLog) !== null && t !== undefined) {
              t.call(e_, e);
            }
          });
        } else {
          this.precollectLogs = [...this.precollectLogs, ...e];
        }
      }
    }
    constructor(e) {
      eD(this, "ready", undefined);
      eD(this, "precollectEvents", []);
      eD(this, "precollectLogs", []);
      eD(this, "uid", undefined);
      if (e.hasOwnProperty("region")) {
        noopArgumentHelper.noopHelper("ISlardarArgs.region", "ISlardarArgs.domain", "2.0.0");
      }
      if (!e.domain) {
        throw Error("\"domain\" fields is required!.");
      }
      this.ready = false;
      this.uid = e.uid;
      (async () => {
        try {
          await this.slardarInit(e);
          this.ready = true;
          this.sendPrecollect();
        } catch (e) {}
      })();
    }
  }
  function eC(e, t, r) {
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
  class eL {
    async export(e, t) {
      try {
        if (!e.length || this.stopped) {
          return;
        }
        let r = [];
        let n = [];
        e.forEach(e => {
          if (e.level >= aceLoggerCoreManager.LogLevel.Warn) {
            n.push({
              message: e.message,
              stack: e.stack,
              context: function (e) {
                let t = {};
                Object.keys(e).forEach(r => t[r] = String(e[r]));
                return t;
              }({
                ...e.attributes,
                ...e.data,
                level: e.level,
                type: e.type
              })
            });
          }
          if (e.metrics && Object.keys(e.metrics).length) {
            r.push([e.attributes.spanName, {
              category: e.attributes,
              metrics: e.metrics,
              context: {
                ...e.data,
                status: e.status
              }
            }]);
          }
        });
        this.slardar.sendEvents(r);
        this.slardar.sendLogs(n);
        t(aceLoggerCoreManager.StatusCode.SUCCESS);
      } catch (e) {}
    }
    shutdown() {
      this.stopped = true;
    }
    constructor(e) {
      eC(this, "slardar", undefined);
      eC(this, "stopped", false);
      this.slardar = new eI(e);
    }
  }
  var indexedDbStorageUtils = require("indexed-db-storage-utils") /*id: 408621*/;
  function eP(e, t, r) {
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
  let eN = "lark_web_core_log_v2";
  let ex = function (e) {
    let t = new Date();
    let [r, n] = [t.getMonth() + 1, t.getDate()].map(e => e < 10 ? `0${e}` : e);
    return `${t.getFullYear()}${r}${n}`;
  }();
  function eR(e) {
    return new Promise((t, r) => {
      e.onsuccess = () => t(e.result);
      e.onerror = () => r(e.error);
    });
  }
  function ej(e) {
    var t;
    var r;
    t = [ex];
    r = t => {
      let [r] = t;
      return e(r);
    };
    return (n ? Promise.resolve(n) : i = i || indexedDbStorageUtils.openIndexedDb(eN).then(e => {
      if (!e.objectStoreNames.contains(ex)) {
        let t = e.version + 1;
        e.close();
        return indexedDbStorageUtils.openIndexedDb(eN, t, e => {
          e.createObjectStore(ex, {
            keyPath: "id",
            autoIncrement: true
          });
          Array.from(e.objectStoreNames).sort((e, t) => e > t ? -1 : 1).forEach((t, r) => {
            if (r >= 7) {
              e.deleteObjectStore(t);
            }
          });
        });
      }
      return e;
    }).then(e => n = e)).then(e => new Promise((n, i) => {
      let o = e.transaction(t, "readwrite");
      o.onabort = () => i(o.error);
      o.onerror = () => i(o.error);
      r(t.map(e => o.objectStore(e))).then(n, i);
    }));
  }
  class ek {
    async export(e, t) {
      try {
        if (!e.length || this.stopped) {
          return;
        }
        this.length ||= await ej(e => eR(e.count()));
        await ej(t => {
          let r = [];
          if (this.length >= this.limit) {
            e.push({
              name: "DBError",
              type: aceLoggerCoreManager.LogType.Log,
              level: aceLoggerCoreManager.LogLevel.Warn,
              traceFlags: e[0].traceFlags,
              status: aceLoggerCoreManager.CanonicalCode.OUT_OF_RANGE,
              message: `\u{65E5}\u{5FD7}\u{8D85}\u{51FA}\u{4E86}\u{6BCF}\u{65E5}\u{6570}\u{91CF}\u{9650}\u{5236}\u{FF0C}${this.limit}`,
              attributes: e[0].attributes,
              data: e[0].data,
              time: Date.now()
            });
            if (this.onLimited) {
              this.onLimited(this.length);
            }
          }
          for (let n = 0; n < e.length; n++) {
            let i = {
              ...e[n],
              time: new Date().toISOString()
            };
            r.push(eR(t.add(i)));
            this.length++;
          }
          return Promise.all(r);
        });
        t(aceLoggerCoreManager.StatusCode.SUCCESS);
      } catch (e) {}
    }
    shutdown() {
      this.stopped = true;
    }
    constructor(e) {
      eP(this, "onLimited", undefined);
      eP(this, "length", 0);
      eP(this, "limit", 100000);
      eP(this, "stopped", false);
      if (e && e.limit) {
        this.limit = e.limit;
      }
      if (e && e.onLimited) {
        this.onLimited = e.onLimited;
      }
    }
  }
  function eM(e, t, r) {
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
  class eF {
    reportEvent(e) {
      fetch(this.reportURL, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        mode: "cors",
        body: JSON.stringify(e)
      });
    }
    constructor(e) {
      eM(this, "options", undefined);
      eM(this, "reportURL", undefined);
      this.options = e;
      this.reportURL = this.options.reportURL;
    }
  }
  let eU = e => `__lite_tea_cache_token_${e}`;
  async function eK(e, t, r) {
    let n = eU(t);
    let i = localStorage.getItem(n);
    if (i) {
      try {
        let {
          web_id: e,
          ssid: t,
          timestamp: o,
          user_unique_id: a
        } = JSON.parse(i);
        if (Date.now() - o < 777600000 && r === a) {
          localStorage.setItem(n, JSON.stringify({
            web_id: e,
            ssid: t,
            user_unique_id: r,
            timestamp: Date.now()
          }));
          return {
            web_id: e,
            ssid: t
          };
        }
      } catch (e) {}
    }
    let o = `${e}/v1/user/webid`;
    let a = await fetch(o, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "post",
      mode: "cors",
      body: JSON.stringify({
        app_id: t,
        referer: document.referrer,
        url: location.href,
        user_agent: navigator.userAgent,
        user_unique_id: ""
      })
    });
    let {
      web_id: s
    } = await a.json();
    let c = `${e}/v1/user/ssid`;
    let u = await fetch(c, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "post",
      mode: "cors",
      body: JSON.stringify({
        app_id: t,
        web_id: s,
        user_unique_id: r
      })
    });
    let {
      ssid: l
    } = await u.json();
    localStorage.setItem(n, JSON.stringify({
      web_id: s,
      ssid: l,
      user_unique_id: r,
      timestamp: Date.now()
    }));
    return {
      web_id: s,
      ssid: l
    };
  }
  function eB(e, t, r) {
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
  class eH {
    track(e, t) {
      this.batchTrack([[e, t]]);
    }
    batchTrack(e) {
      if (!this.enable || !e.length) {
        return;
      }
      let t = e.map(e => this._buildEvent(e[0], e[1]));
      if (this.ready) {
        let e = [{
          events: [...t],
          header: this.header,
          user: this.user
        }];
        setTimeout(() => this.reporter.reportEvent(e), this.report_delay);
      } else {
        this.precollectEvents = [...this.precollectEvents, ...t];
      }
    }
    _buildEvent(e, t) {
      return {
        event: e,
        params: JSON.stringify({
          ...t,
          _staging_flag: this.options._staging_flag || 0,
          event_index: eG()
        }),
        local_time_ms: Date.now()
      };
    }
    _reportPrecollectEvents() {
      if (this.precollectEvents.length === 0) {
        return;
      }
      let e = [{
        events: this.precollectEvents,
        header: this.header,
        user: this.user
      }];
      setTimeout(() => {
        this.reporter.reportEvent(e);
        this.precollectEvents.splice(0);
      }, this.report_delay);
    }
    constructor(e) {
      var t;
      eB(this, "header", undefined);
      eB(this, "reporter", undefined);
      eB(this, "ready", undefined);
      eB(this, "precollectEvents", []);
      eB(this, "report_delay", undefined);
      eB(this, "uid", undefined);
      eB(this, "enable", true);
      eB(this, "user", {});
      eB(this, "env", "");
      eB(this, "options", undefined);
      if (e.hasOwnProperty("channel")) {
        noopArgumentHelper.noopHelper("ITeaArgs.channel", "ITeaArgs.domain", "2.0.0");
      }
      if (!e.domain) {
        throw Error("\"domain\" field is required!");
      }
      this.ready = false;
      this.report_delay = e.report_delay || 100;
      this.uid = e.uid;
      this.env = e.env || "production";
      this.enable = e.hasOwnProperty("enable") ? !!e.enable : this.env === "production";
      let {
        header: r,
        app_id: n
      } = e;
      let i = Object.assign({}, r && r.custom || {}, {
        platform: S(),
        sub_platform: O()
      });
      this.header = Object.assign(A(), r, {
        app_id: n,
        custom: JSON.stringify(i)
      });
      this.options = e;
      this.reporter = new eF({
        reportURL: (t = this.options.domain, `${t}/v1/list`)
      });
      (async () => {
        try {
          if (!this.enable) {
            return;
          }
          if (this.uid) {
            this.user.user_unique_id = await cryptoHashUtils.generateSignature(this.uid || uuidV4Generator.generateUuid());
          }
          let {
            web_id: e,
            ssid: t
          } = await eK(this.options.domain, this.options.app_id, this.user.user_unique_id);
          this.user.web_id = e;
          this.user.ssid = t;
          this.ready = true;
          this._reportPrecollectEvents();
        } catch (e) {}
      })();
    }
  }
  o = Number(Date.now()) + Number(`${Math.random()}`.slice(2, 8));
  let eG = () => o += 1;
  function e$(e, t, r) {
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
  class eW {
    async export(e, t) {
      try {
        if (!e.length || this.stopped) {
          return;
        }
        let r = e.filter(e => e.type === aceLoggerCoreManager.LogType.Event || e.type === aceLoggerCoreManager.LogType.Tracing && e.name.endsWith("start")).map(e => [e.name, {
          ...e.attributes,
          ...e.data
        }]);
        this.tea.batchTrack(r);
        t(aceLoggerCoreManager.StatusCode.SUCCESS);
      } catch (e) {}
    }
    shutdown() {
      this.stopped = true;
    }
    constructor(e) {
      e$(this, "tea", undefined);
      e$(this, "stopped", false);
      this.tea = new eH(e);
    }
  }
  function eV(e = {}) {
    let t = new aceLoggerCoreManager.LoggerManager({
      flushDelay: e.flushDelay
    });
    t.logger.setAttributes({
      lib: "@lark/web-core@1.2.1",
      logger: "lark-web-core",
      ...e.attributes
    });
    t.setExporter(aceLoggerCoreManager.LogLevel.Debug, new ek({
      limit: e.dblimit,
      onLimited: e.onDBLimited
    }));
    if (e && e.debug) {
      t.setExporter(aceLoggerCoreManager.LogLevel.Debug, new aceLoggerCoreManager.ConsoleExporter());
    }
    if (e.name) {
      return t.logger.startSpan(e.name);
    } else {
      return t.logger;
    }
  }
  var ez = eV();
  require.d(exports, {
    CanonicalCode: function () {
      return aceLoggerCoreManager.CanonicalCode;
    },
    EventTeaExporter: function () {
      return eW;
    },
    LogSlardarExporter: function () {
      return eL;
    },
    coreLoggerInstance: function () {
      return ez;
    },
    createLoggerManager: function () {
      return eV;
    },
    IndexedDbExporter: function () {
      return ek;
    }
  });
}