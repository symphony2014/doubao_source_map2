// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CanvasSvgRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 609194
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
  var c;
  var p;
  var nativeSetExport = require("native-set-export") /*id: 390156*/;
  var mouseWheelNormalizer = require("mouse-wheel-normalizer") /*id: 578332*/;
  var g = mouseWheelNormalizer;
  var svgRenderableBaseElement = require("svg-renderable-base-element") /*id: 707305*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var colorRenderUtils = require("color-render-utils") /*id: 286955*/;
  var renderConstants = require("render-constants") /*id: 207779*/;
  var canvasContextHelpers = require("canvas-context-helpers") /*id: 2126*/;
  var canvasCreatorManager = require("canvas-creator-manager") /*id: 705110*/;
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var canvasTextElement = require("canvas-text-element") /*id: 719723*/;
  var A = new svgRectElement.SvgRectElement({
    display: false,
    x: 0,
    y: 0,
    width: 88,
    height: 40,
    fill: "#000000"
  });
  var E = new canvasTextElement.TextElement({
    display: false,
    x: 8,
    y: 6,
    fill: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textBaseline: "top"
  });
  var k = ["fill", "fontSize", "blendMode", "lineCap", "opacity", "fillOpacity", "strokeOpacity", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "stroke", "textAlign", "textBaseline", "lineDash", "clip"];
  var M = function () {
    function t(t, e) {
      var n = this;
      if (e === undefined) {
        e = false;
      }
      this._isPixelPainter = false;
      this._isFirstFrame = true;
      this._frameTimes = [];
      this._inUse = false;
      this.drawElement = function (t, e) {
        var i = n._ctx;
        t.clearDirty();
        if (t.attr.display && (!n._isPixelPainter || t.pickRGB || t.isGroup)) {
          if (e) {
            var r = t.getCurrentDirtyRect();
            if (!geometryRectUtils.rectsIntersect(e, r)) {
              return;
            }
          }
          if (n.render.enableViewportCulling) {
            var r = t.getCurrentDirtyRect();
            if (!geometryRectUtils.rectsIntersect(n._viewPort, r)) {
              return;
            }
          }
          var o = t.getComputedOpacity();
          var a = t.getExtendAttr("fillOpacity") * o;
          var s = t.getExtendAttr("strokeOpacity") * o;
          var h = t.getExtendAttr("lineWidth");
          var l = t.getExtendAttr("stroke");
          var u = t.getExtendAttr("fill");
          var c = u && u !== "none";
          var p = l && l !== "none" && h > 0;
          var d = c && a !== 0 && !colorRenderUtils.isTransparent(u);
          var f = p && s !== 0 && !colorRenderUtils.isTransparent(l);
          t.needFill = d;
          t.needStroke = f;
          if (o !== 0 || n._isPixelPainter) {
            var g = !!n._isPixelPainter || n._hasSelfContext(t, u, a, l, s);
            if (g) {
              i.save();
              n._setElementCanvasContext(i, t, u, l, a, s, h);
            }
            if (t.isGroup) {
              t.eachChild(function (t) {
                return n.drawElement(t, e);
              });
            } else {
              if (t.fillAble && d && !n._isPixelPainter && a !== s) {
                canvasContextHelpers.setGlobalAlpha(i, a);
              }
              if (t.fillAble || t.strokeAble && t.type !== "text") {
                i.beginPath();
              }
              t.brush(i);
              if (t.fillAble && (d || n._isPixelPainter && c) && t.type !== "text" && (!colorRenderUtils.isPattern(u) || !!u.isReady())) {
                i.fill();
              }
              if (t.strokeAble && f && !n._isPixelPainter && a !== s) {
                canvasContextHelpers.setGlobalAlpha(i, s);
              }
              if (t.strokeAble && (f || n._isPixelPainter && p) && t.type !== "text") {
                i.stroke();
              }
              if (!n._isPixelPainter) {
                if (t.attr.markerStart) {
                  t.attr.markerStart.renderMarker(n, t, "start");
                }
                if (t.attr.markerEnd) {
                  t.attr.markerEnd.renderMarker(n, t, "end");
                }
              }
            }
            if (!n._isPixelPainter && (n.render.showBBox || n.render.showBoundingRect || t.attr.showBBox || t.attr.showBoundingRect)) {
              n._drawBBox(t);
            }
            if (g) {
              i.restore();
            }
          }
        }
      };
      this._handleDocumentVisibilityChange = function () {
        if (document.visibilityState === "visible") {
          n._isFirstFrame = true;
        }
      };
      this.render = t;
      this._isPixelPainter = e;
      this.dpr = e ? 1 : t.dpr;
      if (e) {
        this._initPixelCanvas();
      } else {
        this._initCanvas();
      }
      if (this.render.isBrowser() && !e) {
        document.addEventListener("visibilitychange", this._handleDocumentVisibilityChange);
      }
      this._viewPort = {
        x: 0,
        y: 0,
        width: t.getWidth(),
        height: t.getHeight()
      };
    }
    t.prototype.resize = function (t, e) {
      this._canvas.width = t * this.dpr;
      this._canvas.height = e * this.dpr;
      if (this.render.isBrowser()) {
        this._canvas.style.width = t + "px";
        this._canvas.style.height = e + "px";
      }
      this._viewPort.width = t;
      this._viewPort.height = e;
      this.render.dirty();
    };
    t.prototype.onFrame = function (t) {
      if (this._ctx) {
        var e = this.render.showFPS;
        var n = this.render.needUpdate();
        if (e && t) {
          this._frameTimes.push(t);
          if (this._frameTimes.length > 60) {
            this._frameTimes.shift();
          }
        }
        var i = this.render.maxDirtyRects;
        var r = this.render.getDirtyElements().size;
        var o = this.render.getOneChunk();
        if (n) {
          if (!this._isFirstFrame && this.render.enableDirtyRect && r > 0 && r <= i) {
            this.paintInDirtyRegion();
          } else {
            this.paint();
          }
        }
        if (o && !this._isPixelPainter) {
          this.paintChunk(o.parent, o.items);
        }
        this._isFirstFrame = false;
        if (e) {
          this._drawFPS();
        }
        if (this._ctx.draw) {
          this._ctx.draw(true);
        }
      }
    };
    t.prototype.getImageData = function (t, e, n, i) {
      return this._ctx.getImageData(t, e, n, i);
    };
    t.prototype.getCanvas = function () {
      return this._canvas;
    };
    t.prototype.getCanvasContext = function () {
      var t;
      if ((t = this._canvas) === null || t === undefined) {
        return undefined;
      } else {
        return t.getContext("2d");
      }
    };
    t.prototype.getContext = function () {
      return this._ctx;
    };
    t.prototype.clearCanvas = function () {
      this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    t.prototype.setContext = function (t) {
      this._ctx = t;
    };
    t.prototype.paintAt = function (t, e) {
      var n = this;
      this._paintPosition = [t, e];
      var i = this._ctx;
      if (this._canvas === this.render.getDom()) {
        i.clearRect(0, 0, 1, 1);
      } else {
        i.clearRect(0, 0, this._canvas.width, this._canvas.height);
      }
      var r = this.dpr;
      i.save();
      if (r !== 1 && this.render.scaleByDprBeforePaint) {
        i.scale(r, r);
      }
      if (this._canvas === this.render.getDom()) {
        i.beginPath();
        this._brushRect(i, {
          x: 0,
          y: 0,
          width: 1,
          height: 1
        });
        i.clip();
      }
      i.translate(-t, -e);
      canvasContextHelpers.setLineJoin(i, svgRenderableBaseElement.defaultRenderStyle.lineJoin);
      this.render.getRoot().eachChild(function (t) {
        return n.drawElement(t);
      });
      i.restore();
      if (i.draw) {
        i.draw(true);
      }
    };
    t.prototype.paintInDirtyRegion = function () {
      var t;
      var e;
      var n;
      var i;
      var r;
      var o;
      var a;
      var s;
      var h;
      var l;
      var u;
      var c = [];
      var p = [];
      this.render.getDirtyElements().forEach(function (t) {
        return c.push(t);
      });
      for (var d = 0; d < c.length; d++) {
        c[d].getDirtyRects().forEach(function (t) {
          return p.push(t);
        });
      }
      var f = {
        x: 0,
        y: 0,
        width: this.render.getWidth(),
        height: this.render.getHeight()
      };
      if ((p = p.filter(function (t) {
        return geometryRectUtils.rectsIntersect(t, f);
      })).length !== 0) {
        this.paint((t = p, e = this.render.dpr, t = t.filter(function (t) {
          return t.width > 0 && t.height > 0;
        }), i = (n = geometryRectUtils.getRectsBounds(t)).x, r = n.y, o = n.width, a = n.height, s = Math.floor(i * e), h = Math.ceil((i + o) * e), l = Math.floor(r * e), u = Math.ceil((r + a) * e), n.x = s / e, n.y = l / e, n.width = (h - s) / e, n.height = (u - l) / e, n));
      }
    };
    t.prototype.paintChunk = function (t, e) {
      var n = this;
      t.mountChunk(e);
      e.forEach(function (t) {
        return t.clearDirty();
      });
      var i = [];
      var r = t;
      while (r) {
        i.push(r);
        if (!r.attr.display) {
          return;
        }
        r = r.parentNode;
      }
      var o = this._ctx;
      var a = this.dpr;
      o.save();
      if (a !== 1 && this.render.scaleByDprBeforePaint) {
        o.scale(a, a);
      }
      canvasContextHelpers.setFont(o, svgRenderableBaseElement.defaultRenderStyle.fontSize, svgRenderableBaseElement.defaultRenderStyle.fontFamily);
      canvasContextHelpers.setTextBaseline(o, svgRenderableBaseElement.defaultRenderStyle.textBaseline);
      canvasContextHelpers.setLineJoin(o, svgRenderableBaseElement.defaultRenderStyle.lineJoin);
      i.forEach(function (t) {
        var e = t.getComputedOpacity();
        var i = t.getExtendAttr("fillOpacity") * e;
        var r = t.getExtendAttr("strokeOpacity") * e;
        var a = t.getExtendAttr("lineWidth");
        var s = t.getExtendAttr("stroke");
        var h = t.getExtendAttr("fill");
        n._setElementCanvasContext(o, t, h, s, i, r, a);
      });
      e.forEach(function (t) {
        return n.drawElement(t);
      });
      o.restore();
    };
    t.prototype.paint = function (t) {
      var e = this;
      var n = this._ctx;
      var i = this.dpr;
      if (t) {
        var r = t.x;
        var o = t.y;
        var a = t.width;
        var s = t.height;
        n.clearRect(r * i, o * i, a * i, s * i);
      } else {
        n.clearRect(0, 0, this._canvas.width, this._canvas.height);
      }
      n.save();
      if (i !== 1 && this.render.scaleByDprBeforePaint) {
        n.scale(i, i);
      }
      canvasContextHelpers.setFont(n, svgRenderableBaseElement.defaultRenderStyle.fontSize, svgRenderableBaseElement.defaultRenderStyle.fontFamily);
      canvasContextHelpers.setTextBaseline(n, svgRenderableBaseElement.defaultRenderStyle.textBaseline);
      canvasContextHelpers.setLineJoin(n, svgRenderableBaseElement.defaultRenderStyle.lineJoin);
      if (t) {
        n.beginPath();
        this._brushRect(n, t);
        n.clip();
      }
      this.render.getRoot().eachChild(function (n) {
        return e.drawElement(n, t);
      });
      n.restore();
    };
    t.prototype.drawElementInUse = function (t) {
      this._inUse = true;
      this.drawElement(t);
      this._inUse = false;
    };
    t.prototype.isFullPaintNextFrame = function () {
      return !this.render.enableDirtyRect || this._isFirstFrame;
    };
    t.prototype.noDirtyRectNextFrame = function () {
      this._isFirstFrame = true;
    };
    t.prototype.getBase64 = function () {
      return this._canvas.toDataURL("image/png");
    };
    t.prototype.dispose = function () {
      var t;
      if (this._canvasByCreated) {
        if ((t = this._canvas.parentNode) !== null && t !== undefined) {
          t.removeChild(this._canvas);
        }
      }
      if (this.render.isBrowser()) {
        document.removeEventListener("visibilitychange", this._handleDocumentVisibilityChange);
      }
      this._canvas = null;
      this.render = null;
      this._ctx = null;
    };
    t.prototype._initCanvas = function () {
      var t = this.render;
      var e = t.getDom();
      var n = t.getWidth();
      var i = t.getHeight();
      var r = this.dpr;
      if (typeof e.getContext == "function") {
        this._canvas = e;
        this._canvas.width = n * r;
        this._canvas.height = i * r;
      } else {
        var o = document.createElement("canvas");
        o.width = n * r;
        o.height = i * r;
        o.style.width = n + "px";
        o.style.height = i + "px";
        this._canvas = o;
        this._canvasByCreated = true;
        t.getDom().appendChild(o);
      }
      this._ctx = this._canvas.getContext("2d");
    };
    t.prototype._initPixelCanvas = function () {
      if (this.render.isBrowser()) {
        var t = document.createElement("canvas");
        t.width = Math.max(+this.render.dpr, 1);
        t.height = Math.max(+this.render.dpr, 1);
        t.style.width = "1px";
        t.style.height = "1px";
        this._canvas = t;
      } else {
        try {
          var e = canvasCreatorManager.getCanvasCreator();
          this._canvas = e(this.render.dpr, this.render.dpr);
          if (!this._canvas.getContext) {
            throw Error("not a canvas");
          }
        } catch (t) {
          this._canvas = this.render.getDom();
        }
      }
      this._ctx = this._canvas.getContext("2d");
    };
    t.prototype._applyTransform = function (t, e) {
      var n = e.getTransform();
      var i = e.getDragOffset();
      var r = i[0] !== 0 || i[1] !== 0;
      if (r || n !== renderConstants.identityMatrix3) {
        if (!r || this._inUse) {
          if (r && this._inUse) {
            t.translate(i[0], i[1]);
          }
          t.transform(n[0], n[1], n[3], n[4], n[6], n[7]);
        } else {
          var o = e.getGlobalTransform();
          canvasContextHelpers.resetTransform(t);
          if (this.dpr !== 1) {
            t.scale(this.dpr, this.dpr);
          }
          if (this._isPixelPainter) {
            t.translate(-this._paintPosition[0], -this._paintPosition[1]);
          }
          t.transform(o[0], o[1], o[3], o[4], o[6], o[7]);
        }
      }
    };
    t.prototype._setElementCanvasContext = function (t, e, n, i, r, o, a) {
      var s = e.attr;
      var h = s.clip;
      var l = s.lineCap;
      var u = s.lineJoin;
      var c = s.miterLimit;
      var p = s.stroke;
      var d = s.fill;
      var f = s.fontSize;
      var g = s.fontFamily;
      var y = s.fontWeight;
      var v = s.fontStyle;
      var x = s.fontVariant;
      var b = s.textBaseline;
      var w = s.textAlign;
      var S = s.blendMode;
      var A = s.lineDashOffset;
      var E = s.shadowBlur;
      var k = s.shadowOffsetX;
      var M = s.shadowOffsetY;
      var P = s.shadowColor;
      var O = s.lineDash;
      this._applyTransform(t, e);
      if (h) {
        t.beginPath();
        e.getClipElement().brush(t);
        t.clip();
      }
      if (e.attr.lineWidth > 0) {
        var C = this._isPixelPainter && e.attr.pickingBuffer || 0;
        canvasContextHelpers.setLineWidth(t, a + C);
      }
      if (l) {
        canvasContextHelpers.setLineCap(t, l);
      }
      if (u) {
        canvasContextHelpers.setLineJoin(t, u);
      }
      if (c >= 0) {
        canvasContextHelpers.setMiterLimit(t, c);
      }
      if (this._isPixelPainter && !e.isGroup) {
        var T = "rgb(" + e.pickRGB.join(",") + ")";
        canvasContextHelpers.setFillStyle(t, T);
        canvasContextHelpers.setStrokeStyle(t, T);
        return;
      }
      if (p && p !== "none" && (!e.isGroup || !colorRenderUtils.isGradient(p))) {
        canvasContextHelpers.setStrokeStyle(t, colorRenderUtils.resolveColorStyle(t, p, e));
      }
      if (!p && colorRenderUtils.isGradient(i) && !e.isGroup) {
        canvasContextHelpers.setStrokeStyle(t, colorRenderUtils.resolveColorStyle(t, i, e));
      }
      if (d && d !== "none" && (!e.isGroup || !colorRenderUtils.isGradient(d))) {
        canvasContextHelpers.setFillStyle(t, colorRenderUtils.resolveColorStyle(t, d, e));
      }
      if (!d && colorRenderUtils.isGradient(n) && !e.isGroup) {
        canvasContextHelpers.setFillStyle(t, colorRenderUtils.resolveColorStyle(t, n, e));
      }
      if (f || g || y || x || v) {
        var I = e.getExtendAttr("fontSize");
        var Z = e.getExtendAttr("fontFamily");
        var L = e.getExtendAttr("fontWeight");
        var R = e.getExtendAttr("fontStyle");
        canvasContextHelpers.setFont(t, I, Z, L, R);
      }
      if (b) {
        canvasContextHelpers.setTextBaseline(t, b);
      }
      if (w) {
        canvasContextHelpers.setTextAlign(t, w);
      }
      if (r === o && r !== 1) {
        canvasContextHelpers.setGlobalAlpha(t, r);
      }
      if (S) {
        t.globalCompositeOperation = S;
      }
      if (O) {
        t.setLineDash(O);
      }
      if (A !== undefined) {
        t.lineDashOffset = e.attr.lineDashOffset;
      }
      if (E > 0 && !colorRenderUtils.isTransparent(P)) {
        canvasContextHelpers.setShadow(t, k, M, E, P);
      }
    };
    t.prototype._hasSelfContext = function (t, e, n, i, r) {
      if (k.some(function (e) {
        return t.attr[e] !== undefined;
      }) || colorRenderUtils.isGradient(e) || colorRenderUtils.isGradient(i) || n !== 1 || r !== 1) {
        return true;
      }
      var o = t.getDragOffset();
      return o[0] !== 0 || o[1] !== 0 || t.getTransform() !== renderConstants.identityMatrix3;
    };
    t.prototype._drawBBox = function (t) {
      if (this.render.showBBox || t.attr.showBBox) {
        this._brushBoundingBBox(t, false);
      }
      if (this.render.showBoundingRect || t.attr.showBoundingRect) {
        this._brushBoundingBBox(t, true);
      }
    };
    t.prototype._brushBoundingBBox = function (t, e) {
      var n = this._ctx;
      var i = e ? t.getBoundingClientRect() : t.getBBox();
      n.save();
      if (e || t.isGroup) {
        canvasContextHelpers.resetTransform(n);
        if (this.dpr !== 1) {
          n.scale(this.dpr, this.dpr);
        }
      }
      canvasContextHelpers.setGlobalAlpha(n, 1);
      canvasContextHelpers.setLineWidth(n, 1);
      canvasContextHelpers.setStrokeStyle(n, "red");
      n.beginPath();
      this._brushRect(n, i);
      n.stroke();
      n.restore();
    };
    t.prototype._brushRect = function (t, e) {
      var n = e.x;
      var i = e.y;
      var r = e.width;
      var o = e.height;
      t.rect(n, i, r, o);
    };
    t.prototype._drawFPS = function () {
      E.setAttr("display", this.render.showFPS);
      A.setAttr("display", this.render.showFPS);
      var t = this._frameTimes;
      var e = t[0];
      var n = t[t.length - 1];
      if (n !== e) {
        var i = Math.floor(t.length * 1000 / (n - e));
        E.setAttr({
          text: i + " fps"
        });
        this.drawElement(A);
        this.drawElement(E);
      }
    };
    return t;
  }();
  var P = function () {
    function t(t, e) {
      this.type = t;
      this.original = e.original;
      this.bubbles = e.bubbles;
      this.timeStamp = e.timeStamp || Date.now();
    }
    t.prototype.preventDefault = function () {
      if (this.original.preventDefault) {
        this.original.preventDefault();
      }
    };
    t.prototype.stopPropagation = function () {
      this.isPropagationStopped = true;
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
  function O(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var C = function (t) {
    function e(e, n) {
      var i = t.call(this, e, n) || this;
      i.syntheticType = "mouse";
      i.x = n.x;
      i.y = n.y;
      return i;
    }
    O(e, t);
    return e;
  }(P);
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
  function T(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var I = function (t) {
    function e(e, n) {
      var i = t.call(this, e, n) || this;
      i.syntheticType = "wheel";
      i.deltaMode = n.deltaMode;
      i.deltaX = n.deltaX;
      i.deltaY = n.deltaY;
      i.deltaZ = n.deltaZ;
      i.normalizeWheel = n.normalizeWheel;
      i.isFromTouchPad = n.original.wheelDelta % 40 != 0;
      return i;
    }
    T(e, t);
    return e;
  }(C);
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
  function Z(t, e) {
    function n() {
      this.constructor = t;
    }
    o(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var L = function (t) {
    function e(e, n) {
      var i = t.call(this, e, n) || this;
      i.syntheticType = "dnd";
      i.startX = n.startX;
      i.startY = n.startY;
      i.offsetX = n.offsetX;
      i.offsetY = n.offsetY;
      i.dx = n.dx;
      i.dy = n.dy;
      return i;
    }
    Z(e, t);
    return e;
  }(C);
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
  function R(t, e) {
    function n() {
      this.constructor = t;
    }
    a(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var D = function (t) {
    function e(e, n) {
      var i = t.call(this, e, n) || this;
      i.syntheticType = "touch";
      i.touches = n.touches;
      i.changedTouches = n.changedTouches;
      i.x = n.x;
      i.y = n.y;
      return i;
    }
    R(e, t);
    return e;
  }(P);
  var matrix3Utils = require("matrix3-utils") /*id: 852209*/;
  var matrixIdentityCreate = require("matrix-identity-create") /*id: 609577*/;
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  var N = "__lightrendermarkers";
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var debounceUtil_1 = require("debounce-util_1") /*id: 562079*/;
  function G() {
    return (G = Object.assign || function (t) {
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
  function H() {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var i = Array(t);
    var r = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var a = 0;
      var s = o.length;
      for (; a < s; a++, r++) {
        i[r] = o[a];
      }
    }
    return i;
  }
  function Y(t) {
    var e = t.length;
    var n = [];
    var i = 0;
    for (; i < e; i++) {
      n.push(t[i]);
    }
    return n;
  }
  var U = function () {
    function t(t, e) {
      var n = this;
      if (e === undefined) {
        e = false;
      }
      this._draggingTarget = null;
      this._prevMouseTarget = null;
      this._prevMousePosition = null;
      this._dragStartMouse = null;
      this._cancelClick = true;
      this._frameCallback = [];
      this._syntheticMouseEvent = function (t, e = true) {
        if (!n.render.simulateClickEvent || t.type !== "click" || !e) {
          var i;
          var r = e ? n._getMousePosition(t) : t;
          var o = r.x;
          var a = r.y;
          var s = n.pickTarget(o, a);
          var h = n._prevMouseTarget;
          n._lastMouseSyntheticTimestamp = Date.now();
          var l = {
            x: o,
            y: a,
            bubbles: true,
            original: t,
            timeStamp: t.timeStamp
          };
          if (t.type === "wheel") {
            var u = t.deltaMode;
            var c = t.deltaX;
            var p = t.deltaY;
            var d = t.deltaZ;
            var f = G(G({}, l), {
              deltaMode: u,
              deltaX: c,
              deltaY: p,
              deltaZ: d,
              normalizeWheel: g(t)
            });
            i = new I(t.type, f);
          } else {
            i = new C(t.type, l);
          }
          n._dispatchSyntheticEvent(i, s);
          if (i.type === "mousedown" || i.type === "mousemove") {
            if (i.type === "mousedown" && t.button !== 2) {
              var y = s.getAncestorNodes(true);
              var v = 0;
              for (; v < y.length; v++) {
                if (y[v].attr.draggable) {
                  n._draggingTarget = y[v];
                  n._dragStartMouse = {
                    x: o,
                    y: a
                  };
                  if (t.preventDefault) {
                    t.preventDefault();
                  }
                  break;
                }
              }
            }
            if (n._draggingTarget) {
              var m = {
                mousedown: "dragstart",
                mousemove: "drag"
              }[i.type];
              var x = G(G({}, l), n._getDragParam(l));
              var _ = new L(m, x);
              n._dispatchSyntheticEvent(_, n._draggingTarget);
              if (h !== s) {
                var b = new L("dragleave", x);
                var w = new L("dragover", x);
                n._dispatchSyntheticEvent(b, h);
                n._dispatchSyntheticEvent(w, s);
              }
            }
          }
          if (i.type === "mouseup" && n._draggingTarget && !n._draggingTarget.contains(s)) {
            var x = G(G(G({}, l), {
              bubbles: true
            }), n._getDragParam(l));
            var S = new L("drop", x);
            n._dispatchSyntheticEvent(S, s);
          }
          if (i.type === "mousemove" || i.type === "wheel" || i.type === "_onFrame") {
            if (n.render.isBrowser() && !n._eventOnly) {
              var A = n._draggingTarget ? n._draggingTarget.getExtendAttr("cursor") : s.getExtendAttr("cursor");
              n.render.getDom().style.cursor = A;
            }
            if (h !== s) {
              n._synthetickOverOutEvent(h, s, l);
            }
          }
          if (i.type === "mousemove") {
            n._prevMousePosition = {
              x: o,
              y: a
            };
            n._prevMouseTarget = s;
          }
        }
      };
      this._syntheticTouchEvent = function (t, e = true) {
        var i = t.touches;
        var r = t.changedTouches;
        var o = n._prevMouseTarget;
        n._lastMouseSyntheticTimestamp = Date.now();
        var a = H(Y(i), Y(r));
        var s = (a = dataProcessor.processData(a)).map(function (t) {
          var i = e ? n._getMousePosition(t) : t;
          var r = i.x;
          var o = i.y;
          var a = n.pickTarget(r, o);
          return {
            identifier: t.identifier,
            x: r,
            y: o,
            target: a
          };
        });
        var h = Y(i).map(function (t) {
          return s[a.indexOf(t)];
        });
        var l = Y(r).map(function (t) {
          return s[a.indexOf(t)];
        });
        var u = {
          touches: h,
          changedTouches: l,
          original: t,
          bubbles: true,
          x: l[0].x,
          y: l[0].y,
          timeStamp: Date.now()
        };
        var c = new D(t.type, u);
        u.changedTouches.forEach(function (t) {
          return n._dispatchSyntheticEvent(c, t.target);
        });
        var p = {
          startX: null,
          startY: null,
          offsetX: null,
          offsetY: null,
          x: null,
          y: null,
          dx: null,
          dy: null,
          bubbles: true,
          original: t,
          timeStamp: t.timeStamp || Date.now()
        };
        var d = n._dragStartTouchId;
        if (t.type === "touchstart" && (n.render.simulateClickEvent && (n._touchStartInfo = c, n._cancelClick = false), l.forEach(function (t) {
          var e = t.x;
          var i = t.y;
          var r = t.target.getAncestorNodes(true);
          var o = 0;
          for (; o < r.length; o++) {
            if (r[o].attr.draggable) {
              f = n._draggingTarget = r[o];
              n._dragStartMouse = {
                x: e,
                y: i
              };
              d = n._dragStartTouchId = t.identifier;
              f = t.target;
              break;
            }
          }
        }), f)) {
          var f;
          var g = new L("dragstart", G(G(G({}, p), n._dragStartMouse), n._getDragParam(n._findTouch(s, d))));
          n._dispatchSyntheticEvent(g, f);
        }
        if (t.type === "touchmove") {
          if (n.render.simulateClickEvent && n._touchStartInfo) {
            var y = n._touchStartInfo;
            var v = y.x;
            var m = y.y;
            var x = Math.abs(c.x - v);
            var _ = Math.abs(c.y - m);
            if (x > 10 || _ > 10) {
              n._cancelClick = true;
            }
          }
          var b = n._findTouch(s, d);
          if (n._draggingTarget && b) {
            if (n._getHandleGroup() === n.render.getRoot() && t.preventDefault) {
              t.preventDefault();
            }
            var w = G(G(G({}, p), {
              x: b.x,
              y: b.y
            }), n._getDragParam(n._findTouch(s, d)));
            var S = new L("drag", w);
            n._dispatchSyntheticEvent(S, n._draggingTarget);
          }
          if (b) {
            n._prevMousePosition = {
              x: b.x,
              y: b.y
            };
          }
        }
        if (t.type === "touchend" || t.type === "touchcancel") {
          if (n.render.simulateClickEvent && n._touchStartInfo) {
            if (!n._cancelClick && c.timeStamp - n._touchStartInfo.timeStamp < 300) {
              var A = new C("click", {
                x: c.x,
                y: c.y,
                original: {
                  x: c.x,
                  y: c.y
                },
                bubbles: true,
                timeStamp: c.timeStamp
              });
              n._dispatchSyntheticEvent(A, c.changedTouches[0].target);
            }
            n._cancelClick = false;
            n._touchStartInfo = null;
          }
          var E = !!n._findTouch(h, d);
          var b = n._findTouch(l, d);
          if (n._draggingTarget && !E && b) {
            var w = G(G(G({}, p), {
              x: b.x,
              y: b.y
            }), n._getDragParam(b));
            var S = new L("dragend", w);
            n._dispatchSyntheticEvent(S, n._draggingTarget);
            n._draggingTarget = null;
            n._dragStartTouchId = null;
            n._dragStartMouse = null;
            n._prevMousePosition = null;
          }
        }
        if (r.length) {
          var k = l[0].target;
          if (k !== o) {
            var M = {
              x: l[0].x,
              y: l[0].y,
              bubbles: true,
              original: t,
              timeStamp: t.timeStamp
            };
            n._synthetickOverOutEvent(o, k, M);
          }
          n._prevMouseTarget = k;
        } else {
          n._prevMouseTarget = null;
        }
      };
      this._handleMouseLeave = function (t) {
        var e = n._getMousePosition(t);
        var i = e.x;
        var r = e.y;
        var o = n._prevMouseTarget || n._getHandleGroup();
        var a = {
          x: i,
          y: r,
          bubbles: t.bubbles,
          original: t,
          timeStamp: t.timeStamp
        };
        var s = new C("mouseout", G(G({}, a), {
          bubbles: true
        }));
        n._prevMousePosition = null;
        n._prevMouseTarget = null;
        n._dispatchSyntheticEvent(s, o);
        o.getAncestorNodes(true).forEach(function (t) {
          var e = new C("mouseleave", a);
          n._dispatchSyntheticEvent(e, t);
        });
      };
      this._handleMouseEnter = function (t) {
        var e = n._getMousePosition(t);
        var i = e.x;
        var r = e.y;
        var o = n.pickTarget(i, r);
        if (n.render.isBrowser() && !n._eventOnly) {
          var a = o.getExtendAttr("cursor");
          n.render.getDom().style.cursor = a;
        }
        var s = {
          x: i,
          y: r,
          bubbles: t.bubbles,
          original: t,
          timeStamp: t.timeStamp
        };
        var h = new C("mouseover", G(G({}, s), {
          bubbles: true
        }));
        n._dispatchSyntheticEvent(h, o);
        o.getAncestorNodes(true).forEach(function (t) {
          var e = new C("mouseenter", G(G({}, s), {
            bubbles: true
          }));
          n._dispatchSyntheticEvent(e, t);
        });
        n._prevMousePosition = {
          x: i,
          y: r
        };
        n._prevMouseTarget = o;
      };
      this._handleNativeDnDEvent = function (t) {
        t.preventDefault();
        var e = n._getMousePosition(t);
        var i = e.x;
        var r = e.y;
        var o = n.pickTarget(i, r);
        var a = {
          x: i,
          y: r,
          bubbles: t.bubbles,
          original: t,
          timeStamp: t.timeStamp
        };
        if (t.type === "drop") {
          var s = new C(t.type, G({}, a));
          n._dispatchSyntheticEvent(s, o);
        }
        if (t.type === "dragover") {
          var h = n._nativeDragoverTarget;
          var l = new C("dragover", a);
          n._dispatchSyntheticEvent(l, o);
          n._nativeDragoverTarget = o;
          if (h !== o) {
            var u = new C("dragenter", a);
            var c = new C("dragleave", a);
            n._dispatchSyntheticEvent(u, o);
            n._dispatchSyntheticEvent(c, h);
          }
        }
      };
      this._handleDocumentMouseUp = function (t) {
        var e = n._getMousePosition(t);
        var i = {
          x: e.x,
          y: e.y,
          bubbles: t.bubbles,
          original: t,
          timeStamp: t.timeStamp
        };
        if (n._draggingTarget) {
          var r = new L("dragend", G(G({}, i), n._getDragParam(i)));
          n._dispatchSyntheticEvent(r, n._draggingTarget);
        }
        n._draggingTarget = null;
      };
      this._onRenderDirty = function () {
        if (n._prevMousePosition) {
          var t = n._prevMousePosition;
          var e = t.x;
          var i = t.y;
          n._syntheticMouseEvent({
            type: "_onFrame",
            x: e,
            y: i,
            bubbles: true,
            timeStamp: Date.now()
          }, false);
        }
      };
      this.render = t;
      this._PixelPainter = new M(t, true);
      this._eventOnly = e;
      this._initEvents();
      this._onRenderDirty = debounceUtil_1.debounce(this._onRenderDirty, 500);
    }
    t.prototype.onFrame = function () {
      this._frameCallback.forEach(function (t) {
        return t();
      });
      this._frameCallback.length = 0;
      if (this.render.needUpdate() && this._prevMousePosition && Date.now() - this._lastMouseSyntheticTimestamp > 500) {
        this._onRenderDirty();
      }
    };
    t.prototype.dispatch = function (t, e) {
      if (t === "touchstart" || t === "touchmove" || t === "touchend") {
        this._syntheticTouchEvent(G({
          type: t
        }, e), false);
      } else {
        this._syntheticMouseEvent(G({
          type: t
        }, e), false);
      }
    };
    t.prototype.pickTarget = function (t, e) {
      var n;
      var i;
      var r;
      var o;
      var a = this._PixelPainter;
      var s = this._getHandleGroup().getAllLeafNodes([], function (n) {
        return geometryRectUtils.containsPoint(n.getBoundingClientRect(), t, e) && n.getExtendAttr("pointerEvents") !== "none";
      }).reverse();
      var h = -1;
      var l = -1;
      var u = 0;
      for (; u < s.length; u++) {
        if (!(o = s[u]).pickByGPU() && (i = o.isInShape(t, e), r = o.isInClip(t, e), i && r)) {
          h = u;
          break;
        }
      }
      var c = s.filter(function (t) {
        return t.pickByGPU();
      });
      c.forEach(function (t, e) {
        t.pickRGB = colorRenderUtils.decodePackedColor(e + 1);
      });
      if (c.length > 0 && a.getContext().getImageData) {
        a.paintAt(t, e);
        try {
          var p = a.getImageData(0, 0, 1, 1);
          if (p) {
            var d = p.data;
            var f = d[0];
            var g = d[1];
            var y = d[2];
            var u = 0;
            for (; u < s.length; u++) {
              var x = s[u];
              if (x.pickByGPU()) {
                var _ = x.pickRGB;
                var b = _[0];
                var w = _[1];
                var S = _[2];
                if (Math.abs(b - f) + Math.abs(w - g) + Math.abs(S - y) < 3) {
                  l = u;
                  break;
                }
              }
            }
          }
        } catch (t) {}
        c.forEach(function (t) {
          return t.resetPickRGB();
        });
      }
      if (h >= 0 || l >= 0) {
        var A = undefined;
        n = s[h === -1 || l === -1 ? Math.max(h, l) : Math.min(h, l)];
      }
      return n || this._getHandleGroup();
    };
    t.prototype.dispose = function () {
      if (this.render.isBrowser()) {
        this._detachEvents();
      }
      this._PixelPainter.dispose();
      this._frameCallback.length = 0;
    };
    t.prototype._isEventFromDomNode = function (t) {
      for (var e = t.target; e;) {
        if (e.className === renderConstants.canvasDomLayer) {
          return true;
        }
        if (e === this.render.getDom()) {
          break;
        }
        e = e.parentNode;
      }
      return false;
    };
    t.prototype._getMousePosition = function (t) {
      if (t.offsetX && this.render.renderer !== "svg" && !this._isEventFromDomNode(t)) {
        return {
          x: t.offsetX,
          y: t.offsetY
        };
      } else {
        return function (t, e, n) {
          var i;
          var r;
          var o = function (t) {
            for (var e = t; e;) {
              if (getComputedStyle(e).transform !== "none") {
                return true;
              }
              e = e.parentElement;
            }
            return false;
          }(t);
          var a = t.getBoundingClientRect();
          var s = a.left;
          var h = a.top;
          if (!o) {
            return {
              x: e - s,
              y: n - h
            };
          }
          t[N] ||= {};
          var l = t[N];
          if (!l.rects) {
            i = t;
            (r = l).rects = [];
            [["0px", "0px"], ["100%", "0px"], ["100%", "100%"]].forEach(function (t) {
              var e = t[0];
              var n = t[1];
              var o = document.createElement("div");
              o.style.cssText = "\n      position: absolute;\n      visibility: hidden;\n      padding: 0;\n      margin: 0;\n      border-width: 0;\n      width: 0;\n      height: 0;\n      left: " + e + ";\n      top: " + n + ";\n    ";
              i.appendChild(o);
              r.rects.push(o);
            });
          }
          var u = l.rects.map(function (t) {
            return t.getBoundingClientRect();
          });
          var c = u[0];
          var p = u[1];
          var d = u[2];
          var f = l.rects.map(function (t) {
            return {
              left: t.offsetLeft,
              top: t.offsetTop
            };
          });
          var g = f[0];
          var y = f[1];
          var v = f[2];
          var m = matrix3Utils.createMatrix(c.left, c.top, 1, p.left, p.top, 1, d.left, d.top, 1);
          var x = matrix3Utils.invertMatrix(matrixIdentityCreate.createIdentity3(), m);
          if (!x) {
            return {
              x: e - s,
              y: n - h
            };
          }
          var _ = matrix3Utils.createMatrix(g.left, g.top, 1, y.left, y.top, 1, v.left, v.top, 1);
          var b = matrix3Utils.multiplyMatrices(matrixIdentityCreate.createIdentity3(), _, x);
          var w = [e, n];
          _2dVectorMathUtils.transformVector(w, w, b);
          return {
            x: w[0],
            y: w[1]
          };
        }(this.render.getDom(), t.clientX, t.clientY);
      }
    };
    t.prototype._getHandleGroup = function () {
      if (this._eventOnly) {
        return this.render.getEventGroup();
      } else {
        return this.render.getRoot();
      }
    };
    t.prototype._detachEvents = function () {
      if (this.render.isBrowser()) {
        var t = this.render.getDom();
        t.removeEventListener("wheel", this._syntheticMouseEvent);
        t.removeEventListener("contextmenu", this._syntheticMouseEvent);
        t.removeEventListener("mousedown", this._syntheticMouseEvent);
        t.removeEventListener("mouseup", this._syntheticMouseEvent);
        t.removeEventListener("mousemove", this._syntheticMouseEvent);
        t.removeEventListener("click", this._syntheticMouseEvent);
        t.removeEventListener("dblclick", this._syntheticMouseEvent);
        t.removeEventListener("touchstart", this._syntheticTouchEvent);
        t.removeEventListener("touchmove", this._syntheticTouchEvent);
        t.removeEventListener("touchend", this._syntheticTouchEvent);
        t.removeEventListener("touchcancel", this._syntheticTouchEvent);
        t.removeEventListener("mouseleave", this._handleMouseLeave);
        t.removeEventListener("mouseenter", this._handleMouseEnter);
        t.removeEventListener("drop", this._handleNativeDnDEvent);
        t.removeEventListener("dragover", this._handleNativeDnDEvent);
        document.removeEventListener("mouseup", this._handleDocumentMouseUp);
      }
    };
    t.prototype._initEvents = function () {
      if (this.render.isBrowser()) {
        var t = this.render.getDom();
        var e = false;
        try {
          var n = Object.defineProperty({}, "passive", {
            get: function () {
              e = true;
            }
          });
          window.addEventListener("test", null, n);
        } catch (t) {}
        t.addEventListener("wheel", this._syntheticMouseEvent, !!e && {
          passive: false
        });
        t.addEventListener("contextmenu", this._syntheticMouseEvent);
        t.addEventListener("mousedown", this._syntheticMouseEvent);
        t.addEventListener("mouseup", this._syntheticMouseEvent);
        t.addEventListener("mousemove", this._syntheticMouseEvent);
        t.addEventListener("click", this._syntheticMouseEvent);
        t.addEventListener("dblclick", this._syntheticMouseEvent);
        t.addEventListener("touchstart", this._syntheticTouchEvent, !!e && {
          passive: true
        });
        t.addEventListener("touchmove", this._syntheticTouchEvent, !!e && {
          passive: false
        });
        t.addEventListener("touchend", this._syntheticTouchEvent);
        t.addEventListener("touchcancel", this._syntheticTouchEvent);
        t.addEventListener("mouseleave", this._handleMouseLeave);
        t.addEventListener("mouseenter", this._handleMouseEnter);
        t.addEventListener("drop", this._handleNativeDnDEvent);
        t.addEventListener("dragover", this._handleNativeDnDEvent);
        document.addEventListener("mouseup", this._handleDocumentMouseUp);
      }
    };
    t.prototype._dispatchSyntheticEvent = function (t, e, n = 0) {
      if (e) {
        var i = this.render.getRoot() === e;
        if (t instanceof C) {
          if (n === 0) {
            t.target = e;
          }
          t.currentTarget = e;
        }
        if (i) {
          this.render.dispatch(t.type, t);
        }
        var r = t.bubbles;
        var o = t.isPropagationStopped;
        if (t.type === "drag" && n === 0) {
          var a = t.dx;
          var s = t.dy;
          if (e.attr.getDragOffset) {
            var h = e.attr.getDragOffset(t);
            a = h.x;
            s = h.y;
          }
          if (!this._eventOnly && this.render.enableDirtyRect) {
            this._frameCallback.push(function () {
              e.dragMoveBy(a, s);
            });
            this.render.nextTick();
          } else {
            e.dragMoveBy(a, s);
          }
        }
        e.dispatch(t.type, t);
        if (r && !o && e.parentNode) {
          n++;
          this._dispatchSyntheticEvent(t, e.parentNode, n);
        }
      }
    };
    t.prototype._getDragParam = function (t) {
      var e = this._dragStartMouse;
      var n = e.x;
      var i = e.y;
      var r = this._prevMousePosition || {
        x: n,
        y: i
      };
      var o = r.x;
      var a = r.y;
      var s = t.x;
      var h = t.y;
      return {
        startX: n,
        startY: i,
        offsetX: s - n,
        offsetY: h - i,
        dx: s - o,
        dy: h - a
      };
    };
    t.prototype._findTouch = function (t, e) {
      return t.filter(function (t) {
        return t.identifier === e;
      })[0];
    };
    t.prototype._synthetickOverOutEvent = function (t, e, n) {
      var i = this;
      this._prevMouseTarget = e;
      var r = new C("mouseout", n);
      var o = new C("mouseover", n);
      this._dispatchSyntheticEvent(r, t);
      this._dispatchSyntheticEvent(o, e);
      var a = t ? t.getAncestorNodes(true) : [];
      var s = e.getAncestorNodes(true);
      a.forEach(function (t) {
        if (!t.contains(e)) {
          var r = new C("mouseleave", G(G({}, n), {
            bubbles: false
          }));
          i._dispatchSyntheticEvent(r, t);
        }
      });
      s.forEach(function (e) {
        if (!e.contains(t)) {
          var r = new C("mouseenter", G(G({}, n), {
            bubbles: false
          }));
          i._dispatchSyntheticEvent(r, e);
        }
      });
    };
    return t;
  }();
  var eventEmitter_1 = require("event-emitter_1") /*id: 697754*/;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var animationFramePolyfill = require("animation-frame-polyfill") /*id: 87149*/;
  var canvasTextMeasurementCache = require("canvas-text-measurement-cache") /*id: 492371*/;
  var q = {};
  var arrayDiffEngine = require("array-diff-engine") /*id: 810065*/;
  var svgRenderResourceUtils = require("svg-render-resource-utils") /*id: 815682*/;
  function tt(t, e = []) {
    t.forEach(function (t) {
      e.push(t);
    });
    return e;
  }
  var te = function () {
    function t(t) {
      this._loadedSVGElements = {};
      this._frameTimes = [];
      this._loadedDefsElements = {};
      this._defsClipElements = new nativeSetExport.Set();
      this._defsGradientsAndPatterns = new nativeSetExport.Set();
      this._dfsShadows = new nativeSetExport.Set();
      this._dfsMarkers = new nativeSetExport.Set();
      this._isFirstFrame = false;
      this.render = t;
      this._initSVGRoot();
    }
    t.prototype.resize = function (t, e) {
      this._svgRoot.setAttribute("width", t + "px");
      this._svgRoot.setAttribute("height", e + "px");
    };
    t.prototype.onFrame = function (t) {
      var e = this;
      if (this.render.showFPS && t) {
        this._frameTimes.push(t);
        if (this._frameTimes.length > 60) {
          this._frameTimes.shift();
        }
      }
      if (this.render.needUpdate()) {
        this._updateGradientsAndPatterns();
        this.__updateClips();
        this._updateShadows();
        this._updateMarkers();
        if (this._isFirstFrame) {
          this.render.getRoot().eachChild(function (t) {
            return e._mountNode(e._svgRoot, t);
          });
        } else {
          this.render.getDirtyElements().forEach(function (t) {
            var n = t.id;
            if (e._loadedSVGElements[n]) {
              if (t.ownerRender) {
                e._updateNode(t);
              } else {
                e._removeNode(t);
              }
            } else {
              var i = t.parentNode;
              e._mountNode(e._loadedSVGElements[i.id], t);
            }
          });
        }
      }
      var n = this.render.getOneChunk();
      if (n) {
        this._paintChunk(n.parent, n.items);
      }
      this._isFirstFrame = false;
      if (this.render.showFPS) {
        this._drawFPS();
      }
    };
    t.prototype.getContext = function () {
      this._canvas ||= document.createElement("canvas");
      return this._canvas.getContext("2d");
    };
    t.prototype.findDOMNode = function (t) {
      var e = t.id;
      return this._loadedSVGElements[e];
    };
    t.prototype.removeNodeAttribute = function (t, e) {
      var n;
      if (e in svgRenderResourceUtils.svgAttrMap) {
        if ((n = this.findDOMNode(t)) !== null && n !== undefined) {
          n.removeAttribute(svgRenderResourceUtils.svgAttrMap[e]);
        }
      }
    };
    t.prototype.getBase64 = function () {
      return "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(this._svgRoot.parentNode.innerHTML)));
    };
    t.prototype.dispose = function () {
      delete this._loadedSVGElements;
      delete this._svgDefElement;
      delete this._loadedSVGElements;
      delete this._defsClipElements;
      delete this._defsGradientsAndPatterns;
      delete this._dfsShadows;
      delete this._canvas;
      this._svgRoot.parentNode.removeChild(this._svgRoot);
      this._canvas = null;
    };
    t.prototype._updateGradientsAndPatterns = function () {
      var t = this;
      var e = tt(this._defsGradientsAndPatterns);
      this._defsGradientsAndPatterns.clear();
      this._getAllGradients(this.render.getRoot());
      var n = tt(this._defsGradientsAndPatterns);
      var i = arrayDiffEngine.calculateArrayDiff(e, n, function (t) {
        return t.id;
      });
      i.added.forEach(function (e) {
        var i = n[e];
        var r = t._mountDataNode(t._svgDefElement, i.getSVGNode());
        t._loadedDefsElements[i.id] = r;
      });
      i.removed.forEach(function (n) {
        var i = e[n];
        var r = t._loadedDefsElements[i.id];
        r.parentNode.removeChild(r);
        delete t._loadedDefsElements[i.id];
      });
    };
    t.prototype.__updateClips = function () {
      var t = this;
      var e = tt(this._defsClipElements);
      this._defsClipElements.clear();
      this._getAllDfsClips(this.render.getRoot());
      var n = tt(this._defsClipElements);
      var i = arrayDiffEngine.calculateArrayDiff(e, n, function (t) {
        return t.id;
      });
      i.added.forEach(function (e) {
        t._mountNode(t._svgDefElement, n[e], 1);
      });
      i.removed.forEach(function (n) {
        t._removeNode(e[n]);
      });
    };
    t.prototype._updateMarkers = function () {
      var t = this;
      var e = tt(this._dfsMarkers);
      this._dfsMarkers.clear();
      this._getAllMarkers(this.render.getRoot());
      var n = tt(this._dfsMarkers);
      var i = arrayDiffEngine.calculateArrayDiff(e, n, function (t) {
        return t.id;
      });
      i.added.forEach(function (e) {
        t._mountNode(t._svgDefElement, n[e], 2);
      });
      i.removed.forEach(function (n) {
        t._removeNode(e[n]);
      });
    };
    t.prototype._updateShadows = function () {
      var t = this;
      var e = tt(this._dfsShadows);
      this._dfsShadows.clear();
      this._getAllShadows(this.render.getRoot());
      var n = tt(this._dfsShadows);
      var i = arrayDiffEngine.calculateArrayDiff(e, n, function (t) {
        return t.id;
      });
      i.added.forEach(function (e) {
        var i = n[e];
        var r = t._mountDataNode(t._svgDefElement, i.getSVGNode());
        t._loadedDefsElements[i.id] = r;
      });
      i.removed.forEach(function (n) {
        var i = e[n];
        var r = t._loadedDefsElements[i.id];
        r.parentNode.removeChild(r);
        delete t._loadedDefsElements[i.id];
      });
      i.maintained.forEach(function (n) {
        var i = e[n[0]];
        var r = t._loadedDefsElements[i.id].firstChild;
        t._setElementAttr(r, i.getSVGNode().childNodes[0].svgAttr);
      });
    };
    t.prototype._mountNode = function (t, e, n) {
      var i = this;
      if (n === undefined) {
        n = 0;
      }
      var r = n === 1;
      var o = n === 2;
      if (!this._loadedSVGElements[e.id]) {
        var a = e.svgTagName;
        var s = e.getSvgAttributes();
        var h = e.id;
        var l = this._createSVGElement(a, s);
        var u = l;
        if (a === "text") {
          var c = e.getSpanList();
          this._mountTextNode(l, c, s);
        }
        if (r) {
          var p = this._createSVGElement("clipPath", {
            id: svgRenderResourceUtils.getClipId(e)
          });
          p.appendChild(l);
          u = p;
        }
        if (o) {
          this._mountNode(l, e.attr.shape);
        }
        this._loadedSVGElements[h] = l;
        if (e.isGroup) {
          e.eachChild(function (t) {
            return i._mountNode(l, t);
          });
        }
        t.appendChild(u);
        e.clearDirty();
      }
    };
    t.prototype._mountDataNode = function (t, e) {
      var n = this;
      var i = e.svgTagName;
      var r = e.svgAttr;
      var o = e.childNodes;
      var a = this._createSVGElement(i, r);
      if (o) {
        o.forEach(function (t) {
          return n._mountDataNode(a, t);
        });
      }
      t.appendChild(a);
      return a;
    };
    t.prototype._mountTextNode = function (t, e, n) {
      var i = this;
      if (e.length === 1) {
        var r = document.createTextNode(e[0].text);
        t.appendChild(r);
      } else {
        e.forEach(function (e) {
          var r = i._createSVGElement("tspan", {
            x: e.x,
            y: e.y,
            dy: n.dy
          });
          var o = document.createTextNode(e.text);
          r.appendChild(o);
          t.appendChild(r);
        });
      }
    };
    t.prototype._updateNode = function (t) {
      var e = this._loadedSVGElements[t.id];
      var n = t.getSvgAttributes();
      this._setElementAttr(e, n);
      if (t.type === "text") {
        e.textContent = "";
        this._mountTextNode(e, t.getSpanList(), n);
      }
      if (t.attr.display && e.getAttribute("display") === "none") {
        e.setAttribute("display", "");
      }
      if (!t.attr.clip && e.getAttribute("clip-path")) {
        e.removeAttribute("clip");
      }
      t.clearDirty();
    };
    t.prototype._removeNode = function (t) {
      var e;
      var n;
      var i = this._loadedSVGElements[t.id];
      if (!i) {
        t.clearDirty();
        return;
      }
      if (t.isClip) {
        if ((e = i.parentNode) !== null && e !== undefined) {
          e.parentNode.removeChild(i.parentNode);
        }
      } else if ((n = i.parentNode) !== null && n !== undefined) {
        n.removeChild(i);
      }
      delete this._loadedSVGElements[t.id];
      t.clearDirty();
    };
    t.prototype._initSVGRoot = function () {
      var t = this.render.getWidth();
      var e = this.render.getHeight();
      var n = this._createSVGElement("svg", svgRenderResourceUtils.createSvgRoot(t, e));
      var i = this.render.getRoot().id;
      var r = this._createSVGElement("defs", {});
      n.appendChild(r);
      this._svgRoot = n;
      this._svgDefElement = r;
      this.render.getDom().appendChild(n);
      this._loadedSVGElements[i] = n;
      this._mountNode(n, A);
      this._mountNode(n, E);
    };
    t.prototype._paintChunk = function (t, e) {
      var n = this;
      t.mountChunk(e);
      e.forEach(function (t) {
        return t.clearDirty();
      });
      var i = this._loadedSVGElements[t.id];
      e.forEach(function (t) {
        return n._mountNode(i, t);
      });
    };
    t.prototype._createSVGElement = function (t, e) {
      var n = document.createElementNS(renderConstants.namespaceSvg, t);
      this._setElementAttr(n, e);
      return n;
    };
    t.prototype._setElementAttr = function (t, e) {
      for (var n in e) {
        if (e[n] !== undefined) {
          if (n !== "xlink:href") {
            t.setAttribute(n, e[n]);
          } else {
            t.setAttributeNS(renderConstants.namespaceXlink, "xlink:href", e[n]);
          }
        }
      }
    };
    t.prototype._getAllDfsClips = function (t) {
      var e = this;
      t.eachChild(function (t) {
        var n = t.getClipElement();
        if (n) {
          e._defsClipElements.add(n);
        }
        if (t.isGroup) {
          e._getAllDfsClips(t);
        }
      });
    };
    t.prototype._getAllMarkers = function (t) {
      var e = this;
      t.eachChild(function (t) {
        var n = t.attr;
        var i = n.markerStart;
        var r = n.markerEnd;
        if (i) {
          e._dfsMarkers.add(i);
        }
        if (r) {
          e._dfsMarkers.add(r);
        }
      });
    };
    t.prototype._getAllGradients = function (t) {
      var e = this;
      t.eachChild(function (t) {
        var n = t.attr;
        var i = n.fill;
        var r = n.stroke;
        if (colorRenderUtils.isGradient(i) || colorRenderUtils.isPattern(i)) {
          e._defsGradientsAndPatterns.add(i);
        }
        if (colorRenderUtils.isGradient(r) || colorRenderUtils.isPattern(r)) {
          e._defsGradientsAndPatterns.add(r);
        }
        if (t.isGroup) {
          e._getAllGradients(t);
        }
      });
    };
    t.prototype._getAllShadows = function (t) {
      var e = this;
      t.eachChild(function (t) {
        var n = t.attr;
        var i = n.shadowColor;
        var r = n.shadowBlur;
        if (i && r >= 0) {
          var o = t.getShadowObj();
          e._dfsShadows.add(o);
        }
        if (t.isGroup) {
          e._getAllShadows(t);
        }
      });
    };
    t.prototype._drawFPS = function () {
      E.setAttr("display", this.render.showFPS);
      A.setAttr("display", this.render.showFPS);
      var t = this._frameTimes;
      var e = t[0];
      var n = t[t.length - 1];
      if (n !== e) {
        var i = Math.floor(t.length * 1000 / (n - e));
        E.setAttr("text", i + " pfs");
        if (this._svgRoot.lastChild !== this._loadedSVGElements[E.id]) {
          this._svgRoot.appendChild(this._loadedSVGElements[A.id]);
          this._svgRoot.appendChild(this._loadedSVGElements[E.id]);
        }
        this._updateNode(A);
        this._updateNode(E);
      }
    };
    return t;
  }();
  var tn = [];
  var ti = false;
  function tr(t, e) {
    if (typeof t == "object") {
      var n = t.svgTagName;
      var i = t.svgAttr;
      var r = t.childNodes;
      e.push("<" + n);
      for (var o in i) {
        e.push(" " + o + "=\"" + i[o] + "\"");
      }
      e.push(">");
      if (r) {
        r.forEach(function (t) {
          return tr(t, e);
        });
      }
      e.push("</" + n + ">");
    } else {
      e.push(t);
    }
  }
  var getElementContentSize = require("get-element-content-size") /*id: 913591*/;
  var internalKeyValueStore = require("internal-key-value-store") /*id: 989433*/;
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
  function ts(t, e) {
    function n() {
      this.constructor = t;
    }
    s(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  q.canvas = M;
  q.svg = te;
  var th = function (t) {
    function e(e, n = {}) {
      var i = t.call(this) || this;
      i.dpr = 1;
      i.enableDirtyRect = true;
      i.maxDirtyRects = 128;
      i.simulateClickEvent = false;
      i.showBoundingRect = false;
      i.showBBox = false;
      i.showFPS = false;
      i.scaleByDprBeforePaint = true;
      i.enableViewportCulling = false;
      i.chunksElement = new nativeSetExport.Set();
      i._needUpdate = true;
      i._eventGroop = new svgGroupElement.SvgGroupElement();
      i._dirtyElements = new nativeSetExport.Set();
      i._frameAbleElement = new nativeSetExport.Set();
      i._disposed = false;
      i._isOnframe = false;
      i._onFrame = function (t) {
        if (!i._disposed && !i._isOnframe) {
          i._requestAnimationFrameId = null;
          i._isOnframe = true;
          i._frameAbleElement.forEach(function (e) {
            return e.onFrame(t);
          });
          i._eventHandle.onFrame();
          i._eventElementHandle.onFrame();
          if (i._workerEnabled) {
            var e;
            var n = i._painter.getCanvas();
            i._commandBuffer.start(n.width, n.height);
          }
          if ((e = i._painter) !== null && e !== undefined) {
            e.onFrame(t);
          }
          if (i._workerEnabled) {
            i._commandBuffer.commit();
          }
          i._needUpdate = false;
          i._dirtyElements.clear();
          var r = i.chunksElement.size;
          var o = i._frameAbleElement.size;
          if (r === 0 && o === 0 && 16 - ((typeof window != "undefined" && window.performance && window.performance.now ? window.performance.now() : Date.now()) - t) > 5) {
            i._rootGroup.getBoundingClientRect();
          }
          i._isOnframe = false;
          if (o > 0 || r > 0) {
            i.nextTick();
          }
        }
      };
      i._onThreadPaited = function (t, e) {
        var n = i._painter.getCanvasContext();
        e.forEach(function (t) {
          return n.clearRect(t.x, t.y, t.width, t.height);
        });
        n.drawImage(t, 0, 0, t.width, t.height);
      };
      i._rootGroup = new svgGroupElement.SvgGroupElement();
      i._rootGroup.ownerRender = i;
      i._isBrowser = /html.*?element/gi.test(Object.prototype.toString.call(e));
      i.dpr = n.dpr || i._isBrowser && window.devicePixelRatio || 1;
      i._renderer = n.renderer || "canvas";
      i._workerEnabled = n.workerEnabled;
      i._dom = e;
      if (e) {
        var r = undefined;
        var o = undefined;
        if (typeof e.getContext != "function" || i._isBrowser) {
          var a = getElementContentSize.getContentSize(e);
          var s = a[0];
          var h = a[1];
          r = s;
          o = h;
        } else {
          r = e.width;
          o = e.height;
        }
        var l = n.width;
        var u = l === undefined ? r : l;
        var c = n.height;
        var p = c === undefined ? o : c;
        i._width = u;
        i._height = p;
        var f = q[i._renderer] || M;
        if (f === M) {
          i._renderer = "canvas";
        }
        i._painter = new f(i);
        canvasTextMeasurementCache.trackItem(i._painter.getContext());
      } else {
        i._width = n.width || 300;
        i._height = n.height || 150;
      }
      i._eventHandle = new U(i);
      i._eventElementHandle = new U(i, true);
      if (i._workerEnabled && i.renderer === "canvas" && i._isBrowser && window.OffscreenCanvas && internalKeyValueStore.getItem("worker")) {
        var g = internalKeyValueStore.getItem("worker")().getRaf({
          onPainted: i._onThreadPaited
        });
        var y = g.requestAnimationFrame;
        var v = g.cancelAnimationFrame;
        var m = g.unRegisterTask;
        var x = g.commandBuffer;
        i._raf = y;
        i._caf = v;
        i._unregisterWorker = m;
        i._commandBuffer = x;
        i._painter.setContext(x);
      } else {
        i._workerEnabled = false;
        i._raf = animationFramePolyfill.getRAF();
        i._caf = animationFramePolyfill.getCancelRAF();
      }
      i.nextTick();
      return i;
    }
    ts(e, t);
    e.prototype.resize = function (t, e) {
      var n;
      this._width = t;
      this._height = e;
      if ((n = this._painter) !== null && n !== undefined) {
        n.resize(t, e);
      }
      this.dispatch("resize");
    };
    e.prototype.getRaf = function () {
      return this._raf;
    };
    e.prototype.isWorkerEnabled = function () {
      return this._workerEnabled;
    };
    e.prototype.refresh = function () {
      this._needUpdate = true;
      this.nextTick();
    };
    e.prototype.refreshImmediately = function () {
      this._needUpdate = true;
      this._onFrame();
    };
    e.prototype.dirty = function (t) {
      this.nextTick();
      this._needUpdate = true;
      if (t && this._renderer === "svg") {
        this._dirtyElements.add(t);
        return;
      }
      if (t && t.isClip) {
        this._rootGroup.dirtyClipTarget(t);
        return;
      }
      if (t && this.enableDirtyRect && this._dirtyElements.size <= this.maxDirtyRects) {
        this._dirtyElements.add(t);
      }
    };
    e.prototype.getWidth = function () {
      return this._width;
    };
    e.prototype.getHeight = function () {
      return this._height;
    };
    Object.defineProperty(e.prototype, "renderer", {
      get: function () {
        return this._renderer;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.prepend = function (t) {
      this._rootGroup.prepend(t);
    };
    e.prototype.add = function (t) {
      this._rootGroup.add(t);
    };
    e.prototype.addAll = function (t) {
      this._rootGroup.addAll(t);
    };
    e.prototype.remove = function (t) {
      this._rootGroup.remove(t);
    };
    e.prototype.clear = function () {
      this._rootGroup.clear();
    };
    e.prototype.updateAll = function (t, e = true) {
      this.chunksElement.clear();
      this._frameAbleElement.clear();
      this._rootGroup.updateAll(t, e);
    };
    e.prototype.addEventElement = function (t) {
      this._eventGroop.add(t);
    };
    e.prototype.removeEventElement = function (t) {
      this._eventGroop.remove(t);
    };
    e.prototype.getDom = function () {
      return this._dom;
    };
    e.prototype.getRoot = function () {
      return this._rootGroup;
    };
    e.prototype.getEventGroup = function () {
      return this._eventGroop;
    };
    e.prototype.getDirtyElements = function () {
      return this._dirtyElements;
    };
    e.prototype.downloadImage = function (t) {
      (function (t, e) {
        var n = !!window.ActiveXObject || "ActiveXObject" in window;
        var i = navigator.userAgent.indexOf("Edge") > -1;
        var r = document.createElement("a");
        r.href = t;
        r.download = e || document.title;
        r.target = "_blank";
        if (typeof MouseEvent != "function" || n || i) {
          var o = "<body style=\"margin:0;\">\n                    <img src=\"" + t + "\" style=\"max-width:100%;\"  title=\"(test)\" />\n                </body>";
          window.open().document.write(o);
        } else {
          var a = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: false
          });
          r.dispatchEvent(a);
        }
      })(this.getPainter().getBase64(), t);
    };
    e.prototype.needUpdate = function () {
      return this._needUpdate;
    };
    e.prototype.dispose = function () {
      this._caf(this._requestAnimationFrameId);
      if (this._workerEnabled) {
        this._unregisterWorker();
      }
      if (this._painter) {
        canvasTextMeasurementCache.untrackItem(this._painter.getContext());
        this._painter.dispose();
      }
      this.removeAllListeners();
      this._eventHandle.dispose();
      this._eventElementHandle.dispose();
      this._frameAbleElement.clear();
      this.chunksElement.clear();
      this._rootGroup.clear();
      this._eventGroop.clear();
      this._rootGroup = null;
      this._dom = undefined;
      this._disposed = true;
    };
    e.prototype.isBrowser = function () {
      return this._isBrowser;
    };
    e.prototype.getPainter = function () {
      return this._painter;
    };
    e.prototype.renderToSVGString = function (t) {
      var e;
      var n;
      var i;
      var r;
      if (t === undefined) {
        t = {};
      }
      e = this.getRoot();
      n = this._width;
      i = this._height;
      ti = t.figma;
      h = n;
      l = i;
      u = svgRenderResourceUtils.collectClips(e);
      c = svgRenderResourceUtils.collectPaintStyles(e);
      p = svgRenderResourceUtils.collectShadows(e);
      tn = svgRenderResourceUtils.collectMarkers(e);
      (function t(e, n, i = false) {
        var r = i ? "svg" : e.svgTagName;
        var o = i ? svgRenderResourceUtils.createSvgRoot(h, l) : e.getSvgAttributes(ti);
        var a = e.isGroup ? e.children() : null;
        n.push("<" + r);
        for (var s in o) {
          n.push(" " + s + "=\"" + o[s] + "\"");
        }
        n.push(">");
        if (r === "svg") {
          n.push("<defs>");
          u.forEach(function (e) {
            n.push("<clipPath id=\"" + svgRenderResourceUtils.getClipId(e) + "\">");
            t(e, n);
            n.push("</clipPath>");
          });
          c.forEach(function (t) {
            tr(t.getSVGNode(), n);
          });
          p.forEach(function (t) {
            return tr(t.getSVGNode(), n);
          });
          tn.forEach(function (e) {
            return t(e, n);
          });
          n.push("</defs>");
        }
        if (e.type === "text") {
          var d = e.getSpanList();
          if (d.length === 1) {
            n.push(d[0].text);
          } else {
            d.forEach(function (t) {
              tr({
                svgTagName: "tspan",
                svgAttr: {
                  x: t.x,
                  y: t.y
                },
                childNodes: [t.text]
              }, n);
            });
          }
        }
        if (r === "marker") {
          t(e.attr.shape, n);
        }
        if (a) {
          a.forEach(function (e) {
            return t(e, n);
          });
        }
        n.push("</" + r + ">");
      })(e, r = [], true);
      u = null;
      c = null;
      return r.join("");
    };
    e.prototype.syntheticEvent = function (t, e) {
      this._eventHandle.dispatch(t, e);
      this._eventElementHandle.dispatch(t, e);
    };
    e.prototype.getEventHandle = function () {
      return this._eventHandle;
    };
    e.prototype.__addFrameableElement = function (t) {
      this._frameAbleElement.add(t);
      this.nextTick();
    };
    e.prototype.__removeFrameableElement = function (t) {
      this._frameAbleElement.delete(t);
    };
    e.prototype.onEvent = function (t) {
      var e = [];
      var n = 1;
      for (; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      if (this.eventListener) {
        this.eventListener.call(null, t, e);
      }
    };
    e.prototype.nextTick = function () {
      this._requestAnimationFrameId ||= this._raf(this._onFrame);
    };
    e.prototype.getOneChunk = function () {
      var t;
      var e;
      if (this.chunksElement.size) {
        this.chunksElement.forEach(function (n) {
          if (!t) {
            t = n;
            e = n.getChunks()[0];
          }
        });
        return {
          parent: t,
          items: e
        };
      }
    };
    return e;
  }(eventEmitter_1.EventEmitter);
  require.d(exports, {
    CanvasSvgRenderer: function () {
      return th;
    }
  });
}