// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mo' to 'parseSearchParams'
// - Renamed export 'PF' to 'getCachedFromParam'
// - Renamed export 'Zp' to 'decodeUriComponent'
// - Renamed export 'on' to 'getQueryParam'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 329833
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  var urlQueryStringUtils_1 = require("url-query-string-utils_1") /*id: 657731*/;
  function a(t) {
    if (!t) {
      return "";
    }
    let e = "";
    try {
      e = decodeURIComponent(t);
    } catch (t) {}
    return e;
  }
  function i(t) {
    let {
      search: e
    } = urlQueryStringUtils_1.parseUrl(hashLocationProxy.default.href);
    if (!e) {
      return "";
    }
    let r = "";
    e.slice(1).split("&").find(e => {
      let [n, o] = e.split("=");
      return n === t && (r = o, true);
    });
    return r;
  }
  let c = require("memoize-function") /*id: 565197*/.memoize(function (t = location.href) {
    return urlQueryStringUtils_1.getQueryFromUrl(t).from || "";
  });
  function u(t) {
    let e = decodeURIComponent;
    let r = t ? t.split("?")[1] : hashLocationProxy.default.search.slice(1);
    let o = {};
    if (r) {
      let t = (r = r.split("#")[0]).split("&");
      for (let r = 0; r < t.length; r += 1) {
        let n;
        let a = t[r].split("=");
        let i = a[0].replace(/\[\d*\]/, t => {
          n = t.slice(1, -1);
          return "";
        });
        let c = a[1] === undefined || a[1];
        if (Object.prototype.hasOwnProperty.call(o, i)) {
          if (typeof o[i] == "string") {
            o[i] = [o[i]];
          }
          if (n === undefined) {
            o[i].push(e(c));
          } else {
            o[i][n] = e(c);
          }
        } else {
          o[i] = e(c);
        }
      }
    }
    return o;
  }
  require.d(exports, {
    parseSearchParams: function () {
      return u;
    },
    getCachedFromParam: function () {
      return c;
    },
    decodeUriComponent: function () {
      return a;
    },
    getQueryParam: function () {
      return i;
    }
  });
}