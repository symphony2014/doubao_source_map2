// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 810513
         */
module.exports = function (module, exports, require) {
  module.exports = u;
  var t = /[\s{}=;:[\],'"()<>]/g;
  var r = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
  var n = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
  var i = /^ *[*/]+ */;
  var s = /^\s*\*?\/*/;
  var o = /\n/g;
  var a = /\s/;
  var c = /\\(.?)/g;
  var l = {
    0: "\0",
    r: "\r",
    n: "\n",
    t: "\t"
  };
  function h(e) {
    return e.replace(c, function (e, t) {
      switch (t) {
        case "\\":
        case "":
          return t;
        default:
          return l[t] || "";
      }
    });
  }
  function u(e, c) {
    e = e.toString();
    var l = 0;
    var u = e.length;
    var f = 1;
    var p = null;
    var d = null;
    var y = 0;
    var g = false;
    var v = [];
    var m = null;
    function b(e) {
      return Error("illegal " + e + " (line " + f + ")");
    }
    function O() {
      var t = m === "'" ? n : r;
      t.lastIndex = l - 1;
      var i = t.exec(e);
      if (!i) {
        throw b("string");
      }
      l = t.lastIndex;
      T(m);
      m = null;
      return h(i[1]);
    }
    function w(t) {
      return e.charAt(t);
    }
    function k(t, r) {
      p = e.charAt(t++);
      y = f;
      g = false;
      var n;
      var a;
      var l = t - (n = c ? 2 : 3);
      do {
        if (--l < 0 || (a = e.charAt(l)) === "\n") {
          g = true;
          break;
        }
      } while (a === " " || a === "\t");
      var h = e.substring(t, r).split(o);
      var u = 0;
      for (; u < h.length; ++u) {
        h[u] = h[u].replace(c ? s : i, "").trim();
      }
      d = h.join("\n").trim();
    }
    function E(t) {
      var r = S(t);
      var n = e.substring(t, r);
      return /^\s*\/{1,2}/.test(n);
    }
    function S(e) {
      for (var t = e; t < u && w(t) !== "\n";) {
        t++;
      }
      return t;
    }
    function I() {
      if (v.length > 0) {
        return v.shift();
      }
      if (m) {
        return O();
      }
      do {
        if (l === u) {
          return null;
        }
        for (r = false; a.test(i = w(l));) {
          if (i === "\n") {
            ++f;
          }
          if (++l === u) {
            return null;
          }
        }
        if (w(l) === "/") {
          if (++l === u) {
            throw b("comment");
          }
          if (w(l) === "/") {
            if (c) {
              s = l;
              o = false;
              if (E(l)) {
                o = true;
                do {
                  if ((l = S(l)) === u) {
                    break;
                  }
                  l++;
                } while (E(l));
              } else {
                l = Math.min(u, S(l) + 1);
              }
              if (o) {
                k(s, l);
              }
              f++;
              r = true;
            } else {
              for (o = w(s = l + 1) === "/"; w(++l) !== "\n";) {
                if (l === u) {
                  return null;
                }
              }
              ++l;
              if (o) {
                k(s, l - 1);
              }
              ++f;
              r = true;
            }
          } else {
            if ((i = w(l)) !== "*") {
              return "/";
            }
            s = l + 1;
            o = c || w(s) === "*";
            do {
              if (i === "\n") {
                ++f;
              }
              if (++l === u) {
                throw b("comment");
              }
              n = i;
              i = w(l);
            } while (n !== "*" || i !== "/");
            ++l;
            if (o) {
              k(s, l - 2);
            }
            r = true;
          }
        }
      } while (r);
      var r;
      var n;
      var i;
      var s;
      var o;
      var h = l;
      t.lastIndex = 0;
      if (!t.test(w(h++))) {
        while (h < u && !t.test(w(h))) {
          ++h;
        }
      }
      var p = e.substring(l, l = h);
      if (p === "\"" || p === "'") {
        m = p;
      }
      return p;
    }
    function T(e) {
      v.push(e);
    }
    function x() {
      if (!v.length) {
        var e = I();
        if (e === null) {
          return null;
        }
        T(e);
      }
      return v[0];
    }
    function A(e, t) {
      var r = x();
      if (r === e) {
        I();
        return true;
      }
      if (!t) {
        throw b("token '" + r + "', '" + e + "' expected");
      }
      return false;
    }
    function C(e) {
      var t = null;
      if (e === undefined) {
        if (y === f - 1 && (c || p === "*" || g)) {
          t = d;
        }
      } else {
        if (y < e) {
          x();
        }
        if (y === e && !g && (c || p === "/")) {
          t = d;
        }
      }
      return t;
    }
    return Object.defineProperty({
      next: I,
      peek: x,
      push: T,
      skip: A,
      cmnt: C
    }, "line", {
      get: function () {
        return f;
      }
    });
  }
  u.unescape = h;
}