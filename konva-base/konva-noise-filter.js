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
         * moduleId: 959600
         */
module.exports = function (module, exports, require) {
  exports.Noise = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.Noise = function (t) {
    var e;
    var i = this.noise() * 255;
    var r = t.data;
    var a = r.length;
    var n = i / 2;
    for (e = 0; e < a; e += 4) {
      r[e + 0] += n - n * 2 * Math.random();
      r[e + 1] += n - n * 2 * Math.random();
      r[e + 2] += n - n * 2 * Math.random();
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "noise", 0.2, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}