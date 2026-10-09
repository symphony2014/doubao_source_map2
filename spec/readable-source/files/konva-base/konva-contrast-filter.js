// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'n' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 266438
         */
module.exports = function (module, exports, require) {
  exports.Contrast = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.Contrast = function (t) {
    var e;
    var i = Math.pow((this.contrast() + 100) / 100, 2);
    var r = t.data;
    var a = r.length;
    var n = 150;
    var s = 150;
    var o = 150;
    for (e = 0; e < a; e += 4) {
      n = r[e];
      s = r[e + 1];
      o = r[e + 2];
      n /= 255;
      n -= 0.5;
      n *= i;
      n += 0.5;
      n *= 255;
      s /= 255;
      s -= 0.5;
      s *= i;
      s += 0.5;
      s *= 255;
      o /= 255;
      o -= 0.5;
      o *= i;
      o += 0.5;
      o *= 255;
      n = n < 0 ? 0 : n > 255 ? 255 : n;
      s = s < 0 ? 0 : s > 255 ? 255 : s;
      o = o < 0 ? 0 : o > 255 ? 255 : o;
      r[e] = n;
      r[e + 1] = s;
      r[e + 2] = o;
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "contrast", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}