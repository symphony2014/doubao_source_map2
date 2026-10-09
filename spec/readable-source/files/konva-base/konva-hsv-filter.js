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
         * moduleId: 344479
         */
module.exports = function (module, exports, require) {
  exports.HSV = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.HSV = function (t) {
    var e;
    var i;
    var r;
    var a;
    var n;
    var s = t.data;
    var o = s.length;
    var h = Math.pow(2, this.value());
    var l = Math.pow(2, this.saturation());
    var d = Math.abs(this.hue() + 360) % 360;
    var c = h * l * Math.cos(d * Math.PI / 180);
    var u = h * l * Math.sin(d * Math.PI / 180);
    var f = h * 0.299 + c * 0.701 + u * 0.167;
    var g = h * 0.587 - c * 0.587 + u * 0.33;
    var p = h * 0.114 - c * 0.114 - u * 0.497;
    var v = h * 0.299 - c * 0.299 - u * 0.328;
    var m = h * 0.587 + c * 0.413 + u * 0.035;
    var y = h * 0.114 - c * 0.114 + u * 0.293;
    var _ = h * 0.299 - c * 0.3 + u * 1.25;
    var b = h * 0.587 - c * 0.586 - u * 1.05;
    var x = h * 0.114 + c * 0.886 - u * 0.2;
    for (n = 0; n < o; n += 4) {
      e = s[n + 0];
      i = s[n + 1];
      r = s[n + 2];
      a = s[n + 3];
      s[n + 0] = f * e + g * i + p * r;
      s[n + 1] = v * e + m * i + y * r;
      s[n + 2] = _ * e + b * i + x * r;
      s[n + 3] = a;
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "hue", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "saturation", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "value", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}