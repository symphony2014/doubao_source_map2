// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C4' to 'calcAngleTextBase'
// - Renamed export 'CE' to 'hideOverlapLabels'
// - Renamed export 'Xo' to 'calcAngleTextAlign'
// - Renamed export '_1' to 'calcPolarLabelPos'
// - Renamed export 'aS' to 'calcRectLabelPos'
// - Renamed export 'cm' to 'getRectLabelCoords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 230732
         */
module.exports = function (module, exports, require) {
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var mathCalcUtils = require("math-calc-utils") /*id: 51318*/;
  function o(t, e = false) {
    var n = mathCalcUtils.normalizeAngle(t);
    var i = "center";
    var o = "middle";
    i = n >= 0 && n < 90 || n > 270 && n < 360 ? e ? "right" : "left" : e ? "left" : "right";
    o = n > 0 && n < 180 ? e ? "bottom" : "top" : e ? "top" : "bottom";
    if (n === 0 || n === 180) {
      o = "middle";
    } else if (n === 90 || n === 270) {
      i = "center";
    }
    return {
      textAlign: i,
      textBaseline: o
    };
  }
  function a(t, e = false) {
    var n = mathCalcUtils.normalizeAngle(t);
    var i = "center";
    var o = "middle";
    o = n > 0 && n < 90 || n > 270 && n < 360 ? e ? "top" : "bottom" : e ? "bottom" : "top";
    i = n > 0 && n < 180 ? e ? "right" : "left" : e ? "left" : "right";
    if (n === 0 || n === 180) {
      i = "center";
    } else if (n === 90 || n === 270) {
      o = "middle";
    }
    return {
      textAlign: i,
      textBaseline: o
    };
  }
  function s(t, e, n, i) {
    var r = t.x;
    var o = t.y;
    var a = t.width;
    var s = t.height;
    return h({
      left: Math.min(r, r + a),
      right: Math.max(r, r + a),
      top: Math.min(o, o + s),
      bottom: Math.max(o, o + s)
    }, e, n, i);
  }
  function h(t, e, n, i = "top") {
    var r = t.top;
    var o = t.left;
    var a = t.right;
    var s = t.bottom;
    var h = (o + a) / 2;
    var l = (r + s) / 2;
    var u = r - n;
    var c = o - n;
    var p = a + n;
    var d = s + n;
    var f = e;
    if (f === "outside") {
      f = i;
    } else if (f === "insideStart") {
      var g = {
        top: "insideBottom",
        bottom: "insideTop",
        left: "insideRight",
        right: "insideLeft"
      };
      f = g[i];
    } else if (f === "insideEnd") {
      var g = {
        top: "insideTop",
        bottom: "insideBottom",
        left: "insideLeft",
        right: "insideRight"
      };
      f = g[i];
    }
    return {
      top: {
        x: h,
        y: u,
        textAlign: "center",
        textBaseline: "bottom"
      },
      topStart: {
        x: o,
        y: u,
        textAlign: "left",
        textBaseline: "bottom"
      },
      topEnd: {
        x: a,
        y: u,
        textAlign: "right",
        textBaseline: "bottom"
      },
      left: {
        x: c,
        y: l,
        textAlign: "right",
        textBaseline: "middle"
      },
      leftStart: {
        x: c,
        y: r,
        textAlign: "right",
        textBaseline: "top"
      },
      leftEnd: {
        x: c,
        y: s,
        textAlign: "right",
        textBaseline: "bottom"
      },
      right: {
        x: p,
        y: l,
        textAlign: "left",
        textBaseline: "middle"
      },
      rightStart: {
        x: p,
        y: r,
        textAlign: "left",
        textBaseline: "top"
      },
      rightEnd: {
        x: p,
        y: s,
        textAlign: "left",
        textBaseline: "bottom"
      },
      bottom: {
        x: h,
        y: d,
        textAlign: "center",
        textBaseline: "top"
      },
      bottomStart: {
        x: o,
        y: d,
        textAlign: "left",
        textBaseline: "top"
      },
      bottomEnd: {
        x: a,
        y: d,
        textAlign: "right",
        textBaseline: "top"
      },
      insideTop: {
        x: h,
        y: r + n,
        textAlign: "center",
        textBaseline: "top"
      },
      insideLeft: {
        x: o + n,
        y: l,
        textAlign: "left",
        textBaseline: "middle"
      },
      insideRight: {
        x: a - n,
        y: l,
        textAlign: "right",
        textBaseline: "middle"
      },
      insideBottom: {
        x: h,
        y: s - n,
        textAlign: "center",
        textBaseline: "bottom"
      }
    }[f] || {
      x: h,
      y: l,
      textAlign: "center",
      textBaseline: "middle"
    };
  }
  function l(t, e, n, i = "radius", s = 0) {
    var h = t.cx;
    var l = t.cy;
    var u = t.startAngle;
    var p = t.endAngle;
    var d = t.radius;
    var f = t.innerRadius;
    var g = (u + p) / 2;
    var y = (f + d) / 2;
    var v = 0;
    if (typeof s == "number") {
      v = mathCalcUtils.degToRad(s);
    }
    if (s === "radial") {
      v = mathCalcUtils.degToRad(c(g));
    }
    if (s === "tangential") {
      v = mathCalcUtils.degToRad(c(g + 90));
    }
    var m = mathCalcUtils.createPolarMapper(t);
    if (e === "center") {
      return {
        x: h,
        y: l,
        textAlign: "center",
        textBaseline: "middle"
      };
    }
    if (e === "inside") {
      var x = m(g, y);
      var _ = x.x;
      var b = x.y;
      return {
        x: _,
        y: b,
        textAlign: "center",
        textBaseline: "middle",
        originX: _,
        originY: b,
        rotation: v
      };
    }
    if (e === "outside") {
      if (i === "radius" || i === "innerRadius") {
        var w = m(g, Math.max(d, f) + n);
        var _ = w.x;
        var b = w.y;
        var S = o(g, false);
        var A = S.textAlign;
        var E = S.textBaseline;
        return {
          x: _,
          y: b,
          textAlign: s === "tangential" ? "center" : A,
          textBaseline: E,
          originX: _,
          originY: b,
          rotation: v
        };
      }
      if (i === "startAngle" || i === "endAngle") {
        var k = m(p, y);
        var _ = k.x;
        var b = k.y;
        var M = n * Math.cos(mathCalcUtils.degToRad(p + 90));
        var P = n * Math.sin(mathCalcUtils.degToRad(p + 90));
        return {
          x: _ + M,
          y: b + P,
          textAlign: "center",
          textBaseline: "middle",
          originX: _,
          originY: b,
          rotation: v
        };
      }
    } else if (e === "insideStart") {
      if (i === "radius" || i === "innerRadius") {
        var O = m(g, Math.min(d, f) + n);
        var _ = O.x;
        var b = O.y;
        var C = o(g, false);
        var A = C.textAlign;
        var E = C.textBaseline;
        return {
          x: _,
          y: b,
          textAlign: A,
          textBaseline: E
        };
      }
      if (i === "startAngle" || i === "endAngle") {
        var T = m(u, y);
        var _ = T.x;
        var b = T.y;
        var M = n * Math.cos(mathCalcUtils.degToRad(u + 90));
        var P = n * Math.sin(mathCalcUtils.degToRad(u + 90));
        var I = a(u, true);
        var A = I.textAlign;
        var E = I.textBaseline;
        return {
          x: _ + M,
          y: b + P,
          textAlign: A,
          textBaseline: E
        };
      }
    } else if (e === "insideEnd") {
      if (i === "radius" || i === "innerRadius") {
        var Z = m(g, Math.max(d, f) - n);
        var _ = Z.x;
        var b = Z.y;
        var L = o(g, true);
        var A = L.textAlign;
        var E = L.textBaseline;
        return {
          x: _,
          y: b,
          textAlign: A,
          textBaseline: E
        };
      }
      if (i === "startAngle" || i === "endAngle") {
        var R = m(p, y);
        var _ = R.x;
        var b = R.y;
        var M = n * Math.cos(mathCalcUtils.degToRad(p - 90));
        var P = n * Math.sin(mathCalcUtils.degToRad(p - 90));
        return {
          x: _ + M,
          y: b + P,
          textAlign: "center",
          textBaseline: "middle"
        };
      }
    } else {
      var D = m(g, y);
      var _ = D.x;
      var b = D.y;
      return {
        x: _,
        y: b,
        textAlign: "center",
        textBaseline: "middle"
      };
    }
  }
  function u(t) {
    var e = [];
    var n = 0;
    for (; n < t.length; n++) {
      (function (n) {
        var r = t[n];
        if (r) {
          var o = r.getBoundingClientRect();
          if (e.some(function (t) {
            return geometryRectUtils.rectsIntersect(t, o);
          })) {
            r.setAttr("display", false);
          } else {
            e.push(o);
          }
        }
      })(n);
    }
    e.length = 0;
  }
  function c(t) {
    var e;
    var n;
    if ((e = t, (n = mathCalcUtils.normalizeAngle(e)) >= 0 && n <= 90 || n >= 270 && n <= 360 ? "right" : "left") == "right") {
      return t;
    } else {
      return t + 180;
    }
  }
  require.d(exports, {
    calcAngleTextBase: function () {
      return a;
    },
    hideOverlapLabels: function () {
      return u;
    },
    calcAngleTextAlign: function () {
      return o;
    },
    calcPolarLabelPos: function () {
      return l;
    },
    calcRectLabelPos: function () {
      return h;
    },
    getRectLabelCoords: function () {
      return s;
    }
  });
}