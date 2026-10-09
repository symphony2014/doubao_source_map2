// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'abstractOutputJax'
// - Resolved require(704834) to 'abstract-output-jax'
// - Renamed variable 'u' to 'abstractMathItemCore'
// - Resolved require(254335) to 'abstract-math-item-core'
// - Renamed variable 's' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 'l' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// - Renamed variable 'c' to 'cssStyleParser'
// - Resolved require(389570) to 'css-style-parser'
// - Renamed variable 'p' to 'cssStylesManager'
// - Resolved require(443453) to 'css-styles-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 5040
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
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
  var i = this && this.__values || function (t) {
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
  exports.CommonOutputJax = undefined;
  var abstractOutputJax = require("abstract-output-jax") /*id: 704834*/;
  var abstractMathItemCore = require("abstract-math-item-core") /*id: 254335*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  var cssStyleParser = require("css-style-parser") /*id: 389570*/;
  var cssStylesManager = require("css-styles-manager") /*id: 443453*/;
  var h = function (t) {
    function e(e = null, Q = null, r = null) {
      var T = this;
      var n = o(optionsMergeUtils.separateOptions(e, r.OPTIONS), 2);
      var i = n[0];
      var a = n[1];
      (T = t.call(this, i) || this).factory = T.options.wrapperFactory || new Q();
      T.factory.jax = T;
      T.cssStyles = T.options.cssStyles || new cssStylesManager.CssStyles();
      T.font = T.options.font || new r(a);
      T.unknownCache = new Map();
      return T;
    }
    T(e, t);
    e.prototype.typeset = function (t, e) {
      this.setDocument(e);
      var Q = this.createNode();
      this.toDOM(t, Q, e);
      return Q;
    };
    e.prototype.createNode = function () {
      var t = this.constructor.NAME;
      return this.html("mjx-container", {
        class: "MathJax",
        jax: t
      });
    };
    e.prototype.setScale = function (t) {
      var e = this.math.metrics.scale * this.options.scale;
      if (e !== 1) {
        this.adaptor.setStyle(t, "fontSize", cssUnitFormatters.percent(e));
      }
    };
    e.prototype.toDOM = function (t, e, Q = null) {
      this.setDocument(Q);
      this.math = t;
      this.pxPerEm = t.metrics.ex / this.font.params.x_height;
      t.root.setTeXclass(null);
      this.setScale(e);
      this.nodeMap = new Map();
      this.container = e;
      this.processMath(t.root, e);
      this.nodeMap = null;
      this.executeFilters(this.postFilters, t, Q, e);
    };
    e.prototype.getBBox = function (t, e) {
      this.setDocument(e);
      this.math = t;
      t.root.setTeXclass(null);
      this.nodeMap = new Map();
      var Q = this.factory.wrap(t.root).getOuterBBox();
      this.nodeMap = null;
      return Q;
    };
    e.prototype.getMetrics = function (t) {
      this.setDocument(t);
      var e;
      var Q;
      var r = this.adaptor;
      var T = this.getMetricMaps(t);
      try {
        var n = i(t.math);
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var a = o.value;
          var s = r.parent(a.start.node);
          if (a.state() < abstractMathItemCore.STATE.METRICS && s) {
            var l = T[+!!a.display].get(s);
            var c = l.em;
            var p = l.ex;
            var h = l.containerWidth;
            var f = l.lineWidth;
            var d = l.scale;
            var D = l.family;
            a.setMetrics(c, p, h, f, d);
            if (this.options.mtextInheritFont) {
              a.outputData.mtextFamily = D;
            }
            if (this.options.merrorInheritFont) {
              a.outputData.merrorFamily = D;
            }
            a.state(abstractMathItemCore.STATE.METRICS);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (Q = n.return)) {
            Q.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.prototype.getMetricsFor = function (t, e) {
      var Q = this.options.mtextInheritFont || this.options.merrorInheritFont;
      var r = this.getTestElement(t, e);
      var T = this.measureMetrics(r, Q);
      this.adaptor.remove(r);
      return T;
    };
    e.prototype.getMetricMaps = function (t) {
      var e;
      var Q;
      var r;
      var T;
      var n;
      var o;
      var a;
      var s;
      var l;
      var c;
      var p = this.adaptor;
      var h = [new Map(), new Map()];
      try {
        var f = i(t.math);
        var d = f.next();
        for (; !d.done; d = f.next()) {
          var D = d.value;
          var L = p.parent(D.start.node);
          if (L && D.state() < abstractMathItemCore.STATE.METRICS) {
            var m = h[+!!D.display];
            if (!m.has(L)) {
              m.set(L, this.getTestElement(L, D.display));
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (d && !d.done && (Q = f.return)) {
            Q.call(f);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      var y = this.options.mtextInheritFont || this.options.merrorInheritFont;
      var H = [new Map(), new Map()];
      try {
        var v = i(H.keys());
        var g = v.next();
        for (; !g.done; g = v.next()) {
          var b = g.value;
          try {
            n = undefined;
            var E = i(h[b].keys());
            var C = E.next();
            for (; !C.done; C = E.next()) {
              var L = C.value;
              H[b].set(L, this.measureMetrics(h[b].get(L), y));
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              if (C && !C.done && (o = E.return)) {
                o.call(E);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (g && !g.done && (T = v.return)) {
            T.call(v);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      try {
        var V = i(H.keys());
        var M = V.next();
        for (; !M.done; M = V.next()) {
          var b = M.value;
          try {
            l = undefined;
            var F = i(h[b].values());
            var x = F.next();
            for (; !x.done; x = F.next()) {
              var L = x.value;
              p.remove(L);
            }
          } catch (t) {
            l = {
              error: t
            };
          } finally {
            try {
              if (x && !x.done && (c = F.return)) {
                c.call(F);
              }
            } finally {
              if (l) {
                throw l.error;
              }
            }
          }
        }
      } catch (t) {
        a = {
          error: t
        };
      } finally {
        try {
          if (M && !M.done && (s = V.return)) {
            s.call(V);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
      return H;
    };
    e.prototype.getTestElement = function (t, e) {
      var Q = this.adaptor;
      if (!this.testInline) {
        this.testInline = this.html("mjx-test", {
          style: {
            display: "inline-block",
            width: "100%",
            "font-style": "normal",
            "font-weight": "normal",
            "font-size": "100%",
            "font-size-adjust": "none",
            "text-indent": 0,
            "text-transform": "none",
            "letter-spacing": "normal",
            "word-spacing": "normal",
            overflow: "hidden",
            height: "1px",
            "margin-right": "-1px"
          }
        }, [this.html("mjx-left-box", {
          style: {
            display: "inline-block",
            width: 0,
            float: "left"
          }
        }), this.html("mjx-ex-box", {
          style: {
            position: "absolute",
            overflow: "hidden",
            width: "1px",
            height: "60ex"
          }
        }), this.html("mjx-right-box", {
          style: {
            display: "inline-block",
            width: 0,
            float: "right"
          }
        })]);
        this.testDisplay = Q.clone(this.testInline);
        Q.setStyle(this.testDisplay, "display", "table");
        Q.setStyle(this.testDisplay, "margin-right", "");
        Q.setStyle(Q.firstChild(this.testDisplay), "display", "none");
        var r = Q.lastChild(this.testDisplay);
        Q.setStyle(r, "display", "table-cell");
        Q.setStyle(r, "width", "10000em");
        Q.setStyle(r, "float", "");
      }
      return Q.append(t, Q.clone(e ? this.testDisplay : this.testInline));
    };
    e.prototype.measureMetrics = function (t, e) {
      var Q = this.adaptor;
      var r = e ? Q.fontFamily(t) : "";
      var T = Q.fontSize(t);
      var n = o(Q.nodeSize(Q.childNode(t, 1)), 2);
      var i = n[0];
      var a = n[1];
      var u = i ? a / 60 : T * this.options.exFactor;
      var s = i ? Q.getStyle(t, "display") === "table" ? Q.nodeSize(Q.lastChild(t))[0] - 1 : Q.nodeBBox(Q.lastChild(t)).left - Q.nodeBBox(Q.firstChild(t)).left - 2 : 1000000;
      var l = Math.max(this.options.minScale, this.options.matchFontHeight ? u / this.font.params.x_height / T : 1);
      return {
        em: T,
        ex: u,
        containerWidth: s,
        lineWidth: 1000000,
        scale: l,
        family: r
      };
    };
    e.prototype.styleSheet = function (t) {
      this.setDocument(t);
      this.cssStyles.clear();
      this.cssStyles.addStyles(this.constructor.commonStyles);
      if ("getStyles" in t) {
        try {
          var e;
          var Q;
          var r = i(t.getStyles());
          var T = r.next();
          for (; !T.done; T = r.next()) {
            var n = T.value;
            this.cssStyles.addStyles(n);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (T && !T.done && (Q = r.return)) {
              Q.call(r);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
      this.addWrapperStyles(this.cssStyles);
      this.addFontStyles(this.cssStyles);
      return this.html("style", {
        id: "MJX-styles"
      }, [this.text("\n" + this.cssStyles.cssText + "\n")]);
    };
    e.prototype.addFontStyles = function (t) {
      t.addStyles(this.font.styles);
    };
    e.prototype.addWrapperStyles = function (t) {
      var e;
      var Q;
      try {
        var r = i(this.factory.getKinds());
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value;
          this.addClassStyles(this.factory.getNodeClass(n), t);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.prototype.addClassStyles = function (t, e) {
      e.addStyles(t.styles);
    };
    e.prototype.setDocument = function (t) {
      if (t) {
        this.document = t;
        this.adaptor.document = t.document;
      }
    };
    e.prototype.html = function (t, e = {}, Q = [], r) {
      return this.adaptor.node(t, e, Q, r);
    };
    e.prototype.text = function (t) {
      return this.adaptor.text(t);
    };
    e.prototype.fixed = function (t, e = 3) {
      if (Math.abs(t) < 0.0006) {
        return "0";
      } else {
        return t.toFixed(e).replace(/\.?0+$/, "");
      }
    };
    e.prototype.measureText = function (t, e, Q = ["", false, false]) {
      var r = this.unknownText(t, e);
      if (e === "-explicitFont") {
        var T = this.cssFontStyles(Q);
        this.adaptor.setAttributes(r, {
          style: T
        });
      }
      return this.measureTextNodeWithCache(r, t, e, Q);
    };
    e.prototype.measureTextNodeWithCache = function (t, e, Q, r = ["", false, false]) {
      if (Q === "-explicitFont") {
        Q = [r[0], r[1] ? "T" : "F", r[2] ? "T" : "F", ""].join("-");
      }
      if (!this.unknownCache.has(Q)) {
        this.unknownCache.set(Q, new Map());
      }
      var T = this.unknownCache.get(Q);
      var n = T.get(e);
      if (n) {
        return n;
      }
      var o = this.measureTextNode(t);
      T.set(e, o);
      return o;
    };
    e.prototype.measureXMLnode = function (t) {
      var e = this.adaptor;
      var Q = this.html("mjx-xml-block", {
        style: {
          display: "inline-block"
        }
      }, [e.clone(t)]);
      var r = this.html("mjx-baseline", {
        style: {
          display: "inline-block",
          width: 0,
          height: 0
        }
      });
      var T = this.html("mjx-measure-xml", {
        style: {
          position: "absolute",
          display: "inline-block",
          "font-family": "initial",
          "line-height": "normal"
        }
      }, [r, Q]);
      e.append(e.parent(this.math.start.node), this.container);
      e.append(this.container, T);
      var n = this.math.metrics.em * this.math.metrics.scale;
      var o = e.nodeBBox(Q);
      var i = o.left;
      var a = o.right;
      var u = o.bottom;
      var s = o.top;
      var l = (e.nodeBBox(r).top - s) / n;
      e.remove(this.container);
      e.remove(T);
      return {
        w: (a - i) / n,
        h: l,
        d: (u - s) / n - l
      };
    };
    e.prototype.cssFontStyles = function (t, e = {}) {
      var Q = o(t, 3);
      var r = Q[0];
      var T = Q[1];
      var n = Q[2];
      e["font-family"] = this.font.getFamily(r);
      if (T) {
        e["font-style"] = "italic";
      }
      if (n) {
        e["font-weight"] = "bold";
      }
      return e;
    };
    e.prototype.getFontData = function (t) {
      t ||= new cssStyleParser.Styles();
      return [this.font.getFamily(t.get("font-family")), t.get("font-style") === "italic", t.get("font-weight") === "bold"];
    };
    e.NAME = "Common";
    e.OPTIONS = n(n({}, abstractOutputJax.AbstractOutputJax.OPTIONS), {
      scale: 1,
      minScale: 0.5,
      mtextInheritFont: false,
      merrorInheritFont: false,
      mtextFont: "",
      merrorFont: "serif",
      mathmlSpacing: false,
      skipAttributes: {},
      exFactor: 0.5,
      displayAlign: "center",
      displayIndent: "0",
      wrapperFactory: null,
      font: null,
      cssStyles: null
    });
    e.commonStyles = {};
    return e;
  }(abstractOutputJax.AbstractOutputJax);
  exports.CommonOutputJax = h;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}