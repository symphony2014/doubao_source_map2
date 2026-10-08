// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'axiosResponseValidator'
// - Resolved require(589565) to 'axios-response-validator'
// - Renamed variable 'i' to 'cookieStorageUtil'
// - Resolved require(472660) to 'cookie-storage-util'
// - Renamed variable 'a' to 'urlQueryStringBuilder'
// - Resolved require(811848) to 'url-query-string-builder'
// - Renamed variable 's' to 'urlPathResolver'
// - Resolved require(848567) to 'url-path-resolver'
// - Renamed variable 'u' to 'parseHeadersUtil'
// - Resolved require(481603) to 'parse-headers-util'
// - Renamed variable 'c' to 'exerciseChatInput'
// - Resolved require(665110) to 'exercise-chat-input'
// - Renamed variable 'f' to 'jsonParsingConfig'
// - Resolved require(872553) to 'json-parsing-config'
// - Renamed variable 'd' to 'axiosErrorClass'
// - Resolved require(24058) to 'axios-error-class'
// - Renamed variable 'l' to 'axiosCanceledError'
// - Resolved require(195120) to 'axios-canceled-error'
// - Renamed variable 'p' to 'getUrlProtocol'
// - Resolved require(482025) to 'get-url-protocol'
// - Renamed variable 'v' to 'webPolyfillConfigWrapper'
// - Resolved require(341545) to 'web-polyfill-config-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 223933
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var axiosResponseValidator = require("axios-response-validator") /*id: 589565*/;
  var cookieStorageUtil = require("cookie-storage-util") /*id: 472660*/;
  var urlQueryStringBuilder = require("url-query-string-builder") /*id: 811848*/;
  var urlPathResolver = require("url-path-resolver") /*id: 848567*/;
  var parseHeadersUtil = require("parse-headers-util") /*id: 481603*/;
  var exerciseChatInput = require("exercise-chat-input") /*id: 665110*/;
  var jsonParsingConfig = require("json-parsing-config") /*id: 872553*/;
  var axiosErrorClass = require("axios-error-class") /*id: 24058*/;
  var axiosCanceledError = require("axios-canceled-error") /*id: 195120*/;
  var getUrlProtocol = require("get-url-protocol") /*id: 482025*/;
  var webPolyfillConfigWrapper = require("web-polyfill-config-wrapper") /*id: 341545*/;
  module.exports = function (e) {
    return new Promise(function (t, r) {
      var h;
      var m = e.data;
      var _ = e.headers;
      var y = e.responseType;
      var g = e.withXSRFToken;
      function b() {
        if (e.cancelToken) {
          e.cancelToken.unsubscribe(h);
        }
        if (e.signal) {
          e.signal.removeEventListener("abort", h);
        }
      }
      if (utilsTypeCheckHelpers.isFormData(m) && utilsTypeCheckHelpers.isStandardBrowserEnv()) {
        delete _["Content-Type"];
      }
      var w = new XMLHttpRequest();
      if (e.auth) {
        var E = e.auth.username || "";
        var O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
        _.Authorization = "Basic " + btoa(E + ":" + O);
      }
      var S = urlPathResolver(e.baseURL, e.url);
      function T() {
        if (w) {
          var n = "getAllResponseHeaders" in w ? parseHeadersUtil(w.getAllResponseHeaders()) : null;
          axiosResponseValidator(function (e) {
            t(e);
            b();
          }, function (e) {
            r(e);
            b();
          }, {
            data: y && y !== "text" && y !== "json" ? w.response : w.responseText,
            status: w.status,
            statusText: w.statusText,
            headers: n,
            config: e,
            request: w
          });
          w = null;
        }
      }
      w.open(e.method.toUpperCase(), urlQueryStringBuilder(S, e.params, e.paramsSerializer), true);
      w.timeout = e.timeout;
      if ("onloadend" in w) {
        w.onloadend = T;
      } else {
        w.onreadystatechange = function () {
          if (w && w.readyState === 4 && (w.status !== 0 || w.responseURL && w.responseURL.indexOf("file:") === 0)) {
            setTimeout(T);
          }
        };
      }
      w.onabort = function () {
        if (w) {
          r(new axiosErrorClass("Request aborted", axiosErrorClass.ECONNABORTED, e, w));
          w = null;
        }
      };
      w.onerror = function () {
        r(new axiosErrorClass("Network Error", axiosErrorClass.ERR_NETWORK, e, w));
        w = null;
      };
      w.ontimeout = function () {
        var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        var n = e.transitional || jsonParsingConfig;
        if (e.timeoutErrorMessage) {
          t = e.timeoutErrorMessage;
        }
        r(new axiosErrorClass(t, n.clarifyTimeoutError ? axiosErrorClass.ETIMEDOUT : axiosErrorClass.ECONNABORTED, e, w));
        w = null;
      };
      if (utilsTypeCheckHelpers.isStandardBrowserEnv() && (g && utilsTypeCheckHelpers.isFunction(g) && (g = g(e)), g || g !== false && exerciseChatInput(S))) {
        var C = e.xsrfHeaderName && e.xsrfCookieName && cookieStorageUtil.read(e.xsrfCookieName);
        if (C) {
          _[e.xsrfHeaderName] = C;
        }
      }
      if ("setRequestHeader" in w) {
        utilsTypeCheckHelpers.forEach(_, function (e, t) {
          if (m === undefined && t.toLowerCase() === "content-type") {
            delete _[t];
          } else {
            w.setRequestHeader(t, e);
          }
        });
      }
      if (!utilsTypeCheckHelpers.isUndefined(e.withCredentials)) {
        w.withCredentials = !!e.withCredentials;
      }
      if (y && y !== "json") {
        w.responseType = e.responseType;
      }
      if (typeof e.onDownloadProgress == "function") {
        w.addEventListener("progress", e.onDownloadProgress);
      }
      if (typeof e.onUploadProgress == "function" && w.upload) {
        w.upload.addEventListener("progress", e.onUploadProgress);
      }
      if (e.cancelToken || e.signal) {
        h = function (t) {
          if (w) {
            r(!t || t.type ? new axiosCanceledError(null, e, req) : t);
            w.abort();
            w = null;
          }
        };
        if (e.cancelToken) {
          e.cancelToken.subscribe(h);
        }
        if (e.signal) {
          if (e.signal.aborted) {
            h();
          } else {
            e.signal.addEventListener("abort", h);
          }
        }
      }
      if (!m && m !== false && m !== 0 && m !== "") {
        m = null;
      }
      var x = getUrlProtocol(S);
      if (x && webPolyfillConfigWrapper.protocols.indexOf(x) === -1) {
        r(new axiosErrorClass("Unsupported protocol " + x + ":", axiosErrorClass.ERR_BAD_REQUEST, e));
        return;
      }
      w.send(m);
    });
  };
}