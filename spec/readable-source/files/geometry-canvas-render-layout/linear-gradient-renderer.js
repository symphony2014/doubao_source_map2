// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LinearGradient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 8690
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
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
    stops: []
  };
  var l = function (t) {
    function e(e) {
      var n = t.call(this, s(s({}, h), e)) || this;
      n.type = "linearGradient";
      return n;
    }
    a(e, t);
    e.prototype.clone = function () {
      return new e(deepCloneWrapper_1.deepClone(this.option));
    };
    e.prototype.getCanvasContextStyle = function (t, e) {
      var n = this.option;
      var i = n.global ? n.x1 : n.x1 * e.width + e.x;
      var r = n.global ? n.y1 : n.y1 * e.height + e.y;
      var o = n.global ? n.x2 : n.x2 * e.width + e.x;
      var a = n.global ? n.y2 : n.y2 * e.height + e.y;
      var s = t.createLinearGradient(i, r, o, a);
      n.stops.forEach(function (t) {
        s.addColorStop(t.offset, t.color);
      });
      return s;
    };
    e.prototype.getSVGNode = function () {
      var t = this.option;
      var e = t.x1;
      var n = t.y1;
      var i = t.x2;
      var r = t.y2;
      var o = t.stops;
      return {
        svgTagName: "linearGradient",
        svgAttr: {
          gradientUnits: t.global ? "userSpaceOnUse" : "objectBoundingBox",
          id: this.id,
          x1: e,
          y1: n,
          x2: i,
          y2: r
        },
        childNodes: o.map(function (t) {
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
      return "linear-gradient(" + -Math.atan2(t.x1 - t.x2, t.y1 - t.y2) + "rad, " + t.stops.map(function (t) {
        return t.color + " " + t.offset * 100 + "%";
      }).join(", ") + ")";
    };
    return e;
  }(gradientRenderer.GradientRenderer);
  exports.LinearGradient = l;
}