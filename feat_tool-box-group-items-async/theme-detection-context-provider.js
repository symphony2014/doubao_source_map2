// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DY' to 'getCurrentTheme'
// - Renamed export 'Ni' to 'ThemeContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 464683
         */
module.exports = function (module, exports, require) {
  let r;
  let s;
  let o;
  var T;
  var M;
  var I;
  var n;
  var N;
  var L;
  var a;
  var A;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  (T = N ||= {}).LIGHT = "LIGHT";
  T.DARK = "DARK";
  (M = L ||= {}).ALL_DARK = "all-dark";
  M.ALL_LIGHT = "all-light";
  M.CONTENT_LIGHT = "content-light";
  (I = a ||= {}).LIGHT = "(prefers-color-scheme: light)";
  I.DARK = "(prefers-color-scheme: dark)";
  (n = A ||= {}).LIGHT = "(aha-content-prefers-color-scheme: aha-content-light)";
  n.DARK = "(aha-content-prefers-color-scheme: aha-content-dark)";
  let D = browserEnvDetectionUtil.browserDetector.isLark && !browserEnvDetectionUtil.browserDetector.isMobile && !browserEnvDetectionUtil.browserDetector.isIPad && !browserEnvDetectionUtil.browserDetector.isLKP && !browserEnvDetectionUtil.browserDetector.isFeishuRooms;
  let c = browserEnvDetectionUtil.browserDetector.isBytedanceApp && (browserEnvDetectionUtil.browserDetector.isMobile || browserEnvDetectionUtil.browserDetector.isIPad);
  let l = browserEnvDetectionUtil.browserDetector.isPcWeb;
  let u = "theme";
  let S = "contentTheme";
  let j = "__theme__";
  let C = R(h(), "7.0");
  function g(e) {
    let i = null;
    if (window.matchMedia && C && D) {
      if (e === u) {
        if (window.matchMedia(a.LIGHT).matches) {
          i = N.LIGHT;
        } else if (window.matchMedia(a.DARK).matches) {
          i = N.DARK;
        }
      } else if (e === S) {
        if (window.matchMedia(A.LIGHT).matches) {
          i = N.LIGHT;
        } else if (window.matchMedia(A.DARK).matches) {
          i = N.DARK;
        }
      }
    }
    return i;
  }
  function d(e, i) {
    return D && function (e) {
      let i = {};
      let E = /(?:\?([^#]*))?(?:#(.*))?$/.exec(e);
      if (E && E[1]) {
        E[1].split("&").forEach(e => {
          let [E, r] = e.split("=");
          if (r) {
            i[E] = r;
          }
        });
      }
      return i;
    }(e)[i] || "";
  }
  function h() {
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
  function R(e = "", i = "") {
    let E = e.split(".");
    let r = i.split(".");
    let s = Math.max(E.length, r.length);
    for (let e = 0; e < s; e++) {
      let i = E[e];
      let s = r[e];
      if (!s) {
        break;
      }
      if (!i) {
        return false;
      }
      let o = Number(i);
      let T = Number(s);
      if (o < T) {
        return false;
      }
      if (o > T) {
        break;
      }
    }
    return true;
  }
  let y = R(h(), "5.3");
  let m = !!x() || (browserEnvDetectionUtil.browserDetector.isFeishuRooms ? browserEnvDetectionUtil.browserDetector.isDocComponent() : D ? y : !!c || !!l) || false;
  function x() {
    return browserEnvDetectionUtil.browserDetector.isLarkPcTab;
  }
  function w(e) {
    if (e.toLowerCase() === "dark") {
      return {
        mode: N.DARK,
        vars: {}
      };
    } else {
      return {
        mode: N.LIGHT,
        vars: {}
      };
    }
  }
  let P = false;
  let p = false;
  let z = new Map();
  if (typeof window != "undefined") {
    (window[j] || "").toLowerCase();
  }
  let f = N.LIGHT;
  let v = reactCoreLibraryReexport.createContext(typeof window == "undefined" ? {} : function (e) {
    let i = U() || f;
    if (z.has(i)) {
      return z.get(i);
    }
    if (o && o[i]) {
      let e = Object.assign(Object.assign({}, o && o[i]), {
        theme: i.toLowerCase()
      });
      z.set(i, e);
      return e;
    }
    return {};
  }());
  function U() {
    if ((m ? (P || (function (e) {
      if (m) {
        let i = g(u) || d(window.location.href, u) || window[j] || "";
        e(i.toLowerCase() === "dark" || i.toLowerCase() === "light" ? w(i) : (c || D) && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? w("dark") : w("light") : i.toLowerCase() === "system" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? w("dark") : w("light"));
      } else {
        e(w("light"));
      }
    }(e => {
      r = e.mode.toUpperCase();
    }), P = true), r || N.LIGHT) : N.LIGHT) === N.DARK) {
      if ((m && D && !x() ? (p || (s = (g(S) || d(window.location.href, S) || N.DARK).toUpperCase(), p = true), s || N.DARK) : N.DARK) === N.LIGHT) {
        return N.LIGHT;
      } else {
        return N.DARK;
      }
    } else {
      return N.LIGHT;
    }
  }
  require.d(exports, {
    getCurrentTheme: function () {
      return U;
    },
    ThemeContext: function () {
      return v;
    }
  });
}