// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'n' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 's' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'o' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'h' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'l' to 'konvaCoreConfig_1'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'd' to 'konvaPointerCaptureUtils'
// - Resolved require(837308) to 'konva-pointer-capture-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 790913
         */
module.exports = function (module, exports, require) {
  let r;
  exports.Shape = exports.shapes = undefined;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig_1 = require("konva-core-config") /*id: 239057*/;
  let konvaPointerCaptureUtils = require("konva-pointer-capture-utils") /*id: 837308*/;
  var c = "hasShadow";
  var u = "shadowRGBA";
  var f = "patternImage";
  var g = "linearGradient";
  var p = "radialGradient";
  function v() {
    return r ||= konvaTransformUtil.Util.createCanvasElement().getContext("2d");
  }
  exports.shapes = {};
  class m extends konvaCoreNodeBase.Node {
    constructor(t) {
      let i;
      for (super(t); !(i = konvaTransformUtil.Util.getRandomColor()) || i in exports.shapes;);
      this.colorKey = i;
      exports.shapes[i] = this;
    }
    getContext() {
      konvaTransformUtil.Util.warn("shape.getContext() method is deprecated. Please do not use it.");
      return this.getLayer().getContext();
    }
    getCanvas() {
      konvaTransformUtil.Util.warn("shape.getCanvas() method is deprecated. Please do not use it.");
      return this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(c, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && (!!this.shadowColor() || !!this.shadowBlur() || !!this.shadowOffsetX() || !!this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(f, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        let t = v().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (t && t.setTransform) {
          let e = new konvaTransformUtil.Transform();
          e.translate(this.fillPatternX(), this.fillPatternY());
          e.rotate(konvaCoreConfig.Konva.getAngle(this.fillPatternRotation()));
          e.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
          e.translate(this.fillPatternOffsetX() * -1, this.fillPatternOffsetY() * -1);
          let i = e.getMatrix();
          let r = typeof DOMMatrix == "undefined" ? {
            a: i[0],
            b: i[1],
            c: i[2],
            d: i[3],
            e: i[4],
            f: i[5]
          } : new DOMMatrix(i);
          t.setTransform(r);
        }
        return t;
      }
    }
    _getLinearGradient() {
      return this._getCache(g, this.__getLinearGradient);
    }
    __getLinearGradient() {
      var t = this.fillLinearGradientColorStops();
      if (t) {
        var e = v();
        var i = this.fillLinearGradientStartPoint();
        var r = this.fillLinearGradientEndPoint();
        var a = e.createLinearGradient(i.x, i.y, r.x, r.y);
        var n = 0;
        for (; n < t.length; n += 2) {
          a.addColorStop(t[n], t[n + 1]);
        }
        return a;
      }
    }
    _getRadialGradient() {
      return this._getCache(p, this.__getRadialGradient);
    }
    __getRadialGradient() {
      var t = this.fillRadialGradientColorStops();
      if (t) {
        var e = v();
        var i = this.fillRadialGradientStartPoint();
        var r = this.fillRadialGradientEndPoint();
        var a = e.createRadialGradient(i.x, i.y, this.fillRadialGradientStartRadius(), r.x, r.y, this.fillRadialGradientEndRadius());
        var n = 0;
        for (; n < t.length; n += 2) {
          a.addColorStop(t[n], t[n + 1]);
        }
        return a;
      }
    }
    getShadowRGBA() {
      return this._getCache(u, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (this.hasShadow()) {
        var t = konvaTransformUtil.Util.colorToRGBA(this.shadowColor());
        if (t) {
          return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")";
        }
      }
    }
    hasFill() {
      return this._calculate("hasFill", ["fillEnabled", "fill", "fillPatternImage", "fillLinearGradientColorStops", "fillRadialGradientColorStops"], () => this.fillEnabled() && (!!this.fill() || !!this.fillPatternImage() || !!this.fillLinearGradientColorStops() || !!this.fillRadialGradientColorStops()));
    }
    hasStroke() {
      return this._calculate("hasStroke", ["strokeEnabled", "strokeWidth", "stroke", "strokeLinearGradientColorStops"], () => this.strokeEnabled() && this.strokeWidth() && (!!this.stroke() || !!this.strokeLinearGradientColorStops()));
    }
    hasHitStroke() {
      let t = this.hitStrokeWidth();
      if (t === "auto") {
        return this.hasStroke();
      } else {
        return this.strokeEnabled() && !!t;
      }
    }
    intersects(t) {
      var e = this.getStage();
      if (!e) {
        return false;
      }
      let i = e.bufferHitCanvas;
      i.getContext().clear();
      this.drawHit(i, undefined, true);
      return i.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3] > 0;
    }
    destroy() {
      konvaCoreNodeBase.Node.prototype.destroy.call(this);
      delete exports.shapes[this.colorKey];
      delete this.colorKey;
      return this;
    }
    _useBufferCanvas(t) {
      var e;
      if ((e = this.attrs.perfectDrawEnabled) !== null && e !== undefined && !e) {
        return false;
      }
      let i = t || this.hasFill();
      let r = this.hasStroke();
      let a = this.getAbsoluteOpacity() !== 1;
      if (i && r && a) {
        return true;
      }
      let n = this.hasShadow();
      let s = this.shadowForStrokeEnabled();
      return !!i && !!r && !!n && !!s;
    }
    setStrokeHitEnabled(t) {
      konvaTransformUtil.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
      if (t) {
        this.hitStrokeWidth("auto");
      } else {
        this.hitStrokeWidth(0);
      }
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      var t = this.size();
      return {
        x: this._centroid ? -t.width / 2 : 0,
        y: this._centroid ? -t.height / 2 : 0,
        width: t.width,
        height: t.height
      };
    }
    getClientRect(t = {}) {
      let e = t.skipTransform;
      let i = t.relativeTo;
      let r = this.getSelfRect();
      let a = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0;
      let n = r.width + a;
      let s = r.height + a;
      let o = !t.skipShadow && this.hasShadow();
      let h = o ? this.shadowOffsetX() : 0;
      let l = o ? this.shadowOffsetY() : 0;
      let d = n + Math.abs(h);
      let c = s + Math.abs(l);
      let u = o && this.shadowBlur() || 0;
      let f = {
        width: d + u * 2,
        height: c + u * 2,
        x: -(a / 2 + u) + Math.min(h, 0) + r.x,
        y: -(a / 2 + u) + Math.min(l, 0) + r.y
      };
      if (e) {
        return f;
      } else {
        return this._transformedRect(f, i);
      }
    }
    drawScene(t, e, i) {
      var r;
      var a;
      var n = this.getLayer();
      var s = t || n.getCanvas();
      var o = s.getContext();
      var h = this._getCanvasCache();
      var l = this.getSceneFunc();
      var d = this.hasShadow();
      var c = s.isCache;
      var u = e === this;
      if (!this.isVisible() && !u) {
        return this;
      }
      if (h) {
        o.save();
        var f = this.getAbsoluteTransform(e).getMatrix();
        o.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
        this._drawCachedSceneCanvas(o);
        o.restore();
        return this;
      }
      if (!l) {
        return this;
      }
      o.save();
      if (this._useBufferCanvas() && !c) {
        r = this.getStage();
        let t = i || r.bufferCanvas;
        (a = t.getContext()).clear();
        a.save();
        a._applyLineJoin(this);
        var g = this.getAbsoluteTransform(e).getMatrix();
        a.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
        l.call(this, a, this);
        a.restore();
        var p = t.pixelRatio;
        if (d) {
          o._applyShadow(this);
        }
        o._applyOpacity(this);
        o._applyGlobalCompositeOperation(this);
        o.drawImage(t._canvas, 0, 0, t.width / p, t.height / p);
      } else {
        o._applyLineJoin(this);
        if (!u) {
          var g = this.getAbsoluteTransform(e).getMatrix();
          o.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
          o._applyOpacity(this);
          o._applyGlobalCompositeOperation(this);
        }
        if (d) {
          o._applyShadow(this);
        }
        l.call(this, o, this);
      }
      o.restore();
      return this;
    }
    drawHit(t, e, i = false) {
      if (!this.shouldDrawHit(e, i)) {
        return this;
      }
      var r = this.getLayer();
      var a = t || r.hitCanvas;
      var s = a && a.getContext();
      var o = this.hitFunc() || this.sceneFunc();
      var h = this._getCanvasCache();
      var l = h && h.hit;
      if (!this.colorKey) {
        konvaTransformUtil.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()");
      }
      if (l) {
        s.save();
        var d = this.getAbsoluteTransform(e).getMatrix();
        s.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
        this._drawCachedHitCanvas(s);
        s.restore();
        return this;
      }
      if (!o) {
        return this;
      }
      s.save();
      s._applyLineJoin(this);
      if (this !== e) {
        var c = this.getAbsoluteTransform(e).getMatrix();
        s.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
      }
      o.call(this, s, this);
      s.restore();
      return this;
    }
    drawHitFromCache(t = 0) {
      var e;
      var i;
      var r;
      var a;
      var s;
      var o = this._getCanvasCache();
      var h = this._getCachedSceneCanvas();
      var l = o.hit;
      var d = l.getContext();
      var c = l.getWidth();
      var u = l.getHeight();
      d.clear();
      d.drawImage(h._canvas, 0, 0, c, u);
      try {
        s = 0;
        r = (i = (e = d.getImageData(0, 0, c, u)).data).length;
        a = konvaTransformUtil.Util._hexToRgb(this.colorKey);
        for (; s < r; s += 4) {
          if (i[s + 3] > t) {
            i[s] = a.r;
            i[s + 1] = a.g;
            i[s + 2] = a.b;
            i[s + 3] = 255;
          } else {
            i[s + 3] = 0;
          }
        }
        d.putImageData(e, 0, 0);
      } catch (t) {
        konvaTransformUtil.Util.error("Unable to draw hit graph from cached scene canvas. " + t.message);
      }
      return this;
    }
    hasPointerCapture(t) {
      return konvaPointerCaptureUtils.hasPointerCapture(t, this);
    }
    setPointerCapture(t) {
      konvaPointerCaptureUtils.setPointerCapture(t, this);
    }
    releaseCapture(t) {
      konvaPointerCaptureUtils.releaseCapture(t, this);
    }
  }
  exports.Shape = m;
  m.prototype._fillFunc = function (t) {
    let e = this.attrs.fillRule;
    if (e) {
      t.fill(e);
    } else {
      t.fill();
    }
  };
  m.prototype._strokeFunc = function (t) {
    t.stroke();
  };
  m.prototype._fillFuncHit = function (t) {
    t.fill();
  };
  m.prototype._strokeFuncHit = function (t) {
    t.stroke();
  };
  m.prototype._centroid = false;
  m.prototype.nodeType = "Shape";
  konvaCoreConfig_1._registerNode(m);
  m.prototype.eventListeners = {};
  m.prototype.on.call(m.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", function () {
    this._clearCache(c);
  });
  m.prototype.on.call(m.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", function () {
    this._clearCache(u);
  });
  m.prototype.on.call(m.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", function () {
    this._clearCache(f);
  });
  m.prototype.on.call(m.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", function () {
    this._clearCache(g);
  });
  m.prototype.on.call(m.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", function () {
    this._clearCache(p);
  });
  konvaPropertyFactory.Factory.addGetterSetter(m, "stroke", undefined, konvaPropertyValidators.getStringOrGradientValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeWidth", 2, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillAfterStrokeEnabled", false);
  konvaPropertyFactory.Factory.addGetterSetter(m, "hitStrokeWidth", "auto", konvaPropertyValidators.getNumberOrAutoValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeHitEnabled", true, konvaPropertyValidators.getBooleanValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "perfectDrawEnabled", true, konvaPropertyValidators.getBooleanValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowForStrokeEnabled", true, konvaPropertyValidators.getBooleanValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "lineJoin");
  konvaPropertyFactory.Factory.addGetterSetter(m, "lineCap");
  konvaPropertyFactory.Factory.addGetterSetter(m, "sceneFunc");
  konvaPropertyFactory.Factory.addGetterSetter(m, "hitFunc");
  konvaPropertyFactory.Factory.addGetterSetter(m, "dash");
  konvaPropertyFactory.Factory.addGetterSetter(m, "dashOffset", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowColor", undefined, konvaPropertyValidators.getStringValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowBlur", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowOpacity", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "shadowOffset", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowOffsetX", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowOffsetY", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternImage");
  konvaPropertyFactory.Factory.addGetterSetter(m, "fill", undefined, konvaPropertyValidators.getStringOrGradientValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternX", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternY", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillLinearGradientColorStops");
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeLinearGradientColorStops");
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientStartRadius", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientEndRadius", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientColorStops");
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternRepeat", "repeat");
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(m, "shadowEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(m, "dashEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeScaleEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPriority", "color");
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "fillPatternOffset", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternOffsetX", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternOffsetY", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "fillPatternScale", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternScaleX", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternScaleY", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "fillLinearGradientStartPoint", ["x", "y"]);
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "strokeLinearGradientStartPoint", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillLinearGradientStartPointX", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeLinearGradientStartPointX", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillLinearGradientStartPointY", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeLinearGradientStartPointY", 0);
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "fillLinearGradientEndPoint", ["x", "y"]);
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "strokeLinearGradientEndPoint", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillLinearGradientEndPointX", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeLinearGradientEndPointX", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillLinearGradientEndPointY", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "strokeLinearGradientEndPointY", 0);
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "fillRadialGradientStartPoint", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientStartPointX", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientStartPointY", 0);
  konvaPropertyFactory.Factory.addComponentsGetterSetter(m, "fillRadialGradientEndPoint", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientEndPointX", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRadialGradientEndPointY", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillPatternRotation", 0);
  konvaPropertyFactory.Factory.addGetterSetter(m, "fillRule", undefined, konvaPropertyValidators.getStringValidator());
  konvaPropertyFactory.Factory.backCompat(m, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}