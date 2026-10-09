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
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 916018
         */
module.exports = function (module, exports, require) {
  exports.Image = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  class h extends konvaShapeBase.Shape {
    constructor(t) {
      super(t);
      this.on("imageChange.konva", () => {
        this._setImageLoad();
      });
      this._setImageLoad();
    }
    _setImageLoad() {
      let t = this.image();
      if ((!t || !t.complete) && (!t || t.readyState !== 4) && t && t.addEventListener) {
        t.addEventListener("load", () => {
          this._requestDraw();
        });
      }
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(true);
    }
    _sceneFunc(t) {
      let e;
      let i = this.getWidth();
      let a = this.getHeight();
      let n = this.cornerRadius();
      let s = this.attrs.image;
      if (s) {
        let t = this.attrs.cropWidth;
        let r = this.attrs.cropHeight;
        e = t && r ? [s, this.cropX(), this.cropY(), t, r, 0, 0, i, a] : [s, 0, 0, i, a];
      }
      if (this.hasFill() || this.hasStroke() || n) {
        t.beginPath();
        if (n) {
          konvaTransformUtil.Util.drawRoundedRectPath(t, i, a, n);
        } else {
          t.rect(0, 0, i, a);
        }
        t.closePath();
        t.fillStrokeShape(this);
      }
      if (s) {
        if (n) {
          t.clip();
        }
        t.drawImage.apply(t, e);
      }
    }
    _hitFunc(t) {
      var e = this.width();
      var i = this.height();
      var a = this.cornerRadius();
      t.beginPath();
      if (a) {
        konvaTransformUtil.Util.drawRoundedRectPath(t, e, i, a);
      } else {
        t.rect(0, 0, e, i);
      }
      t.closePath();
      t.fillStrokeShape(this);
    }
    getWidth() {
      return this.attrs.width ?? this.image()?.width;
    }
    getHeight() {
      return this.attrs.height ?? this.image()?.height;
    }
    static fromURL(t, e, i = null) {
      var a = konvaTransformUtil.Util.createImageElement();
      a.onload = function () {
        e(new h({
          image: a
        }));
      };
      a.onerror = i;
      a.crossOrigin = "Anonymous";
      a.src = t;
    }
  }
  exports.Image = h;
  h.prototype.className = "Image";
  konvaCoreConfig._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "cornerRadius", 0, konvaPropertyValidators.getNumberOrArrayOfNumbersValidator(4));
  konvaPropertyFactory.Factory.addGetterSetter(h, "image");
  konvaPropertyFactory.Factory.addComponentsGetterSetter(h, "crop", ["x", "y", "width", "height"]);
  konvaPropertyFactory.Factory.addGetterSetter(h, "cropX", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "cropY", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "cropWidth", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "cropHeight", 0, konvaPropertyValidators.getNumberValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}