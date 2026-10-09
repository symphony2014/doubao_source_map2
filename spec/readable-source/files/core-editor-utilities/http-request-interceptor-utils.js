// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q3' to 'formatResponseData'
// - Renamed export 'pw' to 'addGrayPolicyHeaders'
// - Renamed export 'd$' to 'handleResponseError'
// - Renamed export 'z$' to 'prepareRequestConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 675018
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var s;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var spaceConfigConstants = require("space-config-constants") /*id: 268939*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var logIdGenerator = require("log-id-generator") /*id: 456614*/;
  (n = i ||= {}).MOBILE_WEB = "mobile_web";
  n.PC_WEB = "pc_web";
  n.WECHAT = "weixin_web";
  n.QQ = "qq_web";
  n.WEIBO = "weibo_web";
  n.TOUTIAO = "toutiao_web";
  n.OTHERS = "others";
  (o = c ||= {}).MAC = "mac";
  o.WINDOWS = "windows";
  o.IPAD = "iPad";
  o.OTHERS = "others";
  (a = s ||= {}).LARKDOCS = "LarkDocs";
  a.LARK = "Lark";
  a.WEB = "web";
  a.OTHERS = "others";
  let g = {
    REQUEST_BIZ_ERROR: "-10"
  };
  var stringFormatConversionUtils = require("string-format-conversion-utils") /*id: 708138*/;
  var cookieValueGetter = require("cookie-value-getter") /*id: 985120*/;
  let h = e => {
    if (!e || !e.requestId) {
      return `${stringFormatConversionUtils.genRandomString(12)}-${(window == null ? undefined : window.User)?.id || "userid"}`;
    }
    return e.requestId;
  };
  let m = e => {
    let t = h(e);
    return {
      "Request-Id": t,
      "X-Request-Id": t,
      "x-tt-trace-id": t,
      "X-CSRFToken": cookieValueGetter.getCookieValue("_csrf_token") || "",
      "F-Version": window && window.rv_rev || "",
      "X-TT-LOGID": logIdGenerator.genLogID()
    };
  };
  s.LARK;
  if (browserEnvDetectionUtil.browserDetector.isIPad) {
    c.IPAD;
  } else if (browserEnvDetectionUtil.browserDetector.isMac) {
    c.MAC;
  } else if (browserEnvDetectionUtil.browserDetector.isWindows) {
    c.WINDOWS;
  } else {
    c.OTHERS;
  }
  if (browserEnvDetectionUtil.browserDetector.isFeishu || browserEnvDetectionUtil.browserDetector.isLark) {
    s.LARK;
  } else if (browserEnvDetectionUtil.browserDetector.isPcWeb) {
    s.WEB;
  } else {
    s.OTHERS;
  }
  var requestInterceptorUtils = require("request-interceptor-utils") /*id: 916192*/;
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  function k(e) {
    let t = e.config;
    let r = e.data;
    let n = {
      headers: e.headers,
      config: e.config
    };
    if (!t) {
      return e;
    }
    let {
      meta: o,
      data: a,
      code: i
    } = r;
    let c = o || {};
    if (t.mergeRequestHeaderIntoMeta) {
      c = Object.assign(Object.assign({}, c), t.headers);
    }
    if (typeof t.__startTime == "number") {
      c = Object.assign(Object.assign({}, c), {
        durationTime: new Date().getTime() - t.__startTime
      });
    }
    if (a) {
      return Object.assign({
        code: i,
        data: a,
        meta: c
      }, n);
    } else {
      return Object.assign({
        code: i,
        data: r,
        meta: c
      }, n);
    }
  }
  async function v(e) {
    if (e.ignoreInterceptors) {
      return e;
    } else {
      return Object.assign(Object.assign({}, e), {
        data: requestInterceptorUtils.transformPostData(e),
        headers: function (e) {
          let t = Object.assign(Object.assign({}, m(e)), e.headers);
          if (browserEnvDetectionUtil.browserDetector.isIE) {
            t["Cache-Control"] = "no-cache";
            t.Pragma = "no-cache";
          }
          return t;
        }(e),
        timeout: e.timeout || spaceConfigConstants.spaceLimit
      });
    }
  }
  function x(e) {
    let {
      url: t = "",
      baseURL: r = ""
    } = e;
    if (t || r) {
      if (function (e = "", t = "") {
        let r = window.location.origin;
        let n = (e = "") => /^https:\/\//.test(e);
        let o = e => RegExp(`^${r}`).test(e);
        let a = globalConfigUtils.isBoeEnvironment() ? /^https:\/\/(.*)(?:)(\.feishu-boe\.cn)/ : /^https:\/\/(.*)(?:)(\.feishu\.cn)/;
        let i = e => a.test(e);
        if ([e, t].every(n)) {
          return o(e) && i(e);
        } else if ([e, t].some(n)) {
          return [e, t].some(e => o(e) && i(e));
        } else {
          return i(r);
        }
      }(t, r)) {
        let t = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig");
        if (t && t.gray_policy) {
          e.headers = Object.assign(e.headers, t.gray_policy);
        }
      }
      return e;
    }
  }
  function y(e) {
    let t = e.config;
    if (!t || t.ignoreResponseInterceptors) {
      return e;
    }
    let r = objectPathGetDefault.getObjectPathDefault(e, "data.code");
    if (r !== undefined && r !== 0) {
      return Promise.reject(function (e) {
        let {
          data: t
        } = e;
        let {
          code: r,
          msg: n
        } = t;
        let o = Error(n);
        o.code = r || g.REQUEST_BIZ_ERROR;
        o.config = e.config;
        o.request = e.request;
        o.response = e;
        let a = "response.data.";
        let i = objectPathGetDefault.getObjectPathDefault(o, `${a}data`);
        let c = objectPathGetDefault.getObjectPathDefault(o, `${a}meta`, {});
        o.data = i;
        o.meta = c;
        o.msg = n || "REQUEST_BIZ_ERROR";
        return o;
      }(e));
    } else {
      return k(e);
    }
  }
  require.d(exports, {
    formatResponseData: function () {
      return k;
    },
    addGrayPolicyHeaders: function () {
      return x;
    },
    handleResponseError: function () {
      return y;
    },
    prepareRequestConfig: function () {
      return v;
    }
  });
}