// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'hslToRgbConverter'
// - Resolved require(741771) to 'hsl-to-rgb-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 632816
         */
module.exports = function (module, exports, require) {
  var hslToRgbConverter = require("hsl-to-rgb-converter") /*id: 741771*/;
  module.exports = function (e, t, r) {
    var i;
    var o;
    var a;
    var s;
    e = function (e) {
      var t;
      var r;
      for (e = (r = e = (t = e) > 10000000 ? 10000000 : t) < -10000000 ? -10000000 : r; e < 0;) {
        e += 360;
      }
      while (e > 359) {
        e -= 360;
      }
      return e;
    }(e);
    t = (o = (i = t) > 100 ? 100 : i) < 0 ? 0 : o;
    return "#" + hslToRgbConverter(e, t /= 100, r = ((s = (a = r) > 100 ? 100 : a) < 0 ? 0 : s) / 100).map(function (e) {
      return (256 + e).toString(16).substr(-2);
    }).join("");
  };
}