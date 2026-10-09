// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'SvgRenderableElement'
// - Renamed export 'ip' to 'defaultAnimationConfig'
// - Renamed export 'Im' to 'defaultRenderStyle'
// - Renamed export 'sy' to 'transformKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 707305
         */
module.exports = function (module, exports, require) {
  var i;
  var eventEmitter_1 = require("event-emitter_1") /*id: 697754*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var l = {
    Linear: function (t) {
      return t;
    },
    QuadraticIn: function (t) {
      return t * t;
    },
    QuadraticOut: function (t) {
      return t * (2 - t);
    },
    QuadraticInOut: function (t) {
      if ((t *= 2) < 1) {
        return t * 0.5 * t;
      } else {
        return (--t * (t - 2) - 1) * -0.5;
      }
    },
    CubicIn: function (t) {
      return t * t * t;
    },
    CubicOut: function (t) {
      return --t * t * t + 1;
    },
    CubicInOut: function (t) {
      if ((t *= 2) < 1) {
        return t * 0.5 * t * t;
      } else {
        return ((t -= 2) * t * t + 2) * 0.5;
      }
    },
    QuarticIn: function (t) {
      return t * t * t * t;
    },
    QuarticOut: function (t) {
      return 1 - --t * t * t * t;
    },
    QuarticInOut: function (t) {
      if ((t *= 2) < 1) {
        return t * 0.5 * t * t * t;
      } else {
        return ((t -= 2) * t * t * t - 2) * -0.5;
      }
    },
    QuinticIn: function (t) {
      return t * t * t * t * t;
    },
    QuinticOut: function (t) {
      return --t * t * t * t * t + 1;
    },
    QuinticInOut: function (t) {
      if ((t *= 2) < 1) {
        return t * 0.5 * t * t * t * t;
      } else {
        return ((t -= 2) * t * t * t * t + 2) * 0.5;
      }
    },
    SinusoidalIn: function (t) {
      return 1 - Math.cos(t * Math.PI / 2);
    },
    SinusoidalOut: function (t) {
      return Math.sin(t * Math.PI / 2);
    },
    SinusoidalInOut: function (t) {
      return (1 - Math.cos(Math.PI * t)) * 0.5;
    },
    ExponentialIn: function (t) {
      if (t === 0) {
        return 0;
      } else {
        return Math.pow(1024, t - 1);
      }
    },
    ExponentialOut: function (t) {
      if (t === 1) {
        return 1;
      } else {
        return 1 - Math.pow(2, t * -10);
      }
    },
    ExponentialInOut: function (t) {
      if (t === 0) {
        return 0;
      } else if (t === 1) {
        return 1;
      } else if ((t *= 2) < 1) {
        return Math.pow(1024, t - 1) * 0.5;
      } else {
        return (-Math.pow(2, (t - 1) * -10) + 2) * 0.5;
      }
    },
    CircularIn: function (t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    CircularOut: function (t) {
      return Math.sqrt(1 - --t * t);
    },
    CircularInOut: function (t) {
      if ((t *= 2) < 1) {
        return (Math.sqrt(1 - t * t) - 1) * -0.5;
      } else {
        return (Math.sqrt(1 - (t -= 2) * t) + 1) * 0.5;
      }
    },
    ElasticIn: function (t) {
      var e;
      var n = 0.1;
      if (t === 0) {
        return 0;
      } else if (t === 1) {
        return 1;
      } else {
        if (!n || n < 1) {
          n = 1;
          e = 0.1;
        } else {
          e = Math.asin(1 / n) * 0.4 / (Math.PI * 2);
        }
        return -(n * Math.pow(2, (t -= 1) * 10) * Math.sin(Math.PI * 2 * (t - e) / 0.4));
      }
    },
    ElasticOut: function (t) {
      var e;
      var n = 0.1;
      if (t === 0) {
        return 0;
      } else if (t === 1) {
        return 1;
      } else {
        if (!n || n < 1) {
          n = 1;
          e = 0.1;
        } else {
          e = Math.asin(1 / n) * 0.4 / (Math.PI * 2);
        }
        return n * Math.pow(2, t * -10) * Math.sin(Math.PI * 2 * (t - e) / 0.4) + 1;
      }
    },
    ElasticInOut: function (t) {
      var e;
      var n = 0.1;
      if (t === 0) {
        return 0;
      } else if (t === 1) {
        return 1;
      } else {
        if (!n || n < 1) {
          n = 1;
          e = 0.1;
        } else {
          e = Math.asin(1 / n) * 0.4 / (Math.PI * 2);
        }
        if ((t *= 2) < 1) {
          return n * Math.pow(2, (t -= 1) * 10) * Math.sin(Math.PI * 2 * (t - e) / 0.4) * -0.5;
        } else {
          return n * Math.pow(2, (t -= 1) * -10) * Math.sin(Math.PI * 2 * (t - e) / 0.4) * 0.5 + 1;
        }
      }
    },
    BackIn: function (t) {
      return t * t * (t * 2.70158 - 1.70158);
    },
    BackOut: function (t) {
      return --t * t * (t * 2.70158 + 1.70158) + 1;
    },
    BackInOut: function (t) {
      if ((t *= 2) < 1) {
        return t * t * (t * 3.5949095 - 2.5949095) * 0.5;
      } else {
        return ((t -= 2) * t * (t * 3.5949095 + 2.5949095) + 2) * 0.5;
      }
    },
    BounceIn: function (t) {
      return 1 - l.BounceOut(1 - t);
    },
    BounceOut: function (t) {
      if (t < 1 / 2.75) {
        return t * 7.5625 * t;
      } else if (t < 2 / 2.75) {
        return (t -= 1.5 / 2.75) * 7.5625 * t + 0.75;
      } else if (t < 2.5 / 2.75) {
        return (t -= 2.25 / 2.75) * 7.5625 * t + 0.9375;
      } else {
        return (t -= 2.625 / 2.75) * 7.5625 * t + 0.984375;
      }
    },
    BounceInOut: function (t) {
      if (t < 0.5) {
        return l.BounceIn(t * 2) * 0.5;
      } else {
        return l.BounceOut(t * 2 - 1) * 0.5 + 0.5;
      }
    }
  };
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var linearInterpolation_1 = require("linear-interpolation_1") /*id: 659052*/;
  var arrayValueInterpolator = require("array-value-interpolator") /*id: 83058*/;
  var interpolateObjectProperties = require("interpolate-object-properties") /*id: 403827*/;
  function f(t, e, n) {
    if (typeof t == "number" && typeof e == "number") {
      return linearInterpolation_1.linearInterpolate(t, e, n);
    } else if (Array.isArray(t) && Array.isArray(e)) {
      return arrayValueInterpolator.interpolateArray(t, e, n);
    } else if (isObjectOrFunction_1_1.isObjectOrFunction(t) && isObjectOrFunction_1_1.isObjectOrFunction(e)) {
      return interpolateObjectProperties.interpolateObjectProperties(t, e, n);
    } else {
      return e;
    }
  }
  var svgPathHandler = require("svg-path-handler") /*id: 993453*/;
  function y() {
    return (y = Object.assign || function (t) {
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
  var v = ["moveTo", "lineTo", "arc", "arcTo", "bezierCurveTo", "quadraticCurveTo", "ellipse", "rect"];
  function m(t, e, n) {
    var i = e.getPathList().map(function (e, i) {
      var r = t.getPathList()[i];
      if (r && r.action === e.action && v.indexOf(e.action) !== -1) {
        return y(y({}, e), {
          params: e.params.map(function (t, i) {
            if (typeof t == "number") {
              return f(r.params[i], e.params[i], n);
            } else {
              return t;
            }
          })
        });
      } else {
        return e;
      }
    });
    var r = new svgPathHandler.Path();
    r.setPathList(i);
    return r;
  }
  var colorGradientInterpolator = require("color-gradient-interpolator") /*id: 718716*/;
  var matrixIdentityCreate = require("matrix-identity-create") /*id: 609577*/;
  var matrix3Utils = require("matrix3-utils") /*id: 852209*/;
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  var renderConstants = require("render-constants") /*id: 207779*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var svgRenderResourceUtils = require("svg-render-resource-utils") /*id: 815682*/;
  var k = 1;
  var M = function () {
    function t() {
      this.id = "light-render-shadow-" + k++;
    }
    t.prototype.setShadow = function (t, e, n, i) {
      this.shadowColor = t;
      this.shadowBlur = e || 0;
      this.shadowOffsetX = n || 0;
      this.shadowOffsetY = i || 0;
    };
    t.prototype.getSVGNode = function () {
      return {
        svgTagName: "filter",
        svgAttr: {
          id: this.id,
          x: "-100%",
          y: "-100%",
          width: "300%",
          height: "300%"
        },
        childNodes: [{
          svgTagName: "feDropShadow",
          svgAttr: {
            dx: this.shadowOffsetX,
            dy: this.shadowOffsetY,
            "flood-color": this.shadowColor,
            stdDeviation: this.shadowBlur / 2 + " " + this.shadowBlur / 2
          }
        }]
      };
    };
    return t;
  }();
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
  function P(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function O() {
    return (O = Object.assign || function (t) {
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
  var C = {
    during: 300,
    ease: "CubicOut"
  };
  var T = [_2dVectorMathUtils.createVector(), _2dVectorMathUtils.createVector(), _2dVectorMathUtils.createVector(), _2dVectorMathUtils.createVector()];
  var I = {
    fill: "none",
    stroke: "none",
    lineWidth: 1,
    lineDash: null,
    lineDashOffset: 0,
    lineJoin: "bevel",
    lineCap: "butt",
    miterLimit: 10,
    fillOpacity: 1,
    strokeOpacity: 1,
    blendMode: "source-over",
    fontSize: 12,
    fontFamily: "sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    fontVariant: "normal",
    textAlign: "start",
    textBaseline: "bottom",
    shadowColor: renderConstants.transparentRgba,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    cursor: "auto",
    pointerEvents: "auto"
  };
  var Z = Object.keys(I);
  var L = ["rotation", "scaleX", "scaleY", "translateX", "translateY", "originX", "originY", "matrix"];
  var R = {};
  var D = {
    originX: 0,
    originY: 0,
    translateX: 0,
    translateY: 0,
    scaleX: 1,
    scaleY: 1,
    origin: [0, 0],
    position: [0, 0],
    scale: [0, 0]
  };
  var B = 1;
  var j = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      n.attr = {};
      n.svgTagName = "path";
      n.parentNode = null;
      n.firstChild = null;
      n.lastChild = null;
      n.prevSibling = null;
      n.nextSibling = null;
      n.ownerRender = null;
      n.shapeKeys = [];
      n.fillAble = true;
      n.strokeAble = true;
      n.needFill = false;
      n.needStroke = false;
      n._dirty = true;
      n._animations = [];
      n._bboxDirty = true;
      n._transformDirty = false;
      n._absTransformDirty = true;
      n._clientBoundingRectDirty = true;
      n._dragOffset = _2dVectorMathUtils.createVector();
      n._currentPaintAreaDirty = true;
      n._inTransaction = false;
      n._hasBeenPainted = false;
      n.id = B++;
      n.attr = n.getDefaultAttr();
      if (e) {
        n.setAttr(e);
      }
      n.created();
      return n;
    }
    P(e, t);
    Object.defineProperty(e.prototype, "dataset", {
      get: function () {
        return this.attr.data;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.getAnimationKeys = function () {
      return ["fill", "stroke", "color", "lineWidth", "lineDash", "lineDashOffset", "opacity", "fillOpacity", "strokeOpacity", "rotation", "translateX", "translateY", "scaleX", "scaleY", "originX", "originY", "matrix", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
    };
    e.prototype.getDefaultAttr = function () {
      return {
        display: true
      };
    };
    e.prototype.onEvent = function (t) {
      var e;
      var n = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }
      var r = Object.keys(this.attr).filter(function (e) {
        return e.toLowerCase() === "on" + t;
      })[0];
      if (r) {
        this.attr[r].apply(null, n);
      }
      if ((e = this.attr.onEvent) !== null && e !== undefined) {
        e.apply(null, n);
      }
    };
    e.prototype.getComputedOpacity = function () {
      var e = this;
      var n = 1;
      while (e) {
        n *= e.attr.opacity ?? 1;
        e = e.parentNode;
      }
      return n;
    };
    e.prototype.getExtendAttr = function (t) {
      var e = I[t];
      var n = this;
      while (n) {
        if (n.attr[t] !== undefined) {
          e = n.attr[t];
          break;
        }
        n = n.parentNode;
      }
      if ((t === "fill" || t === "stroke") && e === "currentColor") {
        return this.getExtendAttr("color");
      } else if (t === "lineWidth" && this.attr.strokeNoScale) {
        return e / this.getGlobalTransform()[0];
      } else {
        return e;
      }
    };
    e.prototype.hasFill = function () {
      var t = this.getExtendAttr("fill");
      return t && t !== "none";
    };
    e.prototype.hasStroke = function () {
      var t = this.getExtendAttr("stroke");
      return t && t !== "none";
    };
    e.prototype.contains = function (t) {
      for (var e = t; e;) {
        if (e === this) {
          return true;
        }
        e = e.parentNode;
      }
      return false;
    };
    e.prototype.getAncestorNodes = function (t = true) {
      var e = t ? this : this.parentNode;
      var n = [];
      while (e) {
        n.push(e);
        e = e.parentNode;
      }
      return n;
    };
    e.prototype.getComputedAttr = function () {
      return O(O(O({}, I), this.parentNode ? throttledPathFilterStringify.throttledPathStr(this.parentNode.attr, Z) : null), this.attr);
    };
    e.prototype.setAttr = function (t, e) {
      if (!t) {
        return this;
      }
      if (typeof t == "string") {
        if (this.attr[t] === e) {
          return;
        }
        this.dirty();
        var n = this.attr[t];
        if (e !== undefined) {
          this.attr[t] = e;
        } else {
          delete this.attr[t];
          if (this.ownerRender && this.ownerRender.renderer === "svg") {
            this._removeSVGAttribute(t);
          }
        }
        this.onAttrChange(t, e, n);
      } else if (typeof t == "object") {
        this.prevProcessAttr(t);
        var i = false;
        for (var r in t) {
          var o = this.attr[r];
          var a = t[r];
          if (o !== a) {
            if (!i) {
              i = true;
              this.dirty();
            }
            this.attr[r] = a;
            this.onAttrChange(r, a, o);
          }
        }
      }
      if (!this._inTransaction) {
        this.update();
      }
      return this;
    };
    e.prototype.removeAttr = function (t) {
      this.setAttr(t, undefined);
    };
    e.prototype.show = function () {
      this.setAttr("display", true);
    };
    e.prototype.hide = function () {
      this.setAttr("display", false);
    };
    e.prototype.startAttrTransaction = function () {
      this._inTransaction = true;
    };
    e.prototype.endAttrTransaction = function () {
      this._inTransaction = false;
      this.update();
    };
    Object.defineProperty(e.prototype, "isGroup", {
      get: function () {
        return this.type === "group";
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.beforeDirty = function (t) {
      var e = this.ownerRender.maxDirtyRects;
      if (!this.ownerRender.enableDirtyRect || this.ownerRender.getDirtyElements().size > e || t > e) {
        this._dirtyRect = undefined;
        return;
      }
      if (!this._dirty && this._hasBeenPainted) {
        this._dirtyRect = this.getCurrentDirtyRect();
      }
    };
    e.prototype.isDirty = function () {
      return this._dirty;
    };
    e.prototype.onChildDirty = function () {};
    e.prototype.dirty = function (t = false) {
      var e;
      var n;
      var i = 1;
      if (this.ownerRender && this.ownerRender.renderer === "canvas" && this.ownerRender.enableDirtyRect) {
        if ((e = this._refElements) !== null && e !== undefined) {
          e.forEach(function (t) {
            return t.dirty(true);
          });
        }
        if ((n = this.parentNode) !== null && n !== undefined) {
          n.onChildDirty();
        }
        if (this.isGroup) {
          i = this.getLeafNodesSize(this.ownerRender.maxDirtyRects + 1);
        }
        this.beforeDirty(i);
      }
      this._dirty = true;
      if (this.ownerRender) {
        this.ownerRender.dirty(this);
        if (this.isGroup && this.ownerRender.renderer === "canvas" && i > this.ownerRender.maxDirtyRects) {
          this.ownerRender.getPainter().noDirtyRectNextFrame();
        }
      }
      if (this.attr.clip && this.ownerRender) {
        this._mountClip();
      }
    };
    e.prototype.clearDirty = function () {
      this._hasBeenPainted = true;
      this._dirty = false;
    };
    Object.defineProperty(e.prototype, "childNodes", {
      get: function () {
        return this.children();
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.children = function () {
      var t = [];
      var e = this.firstChild;
      while (e) {
        t.push(e);
        e = e.nextSibling;
      }
      e = null;
      return t;
    };
    e.prototype.getShadowObj = function () {
      this._shadow ||= new M();
      this._shadow.setShadow(this.attr.shadowColor, this.attr.shadowBlur, this.attr.shadowOffsetX, this.attr.shadowOffsetY);
      return this._shadow;
    };
    e.prototype.getBBox = function () {
      if (!this._bbox || this._bboxDirty) {
        this._bbox = this.computeBBox();
        this._bboxDirty = false;
      }
      return this._bbox;
    };
    e.prototype.getBoundingClientRect = function () {
      if (this.attr.display === false) {
        return geometryRectUtils.createEmptyRect();
      } else {
        if (!this._clientBoundingRect || this._clientBoundingRectDirty) {
          this._clientBoundingRect = this.computeBoundingClientRect(this._clientBoundingRect || geometryRectUtils.createEmptyRect());
          this._clientBoundingRectDirty = false;
        }
        return this._clientBoundingRect;
      }
    };
    e.prototype.getDirtyRects = function () {
      var t = this._dirtyRect;
      var e = this.getCurrentDirtyRect();
      if (t) {
        return [t, e];
      } else {
        return [e];
      }
    };
    e.prototype.getCurrentDirtyRect = function () {
      if (!this._currentPaintArea || this._currentPaintAreaDirty) {
        this._currentPaintArea = this.computeCurrentDirtyRect();
        this._currentPaintAreaDirty = false;
      }
      return this._currentPaintArea;
    };
    e.prototype.addRef = function (t) {
      if (t) {
        this._refElements ||= new Set();
        this._refElements.add(t);
      }
    };
    e.prototype.removeRef = function (t) {
      var e;
      if ((e = this._refElements) !== null && e !== undefined) {
        e.delete(t);
      }
    };
    e.prototype.computeCurrentDirtyRect = function () {
      if (this.attr.display === false) {
        return geometryRectUtils.createEmptyRect();
      }
      var t = this.attr;
      var e = t.markerStart;
      var n = t.markerEnd;
      var i = this.getBoundingClientRect();
      var r = i.x;
      var o = i.y;
      var a = i.width;
      var s = i.height;
      var h = this.getExtendAttr("shadowBlur");
      if (!(h > 0) && !e && !n) {
        return geometryRectUtils.snapRectToGrid(i);
      }
      var l = [i];
      if (h > 0) {
        var u = this.getExtendAttr("shadowOffsetX");
        var c = this.getExtendAttr("shadowOffsetY");
        l.push({
          x: r + u - h,
          y: o + c - h,
          width: a + h * 2 + u,
          height: s + h * 2 + c
        });
      }
      if (e || n) {
        if (e) {
          l.push(e.getMarkerDirtyRect(this, "start"));
        }
        if (n) {
          l.push(n.getMarkerDirtyRect(this, "end"));
        }
      }
      return geometryRectUtils.snapRectToGrid(geometryRectUtils.getRectsBounds(l));
    };
    e.prototype.computeBBox = function () {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    };
    e.prototype.getSvgAttributes = function () {
      return svgRenderResourceUtils.buildSvgStyle(this);
    };
    e.prototype.computeBoundingClientRect = function (t) {
      var e = this.getBBox();
      var n = e.x;
      var i = e.y;
      var r = e.width;
      var o = e.height;
      var a = Math.sqrt(2) / 2 * (this.hasStroke() && !this.isGroup ? this.getExtendAttr("lineWidth") : 0);
      var s = this.getGlobalTransform(true);
      n -= a;
      i -= a;
      r += a * 2;
      o += a * 2;
      if (s) {
        return this.computeBBoxWithTransform(t, n, i, r, o, s);
      } else {
        t.x = n;
        t.y = i;
        t.width = r;
        t.height = o;
        return t;
      }
    };
    e.prototype.computeBBoxWithTransform = function (t, e, n, i, r, o) {
      T[0][0] = e;
      T[0][1] = n;
      T[1][0] = e + i;
      T[1][1] = n;
      T[2][0] = e + i;
      T[2][1] = n + r;
      T[3][0] = e;
      T[3][1] = n + r;
      T.forEach(function (t) {
        return _2dVectorMathUtils.transformVector(t, t, o);
      });
      return _2dVectorMathUtils.getBoundingBox(T, t);
    };
    e.prototype.created = function () {};
    e.prototype.onAttrChange = function (t, e, n) {
      if (e !== n) {
        if (L.indexOf(t) !== -1) {
          this.dirtyTransform();
        }
        if (t === "display") {
          this.dirtyBBox();
        }
        if (t === "shadowBlur") {
          this._currentPaintAreaDirty = true;
        }
        if (this.shapeKeys.indexOf(t) !== -1) {
          this.dirtyBBox();
        }
        if (t === "clip" && this.ownerRender) {
          this._mountClip();
        }
        if (t === "ref" && e) {
          e.current = this;
        }
        if (t === "lineWidth") {
          this.dirtyClientBoundingRect();
        }
      }
    };
    e.prototype.update = function () {};
    e.prototype.mounted = function () {
      if (this.parentNode && this.parentNode.ownerRender) {
        if (this.parentNode) {
          this.ownerRender = this.parentNode.ownerRender;
          if (this.attr.onMounted || this._animations.length) {
            this._addToFrame();
          }
        }
        this._mountClip();
      }
    };
    e.prototype.resetPickRGB = function () {
      this.pickRGB = null;
    };
    e.prototype.pickByGPU = function () {
      return false;
    };
    e.prototype.isInShape = function (t, e) {
      var n = this.getInvertedPoint(t, e);
      var i = n[0];
      var r = n[1];
      if (this.attr.pointerEvents === "bounding-box") {
        return geometryRectUtils.containsPoint(this.getBBox(), i, r);
      } else {
        return this.isPointOnPath(i, r);
      }
    };
    e.prototype.isPointOnPath = function (t, e) {
      var n = this.hasFill();
      var i = this.hasStroke();
      var r = this.getExtendAttr("lineWidth") + (this.attr.pickingBuffer || 0);
      return n && this.isPointInFill(t, e) || i && this.isPointInStroke(t, e, r);
    };
    e.prototype.isInClip = function (t, e) {
      var n;
      var i;
      var r;
      var o = true;
      var a = this;
      while (o && a && (a.attr.clip && (i = (n = a.getInvertedPoint(t, e))[0], r = n[1], o = o && a.getClipElement().isPointInFill(i, r)), o)) {
        a = a.parentNode;
      }
      return o;
    };
    e.prototype.dirtyClipTarget = function (t) {
      var e = this.getClipElement();
      if (e && e === t) {
        this.dirty();
      }
    };
    e.prototype.getInvertedPoint = function (t, e) {
      var n = this.getGlobalTransform(true);
      if (n) {
        var i = matrixIdentityCreate.createIdentity3();
        var r = matrix3Utils.invertMatrix(i, n);
        var o = [0, 0];
        _2dVectorMathUtils.transformVector(o, [t, e], r);
        return o;
      }
      return [t, e];
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      return false;
    };
    e.prototype.isPointInFill = function (t, e) {
      return false;
    };
    e.prototype.destroy = function () {
      if (this._inFrameAble) {
        this._removeFromFrame();
      }
      this.parentNode = null;
      this.ownerRender = null;
      this.prevSibling = this.nextSibling = this.firstChild = this.lastChild = null;
      this._transformDirty = true;
      this._absTransformDirty = true;
      this._clientBoundingRectDirty = true;
      this._bboxDirty = true;
      if ((t = this._refElements) !== null && t !== undefined) {
        t.clear();
      }
      var t;
      var e = this.getClipElement();
      if (e && !e.parentNode) {
        e.destroy();
      }
      this.stopAllAnimation();
      this.removeAllListeners();
    };
    e.prototype.getDragOffset = function () {
      return this._dragOffset;
    };
    e.prototype.setDragOffset = function (t, e) {
      if (this._dragOffset[0] !== t || this._dragOffset[1] !== e) {
        this._dragOffset[0] = t;
        this._dragOffset[1] = e;
        this.dirty();
        this.dirtyGlobalTransform();
      }
    };
    e.prototype.dragMoveBy = function (t, e) {
      if (t !== 0 || e !== 0) {
        this.dirty();
        this._dragOffset[0] += t;
        this._dragOffset[1] += e;
        this.dirtyGlobalTransform();
      }
    };
    e.prototype.animateTo = function (t, e, n, i, r) {
      var l = this;
      if (e === undefined) {
        e = C.during;
      }
      if (n === undefined) {
        n = C.ease;
      }
      this.prevProcessAttr(t);
      var u = this.attr;
      var c = R[this.type];
      if (!c) {
        c = this.getAnimationKeys();
        R[this.type] = c;
      }
      c = c.filter(function (e) {
        var n = t[e];
        var i = u[e];
        return !isNullCheck.isNull(n) && !isUndefinedCheck.isUndefined(n) && i !== n;
      });
      var p = throttledOmitPathStringify.omitPathStringify(t, c);
      var d = throttledPathFilterStringify.throttledPathStr(t, c);
      var f = throttledPathFilterStringify.throttledPathStr(O(O({}, D), u), c);
      c.forEach(function (t) {
        var e = f[t];
        if (e === undefined || e === "currentColor") {
          f[t] = l.getExtendAttr(t);
        }
      });
      this.setAttr(p);
      if (typeof e == "object") {
        this.addAnimation(O(O({
          stopped: false,
          from: f,
          to: d
        }, C), e));
      } else {
        this.addAnimation({
          from: f,
          to: d,
          during: e,
          ease: n,
          callback: i,
          delay: r,
          stopped: false
        });
      }
    };
    e.prototype.animateMotion = function (t) {
      var e = this;
      var n = t.path;
      var i = t.rotate;
      var r = i === undefined ? 0 : i;
      var o = t.during;
      var a = t.ease;
      var s = t.callback;
      var h = t.delay;
      this.animateTo({}, {
        ease: a === undefined ? "Linear" : a,
        during: o === undefined ? 300 : o,
        delay: h === undefined ? 0 : h,
        callback: s,
        onFrame: function (t) {
          var i = n.getPointAtPercent(t);
          var o = matrixIdentityCreate.createIdentity3();
          var a = r;
          if (r === "auto") {
            a = i.alpha + Math.PI / 2;
          }
          if (r === "auto-reverse") {
            a = i.alpha - Math.PI / 2;
          }
          matrix3Utils.translateMatrix(o, o, [i.x, i.y]);
          if (a !== 0) {
            matrix3Utils.rotateMatrix(o, o, a);
          }
          e.setAttr("matrix", o);
        }
      });
    };
    e.prototype.prevProcessAttr = function (t) {
      if (t.position) {
        t.translateX = t.position[0];
        t.translateY = t.position[1];
      }
      if (t.scale) {
        t.scaleX = t.scale[0];
        t.scaleY = t.scale[1];
      }
      if (t.origin) {
        t.originX = t.origin[0];
        t.originY = t.origin[1];
      }
    };
    e.prototype.addAnimation = function (t) {
      this._animations.push(t);
      this._addToFrame();
    };
    e.prototype.stopAllAnimation = function () {
      this._animations.length = 0;
      return this;
    };
    e.prototype.onFrame = function (t) {
      if (t && this._lastFrameTime !== t) {
        if (!this._lastFrameTime && this.attr.onMounted) {
          this.attr.onMounted();
        }
        this._lastFrameTime = t;
        if (this.attr.clip) {
          var e = this.getClipElement();
          if (e) {
            e.onFrame(t);
          }
        }
        if (!this._animations.length) {
          this._removeFromFrame();
          return;
        }
        var n = this._animations[0];
        var i = 0;
        if (n.startTime) {
          i = Math.min((t - n.startTime) / n.during, 1);
        } else {
          n.startTime = t;
        }
        i = typeof n.ease == "function" ? n.ease(i) : l[n.ease || "Linear"](i);
        var r = f;
        this.startAttrTransaction();
        for (var o in n.to) {
          r = o === "color" || o === "fill" || o === "stroke" || o === "shadowColor" ? colorGradientInterpolator.interpolateColorOrGradient : o === "pathData" ? m : f;
          this.setAttr(o, r(n.from[o], n.to[o], i));
        }
        if (i === 1) {
          if (n.callback) {
            n.callback();
          }
          n.stopped = true;
        }
        if (n.onFrame) {
          n.onFrame(i);
        }
        if (i >= 1) {
          this._animations.shift();
        }
        n = null;
        if (!this._animations.length) {
          this._removeFromFrame();
        }
        this.endAttrTransaction();
      }
    };
    e.prototype.getClipElement = function () {
      var t = this.attr.clip;
      if (t) {
        if (t instanceof e) {
          return t;
        } else if (t.current instanceof e) {
          return t.current;
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    };
    e.prototype.getTransform = function (t = false) {
      if (!this._transform || this._transformDirty) {
        this._transform = this._computeTransform();
        this._transformDirty = false;
      }
      if (t) {
        return this._transform;
      } else {
        return this._transform || renderConstants.identityMatrix3;
      }
    };
    e.prototype.getGlobalTransform = function (t = false) {
      if (!this._absTransform || this._absTransformDirty) {
        this._absTransform = this._computeGlobalTransform();
        this._absTransformDirty = false;
      }
      if (t) {
        return this._absTransform;
      } else {
        return this._absTransform || renderConstants.identityMatrix3;
      }
    };
    e.prototype.dirtyClientBoundingRect = function () {
      var t;
      this._clientBoundingRectDirty = true;
      this._currentPaintAreaDirty = true;
      if ((t = this.parentNode) !== null && t !== undefined) {
        t.dirtyBBox();
      }
    };
    e.prototype._computeTransform = function () {
      var t;
      var e;
      var n;
      var i;
      var r;
      var o;
      var a;
      var s;
      var h;
      var l = this._transform ? matrix3Utils.setIdentity(this._transform) : matrixIdentityCreate.createIdentity3();
      var u = this.attr;
      var c = u.rotation;
      var p = c === undefined ? 0 : c;
      var d = u.originX;
      var f = d === undefined ? 0 : d;
      var g = u.originY;
      var y = g === undefined ? 0 : g;
      var v = u.scaleX;
      var m = v === undefined ? 1 : v;
      var x = u.scaleY;
      var w = x === undefined ? 1 : x;
      var S = u.translateX;
      var A = S === undefined ? 0 : S;
      var E = u.translateY;
      var k = E === undefined ? 0 : E;
      var M = u.matrix;
      var P = false;
      if (A !== 0 || k !== 0) {
        P = true;
        l[6] = A;
        l[7] = k;
      }
      if (p !== 0) {
        P = true;
        if ((t = p) === undefined) {
          t = 0;
        }
        if ((e = f) === undefined) {
          e = 0;
        }
        if ((n = y) === undefined) {
          n = 0;
        }
        (i = [e, n])[0] = e;
        i[1] = n;
        matrix3Utils.translateMatrix(l, l, i);
        matrix3Utils.rotateMatrix(l, l, t);
        i[0] = -e;
        i[1] = -n;
        matrix3Utils.translateMatrix(l, l, i);
      }
      if (m !== 1 || w !== 1) {
        P = true;
        if ((r = m) === undefined) {
          r = 1;
        }
        if ((o = w) === undefined) {
          o = 1;
        }
        if ((a = f) === undefined) {
          a = 0;
        }
        if ((s = y) === undefined) {
          s = 0;
        }
        h = [a, s];
        matrix3Utils.translateMatrix(l, l, h);
        matrix3Utils.scaleMatrix(l, l, [r, o]);
        h[0] = -a;
        h[1] = -s;
        matrix3Utils.translateMatrix(l, l, h);
      }
      if (M) {
        P = true;
        matrix3Utils.multiplyMatrices(l, l, M);
      }
      if (P) {
        return l;
      } else {
        return null;
      }
    };
    e.prototype.dirtyTransform = function () {
      this._transformDirty = true;
      this.dirtyGlobalTransform();
    };
    e.prototype.dirtyGlobalTransform = function () {
      this._absTransformDirty = true;
      this.dirtyClientBoundingRect();
      if (this.ownerRender && this.ownerRender.renderer === "svg" && this.attr.strokeNoScale) {
        this.ownerRender.dirty(this);
      }
    };
    e.prototype.dirtyBBox = function () {
      this._bboxDirty = true;
      this.dirtyClientBoundingRect();
    };
    e.prototype._mountClip = function () {
      var t = this.getClipElement();
      if (t && this.ownerRender) {
        t.isClip = true;
        t.ownerRender = this.ownerRender;
      }
    };
    e.prototype._computeGlobalTransform = function () {
      var t = this.parentNode ? this.parentNode.getGlobalTransform(true) : null;
      var e = this.getTransform(true);
      var n = this._dragOffset;
      var i = n[0];
      var r = n[1];
      if (!t && !e && i === 0 && r === 0) {
        return null;
      }
      var o = this._absTransform ? matrix3Utils.setIdentity(this._absTransform) : matrixIdentityCreate.createIdentity3();
      if (i !== 0 || r !== 0) {
        matrix3Utils.translateMatrix(o, o, this._dragOffset);
      }
      if (t) {
        matrix3Utils.multiplyMatrices(o, o, t);
      }
      if (e) {
        matrix3Utils.multiplyMatrices(o, o, e);
      }
      return o;
    };
    e.prototype._removeSVGAttribute = function (t) {
      this.ownerRender.getPainter().removeNodeAttribute(this, t);
    };
    e.prototype._addToFrame = function () {
      if (this.ownerRender) {
        this._inFrameAble = true;
        this.ownerRender.__addFrameableElement(this);
      }
    };
    e.prototype._removeFromFrame = function () {
      var t;
      this._inFrameAble = false;
      if ((t = this.ownerRender) !== null && t !== undefined) {
        t.__removeFrameableElement(this);
      }
    };
    return e;
  }(eventEmitter_1.EventEmitter);
  require.d(exports, {
    SvgRenderableElement: function () {
      return j;
    },
    defaultAnimationConfig: function () {
      return C;
    },
    defaultRenderStyle: function () {
      return I;
    },
    transformKeys: function () {
      return L;
    }
  });
}