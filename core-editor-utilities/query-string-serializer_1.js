// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'sideChannelFactory'
// - Resolved require(362782) to 'side-channel-factory'
// - Renamed variable 'o' to 'queryStringUtils_3'
// - Resolved require(537594) to 'query-string-utils_3'
// - Renamed variable 'a' to 'rfcEncodingFormats'
// - Resolved require(542852) to 'rfc-encoding-formats'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 403801
         */
module.exports = function (module, exports, require) {
  var sideChannelFactory = require("side-channel-factory") /*id: 362782*/;
  var queryStringUtils_3 = require("query-string-utils_3") /*id: 537594*/;
  var rfcEncodingFormats = require("rfc-encoding-formats") /*id: 542852*/;
  var i = Object.prototype.hasOwnProperty;
  var c = {
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
  var s = Array.isArray;
  var l = Array.prototype.push;
  function u(e, t) {
    l.apply(e, s(t) ? t : [t]);
  }
  var d = Date.prototype.toISOString;
  var f = rfcEncodingFormats.default;
  var g = {
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
    encoder: queryStringUtils_3.encode,
    encodeValuesOnly: false,
    filter: undefined,
    format: f,
    formatter: rfcEncodingFormats.formatters[f],
    indices: false,
    serializeDate: function (e) {
      return d.call(e);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var b = {};
  var p = function e(t, r, a, i, c, l, d, f, p, h, m, w, E, k, v, x, y, _) {
    var T;
    var A;
    var O = t;
    var B = _;
    var N = 0;
    var R = false;
    while ((B = B.get(b)) !== undefined && !R) {
      var C = B.get(t);
      N += 1;
      if (C !== undefined) {
        if (C === N) {
          throw RangeError("Cyclic object value");
        }
        R = true;
      }
      if (B.get(b) === undefined) {
        N = 0;
      }
    }
    if (typeof h == "function") {
      O = h(r, O);
    } else if (O instanceof Date) {
      O = E(O);
    } else if (a === "comma" && s(O)) {
      O = queryStringUtils_3.maybeMap(O, function (e) {
        if (e instanceof Date) {
          return E(e);
        } else {
          return e;
        }
      });
    }
    if (O === null) {
      if (l) {
        if (p && !x) {
          return p(r, g.encoder, y, "key", k);
        } else {
          return r;
        }
      }
      O = "";
    }
    if (typeof (T = O) == "string" || typeof T == "number" || typeof T == "boolean" || typeof T == "symbol" || typeof T == "bigint" || queryStringUtils_3.isBuffer(O)) {
      if (p) {
        return [v(x ? r : p(r, g.encoder, y, "key", k)) + "=" + v(p(O, g.encoder, y, "value", k))];
      } else {
        return [v(r) + "=" + v(String(O))];
      }
    }
    var S = [];
    if (O === undefined) {
      return S;
    }
    if (a === "comma" && s(O)) {
      if (x && p) {
        O = queryStringUtils_3.maybeMap(O, p);
      }
      A = [{
        value: O.length > 0 ? O.join(",") || null : undefined
      }];
    } else if (s(h)) {
      A = h;
    } else {
      var G = Object.keys(O);
      A = m ? G.sort(m) : G;
    }
    var I = f ? String(r).replace(/\./g, "%2E") : String(r);
    var F = i && s(O) && O.length === 1 ? I + "[]" : I;
    if (c && s(O) && O.length === 0) {
      return F + "[]";
    }
    for (var D = 0; D < A.length; ++D) {
      var L = A[D];
      var P = typeof L == "object" && L && L.value !== undefined ? L.value : O[L];
      if (!d || P !== null) {
        var H = w && f ? String(L).replace(/\./g, "%2E") : String(L);
        var M = s(O) ? typeof a == "function" ? a(F, H) : F : F + (w ? "." + H : "[" + H + "]");
        _.set(t, N);
        var j = sideChannelFactory();
        j.set(b, _);
        u(S, e(P, M, a, i, c, l, d, f, a === "comma" && x && s(O) ? null : p, h, m, w, E, k, v, x, y, j));
      }
    }
    return S;
  };
  function h(e) {
    if (!e) {
      return g;
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
    var r = e.charset || g.charset;
    if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
      throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var n = rfcEncodingFormats.default;
    if (e.format !== undefined) {
      if (!i.call(rfcEncodingFormats.formatters, e.format)) {
        throw TypeError("Unknown format option provided.");
      }
      n = e.format;
    }
    var o = rfcEncodingFormats.formatters[n];
    var l = g.filter;
    if (typeof e.filter == "function" || s(e.filter)) {
      l = e.filter;
    }
    t = e.arrayFormat in c ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : g.arrayFormat;
    if ("commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") {
      throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var u = e.allowDots === undefined ? e.encodeDotInKeys === true || g.allowDots : !!e.allowDots;
    return {
      addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : g.addQueryPrefix,
      allowDots: u,
      allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : g.allowEmptyArrays,
      arrayFormat: t,
      charset: r,
      charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : g.charsetSentinel,
      commaRoundTrip: !!e.commaRoundTrip,
      delimiter: e.delimiter === undefined ? g.delimiter : e.delimiter,
      encode: typeof e.encode == "boolean" ? e.encode : g.encode,
      encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : g.encodeDotInKeys,
      encoder: typeof e.encoder == "function" ? e.encoder : g.encoder,
      encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : g.encodeValuesOnly,
      filter: l,
      format: n,
      formatter: o,
      serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : g.serializeDate,
      skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : g.skipNulls,
      sort: typeof e.sort == "function" ? e.sort : null,
      strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : g.strictNullHandling
    };
  }
  module.exports = function (e, t) {
    var r;
    var o;
    var a = e;
    var i = h(t);
    if (typeof i.filter == "function") {
      a = i.filter("", a);
    } else if (s(i.filter)) {
      r = i.filter;
    }
    var l = [];
    if (typeof a != "object" || a === null) {
      return "";
    }
    var d = c[i.arrayFormat];
    var f = d === "comma" && i.commaRoundTrip;
    r ||= Object.keys(a);
    if (i.sort) {
      r.sort(i.sort);
    }
    var g = sideChannelFactory();
    var b = 0;
    for (; b < r.length; ++b) {
      var m = r[b];
      var w = a[m];
      if (!i.skipNulls || w !== null) {
        u(l, p(w, m, d, f, i.allowEmptyArrays, i.strictNullHandling, i.skipNulls, i.encodeDotInKeys, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, g));
      }
    }
    var E = l.join(i.delimiter);
    var k = i.addQueryPrefix === true ? "?" : "";
    if (i.charsetSentinel) {
      if (i.charset === "iso-8859-1") {
        k += "utf8=%26%2310003%3B&";
      } else {
        k += "utf8=%E2%9C%93&";
      }
    }
    if (E.length > 0) {
      return k + E;
    } else {
      return "";
    }
  };
}