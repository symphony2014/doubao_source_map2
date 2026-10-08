// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'queryStringBuilder'
// - Resolved require(142682) to 'query-string-builder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 811848
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var queryStringBuilder = require("query-string-builder") /*id: 142682*/;
  function i(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  module.exports = function (e, t, r) {
    if (!t) {
      return e;
    }
    var a = e.indexOf("#");
    if (a !== -1) {
      e = e.slice(0, a);
    }
    var s = r && r.encode || i;
    var u = utilsTypeCheckHelpers.isURLSearchParams(t) ? t.toString() : new queryStringBuilder(t, r).toString(s);
    if (u) {
      e += (e.indexOf("?") === -1 ? "?" : "&") + u;
    }
    return e;
  };
}