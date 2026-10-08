// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'n' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 's' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 4634
         */
module.exports = function (module, exports, require) {
  exports.Pixelate = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.Pixelate = function (t) {
    var e;
    var i;
    var r;
    var n;
    var s;
    var o;
    var h;
    var l;
    var d;
    var c;
    var u;
    var f;
    var g;
    var p;
    var v = Math.ceil(this.pixelSize());
    var m = t.width;
    var y = t.height;
    var _ = Math.ceil(m / v);
    var b = Math.ceil(y / v);
    var x = t.data;
    if (v <= 0) {
      konvaTransformUtil.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (f = 0; f < _; f += 1) {
      for (g = 0; g < b; g += 1) {
        n = 0;
        s = 0;
        o = 0;
        h = 0;
        d = (l = f * v) + v;
        u = (c = g * v) + v;
        p = 0;
        e = l;
        for (; e < d; e += 1) {
          if (!(e >= m)) {
            for (i = c; i < u; i += 1) {
              if (!(i >= y)) {
                n += x[(r = (m * i + e) * 4) + 0];
                s += x[r + 1];
                o += x[r + 2];
                h += x[r + 3];
                p += 1;
              }
            }
          }
        }
        n /= p;
        s /= p;
        o /= p;
        h /= p;
        e = l;
        for (; e < d; e += 1) {
          if (!(e >= m)) {
            for (i = c; i < u; i += 1) {
              if (!(i >= y)) {
                x[(r = (m * i + e) * 4) + 0] = n;
                x[r + 1] = s;
                x[r + 2] = o;
                x[r + 3] = h;
              }
            }
          }
        }
      }
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "pixelSize", 8, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}