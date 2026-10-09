// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ColorScale'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 339662
         */
module.exports = function (module, exports, require) {
  var colorGradientInterpolator = require("color-gradient-interpolator") /*id: 718716*/;
  var r = function () {
    function t() {
      this.type = "color";
    }
    t.prototype.domain = function (t) {
      this._domain = t;
      return this;
    };
    t.prototype.colors = function (t) {
      this._colors = t;
      return this;
    };
    t.prototype.scale = function (t) {
      var e;
      var n;
      var r = parseFloat(t);
      var o = this._colors;
      if (o.length === 1) {
        return o[0];
      }
      var a = 1 / (o.length - 1);
      var s = this._domain;
      var h = s[0];
      var l = s[1];
      if ((e = h === l ? 0.5 : (r - h) / (l - h)) > 0 && e < 1) {
        n = Math.floor(e / a);
      } else if (e <= 0) {
        n = 0;
      } else if (e >= 1) {
        n = o.length - 2;
      }
      var u = n + 1;
      var c = (e - n / (o.length - 1)) / a;
      return colorGradientInterpolator.interpolateColorOrGradient(o[n], o[u], c);
    };
    return t;
  }();
  exports.ColorScale = r;
}