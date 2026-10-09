// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'rfcEncodingFormats'
// - Resolved require(542852) to 'rfc-encoding-formats'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 537594
         */
module.exports = function (module, exports, require) {
  var rfcEncodingFormats = require("rfc-encoding-formats") /*id: 542852*/;
  var o = Object.prototype.hasOwnProperty;
  var a = Array.isArray;
  var i = function () {
    var e = [];
    var t = 0;
    for (; t < 256; ++t) {
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    }
    return e;
  }();
  function c(e) {
    while (e.length > 1) {
      var t = e.pop();
      var r = t.obj[t.prop];
      if (a(r)) {
        var n = [];
        var o = 0;
        for (; o < r.length; ++o) {
          if (r[o] !== undefined) {
            n.push(r[o]);
          }
        }
        t.obj[t.prop] = n;
      }
    }
  }
  function s(e, t) {
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
    arrayToObject: s,
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
        var o = t[n];
        var a = o.obj[o.prop];
        var i = Object.keys(a);
        var s = 0;
        for (; s < i.length; ++s) {
          var l = i[s];
          var u = a[l];
          if (typeof u == "object" && u !== null && r.indexOf(u) === -1) {
            t.push({
              obj: a,
              prop: l
            });
            r.push(u);
          }
        }
      }
      c(t);
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
    encode: function (e, t, r, o, a) {
      if (e.length === 0) {
        return e;
      }
      var c = e;
      if (typeof e == "symbol") {
        c = Symbol.prototype.toString.call(e);
      } else if (typeof e != "string") {
        c = String(e);
      }
      if (r === "iso-8859-1") {
        return escape(c).replace(/%u[0-9a-f]{4}/gi, function (e) {
          return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
        });
      }
      var s = "";
      var l = 0;
      for (; l < c.length; l += 1024) {
        var u = c.length >= 1024 ? c.slice(l, l + 1024) : c;
        var d = [];
        var f = 0;
        for (; f < u.length; ++f) {
          var g = u.charCodeAt(f);
          if (g === 45 || g === 46 || g === 95 || g === 126 || g >= 48 && g <= 57 || g >= 65 && g <= 90 || g >= 97 && g <= 122 || a === rfcEncodingFormats.RFC1738 && (g === 40 || g === 41)) {
            d[d.length] = u.charAt(f);
            continue;
          }
          if (g < 128) {
            d[d.length] = i[g];
            continue;
          }
          if (g < 2048) {
            d[d.length] = i[g >> 6 | 192] + i[g & 63 | 128];
            continue;
          }
          if (g < 55296 || g >= 57344) {
            d[d.length] = i[g >> 12 | 224] + i[g >> 6 & 63 | 128] + i[g & 63 | 128];
            continue;
          }
          f += 1;
          g = 65536 + ((g & 1023) << 10 | u.charCodeAt(f) & 1023);
          d[d.length] = i[g >> 18 | 240] + i[g >> 12 & 63 | 128] + i[g >> 6 & 63 | 128] + i[g & 63 | 128];
        }
        s += d.join("");
      }
      return s;
    },
    isBuffer: function (e) {
      return !!e && typeof e == "object" && !!e.constructor && !!e.constructor.isBuffer && !!e.constructor.isBuffer(e);
    },
    isRegExp: function (e) {
      return Object.prototype.toString.call(e) === "[object RegExp]";
    },
    maybeMap: function (e, t) {
      if (a(e)) {
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
        if (a(t)) {
          t.push(r);
        } else {
          if (!t || typeof t != "object") {
            return [t, r];
          }
          if (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) {
            t[r] = true;
          }
        }
        return t;
      }
      if (!t || typeof t != "object") {
        return [t].concat(r);
      }
      var i = t;
      if (a(t) && !a(r)) {
        i = s(t, n);
      }
      if (a(t) && a(r)) {
        r.forEach(function (r, a) {
          if (o.call(t, a)) {
            var i = t[a];
            if (i && typeof i == "object" && r && typeof r == "object") {
              t[a] = e(i, r, n);
            } else {
              t.push(r);
            }
          } else {
            t[a] = r;
          }
        });
        return t;
      } else {
        return Object.keys(r).reduce(function (t, a) {
          var i = r[a];
          if (o.call(t, a)) {
            t[a] = e(t[a], i, n);
          } else {
            t[a] = i;
          }
          return t;
        }, i);
      }
    }
  };
}