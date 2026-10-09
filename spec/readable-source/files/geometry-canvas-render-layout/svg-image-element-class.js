// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgImageElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 577462
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var imageCacheLoader = require("image-cache-loader") /*id: 685396*/;
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
  var u = {
    xMinYMin: ["left", "top"],
    xMidYMin: ["center", "top"],
    xMaxYMin: ["right", "top"],
    xMinYMid: ["left", "middle"],
    xMidYMid: ["center", "middle"],
    xMaxYMid: ["right", "middle"],
    xMinYMax: ["left", "bottom"],
    xMidYMax: ["center", "bottom"],
    xMaxYMax: ["right", "bottom"]
  };
  var c = ["x", "y", "width", "height", "src"];
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "image";
      e.svgTagName = "image";
      e.fillAble = false;
      e.strokeAble = false;
      e.shapeKeys = c;
      return e;
    }
    s(e, t);
    e.prototype.getAnimationKeys = function () {
      return l(t.prototype.getAnimationKeys.call(this), ["x", "y", "width", "height"]);
    };
    e.prototype.getDefaultAttr = function () {
      return h(h({}, t.prototype.getDefaultAttr.call(this)), {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        fillOpacity: 1,
        strokeOpacity: 1
      });
    };
    e.prototype.brush = function (t) {
      var e = this;
      var n = this.attr;
      var i = n.src;
      var r = n.preserveAspectRatio;
      if (i) {
        var a = imageCacheLoader.loadImage(i, this.id, function () {
          e.dirty();
        });
        if (a) {
          var s = this._getImagePosition(a);
          var h = s.x;
          var l = s.y;
          var u = s.width;
          var c = s.height;
          if (u === 0 || c === 0) {
            return;
          }
          if (a.width && a.height && r !== "none") {
            t.drawImage(a, 0, 0, a.width, a.height, h, l, u >= 0 ? u : a.width, c >= 0 ? c : a.height);
          } else {
            t.drawImage(a, h, l, u, c);
          }
        }
      }
    };
    e.prototype.isPointOnPath = function (t, e) {
      return geometryRectUtils.containsPoint(this.getBBox(), t, e);
    };
    e.prototype.getSvgAttributes = function () {
      return h(h({}, t.prototype.getSvgAttributes.call(this)), {
        x: this.attr.x,
        y: this.attr.y,
        width: this.attr.width,
        height: this.attr.height,
        "xlink:href": this.attr.src,
        preserveAspectRatio: this.attr.preserveAspectRatio || "none"
      });
    };
    e.prototype.computeBBox = function () {
      var t = this.attr;
      var e = t.x;
      var n = t.y;
      var i = t.width;
      var r = t.height;
      return geometryRectUtils.normalizeRect(e, n, i, r);
    };
    e.prototype._getImagePosition = function (t) {
      var e = this.attr;
      var n = e.x;
      var i = e.y;
      var r = e.width;
      var o = e.height;
      var s = e.preserveAspectRatio;
      var h = s === undefined ? "none" : s;
      if (!h || h === "none" || !t.width || !t.height) {
        return {
          x: n,
          y: i,
          width: r,
          height: o
        };
      }
      var l = u[h];
      var c = l[0];
      var p = l[1];
      var d = t.width;
      var f = t.height;
      var g = r;
      var y = o;
      if (r / o > d / f) {
        g = o * d / f;
      } else {
        y = r * f / d;
      }
      var v = geometryRectUtils.alignRect({
        x: n,
        y: i,
        width: r,
        height: o
      }, g, y, c, p);
      return {
        x: v.x,
        y: v.y,
        width: g,
        height: y
      };
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.SvgImageElement = p;
}