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
         * moduleId: 562496
         */
module.exports = function (module, exports, require) {
  exports.RGB = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.RGB = function (t) {
    var e;
    var i;
    var r = t.data;
    var a = r.length;
    var n = this.red();
    var s = this.green();
    var o = this.blue();
    for (e = 0; e < a; e += 4) {
      i = (r[e] * 0.34 + r[e + 1] * 0.5 + r[e + 2] * 0.16) / 255;
      r[e] = i * n;
      r[e + 1] = i * s;
      r[e + 2] = i * o;
      r[e + 3] = r[e + 3];
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "red", 0, function (t) {
    this._filterUpToDate = false;
    if (t > 255) {
      return 255;
    } else if (t < 0) {
      return 0;
    } else {
      return Math.round(t);
    }
  });
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "green", 0, function (t) {
    this._filterUpToDate = false;
    if (t > 255) {
      return 255;
    } else if (t < 0) {
      return 0;
    } else {
      return Math.round(t);
    }
  });
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "blue", 0, konvaPropertyValidators.RGBComponent, konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}