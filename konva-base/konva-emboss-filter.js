// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'n' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 's' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 308792
         */
module.exports = function (module, exports, require) {
  exports.Emboss = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.Emboss = function (t) {
    var e = this.embossStrength() * 10;
    var i = this.embossWhiteLevel() * 255;
    var r = this.embossDirection();
    var a = this.embossBlend();
    var s = 0;
    var o = 0;
    var h = t.data;
    var l = t.width;
    var d = t.height;
    var c = l * 4;
    var u = d;
    switch (r) {
      case "top-left":
        s = -1;
        o = -1;
        break;
      case "top":
        s = -1;
        o = 0;
        break;
      case "top-right":
        s = -1;
        o = 1;
        break;
      case "right":
        s = 0;
        o = 1;
        break;
      case "bottom-right":
        s = 1;
        o = 1;
        break;
      case "bottom":
        s = 1;
        o = 0;
        break;
      case "bottom-left":
        s = 1;
        o = -1;
        break;
      case "left":
        s = 0;
        o = -1;
        break;
      default:
        konvaTransformUtil.Util.error("Unknown emboss direction: " + r);
    }
    do {
      var f = (u - 1) * c;
      var g = s;
      if (u + g < 1) {
        g = 0;
      }
      if (u + g > d) {
        g = 0;
      }
      var p = (u - 1 + g) * l * 4;
      var v = l;
      do {
        var m = f + (v - 1) * 4;
        var y = o;
        if (v + y < 1) {
          y = 0;
        }
        if (v + y > l) {
          y = 0;
        }
        var _ = p + (v - 1 + y) * 4;
        var b = h[m] - h[_];
        var x = h[m + 1] - h[_ + 1];
        var S = h[m + 2] - h[_ + 2];
        var C = b;
        var w = C > 0 ? C : -C;
        var P = S > 0 ? S : -S;
        if ((x > 0 ? x : -x) > w) {
          C = x;
        }
        if (P > w) {
          C = S;
        }
        C *= e;
        if (a) {
          var T = h[m] + C;
          var E = h[m + 1] + C;
          var M = h[m + 2] + C;
          h[m] = T > 255 ? 255 : T < 0 ? 0 : T;
          h[m + 1] = E > 255 ? 255 : E < 0 ? 0 : E;
          h[m + 2] = M > 255 ? 255 : M < 0 ? 0 : M;
        } else {
          var k = i - C;
          if (k < 0) {
            k = 0;
          } else if (k > 255) {
            k = 255;
          }
          h[m] = h[m + 1] = h[m + 2] = k;
        }
      } while (--v);
    } while (--u);
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "embossStrength", 0.5, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "embossWhiteLevel", 0.5, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "embossDirection", "top-left", null, konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "embossBlend", false, null, konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}