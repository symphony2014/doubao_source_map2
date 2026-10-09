// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgPathElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 669730
         */
module.exports = function (module, exports, require) {
  var i;
  var svgRenderableBaseElement = require("svg-renderable-base-element") /*id: 707305*/;
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
  var s = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.svgTagName = "path";
      return e;
    }
    a(e, t);
    e.prototype.brush = function (t) {};
    e.prototype.getSvgAttributes = function () {
      var e = t.prototype.getSvgAttributes.call(this);
      if ((this.fillAble || this.strokeAble) && this.type !== "text" && this.type !== "use") {
        var n = this.getPathData();
        e.d = n.getSVGPathString();
      }
      return e;
    };
    e.prototype.getPathData = function () {
      var t = new svgPathHandler.Path();
      this.brush(t);
      return t;
    };
    e.prototype.getTotalLength = function () {
      return this.getPathData().getTotalLength();
    };
    e.prototype.getPointAtLength = function (t) {
      return this.getPathData().getPointAtLength(t);
    };
    e.prototype.getPoint = function (t) {
      return this.getPathData().getPointAtPercent(t);
    };
    return e;
  }(svgRenderableBaseElement.SvgRenderableElement);
  exports.SvgPathElement = s;
}