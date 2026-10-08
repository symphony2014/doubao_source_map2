// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oK' to 'buildAuthUrl'
// - Renamed export 'aw' to 'decodeAuthState'
// - Renamed export 'Wb' to 'isCustomOpen'
// - Renamed export 'aQ' to 'RedirectMethod'
// - Renamed export 'l6' to 'authStorage'
// - Renamed export '$5' to 'executeRedirect'
// - Renamed export 'hq' to 'parseOAuthCallback'
// - Renamed export 'at' to 'getAuthLoginType'
// - Renamed export 'T2' to 'isPopupAutoLogin'
// - Renamed export 'U3' to 'encodeState'
// - Renamed export 'rW' to 'clearHistoryState'
// - Renamed export 'rh' to 'isPopupLogin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 241827
         */
module.exports = function (module, exports, require) {
  var r;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var cookieManagementUtils = require("cookie-management-utils") /*id: 688115*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let c = (e, t) => {
    let n = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let r = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    return {
      left: n / 2 - e / 2 + window.screenLeft,
      top: r / 2 - t / 2 + window.screenTop
    };
  };
  let d = e => {
    let {
      path: t,
      width: n = 700,
      height: r = 700
    } = e;
    let {
      left: a,
      top: o
    } = c(n, r);
    window.open(xssContentSanitizer.sanitizeUrl(t, null, {
      logType: "js.window.location",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTTFZd1lWZDRla3d6$*5sWm$%a3pZ$mMx-TJJelkz%mlNMEpzWW1rM%1HTXlSbmxhTTFaNg"
    }), "_blank", `width=${n},height=${r},left=${a},top=${o},resizable=no,location=no,menubar=no`);
  };
  (r = {}).ASSIGN = "assign";
  r.POPUP_AUTO_LOGIN = "popup_auto_login";
  r.CUSTOM_OPEN = "custom_open";
  let u = r;
  let p = e => e && [u.CUSTOM_OPEN].includes(e);
  let f = e => e && [u.POPUP_AUTO_LOGIN].includes(e);
  let h = e => f(e);
  let m = e => (e == null ? undefined : e.authLoginData) && isStringTypeCheck.isString(e == null ? undefined : e.type);
  let _ = e => isStringTypeCheck.isString(e) ? e : safeJsonUtils.safeStringify(e);
  let g = e => globalThis.btoa(_(e));
  let v = function (e, t, n = {}) {
    let {
      state: r,
      ...i
    } = t;
    let {
      encodeState: a = true,
      extraParameter: o
    } = n;
    return urlParamUtils.appendUrlParams(e, {
      ...o,
      ...i,
      state: a ? g(r) : _(r)
    });
  };
  let y = function (e, t, n = {}) {
    let {
      redirectMethod: r = u.ASSIGN,
      customThirdOpenRedirectFn: a
    } = n;
    let o = v(e, t, n);
    switch (r) {
      case u.ASSIGN:
        location.assign(xssContentSanitizer.sanitizeUrl(o, null, {
          logType: "js.window.location",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmtXRkp3WWtoTmRtSXlSakZr%jJkN$RHN$Nlb*xZ%201a1dFMDk"
        }));
        return;
      case u.POPUP_AUTO_LOGIN:
        d({
          path: o
        });
        return;
      case u.CUSTOM_OPEN:
        if (a != null) {
          a(o);
        }
        return;
      default:
        return;
    }
  };
  let w = () => {
    window.history.replaceState({}, "");
  };
  let S = e => e != null;
  let b = e => !!S(e) && isStringTypeCheck.isString(e.platform) && isStringTypeCheck.isString(e.navigatePath) && isStringTypeCheck.isString(e.type);
  let k = e => {
    let t = globalThis.atob(e);
    try {
      let e = JSON.parse(t);
      if (b(e)) {
        return e;
      }
      throw Error("Wrong structure of json stringified Oauth2String");
    } catch (e) {
      if (e instanceof SyntaxError) {
        return t;
      }
      throw e;
    }
  };
  let x = e => !!S(e) && (isStringTypeCheck.isString(e.access_token) || isStringTypeCheck.isString(e.code)) && isStringTypeCheck.isString(e.state);
  let T = e => {
    let t = urlParamUtils.parseQueryString(e.hash || e.search);
    if (!x(t)) {
      throw Error("Wrong structure of oauth2 callback parameter");
    }
    let n = k(t.state);
    if (isStringTypeCheck.isString(n)) {
      throw Error("OAuth2 state in flow third party login must not be string");
    }
    let {
      access_token: r,
      code: i
    } = t;
    return {
      access_token: r,
      code: i,
      state: n
    };
  };
  let E = {
    get: e => Promise.resolve(cookieManagementUtils.CookieManager.get(e)),
    set: (e, t, n) => Promise.resolve(cookieManagementUtils.CookieManager.set(e, t, n))
  };
  require.d(exports, {
    buildAuthUrl: function () {
      return v;
    },
    decodeAuthState: function () {
      return k;
    },
    isCustomOpen: function () {
      return p;
    },
    RedirectMethod: function () {
      return u;
    },
    authStorage: function () {
      return E;
    },
    executeRedirect: function () {
      return y;
    },
    parseOAuthCallback: function () {
      return T;
    },
    getAuthLoginType: function () {
      return m;
    },
    isPopupAutoLogin: function () {
      return h;
    },
    encodeState: function () {
      return g;
    },
    clearHistoryState: function () {
      return w;
    },
    isPopupLogin: function () {
      return f;
    }
  });
}