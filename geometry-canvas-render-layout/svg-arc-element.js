// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgArcElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 36835
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var geometryArcCollisionDetection = require("geometry-arc-collision-detection") /*id: 857680*/;
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
  var c = ["cx", "cy", "radius", "start", "end"];
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "arc";
      e.shapeKeys = c;
      return e;
    }
    h(e, t);
    e.prototype.getDefaultAttr = function () {
      return l(l({}, t.prototype.getDefaultAttr.call(this)), {
        cx: 0,
        cy: 0,
        radius: 0,
        start: 0,
        end: 0,
        closePath: false
      });
    };
    e.prototype.getAnimationKeys = function () {
      return u(t.prototype.getAnimationKeys.call(this), ["cx", "cy", "radius", "start", "end"]);
    };
    e.prototype.brush = function (t) {
      var e = this.attr;
      var n = e.cx;
      var i = e.cy;
      var r = e.radius;
      var a = e.start;
      var s = e.end;
      var h = e.closePath;
      var l = a > s;
      var u = geometryMathUtils.getPolarPoint(n, i, r, a);
      t.moveTo(u.x, u.y);
      t.arc(n, i, r, a, s, l);
      if (h) {
        t.closePath();
      }
    };
    e.prototype.isPointInFill = function (t, e) {
      var n = this.attr;
      var i = n.cx;
      var r = n.cy;
      var o = n.radius;
      var a = n.start;
      var h = n.end;
      return geometryArcCollisionDetection.checkPointInArc(i, r, o, a, h, t, e);
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = this.attr;
      var r = i.cx;
      var o = i.cy;
      var a = i.radius;
      var h = i.start;
      var l = i.end;
      var u = i.closePath;
      return geometryArcCollisionDetection.checkPointInArcWithThickness(r, o, a, h, l, u, n, t, e);
    };
    e.prototype.computeBBox = function () {
      var t = this.attr;
      var e = t.cx;
      var n = t.cy;
      var i = t.radius;
      var r = t.start;
      var o = t.end;
      return geometryRectUtils.getArcBounds(e, n, i, r, o);
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.SvgArcElement = p;
}