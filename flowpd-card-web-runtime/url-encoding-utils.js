// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'urlEncodingFormatters'
// - Resolved require(965873) to 'url-encoding-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 147372
         */
module.exports = function (module, exports, require) {
  var urlEncodingFormatters = require("url-encoding-formatters") /*id: 965873*/;
  var i = Object.prototype.hasOwnProperty;
  var o = Array.isArray;
  var a = function () {
    var e = [];
    var t = 0;
    for (; t < 256; ++t) {
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    }
    return e;
  }();
  function s(e) {
    while (e.length > 1) {
      var t = e.pop();
      var r = t.obj[t.prop];
      if (o(r)) {
        var n = [];
        var i = 0;
        for (; i < r.length; ++i) {
          if (r[i] !== undefined) {
            n.push(r[i]);
          }
        }
        t.obj[t.prop] = n;
      }
    }
  }
  function l(e, t) {
    var r = t && t.plainObjects ? {
      __proto__: null
    } : {};
    var n = 0;
    for (; n < e.length; ++n) {
      if (e[n] !== undefined) {
        r[n] = e[n];
      }
    }
    return r;
  }
  module.exports = {
    arrayToObject: l,
    assign: function (e, t) {
      return Object.keys(t).reduce(function (e, r) {
        e[r] = t[r];
        return e;
      }, e);
    },
    combine: function (e, t) {
      return [].concat(e, t);
    },
    compact: function (e) {
      var t = [{
        obj: {
          o: e
        },
        prop: "o"
      }];
      var r = [];
      var n = 0;
      for (; n < t.length; ++n) {
        var i = t[n];
        var o = i.obj[i.prop];
        var a = Object.keys(o);
        var l = 0;
        for (; l < a.length; ++l) {
          var u = a[l];
          var c = o[u];
          if (typeof c == "object" && c !== null && r.indexOf(c) === -1) {
            t.push({
              obj: o,
              prop: u
            });
            r.push(c);
          }
        }
      }
      s(t);
      return e;
    },
    decode: function (e, t, r) {
      var n = e.replace(/\+/g, " ");
      if (r === "iso-8859-1") {
        return n.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(n);
      } catch (e) {
        return n;
      }
    },
    encode: function (e, t, r, i, o) {
      if (e.length === 0) {
        return e;
      }
      var s = e;
      if (typeof e == "symbol") {
        s = Symbol.prototype.toString.call(e);
      } else if (typeof e != "string") {
        s = String(e);
      }
      if (r === "iso-8859-1") {
        return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
          return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
        });
      }
      var l = "";
      var u = 0;
      for (; u < s.length; u += 1024) {
        var c = s.length >= 1024 ? s.slice(u, u + 1024) : s;
        var f = [];
        var d = 0;
        for (; d < c.length; ++d) {
          var h = c.charCodeAt(d);
          if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === urlEncodingFormatters.RFC1738 && (h === 40 || h === 41)) {
            f[f.length] = c.charAt(d);
            continue;
          }
          if (h < 128) {
            f[f.length] = a[h];
            continue;
          }
          if (h < 2048) {
            f[f.length] = a[h >> 6 | 192] + a[h & 63 | 128];
            continue;
          }
          if (h < 55296 || h >= 57344) {
            f[f.length] = a[h >> 12 | 224] + a[h >> 6 & 63 | 128] + a[h & 63 | 128];
            continue;
          }
          d += 1;
          h = 65536 + ((h & 1023) << 10 | c.charCodeAt(d) & 1023);
          f[f.length] = a[h >> 18 | 240] + a[h >> 12 & 63 | 128] + a[h >> 6 & 63 | 128] + a[h & 63 | 128];
        }
        l += f.join("");
      }
      return l;
    },
    isBuffer: function (e) {
      return !!e && typeof e == "object" && !!e.constructor && !!e.constructor.isBuffer && !!e.constructor.isBuffer(e);
    },
    isRegExp: function (e) {
      return Object.prototype.toString.call(e) === "[object RegExp]";
    },
    maybeMap: function (e, t) {
      if (o(e)) {
        var r = [];
        var n = 0;
        for (; n < e.length; n += 1) {
          r.push(t(e[n]));
        }
        return r;
      }
      return t(e);
    },
    merge: function e(t, r, n) {
      if (!r) {
        return t;
      }
      if (typeof r != "object" && typeof r != "function") {
        if (o(t)) {
          t.push(r);
        } else {
          if (!t || typeof t != "object") {
            return [t, r];
          }
          if (n && (n.plainObjects || n.allowPrototypes) || !i.call(Object.prototype, r)) {
            t[r] = true;
          }
        }
        return t;
      }
      if (!t || typeof t != "object") {
        return [t].concat(r);
      }
      var a = t;
      if (o(t) && !o(r)) {
        a = l(t, n);
      }
      if (o(t) && o(r)) {
        r.forEach(function (r, o) {
          if (i.call(t, o)) {
            var a = t[o];
            if (a && typeof a == "object" && r && typeof r == "object") {
              t[o] = e(a, r, n);
            } else {
              t.push(r);
            }
          } else {
            t[o] = r;
          }
        });
        return t;
      } else {
        return Object.keys(r).reduce(function (t, o) {
          var a = r[o];
          if (i.call(t, o)) {
            t[o] = e(t[o], a, n);
          } else {
            t[o] = a;
          }
          return t;
        }, a);
      }
    }
  };
}