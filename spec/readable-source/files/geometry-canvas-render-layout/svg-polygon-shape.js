// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgPolygonShape'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 89278
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPolyShapeElement = require("svg-poly-shape-element") /*id: 881678*/;
  var geometryPolygonHitTest = require("geometry-polygon-hit-test") /*id: 471102*/;
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function a(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var s = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "polygon";
      return e;
    }
    a(e, t);
    e.prototype.brush = function (e) {
      t.prototype.brush.call(this, e);
      e.closePath();
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = this.attr.pointList;
      return geometryPolygonHitTest.checkPolygonLineHit(i, true, n, t, e);
    };
    return e;
  }(svgPolyShapeElement.SvgPolyShapeElement);
  exports.SvgPolygonShape = s;
}