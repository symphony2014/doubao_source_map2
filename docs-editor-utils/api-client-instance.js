// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'apiClient'
// - Renamed export '$B' to 'CancelToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 22981
         */
module.exports = function (module, exports, require) {
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var securityRequestInterceptor = require("security-request-interceptor") /*id: 369539*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var apiRetryInterceptor = require("api-retry-interceptor") /*id: 392268*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var cookieValueReader = require("cookie-value-reader") /*id: 167512*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  let b = axiosHttpClientLibrary.axios.create({
    baseURL: spaceApiConfig.getSamanthaRoute(),
    withCredentials: true,
    headers: {
      "Agw-Js-Conv": "str"
    }
  });
  b.defaults.headers.common["Content-Type"] = "application/json";
  if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
    b.interceptors.request.use(platformDocUtils.MrU);
  }
  b.interceptors.request.use(function (e) {
    if (e.ignoreAddBaseRequestHeader) {
      return e;
    }
    let n = docxUtilityHelpers.generateRandomId(12);
    e.headers["Request-Id"] = n;
    e.headers["X-Request-Id"] = n;
    e.headers["X-CSRFToken"] = cookieValueReader.getCookieValue("_csrf_token") || "";
    if (docxErrorDebugUtils.getTraceConfig()) {
      e.headers["X-TT-Trace"] = "1";
    }
    e.__startTime = Date.now();
    e.__uuid = uuidGeneratorUtil.generateUuid();
    return e;
  });
  b.interceptors.request.use(function (e) {
    let n = (() => {
      let {
        metaCache: n,
        metaStartTime: r
      } = window;
      if (n && r && typeof n == "object") {
        let o = n && n.block_path || [];
        let i = function (e, n) {
          if (!n) {
            return "";
          }
          let r = "";
          if (n.includes("://")) {
            r = n;
          } else {
            let o = e.endsWith("/");
            let i = n.startsWith("/");
            r = o && i ? e + n.substring(1) : o || i ? e + n : `${e}/${n}`;
          }
          if (r.includes("://")) {
            return new URL(r).pathname;
          } else {
            return r;
          }
        }(String(e.baseURL || ""), String(e.url || ""));
        if (!o.some(e => i.startsWith(e))) {
          let e = {};
          let o = 0;
          Object.keys(n).forEach(i => {
            let {
              ttl: l,
              encrypted: c
            } = n[i];
            if (Date.now() - r < l * 1000) {
              o++;
              e[i] = c;
            }
          });
          if (o > 0) {
            return {
              "ccm-meta": JSON.stringify(e)
            };
          }
        }
      }
      return {};
    })();
    let r = {
      ...e.headers,
      ...n
    };
    Object.assign(e, {
      headers: r
    });
    return e;
  });
  b.interceptors.request.use(function (e) {
    Object.assign(e, {
      headers: {
        ...e.headers,
        ...platformDocUtils.gV8(e.url)
      }
    });
    return e;
  });
  b.interceptors.request.use(function (e) {
    let {
      getCommonHeaders: i,
      getCommonParams: l
    } = otterDocApiServiceDi.getOtterDocService().getFlowApiOptions() ?? {};
    safePropertyAssignUtil.safePropertyAssign(e, {
      params: (l == null ? undefined : l()) ?? {},
      headers: (i == null ? undefined : i()) ?? {}
    });
    return e;
  });
  securityRequestInterceptor.setupSecurityInterceptor(b);
  if (platformDocUtils.Lkr !== null && platformDocUtils.Lkr !== undefined) {
    platformDocUtils.Lkr(b);
  }
  b.interceptors.response.use(e => {
    let n = e.config;
    if (n.ignoreInterceptors || n.noDataCode) {
      return e;
    }
    let {
      code: r
    } = e.data;
    let o = e.config.headers["Request-Id"];
    let i = e.headers["x-tt-logid"];
    let c = e.headers.eagleid;
    if (r === 0) {
      return {
        ...e.data,
        requestId: o,
        ttLogId: i
      };
    }
    {
      if (e.data.code === errorStatusCodes.ErrorCode.LoginRequired && !userEnvironmentUtils.isAnonymousAccess() && platformDocUtils.Zgj !== null && platformDocUtils.Zgj !== undefined) {
        platformDocUtils.Zgj(e);
      }
      let n = errorStatusCodes.getErrorMessage(r);
      return Promise.reject(Object.assign(Error("response error"), {
        ...(isObjectOrFunction_1_1.isObjectOrFunction(e.data) ? e.data : {}),
        code: r,
        config: e.config,
        url: e.config.url || "",
        queryParams: e.config.data || e.config.params || {},
        requestId: o,
        ttLogId: i,
        eagleId: c,
        msg: n,
        resMsg: e.data.msg,
        detail: e.data.data?.detail,
        requestData: e.request?._data,
        responseDataUrl: e.data?.url
      }));
    }
  });
  b.interceptors.response.use(undefined, apiRetryInterceptor.createRetryInterceptor(b));
  if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
    b.interceptors.response.use(platformDocUtils.yEQ);
  }
  var v = b;
  let {
    CancelToken: T
  } = axiosHttpClientLibrary.axios;
  require.d(exports, {
    apiClient: function () {
      return v;
    },
    CancelToken: function () {
      return T;
    }
  });
}