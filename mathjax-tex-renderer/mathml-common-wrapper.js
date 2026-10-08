// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'abstractWrapperClass'
// - Resolved require(507022) to 'abstract-wrapper-class'
// - Renamed variable 'c' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'p' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// - Resolved require(839822) to 'css-unit-formatters'
// - Renamed variable 'f' to 'cssStyleParser'
// - Resolved require(389570) to 'css-style-parser'
// - Renamed variable 'd' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// - Renamed variable 'D' to 'fontDataDirectionConstants'
// - Resolved require(385303) to 'font-data-direction-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 448242
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
  var s = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.CommonWrapper = undefined;
  var abstractWrapperClass = require("abstract-wrapper-class") /*id: 507022*/;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var h = i(require("css-unit-formatters") /*id: 839822*/);
  var cssStyleParser = require("css-style-parser") /*id: 389570*/;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  var fontDataDirectionConstants = require("font-data-direction-constants") /*id: 385303*/;
  var L = 2 / 18;
  var m = function (t) {
    function e(e, Q, r = null) {
      var T = t.call(this, e, Q) || this;
      T.parent = null;
      T.removedStyles = null;
      T.styles = null;
      T.variant = "";
      T.bboxComputed = false;
      T.stretch = fontDataDirectionConstants.NOSTRETCH;
      T.font = null;
      T.parent = r;
      T.font = e.jax.font;
      T.bbox = cssBoundingBoxClass.BBox.zero();
      T.getStyles();
      T.getVariant();
      T.getScale();
      T.getSpace();
      T.childNodes = Q.childNodes.map(function (t) {
        var e = T.wrap(t);
        if (e.bbox.pwidth && (Q.notParent || Q.isKind("math"))) {
          T.bbox.pwidth = cssBoundingBoxClass.BBox.fullWidth;
        }
        return e;
      });
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "jax", {
      get: function () {
        return this.factory.jax;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "adaptor", {
      get: function () {
        return this.factory.jax.adaptor;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "metrics", {
      get: function () {
        return this.factory.jax.math.metrics;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "fixesPWidth", {
      get: function () {
        return !this.node.notParent && !this.node.isToken;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.wrap = function (t, e = null) {
      var Q = this.factory.wrap(t, e || this);
      if (e) {
        e.childNodes.push(Q);
      }
      this.jax.nodeMap.set(t, Q);
      return Q;
    };
    e.prototype.getBBox = function (t = true) {
      if (this.bboxComputed) {
        return this.bbox;
      }
      var e = t ? this.bbox : cssBoundingBoxClass.BBox.zero();
      this.computeBBox(e);
      this.bboxComputed = t;
      return e;
    };
    e.prototype.getOuterBBox = function (t = true) {
      var e;
      var Q;
      var r = this.getBBox(t);
      if (!this.styles) {
        return r;
      }
      var T = new cssBoundingBoxClass.BBox();
      Object.assign(T, r);
      try {
        var n = a(cssBoundingBoxClass.BBox.StyleAdjust);
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var i = u(o.value, 2);
          var s = i[0];
          var l = i[1];
          var c = this.styles.get(s);
          if (c) {
            T[l] += this.length2em(c, 1, T.rscale);
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
      return T;
    };
    e.prototype.computeBBox = function (t, e) {
      var Q;
      var r;
      if (e === undefined) {
        e = false;
      }
      t.empty();
      try {
        var T = a(this.childNodes);
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var o = n.value;
          t.append(o.getOuterBBox());
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (n && !n.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      t.clean();
      if (this.fixesPWidth && this.setChildPWidths(e)) {
        this.computeBBox(t, true);
      }
    };
    e.prototype.setChildPWidths = function (t, e = null, Q = true) {
      if (t) {
        return false;
      }
      if (Q) {
        this.bbox.pwidth = "";
      }
      var r;
      var T;
      var n = false;
      try {
        var o = a(this.childNodes);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var u = i.value;
          var s = u.getOuterBBox();
          if (s.pwidth && u.setChildPWidths(t, e === null ? s.w : e, Q)) {
            n = true;
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (T = o.return)) {
            T.call(o);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      return n;
    };
    e.prototype.invalidateBBox = function () {
      if (this.bboxComputed) {
        this.bboxComputed = false;
        if (this.parent) {
          this.parent.invalidateBBox();
        }
      }
    };
    e.prototype.copySkewIC = function (t) {
      var e = this.childNodes[0];
      if (e == null ? undefined : e.bbox.sk) {
        t.sk = e.bbox.sk;
      }
      if (e == null ? undefined : e.bbox.dx) {
        t.dx = e.bbox.dx;
      }
      var Q = this.childNodes[this.childNodes.length - 1];
      if (Q == null ? undefined : Q.bbox.ic) {
        t.ic = Q.bbox.ic;
        t.w += t.ic;
      }
    };
    e.prototype.getStyles = function () {
      var t = this.node.attributes.getExplicit("style");
      if (t) {
        var Q = this.styles = new cssStyleParser.Styles(t);
        var r = 0;
        var T = e.removeStyles.length;
        for (; r < T; r++) {
          var n = e.removeStyles[r];
          if (Q.get(n)) {
            this.removedStyles ||= {};
            this.removedStyles[n] = Q.get(n);
            Q.set(n, "");
          }
        }
      }
    };
    e.prototype.getVariant = function () {
      if (this.node.isToken) {
        var t = this.node.attributes;
        var Q = t.get("mathvariant");
        if (!t.getExplicit("mathvariant")) {
          var r = t.getList("fontfamily", "fontweight", "fontstyle");
          if (this.removedStyles) {
            var T = this.removedStyles;
            if (T.fontFamily) {
              r.family = T.fontFamily;
            }
            if (T.fontWeight) {
              r.weight = T.fontWeight;
            }
            if (T.fontStyle) {
              r.style = T.fontStyle;
            }
          }
          if (r.fontfamily) {
            r.family = r.fontfamily;
          }
          if (r.fontweight) {
            r.weight = r.fontweight;
          }
          if (r.fontstyle) {
            r.style = r.fontstyle;
          }
          if (r.weight && r.weight.match(/^\d+$/)) {
            r.weight = parseInt(r.weight) > 600 ? "bold" : "normal";
          }
          if (r.family) {
            Q = this.explicitVariant(r.family, r.weight, r.style);
          } else {
            if (this.node.getProperty("variantForm")) {
              Q = "-tex-variant";
            }
            Q = (e.BOLDVARIANTS[r.weight] || {})[Q] || Q;
            Q = (e.ITALICVARIANTS[r.style] || {})[Q] || Q;
          }
        }
        this.variant = Q;
      }
    };
    e.prototype.explicitVariant = function (t, e, Q) {
      var r = this.styles;
      r ||= this.styles = new cssStyleParser.Styles();
      r.set("fontFamily", t);
      if (e) {
        r.set("fontWeight", e);
      }
      if (Q) {
        r.set("fontStyle", Q);
      }
      return "-explicitFont";
    };
    e.prototype.getScale = function () {
      var t = 1;
      var e = this.parent;
      var Q = e ? e.bbox.scale : 1;
      var r = this.node.attributes;
      var T = Math.min(r.get("scriptlevel"), 2);
      var n = r.get("fontsize");
      var o = this.node.isToken || this.node.isKind("mstyle") ? r.get("mathsize") : r.getInherited("mathsize");
      if (T !== 0) {
        t = Math.pow(r.get("scriptsizemultiplier"), T);
        var i = this.length2em(r.get("scriptminsize"), 0.8, 1);
        if (t < i) {
          t = i;
        }
      }
      if (this.removedStyles && this.removedStyles.fontSize && !n) {
        n = this.removedStyles.fontSize;
      }
      if (n && !r.getExplicit("mathsize")) {
        o = n;
      }
      if (o !== "1") {
        t *= this.length2em(o, 1, 1);
      }
      this.bbox.scale = t;
      this.bbox.rscale = t / Q;
    };
    e.prototype.getSpace = function () {
      var t = this.isTopEmbellished();
      var e = this.node.hasSpacingAttributes();
      if (this.jax.options.mathmlSpacing || e) {
        if (t) {
          this.getMathMLSpacing();
        }
      } else {
        this.getTeXSpacing(t, e);
      }
    };
    e.prototype.getMathMLSpacing = function () {
      var t;
      var e;
      var Q = this.node.coreMO();
      var r = Q.coreParent();
      var T = r.parent;
      if (T && T.isKind("mrow") && T.childNodes.length !== 1) {
        var n = Q.attributes;
        var o = n.get("scriptlevel") > 0;
        this.bbox.L = n.isSet("lspace") ? Math.max(0, this.length2em(n.get("lspace"))) : (t = Q.lspace, o ? t < L ? 0 : L : t);
        this.bbox.R = n.isSet("rspace") ? Math.max(0, this.length2em(n.get("rspace"))) : (e = Q.rspace, o ? e < L ? 0 : L : e);
        var i = T.childIndex(r);
        if (i !== 0) {
          var a = T.childNodes[i - 1];
          if (a.isEmbellished) {
            var u = this.jax.nodeMap.get(a).getBBox();
            if (u.R) {
              this.bbox.L = Math.max(0, this.bbox.L - u.R);
            }
          }
        }
      }
    };
    e.prototype.getTeXSpacing = function (t, e) {
      if (!e) {
        var Q = this.node.texSpacing();
        if (Q) {
          this.bbox.L = this.length2em(Q);
        }
      }
      if (t || e) {
        var r = this.node.coreMO().attributes;
        if (r.isSet("lspace")) {
          this.bbox.L = Math.max(0, this.length2em(r.get("lspace")));
        }
        if (r.isSet("rspace")) {
          this.bbox.R = Math.max(0, this.length2em(r.get("rspace")));
        }
      }
    };
    e.prototype.isTopEmbellished = function () {
      return this.node.isEmbellished && (!this.node.parent || !this.node.parent.isEmbellished);
    };
    e.prototype.core = function () {
      return this.jax.nodeMap.get(this.node.core());
    };
    e.prototype.coreMO = function () {
      return this.jax.nodeMap.get(this.node.coreMO());
    };
    e.prototype.getText = function () {
      var t;
      var e;
      var Q = "";
      if (this.node.isToken) {
        try {
          var r = a(this.node.childNodes);
          var T = r.next();
          for (; !T.done; T = r.next()) {
            var n = T.value;
            if (n instanceof mathmlAbstractNodeClasses.TextNode) {
              Q += n.getText();
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (T && !T.done && (e = r.return)) {
              e.call(r);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
      return Q;
    };
    e.prototype.canStretch = function (t) {
      this.stretch = fontDataDirectionConstants.NOSTRETCH;
      if (this.node.isEmbellished) {
        var e = this.core();
        if (e && e.node !== this.node && e.canStretch(t)) {
          this.stretch = e.stretch;
        }
      }
      return this.stretch.dir !== 0;
    };
    e.prototype.getAlignShift = function () {
      var t;
      var e = (t = this.node.attributes).getList.apply(t, s([], u(mathmlAbstractNodeClasses.indentAttributes), false));
      var Q = e.indentalign;
      var r = e.indentshift;
      var T = e.indentalignfirst;
      var n = e.indentshiftfirst;
      if (T !== "indentalign") {
        Q = T;
      }
      if (Q === "auto") {
        Q = this.jax.options.displayAlign;
      }
      if (n !== "indentshift") {
        r = n;
      }
      if (r === "auto") {
        r = this.jax.options.displayIndent;
        if (Q === "right" && !r.match(/^\s*0[a-z]*\s*$/)) {
          r = ("-" + r.trim()).replace(/^--/, "");
        }
      }
      return [Q, this.length2em(r, this.metrics.containerWidth)];
    };
    e.prototype.getAlignX = function (t, e, Q) {
      if (Q === "right") {
        return t - (e.w + e.R) * e.rscale;
      } else if (Q === "left") {
        return e.L * e.rscale;
      } else {
        return (t - e.w * e.rscale) / 2;
      }
    };
    e.prototype.getAlignY = function (t, e, Q, r, T) {
      if (T === "top") {
        return t - Q;
      } else if (T === "bottom") {
        return r - e;
      } else if (T === "center") {
        return (t - Q - (e - r)) / 2;
      } else {
        return 0;
      }
    };
    e.prototype.getWrapWidth = function (t) {
      return this.childNodes[t].getBBox().w;
    };
    e.prototype.getChildAlign = function (t) {
      return "left";
    };
    e.prototype.percent = function (t) {
      return h.percent(t);
    };
    e.prototype.em = function (t) {
      return h.em(t);
    };
    e.prototype.px = function (t, e = -h.BIGDIMEN) {
      return h.px(t, e, this.metrics.em);
    };
    e.prototype.length2em = function (t, e = 1, Q = null) {
      if (Q === null) {
        Q = this.bbox.scale;
      }
      return h.length2em(t, e, Q, this.jax.pxPerEm);
    };
    e.prototype.unicodeChars = function (t, e = this.variant) {
      var Q = stringUtils_1.unicodeChars(t);
      var r = this.font.getVariant(e);
      if (r && r.chars) {
        var T = r.chars;
        Q = Q.map(function (t) {
          return ((T[t] || [])[3] || {}).smp || t;
        });
      }
      return Q;
    };
    e.prototype.remapChars = function (t) {
      return t;
    };
    e.prototype.mmlText = function (t) {
      return this.node.factory.create("text").setText(t);
    };
    e.prototype.mmlNode = function (t, e = {}, Q = []) {
      return this.node.factory.create(t, e, Q);
    };
    e.prototype.createMo = function (t) {
      var e = this.node.factory;
      var Q = e.create("text").setText(t);
      var r = e.create("mo", {
        stretchy: true
      }, [Q]);
      r.inheritAttributesFrom(this.node);
      var T = this.wrap(r);
      T.parent = this;
      return T;
    };
    e.prototype.getVariantChar = function (t, e) {
      var Q = this.font.getChar(t, e) || [0, 0, 0, {
        unknown: true
      }];
      if (Q.length === 3) {
        Q[3] = {};
      }
      return Q;
    };
    e.kind = "unknown";
    e.styles = {};
    e.removeStyles = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "fontVariant", "font"];
    e.skipAttributes = {
      fontfamily: true,
      fontsize: true,
      fontweight: true,
      fontstyle: true,
      color: true,
      background: true,
      class: true,
      href: true,
      style: true,
      xmlns: true
    };
    e.BOLDVARIANTS = {
      bold: {
        normal: "bold",
        italic: "bold-italic",
        fraktur: "bold-fraktur",
        script: "bold-script",
        "sans-serif": "bold-sans-serif",
        "sans-serif-italic": "sans-serif-bold-italic"
      },
      normal: {
        bold: "normal",
        "bold-italic": "italic",
        "bold-fraktur": "fraktur",
        "bold-script": "script",
        "bold-sans-serif": "sans-serif",
        "sans-serif-bold-italic": "sans-serif-italic"
      }
    };
    e.ITALICVARIANTS = {
      italic: {
        normal: "italic",
        bold: "bold-italic",
        "sans-serif": "sans-serif-italic",
        "bold-sans-serif": "sans-serif-bold-italic"
      },
      normal: {
        italic: "normal",
        "bold-italic": "bold",
        "sans-serif-italic": "sans-serif",
        "sans-serif-bold-italic": "bold-sans-serif"
      }
    };
    return e;
  }(abstractWrapperClass.AbstractWrapper);
  exports.CommonWrapper = m;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}