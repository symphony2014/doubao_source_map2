// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'en' to 'parseUrlComponents'
// - Renamed export 'mB' to 'getUrlQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 152840
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_2 = require("query-string-utils_2") /*id: 281897*/;
  var urlParserUtils = require("url-parser-utils") /*id: 589701*/;
  var a = urlParserUtils;
  function i(e = "") {
    let {
      query: t
    } = queryStringUtils_2.parseUrl(e);
    return t;
  }
  function c(e = "", t = {}) {
    let {
      pathname: r,
      query: n,
      hash: o,
      host: i
    } = new a(e);
    return {
      pathname: t.pathnameAsUrlQueryRemoved ? `${i}${r}` : r,
      search: n,
      hash: o
    };
  }
  require.d(exports, {
    parseUrlComponents: function () {
      return c;
    },
    getUrlQuery: function () {
      return i;
    }
  });
}