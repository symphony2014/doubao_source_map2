// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A_' to 'getAxiosInstance'
// - Renamed export 'Zq' to 'isWhiteboardType'
// - Renamed export 'YM' to 'parseDriveUrl'
// - Renamed export 'xR' to 'setAxiosInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 508792
         */
module.exports = function (module, exports, require) {
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var spaceConfigConstants = require("space-config-constants") /*id: 268939*/;
  var requestInterceptorUtils = require("request-interceptor-utils") /*id: 916192*/;
  var httpRequestInterceptorUtils = require("http-request-interceptor-utils") /*id: 675018*/;
  let c = axiosHttpClientLibrary.axios.create({
    baseURL: spaceConfigConstants.spacePath,
    withCredentials: true,
    paramsSerializer: requestInterceptorUtils.stringifyRepeat,
    headers: {
      "Content-Type": "application/json"
    }
  });
  c.interceptors.request.use(httpRequestInterceptorUtils.prepareRequestConfig);
  requestInterceptorUtils.applyInterceptors(c);
  c.interceptors.response.use(httpRequestInterceptorUtils.handleResponseError);
  var componentBizTeaCollector = require("component-biz-tea-collector") /*id: 568420*/;
  var urlParseUtils_1 = require("url-parse-utils_1") /*id: 152840*/;
  var mixedHashUtil = require("mixed-hash-util") /*id: 703059*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var driveNodeTypeConstants_1 = require("drive-node-type-constants_1") /*id: 702441*/;
  let b = [];
  function p(e) {
    return driveNodeTypeConstants_1.whiteboardResourceTypes.includes(e);
  }
  function h(e) {
    let t = e.match(/^((?!https?).|\s)*/);
    if (t) {
      let r = t[0];
      return {
        urlWithRest: e.substring(r.length),
        preText: r
      };
    }
    return {
      urlWithRest: e,
      preText: ""
    };
  }
  let m = {};
  function w(e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    return function (e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : emptyExportFunction.emptyFunction;
      let n = e;
      if (!t) {
        n = e.split(/https?:\/\//).pop() || "";
      }
      let o = function (e) {
        let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (/^\.*\/|^(?!localhost)\w+:/.test(e)) {
          return e;
        } else {
          return e.replace(/^(?!(?:\w+:)?\/\/)/, t ? "https://" : "http://");
        }
      }(n);
      if (!function (e) {
        let t = function () {
          let e = ["docs" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ"), "feishu.cn", "larksuite.com", "feishu-staging.cn", "larksuite-staging.com", "docs-staging" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ"), "feishu-boe.cn"];
          return [...objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.domainPool", e), ...b];
        }();
        return RegExp(`^(https?:\\/\\/)?([^/]+\\.)?(${t.map(e => `(${e})`.replace(/\./g, "\\.")).join("|")})($|\\/)`).test(e);
      }(o)) {
        r({
          result: "failed",
          failedReason: "Not in the domain pool"
        });
        return null;
      }
      let a = function (e) {
        let t = document.createElement("a");
        t.href = e;
        let r = /^\/[^/]*/.exec(t.pathname);
        if (r) {
          return r[0].slice(1);
        } else {
          return null;
        }
      }(o);
      if (!a || !driveNodeTypeConstants_1.validPathPrefixes.includes(a)) {
        r({
          result: "failed",
          failedReason: "Route name is invalid"
        });
        return null;
      }
      let {
        token: i,
        type: c,
        protocol: s,
        preText: u = "",
        restText: p = "",
        search: m = "",
        hash: w = "",
        url: E = "",
        blockType: k,
        blockToken: v
      } = function (e) {
        var t;
        if (arguments.length > 1 && arguments[1] !== undefined) {
          arguments[1];
        }
        let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let n = RegExp(`^${[/(?:([A-Za-z]+):\/\/)/, /(?:([.\-\w]+))/, /(?::(\d+))/, /(\/[^?#\s\u2E80-\u9FFF]*)/, /(\?[^#\s]*)/, /(#[^\s]*)/, r ? /([\s\S]*)/ : /(?:([\s\S]*))/].map(e => e.source).join("?")}?$`);
        let o = "";
        if (!r) {
          o = h(e).preText;
        }
        let [, a = "", i = "", c = "", s = "", u = "", d = "", f = ""] = n.exec(h(e).urlWithRest) || [];
        let b = /(?:\/)?(?:space\/|drive\/|workspace\/)?([a-zA-Z-_]+)?(?:\/([a-zA-Z0-9]*))(.*)/.exec(s) || [];
        let p = b[3] || "";
        let {
          blockType: m,
          blockToken: w
        } = urlParseUtils_1.getUrlQuery(e);
        let E = {
          protocol: a,
          hostname: i,
          port: c,
          pathname: s,
          type: (t = b[1]) ? driveNodeTypeConstants_1.pluralToSingularMap[t] || t : "",
          token: b[2] || "",
          search: u,
          hash: d,
          url: e,
          blockType: m,
          blockToken: w
        };
        if (r) {
          if (p || f) {
            E.token = "";
          }
        } else {
          E.preText = o;
          if (p) {
            E.restText = p + u + d + f;
            E.url = h(e).urlWithRest.split(p)[0];
          } else {
            E.restText = f;
            E.url = h(e).urlWithRest.slice(0, f ? -f.length : undefined);
          }
        }
        return E;
      }(e, true, t);
      if (!i || !c) {
        r({
          result: "failed",
          failedReason: "URL parsing failure"
        });
        return null;
      }
      let x = driveNodeTypeConstants_1.nodeTypeToCodeMap[c] || driveNodeTypeConstants_1.nodeTypeToCodeMap[driveNodeTypeConstants_1.nodeTypeStrings.DOC];
      let y = driveNodeTypeConstants_1.nodeTypeToNumericMap[c] || driveNodeTypeConstants_1.nodeTypeToNumericMap[driveNodeTypeConstants_1.nodeTypeCodes.DOC];
      let _ = k ? driveNodeTypeConstants_1.nodeTypeToNumericMap[k] : undefined;
      r({
        result: "success",
        token: i
      });
      return {
        preText: u,
        token: i,
        type: c,
        restText: p,
        protocol: s,
        suiteTypeNum: x,
        mentionTypeNum: y,
        search: m,
        hash: w,
        url: E,
        blockTypeNum: _,
        blockToken: v
      };
    }(e, t, r => {
      if (r.failedReason !== "Not in the domain pool" && !m[e]) {
        m[e] = true;
        componentBizTeaCollector.collectComponentBizEvent(driveNodeTypeConstants_1.apiServiceNames.PARSE_TEXT, {
          text: mixedHashUtil.generateHash(e),
          is_pure_url: t ? "true" : "false",
          result: r.result,
          failed_reason: r.failedReason || "",
          token: r.token ? mixedHashUtil.generateHash(r.token) : ""
        });
      }
    });
  }
  let E = c;
  function k(e) {
    E = e;
  }
  function v() {
    return E || c;
  }
  require.d(exports, {
    getAxiosInstance: function () {
      return v;
    },
    isWhiteboardType: function () {
      return p;
    },
    parseDriveUrl: function () {
      return w;
    },
    setAxiosInstance: function () {
      return k;
    }
  });
}