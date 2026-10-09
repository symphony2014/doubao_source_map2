// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'httpConfigUtils'
// - Resolved require(481200) to 'http-config-utils'
// - Renamed variable 'i' to 'typeCheckUtils_3'
// - Resolved require(187217) to 'type-check-utils_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 252109
         */
module.exports = function (module, exports, require) {
  exports.dispatchRequest = undefined;
  var httpConfigUtils = require("http-config-utils") /*id: 481200*/;
  var typeCheckUtils_3 = require("type-check-utils_3") /*id: 187217*/;
  var o = ["content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  exports.dispatchRequest = function (e) {
    var t;
    e.headers = e.headers || {};
    e.data = httpConfigUtils.transformData(e.data, e.headers, e.transformRequest);
    e.headers = typeCheckUtils_3.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers);
    typeCheckUtils_3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
      delete e.headers[t];
    });
    return (t = e, typeof XMLHttpRequest == "undefined" ? Promise.reject("plz inject axios in node env.") : new Promise(function (e, r) {
      var n;
      var a;
      var s;
      var c;
      var u;
      var l = t.data;
      var f = t.headers || [];
      var d = new XMLHttpRequest();
      d.open(t.method.toUpperCase(), (n = t.url, a = t.method, s = t.baseURL, u = Object.entries((c = t.params) === undefined ? {} : c).map(function (e) {
        var t = e[0];
        var r = e[1];
        return `${encodeURIComponent(t)}=${encodeURIComponent(r)}`;
      }).join("&"), a === "get" ? `${s}${n}${u ? `?${u}&` : "?"}_t=${Date.now()}` : `${s}${n}?_t=${Date.now()}`), true);
      d.timeout = t.timeout;
      d.onreadystatechange = function () {
        if (d && d.readyState === 4 && (d.status !== 0 || d.responseURL && d.responseURL.indexOf("file:") === 0)) {
          var n;
          var i;
          var a;
          var s;
          var c;
          var u = "getAllResponseHeaders" in d ? (n = d.getAllResponseHeaders(), c = {}, n && n.split("\n").forEach(function (e) {
            s = e.indexOf(":");
            i = e.substr(0, s).trim().toLowerCase();
            a = e.substr(s + 1).trim();
            if (i && (!c[i] || !(o.indexOf(i) >= 0))) {
              if (i === "set-cookie") {
                c[i] = (c[i] ? c[i] : []).concat([a]);
              } else {
                c[i] = c[i] ? `${c[i]}, ${a}` : a;
              }
            }
          }), c) : null;
          var l = {
            data: t.responseType && t.responseType !== "text" ? d.response : d.responseText,
            status: d.status,
            statusText: d.statusText,
            headers: u,
            config: t,
            request: d
          };
          var f = l.config.validateStatus;
          if (!l.status || !f || f(l.status)) {
            e(l);
          } else {
            r(`${t.url} Request failed with status code ${l.status}`);
          }
          d = null;
        }
      };
      d.onabort = function () {
        if (d) {
          r(`${t.url} Request aborted`);
          d = null;
        }
      };
      d.onerror = function () {
        r(`${t.url} Network Error`);
        d = null;
      };
      d.ontimeout = function () {
        r(`${t.url} timeout of`);
        d = null;
      };
      if ("setRequestHeader" in d) {
        typeCheckUtils_3.forEach(f, function (e, t) {
          if ((l === undefined || l instanceof FormData) && t.toLowerCase() === "content-type") {
            delete f[t];
          } else {
            d.setRequestHeader(t, e);
          }
        });
      }
      if (t.withCredentials !== undefined) {
        d.withCredentials = !!t.withCredentials;
      }
      l ||= null;
      d.send(l);
    })).then(function (t) {
      t.data = httpConfigUtils.transformData(t.data, t.headers, e.transformResponse);
      return t;
    }, function (e) {
      throw Error(e);
    });
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}