// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'a' to 'commonMathMixin'
// - Resolved require(70131) to 'common-math-mixin'
// - Renamed variable 'u' to 'mmlMathNode'
// - Resolved require(430491) to 'mml-math-node'
// - Renamed variable 's' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 148699
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
  var n = this && this.__read || function (t, e) {
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
  var o = this && this.__values || function (t) {
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
  exports.SVGmath = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMathMixin = require("common-math-mixin") /*id: 70131*/;
  var mmlMathNode = require("mml-math-node") /*id: 430491*/;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      t.prototype.toSVG.call(this, e);
      var Q = this.adaptor;
      if (this.node.attributes.get("display") === "block") {
        Q.setAttribute(this.jax.container, "display", "true");
        this.handleDisplay();
      }
      if (this.jax.document.options.internalSpeechTitles) {
        this.handleSpeech();
      }
    };
    e.prototype.handleDisplay = function () {
      var t = n(this.getAlignShift(), 2);
      var e = t[0];
      var Q = t[1];
      if (e !== "center") {
        this.adaptor.setAttribute(this.jax.container, "justify", e);
      }
      if (this.bbox.pwidth === cssBoundingBoxClass.BBox.fullWidth) {
        this.adaptor.setAttribute(this.jax.container, "width", "full");
        if (this.jax.table) {
          var r = this.jax.table.getOuterBBox();
          var T = r.L;
          var o = r.w;
          var i = r.R;
          if (e === "right") {
            i = Math.max(i || -Q, -Q);
          } else if (e === "left") {
            T = Math.max(T || Q, Q);
          } else if (e === "center") {
            o += Math.abs(Q) * 2;
          }
          this.jax.minwidth = Math.max(0, T + o + i);
        }
      } else {
        this.jax.shift = Q;
      }
    };
    e.prototype.handleSpeech = function () {
      var t;
      var e;
      var Q = this.adaptor;
      var r = this.node.attributes;
      var T = r.get("aria-label") || r.get("data-semantic-speech");
      if (T) {
        var n = this.getTitleID();
        var i = this.svg("title", {
          id: n
        }, [this.text(T)]);
        Q.insert(i, Q.firstChild(this.element));
        Q.setAttribute(this.element, "aria-labeledby", n);
        Q.removeAttribute(this.element, "aria-label");
        try {
          var a = o(this.childNodes[0].childNodes);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var s = u.value;
            Q.setAttribute(s.element, "aria-hidden", "true");
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (u && !u.done && (e = a.return)) {
              e.call(a);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
    };
    e.prototype.getTitleID = function () {
      return "mjx-svg-title-" + String(this.jax.options.titleID++);
    };
    e.prototype.setChildPWidths = function (e, Q = null, r = true) {
      return t.prototype.setChildPWidths.call(this, e, this.parent ? Q : this.metrics.containerWidth / this.jax.pxPerEm, false);
    };
    e.kind = mmlMathNode.MmlMath.prototype.kind;
    e.styles = {
      "mjx-container[jax=\"SVG\"][display=\"true\"]": {
        display: "block",
        "text-align": "center",
        margin: "1em 0"
      },
      "mjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"]": {
        display: "flex"
      },
      "mjx-container[jax=\"SVG\"][justify=\"left\"]": {
        "text-align": "left"
      },
      "mjx-container[jax=\"SVG\"][justify=\"right\"]": {
        "text-align": "right"
      }
    };
    return e;
  }(commonMathMixin.CommonMathMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmath = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}