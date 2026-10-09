// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'commonOutputJax'
// - Resolved require(5040) to 'common-output-jax'
// - Renamed variable 'a' to 'svgWrapperFactory'
// - Resolved require(320040) to 'svg-wrapper-factory'
// - Renamed variable 'u' to 'texSvgFontClass'
// - Resolved require(871440) to 'tex-svg-font-class'
// - Renamed variable 's' to 'svgFontCache'
// - Resolved require(497142) to 'svg-font-cache'
// - Renamed variable 'l' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// - Renamed variable 'c' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 264785
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
  exports.SVG = exports.XLINKNS = exports.SVGNS = undefined;
  var commonOutputJax = require("common-output-jax") /*id: 5040*/;
  var svgWrapperFactory = require("svg-wrapper-factory") /*id: 320040*/;
  var texSvgFontClass = require("tex-svg-font-class") /*id: 871440*/;
  var svgFontCache = require("svg-font-cache") /*id: 497142*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  exports.SVGNS = "http://www.w3.org/2000/svg";
  exports.XLINKNS = "http://www.w3.org/1999/xlink";
  var p = function (t) {
    function Q(e = null) {
      var Q = t.call(this, e, svgWrapperFactory.SVGWrapperFactory, texSvgFontClass.TeXFont) || this;
      Q.minwidth = 0;
      Q.shift = 0;
      Q.container = null;
      Q.svgStyles = null;
      Q.fontCache = new svgFontCache.FontCache(Q);
      return Q;
    }
    T(Q, t);
    Q.prototype.initialize = function () {
      if (this.options.fontCache === "global") {
        this.fontCache.clearCache();
      }
    };
    Q.prototype.clearFontCache = function () {
      this.fontCache.clearCache();
    };
    Q.prototype.reset = function () {
      this.clearFontCache();
    };
    Q.prototype.setScale = function (t) {
      if (this.options.scale !== 1) {
        this.adaptor.setStyle(t, "fontSize", cssUnitFormatters.percent(this.options.scale));
      }
    };
    Q.prototype.escaped = function (t, e) {
      this.setDocument(e);
      return this.html("span", {}, [this.text(t.math)]);
    };
    Q.prototype.styleSheet = function (e) {
      if (this.svgStyles) {
        return this.svgStyles;
      }
      var r = this.svgStyles = t.prototype.styleSheet.call(this, e);
      this.adaptor.setAttribute(r, "id", Q.STYLESHEETID);
      return r;
    };
    Q.prototype.pageElements = function (t) {
      if (this.options.fontCache !== "global" || this.findCache(t)) {
        return null;
      } else {
        return this.svg("svg", {
          id: Q.FONTCACHEID,
          style: {
            display: "none"
          }
        }, [this.fontCache.getCache()]);
      }
    };
    Q.prototype.findCache = function (t) {
      var e = this.adaptor;
      var r = e.tags(e.body(t.document), "svg");
      var T = r.length - 1;
      for (; T >= 0; T--) {
        if (this.adaptor.getAttribute(r[T], "id") === Q.FONTCACHEID) {
          return true;
        }
      }
      return false;
    };
    Q.prototype.processMath = function (t, e) {
      var Q = this.container;
      this.container = e;
      var r = this.factory.wrap(t);
      var T = o(this.createRoot(r), 2);
      var n = T[0];
      var i = T[1];
      this.typesetSVG(r, n, i);
      this.container = Q;
    };
    Q.prototype.createRoot = function (t) {
      var Q = t.getOuterBBox();
      var r = Q.w;
      var T = Q.h;
      var n = Q.d;
      var o = Q.pwidth;
      var i = t.metrics.em / 1000;
      var a = Math.max(r, i);
      var u = Math.max(T + n, i);
      var s = this.svg("g", {
        stroke: "currentColor",
        fill: "currentColor",
        "stroke-width": 0,
        transform: "scale(1,-1)"
      });
      var l = this.adaptor;
      var c = l.append(this.container, this.svg("svg", {
        xmlns: exports.SVGNS,
        width: this.ex(a),
        height: this.ex(u),
        role: "img",
        focusable: false,
        style: {
          "vertical-align": this.ex(-n)
        },
        viewBox: [0, this.fixed(-(T * 1000), 1), this.fixed(a * 1000, 1), this.fixed(u * 1000, 1)].join(" ")
      }, [s]));
      if (a === 0.001) {
        l.setAttribute(c, "preserveAspectRatio", "xMidYMid slice");
        if (r < 0) {
          l.setStyle(this.container, "margin-right", this.ex(r));
        }
      }
      if (o) {
        l.setStyle(c, "min-width", this.ex(a));
        l.setAttribute(c, "width", o);
        l.removeAttribute(c, "viewBox");
        var p = this.fixed(t.metrics.ex / (this.font.params.x_height * 1000), 6);
        l.setAttribute(s, "transform", `scale(${p},-${p}) translate(0, ${this.fixed(-(T * 1000), 1)})`);
      }
      if (this.options.fontCache !== "none") {
        l.setAttribute(c, "xmlns:xlink", exports.XLINKNS);
      }
      return [c, s];
    };
    Q.prototype.typesetSVG = function (t, e, Q) {
      var r = this.adaptor;
      this.minwidth = this.shift = 0;
      if (this.options.fontCache === "local") {
        this.fontCache.clearCache();
        this.fontCache.useLocalID(this.options.localID);
        r.insert(this.fontCache.getCache(), Q);
      }
      t.toSVG(Q);
      this.fontCache.clearLocalID();
      if (this.minwidth) {
        r.setStyle(e, "minWidth", this.ex(this.minwidth));
        r.setStyle(this.container, "minWidth", this.ex(this.minwidth));
      } else if (this.shift) {
        var T = r.getAttribute(this.container, "justify") || "center";
        this.setIndent(e, T, this.shift);
      }
    };
    Q.prototype.setIndent = function (t, e, Q) {
      if (e === "center" || e === "left") {
        this.adaptor.setStyle(t, "margin-left", this.ex(Q));
      }
      if (e === "center" || e === "right") {
        this.adaptor.setStyle(t, "margin-right", this.ex(-Q));
      }
    };
    Q.prototype.ex = function (t) {
      if (Math.abs(t /= this.font.params.x_height) < 0.001) {
        return "0";
      } else {
        return t.toFixed(3).replace(/\.?0+$/, "") + "ex";
      }
    };
    Q.prototype.svg = function (t, Q = {}, r = []) {
      return this.html(t, Q, r, exports.SVGNS);
    };
    Q.prototype.unknownText = function (t, e) {
      var Q = this.math.metrics;
      var r = this.font.params.x_height / Q.ex * Q.em * 1000;
      var T = this.svg("text", {
        "data-variant": e,
        transform: "scale(1,-1)",
        "font-size": this.fixed(r, 1) + "px"
      }, [this.text(t)]);
      var n = this.adaptor;
      if (e !== "-explicitFont") {
        var i = stringUtils_1.unicodeChars(t);
        if (i.length !== 1 || i[0] < 119808 || i[0] > 120831) {
          var a = o(this.font.getCssFont(e), 3);
          var u = a[0];
          var s = a[1];
          var c = a[2];
          n.setAttribute(T, "font-family", u);
          if (s) {
            n.setAttribute(T, "font-style", "italic");
          }
          if (c) {
            n.setAttribute(T, "font-weight", "bold");
          }
        }
      }
      return T;
    };
    Q.prototype.measureTextNode = function (t) {
      var e = this.adaptor;
      t = e.clone(t);
      e.removeAttribute(t, "transform");
      var Q = this.fixed(this.font.params.x_height * 1000, 1);
      var r = this.svg("svg", {
        position: "absolute",
        visibility: "hidden",
        width: "1ex",
        height: "1ex",
        viewBox: [0, 0, Q, Q].join(" ")
      }, [t]);
      e.append(e.body(e.document), r);
      var T = e.nodeSize(t, 1000, true)[0];
      e.remove(r);
      return {
        w: T,
        h: 0.75,
        d: 0.2
      };
    };
    Q.NAME = "SVG";
    Q.OPTIONS = n(n({}, commonOutputJax.CommonOutputJax.OPTIONS), {
      internalSpeechTitles: true,
      titleID: 0,
      fontCache: "local",
      localID: null
    });
    Q.commonStyles = {
      "mjx-container[jax=\"SVG\"]": {
        direction: "ltr"
      },
      "mjx-container[jax=\"SVG\"] > svg": {
        overflow: "visible",
        "min-height": "1px",
        "min-width": "1px"
      },
      "mjx-container[jax=\"SVG\"] > svg a": {
        fill: "blue",
        stroke: "blue"
      }
    };
    Q.FONTCACHEID = "MJX-SVG-global-cache";
    Q.STYLESHEETID = "MJX-SVG-styles";
    return Q;
  }(commonOutputJax.CommonOutputJax);
  exports.SVG = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}