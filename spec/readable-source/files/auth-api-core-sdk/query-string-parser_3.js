// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'urlEncodingUtils'
// - Resolved require(147372) to 'url-encoding-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 139003
         */
module.exports = function (module, exports, require) {
  var urlEncodingUtils = require("url-encoding-utils") /*id: 147372*/;
  var i = Object.prototype.hasOwnProperty;
  var o = Array.isArray;
  var a = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: urlEncodingUtils.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false
  };
  function s(e, t) {
    if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1) {
      return e.split(",");
    } else {
      return e;
    }
  }
  function l(e, t) {
    var r = {
      __proto__: null
    };
    var l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
    l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var u = t.parameterLimit === Infinity ? undefined : t.parameterLimit;
    var c = l.split(t.delimiter, u);
    var f = -1;
    var d = t.charset;
    if (t.charsetSentinel) {
      for (h = 0; h < c.length; ++h) {
        if (c[h].indexOf("utf8=") === 0) {
          if (c[h] === "utf8=%E2%9C%93") {
            d = "utf-8";
          } else if (c[h] === "utf8=%26%2310003%3B") {
            d = "iso-8859-1";
          }
          f = h;
          h = c.length;
        }
      }
    }
    for (h = 0; h < c.length; ++h) {
      if (h !== f) {
        var h;
        var p;
        var v;
        var y = c[h];
        var _ = y.indexOf("]=");
        var m = _ === -1 ? y.indexOf("=") : _ + 1;
        if (m === -1) {
          p = t.decoder(y, a.decoder, d, "key");
          v = t.strictNullHandling ? null : "";
        } else {
          p = t.decoder(y.slice(0, m), a.decoder, d, "key");
          v = urlEncodingUtils.maybeMap(s(y.slice(m + 1), t), function (e) {
            return t.decoder(e, a.decoder, d, "value");
          });
        }
        if (v && t.interpretNumericEntities && d === "iso-8859-1") {
          v = String(v).replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
          });
        }
        if (y.indexOf("[]=") > -1) {
          v = o(v) ? [v] : v;
        }
        var g = i.call(r, p);
        if (g && t.duplicates === "combine") {
          r[p] = urlEncodingUtils.combine(r[p], v);
        } else if (!g || t.duplicates === "last") {
          r[p] = v;
        }
      }
    }
    return r;
  }
  function u(e, t, r, n) {
    var i = n ? t : s(t, r);
    var o = e.length - 1;
    for (; o >= 0; --o) {
      var a;
      var l = e[o];
      if (l === "[]" && r.parseArrays) {
        a = r.allowEmptyArrays && (i === "" || r.strictNullHandling && i === null) ? [] : [].concat(i);
      } else {
        a = r.plainObjects ? {
          __proto__: null
        } : {};
        var u = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l;
        var c = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u;
        var f = parseInt(c, 10);
        if (r.parseArrays || c !== "") {
          if (!isNaN(f) && l !== c && String(f) === c && f >= 0 && r.parseArrays && f <= r.arrayLimit) {
            (a = [])[f] = i;
          } else if (c !== "__proto__") {
            a[c] = i;
          }
        } else {
          a = {
            0: i
          };
        }
      }
      i = a;
    }
    return i;
  }
  function c(e, t, r, n) {
    if (e) {
      var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e;
      var a = /(\[[^[\]]*])/g;
      var s = r.depth > 0 && /(\[[^[\]]*])/.exec(o);
      var l = s ? o.slice(0, s.index) : o;
      var c = [];
      if (l) {
        if (!r.plainObjects && i.call(Object.prototype, l) && !r.allowPrototypes) {
          return;
        }
        c.push(l);
      }
      for (var f = 0; r.depth > 0 && (s = a.exec(o)) !== null && f < r.depth;) {
        f += 1;
        if (!r.plainObjects && i.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) {
          return;
        }
        c.push(s[1]);
      }
      if (s) {
        if (r.strictDepth === true) {
          throw RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
        }
        c.push("[" + o.slice(s.index) + "]");
      }
      return u(c, t, r, n);
    }
  }
  function f(e) {
    if (!e) {
      return a;
    }
    if (e.allowEmptyArrays !== undefined && typeof e.allowEmptyArrays != "boolean") {
      throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (e.decodeDotInKeys !== undefined && typeof e.decodeDotInKeys != "boolean") {
      throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (e.decoder !== null && e.decoder !== undefined && typeof e.decoder != "function") {
      throw TypeError("Decoder has to be a function.");
    }
    if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
      throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var t = e.charset === undefined ? a.charset : e.charset;
    var r = e.duplicates === undefined ? a.duplicates : e.duplicates;
    if (r !== "combine" && r !== "first" && r !== "last") {
      throw TypeError("The duplicates option must be either combine, first, or last");
    }
    return {
      allowDots: e.allowDots === undefined ? e.decodeDotInKeys === true || a.allowDots : !!e.allowDots,
      allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : a.allowEmptyArrays,
      allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : a.allowPrototypes,
      allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : a.allowSparse,
      arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : a.arrayLimit,
      charset: t,
      charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : a.charsetSentinel,
      comma: typeof e.comma == "boolean" ? e.comma : a.comma,
      decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : a.decodeDotInKeys,
      decoder: typeof e.decoder == "function" ? e.decoder : a.decoder,
      delimiter: typeof e.delimiter == "string" || urlEncodingUtils.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
      depth: typeof e.depth == "number" || e.depth === false ? +e.depth : a.depth,
      duplicates: r,
      ignoreQueryPrefix: e.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : a.interpretNumericEntities,
      parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : a.parameterLimit,
      parseArrays: e.parseArrays !== false,
      plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : a.plainObjects,
      strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : a.strictDepth,
      strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : a.strictNullHandling
    };
  }
  module.exports = function (e, t) {
    var r = f(t);
    if (e === "" || e == null) {
      if (r.plainObjects) {
        return {
          __proto__: null
        };
      } else {
        return {};
      }
    }
    var i = typeof e == "string" ? l(e, r) : e;
    var o = r.plainObjects ? {
      __proto__: null
    } : {};
    var a = Object.keys(i);
    var s = 0;
    for (; s < a.length; ++s) {
      var u = a[s];
      var d = c(u, i[u], r, typeof e == "string");
      o = urlEncodingUtils.merge(o, d, r);
    }
    if (r.allowSparse === true) {
      return o;
    } else {
      return urlEncodingUtils.compact(o);
    }
  };
}