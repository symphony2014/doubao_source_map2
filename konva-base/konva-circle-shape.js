// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'n' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 702049
         */
module.exports = function (module, exports, require) {
  exports.Circle = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class o extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      t.beginPath();
      t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
      t.closePath();
      t.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(t) {
      if (this.radius() !== t / 2) {
        this.radius(t / 2);
      }
    }
    setHeight(t) {
      if (this.radius() !== t / 2) {
        this.radius(t / 2);
      }
    }
  }
  exports.Circle = o;
  o.prototype._centroid = true;
  o.prototype.className = "Circle";
  o.prototype._attrsAffectingSize = ["radius"];
  konvaCoreConfig._registerNode(o);
  konvaPropertyFactory.Factory.addGetterSetter(o, "radius", 0, konvaPropertyValidators.getNumberValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}