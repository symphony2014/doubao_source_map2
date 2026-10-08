// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(281897) to 'query-string-utils_2'
// - Resolved require(825529) to 'memoize-function-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 753923
         */
module.exports = function (module, exports, require) {
  exports.default = undefined;
  var n = a(require("query-string-utils_2") /*id: 281897*/);
  var o = a(require("memoize-function-util") /*id: 825529*/);
  function a(t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  }
  function i(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      if (e) {
        n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function c(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] ?? {};
      if (e % 2) {
        i(Object(r), true).forEach(function (e) {
          var n;
          var o;
          var a;
          n = t;
          o = e;
          a = r[e];
          if (o in n) {
            Object.defineProperty(n, o, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            n[o] = a;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(t, Object.getOwnPropertyDescriptors(r));
      } else {
        i(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
      }
    }
    return t;
  }
  var u = o.default(function (t) {
    return (t.split("#")[1] || "/").split("?")[0];
  });
  var l = o.default(function (t, e) {
    var r = t.split("?")[1];
    var o = n.default.stringify(c(c({}, n.default.parse(e)), r ? n.default.parse(r) : {}));
    if (o.startsWith("?")) {
      return o;
    } else {
      return `?${o}`;
    }
  });
  var s = typeof window == "undefined" ? {
    hostname: ""
  } : window.location;
  if (typeof window != "undefined") {
    var f = window.location.protocol === "native-resource:";
    if (window.useHashRouter || window.location.protocol === "file:" || f) {
      var d = window.User && window.User.domain || "www.feishu.cn";
      s = new Proxy({
        protocol: "https:",
        host: d,
        hostname: d,
        port: window.location.port,
        origin: `https://${d}`
      }, {
        get: function (t, e) {
          if (e in t) {
            return t[e];
          }
          switch (e) {
            case "pathname":
              return u(window.location.hash);
            case "hash":
              return "";
            case "href":
              return `${s.origin}${s.pathname}${s.search}${s.hash}`;
            case "search":
              return l(window.location.hash, window.location.search);
          }
          if (typeof window.location[e] == "function") {
            return window.location[e].bind(window.location);
          } else {
            return window.location[e];
          }
        },
        set: function (t, e, r) {
          var n = window.User && window.User.domain;
          if (e === "href") {
            switch (true) {
              case n && r.startsWith("#"):
                break;
              case n && r.startsWith("?"):
                window.open(`https://${n}${s.pathname}${r}`);
                return true;
              case n && r.startsWith("/"):
                window.open(`https://${n}${r}`);
                return true;
              case /^\w+:\/\//.test(r):
                if (n && r.startsWith(s.origin)) {
                  r.replace(s.origin, `https://${n}`);
                }
                window.open(r);
                return true;
            }
          }
        }
      });
    }
    window.docsLocation = s;
  }
  var g = s;
  exports.default = g;
}