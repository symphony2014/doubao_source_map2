// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 183089
         */
module.exports = function (module, exports, require) {
  function e(t, p, d, h, y) {
    if (t === p) {
      if (t) {
        return [[0, t]];
      } else {
        return [];
      }
    }
    if (d != null) {
      var g = function (t, e, r) {
        var n = typeof r == "number" ? {
          index: r,
          length: 0
        } : r.oldRange;
        var o = typeof r == "number" ? null : r.newRange;
        var i = t.length;
        var u = e.length;
        if (n.length === 0 && (o === null || o.length === 0)) {
          var a = n.index;
          var s = t.slice(0, a);
          var c = t.slice(a);
          var f = o ? o.index : null;
          t: {
            var l = a + u - i;
            if (f !== null && f !== l || l < 0 || l > u) {
              break t;
            }
            var p = e.slice(0, l);
            var d = e.slice(l);
            if (d !== c) {
              break t;
            }
            var h = Math.min(a, l);
            var y = s.slice(0, h);
            var g = p.slice(0, h);
            if (y !== g) {
              break t;
            }
            var v = s.slice(h);
            var m = p.slice(h);
            return b(y, v, m, c);
          }
          e: if (f === null || f === a) {
            var p = e.slice(0, a);
            var d = e.slice(a);
            if (p !== s) {
              break e;
            }
            var S = Math.min(i - a, u - a);
            var w = c.slice(c.length - S);
            var A = d.slice(d.length - S);
            if (w !== A) {
              break e;
            }
            var v = c.slice(0, c.length - S);
            var m = d.slice(0, d.length - S);
            return b(s, v, m, w);
          }
        }
        if (n.length > 0 && o && o.length === 0) {
          r: {
            var y = t.slice(0, n.index);
            var w = t.slice(n.index + n.length);
            var h = y.length;
            var S = w.length;
            if (u < h + S) {
              break r;
            }
            var g = e.slice(0, h);
            var A = e.slice(u - S);
            if (y !== g || w !== A) {
              break r;
            }
            var v = t.slice(h, i - S);
            var m = e.slice(h, u - S);
            return b(y, v, m, w);
          }
        }
        return null;
      }(t, p, d);
      if (g) {
        return g;
      }
    }
    var v = n(t, p);
    var m = t.substring(0, v);
    v = i(t = t.substring(v), p = p.substring(v));
    var S = t.substring(t.length - v);
    var w = function (t, o) {
      if (!t) {
        return [[1, o]];
      }
      if (!o) {
        return [[-1, t]];
      }
      var u;
      var a = t.length > o.length ? t : o;
      var s = t.length > o.length ? o : t;
      var c = a.indexOf(s);
      if (c !== -1) {
        u = [[1, a.substring(0, c)], [0, s], [1, a.substring(c + s.length)]];
        if (t.length > o.length) {
          u[0][0] = u[2][0] = -1;
        }
        return u;
      }
      if (s.length === 1) {
        return [[-1, t], [1, o]];
      }
      var f = function (t, e) {
        var r;
        var o;
        var u;
        var a;
        var s;
        var c = t.length > e.length ? t : e;
        var f = t.length > e.length ? e : t;
        if (c.length < 4 || f.length * 2 < c.length) {
          return null;
        }
        function l(t, e, r) {
          var o;
          var u;
          var a;
          var s;
          var c = t.substring(r, r + Math.floor(t.length / 4));
          var f = -1;
          var l = "";
          while ((f = e.indexOf(c, f + 1)) !== -1) {
            var p = n(t.substring(r), e.substring(f));
            var d = i(t.substring(0, r), e.substring(0, f));
            if (l.length < d + p) {
              l = e.substring(f - d, f) + e.substring(f, f + p);
              o = t.substring(0, r - d);
              u = t.substring(r + p);
              a = e.substring(0, f - d);
              s = e.substring(f + p);
            }
          }
          if (l.length * 2 >= t.length) {
            return [o, u, a, s, l];
          } else {
            return null;
          }
        }
        var p = l(c, f, Math.ceil(c.length / 4));
        var d = l(c, f, Math.ceil(c.length / 2));
        if (p || d) {
          r = d ? p && p[4].length > d[4].length ? p : d : p;
          if (t.length > e.length) {
            o = r[0];
            u = r[1];
            a = r[2];
            s = r[3];
          } else {
            a = r[0];
            s = r[1];
            o = r[2];
            u = r[3];
          }
          return [o, u, a, s, r[4]];
        } else {
          return null;
        }
      }(t, o);
      if (f) {
        var l = f[0];
        var p = f[1];
        var d = f[2];
        var h = f[3];
        var y = f[4];
        var b = e(l, d);
        var g = e(p, h);
        return b.concat([[0, y]], g);
      }
      return function (t, e) {
        var n = t.length;
        var o = e.length;
        var i = Math.ceil((n + o) / 2);
        var u = i * 2;
        var a = Array(u);
        var s = Array(u);
        var c = 0;
        for (; c < u; c++) {
          a[c] = -1;
          s[c] = -1;
        }
        a[i + 1] = 0;
        s[i + 1] = 0;
        var f = n - o;
        var l = f % 2 != 0;
        var p = 0;
        var d = 0;
        var h = 0;
        var y = 0;
        var b = 0;
        for (; b < i; b++) {
          for (var g = -b + p; g <= b - d; g += 2) {
            var v;
            var m = i + g;
            var S = (v = g === -b || g !== b && a[m - 1] < a[m + 1] ? a[m + 1] : a[m - 1] + 1) - g;
            while (v < n && S < o && t.charAt(v) === e.charAt(S)) {
              v++;
              S++;
            }
            a[m] = v;
            if (v > n) {
              d += 2;
            } else if (S > o) {
              p += 2;
            } else if (l) {
              var w = i + f - g;
              if (w >= 0 && w < u && s[w] !== -1) {
                var A = n - s[w];
                if (v >= A) {
                  return r(t, e, v, S);
                }
              }
            }
          }
          for (var x = -b + h; x <= b - y; x += 2) {
            var A;
            var w = i + x;
            var O = (A = x === -b || x !== b && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1) - x;
            while (A < n && O < o && t.charAt(n - A - 1) === e.charAt(o - O - 1)) {
              A++;
              O++;
            }
            s[w] = A;
            if (A > n) {
              y += 2;
            } else if (O > o) {
              h += 2;
            } else if (!l) {
              var m = i + f - x;
              if (m >= 0 && m < u && a[m] !== -1) {
                var v = a[m];
                var S = i + v - m;
                if (v >= (A = n - A)) {
                  return r(t, e, v, S);
                }
              }
            }
          }
        }
        return [[-1, t], [1, e]];
      }(t, o);
    }(t = t.substring(0, t.length - v), p = p.substring(0, p.length - v));
    if (m) {
      w.unshift([0, m]);
    }
    if (S) {
      w.push([0, S]);
    }
    l(w, y);
    if (h) {
      (function (t) {
        var e = false;
        var r = [];
        var n = 0;
        var p = null;
        var d = 0;
        var h = 0;
        var y = 0;
        var b = 0;
        var g = 0;
        while (d < t.length) {
          if (t[d][0] == 0) {
            r[n++] = d;
            h = b;
            y = g;
            b = 0;
            g = 0;
            p = t[d][1];
          } else {
            if (t[d][0] == 1) {
              b += t[d][1].length;
            } else {
              g += t[d][1].length;
            }
            if (p && p.length <= Math.max(h, y) && p.length <= Math.max(b, g)) {
              t.splice(r[n - 1], 0, [-1, p]);
              t[r[n - 1] + 1][0] = 1;
              n--;
              d = --n > 0 ? r[n - 1] : -1;
              h = 0;
              y = 0;
              b = 0;
              g = 0;
              p = null;
              e = true;
            }
          }
          d++;
        }
        if (e) {
          l(t);
        }
        (function (t) {
          function e(t, e) {
            if (!t || !e) {
              return 6;
            }
            var r = t.charAt(t.length - 1);
            var n = e.charAt(0);
            var o = r.match(u);
            var i = n.match(u);
            var l = o && r.match(a);
            var p = i && n.match(a);
            var d = l && r.match(s);
            var h = p && n.match(s);
            var y = d && t.match(c);
            var b = h && e.match(f);
            if (y || b) {
              return 5;
            }
            if (d || h) {
              return 4;
            }
            if (o && !l && p) {
              return 3;
            }
            if (l || p) {
              return 2;
            }
            if (o || i) {
              return 1;
            }
            return 0;
          }
          for (var r = 1; r < t.length - 1;) {
            if (t[r - 1][0] == 0 && t[r + 1][0] == 0) {
              var n = t[r - 1][1];
              var o = t[r][1];
              var l = t[r + 1][1];
              var p = i(n, o);
              if (p) {
                var d = o.substring(o.length - p);
                n = n.substring(0, n.length - p);
                o = d + o.substring(0, o.length - p);
                l = d + l;
              }
              var h = n;
              var y = o;
              var b = l;
              var g = e(n, o) + e(o, l);
              while (o.charAt(0) === l.charAt(0)) {
                n += o.charAt(0);
                o = o.substring(1) + l.charAt(0);
                l = l.substring(1);
                var v = e(n, o) + e(o, l);
                if (v >= g) {
                  g = v;
                  h = n;
                  y = o;
                  b = l;
                }
              }
              if (t[r - 1][1] != h) {
                if (h) {
                  t[r - 1][1] = h;
                } else {
                  t.splice(r - 1, 1);
                  r--;
                }
                t[r][1] = y;
                if (b) {
                  t[r + 1][1] = b;
                } else {
                  t.splice(r + 1, 1);
                  r--;
                }
              }
            }
            r++;
          }
        })(t);
        d = 1;
        while (d < t.length) {
          if (t[d - 1][0] == -1 && t[d][0] == 1) {
            var v = t[d - 1][1];
            var m = t[d][1];
            var S = o(v, m);
            var w = o(m, v);
            if (S >= w) {
              if (S >= v.length / 2 || S >= m.length / 2) {
                t.splice(d, 0, [0, m.substring(0, S)]);
                t[d - 1][1] = v.substring(0, v.length - S);
                t[d + 1][1] = m.substring(S);
                d++;
              }
            } else if (w >= v.length / 2 || w >= m.length / 2) {
              t.splice(d, 0, [0, v.substring(0, w)]);
              t[d - 1][0] = 1;
              t[d - 1][1] = m.substring(0, m.length - w);
              t[d + 1][0] = -1;
              t[d + 1][1] = v.substring(w);
              d++;
            }
            d++;
          }
          d++;
        }
      })(w);
    }
    return w;
  }
  function r(t, r, n, o) {
    var i = t.substring(0, n);
    var u = r.substring(0, o);
    var a = t.substring(n);
    var s = r.substring(o);
    var c = e(i, u);
    var f = e(a, s);
    return c.concat(f);
  }
  function n(t, e) {
    if (!t || !e || t.charAt(0) !== e.charAt(0)) {
      return 0;
    }
    var r = 0;
    var n = Math.min(t.length, e.length);
    var o = n;
    var i = 0;
    while (r < o) {
      if (t.substring(i, o) == e.substring(i, o)) {
        i = r = o;
      } else {
        n = o;
      }
      o = Math.floor((n - r) / 2 + r);
    }
    if (p(t.charCodeAt(o - 1))) {
      o--;
    }
    return o;
  }
  function o(t, e) {
    var r = t.length;
    var n = e.length;
    if (r == 0 || n == 0) {
      return 0;
    }
    if (r > n) {
      t = t.substring(r - n);
    } else if (r < n) {
      e = e.substring(0, r);
    }
    var o = Math.min(r, n);
    if (t == e) {
      return o;
    }
    var i = 0;
    var u = 1;
    while (true) {
      var a = t.substring(o - u);
      var s = e.indexOf(a);
      if (s == -1) {
        return i;
      }
      u += s;
      if (s == 0 || t.substring(o - u) == e.substring(0, u)) {
        i = u;
        u++;
      }
    }
  }
  function i(t, e) {
    if (!t || !e || t.slice(-1) !== e.slice(-1)) {
      return 0;
    }
    var r = 0;
    var n = Math.min(t.length, e.length);
    var o = n;
    var i = 0;
    while (r < o) {
      if (t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i)) {
        i = r = o;
      } else {
        n = o;
      }
      o = Math.floor((n - r) / 2 + r);
    }
    if (d(t.charCodeAt(t.length - o))) {
      o--;
    }
    return o;
  }
  var u = /[^a-zA-Z0-9]/;
  var a = /\s/;
  var s = /[\r\n]/;
  var c = /\n\r?\n$/;
  var f = /^\r?\n\r?\n/;
  function l(t, e) {
    t.push([0, ""]);
    var r;
    var o = 0;
    var u = 0;
    var a = 0;
    var s = "";
    var c = "";
    while (o < t.length) {
      if (o < t.length - 1 && !t[o][1]) {
        t.splice(o, 1);
        continue;
      }
      switch (t[o][0]) {
        case 1:
          a++;
          c += t[o][1];
          o++;
          break;
        case -1:
          u++;
          s += t[o][1];
          o++;
          break;
        case 0:
          var f = o - a - u - 1;
          if (e) {
            if (f >= 0 && y(t[f][1])) {
              var p = t[f][1].slice(-1);
              t[f][1] = t[f][1].slice(0, -1);
              s = p + s;
              c = p + c;
              if (!t[f][1]) {
                t.splice(f, 1);
                o--;
                var d = f - 1;
                if (t[d] && t[d][0] === 1) {
                  a++;
                  c = t[d][1] + c;
                  d--;
                }
                if (t[d] && t[d][0] === -1) {
                  u++;
                  s = t[d][1] + s;
                  d--;
                }
                f = d;
              }
            }
            if (h(t[o][1])) {
              var p = t[o][1].charAt(0);
              t[o][1] = t[o][1].slice(1);
              s += p;
              c += p;
            }
          }
          if (o < t.length - 1 && !t[o][1]) {
            t.splice(o, 1);
            break;
          }
          if (s.length > 0 || c.length > 0) {
            if (s.length > 0 && c.length > 0) {
              if ((r = n(c, s)) !== 0) {
                if (f >= 0) {
                  t[f][1] += c.substring(0, r);
                } else {
                  t.splice(0, 0, [0, c.substring(0, r)]);
                  o++;
                }
                c = c.substring(r);
                s = s.substring(r);
              }
              if ((r = i(c, s)) !== 0) {
                t[o][1] = c.substring(c.length - r) + t[o][1];
                c = c.substring(0, c.length - r);
                s = s.substring(0, s.length - r);
              }
            }
            var b = a + u;
            if (s.length === 0 && c.length === 0) {
              t.splice(o - b, b);
              o -= b;
            } else if (s.length === 0) {
              t.splice(o - b, b, [1, c]);
              o = o - b + 1;
            } else if (c.length === 0) {
              t.splice(o - b, b, [-1, s]);
              o = o - b + 1;
            } else {
              t.splice(o - b, b, [-1, s], [1, c]);
              o = o - b + 2;
            }
          }
          if (o !== 0 && t[o - 1][0] === 0) {
            t[o - 1][1] += t[o][1];
            t.splice(o, 1);
          } else {
            o++;
          }
          a = 0;
          u = 0;
          s = "";
          c = "";
      }
    }
    if (t[t.length - 1][1] === "") {
      t.pop();
    }
    var g = false;
    for (o = 1; o < t.length - 1;) {
      if (t[o - 1][0] === 0 && t[o + 1][0] === 0) {
        if (t[o][1].substring(t[o][1].length - t[o - 1][1].length) === t[o - 1][1]) {
          t[o][1] = t[o - 1][1] + t[o][1].substring(0, t[o][1].length - t[o - 1][1].length);
          t[o + 1][1] = t[o - 1][1] + t[o + 1][1];
          t.splice(o - 1, 1);
          g = true;
        } else if (t[o][1].substring(0, t[o + 1][1].length) == t[o + 1][1]) {
          t[o - 1][1] += t[o + 1][1];
          t[o][1] = t[o][1].substring(t[o + 1][1].length) + t[o + 1][1];
          t.splice(o + 1, 1);
          g = true;
        }
      }
      o++;
    }
    if (g) {
      l(t, e);
    }
  }
  function p(t) {
    return t >= 55296 && t <= 56319;
  }
  function d(t) {
    return t >= 56320 && t <= 57343;
  }
  function h(t) {
    return d(t.charCodeAt(0));
  }
  function y(t) {
    return p(t.charCodeAt(t.length - 1));
  }
  function b(t, e, r, n) {
    if (y(t) || h(n)) {
      return null;
    } else {
      return function (t) {
        var e = [];
        var r = 0;
        for (; r < t.length; r++) {
          if (t[r][1].length > 0) {
            e.push(t[r]);
          }
        }
        return e;
      }([[0, t], [-1, e], [1, r], [0, n]]);
    }
  }
  function g(t, r, n, o) {
    return e(t, r, n, o, true);
  }
  g.INSERT = 1;
  g.DELETE = -1;
  g.EQUAL = 0;
  module.exports = g;
}