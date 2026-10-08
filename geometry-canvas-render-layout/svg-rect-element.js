// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgRectElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 345343
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
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
  var u = ["x", "y", "width", "height"];
  var c = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "rect";
      e.shapeKeys = u;
      return e;
    }
    s(e, t);
    e.prototype.getDefaultAttr = function () {
      return h(h({}, t.prototype.getDefaultAttr.call(this)), {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
    };
    e.prototype.getAnimationKeys = function () {
      return l(t.prototype.getAnimationKeys.call(this), ["x", "y", "width", "height", "r"]);
    };
    e.prototype.brush = function (t) {
      var e = this.attr;
      var n = e.x;
      var i = e.y;
      var r = e.width;
      var a = e.height;
      var s = e.borderRadius;
      var h = e.r;
      var l = h === undefined ? s === undefined ? 0 : s : h;
      if (r !== 0 && a !== 0 || this.isClip) {
        if (l) {
          var u = undefined;
          var c = undefined;
          var p = undefined;
          var d = undefined;
          if (arrayIsArrayUtil.isArray(l)) {
            if (l.length === 0) {
              u = c = p = d = 0;
            }
            if (l.length === 1) {
              u = c = p = d = l[0];
            } else if (l.length === 2) {
              u = p = l[0];
              c = d = l[1];
            } else if (l.length === 3) {
              u = l[0];
              c = d = l[1];
              p = l[2];
            } else if (l.length >= 4) {
              u = l[0];
              c = l[1];
              p = l[2];
              d = l[3];
            }
          } else {
            u = c = p = d = l;
          }
          var f = Math.abs(r / 2);
          var g = Math.abs(a / 2);
          var y = this.getBBox();
          u = Math.min(u, f, g);
          c = Math.min(c, f, g);
          p = Math.min(p, f, g);
          d = Math.min(d, f, g);
          var v = {
            x: y.x + u,
            y: y.y + u
          };
          var m = {
            x: y.x + y.width - c,
            y: y.y + c
          };
          var x = {
            x: y.x + y.width - p,
            y: y.y + +y.height - p
          };
          var _ = {
            x: y.x + d,
            y: y.y + y.height - d
          };
          var b = {
            x: y.x + u,
            y: y.y
          };
          var w = {
            x: y.x + y.width - c,
            y: y.y
          };
          var S = {
            x: y.x + y.width,
            y: y.y + y.height - p
          };
          var A = {
            x: y.x + d,
            y: y.y + y.height
          };
          var E = {
            x: y.x,
            y: y.y + u
          };
          t.moveTo(b.x, b.y);
          t.lineTo(w.x, w.y);
          t.arc(m.x, m.y, c, Math.PI * 1.5, Math.PI * 2, false);
          t.lineTo(S.x, S.y);
          t.arc(x.x, x.y, p, Math.PI * 0, Math.PI * 0.5, false);
          t.lineTo(A.x, A.y);
          t.arc(_.x, _.y, d, Math.PI * 0.5, +Math.PI, false);
          t.lineTo(E.x, E.y);
          t.arc(v.x, v.y, u, +Math.PI, Math.PI * 1.5, false);
        } else {
          t.rect(n, i, r, a);
        }
      }
    };
    e.prototype.isPointInFill = function (t, e) {
      return geometryRectUtils.containsPoint(this.getBBox(), t, e);
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = geometryRectUtils.expandRect(this.getBBox(), n / 2);
      var r = geometryRectUtils.expandRect(this.getBBox(), -n / 2);
      return geometryRectUtils.containsPoint(i, t, e) && !geometryRectUtils.containsPoint(r, t, e);
    };
    e.prototype.computeBBox = function () {
      var t = this.attr;
      var e = t.x;
      var n = t.y;
      var i = t.width;
      var r = t.height;
      return geometryRectUtils.normalizeRect(e, n, i, r);
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.SvgRectElement = c;
}