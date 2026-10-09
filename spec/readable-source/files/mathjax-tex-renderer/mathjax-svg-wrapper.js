// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// - Renamed variable 'a' to 'mathmlCommonWrapper'
// - Resolved require(448242) to 'mathml-common-wrapper'
// - Renamed variable 'u' to 'mathjaxSvgOutputJax'
// - Resolved require(264785) to 'mathjax-svg-output-jax'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 780260
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var o = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  exports.SVGWrapper = undefined;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  var mathmlCommonWrapper = require("mathml-common-wrapper") /*id: 448242*/;
  var mathjaxSvgOutputJax = require("mathjax-svg-output-jax") /*id: 264785*/;
  var s = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.element = null;
      e.dx = 0;
      return e;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      this.addChildren(this.standardSVGnode(t));
    };
    e.prototype.addChildren = function (t) {
      var e;
      var Q;
      var r = 0;
      try {
        var T = n(this.childNodes);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          i.toSVG(t);
          var a = i.getOuterBBox();
          if (i.element) {
            i.place(r + a.L * a.rscale, 0);
          }
          r += (a.L + a.w + a.R) * a.rscale;
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (Q = T.return)) {
            Q.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.prototype.standardSVGnode = function (t) {
      var e = this.createSVGnode(t);
      this.handleStyles();
      this.handleScale();
      this.handleBorder();
      this.handleColor();
      this.handleAttributes();
      return e;
    };
    e.prototype.createSVGnode = function (t) {
      this.element = this.svg("g", {
        "data-mml-node": this.node.kind
      });
      var e = this.node.attributes.get("href");
      if (e) {
        t = this.adaptor.append(t, this.svg("a", {
          href: e
        }));
        var Q = this.getOuterBBox();
        var r = Q.h;
        var T = Q.d;
        var n = Q.w;
        this.adaptor.append(this.element, this.svg("rect", {
          "data-hitbox": true,
          fill: "none",
          stroke: "none",
          "pointer-events": "all",
          width: this.fixed(n),
          height: this.fixed(r + T),
          y: this.fixed(-T)
        }));
      }
      this.adaptor.append(t, this.element);
      return this.element;
    };
    e.prototype.handleStyles = function () {
      var t = this;
      if (this.styles) {
        var e = this.styles.cssText;
        if (e) {
          this.adaptor.setAttribute(this.element, "style", e);
        }
        cssBoundingBoxClass.BBox.StyleAdjust.forEach(function (e) {
          var Q = o(e, 3);
          var r = Q[0];
          if (Q[2] === 0) {
            var T = t.styles.get(r);
            if (T) {
              t.dx += t.length2em(T, 1, t.bbox.rscale);
            }
          }
        });
      }
    };
    e.prototype.handleScale = function () {
      if (this.bbox.rscale !== 1) {
        var t = "scale(" + this.fixed(this.bbox.rscale / 1000, 3) + ")";
        this.adaptor.setAttribute(this.element, "transform", t);
      }
    };
    e.prototype.handleColor = function () {
      var t;
      var e = this.adaptor;
      var Q = this.node.attributes;
      var r = Q.getExplicit("mathcolor");
      var T = Q.getExplicit("color");
      var n = Q.getExplicit("mathbackground");
      var o = Q.getExplicit("background");
      var i = ((t = this.styles) === null || t === undefined ? undefined : t.get("background-color")) || "";
      if (r || T) {
        e.setAttribute(this.element, "fill", r || T);
        e.setAttribute(this.element, "stroke", r || T);
      }
      if (n || o || i) {
        var a = this.getOuterBBox();
        var u = a.h;
        var s = a.d;
        var l = a.w;
        var c = this.svg("rect", {
          fill: n || o || i,
          x: this.fixed(-this.dx),
          y: this.fixed(-s),
          width: this.fixed(l),
          height: this.fixed(u + s),
          "data-bgcolor": true
        });
        var p = e.firstChild(this.element);
        if (p) {
          e.insert(c, p);
        } else {
          e.append(this.element, c);
        }
      }
    };
    e.prototype.handleBorder = function () {
      if (this.styles) {
        var t;
        var Q;
        var r;
        var T;
        var i = [,,,,].fill(0);
        var a = [,,,,];
        var u = [,,,,];
        try {
          var s = n([["Top", 0], ["Right", 1], ["Bottom", 2], ["Left", 3]]);
          var l = s.next();
          for (; !l.done; l = s.next()) {
            var c = o(l.value, 2);
            var p = c[0];
            var h = c[1];
            var f = "border" + p;
            var d = this.styles.get(f + "Width");
            if (d) {
              i[h] = Math.max(0, this.length2em(d, 1, this.bbox.rscale));
              a[h] = this.styles.get(f + "Style") || "solid";
              u[h] = this.styles.get(f + "Color") || "currentColor";
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (l && !l.done && (Q = s.return)) {
              Q.call(s);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        var D = e.borderFuzz;
        var L = this.getOuterBBox();
        var m = o([L.h + D, L.d + D, L.w + D], 3);
        var y = m[0];
        var H = m[1];
        var v = m[2];
        var g = [v, y];
        var b = [-D, y];
        var E = [v, -H];
        var C = [-D, -H];
        var V = [v - i[1], y - i[0]];
        var M = [-D + i[3], y - i[0]];
        var F = [v - i[1], -H + i[2]];
        var x = [-D + i[3], -H + i[2]];
        var O = [[b, g, V, M], [E, g, V, F], [C, E, F, x], [C, b, M, x]];
        var A = this.adaptor.firstChild(this.element);
        try {
          var _ = n([0, 1, 2, 3]);
          var S = _.next();
          for (; !S.done; S = _.next()) {
            var h = S.value;
            if (i[h]) {
              var w = O[h];
              if (a[h] === "dashed" || a[h] === "dotted") {
                this.addBorderBroken(w, u[h], a[h], i[h], h);
              } else {
                this.addBorderSolid(w, u[h], A);
              }
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (S && !S.done && (T = _.return)) {
              T.call(_);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
    };
    e.prototype.addBorderSolid = function (t, e, Q) {
      var r = this;
      var T = this.svg("polygon", {
        points: t.map(function (t) {
          var e = o(t, 2);
          var Q = e[0];
          var T = e[1];
          return `${r.fixed(Q - r.dx)},${r.fixed(T)}`;
        }).join(" "),
        stroke: "none",
        fill: e
      });
      if (Q) {
        this.adaptor.insert(T, Q);
      } else {
        this.adaptor.append(this.element, T);
      }
    };
    e.prototype.addBorderBroken = function (t, e, Q, r, T) {
      var n = Q === "dotted";
      var i = r / 2;
      var a = o([[i, -i, -i, -i], [-i, i, -i, -i], [i, i, -i, i], [i, i, i, -i]][T], 4);
      var u = a[0];
      var s = a[1];
      var l = a[2];
      var c = a[3];
      var p = o(t, 2);
      var h = p[0];
      var f = p[1];
      var d = h[0] + u - this.dx;
      var D = h[1] + s;
      var L = f[0] + l - this.dx;
      var m = f[1] + c;
      var y = Math.abs(T % 2 ? m - D : L - d);
      var H = n ? Math.ceil(y / (r * 2)) : Math.ceil((y - r) / (r * 4));
      var v = y / (H * 4 + 1);
      var g = this.svg("line", {
        x1: this.fixed(d),
        y1: this.fixed(D),
        x2: this.fixed(L),
        y2: this.fixed(m),
        "stroke-width": this.fixed(r),
        stroke: e,
        "stroke-linecap": n ? "round" : "square",
        "stroke-dasharray": n ? [1, this.fixed(y / H - 0.002)].join(" ") : [this.fixed(v), this.fixed(v * 3)].join(" ")
      });
      var b = this.adaptor;
      var E = b.firstChild(this.element);
      if (E) {
        b.insert(g, E);
      } else {
        b.append(this.element, g);
      }
    };
    e.prototype.handleAttributes = function () {
      var t;
      var Q;
      var r;
      var T;
      var o = this.node.attributes;
      var i = o.getAllDefaults();
      var a = e.skipAttributes;
      try {
        var u = n(o.getExplicitNames());
        var s = u.next();
        for (; !s.done; s = u.next()) {
          var l = s.value;
          if (a[l] === false || !(l in i) && !a[l] && !this.adaptor.hasAttribute(this.element, l)) {
            this.adaptor.setAttribute(this.element, l, o.getExplicit(l));
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (Q = u.return)) {
            Q.call(u);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      if (o.get("class")) {
        var c = o.get("class").trim().split(/ +/);
        try {
          var p = n(c);
          var h = p.next();
          for (; !h.done; h = p.next()) {
            var f = h.value;
            this.adaptor.addClass(this.element, f);
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (h && !h.done && (T = p.return)) {
              T.call(p);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
    };
    e.prototype.place = function (t, e, Q = null) {
      if ((t += this.dx) || e) {
        if (!Q) {
          Q = this.element;
          e = this.handleId(e);
        }
        var r = `translate(${this.fixed(t)},${this.fixed(e)})`;
        var T = this.adaptor.getAttribute(Q, "transform") || "";
        this.adaptor.setAttribute(Q, "transform", r + (T ? " " + T : ""));
      }
    };
    e.prototype.handleId = function (t) {
      if (!this.node.attributes || !this.node.attributes.get("id")) {
        return t;
      }
      var e = this.adaptor;
      var Q = this.getBBox().h;
      var r = e.childNodes(this.element);
      r.forEach(function (t) {
        return e.remove(t);
      });
      var T = this.svg("g", {
        "data-idbox": true,
        transform: `translate(0,${this.fixed(-Q)})`
      }, r);
      e.append(this.element, this.svg("text", {
        "data-id-align": true
      }, [this.text("")]));
      e.append(this.element, T);
      return t + Q;
    };
    e.prototype.firstChild = function () {
      var t = this.adaptor;
      var e = t.firstChild(this.element);
      if (e && t.kind(e) === "text" && t.getAttribute(e, "data-id-align")) {
        e = t.firstChild(t.next(e));
      }
      if (e && t.kind(e) === "rect" && t.getAttribute(e, "data-hitbox")) {
        e = t.next(e);
      }
      return e;
    };
    e.prototype.placeChar = function (t, e, Q, r, T = null) {
      if (T === null) {
        T = this.variant;
      }
      var i;
      var a;
      var u = t.toString(16).toUpperCase();
      var s = o(this.getVariantChar(T, t), 4);
      var l = s[2];
      var c = s[3];
      if ("p" in c) {
        var p = c.p ? "M" + c.p + "Z" : "";
        this.place(e, Q, this.adaptor.append(r, this.charNode(T, u, p)));
      } else if ("c" in c) {
        var h = this.adaptor.append(r, this.svg("g", {
          "data-c": u
        }));
        this.place(e, Q, h);
        e = 0;
        try {
          var f = n(this.unicodeChars(c.c, T));
          var d = f.next();
          for (; !d.done; d = f.next()) {
            var D = d.value;
            e += this.placeChar(D, e, Q, h, T);
          }
        } catch (t) {
          i = {
            error: t
          };
        } finally {
          try {
            if (d && !d.done && (a = f.return)) {
              a.call(f);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
      } else if (c.unknown) {
        var L = String.fromCodePoint(t);
        var m = this.adaptor.append(r, this.jax.unknownText(L, T));
        this.place(e, Q, m);
        return this.jax.measureTextNodeWithCache(m, L, T).w;
      }
      return l;
    };
    e.prototype.charNode = function (t, e, Q) {
      if (this.jax.options.fontCache !== "none") {
        return this.useNode(t, e, Q);
      } else {
        return this.pathNode(e, Q);
      }
    };
    e.prototype.pathNode = function (t, e) {
      return this.svg("path", {
        "data-c": t,
        d: e
      });
    };
    e.prototype.useNode = function (t, e, Q) {
      var r = this.svg("use", {
        "data-c": e
      });
      var T = "#" + this.jax.fontCache.cachePath(t, e, Q);
      this.adaptor.setAttribute(r, "href", T, mathjaxSvgOutputJax.XLINKNS);
      return r;
    };
    e.prototype.drawBBox = function () {
      var t = this.getBBox();
      var e = t.w;
      var Q = t.h;
      var r = t.d;
      var T = this.svg("g", {
        style: {
          opacity: 0.25
        }
      }, [this.svg("rect", {
        fill: "red",
        height: this.fixed(Q),
        width: this.fixed(e)
      }), this.svg("rect", {
        fill: "green",
        height: this.fixed(r),
        width: this.fixed(e),
        y: this.fixed(-r)
      })]);
      var n = this.element || this.parent.element;
      this.adaptor.append(n, T);
    };
    e.prototype.html = function (t, e = {}, Q = []) {
      return this.jax.html(t, e, Q);
    };
    e.prototype.svg = function (t, e = {}, Q = []) {
      return this.jax.svg(t, e, Q);
    };
    e.prototype.text = function (t) {
      return this.jax.text(t);
    };
    e.prototype.fixed = function (t, e = 1) {
      return this.jax.fixed(t * 1000, e);
    };
    e.kind = "unknown";
    e.borderFuzz = 0.005;
    return e;
  }(mathmlCommonWrapper.CommonWrapper);
  exports.SVGWrapper = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}