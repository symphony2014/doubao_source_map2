// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'n' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'o' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'h' to 'konvaCoreConfig_1'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 365006
         */
module.exports = function (module, exports, require) {
  exports.Text = exports.stringToArray = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig_1 = require("konva-core-config") /*id: 239057*/;
  function l(t) {
    return Array.from(t);
  }
  exports.stringToArray = l;
  var d;
  var c = "auto";
  var u = "inherit";
  var f = "justify";
  var g = "left";
  var p = "middle";
  var v = "normal";
  var m = "none";
  var y = ["direction", "fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "verticalAlign", "lineHeight", "text", "width", "height", "wrap", "ellipsis", "letterSpacing"];
  var _ = y.length;
  function b() {
    return d ||= konvaTransformUtil.Util.createCanvasElement().getContext("2d");
  }
  class x extends konvaShapeBase.Shape {
    constructor(t) {
      var e;
      super(((e = (e = t) || {}).fillLinearGradientColorStops || e.fillRadialGradientColorStops || e.fillPatternImage || (e.fill = e.fill || "black"), e));
      this._partialTextX = 0;
      this._partialTextY = 0;
      for (var i = 0; i < _; i++) {
        this.on(y[i] + "Change.konva", this._setTextData);
      }
      this._setTextData();
    }
    _sceneFunc(t) {
      var e = this.textArr;
      var i = e.length;
      if (this.text()) {
        var r;
        var a = this.padding();
        var n = this.fontSize();
        var o = this.lineHeight() * n;
        var h = this.verticalAlign();
        var d = this.direction();
        var c = 0;
        var v = this.align();
        var m = this.getWidth();
        var y = this.letterSpacing();
        var _ = this.fill();
        var b = this.textDecoration();
        var x = b.indexOf("underline") !== -1;
        var S = b.indexOf("line-through") !== -1;
        d = d === u ? t.direction : d;
        var C = o / 2;
        var w = p;
        if (konvaCoreConfig.Konva._fixTextRendering) {
          var P = this.measureSize("M");
          w = "alphabetic";
          C = (P.fontBoundingBoxAscent - P.fontBoundingBoxDescent) / 2 + o / 2;
        }
        var T = 0;
        var E = 0;
        if (d === "rtl") {
          t.setAttr("direction", d);
        }
        t.setAttr("font", this._getContextFont());
        t.setAttr("textBaseline", w);
        t.setAttr("textAlign", g);
        if (h === p) {
          c = (this.getHeight() - i * o - a * 2) / 2;
        } else if (h === "bottom") {
          c = this.getHeight() - i * o - a * 2;
        }
        t.translate(a, c + a);
        r = 0;
        for (; r < i; r++) {
          var M;
          var k;
          var A;
          var T = 0;
          var E = 0;
          var O = e[r];
          var F = O.text;
          var D = O.width;
          var R = O.lastInParagraph;
          t.save();
          if (v === "right") {
            T += m - D - a * 2;
          } else if (v === "center") {
            T += (m - D - a * 2) / 2;
          }
          if (x) {
            t.save();
            t.beginPath();
            t.moveTo(T, C + E + Math.round(n / 2));
            k = (M = F.split(" ").length - 1) == 0;
            A = v !== f || R ? D : m - a * 2;
            t.lineTo(T + Math.round(A), C + E + Math.round(n / 2));
            t.lineWidth = n / 15;
            let e = this._getLinearGradient();
            t.strokeStyle = e || _;
            t.stroke();
            t.restore();
          }
          if (S) {
            t.save();
            t.beginPath();
            t.moveTo(T, C + E);
            k = (M = F.split(" ").length - 1) == 0;
            A = v === f && R && !k ? m - a * 2 : D;
            t.lineTo(T + Math.round(A), C + E);
            t.lineWidth = n / 15;
            let e = this._getLinearGradient();
            t.strokeStyle = e || _;
            t.stroke();
            t.restore();
          }
          if (d !== "rtl" && (y !== 0 || v === f)) {
            M = F.split(" ").length - 1;
            var N = l(F);
            var G = 0;
            for (; G < N.length; G++) {
              var I = N[G];
              if (I === " " && !R && v === f) {
                T += (m - a * 2 - D) / M;
              }
              this._partialTextX = T;
              this._partialTextY = C + E;
              this._partialText = I;
              t.fillStrokeShape(this);
              T += this.measureSize(I).width + y;
            }
          } else {
            if (y !== 0) {
              t.setAttr("letterSpacing", `${y}px`);
            }
            this._partialTextX = T;
            this._partialTextY = C + E;
            this._partialText = F;
            t.fillStrokeShape(this);
          }
          t.restore();
          if (i > 1) {
            C += o;
          }
        }
      }
    }
    _hitFunc(t) {
      var e = this.getWidth();
      var i = this.getHeight();
      t.beginPath();
      t.rect(0, 0, e, i);
      t.closePath();
      t.fillStrokeShape(this);
    }
    setText(t) {
      var e = konvaTransformUtil.Util._isString(t) ? t : t == null ? "" : t + "";
      this._setAttr("text", e);
      return this;
    }
    getWidth() {
      if (this.attrs.width === c || this.attrs.width === undefined) {
        return this.getTextWidth() + this.padding() * 2;
      } else {
        return this.attrs.width;
      }
    }
    getHeight() {
      if (this.attrs.height === c || this.attrs.height === undefined) {
        return this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2;
      } else {
        return this.attrs.height;
      }
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      konvaTransformUtil.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
      return this.textHeight;
    }
    measureSize(t) {
      var e;
      var i = b();
      var r = this.fontSize();
      i.save();
      i.font = this._getContextFont();
      e = i.measureText(t);
      i.restore();
      return {
        actualBoundingBoxAscent: e.actualBoundingBoxAscent,
        actualBoundingBoxDescent: e.actualBoundingBoxDescent,
        actualBoundingBoxLeft: e.actualBoundingBoxLeft,
        actualBoundingBoxRight: e.actualBoundingBoxRight,
        alphabeticBaseline: e.alphabeticBaseline,
        emHeightAscent: e.emHeightAscent,
        emHeightDescent: e.emHeightDescent,
        fontBoundingBoxAscent: e.fontBoundingBoxAscent,
        fontBoundingBoxDescent: e.fontBoundingBoxDescent,
        hangingBaseline: e.hangingBaseline,
        ideographicBaseline: e.ideographicBaseline,
        width: e.width,
        height: r
      };
    }
    _getContextFont() {
      return this.fontStyle() + " " + this.fontVariant() + " " + this.fontSize() + "px " + this.fontFamily().split(",").map(t => {
        let e = (t = t.trim()).indexOf(" ") >= 0;
        let i = t.indexOf("\"") >= 0 || t.indexOf("'") >= 0;
        if (e && !i) {
          t = `"${t}"`;
        }
        return t;
      }).join(", ");
    }
    _addTextLine(t) {
      if (this.align() === f) {
        t = t.trim();
      }
      var e = this._getTextWidth(t);
      return this.textArr.push({
        text: t,
        width: e,
        lastInParagraph: false
      });
    }
    _getTextWidth(t) {
      var e = this.letterSpacing();
      var i = t.length;
      return b().measureText(t).width + (i ? e * (i - 1) : 0);
    }
    _setTextData() {
      var t = this.text().split("\n");
      var e = +this.fontSize();
      var i = 0;
      var r = this.lineHeight() * e;
      var a = this.attrs.width;
      var n = this.attrs.height;
      var s = a !== c && a !== undefined;
      var o = n !== c && n !== undefined;
      var h = this.padding();
      var l = a - h * 2;
      var d = n - h * 2;
      var u = 0;
      var f = this.wrap();
      var g = f !== "char" && f !== m;
      var p = this.ellipsis();
      this.textArr = [];
      b().font = this._getContextFont();
      var v = p ? this._getTextWidth("…") : 0;
      var y = 0;
      var _ = t.length;
      for (; y < _; ++y) {
        var x = t[y];
        var S = this._getTextWidth(x);
        if (s && S > l) {
          while (x.length > 0) {
            var C = 0;
            var w = x.length;
            var P = "";
            var T = 0;
            while (C < w) {
              var E = C + w >>> 1;
              var M = x.slice(0, E + 1);
              var k = this._getTextWidth(M) + v;
              if (k <= l) {
                C = E + 1;
                P = M;
                T = k;
              } else {
                w = E;
              }
            }
            if (P) {
              if (g) {
                var A;
                var O = x[P.length];
                if ((A = (O === " " || O === "-") && T <= l ? P.length : Math.max(P.lastIndexOf(" "), P.lastIndexOf("-")) + 1) > 0) {
                  C = A;
                  P = P.slice(0, C);
                  T = this._getTextWidth(P);
                }
              }
              P = P.trimRight();
              this._addTextLine(P);
              i = Math.max(i, T);
              u += r;
              if (this._shouldHandleEllipsis(u)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if ((x = (x = x.slice(C)).trimLeft()).length > 0 && (S = this._getTextWidth(x)) <= l) {
                this._addTextLine(x);
                u += r;
                i = Math.max(i, S);
                break;
              }
            } else {
              break;
            }
          }
        } else {
          this._addTextLine(x);
          u += r;
          i = Math.max(i, S);
          if (this._shouldHandleEllipsis(u) && y < _ - 1) {
            this._tryToAddEllipsisToLastLine();
          }
        }
        if (this.textArr[this.textArr.length - 1]) {
          this.textArr[this.textArr.length - 1].lastInParagraph = true;
        }
        if (o && u + r > d) {
          break;
        }
      }
      this.textHeight = e;
      this.textWidth = i;
    }
    _shouldHandleEllipsis(t) {
      var e = +this.fontSize();
      var i = this.lineHeight() * e;
      var r = this.attrs.height;
      var a = this.padding();
      return this.wrap() === m || r !== c && r !== undefined && t + i > r - a * 2;
    }
    _tryToAddEllipsisToLastLine() {
      var t = this.attrs.width;
      var e = this.padding();
      var i = this.ellipsis();
      var r = this.textArr[this.textArr.length - 1];
      if (r && i) {
        if (t !== c && t !== undefined && !(this._getTextWidth(r.text + "…") < t - e * 2)) {
          r.text = r.text.slice(0, r.text.length - 3);
        }
        this.textArr.splice(this.textArr.length - 1, 1);
        this._addTextLine(r.text + "…");
      }
    }
    getStrokeScaleEnabled() {
      return true;
    }
    _useBufferCanvas() {
      let t = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1;
      let e = this.hasShadow();
      return !!t && !!e || super._useBufferCanvas();
    }
  }
  exports.Text = x;
  x.prototype._fillFunc = function (t) {
    t.fillText(this._partialText, this._partialTextX, this._partialTextY);
  };
  x.prototype._strokeFunc = function (t) {
    t.setAttr("miterLimit", 2);
    t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  };
  x.prototype.className = "Text";
  x.prototype._attrsAffectingSize = ["text", "fontSize", "padding", "wrap", "lineHeight", "letterSpacing"];
  konvaCoreConfig_1._registerNode(x);
  konvaPropertyFactory.Factory.overWriteSetter(x, "width", konvaPropertyValidators.getNumberOrAutoValidator());
  konvaPropertyFactory.Factory.overWriteSetter(x, "height", konvaPropertyValidators.getNumberOrAutoValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "direction", u);
  konvaPropertyFactory.Factory.addGetterSetter(x, "fontFamily", "Arial");
  konvaPropertyFactory.Factory.addGetterSetter(x, "fontSize", 12, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "fontStyle", v);
  konvaPropertyFactory.Factory.addGetterSetter(x, "fontVariant", v);
  konvaPropertyFactory.Factory.addGetterSetter(x, "padding", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "align", g);
  konvaPropertyFactory.Factory.addGetterSetter(x, "verticalAlign", "top");
  konvaPropertyFactory.Factory.addGetterSetter(x, "lineHeight", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "wrap", "word");
  konvaPropertyFactory.Factory.addGetterSetter(x, "ellipsis", false, konvaPropertyValidators.getBooleanValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "letterSpacing", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "text", "", konvaPropertyValidators.getStringValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "textDecoration", "");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}