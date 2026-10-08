// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LineElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 301566
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var geometryLineHitTest = require("geometry-line-hit-test") /*id: 924136*/;
  var coordinateSnapUtil = require("coordinate-snap-util") /*id: 574355*/;
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
  function h(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function l() {
    return (l = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function u() {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var i = Array(t);
    var r = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var a = 0;
      var s = o.length;
      for (; a < s; a++, r++) {
        i[r] = o[a];
      }
    }
    return i;
  }
  var c = ["x1", "y1", "x2", "y2"];
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "line";
      e.fillAble = false;
      e.shapeKeys = c;
      return e;
    }
    h(e, t);
    e.prototype.getDefaultAttr = function () {
      return l(l({}, t.prototype.getDefaultAttr.call(this)), {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      });
    };
    e.prototype.mounted = function () {
      t.prototype.mounted.call(this);
      coordinateSnapUtil.adjustLineCoords(this.attr);
    };
    e.prototype.getAnimationKeys = function () {
      return u(t.prototype.getAnimationKeys.call(this), ["x1", "y1", "x2", "y2"]);
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = this.attr;
      var r = i.x1;
      var o = i.y1;
      var s = i.x2;
      var h = i.y2;
      return geometryLineHitTest.checkLineHit(r, o, s, h, n, t, e);
    };
    e.prototype.brush = function (t) {
      t.moveTo(this.attr.x1, this.attr.y1);
      t.lineTo(this.attr.x2, this.attr.y2);
    };
    e.prototype.computeBBox = function () {
      var t = this.attr;
      var e = t.x1;
      var n = t.y1;
      var i = t.x2;
      var r = t.y2;
      return geometryRectUtils.rectFromPoints(e, n, i, r);
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.LineElement = p;
}