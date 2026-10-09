// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Point2D'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 325076
         */
module.exports = function (module, exports, require) {
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var r = function () {
    function t(t = 0, e = 0) {
      this.x = t;
      this.y = e;
    }
    t.fromPolar = function (e, n, r, o) {
      var a = geometryMathUtils.getPolarPoint(e, n, r, o);
      return new t(a.x, a.y);
    };
    t.prototype.clone = function () {
      return new t(this.x, this.y);
    };
    t.prototype.moveTo = function (t, e) {
      this.x = t;
      this.y = e;
      return this;
    };
    t.prototype.moveBy = function (t, e) {
      this.x += t;
      this.y += e;
      return this;
    };
    t.prototype.angleMoveTo = function (t, e) {
      return this.moveBy(e * Math.cos(t), e * Math.sin(t));
    };
    t.prototype.distanceTo = function (t, e) {
      return Math.sqrt(Math.pow(this.x - t, 2) + Math.pow(this.y - e, 2));
    };
    t.prototype.getAngleFrom = function (t, e) {
      return Math.atan2(this.y - e, this.x - t);
    };
    t.prototype.getAngleTo = function (t, e) {
      return Math.atan2(e - this.y, t - this.x);
    };
    t.prototype.rotate = function (t, e = 0, n = 0) {
      var i = this.getAngleFrom(e, n) + t;
      var r = this.distanceTo(e, n);
      this.x = e + r * Math.cos(i);
      this.y = n + r * Math.sin(i);
      return this;
    };
    t.prototype.scale = function (t = 1, e = 0, n = 0) {
      var i = this.getAngleFrom(e, n);
      var r = this.distanceTo(e, n);
      this.x = e + t * r * Math.cos(i);
      this.y = n + t * r * Math.sin(i);
      return this;
    };
    return t;
  }();
  exports.Point2D = r;
}