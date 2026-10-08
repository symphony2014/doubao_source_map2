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
         * moduleId: 586414
         */
module.exports = function (module, exports, require) {
  exports.HSL = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "hue", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "saturation", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "luminance", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  exports.HSL = function (t) {
    var e;
    var i;
    var r;
    var a;
    var n;
    var s = t.data;
    var o = s.length;
    var h = Math.pow(2, this.saturation());
    var l = Math.abs(this.hue() + 360) % 360;
    var d = this.luminance() * 127;
    var c = +h * Math.cos(l * Math.PI / 180);
    var u = +h * Math.sin(l * Math.PI / 180);
    var f = 0.299 + c * 0.701 + u * 0.167;
    var g = 0.587 - c * 0.587 + u * 0.33;
    var p = 0.114 - c * 0.114 - u * 0.497;
    var v = 0.299 - c * 0.299 - u * 0.328;
    var m = 0.587 + c * 0.413 + u * 0.035;
    var y = 0.114 - c * 0.114 + u * 0.293;
    var _ = 0.299 - c * 0.3 + u * 1.25;
    var b = 0.587 - c * 0.586 - u * 1.05;
    var x = 0.114 + c * 0.886 - u * 0.2;
    for (n = 0; n < o; n += 4) {
      e = s[n + 0];
      i = s[n + 1];
      r = s[n + 2];
      a = s[n + 3];
      s[n + 0] = f * e + g * i + p * r + d;
      s[n + 1] = v * e + m * i + y * r + d;
      s[n + 2] = _ * e + b * i + x * r + d;
      s[n + 3] = a;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}