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
         * moduleId: 542576
         */
module.exports = function (module, exports, require) {
  exports.Line = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  function o(t, e, i, r, a, n, s) {
    var o = Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - e, 2));
    var h = Math.sqrt(Math.pow(a - i, 2) + Math.pow(n - r, 2));
    var l = s * o / (o + h);
    var d = s * h / (o + h);
    return [i - l * (a - t), r - l * (n - e), i + d * (a - t), r + d * (n - e)];
  }
  function h(t, e) {
    var i;
    var r;
    var a = t.length;
    var n = [];
    for (i = 2; i < a - 2; i += 2) {
      if (!isNaN((r = o(t[i - 2], t[i - 1], t[i], t[i + 1], t[i + 2], t[i + 3], e))[0])) {
        n.push(r[0]);
        n.push(r[1]);
        n.push(t[i]);
        n.push(t[i + 1]);
        n.push(r[2]);
        n.push(r[3]);
      }
    }
    return n;
  }
  class l extends konvaShapeBase.Shape {
    constructor(t) {
      super(t);
      this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function () {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(t) {
      var e;
      var i;
      var r;
      var a = this.points();
      var n = a.length;
      var s = this.tension();
      var o = this.closed();
      var h = this.bezier();
      if (n) {
        t.beginPath();
        t.moveTo(a[0], a[1]);
        if (s !== 0 && n > 4) {
          i = (e = this.getTensionPoints()).length;
          r = !o * 4;
          if (!o) {
            t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
          }
          while (r < i - 2) {
            t.bezierCurveTo(e[r++], e[r++], e[r++], e[r++], e[r++], e[r++]);
          }
          if (!o) {
            t.quadraticCurveTo(e[i - 2], e[i - 1], a[n - 2], a[n - 1]);
          }
        } else if (h) {
          for (r = 2; r < n;) {
            t.bezierCurveTo(a[r++], a[r++], a[r++], a[r++], a[r++], a[r++]);
          }
        } else {
          for (r = 2; r < n; r += 2) {
            t.lineTo(a[r], a[r + 1]);
          }
        }
        if (o) {
          t.closePath();
          t.fillStrokeShape(this);
        } else {
          t.strokeShape(this);
        }
      }
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      if (this.closed()) {
        return this._getTensionPointsClosed();
      } else {
        return h(this.points(), this.tension());
      }
    }
    _getTensionPointsClosed() {
      var t = this.points();
      var e = t.length;
      var i = this.tension();
      var r = o(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i);
      var a = o(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i);
      var n = h(t, i);
      return [r[2], r[3]].concat(n).concat([a[0], a[1], t[e - 2], t[e - 1], a[2], a[3], r[0], r[1], t[0], t[1]]);
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      var t;
      var e;
      var i = this.points();
      if (i.length < 4) {
        return {
          x: i[0] || 0,
          y: i[1] || 0,
          width: 0,
          height: 0
        };
      }
      var r = (i = this.tension() !== 0 ? [i[0], i[1], ...this._getTensionPoints(), i[i.length - 2], i[i.length - 1]] : this.points())[0];
      var a = i[0];
      var n = i[1];
      var s = i[1];
      var o = 0;
      for (; o < i.length / 2; o++) {
        t = i[o * 2];
        e = i[o * 2 + 1];
        r = Math.min(r, t);
        a = Math.max(a, t);
        n = Math.min(n, e);
        s = Math.max(s, e);
      }
      return {
        x: r,
        y: n,
        width: a - r,
        height: s - n
      };
    }
  }
  exports.Line = l;
  l.prototype.className = "Line";
  l.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
  konvaCoreConfig._registerNode(l);
  konvaPropertyFactory.Factory.addGetterSetter(l, "closed", false);
  konvaPropertyFactory.Factory.addGetterSetter(l, "bezier", false);
  konvaPropertyFactory.Factory.addGetterSetter(l, "tension", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(l, "points", [], konvaPropertyValidators.getNumberArrayValidator());
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}