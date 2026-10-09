// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 706660
         */
module.exports = function (module, exports, require) {
  exports.HitContext = exports.SceneContext = exports.Context = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  var n = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "ellipse", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "roundRect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"];
  class s {
    constructor(t) {
      this.canvas = t;
      if (konvaCoreConfig.Konva.enableTrace) {
        this.traceArr = [];
        this._enableTrace();
      }
    }
    fillShape(t) {
      if (t.fillEnabled()) {
        this._fill(t);
      }
    }
    _fill(t) {}
    strokeShape(t) {
      if (t.hasStroke()) {
        this._stroke(t);
      }
    }
    _stroke(t) {}
    fillStrokeShape(t) {
      if (t.attrs.fillAfterStrokeEnabled) {
        this.strokeShape(t);
        this.fillShape(t);
      } else {
        this.fillShape(t);
        this.strokeShape(t);
      }
    }
    getTrace(t, e) {
      var i;
      var a;
      var n;
      var s;
      var o = this.traceArr;
      var h = o.length;
      var l = "";
      for (i = 0; i < h; i++) {
        if (n = (a = o[i]).method) {
          s = a.args;
          l += n;
          if (t) {
            l += "()";
          } else if (konvaTransformUtil.Util._isArray(s[0])) {
            l += "([" + s.join(",") + "])";
          } else {
            if (e) {
              s = s.map(t => typeof t == "number" ? Math.floor(t) : t);
            }
            l += "(" + s.join(",") + ")";
          }
        } else {
          l += a.property;
          if (!t) {
            l += "=" + a.val;
          }
        }
        l += ";";
      }
      return l;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(t) {
      var e = this.traceArr;
      e.push(t);
      if (e.length >= 100) {
        e.shift();
      }
    }
    reset() {
      var t = this.getCanvas().getPixelRatio();
      this.setTransform(+t, 0, 0, +t, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(t) {
      var e = this.getCanvas();
      if (t) {
        this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0);
      } else {
        this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
      }
    }
    _applyLineCap(t) {
      let e = t.attrs.lineCap;
      if (e) {
        this.setAttr("lineCap", e);
      }
    }
    _applyOpacity(t) {
      var e = t.getAbsoluteOpacity();
      if (e !== 1) {
        this.setAttr("globalAlpha", e);
      }
    }
    _applyLineJoin(t) {
      let e = t.attrs.lineJoin;
      if (e) {
        this.setAttr("lineJoin", e);
      }
    }
    setAttr(t, e) {
      this._context[t] = e;
    }
    arc(t, e, i, r, a, n) {
      this._context.arc(t, e, i, r, a, n);
    }
    arcTo(t, e, i, r, a) {
      this._context.arcTo(t, e, i, r, a);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(t, e, i, r, a, n) {
      this._context.bezierCurveTo(t, e, i, r, a, n);
    }
    clearRect(t, e, i, r) {
      this._context.clearRect(t, e, i, r);
    }
    clip(...t) {
      this._context.clip.apply(this._context, t);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(t, e) {
      var i = arguments;
      if (i.length === 2) {
        return this._context.createImageData(t, e);
      } else if (i.length === 1) {
        return this._context.createImageData(t);
      } else {
        return undefined;
      }
    }
    createLinearGradient(t, e, i, r) {
      return this._context.createLinearGradient(t, e, i, r);
    }
    createPattern(t, e) {
      return this._context.createPattern(t, e);
    }
    createRadialGradient(t, e, i, r, a, n) {
      return this._context.createRadialGradient(t, e, i, r, a, n);
    }
    drawImage(t, e, i, r, a, n, s, o, h) {
      var l = arguments;
      var d = this._context;
      if (l.length === 3) {
        d.drawImage(t, e, i);
      } else if (l.length === 5) {
        d.drawImage(t, e, i, r, a);
      } else if (l.length === 9) {
        d.drawImage(t, e, i, r, a, n, s, o, h);
      }
    }
    ellipse(t, e, i, r, a, n, s, o) {
      this._context.ellipse(t, e, i, r, a, n, s, o);
    }
    isPointInPath(t, e, i, r) {
      if (i) {
        return this._context.isPointInPath(i, t, e, r);
      } else {
        return this._context.isPointInPath(t, e, r);
      }
    }
    fill(...t) {
      this._context.fill.apply(this._context, t);
    }
    fillRect(t, e, i, r) {
      this._context.fillRect(t, e, i, r);
    }
    strokeRect(t, e, i, r) {
      this._context.strokeRect(t, e, i, r);
    }
    fillText(t, e, i, r) {
      if (r) {
        this._context.fillText(t, e, i, r);
      } else {
        this._context.fillText(t, e, i);
      }
    }
    measureText(t) {
      return this._context.measureText(t);
    }
    getImageData(t, e, i, r) {
      return this._context.getImageData(t, e, i, r);
    }
    lineTo(t, e) {
      this._context.lineTo(t, e);
    }
    moveTo(t, e) {
      this._context.moveTo(t, e);
    }
    rect(t, e, i, r) {
      this._context.rect(t, e, i, r);
    }
    roundRect(t, e, i, r, a) {
      this._context.roundRect(t, e, i, r, a);
    }
    putImageData(t, e, i) {
      this._context.putImageData(t, e, i);
    }
    quadraticCurveTo(t, e, i, r) {
      this._context.quadraticCurveTo(t, e, i, r);
    }
    restore() {
      this._context.restore();
    }
    rotate(t) {
      this._context.rotate(t);
    }
    save() {
      this._context.save();
    }
    scale(t, e) {
      this._context.scale(t, e);
    }
    setLineDash(t) {
      if (this._context.setLineDash) {
        this._context.setLineDash(t);
      } else if ("mozDash" in this._context) {
        this._context.mozDash = t;
      } else if ("webkitLineDash" in this._context) {
        this._context.webkitLineDash = t;
      }
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(t, e, i, r, a, n) {
      this._context.setTransform(t, e, i, r, a, n);
    }
    stroke(t) {
      if (t) {
        this._context.stroke(t);
      } else {
        this._context.stroke();
      }
    }
    strokeText(t, e, i, r) {
      this._context.strokeText(t, e, i, r);
    }
    transform(t, e, i, r, a, n) {
      this._context.transform(t, e, i, r, a, n);
    }
    translate(t, e) {
      this._context.translate(t, e);
    }
    _enableTrace() {
      var t;
      var e;
      var i = this;
      var a = n.length;
      var s = this.setAttr;
      function o(t) {
        var a;
        var n = i[t];
        i[t] = function () {
          e = function (t) {
            var e;
            var i;
            var a = [];
            var n = t.length;
            var s = konvaTransformUtil.Util;
            for (e = 0; e < n; e++) {
              i = t[e];
              if (s._isNumber(i)) {
                i = Math.round(i * 1000) / 1000;
              } else if (!s._isString(i)) {
                i += "";
              }
              a.push(i);
            }
            return a;
          }(Array.prototype.slice.call(arguments, 0));
          a = n.apply(i, arguments);
          i._trace({
            method: t,
            args: e
          });
          return a;
        };
      }
      for (t = 0; t < a; t++) {
        o(n[t]);
      }
      i.setAttr = function () {
        s.apply(i, arguments);
        var t = arguments[0];
        var e = arguments[1];
        if (t === "shadowOffsetX" || t === "shadowOffsetY" || t === "shadowBlur") {
          e /= this.canvas.getPixelRatio();
        }
        i._trace({
          property: t,
          val: e
        });
      };
    }
    _applyGlobalCompositeOperation(t) {
      let e = t.attrs.globalCompositeOperation;
      if (!!e && e !== "source-over") {
        this.setAttr("globalCompositeOperation", e);
      }
    }
  }
  exports.Context = s;
  ["fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "letterSpacing", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "direction", "font", "textAlign", "textBaseline", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled"].forEach(function (t) {
    Object.defineProperty(s.prototype, t, {
      get() {
        return this._context[t];
      },
      set(e) {
        this._context[t] = e;
      }
    });
  });
  exports.SceneContext = class extends s {
    constructor(t, {
      willReadFrequently: e = false
    } = {}) {
      super(t);
      this._context = t._canvas.getContext("2d", {
        willReadFrequently: e
      });
    }
    _fillColor(t) {
      var e = t.fill();
      this.setAttr("fillStyle", e);
      t._fillFunc(this);
    }
    _fillPattern(t) {
      this.setAttr("fillStyle", t._getFillPattern());
      t._fillFunc(this);
    }
    _fillLinearGradient(t) {
      var e = t._getLinearGradient();
      if (e) {
        this.setAttr("fillStyle", e);
        t._fillFunc(this);
      }
    }
    _fillRadialGradient(t) {
      let e = t._getRadialGradient();
      if (e) {
        this.setAttr("fillStyle", e);
        t._fillFunc(this);
      }
    }
    _fill(t) {
      let e = t.fill();
      let i = t.getFillPriority();
      if (e && i === "color") {
        this._fillColor(t);
        return;
      }
      let r = t.getFillPatternImage();
      if (r && i === "pattern") {
        this._fillPattern(t);
        return;
      }
      let a = t.getFillLinearGradientColorStops();
      if (a && i === "linear-gradient") {
        this._fillLinearGradient(t);
        return;
      }
      let n = t.getFillRadialGradientColorStops();
      if (n && i === "radial-gradient") {
        this._fillRadialGradient(t);
        return;
      }
      if (e) {
        this._fillColor(t);
      } else if (r) {
        this._fillPattern(t);
      } else if (a) {
        this._fillLinearGradient(t);
      } else if (n) {
        this._fillRadialGradient(t);
      }
    }
    _strokeLinearGradient(t) {
      let e = t.getStrokeLinearGradientStartPoint();
      let i = t.getStrokeLinearGradientEndPoint();
      let r = t.getStrokeLinearGradientColorStops();
      let a = this.createLinearGradient(e.x, e.y, i.x, i.y);
      if (r) {
        for (var n = 0; n < r.length; n += 2) {
          a.addColorStop(r[n], r[n + 1]);
        }
        this.setAttr("strokeStyle", a);
      }
    }
    _stroke(t) {
      var e = t.dash();
      var i = t.getStrokeScaleEnabled();
      if (t.hasStroke()) {
        if (!i) {
          this.save();
          var r = this.getCanvas().getPixelRatio();
          this.setTransform(r, 0, 0, r, 0, 0);
        }
        this._applyLineCap(t);
        if (e && t.dashEnabled()) {
          this.setLineDash(e);
          this.setAttr("lineDashOffset", t.dashOffset());
        }
        this.setAttr("lineWidth", t.strokeWidth());
        if (!t.getShadowForStrokeEnabled()) {
          this.setAttr("shadowColor", "rgba(0,0,0,0)");
        }
        if (t.getStrokeLinearGradientColorStops()) {
          this._strokeLinearGradient(t);
        } else {
          this.setAttr("strokeStyle", t.stroke());
        }
        t._strokeFunc(this);
        if (!i) {
          this.restore();
        }
      }
    }
    _applyShadow(t) {
      var a = t.getShadowRGBA() ?? "black";
      var n = t.getShadowBlur() ?? 5;
      var s = t.getShadowOffset() ?? {
        x: 0,
        y: 0
      };
      var o = t.getAbsoluteScale();
      var h = this.canvas.getPixelRatio();
      var l = o.x * h;
      var d = o.y * h;
      this.setAttr("shadowColor", a);
      this.setAttr("shadowBlur", n * Math.min(Math.abs(l), Math.abs(d)));
      this.setAttr("shadowOffsetX", s.x * l);
      this.setAttr("shadowOffsetY", s.y * d);
    }
  };
  exports.HitContext = class extends s {
    constructor(t) {
      super(t);
      this._context = t._canvas.getContext("2d", {
        willReadFrequently: true
      });
    }
    _fill(t) {
      this.save();
      this.setAttr("fillStyle", t.colorKey);
      t._fillFuncHit(this);
      this.restore();
    }
    strokeShape(t) {
      if (t.hasHitStroke()) {
        this._stroke(t);
      }
    }
    _stroke(t) {
      if (t.hasHitStroke()) {
        let a = t.getStrokeScaleEnabled();
        if (!a) {
          this.save();
          var e = this.getCanvas().getPixelRatio();
          this.setTransform(e, 0, 0, e, 0, 0);
        }
        this._applyLineCap(t);
        var i = t.hitStrokeWidth();
        var r = i === "auto" ? t.strokeWidth() : i;
        this.setAttr("lineWidth", r);
        this.setAttr("strokeStyle", t.colorKey);
        t._strokeFuncHit(this);
        if (!a) {
          this.restore();
        }
      }
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}