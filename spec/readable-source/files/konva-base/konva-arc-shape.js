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
         * moduleId: 982675
         */
module.exports = function (module, exports, require) {
  exports.Arc = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig_1 = require("konva-core-config") /*id: 239057*/;
  class h extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      var e = konvaCoreConfig.Konva.getAngle(this.angle());
      var i = this.clockwise();
      t.beginPath();
      t.arc(0, 0, this.outerRadius(), 0, e, i);
      t.arc(0, 0, this.innerRadius(), e, 0, !i);
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
    getSelfRect() {
      let t = this.innerRadius();
      let e = this.outerRadius();
      let i = this.clockwise();
      let r = konvaCoreConfig.Konva.getAngle(i ? 360 - this.angle() : this.angle());
      let a = Math.cos(Math.min(r, Math.PI));
      let s = Math.sin(Math.min(Math.max(Math.PI, r), Math.PI * 3 / 2));
      let o = Math.sin(Math.min(r, Math.PI / 2));
      let h = a * (a > 0 ? t : e);
      let l = s * (s > 0 ? t : e);
      let d = o * (o > 0 ? e : t);
      return {
        x: h,
        y: i ? d * -1 : l,
        width: +e - h,
        height: d - l
      };
    }
  }
  exports.Arc = h;
  h.prototype._centroid = true;
  h.prototype.className = "Arc";
  h.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
  konvaCoreConfig_1._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "innerRadius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "outerRadius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "angle", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "clockwise", false, konvaPropertyValidators.getBooleanValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}