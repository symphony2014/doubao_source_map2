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
         * moduleId: 582917
         */
module.exports = function (module, exports, require) {
  exports.Star = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class o extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      var e = this.innerRadius();
      var i = this.outerRadius();
      var r = this.numPoints();
      t.beginPath();
      t.moveTo(0, 0 - i);
      for (var a = 1; a < r * 2; a++) {
        var n = a % 2 == 0 ? i : e;
        var s = n * Math.sin(a * Math.PI / r);
        var o = n * -1 * Math.cos(a * Math.PI / r);
        t.lineTo(s, o);
      }
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
  exports.Star = o;
  o.prototype.className = "Star";
  o.prototype._centroid = true;
  o.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
  konvaCoreConfig._registerNode(o);
  konvaPropertyFactory.Factory.addGetterSetter(o, "numPoints", 5, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(o, "innerRadius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(o, "outerRadius", 0, konvaPropertyValidators.getNumberValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}