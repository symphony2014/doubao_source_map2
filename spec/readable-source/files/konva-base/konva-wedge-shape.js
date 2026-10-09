// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'n' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 's' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'o' to 'konvaCoreConfig_1'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 261893
         */
module.exports = function (module, exports, require) {
  exports.Wedge = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig_1 = require("konva-core-config") /*id: 239057*/;
  class h extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      t.beginPath();
      t.arc(0, 0, this.radius(), 0, konvaCoreConfig.Konva.getAngle(this.angle()), this.clockwise());
      t.lineTo(0, 0);
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
      this.radius(t / 2);
    }
    setHeight(t) {
      this.radius(t / 2);
    }
  }
  exports.Wedge = h;
  h.prototype.className = "Wedge";
  h.prototype._centroid = true;
  h.prototype._attrsAffectingSize = ["radius"];
  konvaCoreConfig_1._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "radius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "angle", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "clockwise", false);
  konvaPropertyFactory.Factory.backCompat(h, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}