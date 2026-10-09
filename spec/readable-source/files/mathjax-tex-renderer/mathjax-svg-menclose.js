// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'l' to 'commonMencloseMixin'
// - Resolved require(267009) to 'common-menclose-mixin'
// - Resolved require(489193) to 'common-arrow-border-renderer'
// - Renamed variable 'p' to 'mathmlMencloseNode'
// - Resolved require(790977) to 'mathml-menclose-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 738853
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
  var n = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var o = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var i = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          n(e, t, Q);
        }
      }
    }
    o(e, t);
    return e;
  };
  var a = this && this.__values || function (t) {
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
  var u = this && this.__read || function (t, e) {
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
  exports.SVGmenclose = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMencloseMixin = require("common-menclose-mixin") /*id: 267009*/;
  var c = i(require("common-arrow-border-renderer") /*id: 489193*/);
  var mathmlMencloseNode = require("mathml-menclose-node") /*id: 790977*/;
  var h = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e;
      var Q;
      var r = this.standardSVGnode(t);
      var T = this.getBBoxExtenders()[3];
      var n = {};
      if (T > 0) {
        n.transform = "translate(" + this.fixed(T) + ", 0)";
      }
      var o = this.adaptor.append(r, this.svg("g", n));
      if (this.renderChild) {
        this.renderChild(this, o);
      } else {
        this.childNodes[0].toSVG(o);
      }
      try {
        var i = a(Object.keys(this.notations));
        var u = i.next();
        for (; !u.done; u = i.next()) {
          var s = u.value;
          var l = this.notations[s];
          if (!l.renderChild) {
            l.renderer(this, r);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (Q = i.return)) {
            Q.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.prototype.arrow = function (t, e, Q, r = "", T = 0) {
      var n = this.getBBox();
      var o = n.w;
      var i = n.h;
      var a = n.d;
      var s = (t - o) / 2;
      var l = (i - a) / 2;
      var c = this.thickness;
      var p = c / 2;
      var h = u([c * this.arrowhead.x, c * this.arrowhead.y, c * this.arrowhead.dx], 3);
      var f = h[0];
      var d = h[1];
      var D = h[2];
      var L = Q ? this.fill("M", o + s, l, "l", -(f + D), d, "l", D, p - d, "L", f - s, l + p, "l", D, d - p, "l", -(f + D), -d, "l", f + D, -d, "l", -D, d - p, "L", o + s - f, l - p, "l", -D, p - d, "Z") : this.fill("M", o + s, l, "l", -(f + D), d, "l", D, p - d, "L", -s, l + p, "l", 0, -c, "L", o + s - f, l - p, "l", -D, p - d, "Z");
      var m = [];
      if (T) {
        m.push(r === "X" ? `translate(${this.fixed(-T)} 0)` : `translate(0 ${this.fixed(T)})`);
      }
      if (e) {
        var y = this.jax.fixed(-(e * 180) / Math.PI);
        m.push(`rotate(${y} ${this.fixed(o / 2)} ${this.fixed(l)})`);
      }
      if (m.length) {
        this.adaptor.setAttribute(L, "transform", m.join(" "));
      }
      return L;
    };
    e.prototype.line = function (t) {
      var e = u(t, 4);
      var Q = e[0];
      var r = e[1];
      var T = e[2];
      var n = e[3];
      return this.svg("line", {
        x1: this.fixed(Q),
        y1: this.fixed(r),
        x2: this.fixed(T),
        y2: this.fixed(n),
        "stroke-width": this.fixed(this.thickness)
      });
    };
    e.prototype.box = function (t, e, Q, r = 0) {
      var T = this.thickness;
      var n = {
        x: this.fixed(T / 2),
        y: this.fixed(T / 2 - Q),
        width: this.fixed(t - T),
        height: this.fixed(e + Q - T),
        fill: "none",
        "stroke-width": this.fixed(T)
      };
      if (r) {
        n.rx = this.fixed(r);
      }
      return this.svg("rect", n);
    };
    e.prototype.ellipse = function (t, e, Q) {
      var r = this.thickness;
      return this.svg("ellipse", {
        rx: this.fixed((t - r) / 2),
        ry: this.fixed((e + Q - r) / 2),
        cx: this.fixed(t / 2),
        cy: this.fixed((e - Q) / 2),
        fill: "none",
        "stroke-width": this.fixed(r)
      });
    };
    e.prototype.path = function (t) {
      var e = this;
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      return this.svg("path", {
        d: Q.map(function (t) {
          if (typeof t == "string") {
            return t;
          } else {
            return e.fixed(t);
          }
        }).join(" "),
        style: {
          "stroke-width": this.fixed(this.thickness)
        },
        "stroke-linecap": "round",
        "stroke-linejoin": t,
        fill: "none"
      });
    };
    e.prototype.fill = function () {
      var t = this;
      var e = [];
      var Q = 0;
      for (; Q < arguments.length; Q++) {
        e[Q] = arguments[Q];
      }
      return this.svg("path", {
        d: e.map(function (e) {
          if (typeof e == "string") {
            return e;
          } else {
            return t.fixed(e);
          }
        }).join(" ")
      });
    };
    e.kind = mathmlMencloseNode.MmlMenclose.prototype.kind;
    e.notations = new Map([c.Border("top"), c.Border("right"), c.Border("bottom"), c.Border("left"), c.Border2("actuarial", "top", "right"), c.Border2("madruwb", "bottom", "right"), c.DiagonalStrike("up"), c.DiagonalStrike("down"), ["horizontalstrike", {
      renderer: c.RenderLine("horizontal", "Y"),
      bbox: function (t) {
        return [0, t.padding, 0, t.padding];
      }
    }], ["verticalstrike", {
      renderer: c.RenderLine("vertical", "X"),
      bbox: function (t) {
        return [t.padding, 0, t.padding, 0];
      }
    }], ["box", {
      renderer: function (t, e) {
        var Q = t.getBBox();
        var r = Q.w;
        var T = Q.h;
        var n = Q.d;
        t.adaptor.append(t.element, t.box(r, T, n));
      },
      bbox: c.fullBBox,
      border: c.fullBorder,
      remove: "left right top bottom"
    }], ["roundedbox", {
      renderer: function (t, e) {
        var Q = t.getBBox();
        var r = Q.w;
        var T = Q.h;
        var n = Q.d;
        var o = t.thickness + t.padding;
        t.adaptor.append(t.element, t.box(r, T, n, o));
      },
      bbox: c.fullBBox
    }], ["circle", {
      renderer: function (t, e) {
        var Q = t.getBBox();
        var r = Q.w;
        var T = Q.h;
        var n = Q.d;
        t.adaptor.append(t.element, t.ellipse(r, T, n));
      },
      bbox: c.fullBBox
    }], ["phasorangle", {
      renderer: function (t, e) {
        var Q = t.getBBox();
        var r = Q.w;
        var T = Q.h;
        var n = Q.d;
        var o = t.getArgMod(t.padding * 1.75, T + n)[0];
        var i = t.thickness / 2;
        var a = T + n;
        var u = Math.cos(o);
        t.adaptor.append(t.element, t.path("mitre", "M", r, i - n, "L", i + u * i, i - n, "L", u * a + i, a - n - i));
      },
      bbox: function (t) {
        var e = t.padding / 2;
        var Q = t.thickness;
        return [e * 2, e, e + Q, e * 3 + Q];
      },
      border: function (t) {
        return [0, 0, t.thickness, 0];
      },
      remove: "bottom"
    }], c.Arrow("up"), c.Arrow("down"), c.Arrow("left"), c.Arrow("right"), c.Arrow("updown"), c.Arrow("leftright"), c.DiagonalArrow("updiagonal"), c.DiagonalArrow("northeast"), c.DiagonalArrow("southeast"), c.DiagonalArrow("northwest"), c.DiagonalArrow("southwest"), c.DiagonalArrow("northeastsouthwest"), c.DiagonalArrow("northwestsoutheast"), ["longdiv", {
      renderer: function (t, e) {
        var Q = t.getBBox();
        var r = Q.w;
        var T = Q.h;
        var n = Q.d;
        var o = t.thickness / 2;
        var i = t.padding;
        t.adaptor.append(t.element, t.path("round", "M", o, o - n, "a", i - o / 2, (T + n) / 2 - o * 4, 0, "0,1", 0, T + n - o * 2, "L", r - o, T - o));
      },
      bbox: function (t) {
        var e = t.padding;
        var Q = t.thickness;
        return [e + Q, e, e, e * 2 + Q / 2];
      }
    }], ["radical", {
      renderer: function (t, e) {
        t.msqrt.toSVG(e);
        var Q = t.sqrtTRBL()[3];
        t.place(-Q, 0, e);
      },
      init: function (t) {
        t.msqrt = t.createMsqrt(t.childNodes[0]);
      },
      bbox: function (t) {
        return t.sqrtTRBL();
      },
      renderChild: true
    }]]);
    return e;
  }(commonMencloseMixin.CommonMencloseMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmenclose = h;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}