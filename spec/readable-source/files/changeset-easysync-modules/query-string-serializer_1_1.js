// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'queryStringUtils'
// - Resolved require(832769) to 'query-string-utils'
// - Renamed variable 'i' to 'urlEncodingStandards'
// - Resolved require(945497) to 'url-encoding-standards'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 965527
         */
module.exports = function (module, exports, require) {
  var queryStringUtils = require("query-string-utils") /*id: 832769*/;
  var urlEncodingStandards = require("url-encoding-standards") /*id: 945497*/;
  var o = {
    brackets: function (t) {
      return t + "[]";
    },
    indices: function (t, e) {
      return t + "[" + e + "]";
    },
    repeat: function (t) {
      return t;
    }
  };
  var s = Date.prototype.toISOString;
  var a = {
    delimiter: "&",
    encode: true,
    encoder: queryStringUtils.encode,
    encodeValuesOnly: false,
    serializeDate: function (t) {
      return s.call(t);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var u = function t(e, n, i, o, s, u, c, l, p, h, f, d) {
    var v;
    var y = e;
    if (typeof c == "function") {
      y = c(n, y);
    } else if (y instanceof Date) {
      y = h(y);
    } else if (y === null) {
      if (o) {
        if (u && !d) {
          return u(n, a.encoder);
        } else {
          return n;
        }
      }
      y = "";
    }
    if (typeof y == "string" || typeof y == "number" || typeof y == "boolean" || queryStringUtils.isBuffer(y)) {
      if (u) {
        return [f(d ? n : u(n, a.encoder)) + "=" + f(u(y, a.encoder))];
      } else {
        return [f(n) + "=" + f(String(y))];
      }
    }
    var g = [];
    if (y === undefined) {
      return g;
    }
    if (Array.isArray(c)) {
      v = c;
    } else {
      var _ = Object.keys(y);
      v = l ? _.sort(l) : _;
    }
    for (var m = 0; m < v.length; ++m) {
      var b = v[m];
      if (!s || y[b] !== null) {
        g = Array.isArray(y) ? g.concat(t(y[b], i(n, b), i, o, s, u, c, l, p, h, f, d)) : g.concat(t(y[b], n + (p ? "." + b : "[" + b + "]"), i, o, s, u, c, l, p, h, f, d));
      }
    }
    return g;
  };
  module.exports = function (t, e) {
    var n;
    var s;
    var c;
    var l = t;
    var p = e ? queryStringUtils.assign({}, e) : {};
    if (p.encoder !== null && p.encoder !== undefined && typeof p.encoder != "function") {
      throw TypeError("Encoder has to be a function.");
    }
    var h = p.delimiter === undefined ? a.delimiter : p.delimiter;
    var f = typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : a.strictNullHandling;
    var d = typeof p.skipNulls == "boolean" ? p.skipNulls : a.skipNulls;
    var v = typeof p.encode == "boolean" ? p.encode : a.encode;
    var y = typeof p.encoder == "function" ? p.encoder : a.encoder;
    var g = typeof p.sort == "function" ? p.sort : null;
    var _ = p.allowDots !== undefined && p.allowDots;
    var m = typeof p.serializeDate == "function" ? p.serializeDate : a.serializeDate;
    var b = typeof p.encodeValuesOnly == "boolean" ? p.encodeValuesOnly : a.encodeValuesOnly;
    if (p.format === undefined) {
      p.format = urlEncodingStandards.default;
    } else if (!Object.prototype.hasOwnProperty.call(urlEncodingStandards.formatters, p.format)) {
      throw TypeError("Unknown format option provided.");
    }
    var E = urlEncodingStandards.formatters[p.format];
    if (typeof p.filter == "function") {
      l = (s = p.filter)("", l);
    } else if (Array.isArray(p.filter)) {
      n = s = p.filter;
    }
    var w = [];
    if (typeof l != "object" || l === null) {
      return "";
    }
    c = p.arrayFormat in o ? p.arrayFormat : "indices" in p ? p.indices ? "indices" : "repeat" : "indices";
    var S = o[c];
    n ||= Object.keys(l);
    if (g) {
      n.sort(g);
    }
    for (var T = 0; T < n.length; ++T) {
      var I = n[T];
      if (!d || l[I] !== null) {
        w = w.concat(u(l[I], I, S, f, d, v ? y : null, s, g, _, m, E, b));
      }
    }
    var A = w.join(h);
    var C = p.addQueryPrefix === true ? "?" : "";
    if (A.length > 0) {
      return C + A;
    } else {
      return "";
    }
  };
}