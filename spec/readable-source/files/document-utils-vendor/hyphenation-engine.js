// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 39962
         */
module.exports = function (module, exports, require) {
  var n;
  n = function () {
    var e = RegExp.prototype.test.bind(/\s|(?![\'])[\!-\@\[-\`\{-\~\u2013-\u203C]/);
    var t = [];
    var n = "debug";
    var i = "exceptions";
    var o = "hyphenChar";
    var a = "minWordLength";
    var s = typeof require.g == "object" ? require.g : typeof window == "object" ? window : typeof self == "object" ? self : {};
    function l(e, t) {
      e = e || {};
      for (var r in t) {
        e[r] = t[r];
      }
      return e;
    }
    function u(e) {
      return e instanceof Array;
    }
    function c(e, t, r, n) {
      if (t in e && (!n || n(e[t]))) {
        return e[t];
      } else {
        return r;
      }
    }
    function h(e, t) {
      return e.reduce(function (e, r) {
        e["~" + r.replace(/\-/g, "")] = r.replace(/\-/g, t);
        return e;
      }, {});
    }
    return function (r, d) {
      var f = c(d = d || {}, "async", false);
      var A = {};
      var g = c(d, n, false);
      var p = {};
      var m = c(d, o, "­");
      var y = r[0].split(",");
      var v = JSON.parse(r[1]);
      var b = c(d, a, 5) >> 0;
      var w = c(d, "html", true);
      var C = c(d, i, t, u);
      var E = m + b;
      p[E] = {};
      if (r[2]) {
        p[E] = h(r[2], m);
      }
      if (C && C.length) {
        p[E] = l(p[E], h(C, m));
      }
      A[E] = l({}, p[E]);
      if (f && !("Promise" in s)) {
        throw Error("Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode");
      }
      return function (s, d) {
        var C = c(d = d || {}, n, g);
        var E = c(d, o, m);
        var I = c(d, a, b) >> 0;
        var B = c(d, i, t, u);
        var x = E + I;
        if (!p[x] && r[2]) {
          p[x] = h(r[2], E);
          A[x] = l(A[x], p[x]);
        }
        if (B && B.length) {
          p[x] = l(p[x], h(B, E));
          A[x] = l(A[x], p[x]);
        }
        return function (t, r, n, i, o, a, s, l, u) {
          var c;
          var h;
          var d;
          var f;
          var A;
          var g;
          var p;
          var m;
          var y = "";
          d = (s ? [(c = false, function (t, r) {
            if (c) {
              if (r[0] === ">") {
                t();
                c = false;
              }
            } else if (r[0] === "<" && (!e(r[1]) || r[1] === "/")) {
              c = true;
            }
            return c;
          })] : []).concat((h = false, function (t, r) {
            if (h) {
              if (!e(r[0]) && e(r[1])) {
                t();
                h = false;
              }
            } else if (!e(r[0]) && r[1] === a) {
              h = true;
            }
            return h;
          }));
          f = "";
          A = "";
          g = 0;
          p = function () {
            var t = "";
            var r = "";
            function n() {
              t += r;
              r = "";
            }
            return function (i, o) {
              r += i;
              var a;
              var s;
              var u = d.reduce(function (e, t) {
                return e || t(n, [i, o]);
              }, false);
              if (!u && (e(i) && !e(o) && n(), !e(i) && e(o))) {
                if (r.length >= l) {
                  a = [t, r];
                  t = "";
                  r = "";
                  return a;
                }
                n();
              }
              if (o === "") {
                if (r.length < l || u) {
                  n();
                }
                s = [t, r];
                t = "";
                r = "";
                return s;
              }
            };
          }();
          function v(e) {
            while (g < e.length) {
              f = e.charAt(g++);
              A = e.charAt(g);
              var t = p(f, A);
              if (t !== undefined) {
                return t;
              }
            }
          }
          function b() {}
          function w() {
            for (var e = new Date(); (!u || new Date() - e < 10) && (m = v(t));) {
              if (m[1]) {
                var o = m[1].length ? "~" + m[1] : "";
                if (i[o] === undefined) {
                  i[o] = function (e, t, r, n, i) {
                    var o;
                    var a;
                    var s;
                    var l;
                    var u;
                    var c;
                    var h;
                    var d;
                    var f;
                    var A;
                    var g;
                    var p;
                    var m = Array(e.length + 1);
                    var y = ("." + e.toLocaleLowerCase() + ".").split("");
                    var v = -1;
                    var b = m.length;
                    while (b--) {
                      m[b] = 0;
                    }
                    o = 0;
                    a = y;
                    A = (f = [function () {
                      if (!((a = y.slice(o++)).length < 3)) {
                        return a;
                      }
                    }, function () {
                      return o === 2;
                    }])[0];
                    g = f[1];
                    while (s = A()) {
                      v++;
                      if (g()) {
                        v--;
                      }
                      u = r;
                      p = function (e) {
                        var t = 0;
                        return function () {
                          return e[t++];
                        };
                      }(s);
                      while ((l = p()) && (c = u[l]) !== undefined) {
                        u = {};
                        h = -1;
                        switch (Object.prototype.toString.call(c)) {
                          case "[object Array]":
                            u = c[0];
                            h = c[1];
                            break;
                          case "[object Object]":
                            u = c;
                            break;
                          case "[object Number]":
                            h = c;
                        }
                        if (!(h < 0)) {
                          if (!t[h].splice) {
                            t[h] = t[h].slice("");
                          }
                          d = t[h];
                          for (var w = 0; w < d.length; w++) {
                            m[v + w] = Math.max(d[w], m[v + w]);
                          }
                        }
                      }
                    }
                    m[0] = m[1] = m[m.length - 1] = m[m.length - 2] = 0;
                    var C = "";
                    var b = 0;
                    for (; b < m.length; b++) {
                      C += (m[b] % 2 == 1 ? i : "") + e.charAt(b);
                    }
                    return C;
                  }(m[1], r, n, 0, a);
                }
                m[1] = i[o];
              }
              y += m[0] + m[1];
            }
            if (m) {
              setTimeout(w);
            } else {
              b(y);
            }
          }
          if (u) {
            setTimeout(w);
            return new Promise(function (e) {
              b = e;
            });
          } else {
            w();
            return y;
          }
        }(s, y, v, A[x], 0, E, w, I, f);
      };
    };
  };
  if (typeof define == "function" && define.amd) {
    define([], n);
  } else if (module.exports) {
    module.exports = n();
  } else {
    this.createHyphenator = n();
  }
}