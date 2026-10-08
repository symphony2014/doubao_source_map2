// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 813458
         */
module.exports = function (module, exports, require) {
  (function (t) {
    "use strict";

    function e(t) {
      return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
        return typeof t;
      } : function (t) {
        if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof t;
        }
      })(t);
    }
    function n(t, e) {
      return function (t) {
        if (Array.isArray(t)) {
          return t;
        }
      }(t) || function (t, e) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t)) {
          var n = [];
          var i = true;
          var r = false;
          var o = undefined;
          try {
            var a;
            var s = t[Symbol.iterator]();
            for (; !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = true);
          } catch (t) {
            r = true;
            o = t;
          } finally {
            try {
              if (!i && s.return != null) {
                s.return();
              }
            } finally {
              if (r) {
                throw o;
              }
            }
          }
          return n;
        }
      }(t, e) || i(t, e) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function i(t, e) {
      if (t) {
        if (typeof t == "string") {
          return r(t, e);
        }
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if (n === "Object" && t.constructor) {
          n = t.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(t);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return r(t, e);
        }
      }
    }
    function r(t, e) {
      if (e == null || e > t.length) {
        e = t.length;
      }
      var n = 0;
      var i = Array(e);
      for (; n < e; n++) {
        i[n] = t[n];
      }
      return i;
    }
    function o(t, e) {
      if (typeof Symbol == "undefined" || t[Symbol.iterator] == null) {
        if (Array.isArray(t) || (o = i(t)) || e && t && typeof t.length == "number") {
          if (o) {
            t = o;
          }
          var n = 0;
          function r() {}
          return {
            s: r,
            n: function () {
              if (n >= t.length) {
                return {
                  done: true
                };
              } else {
                return {
                  done: false,
                  value: t[n++]
                };
              }
            },
            e: function (t) {
              throw t;
            },
            f: r
          };
        }
        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o;
      var a;
      var s = true;
      var h = false;
      return {
        s: function () {
          o = t[Symbol.iterator]();
        },
        n: function () {
          var t = o.next();
          s = t.done;
          return t;
        },
        e: function (t) {
          h = true;
          a = t;
        },
        f: function () {
          try {
            if (!s && o.return != null) {
              o.return();
            }
          } finally {
            if (h) {
              throw a;
            }
          }
        }
      };
    }
    function a(t, e) {
      if (e === undefined) {
        var n;
        var i;
        var r = o(t);
        try {
          for (r.s(); !(i = r.n()).done;) {
            var a = i.value;
            if (a != null && (n < a || n === undefined && a >= a)) {
              n = a;
            }
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      } else {
        var s;
        var h = -1;
        var l = o(t);
        try {
          for (l.s(); !(s = l.n()).done;) {
            var u = s.value;
            if ((u = e(u, ++h, t)) != null && (n < u || n === undefined && u >= u)) {
              n = u;
            }
          }
        } catch (t) {
          l.e(t);
        } finally {
          l.f();
        }
      }
      return n;
    }
    function s(t, e) {
      if (e === undefined) {
        var n;
        var i;
        var r = o(t);
        try {
          for (r.s(); !(i = r.n()).done;) {
            var a = i.value;
            if (a != null && (n > a || n === undefined && a >= a)) {
              n = a;
            }
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      } else {
        var s;
        var h = -1;
        var l = o(t);
        try {
          for (l.s(); !(s = l.n()).done;) {
            var u = s.value;
            if ((u = e(u, ++h, t)) != null && (n > u || n === undefined && u >= u)) {
              n = u;
            }
          }
        } catch (t) {
          l.e(t);
        } finally {
          l.f();
        }
      }
      return n;
    }
    function h(t, e) {
      var n = 0;
      if (e === undefined) {
        var i;
        var r = o(t);
        try {
          for (r.s(); !(i = r.n()).done;) {
            var a = i.value;
            if (a *= 1) {
              n += a;
            }
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      } else {
        var s;
        var h = -1;
        var l = o(t);
        try {
          for (l.s(); !(s = l.n()).done;) {
            var u = s.value;
            if (u = +e(u, ++h, t)) {
              n += u;
            }
          }
        } catch (t) {
          l.e(t);
        } finally {
          l.f();
        }
      }
      return n;
    }
    function l(t) {
      return t.target.depth;
    }
    function u(t, e) {
      if (t.sourceLinks.length) {
        return t.depth;
      } else {
        return e - 1;
      }
    }
    function c(t) {
      return function () {
        return t;
      };
    }
    function p(t, e) {
      return f(t.source, e.source) || t.index - e.index;
    }
    function d(t, e) {
      return f(t.target, e.target) || t.index - e.index;
    }
    function f(t, e) {
      return t.y0 - e.y0;
    }
    function g(t) {
      return t.value;
    }
    function y(t) {
      return t.index;
    }
    function v(t) {
      return t.nodes;
    }
    function m(t) {
      return t.links;
    }
    function x(t, e) {
      var n = t.get(e);
      if (!n) {
        throw Error("missing: " + e);
      }
      return n;
    }
    function _(t) {
      var e;
      var n = o(t.nodes);
      try {
        for (n.s(); !(e = n.n()).done;) {
          var i;
          var r = e.value;
          var a = r.y0;
          var s = a;
          var h = o(r.sourceLinks);
          try {
            for (h.s(); !(i = h.n()).done;) {
              var l = i.value;
              l.y0 = a + l.width / 2;
              a += l.width;
            }
          } catch (t) {
            h.e(t);
          } finally {
            h.f();
          }
          var u;
          var c = o(r.targetLinks);
          try {
            for (c.s(); !(u = c.n()).done;) {
              var p = u.value;
              p.y1 = s + p.width / 2;
              s += p.width;
            }
          } catch (t) {
            c.e(t);
          } finally {
            c.f();
          }
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
    var b = Math.PI;
    var w = b * 2;
    var S = w - 0.000001;
    function A() {
      this._x0 = this._y0 = this._x1 = this._y1 = null;
      this._ = "";
    }
    function E() {
      return new A();
    }
    function k(t) {
      return function () {
        return t;
      };
    }
    function M(t) {
      return t[0];
    }
    function P(t) {
      return t[1];
    }
    A.prototype = E.prototype = {
      constructor: A,
      moveTo: function (t, e) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
      },
      closePath: function () {
        if (this._x1 !== null) {
          this._x1 = this._x0;
          this._y1 = this._y0;
          this._ += "Z";
        }
      },
      lineTo: function (t, e) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
      },
      quadraticCurveTo: function (t, e, n, i) {
        this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i);
      },
      bezierCurveTo: function (t, e, n, i, r, o) {
        this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +o);
      },
      arcTo: function (t, e, n, i, r) {
        t *= 1;
        e *= 1;
        n *= 1;
        i *= 1;
        r *= 1;
        var o = this._x1;
        var a = this._y1;
        var s = n - t;
        var h = i - e;
        var l = o - t;
        var u = a - e;
        var c = l * l + u * u;
        if (r < 0) {
          throw Error("negative radius: " + r);
        }
        if (this._x1 === null) {
          this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
        } else if (c > 0.000001) {
          if (Math.abs(u * s - h * l) > 0.000001 && r) {
            var p = n - o;
            var d = i - a;
            var f = s * s + h * h;
            var g = Math.sqrt(f);
            var y = Math.sqrt(c);
            var v = r * Math.tan((b - Math.acos((f + c - (p * p + d * d)) / (g * 2 * y))) / 2);
            var m = v / y;
            var x = v / g;
            if (Math.abs(m - 1) > 0.000001) {
              this._ += "L" + (t + m * l) + "," + (e + m * u);
            }
            this._ += "A" + r + "," + r + ",0,0," + +(u * p > l * d) + "," + (this._x1 = t + x * s) + "," + (this._y1 = e + x * h);
          } else {
            this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
          }
        }
      },
      arc: function (t, e, n, i, r, o) {
        t *= 1;
        e *= 1;
        n *= 1;
        o = !!o;
        var a = n * Math.cos(i);
        var s = n * Math.sin(i);
        var h = t + a;
        var l = e + s;
        var u = o ^ 1;
        var c = o ? i - r : r - i;
        if (n < 0) {
          throw Error("negative radius: " + n);
        }
        if (this._x1 === null) {
          this._ += "M" + h + "," + l;
        } else if (Math.abs(this._x1 - h) > 0.000001 || Math.abs(this._y1 - l) > 0.000001) {
          this._ += "L" + h + "," + l;
        }
        if (n) {
          if (c < 0) {
            c = c % w + w;
          }
          if (c > S) {
            this._ += "A" + n + "," + n + ",0,1," + u + "," + (t - a) + "," + (e - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = h) + "," + (this._y1 = l);
          } else if (c > 0.000001) {
            this._ += "A" + n + "," + n + ",0," + +(c >= b) + "," + u + "," + (this._x1 = t + n * Math.cos(r)) + "," + (this._y1 = e + n * Math.sin(r));
          }
        }
      },
      rect: function (t, e, n, i) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z";
      },
      toString: function () {
        return this._;
      }
    };
    var O = Array.prototype.slice;
    function C(t) {
      return t.source;
    }
    function T(t) {
      return t.target;
    }
    function I(t, e, n, i, r) {
      t.moveTo(e, n);
      t.bezierCurveTo(e = (e + i) / 2, n, e, r, i, r);
    }
    function Z(t, e, n) {
      var i = t._x1 - t._x0;
      var r = e - t._x1;
      var o = (t._y1 - t._y0) / (i || r < 0 && -0);
      var a = (n - t._y1) / (r || i < 0 && -0);
      return ((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) * Math.min(Math.abs(o), Math.abs(a), Math.abs((o * r + a * i) / (i + r)) * 0.5) || 0;
    }
    function L(t, e) {
      var n = t._x1 - t._x0;
      if (n) {
        return ((t._y1 - t._y0) * 3 / n - e) / 2;
      } else {
        return e;
      }
    }
    function R(t, e, n) {
      var i = t._x0;
      var r = t._y0;
      var o = t._x1;
      var a = t._y1;
      var s = (o - i) / 3;
      t._context.bezierCurveTo(i + s, r + s * e, o - s, a - s * n, o, a);
    }
    function D(t) {
      this._context = t;
    }
    function B(t) {
      this._context = t;
    }
    function j(t) {
      return [t.source.x1, t.y0];
    }
    function z(t) {
      return [t.target.x0, t.y1];
    }
    D.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            R(this, this._t0, L(this, this._t0));
        }
        if (this._line || this._line !== 0 && this._point === 1) {
          this._context.closePath();
        }
        this._line = 1 - this._line;
      },
      point: function (t, e) {
        var n = NaN;
        e *= 1;
        if ((t *= 1) !== this._x1 || e !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1;
              if (this._line) {
                this._context.lineTo(t, e);
              } else {
                this._context.moveTo(t, e);
              }
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              R(this, L(this, n = Z(this, t, e)), n);
              break;
            default:
              R(this, this._t0, n = Z(this, t, e));
          }
          this._x0 = this._x1;
          this._x1 = t;
          this._y0 = this._y1;
          this._y1 = e;
          this._t0 = n;
        }
      }
    };
    (function (t) {
      this._context = new B(t);
    }.prototype = Object.create(D.prototype)).point = function (t, e) {
      D.prototype.point.call(this, e, t);
    };
    B.prototype = {
      moveTo: function (t, e) {
        this._context.moveTo(e, t);
      },
      closePath: function () {
        this._context.closePath();
      },
      lineTo: function (t, e) {
        this._context.lineTo(e, t);
      },
      bezierCurveTo: function (t, e, n, i, r, o) {
        this._context.bezierCurveTo(e, t, i, n, o, r);
      }
    };
    t.sankey = function () {
      var t;
      var i;
      var r;
      var l = 0;
      var b = 0;
      var w = 1;
      var S = 1;
      var A = 24;
      var E = 8;
      var k = y;
      var M = u;
      var P = v;
      var O = m;
      var C = 6;
      function T() {
        var u = {
          nodes: P.apply(null, arguments),
          links: O.apply(null, arguments)
        };
        (function (t) {
          var r;
          var a = t.nodes;
          var s = t.links;
          var h = o(a.entries());
          try {
            for (h.s(); !(r = h.n()).done;) {
              var l = n(r.value, 2);
              var u = l[0];
              var c = l[1];
              c.index = u;
              c.sourceLinks = [];
              c.targetLinks = [];
            }
          } catch (t) {
            h.e(t);
          } finally {
            h.f();
          }
          var p;
          var d = new Map(a.map(function (t, e) {
            return [k(t, e, a), t];
          }));
          var f = o(s.entries());
          try {
            for (f.s(); !(p = f.n()).done;) {
              var g = n(p.value, 2);
              var y = g[0];
              var v = g[1];
              v.index = y;
              var m = v.source;
              var _ = v.target;
              if (e(m) !== "object") {
                m = v.source = x(d, m);
              }
              if (e(_) !== "object") {
                _ = v.target = x(d, _);
              }
              m.sourceLinks.push(v);
              _.targetLinks.push(v);
            }
          } catch (t) {
            f.e(t);
          } finally {
            f.f();
          }
          if (i != null) {
            var b;
            var w = o(a);
            try {
              for (w.s(); !(b = w.n()).done;) {
                var S = b.value;
                var A = S.sourceLinks;
                var E = S.targetLinks;
                A.sort(i);
                E.sort(i);
              }
            } catch (t) {
              w.e(t);
            } finally {
              w.f();
            }
          }
        })(u);
        (function (t) {
          var e;
          var n = o(t.nodes);
          try {
            for (n.s(); !(e = n.n()).done;) {
              var i = e.value;
              i.value = i.fixedValue === undefined ? Math.max(h(i.sourceLinks, g), h(i.targetLinks, g)) : i.fixedValue;
            }
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
        })(u);
        (function (t) {
          var e = t.nodes;
          var n = e.length;
          var i = new Set(e);
          var r = new Set();
          var a = 0;
          while (i.size) {
            var s;
            var h = o(i);
            try {
              for (h.s(); !(s = h.n()).done;) {
                var l = s.value;
                l.depth = a;
                var u;
                var c = o(l.sourceLinks);
                try {
                  for (c.s(); !(u = c.n()).done;) {
                    var p = u.value.target;
                    r.add(p);
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
              }
            } catch (t) {
              h.e(t);
            } finally {
              h.f();
            }
            if (++a > n) {
              throw Error("circular link");
            }
            i = r;
            r = new Set();
          }
        })(u);
        (function (t) {
          var e = t.nodes;
          var n = e.length;
          var i = new Set(e);
          var r = new Set();
          var a = 0;
          while (i.size) {
            var s;
            var h = o(i);
            try {
              for (h.s(); !(s = h.n()).done;) {
                var l = s.value;
                l.height = a;
                var u;
                var c = o(l.targetLinks);
                try {
                  for (c.s(); !(u = c.n()).done;) {
                    var p = u.value.source;
                    r.add(p);
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
              }
            } catch (t) {
              h.e(t);
            } finally {
              h.f();
            }
            if (++a > n) {
              throw Error("circular link");
            }
            i = r;
            r = new Set();
          }
        })(u);
        (function (e) {
          var n = function (e) {
            var n;
            var i = e.nodes;
            var r = a(i, function (t) {
              return t.depth;
            }) + 1;
            var s = (w - l - A) / (r - 1);
            var h = Array(r);
            var u = o(i);
            try {
              for (u.s(); !(n = u.n()).done;) {
                var c = n.value;
                var p = Math.max(0, Math.min(r - 1, Math.floor(M.call(null, c, r))));
                c.layer = p;
                c.x0 = l + p * s;
                c.x1 = c.x0 + A;
                if (h[p]) {
                  h[p].push(c);
                } else {
                  h[p] = [c];
                }
              }
            } catch (t) {
              u.e(t);
            } finally {
              u.f();
            }
            if (t) {
              var d;
              var f = o(h);
              try {
                for (f.s(); !(d = f.n()).done;) {
                  d.value.sort(t);
                }
              } catch (t) {
                f.e(t);
              } finally {
                f.f();
              }
            }
            return h;
          }(e);
          r = Math.min(E, (S - b) / (a(n, function (t) {
            return t.length;
          }) - 1));
          (function (t) {
            var e;
            var n = s(t, function (t) {
              return (S - b - (t.length - 1) * r) / h(t, g);
            });
            var a = o(t);
            try {
              for (a.s(); !(e = a.n()).done;) {
                var l;
                var u = e.value;
                var c = b;
                var f = o(u);
                try {
                  for (f.s(); !(l = f.n()).done;) {
                    var y = l.value;
                    y.y0 = c;
                    y.y1 = c + y.value * n;
                    c = y.y1 + r;
                    var v;
                    var m = o(y.sourceLinks);
                    try {
                      for (m.s(); !(v = m.n()).done;) {
                        var x = v.value;
                        x.width = x.value * n;
                      }
                    } catch (t) {
                      m.e(t);
                    } finally {
                      m.f();
                    }
                  }
                } catch (t) {
                  f.e(t);
                } finally {
                  f.f();
                }
                c = (S - c + r) / (u.length + 1);
                for (var _ = 0; _ < u.length; ++_) {
                  var w = u[_];
                  w.y0 += c * (_ + 1);
                  w.y1 += c * (_ + 1);
                }
                (function (t) {
                  if (i === undefined) {
                    var e;
                    var n = o(t);
                    try {
                      for (n.s(); !(e = n.n()).done;) {
                        var r = e.value;
                        var a = r.sourceLinks;
                        var s = r.targetLinks;
                        a.sort(d);
                        s.sort(p);
                      }
                    } catch (t) {
                      n.e(t);
                    } finally {
                      n.f();
                    }
                  }
                })(u);
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
          })(n);
          for (var u = 0; u < C; ++u) {
            var c = Math.pow(0.99, u);
            var y = Math.max(1 - c, (u + 1) / C);
            (function (e, n, i) {
              var a = e.length;
              var s = a - 2;
              for (; s >= 0; --s) {
                var h;
                var l = e[s];
                var u = o(l);
                try {
                  for (u.s(); !(h = u.n()).done;) {
                    var c;
                    var p = h.value;
                    var d = 0;
                    var g = 0;
                    var y = o(p.sourceLinks);
                    try {
                      for (y.s(); !(c = y.n()).done;) {
                        var v = c.value;
                        var m = v.target;
                        var x = v.value * (m.layer - p.layer);
                        d += function (t, e) {
                          var n;
                          var i = e.y0 - (e.targetLinks.length - 1) * r / 2;
                          var a = o(e.targetLinks);
                          try {
                            for (a.s(); !(n = a.n()).done;) {
                              var s = n.value;
                              var h = s.source;
                              var l = s.width;
                              if (h === t) {
                                break;
                              }
                              i += l + r;
                            }
                          } catch (t) {
                            a.e(t);
                          } finally {
                            a.f();
                          }
                          var u;
                          var c = o(t.sourceLinks);
                          try {
                            for (c.s(); !(u = c.n()).done;) {
                              var p = u.value;
                              var d = p.target;
                              var f = p.width;
                              if (d === e) {
                                break;
                              }
                              i -= f;
                            }
                          } catch (t) {
                            c.e(t);
                          } finally {
                            c.f();
                          }
                          return i;
                        }(p, m) * x;
                        g += x;
                      }
                    } catch (t) {
                      y.e(t);
                    } finally {
                      y.f();
                    }
                    if (g > 0) {
                      var _ = (d / g - p.y0) * n;
                      p.y0 += _;
                      p.y1 += _;
                      R(p);
                    }
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
                if (t === undefined) {
                  l.sort(f);
                }
                I(l, i);
              }
            })(n, c, y);
            (function (e, n, i) {
              var a = 1;
              var s = e.length;
              for (; a < s; ++a) {
                var h;
                var l = e[a];
                var u = o(l);
                try {
                  for (u.s(); !(h = u.n()).done;) {
                    var c;
                    var p = h.value;
                    var d = 0;
                    var g = 0;
                    var y = o(p.targetLinks);
                    try {
                      for (y.s(); !(c = y.n()).done;) {
                        var v = c.value;
                        var m = v.source;
                        var x = v.value * (p.layer - m.layer);
                        d += function (t, e) {
                          var n;
                          var i = t.y0 - (t.sourceLinks.length - 1) * r / 2;
                          var a = o(t.sourceLinks);
                          try {
                            for (a.s(); !(n = a.n()).done;) {
                              var s = n.value;
                              var h = s.target;
                              var l = s.width;
                              if (h === e) {
                                break;
                              }
                              i += l + r;
                            }
                          } catch (t) {
                            a.e(t);
                          } finally {
                            a.f();
                          }
                          var u;
                          var c = o(e.targetLinks);
                          try {
                            for (c.s(); !(u = c.n()).done;) {
                              var p = u.value;
                              var d = p.source;
                              var f = p.width;
                              if (d === t) {
                                break;
                              }
                              i -= f;
                            }
                          } catch (t) {
                            c.e(t);
                          } finally {
                            c.f();
                          }
                          return i;
                        }(m, p) * x;
                        g += x;
                      }
                    } catch (t) {
                      y.e(t);
                    } finally {
                      y.f();
                    }
                    if (g > 0) {
                      var _ = (d / g - p.y0) * n;
                      p.y0 += _;
                      p.y1 += _;
                      R(p);
                    }
                  }
                } catch (t) {
                  u.e(t);
                } finally {
                  u.f();
                }
                if (t === undefined) {
                  l.sort(f);
                }
                I(l, i);
              }
            })(n, c, y);
          }
        })(u);
        _(u);
        return u;
      }
      function I(t, e) {
        var n = t.length >> 1;
        var i = t[n];
        L(t, i.y0 - r, n - 1, e);
        Z(t, i.y1 + r, n + 1, e);
        L(t, S, t.length - 1, e);
        Z(t, b, 0, e);
      }
      function Z(t, e, n, i) {
        for (; n < t.length; ++n) {
          var o = t[n];
          var a = (e - o.y0) * i;
          if (a > 0.000001) {
            o.y0 += a;
            o.y1 += a;
          }
          e = o.y1 + r;
        }
      }
      function L(t, e, n, i) {
        for (; n >= 0; --n) {
          var o = t[n];
          var a = (o.y1 - e) * i;
          if (a > 0.000001) {
            o.y0 -= a;
            o.y1 -= a;
          }
          e = o.y0 - r;
        }
      }
      function R(t) {
        var e = t.sourceLinks;
        var n = t.targetLinks;
        if (i === undefined) {
          var r;
          var a = o(n);
          try {
            for (a.s(); !(r = a.n()).done;) {
              r.value.source.sourceLinks.sort(d);
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          var s;
          var h = o(e);
          try {
            for (h.s(); !(s = h.n()).done;) {
              s.value.target.targetLinks.sort(p);
            }
          } catch (t) {
            h.e(t);
          } finally {
            h.f();
          }
        }
      }
      T.update = function (t) {
        _(t);
        return t;
      };
      T.nodeId = function (t) {
        if (arguments.length) {
          k = typeof t == "function" ? t : c(t);
          return T;
        } else {
          return k;
        }
      };
      T.nodeAlign = function (t) {
        if (arguments.length) {
          M = typeof t == "function" ? t : c(t);
          return T;
        } else {
          return M;
        }
      };
      T.nodeSort = function (e) {
        if (arguments.length) {
          t = e;
          return T;
        } else {
          return t;
        }
      };
      T.nodeWidth = function (t) {
        if (arguments.length) {
          A = +t;
          return T;
        } else {
          return A;
        }
      };
      T.nodePadding = function (t) {
        if (arguments.length) {
          E = r = +t;
          return T;
        } else {
          return E;
        }
      };
      T.nodes = function (t) {
        if (arguments.length) {
          P = typeof t == "function" ? t : c(t);
          return T;
        } else {
          return P;
        }
      };
      T.links = function (t) {
        if (arguments.length) {
          O = typeof t == "function" ? t : c(t);
          return T;
        } else {
          return O;
        }
      };
      T.linkSort = function (t) {
        if (arguments.length) {
          i = t;
          return T;
        } else {
          return i;
        }
      };
      T.size = function (t) {
        if (arguments.length) {
          l = b = 0;
          w = +t[0];
          S = +t[1];
          return T;
        } else {
          return [w - l, S - b];
        }
      };
      T.extent = function (t) {
        if (arguments.length) {
          l = +t[0][0];
          w = +t[1][0];
          b = +t[0][1];
          S = +t[1][1];
          return T;
        } else {
          return [[l, b], [w, S]];
        }
      };
      T.iterations = function (t) {
        if (arguments.length) {
          C = +t;
          return T;
        } else {
          return C;
        }
      };
      return T;
    };
    t.sankeyCenter = function (t) {
      if (t.targetLinks.length) {
        return t.depth;
      } else if (t.sourceLinks.length) {
        return s(t.sourceLinks, l) - 1;
      } else {
        return 0;
      }
    };
    t.sankeyJustify = u;
    t.sankeyLeft = function (t) {
      return t.depth;
    };
    t.sankeyLinkHorizontal = function () {
      return function (t) {
        var e = C;
        var n = T;
        var i = M;
        var r = P;
        var o = null;
        function a() {
          var a;
          var s = O.call(arguments);
          var h = e.apply(this, s);
          var l = n.apply(this, s);
          o ||= a = E();
          t(o, +i.apply(this, (s[0] = h, s)), +r.apply(this, s), +i.apply(this, (s[0] = l, s)), +r.apply(this, s));
          if (a) {
            o = null;
            return a + "" || null;
          }
        }
        a.source = function (t) {
          if (arguments.length) {
            e = t;
            return a;
          } else {
            return e;
          }
        };
        a.target = function (t) {
          if (arguments.length) {
            n = t;
            return a;
          } else {
            return n;
          }
        };
        a.x = function (t) {
          if (arguments.length) {
            i = typeof t == "function" ? t : k(+t);
            return a;
          } else {
            return i;
          }
        };
        a.y = function (t) {
          if (arguments.length) {
            r = typeof t == "function" ? t : k(+t);
            return a;
          } else {
            return r;
          }
        };
        a.context = function (t) {
          if (arguments.length) {
            o = t == null ? null : t;
            return a;
          } else {
            return o;
          }
        };
        return a;
      }(I).source(j).target(z);
    };
    t.sankeyRight = function (t, e) {
      return e - 1 - t.height;
    };
    Object.defineProperty(t, "__esModule", {
      value: true
    });
  })(exports);
}