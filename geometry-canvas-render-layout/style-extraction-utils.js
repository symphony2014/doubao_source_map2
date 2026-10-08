// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B$' to 'getFillStyle'
// - Renamed export 'BN' to 'getTextStyle'
// - Renamed export 'D8' to 'getPaddingSide'
// - Renamed export 'Tc' to 'normalizeSize'
// - Renamed export 'v9' to 'getStrokeStyle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 80675
         */
module.exports = function (module, exports, require) {
  var boxLayoutUtils = require("box-layout-utils") /*id: 578400*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
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
  var l = ["opacity", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "cursor", "pointerEvents", "blendMode", "draggable"];
  var u = h(l, ["color", "fontFamily", "fontSize", "lineHeight", "fontWeight", "fontVariant", "opacity", "textAlign", "textBaseline", "textStrokeWidth", "textStrokeColor", "rich"]);
  var c = {
    color: "fill",
    textStrokeWidth: "lineWidth",
    textStrokeColor: "stroke"
  };
  var p = h(l, ["lineWidth", "stroke", "strokeOpacity", "lineDash", "lineCap", "lineJoin", "miterLimit", "borderRadius"]);
  var d = h(p, ["fill", "fillOpacity", "round"]);
  function f(t, e, n = {}) {
    if (!t) {
      return {};
    }
    var i = {};
    var a = 0;
    for (; a < e.length; a++) {
      var s = e[a];
      var h = t[s];
      if (!isNullCheck.isNull(h) && !isUndefinedCheck.isUndefined(h)) {
        var l = s;
        if (n[s]) {
          l = n[s];
        }
        i[l] = h;
      }
    }
    return i;
  }
  function g(t) {
    return f(t, p);
  }
  function y(t) {
    return f(t, u, c);
  }
  function v(t) {
    return f(t, d);
  }
  function m(t, e) {
    return boxLayoutUtils.normalizePadding(t)[{
      top: "paddingTop",
      left: "paddingLeft",
      right: "paddingRight",
      bottom: "paddingBottom"
    }[e]];
  }
  function x(t) {
    if (isNumberUtil.isNumber(t)) {
      return [t, t];
    } else if (arrayIsArrayUtil.isArray(t)) {
      return t;
    } else {
      return undefined;
    }
  }
  require.d(exports, {
    getFillStyle: function () {
      return v;
    },
    getTextStyle: function () {
      return y;
    },
    getPaddingSide: function () {
      return m;
    },
    normalizeSize: function () {
      return x;
    },
    getStrokeStyle: function () {
      return g;
    }
  });
}