// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayIsArrayPolyfill'
// - Resolved require(669308) to 'array-is-array-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 203393
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayPolyfill = require("array-is-array-polyfill") /*id: 669308*/;
  module.exports = function e(t, r, n) {
    var o;
    var s;
    var l;
    if (!arrayIsArrayPolyfill(r)) {
      n = r || n;
      r = [];
    }
    n = n || {};
    if (t instanceof RegExp) {
      return function (e, t) {
        var r;
        var i;
        var n = e.source.match(/\((?!\?)/g);
        if (n) {
          for (var a = 0; a < n.length; a++) {
            t.push({
              name: a,
              prefix: null,
              delimiter: null,
              optional: false,
              repeat: false,
              partial: false,
              asterisk: false,
              pattern: null
            });
          }
        }
        e.keys = t;
        return e;
      }(t, r);
    } else if (arrayIsArrayPolyfill(t)) {
      return function (t, r, i) {
        var n;
        var a;
        var o = [];
        var s = 0;
        for (; s < t.length; s++) {
          o.push(e(t[s], r, i).source);
        }
        (n = RegExp("(?:" + o.join("|") + ")", c(i))).keys = r;
        return n;
      }(t, r, n);
    } else {
      s = r;
      return u(a(t, l = n), s, l);
    }
  };
  module.exports.parse = a;
  module.exports.compile = function (e, t) {
    return s(a(e, t), t);
  };
  module.exports.tokensToFunction = s;
  module.exports.tokensToRegExp = u;
  var n = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");
  function a(e, t) {
    var r;
    var i = [];
    var a = 0;
    var o = 0;
    var s = "";
    var c = t && t.delimiter || "/";
    while ((r = n.exec(e)) != null) {
      var u;
      var d;
      var p = r[0];
      var _ = r[1];
      var h = r.index;
      s += e.slice(o, h);
      o = h + p.length;
      if (_) {
        s += _[1];
        continue;
      }
      var m = e[o];
      var g = r[2];
      var f = r[3];
      var y = r[4];
      var E = r[5];
      var T = r[6];
      var v = r[7];
      if (s) {
        i.push(s);
        s = "";
      }
      var S = g != null && m != null && m !== g;
      var L = T === "+" || T === "*";
      var k = T === "?" || T === "*";
      var C = g || c;
      var A = y || E;
      var I = g || (typeof i[i.length - 1] == "string" ? i[i.length - 1] : "");
      i.push({
        name: f || a++,
        prefix: g || "",
        delimiter: C,
        optional: k,
        repeat: L,
        partial: S,
        asterisk: !!v,
        pattern: A ? A.replace(/([=!:$\/()])/g, "\\$1") : v ? ".*" : (u = C, !(d = I) || d.indexOf(u) > -1 ? "[^" + l(u) + "]+?" : l(d) + "|(?:(?!" + l(d) + ")[^" + l(u) + "])+?")
      });
    }
    if (o < e.length) {
      s += e.substr(o);
    }
    if (s) {
      i.push(s);
    }
    return i;
  }
  function o(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
      return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function s(e, t) {
    var r = Array(e.length);
    var n = 0;
    for (; n < e.length; n++) {
      if (typeof e[n] == "object") {
        r[n] = RegExp("^(?:" + e[n].pattern + ")$", c(t));
      }
    }
    return function (t, n) {
      var a = "";
      var s = t || {};
      var l = (n || {}).pretty ? o : encodeURIComponent;
      var c = 0;
      for (; c < e.length; c++) {
        var u;
        var d = e[c];
        if (typeof d == "string") {
          a += d;
          continue;
        }
        var p = s[d.name];
        if (p == null) {
          if (d.optional) {
            if (d.partial) {
              a += d.prefix;
            }
            continue;
          }
          throw TypeError("Expected \"" + d.name + "\" to be defined");
        }
        if (arrayIsArrayPolyfill(p)) {
          if (!d.repeat) {
            throw TypeError("Expected \"" + d.name + "\" to not repeat, but received `" + JSON.stringify(p) + "`");
          }
          if (p.length === 0) {
            if (d.optional) {
              continue;
            }
            throw TypeError("Expected \"" + d.name + "\" to not be empty");
          }
          for (var _ = 0; _ < p.length; _++) {
            u = l(p[_]);
            if (!r[c].test(u)) {
              throw TypeError("Expected all \"" + d.name + "\" to match \"" + d.pattern + "\", but received `" + JSON.stringify(u) + "`");
            }
            a += (_ === 0 ? d.prefix : d.delimiter) + u;
          }
          continue;
        }
        u = d.asterisk ? encodeURI(p).replace(/[?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        }) : l(p);
        if (!r[c].test(u)) {
          throw TypeError("Expected \"" + d.name + "\" to match \"" + d.pattern + "\", but received \"" + u + "\"");
        }
        a += d.prefix + u;
      }
      return a;
    };
  }
  function l(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function c(e) {
    if (e && e.sensitive) {
      return "";
    } else {
      return "i";
    }
  }
  function u(e, t, r) {
    if (!arrayIsArrayPolyfill(t)) {
      r = t || r;
      t = [];
    }
    var n;
    var a;
    var o = (r = r || {}).strict;
    var s = r.end !== false;
    var u = "";
    var d = 0;
    for (; d < e.length; d++) {
      var p = e[d];
      if (typeof p == "string") {
        u += l(p);
      } else {
        var _ = l(p.prefix);
        var h = "(?:" + p.pattern + ")";
        t.push(p);
        if (p.repeat) {
          h += "(?:" + _ + h + ")*";
        }
        u += h = p.optional ? p.partial ? _ + "(" + h + ")?" : "(?:" + _ + "(" + h + "))?" : _ + "(" + h + ")";
      }
    }
    var m = l(r.delimiter || "/");
    var g = u.slice(-m.length) === m;
    if (!o) {
      u = (g ? u.slice(0, -m.length) : u) + "(?:" + m + "(?=$))?";
    }
    if (s) {
      u += "$";
    } else {
      u += o && g ? "" : "(?=" + m + "|$)";
    }
    n = RegExp("^" + u, c(r));
    a = t;
    n.keys = a;
    return n;
  }
}