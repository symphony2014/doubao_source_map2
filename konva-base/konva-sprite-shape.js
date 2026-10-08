// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'n' to 'konvaAnimation'
// - Resolved require(294010) to 'konva-animation'
// - Renamed variable 's' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'o' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 96882
         */
module.exports = function (module, exports, require) {
  exports.Sprite = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaAnimation = require("konva-animation") /*id: 294010*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class h extends konvaShapeBase.Shape {
    constructor(t) {
      super(t);
      this._updated = true;
      this.anim = new konvaAnimation.Animation(() => {
        var t = this._updated;
        this._updated = false;
        return t;
      });
      this.on("animationChange.konva", function () {
        this.frameIndex(0);
      });
      this.on("frameIndexChange.konva", function () {
        this._updated = true;
      });
      this.on("frameRateChange.konva", function () {
        if (this.anim.isRunning()) {
          clearInterval(this.interval);
          this._setInterval();
        }
      });
    }
    _sceneFunc(t) {
      var e = this.animation();
      var i = this.frameIndex();
      var r = i * 4;
      var a = this.animations()[e];
      var n = this.frameOffsets();
      var s = a[r + 0];
      var o = a[r + 1];
      var h = a[r + 2];
      var l = a[r + 3];
      var d = this.image();
      if (this.hasFill() || this.hasStroke()) {
        t.beginPath();
        t.rect(0, 0, h, l);
        t.closePath();
        t.fillStrokeShape(this);
      }
      if (d) {
        if (n) {
          var c = n[e];
          var u = i * 2;
          t.drawImage(d, s, o, h, l, c[u + 0], c[u + 1], h, l);
        } else {
          t.drawImage(d, s, o, h, l, 0, 0, h, l);
        }
      }
    }
    _hitFunc(t) {
      var e = this.animation();
      var i = this.frameIndex();
      var r = i * 4;
      var a = this.animations()[e];
      var n = this.frameOffsets();
      var s = a[r + 2];
      var o = a[r + 3];
      t.beginPath();
      if (n) {
        var h = n[e];
        var l = i * 2;
        t.rect(h[l + 0], h[l + 1], s, o);
      } else {
        t.rect(0, 0, s, o);
      }
      t.closePath();
      t.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(true);
    }
    _setInterval() {
      var t = this;
      this.interval = setInterval(function () {
        t._updateIndex();
      }, 1000 / this.frameRate());
    }
    start() {
      if (!this.isRunning()) {
        var t = this.getLayer();
        this.anim.setLayers(t);
        this._setInterval();
        this.anim.start();
      }
    }
    stop() {
      this.anim.stop();
      clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      var t = this.frameIndex();
      var e = this.animation();
      if (t < this.animations()[e].length / 4 - 1) {
        this.frameIndex(t + 1);
      } else {
        this.frameIndex(0);
      }
    }
  }
  exports.Sprite = h;
  h.prototype.className = "Sprite";
  konvaCoreConfig._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "animation");
  konvaPropertyFactory.Factory.addGetterSetter(h, "animations");
  konvaPropertyFactory.Factory.addGetterSetter(h, "frameOffsets");
  konvaPropertyFactory.Factory.addGetterSetter(h, "image");
  konvaPropertyFactory.Factory.addGetterSetter(h, "frameIndex", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "frameRate", 17, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.backCompat(h, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}