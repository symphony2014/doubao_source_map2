// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ConicGradient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 152133
         */
module.exports = function (module, exports, require) {
  var i;
  var gradientRenderer = require("gradient-renderer") /*id: 806811*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var envFeatureDetect = require("env-feature-detect") /*id: 642709*/;
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
  var l = {
    cx: 0.5,
    cy: 0.5,
    startAngle: 0,
    stops: []
  };
  var u = function (t) {
    function e(e) {
      var n = t.call(this, h(h({}, l), e)) || this;
      n.type = "conicGradient";
      return n;
    }
    s(e, t);
    e.prototype.clone = function () {
      return new e(deepCloneWrapper_1.deepClone(this.option));
    };
    e.prototype.getCanvasContextStyle = function (t, e) {
      var n = this.option;
      var i = n.global ? n.cx : e.x + e.width * this.option.cx;
      var r = n.global ? n.cy : e.y + e.height * this.option.cy;
      if (!t.createConicGradient) {
        return "rgba(0, 0, 0, 0)";
      }
      var o = t.createConicGradient(this.option.startAngle + (envFeatureDetect.isTouchOrNonBrowser ? Math.PI / 2 : 0), i, r);
      n.stops.forEach(function (t) {
        o.addColorStop(t.offset, t.color);
      });
      return o;
    };
    e.prototype.getSVGNode = function () {
      return {
        svgTagName: "conic-gradient",
        svgAttr: {}
      };
    };
    e.prototype.toString = function () {
      return "";
    };
    return e;
  }(gradientRenderer.GradientRenderer);
  exports.ConicGradient = u;
}