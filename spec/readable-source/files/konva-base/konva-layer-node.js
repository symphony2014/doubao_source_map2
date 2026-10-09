// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaContainerNode'
// - Resolved require(757034) to 'konva-container-node'
// - Renamed variable 'n' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 's' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'o' to 'konvaCanvasClasses'
// - Resolved require(210164) to 'konva-canvas-classes'
// - Renamed variable 'h' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'l' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'd' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 72393
         */
module.exports = function (module, exports, require) {
  exports.Layer = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaContainerNode = require("konva-container-node") /*id: 757034*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCanvasClasses = require("konva-canvas-classes") /*id: 210164*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  var c = [{
    x: 0,
    y: 0
  }, {
    x: -1,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 1,
    y: 1
  }, {
    x: -1,
    y: 1
  }];
  var u = c.length;
  class f extends konvaContainerNode.Container {
    constructor(t) {
      super(t);
      this.canvas = new konvaCanvasClasses.SceneCanvas();
      this.hitCanvas = new konvaCanvasClasses.HitCanvas({
        pixelRatio: 1
      });
      this._waitingForDraw = false;
      this.on("visibleChange.konva", this._checkVisibility);
      this._checkVisibility();
      this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled);
      this._setSmoothEnabled();
    }
    createPNGStream() {
      return this.canvas._canvas.createPNGStream();
    }
    getCanvas() {
      return this.canvas;
    }
    getNativeCanvasElement() {
      return this.canvas._canvas;
    }
    getHitCanvas() {
      return this.hitCanvas;
    }
    getContext() {
      return this.getCanvas().getContext();
    }
    clear(t) {
      this.getContext().clear(t);
      this.getHitCanvas().getContext().clear(t);
      return this;
    }
    setZIndex(t) {
      super.setZIndex(t);
      var e = this.getStage();
      if (e && e.content) {
        e.content.removeChild(this.getNativeCanvasElement());
        if (t < e.children.length - 1) {
          e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas);
        } else {
          e.content.appendChild(this.getNativeCanvasElement());
        }
      }
      return this;
    }
    moveToTop() {
      konvaCoreNodeBase.Node.prototype.moveToTop.call(this);
      var t = this.getStage();
      if (t && t.content) {
        t.content.removeChild(this.getNativeCanvasElement());
        t.content.appendChild(this.getNativeCanvasElement());
      }
      return true;
    }
    moveUp() {
      if (!konvaCoreNodeBase.Node.prototype.moveUp.call(this)) {
        return false;
      }
      var t = this.getStage();
      return !!t && !!t.content && (t.content.removeChild(this.getNativeCanvasElement()), this.index < t.children.length - 1 ? t.content.insertBefore(this.getNativeCanvasElement(), t.children[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getNativeCanvasElement()), true);
    }
    moveDown() {
      if (konvaCoreNodeBase.Node.prototype.moveDown.call(this)) {
        var t = this.getStage();
        if (t) {
          var e = t.children;
          if (t.content) {
            t.content.removeChild(this.getNativeCanvasElement());
            t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas);
          }
        }
        return true;
      }
      return false;
    }
    moveToBottom() {
      if (konvaCoreNodeBase.Node.prototype.moveToBottom.call(this)) {
        var t = this.getStage();
        if (t) {
          var e = t.children;
          if (t.content) {
            t.content.removeChild(this.getNativeCanvasElement());
            t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas);
          }
        }
        return true;
      }
      return false;
    }
    getLayer() {
      return this;
    }
    remove() {
      var t = this.getNativeCanvasElement();
      konvaCoreNodeBase.Node.prototype.remove.call(this);
      if (t && t.parentNode && konvaTransformUtil.Util._isInDocument(t)) {
        t.parentNode.removeChild(t);
      }
      return this;
    }
    getStage() {
      return this.parent;
    }
    setSize({
      width: t,
      height: e
    }) {
      this.canvas.setSize(t, e);
      this.hitCanvas.setSize(t, e);
      this._setSmoothEnabled();
      return this;
    }
    _validateAdd(t) {
      var e = t.getType();
      if (e !== "Group" && e !== "Shape") {
        konvaTransformUtil.Util.throw("You may only add groups and shapes to a layer.");
      }
    }
    _toKonvaCanvas(t) {
      (t = t || {}).width = t.width || this.getWidth();
      t.height = t.height || this.getHeight();
      t.x = t.x !== undefined ? t.x : this.x();
      t.y = t.y !== undefined ? t.y : this.y();
      return konvaCoreNodeBase.Node.prototype._toKonvaCanvas.call(this, t);
    }
    _checkVisibility() {
      if (this.visible()) {
        this.canvas._canvas.style.display = "block";
      } else {
        this.canvas._canvas.style.display = "none";
      }
    }
    _setSmoothEnabled() {
      this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
      if (this.parent) {
        return this.parent.width();
      }
    }
    setWidth() {
      konvaTransformUtil.Util.warn("Can not change width of layer. Use \"stage.width(value)\" function instead.");
    }
    getHeight() {
      if (this.parent) {
        return this.parent.height();
      }
    }
    setHeight() {
      konvaTransformUtil.Util.warn("Can not change height of layer. Use \"stage.height(value)\" function instead.");
    }
    batchDraw() {
      if (!this._waitingForDraw) {
        this._waitingForDraw = true;
        konvaTransformUtil.Util.requestAnimFrame(() => {
          this.draw();
          this._waitingForDraw = false;
        });
      }
      return this;
    }
    getIntersection(t) {
      if (!this.isListening() || !this.isVisible()) {
        return null;
      }
      var e = 1;
      var i = false;
      while (true) {
        for (let r = 0; r < u; r++) {
          let a = c[r];
          let n = this._getIntersection({
            x: t.x + a.x * e,
            y: t.y + a.y * e
          });
          let s = n.shape;
          if (s) {
            return s;
          }
          i = !!n.antialiased;
          if (!n.antialiased) {
            break;
          }
        }
        if (!i) {
          return null;
        }
        e += 1;
      }
    }
    _getIntersection(t) {
      let e = this.hitCanvas.pixelRatio;
      let i = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data;
      let a = i[3];
      if (a === 255) {
        let t = konvaTransformUtil.Util._rgbToHex(i[0], i[1], i[2]);
        let e = konvaShapeBase.shapes["#" + t];
        if (e) {
          return {
            shape: e
          };
        } else {
          return {
            antialiased: true
          };
        }
      }
      if (a > 0) {
        return {
          antialiased: true
        };
      } else {
        return {};
      }
    }
    drawScene(t, e) {
      var i = this.getLayer();
      var r = t || i && i.getCanvas();
      this._fire("beforeDraw", {
        node: this
      });
      if (this.clearBeforeDraw()) {
        r.getContext().clear();
      }
      konvaContainerNode.Container.prototype.drawScene.call(this, r, e);
      this._fire("draw", {
        node: this
      });
      return this;
    }
    drawHit(t, e) {
      var i = this.getLayer();
      var r = t || i && i.hitCanvas;
      if (i && i.clearBeforeDraw()) {
        i.getHitCanvas().getContext().clear();
      }
      konvaContainerNode.Container.prototype.drawHit.call(this, r, e);
      return this;
    }
    enableHitGraph() {
      this.hitGraphEnabled(true);
      return this;
    }
    disableHitGraph() {
      this.hitGraphEnabled(false);
      return this;
    }
    setHitGraphEnabled(t) {
      konvaTransformUtil.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
      this.listening(t);
    }
    getHitGraphEnabled(t) {
      konvaTransformUtil.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
      return this.listening();
    }
    toggleHitCanvas() {
      if (this.parent && this.parent.content) {
        var t = this.parent;
        if (this.hitCanvas._canvas.parentNode) {
          t.content.removeChild(this.hitCanvas._canvas);
        } else {
          t.content.appendChild(this.hitCanvas._canvas);
        }
      }
    }
    destroy() {
      konvaTransformUtil.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas);
      return super.destroy();
    }
  }
  exports.Layer = f;
  f.prototype.nodeType = "Layer";
  konvaCoreConfig._registerNode(f);
  konvaPropertyFactory.Factory.addGetterSetter(f, "imageSmoothingEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(f, "clearBeforeDraw", true);
  konvaPropertyFactory.Factory.addGetterSetter(f, "hitGraphEnabled", true, konvaPropertyValidators.getBooleanValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}