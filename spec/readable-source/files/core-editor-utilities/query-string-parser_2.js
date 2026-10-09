// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'queryStringUtils_3'
// - Resolved require(537594) to 'query-string-utils_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 349900
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_3 = require("query-string-utils_3") /*id: 537594*/;
  var o = Object.prototype.hasOwnProperty;
  var a = Array.isArray;
  var i = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: queryStringUtils_3.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
  };
  function c(e, t, r) {
    if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1) {
      return e.split(",");
    }
    if (t.throwOnLimitExceeded && r >= t.arrayLimit) {
      throw RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    }
    return e;
  }
  function s(e, t) {
    var r = {
      __proto__: null
    };
    var s = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
    s = s.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var l = t.parameterLimit === Infinity ? undefined : t.parameterLimit;
    var u = s.split(t.delimiter, t.throwOnLimitExceeded ? l + 1 : l);
    if (t.throwOnLimitExceeded && u.length > l) {
      throw RangeError("Parameter limit exceeded. Only " + l + " parameter" + (l === 1 ? "" : "s") + " allowed.");
    }
    var d = -1;
    var f = t.charset;
    if (t.charsetSentinel) {
      for (g = 0; g < u.length; ++g) {
        if (u[g].indexOf("utf8=") === 0) {
          if (u[g] === "utf8=%E2%9C%93") {
            f = "utf-8";
          } else if (u[g] === "utf8=%26%2310003%3B") {
            f = "iso-8859-1";
          }
          d = g;
          g = u.length;
        }
      }
    }
    for (g = 0; g < u.length; ++g) {
      if (g !== d) {
        var g;
        var b;
        var p;
        var h = u[g];
        var m = h.indexOf("]=");
        var w = m === -1 ? h.indexOf("=") : m + 1;
        if (w === -1) {
          b = t.decoder(h, i.decoder, f, "key");
          p = t.strictNullHandling ? null : "";
        } else {
          b = t.decoder(h.slice(0, w), i.decoder, f, "key");
          p = queryStringUtils_3.maybeMap(c(h.slice(w + 1), t, a(r[b]) ? r[b].length : 0), function (e) {
            return t.decoder(e, i.decoder, f, "value");
          });
        }
        if (p && t.interpretNumericEntities && f === "iso-8859-1") {
          p = String(p).replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
          });
        }
        if (h.indexOf("[]=") > -1) {
          p = a(p) ? [p] : p;
        }
        var E = o.call(r, b);
        if (E && t.duplicates === "combine") {
          r[b] = queryStringUtils_3.combine(r[b], p);
        } else if (!E || t.duplicates === "last") {
          r[b] = p;
        }
      }
    }
    return r;
  }
  function l(e, t, r, o) {
    var a = 0;
    if (e.length > 0 && e[e.length - 1] === "[]") {
      var i = e.slice(0, -1).join("");
      a = Array.isArray(t) && t[i] ? t[i].length : 0;
    }
    var s = o ? t : c(t, r, a);
    var l = e.length - 1;
    for (; l >= 0; --l) {
      var u;
      var d = e[l];
      if (d === "[]" && r.parseArrays) {
        u = r.allowEmptyArrays && (s === "" || r.strictNullHandling && s === null) ? [] : queryStringUtils_3.combine([], s);
      } else {
        u = r.plainObjects ? {
          __proto__: null
        } : {};
        var f = d.charAt(0) === "[" && d.charAt(d.length - 1) === "]" ? d.slice(1, -1) : d;
        var g = r.decodeDotInKeys ? f.replace(/%2E/g, ".") : f;
        var b = parseInt(g, 10);
        if (r.parseArrays || g !== "") {
          if (!isNaN(b) && d !== g && String(b) === g && b >= 0 && r.parseArrays && b <= r.arrayLimit) {
            (u = [])[b] = s;
          } else if (g !== "__proto__") {
            u[g] = s;
          }
        } else {
          u = {
            0: s
          };
        }
      }
      s = u;
    }
    return s;
  }
  function u(e, t, r, n) {
    if (e) {
      var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e;
      var i = /(\[[^[\]]*])/g;
      var c = r.depth > 0 && /(\[[^[\]]*])/.exec(a);
      var s = c ? a.slice(0, c.index) : a;
      var u = [];
      if (s) {
        if (!r.plainObjects && o.call(Object.prototype, s) && !r.allowPrototypes) {
          return;
        }
        u.push(s);
      }
      for (var d = 0; r.depth > 0 && (c = i.exec(a)) !== null && d < r.depth;) {
        d += 1;
        if (!r.plainObjects && o.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes) {
          return;
        }
        u.push(c[1]);
      }
      if (c) {
        if (r.strictDepth === true) {
          throw RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
        }
        u.push("[" + a.slice(c.index) + "]");
      }
      return l(u, t, r, n);
    }
  }
  function d(e) {
    if (!e) {
      return i;
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
    if (e.throwOnLimitExceeded !== undefined && typeof e.throwOnLimitExceeded != "boolean") {
      throw TypeError("`throwOnLimitExceeded` option must be a boolean");
    }
    var t = e.charset === undefined ? i.charset : e.charset;
    var r = e.duplicates === undefined ? i.duplicates : e.duplicates;
    if (r !== "combine" && r !== "first" && r !== "last") {
      throw TypeError("The duplicates option must be either combine, first, or last");
    }
    return {
      allowDots: e.allowDots === undefined ? e.decodeDotInKeys === true || i.allowDots : !!e.allowDots,
      allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : i.allowEmptyArrays,
      allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : i.allowPrototypes,
      allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : i.allowSparse,
      arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : i.arrayLimit,
      charset: t,
      charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : i.charsetSentinel,
      comma: typeof e.comma == "boolean" ? e.comma : i.comma,
      decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : i.decodeDotInKeys,
      decoder: typeof e.decoder == "function" ? e.decoder : i.decoder,
      delimiter: typeof e.delimiter == "string" || queryStringUtils_3.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
      depth: typeof e.depth == "number" || e.depth === false ? +e.depth : i.depth,
      duplicates: r,
      ignoreQueryPrefix: e.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : i.interpretNumericEntities,
      parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : i.parameterLimit,
      parseArrays: e.parseArrays !== false,
      plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : i.plainObjects,
      strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : i.strictDepth,
      strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : i.strictNullHandling,
      throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" && e.throwOnLimitExceeded
    };
  }
  module.exports = function (e, t) {
    var r = d(t);
    if (e === "" || e == null) {
      if (r.plainObjects) {
        return {
          __proto__: null
        };
      } else {
        return {};
      }
    }
    var o = typeof e == "string" ? s(e, r) : e;
    var a = r.plainObjects ? {
      __proto__: null
    } : {};
    var i = Object.keys(o);
    var c = 0;
    for (; c < i.length; ++c) {
      var l = i[c];
      var f = u(l, o[l], r, typeof e == "string");
      a = queryStringUtils_3.merge(a, f, r);
    }
    if (r.allowSparse === true) {
      return a;
    } else {
      return queryStringUtils_3.compact(a);
    }
  };
}