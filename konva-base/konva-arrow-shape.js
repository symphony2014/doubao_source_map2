// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaLineShape'
// - Resolved require(542576) to 'konva-line-shape'
// - Renamed variable 'n' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'o' to 'konvaPathShape'
// - Resolved require(789339) to 'konva-path-shape'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 129538
         */
module.exports = function (module, exports, require) {
  exports.Arrow = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaLineShape = require("konva-line-shape") /*id: 542576*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPathShape = require("konva-path-shape") /*id: 789339*/;
  class h extends konvaLineShape.Line {
    _sceneFunc(t) {
      super._sceneFunc(t);
      var e;
      var i;
      var r = Math.PI * 2;
      var a = this.points();
      var n = a;
      var s = this.tension() !== 0 && a.length > 4;
      if (s) {
        n = this.getTensionPoints();
      }
      var h = this.pointerLength();
      var l = a.length;
      if (s) {
        let t = [n[n.length - 4], n[n.length - 3], n[n.length - 2], n[n.length - 1], a[l - 2], a[l - 1]];
        let r = konvaPathShape.Path.calcLength(n[n.length - 4], n[n.length - 3], "C", t);
        let s = konvaPathShape.Path.getPointOnQuadraticBezier(Math.min(1, 1 - h / r), t[0], t[1], t[2], t[3], t[4], t[5]);
        e = a[l - 2] - s.x;
        i = a[l - 1] - s.y;
      } else {
        e = a[l - 2] - a[l - 4];
        i = a[l - 1] - a[l - 3];
      }
      var d = (Math.atan2(i, e) + r) % r;
      var c = this.pointerWidth();
      if (this.pointerAtEnding()) {
        t.save();
        t.beginPath();
        t.translate(a[l - 2], a[l - 1]);
        t.rotate(d);
        t.moveTo(0, 0);
        t.lineTo(-h, c / 2);
        t.lineTo(-h, -c / 2);
        t.closePath();
        t.restore();
        this.__fillStroke(t);
      }
      if (this.pointerAtBeginning()) {
        t.save();
        t.beginPath();
        t.translate(a[0], a[1]);
        if (s) {
          e = (n[0] + n[2]) / 2 - a[0];
          i = (n[1] + n[3]) / 2 - a[1];
        } else {
          e = a[2] - a[0];
          i = a[3] - a[1];
        }
        t.rotate((Math.atan2(-i, -e) + r) % r);
        t.moveTo(0, 0);
        t.lineTo(-h, c / 2);
        t.lineTo(-h, -c / 2);
        t.closePath();
        t.restore();
        this.__fillStroke(t);
      }
    }
    __fillStroke(t) {
      var e = this.dashEnabled();
      if (e) {
        this.attrs.dashEnabled = false;
        t.setLineDash([]);
      }
      t.fillStrokeShape(this);
      if (e) {
        this.attrs.dashEnabled = true;
      }
    }
    getSelfRect() {
      let t = super.getSelfRect();
      let e = this.pointerWidth() / 2;
      return {
        x: t.x - e,
        y: t.y - e,
        width: t.width + e * 2,
        height: t.height + e * 2
      };
    }
  }
  exports.Arrow = h;
  h.prototype.className = "Arrow";
  konvaCoreConfig._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "pointerLength", 10, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "pointerWidth", 10, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(h, "pointerAtBeginning", false);
  konvaPropertyFactory.Factory.addGetterSetter(h, "pointerAtEnding", true);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}