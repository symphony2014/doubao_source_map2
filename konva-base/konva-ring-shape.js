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
         * moduleId: 154995
         */
module.exports = function (module, exports, require) {
  exports.Ring = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  var o = Math.PI * 2;
  class h extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      t.beginPath();
      t.arc(0, 0, this.innerRadius(), 0, o, false);
      t.moveTo(this.outerRadius(), 0);
      t.arc(0, 0, this.outerRadius(), o, 0, true);
      t.closePath();
      t.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(t) {
      this.outerRadius(t / 2);
    }
    setHeight(t) {
      this.outerRadius(t / 2);
    }
  }
  exports.Ring = h;
  h.prototype.className = "Ring";
  h.prototype._centroid = true;
  h.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
  konvaCoreConfig._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "innerRadius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "outerRadius", 0, konvaPropertyValidators.getNumberValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}