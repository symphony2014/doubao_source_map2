// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RichTextDocument'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 140760
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var s;
  var h;
  var l;
  var u;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var canvasTextElement = require("canvas-text-element") /*id: 719723*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  function g() {
    return (g = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function y(t) {
    return parseFloat(t);
  }
  function v(t) {
    if (t.indexOf("%") !== -1) {
      return t;
    } else {
      return parseFloat(t);
    }
  }
  function m(t) {
    return t;
  }
  function x(t) {
    return t.split(/\s+/).map(function (t) {
      return parseFloat(t);
    });
  }
  var _ = {
    flex: y,
    align: m,
    pack: m,
    padding: x,
    opacity: y,
    width: v,
    height: v,
    minWidth: y,
    maxWidth: y,
    minHeight: y,
    maxHeight: y,
    borderColor: m,
    borderWidth: y,
    background: m,
    borderRadius: x,
    fontSize: y,
    fontFamily: m,
    fontWeight: function (t) {
      if (isNaN(parseInt(t, 10))) {
        return t;
      } else {
        return parseInt(t, 10);
      }
    },
    lineHeight: y,
    lineClamp: y,
    src: m,
    value: m,
    color: m,
    ellipsis: m,
    boxShadow: function (t) {
      var e = t.split(/\s+/);
      var n = e[0];
      var i = e[1];
      var r = e[2];
      var o = e[3];
      return {
        shadowOffsetX: parseFloat(n),
        shadowOffsetY: parseFloat(i),
        shadowBlur: parseFloat(r),
        shadowColor: o
      };
    },
    cursor: m
  };
  var b = Object.keys(_);
  var w = function () {
    function t(t) {
      this.parentNode = null;
      this.children = [];
      this.bbox = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      this.minSize = [0, 0];
      this.ownerDocument = null;
      this.props = g(g({}, this.defaultProps), t);
    }
    t.prototype.render = function () {
      return null;
    };
    t.prototype.appendChild = function (t) {
      t.parentNode = this;
      t.ownerDocument = this.ownerDocument;
      this.children.push(t);
    };
    t.prototype.getRoot = function () {
      for (var t = this; t.parentNode;) {
        t = t.parentNode;
      }
      return t;
    };
    t.prototype.getClosestNodeProps = function (t) {
      for (var e = this.parentNode; e;) {
        if (e.props[t] !== undefined) {
          return e.props[t];
        }
        e = e.parentNode;
      }
    };
    t.prototype.getExtendAttr = function (t) {
      var e = this.getClosestNodeProps(t);
      if (e === undefined) {
        return this.ownerDocument.conf[t];
      } else {
        return e;
      }
    };
    t.prototype.computeSize = function () {};
    t.prototype.layout = function () {};
    t.prototype.getStyle = function () {
      var t = this.props;
      return {
        stroke: t.borderColor,
        r: t.borderRadius,
        fill: t.background,
        lineWidth: t.borderWidth
      };
    };
    t.prototype.getEventsAndCursor = function () {
      var t = {};
      for (var e in this.props) {
        var n = this.props[e];
        if (typeof n == "function") {
          t[e] = n;
        }
      }
      t.cursor = this.props.cursor;
      return t;
    };
    t.prototype.getClampSize = function (t, e) {
      var n = this.props[e === "width" ? "minWidth" : "minHeight"];
      var i = this.props[e === "width" ? "maxWidth" : "maxHeight"];
      if (isNumberUtil.isNumber(i) && t > i) {
        t = i;
      }
      if (isNumberUtil.isNumber(n) && t < n) {
        t = n;
      }
      return t;
    };
    t.selfClosing = false;
    return t;
  }();
  var canvasTextMeasurementCache = require("canvas-text-measurement-cache") /*id: 492371*/;
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function A(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function E() {
    return (E = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var k = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.type = "text";
      n._relayouted = false;
      n.defaultProps = {
        value: ""
      };
      n.props = E(E({}, n.defaultProps), e);
      return n;
    }
    A(e, t);
    e.prototype.render = function () {
      var t = this.getClosestNodeProps("color");
      var e = this.parentNode;
      var n = this.bbox;
      var i = n.x;
      var r = n.y;
      var o = n.width;
      var a = n.height;
      var s = i;
      var h = "left";
      var l = e.props.ellipsis !== undefined;
      if (l) {
        if (e.type === "hbox") {
          h = this.getTextAlign(e.props.pack);
          s = this.getTextPosition(i, o + i, e.props.pack);
        } else if (e.type === "hbox") {
          h = this.getTextAlign(e.props.align);
          s = this.getTextPosition(i, o + i, e.props.align);
        }
      }
      return new canvasTextElement.TextElement({
        text: this.props.value,
        x: s,
        y: r + a / 2,
        textAlign: h,
        textBaseline: "middle",
        fontSize: this.getFontSize(),
        fontFamily: this.getFontFamily(),
        fontWeight: this.getFontWeight(),
        lineHeight: this.getExtendAttr("lineHeight"),
        fill: t,
        truncate: l && this.getTruncate()
      });
    };
    e.prototype.getTextAlign = function (t) {
      if (t === "start") {
        return "left";
      } else if (t === "end") {
        return "right";
      } else if (t === "center") {
        return "center";
      } else {
        return "left";
      }
    };
    e.prototype.getTextPosition = function (t, e, n) {
      if (n === "start") {
        return t;
      } else if (n === "end") {
        return e;
      } else if (n === "center") {
        return (t + e) / 2;
      } else {
        return t;
      }
    };
    e.prototype.getFontWeight = function () {
      return this.getExtendAttr("fontWeight") || "normal";
    };
    e.prototype.getFontSize = function () {
      return this.getExtendAttr("fontSize") || 12;
    };
    e.prototype.getFontFamily = function () {
      return this.getExtendAttr("fontFamily") || "sans-serif";
    };
    e.prototype.computeSize = function () {
      if (!this._relayouted) {
        var t = canvasTextMeasurementCache.measureText(this.props.value, {
          fontSize: this.getFontSize(),
          fontWeight: this.getFontWeight(),
          fontFamily: this.getFontFamily()
        });
        var e = t.width;
        var n = t.height;
        this.minSize = [e, n];
      }
    };
    e.prototype.getTruncate = function () {
      var t = this.getFontSize();
      var e = this.getExtendAttr("lineHeight") || t;
      return {
        outerWidth: this.parentNode.getContentBox().width + 1,
        outerHeight: e * (this.parentNode.props.lineClamp || 1),
        ellipsis: this.parentNode.props.ellipsis
      };
    };
    e.prototype.layout = function () {
      if (!this.ownerDocument.hasRelayouted() && this.parentNode.props.ellipsis !== undefined) {
        var t = new canvasTextElement.TextElement({
          text: this.props.value,
          x: 0,
          y: 0,
          fontSize: this.getFontSize(),
          fontFamily: this.getFontFamily(),
          fontWeight: this.getFontWeight(),
          lineHeight: this.getExtendAttr("lineHeight"),
          fill: "#000000",
          truncate: this.getTruncate()
        }).getBBox();
        this.minSize = [t.width, t.height];
        this._relayouted = true;
        this.ownerDocument.needRelayout();
      }
    };
    return e;
  }(w);
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var refValueWrapper = require("ref-value-wrapper") /*id: 368437*/;
  var boxLayoutUtils = require("box-layout-utils") /*id: 578400*/;
  var coordinateSnapUtil = require("coordinate-snap-util") /*id: 574355*/;
  r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function D(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function B() {
    return (B = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var j = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.defaultProps = {
        lineClamp: 1,
        borderRadius: 0,
        borderWidth: 0,
        padding: 0,
        align: "start",
        pack: "start",
        flex: 0,
        background: "rgba(0,0,0,0)"
      };
      n.props = B(B({}, n.defaultProps), e);
      return n;
    }
    D(e, t);
    e.prototype.render = function () {
      var t = new svgGroupElement.SvgGroupElement(B({}, this.getEventsAndCursor()));
      var e = this.props;
      var n = e.borderRadius;
      var i = e.borderWidth;
      var r = !this.parentNode;
      if (n && !i && r) {
        var o = refValueWrapper.refWrapper();
        var a = new svgRectElement.SvgRectElement(B(B({
          ref: o
        }, this.bbox), {
          r: this.props.borderRadius,
          fill: "none",
          stroke: "none"
        }));
        t.setAttr("clip", o);
        t.add(a);
      }
      var s = B(B(B({}, this.bbox), this.getStyle()), this.props.boxShadow);
      var h = new svgRectElement.SvgRectElement(r ? coordinateSnapUtil.snapRectCoords(s) : s);
      t.add(h);
      this.children.forEach(function (e) {
        return t.add(e.render());
      });
      return t;
    };
    e.prototype.getContentSize = function () {
      return [0, 0];
    };
    e.prototype.getContentBox = function () {
      var t = boxLayoutUtils.normalizePadding(this.props.padding);
      var e = t.paddingTop;
      var n = t.paddingLeft;
      var i = t.paddingRight;
      var r = t.paddingBottom;
      var o = this.props.borderWidth;
      return {
        x: this.bbox.x + n + o / 2,
        y: this.bbox.y + e + o / 2,
        width: this.bbox.width - n - i - o,
        height: this.bbox.height - e - r - o
      };
    };
    e.prototype.computeSize = function () {
      var t = boxLayoutUtils.normalizePadding(this.props.padding);
      var e = t.paddingTop;
      var n = t.paddingLeft;
      var i = t.paddingRight;
      var r = t.paddingBottom;
      var o = this.props.borderWidth;
      var a = this.getContentSize();
      var s = a[0];
      var h = a[1];
      var l = isNumberUtil.isNumber(this.props.width) ? this.props.width : s + n + i;
      var u = isNumberUtil.isNumber(this.props.height) ? this.props.height : h + e + r;
      l = this.getClampSize(l, "width");
      u = this.getClampSize(u, "height");
      this.minSize = [l + o * 2, u + o * 2];
    };
    return e;
  }(w);
  o = function (t, e) {
    return (o = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function z(t, e) {
    function n() {
      this.constructor = t;
    }
    o(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var N = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "vbox";
      return e;
    }
    z(e, t);
    e.prototype.getContentSize = function () {
      this.children.forEach(function (t) {
        return t.computeSize();
      });
      return [arrayMaxByUtilWrapper.getMaxBy(this.children.map(function (t) {
        return t.minSize[0];
      })) || 0, arraySumHelper.sumArray(this.children.map(function (t) {
        return t.minSize[1];
      }))];
    };
    e.prototype.layout = function () {
      var t = this.getContentBox();
      this.children.forEach(function (e) {
        var n;
        var i = e.props.height;
        var r = e.minSize[1];
        n = i ? geometryMathUtils.resolveValue(i, t.height) : r;
        e.bbox.height = n;
        if (isStringTypeCheck.isString(e.props.width)) {
          e.bbox.width = parseFloat(e.props.width) / 100 * t.width;
        } else {
          e.bbox.width = e.minSize[0];
        }
      });
      var e = arraySumHelper.sumArray(this.children.map(function (t) {
        return t.bbox.height;
      }));
      var n = t.height - e;
      var i = this.children.filter(function (t) {
        return t.props.flex > 0;
      });
      var r = i.map(function (t) {
        return t.props.flex;
      });
      var o = arraySumHelper.sumArray(r);
      var a = r.map(function (t) {
        return t / o * n;
      });
      i.forEach(function (t, e) {
        t.bbox.height += a[e];
      });
      boxLayoutUtils.layoutBoxes(t, this.children.map(function (t) {
        return t.bbox;
      }), "vbox", this.props.align, this.props.pack);
      this.children.forEach(function (t) {
        return t.layout();
      });
    };
    return e;
  }(j);
  a = function (t, e) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function F(t, e) {
    function n() {
      this.constructor = t;
    }
    a(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var W = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "hbox";
      return e;
    }
    F(e, t);
    e.prototype.getContentSize = function () {
      this.children.forEach(function (t) {
        return t.computeSize();
      });
      return [arraySumHelper.sumArray(this.children.map(function (t) {
        return t.minSize[0];
      })), arrayMaxByUtilWrapper.getMaxBy(this.children.map(function (t) {
        return t.minSize[1];
      })) || 0];
    };
    e.prototype.layout = function () {
      var t = this.getContentBox();
      this.children.forEach(function (e) {
        var n;
        var i = e.props.width;
        var r = e.minSize[0];
        n = i ? geometryMathUtils.resolveValue(i, t.width) : r;
        e.bbox.width = n;
        if (isStringTypeCheck.isString(e.props.height)) {
          e.bbox.height = parseFloat(e.props.height) / 100 * t.height;
        } else {
          e.bbox.height = e.minSize[1];
        }
      });
      var e = arraySumHelper.sumArray(this.children.map(function (t) {
        return t.bbox.width;
      }));
      var n = t.width - e;
      var i = this.children.filter(function (t) {
        return t.props.flex > 0;
      });
      var r = i.map(function (t) {
        return t.props.flex;
      });
      var o = arraySumHelper.sumArray(r);
      var a = r.map(function (t) {
        return t / o * n;
      });
      i.forEach(function (t, e) {
        t.bbox.width += a[e];
      });
      boxLayoutUtils.layoutBoxes(t, this.children.map(function (t) {
        return t.bbox;
      }), "hbox", this.props.align, this.props.pack);
      this.children.forEach(function (t) {
        return t.layout();
      });
    };
    return e;
  }(j);
  var svgImageElementClass = require("svg-image-element-class") /*id: 577462*/;
  s = function (t, e) {
    return (s = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function H(t, e) {
    function n() {
      this.constructor = t;
    }
    s(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function Y() {
    return (Y = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var U = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.type = "image";
      n.defaultProps = {
        borderWidth: 1,
        borderColor: "#333333"
      };
      n.props = Y(Y({}, n.defaultProps), e);
      return n;
    }
    H(e, t);
    e.prototype.render = function () {
      var t = this.props.borderRadius > 0 ? new svgRectElement.SvgRectElement(Y(Y({}, this.bbox), {
        borderRadius: this.props.borderRadius
      })) : null;
      return new svgImageElementClass.SvgImageElement(Y(Y(Y({
        clip: t
      }, this.bbox), this.getEventsAndCursor()), {
        src: this.props.src
      }));
    };
    e.prototype.computeSize = function () {
      this.minSize = [this.props.width, this.props.height];
    };
    return e;
  }(w);
  h = function (t, e) {
    return (h = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function X(t, e) {
    function n() {
      this.constructor = t;
    }
    h(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function V() {
    return (V = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var K = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.type = "span";
      n.defaultProps = {
        padding: 0,
        borderWidth: 0
      };
      n.props = V(V({}, n.defaultProps), e);
      return n;
    }
    X(e, t);
    e.prototype.render = function () {
      var t = new svgGroupElement.SvgGroupElement(V({}, this.getEventsAndCursor()));
      this.children.forEach(function (e) {
        t.add(e.render());
      });
      return t;
    };
    e.prototype.computeSize = function () {
      var t = this.props.borderWidth;
      var e = boxLayoutUtils.normalizePadding(this.props.padding);
      var n = e.paddingLeft;
      var i = e.paddingRight;
      this.children.map(function (t) {
        return t.computeSize();
      });
      var r = arraySumHelper.sumArray(this.children.map(function (t) {
        return t.minSize[0];
      }));
      var o = arrayMaxByUtilWrapper.getMaxBy(this.children.map(function (t) {
        return t.minSize[1];
      })) || 0;
      this.minSize = [r + n + i + t * 2, o + t * 2];
    };
    e.prototype.getContentBox = function () {
      var t = boxLayoutUtils.normalizePadding(this.props.padding);
      var e = t.paddingLeft;
      var n = t.paddingRight;
      var i = this.props.borderWidth;
      return {
        x: this.bbox.x + e + i / 2,
        y: this.bbox.y + i / 2,
        width: this.bbox.width - e - n - i,
        height: this.bbox.height - i
      };
    };
    e.prototype.layout = function () {
      var t = this.getContentBox();
      var e = t.x;
      var n = t.y;
      var i = t.height;
      this.children.forEach(function (t) {
        t.bbox.width = t.minSize[0];
        t.bbox.height = t.minSize[1];
      });
      var r = n + i / 2;
      this.children.reduce(function (t, e) {
        e.bbox.x = t;
        e.bbox.y = r - e.bbox.height / 2;
        return t + e.bbox.width;
      }, e);
      this.children.forEach(function (t) {
        return t.layout();
      });
    };
    return e;
  }(w);
  var geometryLineElement = require("geometry-line-element") /*id: 301566*/;
  l = function (t, e) {
    return (l = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function q(t, e) {
    function n() {
      this.constructor = t;
    }
    l(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function J() {
    return (J = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var Q = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.type = "hr";
      n.defaultProps = {
        width: "100%",
        height: 0,
        borderWidth: 1,
        borderColor: "#333333"
      };
      n.props = J(J({}, n.defaultProps), e);
      return n;
    }
    q(e, t);
    e.prototype.render = function () {
      var t = this.bbox;
      var e = t.x;
      var n = t.y;
      var i = t.width;
      var r = n + this.props.borderWidth / 2;
      return new geometryLineElement.LineElement(J({
        x1: e,
        y1: r,
        x2: e + i,
        y2: r
      }, this.getStyle()));
    };
    e.prototype.computeSize = function () {
      var t = isNumberUtil.isNumber(this.props.width) ? this.props.width : 0;
      this.minSize = [this.getClampSize(t, "width"), this.props.borderWidth];
    };
    e.selfClosing = true;
    return e;
  }(w);
  u = function (t, e) {
    return (u = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function tt(t, e) {
    function n() {
      this.constructor = t;
    }
    u(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function te() {
    return (te = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var tn = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.type = "spacer";
      n.defaultProps = {
        flex: 0
      };
      n.props = te(te({}, n.defaultProps), e);
      return n;
    }
    tt(e, t);
    e.prototype.render = function () {
      return null;
    };
    e.prototype.computeSize = function () {
      var t = isNumberUtil.isNumber(this.props.width) ? this.props.width : 0;
      var e = isNumberUtil.isNumber(this.props.height) ? this.props.height : 0;
      this.minSize = [this.getClampSize(t, "width"), this.getClampSize(e, "height")];
    };
    e.selfClosing = true;
    return e;
  }(w);
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var tr = ["hbox", "vbox", "span", "image", "hr", "spacer"];
  var to = {
    vbox: N,
    hbox: W,
    image: U,
    hr: Q,
    span: K,
    spacer: tn
  };
  var ta = function () {
    function t(t) {
      this.conf = t;
      this.init();
    }
    t.prototype.init = function () {
      var t;
      var e;
      var n;
      var i;
      var r;
      var o = this.conf.text;
      if (o && typeof o == "object" && o.type) {
        this.node = this._createRichNode(o);
        return;
      }
      t = o = isNullCheck.isNull(o) || isUndefinedCheck.isUndefined(o) ? "" : o.toString();
      e = this;
      n = [];
      i = null;
      r = [];
      var a = t ? (function (t, e) {
        var n = t.replace(/<!--.*?-->/gi, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        var i = 0;
        var r = "";
        var o = "";
        var a = {};
        var s = "";
        var h = "";
        var l = 0;
        var u = 0;
        for (; u < n.length; u++) {
          l = u;
          var c;
          var p;
          var d;
          var f;
          var g;
          var y;
          var v;
          var m;
          var x = n[u];
          var _ = u === n.length - 1;
          if (i === 0) {
            (function (t) {
              if (t === "<") {
                var e = n.slice(l + 1, l + 7).toLowerCase();
                if (tr.some(function (t) {
                  return e.indexOf(t) === 0;
                }) || n[l + 1] === "/") {
                  i = 1;
                  o = "";
                  b();
                  r = "";
                } else {
                  r += t;
                }
              } else {
                r += t;
              }
            })(x);
          } else if (i === 1) {
            i = 2;
            if ((c = x) === "/") {
              i = 4;
            } else if (!/\s/.test(c)) {
              i = 2;
              o = c;
            }
          } else if (i === 2) {
            if ((p = x) === ">") {
              A();
            } else if (p === "/") {
              i = 3;
            } else if (/\s/.test(p)) {
              i = 7;
            } else {
              o += p;
            }
          } else if (i === 3) {
            if (x === ">") {
              A();
              e.onclosetag();
            }
          } else if (i === 4) {
            if (x === ">") {
              i = 0;
              r = "";
              e.onclosetag();
            }
          } else if (i === 5) {
            if (x === ">") {
              i = 0;
              r = "";
              e.onclosetag();
            }
          } else if (i === 6) {
            w(x);
          } else if (i === 7) {
            if ((d = x) === "/") {
              i = 3;
            } else if (d === ">") {
              A();
            } else if (!/\s/.test(d)) {
              i = 8;
              s = d;
            }
          } else if (i === 8) {
            if ((f = x) === "=") {
              i = 10;
              h = "";
            } else if (E(f)) {
              i = 9;
            } else if (f === ">") {
              A();
            } else {
              s += f;
            }
          } else if (i === 9) {
            w(x);
          } else if (i === 10) {
            if ((g = x) === "\"") {
              i = 11;
            } else if (g === "'") {
              i = 12;
            } else if (!E(g)) {
              i = 13;
              h = g;
            }
          } else if (i === 11) {
            if ((y = x) === "\"") {
              S();
            } else {
              h += y;
            }
          } else if (i === 12) {
            if ((v = x) === "'") {
              S();
            } else {
              h += v;
            }
          } else if (i === 13) {
            if ((m = x) === ">") {
              S();
              A();
            } else if (E(m)) {
              S();
            } else {
              h += m;
            }
          }
          if (_ && i === 0) {
            b();
          }
        }
        function b() {
          var t = r.trim();
          if (t) {
            e.ontext(t);
          }
        }
        function w(t) {
          if (t === "=") {
            i = 10;
          } else if (!E(t)) {
            i = 8;
            s = "c";
          }
        }
        function S() {
          a[s] = h;
          i = 7;
        }
        function A() {
          e.onopentag(o.toLowerCase(), a);
          a = {};
          i = 0;
          r = "";
        }
        function E(t) {
          return /\s/.test(t);
        }
      }(t, {
        onopentag: function (t, o) {
          var a = to[t];
          if (a) {
            var s;
            var h = new a((s = {}, b.forEach(function (t) {
              var e = o[t];
              if (e && e.trim()) {
                safeObjectSetWrapper.safeObjectSet(s, t, _[t](e));
              }
            }), s));
            h.ownerDocument = e;
            if (i) {
              i.appendChild(h);
            } else {
              r.push(h);
            }
            i = h;
            n.push(i);
          }
        },
        ontext: function (t) {
          var n = t.trim();
          if (n) {
            var o = new k({
              value: n
            });
            o.ownerDocument = e;
            if (i) {
              i.appendChild(o);
            } else {
              r.push(o);
            }
          }
        },
        onclosetag: function () {
          n.pop();
          i = n[n.length - 1];
        }
      }), r) : [];
      this.node = a[0];
    };
    t.prototype.needRelayout = function () {
      if (!this._relayouted) {
        this._needRelayout = true;
      }
    };
    t.prototype.layout = function () {
      this.node.computeSize();
      var t = this.conf;
      var e = t.x;
      var n = e === undefined ? 0 : e;
      var i = t.y;
      var r = i === undefined ? 0 : i;
      var o = t.textAlign;
      var a = o === undefined ? "left" : o;
      var s = t.textBaseline;
      var h = s === undefined ? "top" : s;
      var l = this.node.minSize;
      var u = l[0];
      var c = l[1];
      var p = n;
      var d = r;
      if (a === "left") {
        p = n;
      } else if (a === "center") {
        p = n - u / 2;
      } else if (a === "right") {
        p = n - u;
      }
      if (h === "top") {
        d = r;
      } else if (h === "middle") {
        d = r - c / 2;
      } else if (h === "bottom") {
        d = r - c;
      }
      this.node.bbox.x = p;
      this.node.bbox.y = d;
      this.node.bbox.width = u;
      this.node.bbox.height = c;
      this.node.layout();
      if (this._needRelayout) {
        this._relayouted = true;
        this._needRelayout = false;
        this.layout();
      }
    };
    t.prototype.hasRelayouted = function () {
      return this._relayouted;
    };
    t.prototype.getBoxSize = function () {
      return {
        width: this.node.bbox.width,
        height: this.node.bbox.height
      };
    };
    t.prototype._createRichNode = function (t) {
      var e;
      var n = this;
      var i = new to[t.type.toLowerCase()](t);
      i.ownerDocument = this;
      if ((e = t.children) !== null && e !== undefined) {
        e.forEach(function (t) {
          if (t && typeof t == "object" && t.type) {
            i.appendChild(n._createRichNode(t));
          } else {
            i.appendChild(new k({
              value: t
            }));
          }
        });
      }
      return i;
    };
    return t;
  }();
  require.d(exports, {
    RichTextDocument: function () {
      return ta;
    }
  });
}