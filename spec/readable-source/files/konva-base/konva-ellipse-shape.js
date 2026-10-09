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
         * moduleId: 884045
         */
module.exports = function (module, exports, require) {
  exports.Ellipse = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class o extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      var e = this.radiusX();
      var i = this.radiusY();
      t.beginPath();
      t.save();
      if (e !== i) {
        t.scale(1, i / e);
      }
      t.arc(0, 0, e, 0, Math.PI * 2, false);
      t.restore();
      t.closePath();
      t.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(t) {
      this.radiusX(t / 2);
    }
    setHeight(t) {
      this.radiusY(t / 2);
    }
  }
  exports.Ellipse = o;
  o.prototype.className = "Ellipse";
  o.prototype._centroid = true;
  o.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
  konvaCoreConfig._registerNode(o);
  konvaPropertyFactory.Factory.addComponentsGetterSetter(o, "radius", ["x", "y"]);
  konvaPropertyFactory.Factory.addGetterSetter(o, "radiusX", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(o, "radiusY", 0, konvaPropertyValidators.getNumberValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}