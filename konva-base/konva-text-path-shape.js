// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'n' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 's' to 'konvaPathShape'
// - Resolved require(789339) to 'konva-path-shape'
// - Renamed variable 'o' to 'konvaTextShape'
// - Resolved require(365006) to 'konva-text-shape'
// - Renamed variable 'h' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'l' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 34470
         */
module.exports = function (module, exports, require) {
  exports.TextPath = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPathShape = require("konva-path-shape") /*id: 789339*/;
  let konvaTextShape = require("konva-text-shape") /*id: 365006*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  var d = "normal";
  function c(t) {
    t.fillText(this.partialText, 0, 0);
  }
  function u(t) {
    t.strokeText(this.partialText, 0, 0);
  }
  class f extends konvaShapeBase.Shape {
    constructor(t) {
      super(t);
      this.dummyCanvas = konvaTransformUtil.Util.createCanvasElement();
      this.dataArray = [];
      this._readDataAttribute();
      this.on("dataChange.konva", function () {
        this._readDataAttribute();
        this._setTextData();
      });
      this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData);
      this._setTextData();
    }
    _getTextPathLength() {
      return konvaPathShape.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(t) {
      if (!this.attrs.data || t - 1 > this.pathLength) {
        return null;
      } else {
        return konvaPathShape.Path.getPointAtLengthOfDataArray(t, this.dataArray);
      }
    }
    _readDataAttribute() {
      this.dataArray = konvaPathShape.Path.parsePathData(this.attrs.data);
      this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(t) {
      t.setAttr("font", this._getContextFont());
      t.setAttr("textBaseline", this.textBaseline());
      t.setAttr("textAlign", "left");
      t.save();
      var e = this.textDecoration();
      var i = this.fill();
      var r = this.fontSize();
      var a = this.glyphInfo;
      if (e === "underline") {
        t.beginPath();
      }
      for (var n = 0; n < a.length; n++) {
        t.save();
        var s = a[n].p0;
        t.translate(s.x, s.y);
        t.rotate(a[n].rotation);
        this.partialText = a[n].text;
        t.fillStrokeShape(this);
        if (e === "underline") {
          if (n === 0) {
            t.moveTo(0, r / 2 + 1);
          }
          t.lineTo(r, r / 2 + 1);
        }
        t.restore();
      }
      if (e === "underline") {
        t.strokeStyle = i;
        t.lineWidth = r / 20;
        t.stroke();
      }
      t.restore();
    }
    _hitFunc(t) {
      t.beginPath();
      var e = this.glyphInfo;
      if (e.length >= 1) {
        var i = e[0].p0;
        t.moveTo(i.x, i.y);
      }
      for (var r = 0; r < e.length; r++) {
        var a = e[r].p1;
        t.lineTo(a.x, a.y);
      }
      t.setAttr("lineWidth", this.fontSize());
      t.setAttr("strokeStyle", this.colorKey);
      t.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      konvaTransformUtil.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
      return this.textHeight;
    }
    setText(t) {
      return konvaTextShape.Text.prototype.setText.call(this, t);
    }
    _getContextFont() {
      return konvaTextShape.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(t) {
      var e = this.dummyCanvas.getContext("2d");
      e.save();
      e.font = this._getContextFont();
      var i = e.measureText(t);
      e.restore();
      return {
        width: i.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      let {
        width: t,
        height: e
      } = this._getTextSize(this.attrs.text);
      this.textWidth = t;
      this.textHeight = e;
      this.glyphInfo = [];
      if (!this.attrs.data) {
        return null;
      }
      let i = this.letterSpacing();
      let r = this.align();
      let a = this.kerningFunc();
      let n = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
      let h = 0;
      if (r === "center") {
        h = Math.max(0, this.pathLength / 2 - n / 2);
      }
      if (r === "right") {
        h = Math.max(0, this.pathLength - n);
      }
      let l = konvaTextShape.stringToArray(this.text());
      let d = h;
      for (var c = 0; c < l.length; c++) {
        let t = this._getPointAtLength(d);
        if (!t) {
          return;
        }
        let e = this._getTextSize(l[c]).width + i;
        if (l[c] === " " && r === "justify") {
          let t = this.text().split(" ").length - 1;
          e += (this.pathLength - n) / t;
        }
        let o = this._getPointAtLength(d + e);
        if (!o) {
          return;
        }
        let h = konvaPathShape.Path.getLineLength(t.x, t.y, o.x, o.y);
        let u = 0;
        if (a) {
          try {
            u = a(l[c - 1], l[c]) * this.fontSize();
          } catch (t) {
            u = 0;
          }
        }
        t.x += u;
        o.x += u;
        this.textWidth += u;
        let f = konvaPathShape.Path.getPointOnLine(u + h / 2, t.x, t.y, o.x, o.y);
        let g = Math.atan2(o.y - t.y, o.x - t.x);
        this.glyphInfo.push({
          transposeX: f.x,
          transposeY: f.y,
          text: l[c],
          rotation: g,
          p0: t,
          p1: o
        });
        d += e;
      }
    }
    getSelfRect() {
      if (!this.glyphInfo.length) {
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      var t;
      var e;
      var i = [];
      this.glyphInfo.forEach(function (t) {
        i.push(t.p0.x);
        i.push(t.p0.y);
        i.push(t.p1.x);
        i.push(t.p1.y);
      });
      var r = i[0] || 0;
      var a = i[0] || 0;
      var n = i[1] || 0;
      var s = i[1] || 0;
      var o = 0;
      for (; o < i.length / 2; o++) {
        t = i[o * 2];
        e = i[o * 2 + 1];
        r = Math.min(r, t);
        a = Math.max(a, t);
        n = Math.min(n, e);
        s = Math.max(s, e);
      }
      var h = this.fontSize();
      return {
        x: r - h / 2,
        y: n - h / 2,
        width: a - r + h,
        height: s - n + h
      };
    }
    destroy() {
      konvaTransformUtil.Util.releaseCanvas(this.dummyCanvas);
      return super.destroy();
    }
  }
  exports.TextPath = f;
  f.prototype._fillFunc = c;
  f.prototype._strokeFunc = u;
  f.prototype._fillFuncHit = c;
  f.prototype._strokeFuncHit = u;
  f.prototype.className = "TextPath";
  f.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
  konvaCoreConfig._registerNode(f);
  konvaPropertyFactory.Factory.addGetterSetter(f, "data");
  konvaPropertyFactory.Factory.addGetterSetter(f, "fontFamily", "Arial");
  konvaPropertyFactory.Factory.addGetterSetter(f, "fontSize", 12, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(f, "fontStyle", d);
  konvaPropertyFactory.Factory.addGetterSetter(f, "align", "left");
  konvaPropertyFactory.Factory.addGetterSetter(f, "letterSpacing", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(f, "textBaseline", "middle");
  konvaPropertyFactory.Factory.addGetterSetter(f, "fontVariant", d);
  konvaPropertyFactory.Factory.addGetterSetter(f, "text", "");
  konvaPropertyFactory.Factory.addGetterSetter(f, "textDecoration", null);
  konvaPropertyFactory.Factory.addGetterSetter(f, "kerningFunc", null);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}