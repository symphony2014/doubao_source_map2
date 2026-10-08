// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 761002
         */
module.exports = function (module, exports, require) {
  exports.BBox = undefined;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  var T = function () {
    function t(t = {
      w: 0,
      h: -cssUnitFormatters.BIGDIMEN,
      d: -cssUnitFormatters.BIGDIMEN
    }) {
      this.w = t.w || 0;
      this.h = "h" in t ? t.h : -cssUnitFormatters.BIGDIMEN;
      this.d = "d" in t ? t.d : -cssUnitFormatters.BIGDIMEN;
      this.L = this.R = this.ic = this.sk = this.dx = 0;
      this.scale = this.rscale = 1;
      this.pwidth = "";
    }
    t.zero = function () {
      return new t({
        h: 0,
        d: 0,
        w: 0
      });
    };
    t.empty = function () {
      return new t();
    };
    t.prototype.empty = function () {
      this.w = 0;
      this.h = this.d = -cssUnitFormatters.BIGDIMEN;
      return this;
    };
    t.prototype.clean = function () {
      if (this.w === -cssUnitFormatters.BIGDIMEN) {
        this.w = 0;
      }
      if (this.h === -cssUnitFormatters.BIGDIMEN) {
        this.h = 0;
      }
      if (this.d === -cssUnitFormatters.BIGDIMEN) {
        this.d = 0;
      }
    };
    t.prototype.rescale = function (t) {
      this.w *= t;
      this.h *= t;
      this.d *= t;
    };
    t.prototype.combine = function (t, e = 0, Q = 0) {
      var r = t.rscale;
      var T = e + r * (t.w + t.L + t.R);
      var n = Q + r * t.h;
      var o = r * t.d - Q;
      if (T > this.w) {
        this.w = T;
      }
      if (n > this.h) {
        this.h = n;
      }
      if (o > this.d) {
        this.d = o;
      }
    };
    t.prototype.append = function (t) {
      var e = t.rscale;
      this.w += e * (t.w + t.L + t.R);
      if (e * t.h > this.h) {
        this.h = e * t.h;
      }
      if (e * t.d > this.d) {
        this.d = e * t.d;
      }
    };
    t.prototype.updateFrom = function (t) {
      this.h = t.h;
      this.d = t.d;
      this.w = t.w;
      if (t.pwidth) {
        this.pwidth = t.pwidth;
      }
    };
    t.fullWidth = "100%";
    t.StyleAdjust = [["borderTopWidth", "h"], ["borderRightWidth", "w"], ["borderBottomWidth", "d"], ["borderLeftWidth", "w", 0], ["paddingTop", "h"], ["paddingRight", "w"], ["paddingBottom", "d"], ["paddingLeft", "w", 0]];
    return t;
  }();
  exports.BBox = T;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}