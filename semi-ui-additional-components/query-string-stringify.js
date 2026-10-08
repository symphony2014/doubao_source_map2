// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'sideChannelFactory'
// - Resolved require(362782) to 'side-channel-factory'
// - Renamed variable 'i' to 'urlEncodingUtils'
// - Resolved require(147372) to 'url-encoding-utils'
// - Renamed variable 'o' to 'urlEncodingFormatters'
// - Resolved require(965873) to 'url-encoding-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 196611
         */
module.exports = function (module, exports, require) {
  var sideChannelFactory = require("side-channel-factory") /*id: 362782*/;
  var urlEncodingUtils = require("url-encoding-utils") /*id: 147372*/;
  var urlEncodingFormatters = require("url-encoding-formatters") /*id: 965873*/;
  var a = Object.prototype.hasOwnProperty;
  var s = {
    brackets: function (e) {
      return e + "[]";
    },
    comma: "comma",
    indices: function (e, t) {
      return e + "[" + t + "]";
    },
    repeat: function (e) {
      return e;
    }
  };
  var l = Array.isArray;
  var u = Array.prototype.push;
  function c(e, t) {
    u.apply(e, l(t) ? t : [t]);
  }
  var f = Date.prototype.toISOString;
  var d = urlEncodingFormatters.default;
  var h = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
    encoder: urlEncodingUtils.encode,
    encodeValuesOnly: false,
    filter: undefined,
    format: d,
    formatter: urlEncodingFormatters.formatters[d],
    indices: false,
    serializeDate: function (e) {
      return f.call(e);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var p = {};
  var v = function e(t, r, o, a, s, u, f, d, v, y, _, m, g, b, O, w, C, A) {
    var S;
    var j;
    var E = t;
    var x = A;
    var k = 0;
    var P = false;
    while ((x = x.get(p)) !== undefined && !P) {
      var N = x.get(t);
      k += 1;
      if (N !== undefined) {
        if (N === k) {
          throw RangeError("Cyclic object value");
        }
        P = true;
      }
      if (x.get(p) === undefined) {
        k = 0;
      }
    }
    if (typeof y == "function") {
      E = y(r, E);
    } else if (E instanceof Date) {
      E = g(E);
    } else if (o === "comma" && l(E)) {
      E = urlEncodingUtils.maybeMap(E, function (e) {
        if (e instanceof Date) {
          return g(e);
        } else {
          return e;
        }
      });
    }
    if (E === null) {
      if (u) {
        if (v && !w) {
          return v(r, h.encoder, C, "key", b);
        } else {
          return r;
        }
      }
      E = "";
    }
    if (typeof (S = E) == "string" || typeof S == "number" || typeof S == "boolean" || typeof S == "symbol" || typeof S == "bigint" || urlEncodingUtils.isBuffer(E)) {
      if (v) {
        return [O(w ? r : v(r, h.encoder, C, "key", b)) + "=" + O(v(E, h.encoder, C, "value", b))];
      } else {
        return [O(r) + "=" + O(String(E))];
      }
    }
    var L = [];
    if (E === undefined) {
      return L;
    }
    if (o === "comma" && l(E)) {
      if (w && v) {
        E = urlEncodingUtils.maybeMap(E, v);
      }
      j = [{
        value: E.length > 0 ? E.join(",") || null : undefined
      }];
    } else if (l(y)) {
      j = y;
    } else {
      var T = Object.keys(E);
      j = _ ? T.sort(_) : T;
    }
    var D = d ? String(r).replace(/\./g, "%2E") : String(r);
    var M = a && l(E) && E.length === 1 ? D + "[]" : D;
    if (s && l(E) && E.length === 0) {
      return M + "[]";
    }
    for (var R = 0; R < j.length; ++R) {
      var I = j[R];
      var F = typeof I == "object" && I && I.value !== undefined ? I.value : E[I];
      if (!f || F !== null) {
        var B = m && d ? String(I).replace(/\./g, "%2E") : String(I);
        var V = l(E) ? typeof o == "function" ? o(M, B) : M : M + (m ? "." + B : "[" + B + "]");
        A.set(t, k);
        var $ = sideChannelFactory();
        $.set(p, A);
        c(L, e(F, V, o, a, s, u, f, d, o === "comma" && w && l(E) ? null : v, y, _, m, g, b, O, w, C, $));
      }
    }
    return L;
  };
  function y(e) {
    if (!e) {
      return h;
    }
    if (e.allowEmptyArrays !== undefined && typeof e.allowEmptyArrays != "boolean") {
      throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (e.encodeDotInKeys !== undefined && typeof e.encodeDotInKeys != "boolean") {
      throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (e.encoder !== null && e.encoder !== undefined && typeof e.encoder != "function") {
      throw TypeError("Encoder has to be a function.");
    }
    var t;
    var r = e.charset || h.charset;
    if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
      throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var n = urlEncodingFormatters.default;
    if (e.format !== undefined) {
      if (!a.call(urlEncodingFormatters.formatters, e.format)) {
        throw TypeError("Unknown format option provided.");
      }
      n = e.format;
    }
    var i = urlEncodingFormatters.formatters[n];
    var u = h.filter;
    if (typeof e.filter == "function" || l(e.filter)) {
      u = e.filter;
    }
    t = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : h.arrayFormat;
    if ("commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") {
      throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var c = e.allowDots === undefined ? e.encodeDotInKeys === true || h.allowDots : !!e.allowDots;
    return {
      addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : h.addQueryPrefix,
      allowDots: c,
      allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : h.allowEmptyArrays,
      arrayFormat: t,
      charset: r,
      charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : h.charsetSentinel,
      commaRoundTrip: !!e.commaRoundTrip,
      delimiter: e.delimiter === undefined ? h.delimiter : e.delimiter,
      encode: typeof e.encode == "boolean" ? e.encode : h.encode,
      encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : h.encodeDotInKeys,
      encoder: typeof e.encoder == "function" ? e.encoder : h.encoder,
      encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : h.encodeValuesOnly,
      filter: u,
      format: n,
      formatter: i,
      serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : h.serializeDate,
      skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : h.skipNulls,
      sort: typeof e.sort == "function" ? e.sort : null,
      strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : h.strictNullHandling
    };
  }
  module.exports = function (e, t) {
    var r;
    var i;
    var o = e;
    var a = y(t);
    if (typeof a.filter == "function") {
      o = a.filter("", o);
    } else if (l(a.filter)) {
      r = a.filter;
    }
    var u = [];
    if (typeof o != "object" || o === null) {
      return "";
    }
    var f = s[a.arrayFormat];
    var d = f === "comma" && a.commaRoundTrip;
    r ||= Object.keys(o);
    if (a.sort) {
      r.sort(a.sort);
    }
    var h = sideChannelFactory();
    var p = 0;
    for (; p < r.length; ++p) {
      var _ = r[p];
      var m = o[_];
      if (!a.skipNulls || m !== null) {
        c(u, v(m, _, f, d, a.allowEmptyArrays, a.strictNullHandling, a.skipNulls, a.encodeDotInKeys, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.format, a.formatter, a.encodeValuesOnly, a.charset, h));
      }
    }
    var g = u.join(a.delimiter);
    var b = a.addQueryPrefix === true ? "?" : "";
    if (a.charsetSentinel) {
      if (a.charset === "iso-8859-1") {
        b += "utf8=%26%2310003%3B&";
      } else {
        b += "utf8=%E2%9C%93&";
      }
    }
    if (g.length > 0) {
      return b + g;
    } else {
      return "";
    }
  };
}