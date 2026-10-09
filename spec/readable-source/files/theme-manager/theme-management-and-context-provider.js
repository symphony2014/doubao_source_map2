// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'b' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'h' to 'browserEnvDetectionUtil'
// - Resolved require(355358) to 'browser-env-detection-util'
// - Resolved require.e(44598) to 'theme-ui-provider'
// - Resolved require.bind(376390) to 'ui-theme-manager'
// - Resolved require.e(39444) to 'error-codes-enums'
// - Resolved require.e(89676) to 'app-runtime-foundation'
// - Resolved require.bind(784292) to 'runtime-settings-manager'
// - Updated imported property 'ZP' to 'browserDetector' (module 355358)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 829817
         */
module.exports = function (module, exports, require) {
  let n;
  let o;
  let a;
  var i;
  var c;
  var u;
  var l;
  var s;
  var f;
  var d;
  var g;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  function p(t, e, r, n) {
    return new (r ||= Promise)(function (o, a) {
      function i(t) {
        try {
          u(n.next(t));
        } catch (t) {
          a(t);
        }
      }
      function c(t) {
        try {
          u(n.throw(t));
        } catch (t) {
          a(t);
        }
      }
      function u(t) {
        var e;
        if (t.done) {
          o(t.value);
        } else {
          ((e = t.value) instanceof r ? e : new r(function (t) {
            t(e);
          })).then(i, c);
        }
      }
      u((n = n.apply(t, e || [])).next());
    });
  }
  (i = s ||= {}).LIGHT = "LIGHT";
  i.DARK = "DARK";
  (c = f ||= {}).ALL_DARK = "all-dark";
  c.ALL_LIGHT = "all-light";
  c.CONTENT_LIGHT = "content-light";
  (u = d ||= {}).LIGHT = "(prefers-color-scheme: light)";
  u.DARK = "(prefers-color-scheme: dark)";
  (l = g ||= {}).LIGHT = "(aha-content-prefers-color-scheme: aha-content-light)";
  l.DARK = "(aha-content-prefers-color-scheme: aha-content-dark)";
  let w = browserEnvDetectionUtil.browserDetector.isLark && !browserEnvDetectionUtil.browserDetector.isMobile && !browserEnvDetectionUtil.browserDetector.isIPad && !browserEnvDetectionUtil.browserDetector.isLKP && !browserEnvDetectionUtil.browserDetector.isFeishuRooms;
  let _ = browserEnvDetectionUtil.browserDetector.isBytedanceApp && (browserEnvDetectionUtil.browserDetector.isMobile || browserEnvDetectionUtil.browserDetector.isIPad);
  let E = browserEnvDetectionUtil.browserDetector.isPcWeb;
  let m = "theme";
  let T = "contentTheme";
  let k = "__theme__";
  let x = new Map();
  function I() {
    return p(this, undefined, undefined, function* () {
      let t;
      if (!w) {
        return;
      }
      let e = "ui-state";
      if (x.has(e)) {
        return x.get(e);
      }
      try {
        t = yield require.e("theme-ui-provider") /*id: 44598*/.then(require.bind(require, "ui-theme-manager") /*id: 376390*/);
        x.set(e, t);
      } catch (t) {}
      return t;
    });
  }
  let O = y(N(), "7.0");
  function A(t) {
    let e = null;
    if (window.matchMedia && O && w) {
      if (t === m) {
        if (window.matchMedia(d.LIGHT).matches) {
          e = s.LIGHT;
        } else if (window.matchMedia(d.DARK).matches) {
          e = s.DARK;
        }
      } else if (t === T) {
        if (window.matchMedia(g.LIGHT).matches) {
          e = s.LIGHT;
        } else if (window.matchMedia(g.DARK).matches) {
          e = s.DARK;
        }
      }
    }
    return e;
  }
  function R(t, e) {
    return w && S(t)[e] || "";
  }
  function S(t) {
    let e = {};
    let r = /(?:\?([^#]*))?(?:#(.*))?$/.exec(t);
    if (r && r[1]) {
      r[1].split("&").forEach(t => {
        let [r, n] = t.split("=");
        if (n) {
          e[r] = n;
        }
      });
    }
    return e;
  }
  function N() {
    if (typeof window == "undefined") {
      return "";
    }
    let t = (window.navigator.userAgent || "").match(/Lark\/([0-9.]+)/i);
    if (t && t.length >= 2) {
      return t[1];
    } else {
      return "";
    }
  }
  function y(t = "", e = "") {
    let r = t.split(".");
    let n = e.split(".");
    let o = Math.max(r.length, n.length);
    for (let t = 0; t < o; t++) {
      let e = r[t];
      let o = n[t];
      if (!o) {
        break;
      }
      if (!e) {
        return false;
      }
      let a = Number(e);
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
  function B(t, e) {
    let r = S(window.location.href);
    if (r[t]) {
      if (L) {
        r[t] = e.toLowerCase();
      } else {
        delete r[t];
      }
      let n = `${function (t) {
        let e = [];
        Object.keys(t).forEach(r => {
          e.push(`${r}=${t[r]}`);
        });
        return e.join("&");
      }(r)}${window.location.hash}`;
      window.history.replaceState(null, "", n ? `?${n}` : window.location.pathname);
    }
  }
  let D = y(N(), "5.3");
  let L = !!C() || (browserEnvDetectionUtil.browserDetector.isFeishuRooms ? browserEnvDetectionUtil.browserDetector.isDocComponent() : w ? D : !!_ || !!E) || false;
  function G() {
    return L;
  }
  function C() {
    return browserEnvDetectionUtil.browserDetector.isLarkPcTab;
  }
  let v = {};
  function P() {
    return !!R(window.location.href, m);
  }
  function F(t) {
    if (t.toLowerCase() === "dark") {
      return {
        mode: s.DARK,
        vars: {}
      };
    } else {
      return {
        mode: s.LIGHT,
        vars: {}
      };
    }
  }
  function M() {
    return p(this, undefined, undefined, function* () {
      if (w) {
        let t = yield I();
        if (t == null) {
          return undefined;
        } else {
          return t.getCurrentUIState();
        }
      }
      if (_ && window.lark?.biz?.util?.theme) {
        return new Promise(t => {
          window.lark.biz.util.theme({
            callback({
              theme: e
            }) {
              t(F(e));
            }
          });
        });
      } else {
        return Promise.resolve(F("light"));
      }
    });
  }
  function U(t) {
    if (L) {
      let e = A(m) || R(window.location.href, m) || window[k] || "";
      t(e.toLowerCase() === "dark" || e.toLowerCase() === "light" ? F(e) : (_ || w) && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light") : e.toLowerCase() === "system" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light"));
    } else {
      t(F("light"));
    }
  }
  function H(t) {
    let e = Math.random().toString(36).slice(-6);
    if (t) {
      v[e] = t;
    }
    return () => {
      v[e] = null;
      delete v[e];
    };
  }
  function W(t) {
    if (Object.getOwnPropertyNames(t).length > 0 && t.mode) {
      Object.keys(v).forEach(e => {
        if (v.hasOwnProperty(e) && v[e] !== null) {
          let r = Object.assign({}, t);
          r.mode = r.mode.toUpperCase();
          v[e].call(null, r);
        }
      });
    }
  }
  function Z(t) {
    return p(this, undefined, undefined, function* () {
      let e = yield I();
      if (e == null) {
        return undefined;
      } else {
        return e.onUIStateChange(t);
      }
    });
  }
  function Y(t) {
    if (window.lark?.biz?.util?.theme) {
      window.lark.biz.util.theme({
        callback: ({
          theme: e
        }) => {
          window.__theme__ = e;
          t(F(e));
        }
      });
    }
  }
  function V(t) {
    if (window.matchMedia) {
      let e = window.matchMedia(d.DARK);
      if (e) {
        $(e, e => {
          t(e.matches ? F("dark") : F("light"));
        });
      }
    }
  }
  let z = V;
  function K(t) {
    if (window.matchMedia) {
      let e = window.matchMedia(g.DARK);
      if (e) {
        $(e, e => {
          t(e.matches ? F("dark") : F("light"));
        });
      }
    }
  }
  function $(t, e) {
    if (t.addEventListener) {
      t.addEventListener("change", e);
    } else {
      t.addListener(e);
    }
  }
  let j = false;
  let X = false;
  function q() {
    if (L) {
      if (!j) {
        U(t => {
          n = t.mode.toUpperCase();
        });
        j = true;
      }
      return n || s.LIGHT;
    } else {
      return s.LIGHT;
    }
  }
  function J() {
    if (L && w && !C()) {
      if (!X) {
        o = (A(T) || R(window.location.href, T) || s.DARK).toUpperCase();
        X = true;
      }
      return o || s.DARK;
    } else {
      return s.DARK;
    }
  }
  function Q(t) {
    n = t;
    j = true;
  }
  function tt(t) {
    o = t;
    X = true;
  }
  function te() {
    if (q() === s.DARK) {
      if (J() === s.LIGHT) {
        return s.LIGHT;
      } else {
        return s.DARK;
      }
    } else {
      return s.LIGHT;
    }
  }
  function tr() {
    if (q() === s.DARK) {
      if (J() === s.LIGHT) {
        return f.CONTENT_LIGHT;
      } else {
        return f.ALL_DARK;
      }
    } else {
      return f.ALL_LIGHT;
    }
  }
  function tn(t) {
    return p(this, undefined, undefined, function* () {
      let e = t ? s.LIGHT : s.DARK;
      if (e === J()) {
        return;
      }
      tt(e);
      W(F(te()));
      let n = yield function () {
        return p(this, undefined, undefined, function* () {
          let t;
          if (!w) {
            return;
          }
          let e = "setting";
          if (x.has(e)) {
            return x.get(e);
          }
          try {
            t = yield Promise.all([require.e("error-codes-enums") /*id: 39444*/, require.e("app-runtime-foundation") /*id: 89676*/]).then(require.bind(require, "runtime-settings-manager") /*id: 784292*/);
            x.set(e, t);
          } catch (t) {}
          return t;
        });
      }();
      if (n) {
        yield n.set("lark.setting.content_theme", e);
      }
    });
  }
  let to = t => {
    let e = t.mode.toUpperCase();
    if (e !== J()) {
      tt(e);
      W(F(te()));
      B(T, e);
    }
  };
  function ta() {
    var r;
    var n;
    return p(this, undefined, undefined, function* () {
      if (w && !C()) {
        if (O) {
          K(to);
        } else if ((n = (r = window.ShellAPI?.app?.ipc) === null || r === undefined ? undefined : r.on) !== null && n !== undefined) {
          n.call(r, "THEME_EVENT", (t = {}) => {
            let r;
            if (t.type === "THEME_EVENT" && t.detail?.ipcType === "APP_CONTENT_THEME_CHANGE") {
              if ((r = t.detail.style) && r !== J()) {
                tt(r);
                W(F(te()));
                B(T, r);
              }
            }
          });
        }
      }
    });
  }
  function ti() {
    if (!w) {
      return;
    }
    let t = tr() === f.CONTENT_LIGHT;
    document.documentElement.dataset.larkHeader = t ? "dark" : "";
  }
  let tc = new Map();
  let tu = false;
  let tl = typeof window != "undefined" && (window[k] || "").toLowerCase() === "system";
  let ts = s.LIGHT;
  let tf = reactCoreLibraryReexport.createContext(typeof window == "undefined" ? {} : tb());
  function td() {
    return te();
  }
  function tg(t, e) {
    t.dataset.theme = (e || td()).toLowerCase();
  }
  function tb(t) {
    let e = t || td() || ts;
    if (tc.has(e)) {
      return tc.get(e);
    }
    if (a && a[e]) {
      let t = Object.assign(Object.assign({}, a && a[e]), {
        theme: e.toLowerCase()
      });
      tc.set(e, t);
      return t;
    }
    return {};
  }
  function th() {
    return tl;
  }
  function tp(t) {
    tl = t;
  }
  function tw(t) {
    t_(F(t));
  }
  function t_(t) {
    Q(t.mode.toUpperCase());
    W(F(te()));
    B(m, q());
  }
  function tE(t) {
    if (t && (a = t, L)) {
      if (!tu) {
        (function () {
          if (L) {
            H(t => {
              tg(document.documentElement, td());
              ti();
            });
            if (w) {
              if (O) {
                z(t_);
              } else {
                Z(t_);
              }
              ta();
            } else if (_) {
              Y(t_);
            } else {
              V(t => {
                if (tl) {
                  t_(t);
                }
              });
            }
          }
          let t = window.switchUIState;
          window.switchUIState = e => {
            if (t) {
              t.call(window, e);
            }
            t_(e);
          };
          let e = window.switchContentUIState;
          window.switchContentUIState = t => {
            if (e) {
              e(t);
            }
            tt(t.toUpperCase());
            W(F(te()));
          };
        })();
        W(F(te()));
      }
      tu = true;
      return () => {
        tu = false;
        a = null;
        window.switchUIState = null;
        window.switchContentUIState = null;
      };
    } else {
      return null;
    }
  }
  function tm(t) {
    let [e, r] = reactCoreLibraryReexport.useState(tb());
    reactCoreLibraryReexport.useEffect(() => {
      let t = H(t => {
        r(tb(t.mode));
      });
      return () => {
        t();
      };
    }, []);
    return reactCoreLibraryReexport.createElement(tf.Provider, {
      value: e
    }, t.children);
  }
  function tT(t) {
    return reactCoreLibraryReexport.createElement(tf.Consumer, null, e => reactCoreLibraryReexport.cloneElement(t.children, {
      theme: e
    }));
  }
  function tk(t) {
    return e => reactCoreLibraryReexport.createElement(tf.Consumer, null, r => reactCoreLibraryReexport.createElement(t, Object.assign({
      theme: r
    }, e)));
  }
  require.r(exports);
  require.d(exports, {
    ContentThemeMediaQuery: function () {
      return g;
    },
    ContentThemeType: function () {
      return f;
    },
    ThemeConsumer: function () {
      return tT;
    },
    ThemeContext: function () {
      return tf;
    },
    ThemeMediaQuery: function () {
      return d;
    },
    ThemeProvider: function () {
      return tm;
    },
    ThemeType: function () {
      return s;
    },
    ThemeWrapper: function () {
      return tk;
    },
    changeTheme: function () {
      return tw;
    },
    emitStateChange: function () {
      return W;
    },
    getContentUITheme: function () {
      return tr;
    },
    getCurrentThemeType: function () {
      return td;
    },
    getGlobalThemeSetting: function () {
      return q;
    },
    getGlobalUITheme: function () {
      return te;
    },
    getLarkContentThemeSetting: function () {
      return J;
    },
    getNativeUIState: function () {
      return M;
    },
    getThemeValue: function () {
      return tb;
    },
    getUIState: function () {
      return U;
    },
    initTheme: function () {
      return tE;
    },
    isListenToSystem: function () {
      return th;
    },
    isSupportTheme: function () {
      return G;
    },
    isUrlWithTheme: function () {
      return P;
    },
    listenChangeTheme: function () {
      return t_;
    },
    listenToContentThemeChange: function () {
      return ta;
    },
    onMobileLarkUIStateChange: function () {
      return Y;
    },
    onPCLarkContentThemeStateChange: function () {
      return K;
    },
    onPCLarkGlobalThemeStateChange: function () {
      return z;
    },
    onPcLarkUIStateChange: function () {
      return Z;
    },
    onUIStateChange: function () {
      return H;
    },
    onWebUIStateChange: function () {
      return V;
    },
    setContentLight: function () {
      return tn;
    },
    setContentTheme: function () {
      return tt;
    },
    setGlobalTheme: function () {
      return Q;
    },
    setListenToSystem: function () {
      return tp;
    },
    setThemeType: function () {
      return tg;
    },
    transformThemeToUIState: function () {
      return F;
    },
    updateLarkHeaderTheme: function () {
      return ti;
    }
  });
}