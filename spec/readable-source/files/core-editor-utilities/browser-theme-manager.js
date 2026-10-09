// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DY' to 'getThemeMode'
// - Renamed export 'Ni' to 'ThemeContext'
// - Renamed export 'V9' to 'registerThemeCallback'
// - Renamed export 'f8' to 'ThemeMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 542418
         */
module.exports = function (module, exports, require) {
  let n;
  let o;
  let a;
  var i;
  var c;
  var s;
  var l;
  var u;
  var d;
  var f;
  var g;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  (i = u ||= {}).LIGHT = "LIGHT";
  i.DARK = "DARK";
  (c = d ||= {}).ALL_DARK = "all-dark";
  c.ALL_LIGHT = "all-light";
  c.CONTENT_LIGHT = "content-light";
  (s = f ||= {}).LIGHT = "(prefers-color-scheme: light)";
  s.DARK = "(prefers-color-scheme: dark)";
  (l = g ||= {}).LIGHT = "(aha-content-prefers-color-scheme: aha-content-light)";
  l.DARK = "(aha-content-prefers-color-scheme: aha-content-dark)";
  let h = browserEnvDetectionUtil.browserDetector.isLark && !browserEnvDetectionUtil.browserDetector.isMobile && !browserEnvDetectionUtil.browserDetector.isIPad && !browserEnvDetectionUtil.browserDetector.isLKP && !browserEnvDetectionUtil.browserDetector.isFeishuRooms;
  let m = browserEnvDetectionUtil.browserDetector.isBytedanceApp && (browserEnvDetectionUtil.browserDetector.isMobile || browserEnvDetectionUtil.browserDetector.isIPad);
  let w = browserEnvDetectionUtil.browserDetector.isPcWeb;
  let E = "theme";
  let k = "contentTheme";
  let v = "__theme__";
  let x = A(T(), "7.0");
  function y(e) {
    let t = null;
    if (window.matchMedia && x && h) {
      if (e === E) {
        if (window.matchMedia(f.LIGHT).matches) {
          t = u.LIGHT;
        } else if (window.matchMedia(f.DARK).matches) {
          t = u.DARK;
        }
      } else if (e === k) {
        if (window.matchMedia(g.LIGHT).matches) {
          t = u.LIGHT;
        } else if (window.matchMedia(g.DARK).matches) {
          t = u.DARK;
        }
      }
    }
    return t;
  }
  function _(e, t) {
    return h && function (e) {
      let t = {};
      let r = /(?:\?([^#]*))?(?:#(.*))?$/.exec(e);
      if (r && r[1]) {
        r[1].split("&").forEach(e => {
          let [r, n] = e.split("=");
          if (n) {
            t[r] = n;
          }
        });
      }
      return t;
    }(e)[t] || "";
  }
  function T() {
    if (typeof window == "undefined") {
      return "";
    }
    let e = (window.navigator.userAgent || "").match(/Lark\/([0-9.]+)/i);
    if (e && e.length >= 2) {
      return e[1];
    } else {
      return "";
    }
  }
  function A(e = "", t = "") {
    let r = e.split(".");
    let n = t.split(".");
    let o = Math.max(r.length, n.length);
    for (let e = 0; e < o; e++) {
      let t = r[e];
      let o = n[e];
      if (!o) {
        break;
      }
      if (!t) {
        return false;
      }
      let a = Number(t);
      let i = Number(o);
      if (a < i) {
        return false;
      }
      if (a > i) {
        break;
      }
    }
    return true;
  }
  let O = A(T(), "5.3");
  let B = !!N() || (browserEnvDetectionUtil.browserDetector.isFeishuRooms ? browserEnvDetectionUtil.browserDetector.isDocComponent() : h ? O : !!m || !!w) || false;
  function N() {
    return browserEnvDetectionUtil.browserDetector.isLarkPcTab;
  }
  let R = {};
  function C(e) {
    if (e.toLowerCase() === "dark") {
      return {
        mode: u.DARK,
        vars: {}
      };
    } else {
      return {
        mode: u.LIGHT,
        vars: {}
      };
    }
  }
  function S(e) {
    let t = Math.random().toString(36).slice(-6);
    if (e) {
      R[t] = e;
    }
    return () => {
      R[t] = null;
      delete R[t];
    };
  }
  let G = false;
  let I = false;
  let F = new Map();
  if (typeof window != "undefined") {
    (window[v] || "").toLowerCase();
  }
  let D = u.LIGHT;
  let L = reactCoreLibraryReexport.createContext(typeof window == "undefined" ? {} : function (e) {
    let t = P() || D;
    if (F.has(t)) {
      return F.get(t);
    }
    if (a && a[t]) {
      let e = Object.assign(Object.assign({}, a && a[t]), {
        theme: t.toLowerCase()
      });
      F.set(t, e);
      return e;
    }
    return {};
  }());
  function P() {
    if ((B ? (G || (function (e) {
      if (B) {
        let t = y(E) || _(window.location.href, E) || window[v] || "";
        e(t.toLowerCase() === "dark" || t.toLowerCase() === "light" ? C(t) : (m || h) && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? C("dark") : C("light") : t.toLowerCase() === "system" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? C("dark") : C("light"));
      } else {
        e(C("light"));
      }
    }(e => {
      n = e.mode.toUpperCase();
    }), G = true), n || u.LIGHT) : u.LIGHT) === u.DARK) {
      if ((B && h && !N() ? (I || (o = (y(k) || _(window.location.href, k) || u.DARK).toUpperCase(), I = true), o || u.DARK) : u.DARK) === u.LIGHT) {
        return u.LIGHT;
      } else {
        return u.DARK;
      }
    } else {
      return u.LIGHT;
    }
  }
  require.d(exports, {
    getThemeMode: function () {
      return P;
    },
    ThemeContext: function () {
      return L;
    },
    registerThemeCallback: function () {
      return S;
    },
    ThemeMode: function () {
      return u;
    }
  });
}