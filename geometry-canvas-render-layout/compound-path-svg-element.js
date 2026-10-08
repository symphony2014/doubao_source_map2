// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CompoundPathSvgElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 903374
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var svgPathHandler = require("svg-path-handler") /*id: 993453*/;
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
  function h() {
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
  var l = ["shapes", "pathData"];
  var u = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "compoundPath";
      e.shapeKeys = l;
      return e;
    }
    a(e, t);
    e.prototype.getDefaultAttr = function () {
      return s(s({}, t.prototype.getDefaultAttr.call(this)), {
        shapes: [],
        closePath: false
      });
    };
    e.prototype.getAnimationKeys = function () {
      return h(t.prototype.getAnimationKeys.call(this), ["pathData"]);
    };
    e.prototype.prevProcessAttr = function (e) {
      t.prototype.prevProcessAttr.call(this, e);
      if (e.shapes && e.shapes.length > 0) {
        var n = new svgPathHandler.Path();
        e.shapes.forEach(function (t) {
          var e = new svgPathHandler.Path();
          t.brush(e);
          n.connectPath(e);
        });
        e.pathData = n;
      }
    };
    e.prototype.brush = function (t) {
      if (this.attr.pathData) {
        this.attr.pathData.drawOnCanvasContext(t);
      } else {
        this.attr.shapes.forEach(function (e) {
          return e.brush(t);
        });
      }
      if (this.attr.closePath) {
        t.closePath();
      }
    };
    e.prototype.computeBBox = function () {
      if (this.attr.pathData) {
        return this.attr.pathData.getPathBBox();
      } else {
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
    };
    e.prototype.pickByGPU = function () {
      return true;
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.CompoundPathSvgElement = u;
}