// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'queryStringUtils'
// - Resolved require(832769) to 'query-string-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 582731
         */
module.exports = function (module, exports, require) {
  var queryStringUtils = require("query-string-utils") /*id: 832769*/;
  var i = Object.prototype.hasOwnProperty;
  var o = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: queryStringUtils.decode,
    delimiter: "&",
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
  };
  function s(t, e) {
    var n = {};
    var r = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
    var s = e.parameterLimit === Infinity ? undefined : e.parameterLimit;
    var a = r.split(e.delimiter, s);
    var u = 0;
    for (; u < a.length; ++u) {
      var c;
      var l;
      var p = a[u];
      var h = p.indexOf("]=");
      var f = h === -1 ? p.indexOf("=") : h + 1;
      if (f === -1) {
        c = e.decoder(p, o.decoder);
        l = e.strictNullHandling ? null : "";
      } else {
        c = e.decoder(p.slice(0, f), o.decoder);
        l = e.decoder(p.slice(f + 1), o.decoder);
      }
      if (i.call(n, c)) {
        n[c] = [].concat(n[c]).concat(l);
      } else {
        n[c] = l;
      }
    }
    return n;
  }
  function a(t, e, n) {
    var r = e;
    var i = t.length - 1;
    for (; i >= 0; --i) {
      var o;
      var s = t[i];
      if (s === "[]") {
        o = (o = []).concat(r);
      } else {
        o = n.plainObjects ? Object.create(null) : {};
        var a = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s;
        var u = parseInt(a, 10);
        if (!isNaN(u) && s !== a && String(u) === a && u >= 0 && n.parseArrays && u <= n.arrayLimit) {
          (o = [])[u] = r;
        } else {
          o[a] = r;
        }
      }
      r = o;
    }
    return r;
  }
  function u(t, e, n) {
    if (t) {
      var r = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t;
      var o = /(\[[^[\]]*])/g;
      var s = /(\[[^[\]]*])/.exec(r);
      var u = s ? r.slice(0, s.index) : r;
      var c = [];
      if (u) {
        if (!n.plainObjects && i.call(Object.prototype, u) && !n.allowPrototypes) {
          return;
        }
        c.push(u);
      }
      for (var l = 0; (s = o.exec(r)) !== null && l < n.depth;) {
        l += 1;
        if (!n.plainObjects && i.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) {
          return;
        }
        c.push(s[1]);
      }
      if (s) {
        c.push("[" + r.slice(s.index) + "]");
      }
      return a(c, e, n);
    }
  }
  module.exports = function (t, e) {
    var n = e ? queryStringUtils.assign({}, e) : {};
    if (n.decoder !== null && n.decoder !== undefined && typeof n.decoder != "function") {
      throw TypeError("Decoder has to be a function.");
    }
    n.ignoreQueryPrefix = n.ignoreQueryPrefix === true;
    n.delimiter = typeof n.delimiter == "string" || queryStringUtils.isRegExp(n.delimiter) ? n.delimiter : o.delimiter;
    n.depth = typeof n.depth == "number" ? n.depth : o.depth;
    n.arrayLimit = typeof n.arrayLimit == "number" ? n.arrayLimit : o.arrayLimit;
    n.parseArrays = n.parseArrays !== false;
    n.decoder = typeof n.decoder == "function" ? n.decoder : o.decoder;
    n.allowDots = typeof n.allowDots == "boolean" ? n.allowDots : o.allowDots;
    n.plainObjects = typeof n.plainObjects == "boolean" ? n.plainObjects : o.plainObjects;
    n.allowPrototypes = typeof n.allowPrototypes == "boolean" ? n.allowPrototypes : o.allowPrototypes;
    n.parameterLimit = typeof n.parameterLimit == "number" ? n.parameterLimit : o.parameterLimit;
    n.strictNullHandling = typeof n.strictNullHandling == "boolean" ? n.strictNullHandling : o.strictNullHandling;
    if (t === "" || t == null) {
      if (n.plainObjects) {
        return Object.create(null);
      } else {
        return {};
      }
    }
    var i = typeof t == "string" ? s(t, n) : t;
    var a = n.plainObjects ? Object.create(null) : {};
    var c = Object.keys(i);
    var l = 0;
    for (; l < c.length; ++l) {
      var p = c[l];
      var h = u(p, i[p], n);
      a = queryStringUtils.merge(a, h, n);
    }
    return queryStringUtils.compact(a);
  };
}