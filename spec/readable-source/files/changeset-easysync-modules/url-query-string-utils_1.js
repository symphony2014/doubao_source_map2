// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FO' to 'stringifyQuery'
// - Renamed export 'Oc' to 'omitPathStringify'
// - Renamed export 'aA' to 'mergeUrlQuery'
// - Renamed export 'en' to 'parseUrl'
// - Renamed export 'mB' to 'getQueryFromUrl'
// - Renamed export 'mv' to 'parseHash'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 657731
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_2 = require("query-string-utils_2") /*id: 281897*/;
  var urlParserUtils = require("url-parser-utils") /*id: 589701*/;
  var o = urlParserUtils;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  function u(t = "") {
    let {
      query: e
    } = queryStringUtils_2.parseUrl(t);
    return e;
  }
  function c(t = "") {
    let {
      hash: e
    } = new o(t);
    return queryStringUtils_2.parse(e);
  }
  function l(t) {
    return queryStringUtils_2.stringify(t);
  }
  function p(t = "", e = {}) {
    let {
      pathname: n,
      query: r,
      hash: i,
      host: s
    } = new o(t);
    return {
      pathname: e.pathnameAsUrlQueryRemoved ? `${s}${n}` : n,
      search: r,
      hash: i
    };
  }
  function h(t, e) {
    if (isEmptyUtil.isEmpty(e)) {
      return t;
    }
    let n = new o(t, true);
    let r = Object.assign(Object.assign({}, n.query), e);
    n.set("query", r);
    if (!t.startsWith(n.protocol)) {
      let e = t.replace(/\?.*/, "");
      return `${e}?${n.href.split("?")[1]}`;
    }
    return n.href;
  }
  function f(t, e) {
    let n = new o(t, true);
    let r = throttledOmitPathStringify.omitPathStringify(n.query, e);
    n.set("query", r);
    if (!t.startsWith(n.protocol)) {
      let e = t.replace(/\?.*/, "");
      let r = n.href.indexOf("?");
      return `${e}${r > -1 ? n.href.slice(r) : ""}`;
    }
    return n.href;
  }
  require.d(exports, {
    stringifyQuery: function () {
      return l;
    },
    omitPathStringify: function () {
      return f;
    },
    mergeUrlQuery: function () {
      return h;
    },
    parseUrl: function () {
      return p;
    },
    getQueryFromUrl: function () {
      return u;
    },
    parseHash: function () {
      return c;
    }
  });
}