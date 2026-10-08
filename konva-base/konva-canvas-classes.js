// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'n' to 'konvaCanvasContext'
// - Resolved require(706660) to 'konva-canvas-context'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'o' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'h' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 210164
         */
module.exports = function (module, exports, require) {
  var r;
  exports.HitCanvas = exports.SceneCanvas = exports.Canvas = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaCanvasContext = require("konva-canvas-context") /*id: 706660*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  class l {
    constructor(t) {
      this.pixelRatio = 1;
      this.width = 0;
      this.height = 0;
      this.isCache = false;
      var e = (t || {}).pixelRatio || konvaCoreConfig.Konva.pixelRatio || function () {
        if (r) {
          return r;
        }
        var t = konvaTransformUtil.Util.createCanvasElement();
        var e = t.getContext("2d");
        r = (konvaCoreConfig.Konva._global.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1);
        konvaTransformUtil.Util.releaseCanvas(t);
        return r;
      }();
      this.pixelRatio = e;
      this._canvas = konvaTransformUtil.Util.createCanvasElement();
      this._canvas.style.padding = "0";
      this._canvas.style.margin = "0";
      this._canvas.style.border = "0";
      this._canvas.style.background = "transparent";
      this._canvas.style.position = "absolute";
      this._canvas.style.top = "0";
      this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(t) {
      var e = this.pixelRatio;
      this.pixelRatio = t;
      this.setSize(this.getWidth() / e, this.getHeight() / e);
    }
    setWidth(t) {
      this.width = this._canvas.width = t * this.pixelRatio;
      this._canvas.style.width = t + "px";
      var e = this.pixelRatio;
      this.getContext()._context.scale(e, e);
    }
    setHeight(t) {
      this.height = this._canvas.height = t * this.pixelRatio;
      this._canvas.style.height = t + "px";
      var e = this.pixelRatio;
      this.getContext()._context.scale(e, e);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(t, e) {
      this.setWidth(t || 0);
      this.setHeight(e || 0);
    }
    toDataURL(t, e) {
      try {
        return this._canvas.toDataURL(t, e);
      } catch (t) {
        try {
          return this._canvas.toDataURL();
        } catch (t) {
          konvaTransformUtil.Util.error("Unable to get data URL. " + t.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          return "";
        }
      }
    }
  }
  exports.Canvas = l;
  konvaPropertyFactory.Factory.addGetterSetter(l, "pixelRatio", undefined, konvaPropertyValidators.getNumberValidator());
  exports.SceneCanvas = class extends l {
    constructor(t = {
      width: 0,
      height: 0,
      willReadFrequently: false
    }) {
      super(t);
      this.context = new konvaCanvasContext.SceneContext(this, {
        willReadFrequently: t.willReadFrequently
      });
      this.setSize(t.width, t.height);
    }
  };
  exports.HitCanvas = class extends l {
    constructor(t = {
      width: 0,
      height: 0
    }) {
      super(t);
      this.hitCanvas = true;
      this.context = new konvaCanvasContext.HitContext(this);
      this.setSize(t.width, t.height);
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}