// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CircleGraphicShape'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 679682
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var circleRingCollision = require("circle-ring-collision") /*id: 812309*/;
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
  function s(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function h() {
    return (h = Object.assign || function (t) {
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
  function l() {
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
  var u = Math.PI * 2;
  var c = ["cx", "cy", "radius"];
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "circle";
      e.shapeKeys = c;
      return e;
    }
    s(e, t);
    e.prototype.getDefaultAttr = function () {
      return h(h({}, t.prototype.getDefaultAttr.call(this)), {
        cx: 0,
        cy: 0,
        radius: 0
      });
    };
    e.prototype.getAnimationKeys = function () {
      return l(t.prototype.getAnimationKeys.call(this), ["cx", "cy", "radius"]);
    };
    e.prototype.brush = function (t) {
      var e = this.attr;
      var n = e.cx;
      var i = e.cy;
      var r = e.radius;
      t.arc(n, i, Math.max(r, 0), 0, u, false);
    };
    e.prototype.isPointInFill = function (t, e) {
      var n = this.attr;
      var i = n.cx;
      var r = n.cy;
      var o = n.radius;
      return circleRingCollision.isPointInCircle(i, r, o, t, e);
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = this.attr;
      var r = i.cx;
      var o = i.cy;
      var s = i.radius;
      return circleRingCollision.isPointInRing(r, o, s, n, t, e);
    };
    e.prototype.computeBBox = function () {
      var t = this.attr;
      var e = t.cx;
      var n = t.cy;
      var i = t.radius;
      return geometryRectUtils.createSquareRect(e, n, i);
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.CircleGraphicShape = p;
}