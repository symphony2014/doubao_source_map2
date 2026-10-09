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
         * moduleId: 269346
         */
module.exports = function (module, exports, require) {
  exports.RegularPolygon = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class o extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      let e = this._getPoints();
      t.beginPath();
      t.moveTo(e[0].x, e[0].y);
      for (var i = 1; i < e.length; i++) {
        t.lineTo(e[i].x, e[i].y);
      }
      t.closePath();
      t.fillStrokeShape(this);
    }
    _getPoints() {
      let t = this.attrs.sides;
      let e = this.attrs.radius || 0;
      let i = [];
      for (var r = 0; r < t; r++) {
        i.push({
          x: e * Math.sin(r * 2 * Math.PI / t),
          y: e * -1 * Math.cos(r * 2 * Math.PI / t)
        });
      }
      return i;
    }
    getSelfRect() {
      let t = this._getPoints();
      var e = t[0].x;
      var i = t[0].y;
      var r = t[0].x;
      var a = t[0].y;
      t.forEach(t => {
        e = Math.min(e, t.x);
        i = Math.max(i, t.x);
        r = Math.min(r, t.y);
        a = Math.max(a, t.y);
      });
      return {
        x: e,
        y: r,
        width: i - e,
        height: a - r
      };
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
  exports.RegularPolygon = o;
  o.prototype.className = "RegularPolygon";
  o.prototype._centroid = true;
  o.prototype._attrsAffectingSize = ["radius"];
  konvaCoreConfig._registerNode(o);
  konvaPropertyFactory.Factory.addGetterSetter(o, "radius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(o, "sides", 0, konvaPropertyValidators.getNumberValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}