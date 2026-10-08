// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxPerformanceStageCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 753948
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var urlParserUtils = require("url-parser-utils") /*id: 589701*/;
  var h = urlParserUtils;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var hashHistoryCreator = require("hash-history-creator") /*id: 896915*/;
  var mixedHashUtil = require("mixed-hash-util") /*id: 703059*/;
  let b = () => window.previousNavigationTime || null;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  let k = () => "";
  let E = (e, i) => {
    let r = i.split(".");
    let n = e;
    for (let e = 0; e < r.length && n != null; e++) {
      n = n[r[e]];
    }
    return n;
  };
  let C = typeof window == "undefined" ? "" : window.scm?.branch || "";
  let _ = +(typeof window != "undefined" && (!!(() => {
    let {
      location: e
    } = window;
    return e.host.indexOf("localhost") > -1 || /^(\d+)\.(\d+)\.(\d+)\.(\d+):(\d+)$/.test(e.host);
  })() || !window.location.hostname.startsWith("www")));
  let R = typeof window == "undefined" ? "" : location.pathname.replace(/\/([a-zA-Z0-9]+)$/, "/:token");
  let I = typeof window == "undefined" ? "" : E(window, "templateRequestInfo.encryptedToken");
  let M = e => {
    (e = e || {}).member_id = String(k() || "");
    e.branch ||= C;
    if (e._staging_flag === undefined) {
      e._staging_flag = _;
    }
    e.path ||= R;
    if (!e.file_id && I) {
      e.file_id = I;
    }
  };
  let T = (e, i) => {
    if (Array.isArray(e) && Array.isArray(i)) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        M(i[n]);
        r.push({
          event: e[n],
          local_time_ms: Date.now(),
          params: JSON.stringify(i[n])
        });
      }
      return r;
    }
    if (Array.isArray(e) || Array.isArray(i)) {
      return [];
    } else {
      M(i);
      return [{
        event: e,
        local_time_ms: Date.now(),
        params: JSON.stringify(i)
      }];
    }
  };
  let w = e => e;
  let B = (e, i, r, n) => {
    var o;
    var l;
    var c;
    var d;
    var u;
    var h;
    let f;
    if (Array.isArray(e = w(e)) && e.length === 0) {
      return;
    }
    let g = (l = window.Tea) === null || l === undefined ? undefined : (o = l.getConfig) === null || o === undefined ? undefined : o.call(l);
    let p = "https://mcs.doubao.com/list";
    if (!g) {
      return;
    }
    try {
      f = teaIdentityManager.getUserUniqueId();
    } catch (e) {}
    if (!f || f === "undefined") {
      f = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    }
    let m = window.rv_rev;
    if (m) {
      let e = m.split("-");
      e[1];
      e[2];
      e[3];
    }
    let v = E(window, "User.abTest.versions");
    let b = "";
    if (v && v.length > 0) {
      b = v[0].version_name;
    }
    let {
      userUnit: k = "",
      userTenantUnit: C = "",
      docUnit: _ = "",
      docTenantUnit: R = "",
      wikiUnit: I = "",
      wikiTenantUnit: M = ""
    } = window.SERVER_DATA?.unitInfo || {};
    let B = ((d = window.User) === null || d === undefined ? undefined : (c = d.settingsConfig) === null || c === undefined ? undefined : c.ccm_platform_tea_config?.user_unit) || "";
    let {
      user: P = {},
      header: L = {}
    } = g || {};
    let N = JSON.stringify([{
      user: {
        ...P,
        user_unique_id: (P == null ? undefined : P.user_unique_id) || f,
        ssid: "____"
      },
      header: {
        ...L,
        ab_version: b,
        app_id: uniParamsManager.uniParamsManager.getParam("aid"),
        __userless: "true",
        app_language: E(window, "User.language"),
        "custom.user_unit": k === "unknown" ? B : k,
        "custom.user_tenant_unit": C,
        "custom.doc_unit": _,
        "custom.doc_tenant_unit": R,
        "custom.wiki_unit": I,
        "custom.wiki_tenant_unit": M
      },
      events: T(e, i)
    }]);
    if (r) {
      if ((u = (h = navigator).sendBeacon) !== null && u !== undefined) {
        u.call(h, p, N);
      }
    } else {
      let e = new XMLHttpRequest();
      e.open("post", p);
      e.send(N);
    }
  };
  let P = require("memoize-function") /*id: 565197*/.memoize(function (e) {
    if (arguments.length > 1 && arguments[1] !== undefined) {
      arguments[1];
    }
    let i = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let r = RegExp(`^${[/(?:([A-Za-z]+):\/\/)/, /(?:([.\-\w]+))/, /(?::(\d+))/, /(\/[^?#\s\u2E80-\u9FFF]*)/, /(\?[^#\s]*)/, /(#[^\s]*)/, /([\s\S]*)/].map(e => e.source).join("?")}?$`);
    let n = "";
    let o = "";
    try {
      n = decodeURIComponent(e);
    } catch (i) {
      n = unescape(e);
    }
    if (!i) {
      let e = function (e) {
        let i = e.match(/^((?!https?).|\s)*/);
        if (i) {
          let r = i[0];
          return {
            urlWithRest: e.substring(r.length),
            preText: r
          };
        }
        return {
          urlWithRest: e,
          preText: ""
        };
      }(n);
      n = e.urlWithRest;
      o = e.preText;
    }
    let [, l = "", s = "", a = "", c = "", d = "", u = "", h = ""] = r.exec(n) || [];
    let f = [];
    if (c.startsWith("/base/add")) {
      let e = /^\/base\/add\/([a-zA-Z0-9]+)$/.exec(c);
      if ((e == null ? undefined : e.length) && e[1]) {
        f = [c, "base/add", e[1]];
      }
    } else {
      f = /(?:\/)?(?:space\/|drive\/)?(?:preview\/)?(?:component\/)?([a-zA-Z-_]+)?(?:\/([\w]*))/.exec(c) || [];
    }
    let g = {
      protocol: l,
      hostname: s,
      port: a,
      pathname: c,
      type: "docx",
      token: f[2] || "",
      search: d,
      hash: u
    };
    if (!i) {
      g.restText = h;
      g.preText = o;
    }
    return g;
  });
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  let N = {};
  function A(e) {
    var r;
    let o = e || ((r = window) === null || r === undefined ? undefined : r.docsLocation?.href) || location?.href;
    if (N[o]) {
      return N[o];
    }
    let l = docTokenManager.getDocToken();
    if (l) {
      let e = mixedHashUtil.generateHash(l);
      N[o] = e;
      return e;
    }
    return "none";
  }
  let O = {};
  let D = {
    docx: {
      externalLoadStart: 0,
      externalLoadSuccess: 0,
      garrIndexLoadStart: 0,
      garrIndexLoadSuccess: 0
    },
    sheet: {
      importExternalStart: 0,
      externalLoadStart: 0,
      externalLoadSuccess: 0,
      garrIndexLoadStart: 0,
      garrIndexLoadSuccess: 0
    },
    bitable: {
      externalLoadSuccess: 0,
      garrExternalLoadStart: 0,
      garrExternalLoadEnd: 0,
      garrIndexLoadStart: 0,
      garrIndexLoadSuccess: 0
    }
  };
  function x(e, i) {
    return e.find(e => e.name.includes(`/resource/bear/js/${i}.`) || e.name.endsWith(`/js/${i}.[dev].js`));
  }
  let F = {
    start: 0,
    afterImport: 0,
    afterPolyfill: 0,
    afterUtilsDOM: 0,
    afterStore: 0,
    afterApp: 0,
    afterExternal: 0,
    beforeAppRender: 0,
    afterAppRender: 0,
    afterEntryJSExecEnd: 0
  };
  let j = require("process-browser-shim") /*id: 488992*/.env.CUSTOM_ENABLE_PERF_MARK;
  let $ = j ? function (e, i) {
    performance.mark(e, i);
  } : function (e, i) {};
  let H = {
    DOCX_JS_LOADED: 1,
    FETCH_DOCX_CLIENTVARS_SUCCESS: 3,
    RENDER_DOCX_ALLOW_EDIT: 4,
    RENDER_DOCX_HEADER_SUCCESS: 5,
    RENDER_DOCX_CATALOGUE_SUCCESS: 7,
    RENDER_DOCX_COMMENT_SUCCESS: 9,
    RENDER_DOCX_FIRST_SCREEN_SUCCESS: 10,
    RENDER_DOCX_CLIENTVARS_ALL_DONE: 11
  };
  (n = {}).RENDER_START = "RENDER_START";
  n.REQUEST_START = "REQUEST_START";
  n.RESPONSE_START = "RESPONSE_START";
  n.HTML_DOWNLOAD_END = "HTML_DOWNLOAD_END";
  n.HTML_CSS_START = "HTML_CSS_START";
  n.HTML_CSS_END = "HTML_CSS_END";
  n.HTML_SSR_PARSE_START = "HTML_SSR_PARSE_START";
  n.HTML_SSR_PARSE_SUCCESS = "HTML_SSR_PARSE_SUCCESS";
  n.RENDER_FILE_ETHERPAD_SUCCESS = "RENDER_FILE_ETHERPAD_SUCCESS";
  n.HTML_PARSE_END = "HTML_PARSE_END";
  n.FIRST_CHUNK_END = "FIRST_CHUNK_END";
  n.SECOND_CHUNK_START = "SECOND_CHUNK_START";
  n.SECOND_CHUNK_INJECT_SERVER_END = "SECOND_CHUNK_INJECT_SERVER_END";
  n.SECOND_CHUNK_ES6_CHECK_END = "SECOND_CHUNK_ES6_CHECK_END";
  n.SECOND_CHUNK_LANG_I18N_START = "SECOND_CHUNK_LANG_I18N_START";
  n.SECOND_CHUNK_LANG_I18N_END = "SECOND_CHUNK_LANG_I18N_END";
  n.SECOND_CHUNK_END = "SECOND_CHUNK_END";
  n.THIRD_CHUNK_START = "THIRD_CHUNK_START";
  n.THIRD_CHUNK_END = "THIRD_CHUNK_END";
  n.FOURTH_CHUNK_START = "FOURTH_CHUNK_START";
  n.FOURTH_CHUNK_END = "FOURTH_CHUNK_END";
  n.APP_JS_DOWNLOAD_END = "APP_JS_DOWNLOAD_END";
  n.APP_JS_AFTER_IMPORT = "APP_JS_AFTER_IMPORT";
  n.APP_JS_AFTER_POLYFILL = "APP_JS_AFTER_POLYFILL";
  n.APP_JS_AFTER_UTILS_DOM = "APP_JS_AFTER_UTILS_DOM";
  n.APP_JS_AFTER_STORE = "APP_JS_AFTER_STORE";
  n.APP_JS_AFTER_APP = "APP_JS_AFTER_APP";
  n.APP_JS_BEFORE_APP_RENDER = "APP_JS_BEFORE_APP_RENDER";
  n.APP_JS_EXEC_END = "APP_JS_EXEC_END";
  n.ENTRY_JS_EXEC_END = "ENTRY_JS_EXEC_END";
  n.EXTERNAL_LOAD_START = "EXTERNAL_LOAD_START";
  n.EXTERNAL_LOAD_SUCCESS = "EXTERNAL_LOAD_SUCCESS";
  n.GARR_INDEX_LOAD_START = "GARR_INDEX_LOAD_START";
  n.GARR_INDEX_LOAD_SUCCESS = "GARR_INDEX_LOAD_SUCCESS";
  n.INDEX_MERGED_JS_LOADED_SUCCESS = "INDEX_MERGED_JS_LOADED_SUCCESS";
  n.FILE_JS_LOADED_SUCCESS = "FILE_JS_LOADED_SUCCESS";
  n.FILE_ENTRY_LOAD_IMPORT_TIME = "FILE_ENTRY_LOAD_IMPORT_TIME";
  n.FETCH_FILE_CLIENTVARS_START = "FETCH_FILE_CLIENTVARS_START";
  n.FETCH_FILE_CLIENTVARS_SUCCESS = "FETCH_FILE_CLIENTVARS_SUCCESS";
  n.RENDER_FILE_ALLOW_EDIT = "RENDER_FILE_ALLOW_EDIT";
  n.RENDER_FILE_HEADER_START = "RENDER_FILE_HEADER_START";
  n.RENDER_FILE_HEADER_SUCCESS = "RENDER_FILE_HEADER_SUCCESS";
  n.FETCH_FILE_CATALOGUE_SUCCESS = "FETCH_FILE_CATALOGUE_SUCCESS";
  n.RENDER_FILE_CATALOGUE_START = "RENDER_FILE_CATALOGUE_START";
  n.RENDER_FILE_CATALOGUE_SUCCESS = "RENDER_FILE_CATALOGUE_SUCCESS";
  n.RENDER_FILE_CATALOGUE_SSR_SUCCESS = "RENDER_FILE_CATALOGUE_SSR_SUCCESS";
  n.FETCH_FILE_COMMENT_START = "FETCH_FILE_COMMENT_START";
  n.FETCH_FILE_COMMENT_SUCCESS = "FETCH_FILE_COMMENT_SUCCESS";
  n.RENDER_FILE_COMMENT_START = "RENDER_FILE_COMMENT_START";
  n.RENDER_FILE_COMMENT_SUCCESS = "RENDER_FILE_COMMENT_SUCCESS";
  n.RENDER_FILE_MESSAGE_START = "RENDER_FILE_MESSAGE_START";
  n.RENDER_FILE_MESSAGE_SUCCESS = "RENDER_FILE_MESSAGE_SUCCESS";
  n.RENDER_FILE_FIRST_SCREEN_BLOCK_START = "RENDER_FILE_FIRST_SCREEN_BLOCK_START";
  n.RENDER_FILE_FIRST_SCREEN_BLOCK_SUCCESS = "RENDER_FILE_FIRST_SCREEN_BLOCK_SUCCESS";
  n.RENDER_FILE_FIRST_SCREEN_START = "RENDER_FILE_FIRST_SCREEN_START";
  n.RENDER_FILE_FIRST_SCREEN_SUCCESS = "RENDER_FILE_FIRST_SCREEN_SUCCESS";
  n.SERVER_SSR_START = "SERVER_SSR_START";
  n.SERVER_SSR_SUCCESS = "SERVER_SSR_SUCCESS";
  n.RENDER_FILE_ALL_TIME_TO_VISIT = "RENDER_FILE_ALL_TIME_TO_VISIT";
  n.RENDER_FILE_ASYNC_STORE_LOAD_START = "RENDER_FILE_ASYNC_STORE_LOAD_START";
  n.RENDER_FILE_ASYNC_STORE_LOAD_END = "RENDER_FILE_ASYNC_STORE_LOAD_END";
  let U = n;
  (o = {}).APP_JS = "APP_JS";
  o.DOC_INDEX_JS = "DOC_INDEX_JS";
  o.CHUNK_ADIT_JS = "CHUNK_ADIT_JS";
  o.BEAR_BITABLE_EXTERNAL_JS = "BEAR_BITABLE_EXTERNAL_JS";
  o.BITABLE_VENDOR_JS = "BITABLE_VENDOR_JS";
  o.BITABLE_APP_JS = "BITABLE_APP_JS";
  o.BITABLE_APP_NEXT_JS = "BITABLE_APP_NEXT_JS";
  o.BITABLE_APP_SPA_JS = "BITABLE_APP_SPA_JS";
  o.BITABLE_APP_SPA_NEXT_JS = "BITABLE_APP_SPA_NEXT_JS";
  o.BITABLE_INDEX_MERGED = "BITABLE_INDEX_MERGED";
  o.DOCX_APP_NEXT_JS = "DOCX_APP_NEXT_JS";
  o.DOCX_APP_SPA_JS = "DOCX_APP_SPA_JS";
  o.DOCX_INDEX_MERGED = "DOCX_INDEX_MERGED";
  o.DOCX_INDEX = "DOCX_INDEX";
  o.SHEET_INDEX_MERGED = "SHEET_INDEX_MERGED";
  o.SHEET_APP_JS = "SHEET_APP_JS";
  o.SHEET_APP_SPA_JS = "SHEET_APP_SPA_JS";
  let W = o;
  let V = {
    [W.APP_JS]: /js\/app\..*\.js$/,
    [W.DOC_INDEX_JS]: /js\/doc_index\..*\.js$/,
    [W.CHUNK_ADIT_JS]: /js\/chunk_adit\..*\.js$/,
    [W.BEAR_BITABLE_EXTERNAL_JS]: /js\/bear-bitable-external\..*\.js$/,
    [W.BITABLE_VENDOR_JS]: /module\/vendors-vb_BitableDefault.*\.chunk\.js$/,
    [W.BITABLE_APP_JS]: /js\/bitable_app\..*\.js$/,
    [W.BITABLE_APP_NEXT_JS]: /js\/bitable_app_next\..*\.js$/,
    [W.BITABLE_APP_SPA_JS]: /js\/bitable_app_spa\..*\.js$/,
    [W.BITABLE_APP_SPA_NEXT_JS]: /js\/bitable_app_spa_next\..*\.js$/,
    [W.BITABLE_INDEX_MERGED]: /bitable\/(?:[0-9]+\.){3}[0-9]+\/(index_merged)(?:_es6)?\.js$/,
    [W.DOCX_APP_NEXT_JS]: /js\/docx_app_next\..*\.js$/,
    [W.DOCX_APP_SPA_JS]: /js\/docx_app_spa\..*\.js$/,
    [W.DOCX_INDEX_MERGED]: /docx\/(?:[0-9]+\.){3}[0-9]+\/(index_merged)(?:_es6)?\.js$/,
    [W.DOCX_INDEX]: /docx\/(?:[0-9]+\.){3}[0-9]+\/(index)(?:_es6)?\.js$/,
    [W.SHEET_APP_JS]: /js\/sheet_app\..*\.js$/,
    [W.SHEET_APP_SPA_JS]: /js\/sheet_app_spa\..*\.js$/,
    [W.SHEET_INDEX_MERGED]: /sheet\/(?:[0-9]+\.){3}[0-9]+\/index_merged\.js$/
  };
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var fileNodeConstants = require("file-node-constants") /*id: 356793*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let q = "doc_detail_page_";
  let J = `${q}visible`;
  let Y = `${q}interactive`;
  let Q = `${q}finish`;
  function ee(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let et = typeof window == "undefined" ? {} : hashHistoryCreator.createHashHistory();
  let ei = Proxy;
  let er = "ccm_file_load_duration_dev";
  let en = "perf_render_start";
  let eo = () => document.visibilityState === "visible";
  (l = {}).REACT_COMPONENT_ERROR = "react_component_error";
  l.CHUNK_LOAD_ERROR = "chunk_load_error";
  l.DEV_OOPS = "dev_oops";
  l.UNLOAD_BEFORE_LOADED = "unload_before_loaded";
  l.FETCH_TREE_ERROR = "fetch_tree_error";
  l.FETCH_INIT_INFO_ERROR = "fetch_init_info_error";
  l.FETCH_CLIENTVAR_ERROR = "fetch_clientvar_error";
  let el = l;
  (s = {})[s.LOAD = 1] = "LOAD";
  let es = s;
  (a = {})[a.WRONG_OPEN = 1] = "WRONG_OPEN";
  let ea = a;
  (c = {})[c.INVISIBLE = 1] = "INVISIBLE";
  let ec = c;
  let ed = {
    [fileNodeConstants.FileNodeTypes.DOCX]: function () {
      let e = [em(), W.DOCX_INDEX_MERGED, W.DOCX_INDEX];
      let i = {
        module: fileNodeConstants.FileNodeTypes.DOCX,
        isCollectFromSpa: true,
        isCollectFromSameModule: true,
        resources: e,
        endStages: {
          [H.RENDER_DOCX_FIRST_SCREEN_SUCCESS]: es.LOAD,
          [H.FETCH_DOCX_CLIENTVARS_SUCCESS]: es.LOAD,
          [H.RENDER_DOCX_ALLOW_EDIT]: es.LOAD,
          [H.RENDER_DOCX_CLIENTVARS_ALL_DONE]: es.LOAD,
          [H.RENDER_DOCX_HEADER_SUCCESS]: es.LOAD,
          [H.RENDER_DOCX_CATALOGUE_SUCCESS]: es.LOAD,
          [H.RENDER_DOCX_COMMENT_SUCCESS]: es.LOAD
        }
      };
      delete i.endStages[H.RENDER_DOCX_COMMENT_SUCCESS];
      delete i.endStages[H.RENDER_DOCX_HEADER_SUCCESS];
      return i;
    }
  };
  let eu = () => ({
    pc: {
      [fileNodeConstants.FileNodeTypes.DOCX]: () => {
        let e = {
          [U.RENDER_FILE_ALLOW_EDIT]: false,
          [U.RENDER_FILE_CATALOGUE_SUCCESS]: false,
          [U.RENDER_FILE_COMMENT_SUCCESS]: false,
          [U.RENDER_FILE_FIRST_SCREEN_BLOCK_SUCCESS]: false
        };
        return throttledOmitPathStringify.omitPathStringify(e, [U.RENDER_FILE_COMMENT_SUCCESS]);
      }
    }
  });
  let eh = () => ({
    [fileNodeConstants.FileNodeTypes.DOC]: {},
    [fileNodeConstants.FileNodeTypes.DOCX]: {},
    [fileNodeConstants.FileNodeTypes.SHEET]: {},
    [fileNodeConstants.FileNodeTypes.BITABLE]: {},
    [fileNodeConstants.FileNodeTypes.RECORD]: {}
  });
  let ef = eu();
  class eg {
    get extraData() {
      if (typeof window == "undefined") {
        return;
      }
      let e = {};
      let {
        start: i,
        afterAppRender: r,
        afterImport: n,
        afterEntryJSExecEnd: o
      } = F;
      let {
        domReadyTime: l,
        parseStartTime: s,
        templateRequestInfo: a,
        cssDownloadStartTime: c,
        cssDownloadEndTime: d
      } = window;
      let {
        timing: u
      } = window.performance;
      if (this.from === "url") {
        if (l && s) {
          let {
            renderStartTime: h
          } = this;
          e.render_start_time = h;
          e.html_download_end = s - h;
          e.html_css_start = c - h;
          e.html_css_end = d - h;
          e.html_parse_end = l - h;
          if (i) {
            e.app_js_download_end = i - h;
            e.app_js_after_import = n - h;
            e.app_js_exec_end = r - h;
            e.entry_js_exec_end = o - h;
          }
          e.ssr_from = (a == null ? undefined : a.ssrFrom) || "none";
          this.appendTimeAndDuration(e, [["unload_event", u.unloadEventStart, u.unloadEventEnd], ["redirect", u.redirectStart, u.redirectEnd], ["fetch_app_cache", u.fetchStart, u.domainLookupStart], ["doc_dns_lookup", u.domainLookupStart, u.domainLookupEnd], ["connection", u.connectStart, u.connectEnd], ["secure_connection", u.secureConnectionStart, u.connectEnd], ["request_to_server", u.requestStart, u.responseStart], ["response_to_client", u.responseStart, u.responseEnd]]);
          this.appendServerTiming(e);
          let f = function () {
            if (!window.performance.getEntriesByType) {
              return null;
            }
            let e = window.performance.getEntriesByType("resource");
            let {
              navigationStart: i
            } = window.performance.timing;
            let r = x(e, "app");
            let n = x(e, "merge_app--business_tools_chunk");
            let o = x(e, "merge_app--framework_chunk");
            if (!r && !n && !o) {
              return null;
            }
            let l = Math.min(s(n), s(o));
            function s(e) {
              if (e) {
                return e.startTime;
              } else {
                return Infinity;
              }
            }
            function a(e) {
              if (e) {
                return e.startTime + e.duration;
              } else {
                return 0;
              }
            }
            return {
              startTime: Math.round(i + Math.min(s(r), l)),
              endTime: Math.round(i + Math.max(a(r), Math.max(a(n), a(o))))
            };
          }();
          if (f !== null) {
            e.app_js_load_time_dom_ready_to_app_download_start = f.startTime - l;
            e.app_js_load_time_app_download_time = f.endTime - f.startTime;
            e.app_js_load_time_app_download_end_to_exec_start = F.start - f.endTime;
          }
        }
      } else {
        e.history_action = this.historyAction;
        e.previous_module = this.prevModule;
        e.previous_file_id = this.prevFileId;
      }
      return e;
    }
    appendTimeAndDuration(e, i) {
      let {
        renderStartTime: r
      } = this;
      i.forEach(i => {
        let [n, o, l] = i;
        e[`${n}_time`] = l === 0 ? l : l - r;
        e[`${n}_duration`] = l - o;
      });
    }
    appendServerTiming(e) {
      if (typeof window == "undefined") {
        return;
      }
      let {
        performance: i
      } = window;
      if (!i || !i.getEntriesByType) {
        return;
      }
      let r = i.getEntriesByType("navigation");
      if (r && r.length) {
        r.forEach(i => {
          let {
            serverTiming: r
          } = i;
          if (r && r.length) {
            r.forEach(i => {
              let {
                name: r,
                duration: n
              } = i;
              if (r) {
                e[`server_timing_${r}`] = n;
              }
            });
          }
        });
      }
    }
    getShouldRenderStart() {
      return !!this.isSupportCurrentModule() && this.curFileId !== this.prevFileId;
    }
    appendLoadMainStageDurationListItem(e, i) {
      for (let [r, n] of Object.entries(i)) {
        if (n !== undefined) {
          this.updateLoadMainStageDurationList(e, r, n);
        }
      }
    }
    getLoadMainStageHtmlLoaded(e) {
      if (typeof window == "undefined") {
        return;
      }
      let {
        start: i,
        afterAppRender: r,
        afterImport: n,
        afterEntryJSExecEnd: o
      } = F;
      let {
        domReadyTime: l,
        docSSRDomReadyTime: s,
        parseStartTime: a,
        cssDownloadStartTime: c,
        cssDownloadEndTime: d
      } = window;
      let u = window.performance.timing;
      this.appendLoadMainStageDurationListItem(e, {
        [U.RENDER_START]: this.renderStartTime
      });
      if (this.from === "url") {
        this.appendLoadMainStageDurationListItem(e, {
          [U.REQUEST_START]: u.requestStart,
          [U.RESPONSE_START]: u.responseStart,
          [U.HTML_DOWNLOAD_END]: a,
          [U.HTML_CSS_START]: c,
          [U.HTML_CSS_END]: d,
          [U.HTML_SSR_PARSE_SUCCESS]: s,
          [U.HTML_PARSE_END]: l,
          [U.APP_JS_DOWNLOAD_END]: i,
          [U.APP_JS_AFTER_IMPORT]: n,
          [U.APP_JS_EXEC_END]: r,
          [U.ENTRY_JS_EXEC_END]: o
        });
      }
    }
    initReportCleanUrlBeforeCost4() {
      if (this.platform !== "pc" || this.curFileType !== fileNodeConstants.FileNodeTypes.DOCX || this.from !== "url" || !location?.href) {
        return;
      }
      let i = location.href;
      let r = et.listen((e, n) => {
        if (this.stageStatus.stage4) {
          r();
          return;
        }
        try {
          if (n !== "REPLACE" || !F.afterAppRender) {
            return;
          }
          let {
            pathname: e,
            search: o
          } = P(i, true);
          let {
            pathname: l,
            search: s,
            token: a
          } = P(location.href, true);
          if (e !== l) {
            r();
            return;
          }
          let c = Error.stackTraceLimit;
          Error.stackTraceLimit = 30;
          flowDocEventCollector.collectEvent("doc_bug_track_dev", {
            action: "replace_url_before_ttu",
            info: {
              stack: (Error("").stack || "").replaceAll(a, ""),
              preSearch: [...new URLSearchParams(o).keys()].join(","),
              curSearch: [...new URLSearchParams(s).keys()].join(",")
            }
          });
          Error.stackTraceLimit = c;
        } catch (e) {} finally {
          i = location.href;
        }
      });
    }
    init() {
      if (typeof window != "undefined") {
        this.path = location?.href;
        this.platform = this.getPlatform();
        this.prevModule = "";
        this.curModule = fileNodeConstants.FileNodeTypes.DOCX;
        this.moduleCrumbs = this.curModule;
        this.curPageType = "docx";
        this.prevFileId = "";
        this.curFileId = A();
        this.from = "url";
        this.appJsLoaded = 1;
        this.unusualCaseRecord = {};
        this.getProfileContext = () => {};
        this.hadCollectCCMFileLoadDuration = false;
        this.initReportCleanUrlBeforeCost4();
        window.addEventListener("beforeunload", () => {
          this.handleBeforeUnload();
          this.collectCCMFileLoadDuration("beforeunload");
          this.reportOtherEvent();
          this.curFileType = "docx";
          this.hadCollectCCMFileLoadDuration = false;
        });
        et.listen((e, i) => {
          if (i === "REPLACE") {
            return;
          }
          if (this.isSupportCurrentModule() && this.lastStart) {
            if (this.eventParams.unload_before_loaded_status === undefined) {
              this.setExtraData({
                unload_before_loaded_status: ea.WRONG_OPEN
              });
            }
            this.renderFail(el.UNLOAD_BEFORE_LOADED);
          }
          this.path = e == null ? undefined : e.href;
          this.historyAction = i;
          this.prevModule = this.curModule;
          this.curModule = fileNodeConstants.FileNodeTypes.DOCX;
          this.curPageType = "docx";
          let r = this.prevFileId !== this.curFileId;
          this.prevFileId = this.curFileId;
          this.curFileId = A();
          this.from = this.prevModule;
          this.unusualCaseRecord = {};
          if (r) {
            if (!this.hadCollectCCMFileLoadDuration) {
              this.collectCCMFileLoadDuration("spaChange");
            }
            this.reportOtherEvent();
            ef = eu();
            this.LoadMainStageDurationList = eh();
            this.curFileLoadedSuccessJudgeItems = this.proxyCurFileLoadedSuccessJudgeItems();
            if (this.curFileType === "docx") {
              this.hadCollectCCMFileLoadDuration = false;
              this.updateLoadMainStageDurationList(this.curFileType, U.RENDER_FILE_FIRST_SCREEN_START, Date.now());
            }
          }
          this.curModuleConfig = this.getModuleConfig(this.curModule);
          if (this.getShouldRenderStart()) {
            this.lastStart = this.start;
            this.moduleCrumbs += `,${this.curModule}`;
            this.renderStart(Date.now());
          }
          this.setDriveFileType("none");
        });
      }
    }
    getStartTime() {
      return this.renderStartTime;
    }
    isSupportCurrentModule() {
      return !!this.curModuleConfig && (this.from === "url" || !!this.curModuleConfig.isCollectFromSpa && (this.curModule !== this.prevModule || this.curModuleConfig.isCollectFromSameModule));
    }
    logTimeEnd(e, i) {
      let r = `perf_${e}_${i}`;
      performance.mark(`${r}_end`);
      performance.measure(`performanceStageCollector ${e}-${i}`, en, `${r}_end`);
    }
    initCollectParams() {
      this.stageTimes = {};
      this.stageStatus = {};
      for (let e = 1; e <= 15; e++) {
        this.stageTimes[`costTime${e}`] = 0;
        this.stageStatus[`stage${e}`] = 0;
      }
      if (this.curFileType === fileNodeConstants.FileNodeTypes.DOCX && this.loadedDocx) {
        this.updateStage(H.DOCX_JS_LOADED, fileNodeConstants.FileNodeTypes.DOCX, this.renderStartTime);
      }
    }
    collectMaxCostTime() {
      let e = 0;
      let i = "";
      for (let r = 1; r <= 15; r++) {
        let n = this.stageTimes[`costTime${r}`];
        if (n > e) {
          e = n;
          i = `stage${r}`;
        }
      }
      return {
        costTimeMax: e,
        costTimeMaxStage: i
      };
    }
    setProfileContext(e) {
      this.getProfileContext = e;
    }
    renderStart(e) {
      this.curFileType = "docx";
      this.curModuleConfig = this.getModuleConfig(this.curModule);
      this.curFileLoadedSuccessJudgeItems = this.proxyCurFileLoadedSuccessJudgeItems();
      if (this.isSupportCurrentModule()) {
        this.start = true;
        this.renderStartTime = e;
        performance.mark(en);
        this.updateLoadMainStageDurationList(this.curFileType, U.RENDER_FILE_FIRST_SCREEN_START, e);
        if (this.from === "url") {
          this.appJsLoadedTime = Date.now() - this.renderStartTime;
        }
        this.initCollectParams();
      }
    }
    updateStage(e, i, n = Date.now()) {
      let o = `stage${e}`;
      if (!this.start || this.curModule !== i || this.stageStatus[o] === 1) {
        return;
      }
      this.logTimeEnd(i, e);
      if (e <= 0 || e > 15) {
        this.stopCollect();
        return;
      }
      let l = this.getModuleConfig(this.curModule);
      if (!l) {
        return;
      }
      let s = l.endStages[e] || es.LOAD;
      this.stageTimes[`costTime${e}`] = n - this.renderStartTime - 0;
      this.stageStatus[o] = 1;
      if (this.isRenderEnd(s)) {
        this.collectEnd("0");
      }
      (function (e) {
        let i = new Map([[14, J], [4, Y], [11, Q]]);
        if (!i.has(e)) {
          return;
        }
        let n = i.get(e);
        performanceStoreHook.usePerformanceStore.getState().addDurationPoint(n, performanceTimeUtil.getPerformanceNow());
        if (n === Q) {
          let {
            duration: e
          } = performanceStoreHook.usePerformanceStore.getState();
          let {
            [J]: i,
            [Y]: n,
            [Q]: o
          } = e;
          asyncRetryUtils.retryPromise(() => Promise.resolve().then(require.bind(require, "tea-analytics-event-tracker") /*id: 236290*/)).then(e => {
            let {
              trackEvent: r
            } = e;
            requestIdleCallback(() => {
              r("doc_detail_page_finish", {
                doc_detail_page_visible: i,
                doc_detail_page_interactive: n,
                doc_detail_page_finish: o,
                success: "1",
                custom_app_name: "flow-doc-detail"
              }, {
                key: "doc_detail_page_finish",
                withSlardar: true
              });
            });
          });
        }
      })(e);
    }
    runInNextRender(e) {
      if (typeof window == "undefined") {
        return;
      }
      let i = {
        current: null
      };
      if (eo()) {
        window.requestAnimationFrame(() => {
          i.current = Date.now();
          e(true);
        });
      } else {
        i.current = Date.now();
        e(false);
      }
      return i;
    }
    updateLoadMainStageDurationList(e, i) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
      if (this.LoadMainStageDurationList?.[e] && !this.LoadMainStageDurationList[e][i]) {
        this.LoadMainStageDurationList[e][i] = n - 0;
      }
      let o = this.curFileLoadedSuccessJudgeItems;
      if (o && i in o) {
        o[i] = true;
      }
    }
    updateLoadMainStage(e, i) {
      this.updateLoadMainStageDurationList("docx", e, i);
    }
    updateLoadMainStageDurationListByNextRender(e, i) {
      if (typeof window != "undefined") {
        if (eo()) {
          window.requestAnimationFrame(() => {
            this.updateLoadMainStageDurationList(e, i);
          });
        } else {
          this.updateLoadMainStageDurationList(e, i);
        }
      }
    }
    updateLoadMainStageByNextRender(e) {
      this.updateLoadMainStageDurationListByNextRender("docx", e);
    }
    updateStageByNextRender(e, i) {
      return this.runInNextRender(r => {
        if (!r) {
          this.unusualCaseRecord[ec.INVISIBLE] = true;
        }
        this.updateStage(e, i);
      });
    }
    setExtraData(e) {
      Object.assign(this.eventParams, e);
    }
    setPerfParams(e) {
      if (j) {
        Object.keys(e).forEach(e => $(e));
      }
      Object.keys(e).forEach(i => {
        this.perfParams[i] ||= e[i];
      });
    }
    setDriveFileType(e) {
      this.driveFileType = e;
    }
    setOtherEventData(e, i) {
      if (this.otherEventParams[e]) {
        var r;
        if ((r = this.otherEventParams[e]) !== null && r !== undefined) {
          r.push(i);
        }
      } else {
        Object.assign(this.otherEventParams, {
          [e]: [i]
        });
      }
    }
    reportOtherEvent() {
      if (typeof window == "undefined") {
        return;
      }
      let e = this.getProfileContext();
      let i = {
        path: this.path,
        file_type: this.curFileType,
        file_id: this.curFileId,
        doc_profile: JSON.stringify(e)
      };
      let {
        tenantId: r
      } = window.User;
      let n = {
        tenant_id: r ? mixedHashUtil.generateHash(r) : ""
      };
      let o = [];
      let l = [];
      Object.keys(this.otherEventParams).forEach(e => {
        var r;
        if ((r = this.otherEventParams[e]) !== null && r !== undefined) {
          r.forEach(r => {
            l.push(`flow_doc_${e}`);
            o.push({
              ...r,
              ...i
            });
          });
        }
      });
      B(l, o, true, n);
      this.otherEventParams = {};
    }
    isRenderEnd(e) {
      if (!this.curModuleConfig) {
        return;
      }
      let {
        endStages: i
      } = this.curModuleConfig;
      for (let r in i) {
        if (i[r] === e && !this.stageStatus[`stage${r}`]) {
          return false;
        }
      }
      return true;
    }
    handleBeforeUnload() {
      if (!this.isSupportCurrentModule()) {
        this.renderFail(el.UNLOAD_BEFORE_LOADED);
      }
    }
    renderFail(e) {
      if (this.start && this.curModuleConfig) {
        this.collectEnd(e);
      }
    }
    stopCollect() {
      this.start = false;
      this.eventParams = {};
      this.curModuleConfig = null;
    }
    collectEnd(e) {
      if (typeof window != "undefined") {
        this.setExtraData({
          result_code: e
        });
        if (this.start) {
          this.collectTeaLog();
          if (this.curFileType === fileNodeConstants.FileNodeTypes.DOCX) {
            this.loadedDocx = true;
          }
          window.__allRenderEnd = true;
        }
      }
    }
    getMemoCacheStatus() {
      if (arguments.length > 0 && arguments[0] !== undefined) {
        arguments[0];
      }
      let e = {};
      if (this.memoCacheStatus) {
        e = this.memoCacheStatus;
        this.memoCacheStatus = null;
      } else {
        e = {};
        this.memoCacheStatus = e;
      }
      return e;
    }
    collectTeaLog() {
      if (typeof window == "undefined" || !this.curModuleConfig) {
        return;
      }
      let n = this.getProfileContext();
      let o = Object.keys(this.unusualCaseRecord).join(",");
      let l = this.getMemoCacheStatus([W.APP_JS]);
      let s = eb();
      let a = b();
      let c = Object.assign({}, this.eventParams, {
        appJsLoaded: this.appJsLoaded,
        appJsLoadedTime: this.appJsLoadedTime,
        from: this.from,
        platform: this.platform,
        path: this.path,
        branch: window.scm && window.scm.branch || "",
        file_id: this.curFileId,
        ...this.perfParams,
        ...this.extraData,
        ...this.stageTimes,
        ...this.stageStatus,
        ...this.collectMaxCostTime(),
        ...n,
        module: this.curModule,
        cdnHost: this.getCdnHost(),
        isFastSpaceTemplate: !!window.isFastSpaceTemplate,
        unusualCaseCodes: o,
        ...l,
        template_log_id: this.from === "url" ? window.templateRequestInfo?.logId : undefined,
        isChunkedRender: +!!window.isChunkedRender,
        scmTpl: window.scm?.tpl,
        drive_file_type: this.curModule === fileNodeConstants.FileNodeTypes.DRIVE ? this.driveFileType : undefined,
        ...this.getPageInfoParams(),
        moduleCrumbs: this.moduleCrumbs,
        timeDiffBetweenPreviousNavigateAndRenderStart: this.from === "url" && a ? this.renderStartTime - a : 0,
        supportHigh: window.uaJudge?.supportHigh
      });
      if (c.result_code === el.UNLOAD_BEFORE_LOADED) {
        c.unload_time = Date.now() - this.renderStartTime;
      }
      this.stopCollect();
      flowDocEventCollector.collectEvent("client_performance_stage", c);
      (function (e) {
        if (!performance || !performance.getEntriesByType) {
          return;
        }
        let i = function (e, i, r) {
          let n = performance.getEntriesByType("resource");
          let o = n.length;
          let l = {};
          let s = undefined;
          let a = (r == null ? undefined : r.chunkNameRewrite) || {};
          for (let r = 0; r < o; r++) {
            let {
              name: o
            } = n[r];
            if (o.endsWith("css")) {
              if (e.has(o)) {
                ev(e.get(o), n[r], l);
              }
              continue;
            }
            if (!o.endsWith("js")) {
              continue;
            }
            let c = function (e) {
              let i;
              let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
              i = r ? RegExp("\\/([\\-\\_a-z0-9]+)\\.[\\.\\-\\_\\[\\]a-z0-9]*js") : RegExp("js\\/([\\-\\_a-z0-9]+)\\.[\\.\\-\\_\\[\\]a-z0-9]+js");
              let n = e.match(i);
              if (n) {
                return n[1];
              }
            }(o, s);
            if (!c) {
              continue;
            }
            let d = i.indexOf(c = a[c] || c);
            if (d !== -1 && (ev(c, n[r], l), i.splice(d, 1), !i.length)) {
              break;
            }
          }
          return l;
        }(e, ["app", "merge_app--framework_chunk", "merge_app--business_tools_chunk", "suite_header"]);
        flowDocEventCollector.collectEvent("record_main_resource_timing", i);
      })(s);
    }
    setFirstScreenBlockLoaded() {
      let e = this.curFileLoadedSuccessJudgeItems;
      if (e) {
        e[U.RENDER_FILE_FIRST_SCREEN_BLOCK_SUCCESS] = true;
      }
    }
    setCatalogueLoaded() {
      let e = this.curFileLoadedSuccessJudgeItems;
      if (e) {
        e[U.RENDER_FILE_CATALOGUE_SUCCESS] = true;
      }
    }
    setCommentLoaded() {
      let e = this.curFileLoadedSuccessJudgeItems;
      if (e) {
        e[U.RENDER_FILE_COMMENT_SUCCESS] = true;
      }
    }
    getIsFileLoadedSuccess() {
      if (this.curFileLoadedSuccessJudgeItems) {
        for (let e in this.curFileLoadedSuccessJudgeItems) {
          if (!this.curFileLoadedSuccessJudgeItems[e]) {
            return false;
          }
        }
      }
      return true;
    }
    getfirstScreenBlockDurationStartAndEnd(e) {
      if (e && e.length !== 0) {
        try {
          e.sort((e, i) => {
            let o = JSON.parse(e.load_main_stage_duration_list)?.block_init || 0;
            let l = JSON.parse(i.load_main_stage_duration_list)?.block_init || 0;
            return o - l;
          });
          let i = JSON.parse(e[0].load_main_stage_duration_list);
          this.updateLoadMainStageDurationList(this.curFileType, U.RENDER_FILE_FIRST_SCREEN_BLOCK_START, (i == null ? undefined : i.block_init) || 0);
          e.sort((e, i) => {
            let r = JSON.parse(e.load_main_stage_duration_list);
            let n = JSON.parse(i.load_main_stage_duration_list);
            return ((n == null ? undefined : n.block_ttu) || (n == null ? undefined : n.block_ttv)) - ((r == null ? undefined : r.block_ttu) || (r == null ? undefined : r.block_ttv));
          });
          let r = JSON.parse(e[0].load_main_stage_duration_list);
          this.updateLoadMainStageDurationList(this.curFileType, U.RENDER_FILE_FIRST_SCREEN_BLOCK_SUCCESS, (r == null ? undefined : r.block_ttu) || (r == null ? undefined : r.block_ttv));
        } catch (e) {
          return;
        }
      }
    }
    getFromCreate() {
      if (typeof window == "undefined") {
        return;
      }
      let e = window.sessionStorage.getItem("__ENTER_FROM__");
      let i = window.location.search.indexOf("from=wiki") !== -1;
      let r = window.sessionStorage.getItem("__create_suite_sended");
      return (e === "create_suite" || e === "wiki" || i) && !r;
    }
    collectCCMFileLoadDuration(e) {
      var i;
      if (typeof window == "undefined") {
        return;
      }
      let o = ["sheet", "doc", "docx"].includes(this.curFileType);
      let l = this.curFileLoadedSuccessJudgeItems && !!Object.keys(this.curFileLoadedSuccessJudgeItems);
      let s = this.LoadMainStageDurationList[this.curFileType];
      if (!o || !l || !s || this.hadCollectCCMFileLoadDuration) {
        return;
      }
      let a = this.getCurFileTypeLifeCycles(this.curFileType);
      let c = this.getProfileContext();
      let d = this.getIsFileLoadedSuccess();
      let u = {};
      if (a.additionalStageLifeCycle) {
        Object.assign(u, a.additionalStageLifeCycle(c, this.curFileType));
      }
      this.getLoadMainStageHtmlLoaded(this.curFileType);
      if (D[this.curFileType]) {
        this.updateLoadMainStage(U.EXTERNAL_LOAD_START, D[this.curFileType].externalLoadStart);
        this.updateLoadMainStage(U.EXTERNAL_LOAD_SUCCESS, D[this.curFileType].externalLoadSuccess);
        this.updateLoadMainStage(U.GARR_INDEX_LOAD_START, D[this.curFileType].garrIndexLoadStart);
        this.updateLoadMainStage(U.GARR_INDEX_LOAD_SUCCESS, D[this.curFileType].garrIndexLoadSuccess);
      }
      let h = d ? s[U.RENDER_FILE_FIRST_SCREEN_SUCCESS] - this.renderStartTime : Date.now() - this.renderStartTime;
      let f = b();
      let p = {
        path: this.path,
        file_type: this.curFileType,
        file_id: this.curFileId,
        doc_profile: JSON.stringify(c),
        is_file_loaded_success: +!!d,
        load_main_stage_duration_list: JSON.stringify(s),
        load_duration_ms: h,
        open_from: this.from,
        no_ssr: +((i = window.collectParams) === null || i === undefined || !i.hasSsrRender),
        more_perf_params: JSON.stringify(this.perfParams),
        report_source: e,
        moduleCrumbs: this.moduleCrumbs,
        template_log_id: this.from === "url" ? window.templateRequestInfo?.logId : undefined,
        supportHigh: window.uaJudge?.supportHigh,
        larkPrefetch: +!!objectPathGetDefault.getObjectPathDefault(window, ["SERVER_RUNTIME_DATA", "header_info", "is_feed_prefetch"], false),
        timeDiffBetweenPreviousNavigateAndRenderStart: this.from === "url" && f ? this.renderStartTime - f : 0,
        ...u
      };
      if (e === "beforeunload") {
        B(`flow_doc_${er}`, p, true);
      } else {
        flowDocEventCollector.collectEvent(er, p);
      }
      if (a.afterReportLifeCycle) {
        a.afterReportLifeCycle();
      }
      this.hadCollectCCMFileLoadDuration = true;
    }
    getCdnHost() {
      if (!window.performance.getEntries) {
        return null;
      }
      let e = x(window.performance.getEntries(), (this.curFileType === fileNodeConstants.FileNodeTypes.DOCX ? em() : W.APP_JS).slice(0, -3).toLowerCase());
      if (e && e.name) {
        let {
          host: i
        } = new h(e.name);
        return i;
      }
      return "";
    }
    docxChunkRenderUpdate() {
      this.updateLoadMainStageDurationList(this.curFileType, U.SERVER_SSR_START, objectPathGetDefault.getObjectPathDefault(window, ["ssrInfo", "timings", "serverSsrStartTime"], 0));
      this.updateLoadMainStageDurationList(this.curFileType, U.SERVER_SSR_SUCCESS, objectPathGetDefault.getObjectPathDefault(window, ["ssrInfo", "timings", "serverSsrSuccessTime"], 0));
    }
    docxBlockLoadDurationDevRelevant() {
      var e;
      let i = "ccm_block_load_duration_dev";
      let r = this.stageTimes.costTime4 + this.renderStartTime;
      let n = (e = this.otherEventParams[i]) === null || e === undefined ? undefined : e.filter(e => {
        if (e.is_first_screen) {
          try {
            let i = JSON.parse(e.load_main_stage_duration_list);
            r = Math.max(r, i.block_ttu || 0, i.block_ttv || 0);
          } catch (e) {}
        }
        return e.is_first_screen;
      });
      this.getfirstScreenBlockDurationStartAndEnd(n);
      delete this.otherEventParams[i];
      return n;
    }
    getPageInfoParams() {
      return {
        page_type: this.curPageType,
        page_token: function (e) {
          var r;
          let o = ((r = window) === null || r === undefined ? undefined : r.docsLocation?.href) || location?.href;
          if (O[o]) {
            return O[o];
          }
          let {
            token: l
          } = P(o, true);
          if (l) {
            let e = mixedHashUtil.generateHash(l);
            O[o] = e;
            return e;
          }
          return "none";
        }(),
        loc_file_id: A(),
        loc_file_type: "docx"
      };
    }
    getPlatform() {
      return "pc";
    }
    getModuleConfig(e) {
      let i = ed[e];
      if (isFunctionUtil_1.isFunction(i)) {
        return i();
      } else {
        return i;
      }
    }
    getFileLoadedSuccessJudgeItems() {
      let i = ef == null ? undefined : ef[this.platform]?.[this.curFileType];
      if (i) {
        if (isFunctionUtil_1.isFunction(i)) {
          return i();
        } else {
          return i;
        }
      } else {
        return null;
      }
    }
    proxyCurFileLoadedSuccessJudgeItems() {
      let e = this.getFileLoadedSuccessJudgeItems();
      if (e) {
        return new ei(e, {
          get: (e, i) => e[i],
          set: (e, i, r) => {
            if (e[i] === r) {
              return true;
            }
            let o = this.getIsFileLoadedSuccess();
            e[i] = r;
            let l = this.getIsFileLoadedSuccess();
            let s = this.LoadMainStageDurationList?.[this.curFileType];
            let a = Object.keys(e);
            if (!o && l && s) {
              let e = a.map(e => s[e]).sort((e, i) => i - e)[0];
              this.updateLoadMainStageDurationList(this.curFileType, U.RENDER_FILE_FIRST_SCREEN_SUCCESS, e);
              this.collectCCMFileLoadDuration("fileLoadSuccess");
            }
            return true;
          }
        });
      } else {
        return null;
      }
    }
    getCurFileTypeLifeCycles(e) {
      switch (e) {
        case fileNodeConstants.FileNodeTypes.DOC:
        case fileNodeConstants.FileNodeTypes.DOCX:
          return {
            additionalStageLifeCycle: this.docxAdditionalStageFunc,
            afterReportLifeCycle: this.docxAfterReportFunc
          };
        case fileNodeConstants.FileNodeTypes.SHEET:
          return {
            additionalStageLifeCycle: this.sheetAdditionalStageFunc
          };
        default:
          return {};
      }
    }
    constructor() {
      ee(this, "appJsLoaded", 0);
      ee(this, "appJsLoadedTime", 0);
      ee(this, "start", false);
      ee(this, "lastStart", false);
      ee(this, "prevModule", undefined);
      ee(this, "curModule", undefined);
      ee(this, "curFileType", "docx");
      ee(this, "curPageType", undefined);
      ee(this, "prevFileId", undefined);
      ee(this, "curFileId", undefined);
      ee(this, "historyAction", undefined);
      ee(this, "renderStartTime", undefined);
      ee(this, "platform", undefined);
      ee(this, "getProfileContext", undefined);
      ee(this, "stageStatus", {});
      ee(this, "stageTimes", {});
      ee(this, "eventParams", {});
      ee(this, "otherEventParams", {});
      ee(this, "path", "");
      ee(this, "unusualCaseRecord", {});
      ee(this, "hadCollectCCMFileLoadDuration", false);
      ee(this, "curModuleConfig", null);
      ee(this, "curFileLoadedSuccessJudgeItems", {});
      ee(this, "driveFileType", undefined);
      ee(this, "memoCacheStatus", null);
      ee(this, "perfParams", {});
      ee(this, "moduleCrumbs", undefined);
      ee(this, "loadedDocx", false);
      ee(this, "from", undefined);
      ee(this, "LoadMainStageDurationList", eh());
      ee(this, "sheetAdditionalStageFunc", () => {
        let e = this.getMemoCacheStatus();
        this.appendLoadMainStageDurationListItem(this.curFileType, {
          [U.SECOND_CHUNK_INJECT_SERVER_END]: objectPathGetDefault.getObjectPathDefault(window, ["chunk2InjectServerTime"], 0),
          [U.SERVER_SSR_START]: objectPathGetDefault.getObjectPathDefault(window, ["serverSsrStartTime"], 0),
          [U.SERVER_SSR_SUCCESS]: objectPathGetDefault.getObjectPathDefault(window, ["serverSsrSuccessTime"], 0)
        });
        return {
          ...e,
          from_create: this.getFromCreate().toString()
        };
      });
      ee(this, "docxAdditionalStageFunc", (e, i) => {
        let l = JSON.stringify(this.docxBlockLoadDurationDevRelevant());
        if (i === fileNodeConstants.FileNodeTypes.DOCX) {
          this.docxChunkRenderUpdate();
        }
        if (e && e.comment === 0) {
          this.setCommentLoaded();
        }
        let {
          memoCacheStatus: s
        } = this;
        this.memoCacheStatus = null;
        this.appendLoadMainStageDurationListItem(this.curFileType, {
          [U.SECOND_CHUNK_INJECT_SERVER_END]: window.chunk2InjectServerTime,
          [U.SECOND_CHUNK_ES6_CHECK_END]: window.chunk2Es6CheckTime,
          [U.SECOND_CHUNK_LANG_I18N_START]: window.chunk2langI18InitTime,
          [U.SECOND_CHUNK_LANG_I18N_END]: window.chunk2langI18nEndTime
        });
        return {
          has_catalogue: this.eventParams?.has_catalogue || false,
          fp_ssr_dom_amounts: window.collectParams?.fpSSRDomAmounts,
          fp_max_dom_amounts: window.collectParams?.fpMaxDomAmounts,
          load_main_resource_duration_list: JSON.stringify(Object.assign({}, function (e) {
            let i = {};
            performance.getEntriesByType("resource").forEach(r => {
              let {
                name: n
              } = r;
              if (e.has(n)) {
                let o = e.get(n);
                ev(o, r, i);
                i[`${o}_all_performance_timing`] = r;
              }
            });
            return i;
          }(eb()), function () {
            let {
              langUrl: e
            } = window;
            let i = {};
            if (e) {
              performance.getEntriesByName(e).forEach(e => {
                ev("chunk2_langI18", e, i);
              });
            }
            return i;
          }(), ...Object.values(function (e) {
            let i = {};
            performance.getEntriesByType("resource").forEach(r => {
              for (let n = 0; n < e.length; ++n) {
                if (V[e[n]].test(r.name)) {
                  let o = e[n].toLowerCase();
                  i[`${o}_resource_timing`] = {};
                  ev(`${o}`, r, i[`${o}_resource_timing`]);
                  i[`${o}_resource_timing`] = JSON.stringify(i[`${o}_resource_timing`]);
                }
              }
            });
            return i;
          }([em(), W.DOCX_INDEX, W.DOCX_INDEX_MERGED])).map(e => JSON.parse(e)))),
          load_first_screen_block_duration_list: l,
          from_create: this.getFromCreate().toString(),
          ...s
        };
      });
      ee(this, "docxAfterReportFunc", () => {
        window.sessionStorage.setItem("__create_suite_sended", "true");
      });
    }
  }
  var ep = new eg();
  function em() {
    if (window.is_from_docx_spa) {
      return W.DOCX_APP_SPA_JS;
    } else if (window.is_from_mpa && window.is_from_mpa2) {
      return W.DOCX_APP_NEXT_JS;
    } else {
      return W.APP_JS;
    }
  }
  function ev(e, i, r) {
    e = e.replace(/\-/g, "_");
    let {
      domainLookupStart: n,
      domainLookupEnd: o,
      connectStart: l,
      connectEnd: s,
      requestStart: a,
      responseEnd: c,
      secureConnectionStart: d,
      fetchStart: u,
      transferSize: h,
      initiatorType: f,
      startTime: g,
      responseStart: p
    } = i;
    function m(e, i) {
      return Number((e - i).toFixed(2));
    }
    r[`${e}_dns_lookup`] = m(o, n);
    r[`${e}_connect_time`] = m(s, l);
    r[`${e}_request_time`] = m(c, a);
    r[`${e}_used_time`] = m(c, u);
    r[`${e}_download_time`] = m(c, p);
    if (d) {
      r[`${e}_SSL_time`] = m(s, d);
    }
    r[`${e}_is_cache`] = h === 0 ? "True" : "False";
    r[`${e}_transfer_size`] = h;
    r[`${e}_initiator_type`] = f;
    r[`${e}_start_time`] = g;
  }
  function eb() {
    let e = ["first_css", "second_css", "third_css"];
    return new Map(Array.from(document.querySelectorAll("link[rel=stylesheet]")).slice(0, 3).map((i, r) => [i.href, e[r]]));
  }
  new eg();
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxErrorStatusConsts = require("docx-error-status-consts") /*id: 731910*/;
  class ek extends docxErrorStatusConsts.DocxError {
    get from() {
      if (ep == null) {
        return undefined;
      } else {
        return ep.from;
      }
    }
    init() {
      if (ep == null) {
        return undefined;
      } else {
        return ep.init();
      }
    }
    renderStart(e) {
      if (ep == null) {
        return undefined;
      } else {
        return ep.renderStart(e);
      }
    }
    setProfileContext(e) {
      ep.setProfileContext(e);
    }
    setExtraData(e) {
      ep.setExtraData(e);
    }
    setPerfParams(e) {
      ep.setPerfParams(e);
    }
    setOtherEventData(e, i) {
      if (ep.setOtherEventData) {
        ep.setOtherEventData(e, i);
      }
    }
    updateStage(e, i) {
      ep.updateStage(e, platformDocUtils.Gkz.DOCX, i);
    }
    updateLoadMainStageDurationList(e, i, r = Date.now()) {
      ep.updateLoadMainStageDurationList(e, i, r);
    }
    updateLoadMainStageDurationListByNextRender(e, i) {
      ep.updateLoadMainStageDurationListByNextRender(e, i);
    }
    getStartTime() {
      return ep.getStartTime();
    }
    updateStageByNextRender(e) {
      return ep.updateStageByNextRender(e, platformDocUtils.Gkz.DOCX);
    }
    runInNextRender(e) {
      return ep.runInNextRender(e);
    }
    setFirstScreenBlockLoaded() {
      ep.setFirstScreenBlockLoaded();
    }
    setCatalogueLoaded() {
      ep.setCatalogueLoaded();
    }
    renderFail(e) {
      if (arguments.length > 1 && arguments[1] !== undefined) {
        arguments[1];
      }
      ep.renderFail(e);
    }
  }
  var eE = new ek();
  require.d(exports, {
    DocxPerformanceStageCollector: function () {
      return eE;
    }
  });
}