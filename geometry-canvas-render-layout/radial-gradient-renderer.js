// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RadialGradient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 240031
         */
module.exports = function (module, exports, require) {
  var i;
  var gradientRenderer = require("gradient-renderer") /*id: 806811*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
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
  function s() {
    return (s = Object.assign || function (t) {
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
  var h = {
    cx: 0.5,
    cy: 0.5,
    r: 1,
    stops: []
  };
  var l = function (t) {
    function e(e) {
      var n = t.call(this, s(s({}, h), e)) || this;
      n.type = "radialGradient";
      return n;
    }
    a(e, t);
    e.prototype.clone = function () {
      return new e(deepCloneWrapper_1.deepClone(this.option));
    };
    e.prototype.getCanvasContextStyle = function (t, e) {
      var n = this.option;
      var i = Math.min(e.width, e.height);
      var r = n.global ? n.cx : n.cx * e.width + e.x;
      var o = n.global ? n.cy : n.cy * e.height + e.y;
      var a = n.global ? n.r : i * n.r;
      var s = t.createRadialGradient ? t.createRadialGradient(r, o, 0, r, o, a) : t.createCircularGradient(r, o, a);
      n.stops.forEach(function (t) {
        s.addColorStop(t.offset, t.color);
      });
      return s;
    };
    e.prototype.getSVGNode = function () {
      var t = this.option;
      var e = t.cx;
      var n = t.cy;
      var i = t.r;
      var r = t.stops;
      return {
        svgTagName: "radialGradient",
        svgAttr: {
          gradientUnits: t.global ? "userSpaceOnUse" : "objectBoundingBox",
          id: this.id,
          cx: e,
          cy: n,
          r: i
        },
        childNodes: r.map(function (t) {
          return {
            svgTagName: "stop",
            svgAttr: {
              offset: t.offset * 100 + "%",
              "stop-color": t.color
            }
          };
        })
      };
    };
    e.prototype.toString = function () {
      var t = this.option;
      return "radial-gradient(circle at " + t.cx * 100 + "% " + t.cy * 100 + "%,  " + t.stops.map(function (t) {
        return t.color + " " + t.offset * 100 + "%";
      }).join(", ") + ")";
    };
    return e;
  }(gradientRenderer.GradientRenderer);
  exports.RadialGradient = l;
}