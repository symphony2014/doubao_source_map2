// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Os' to 'arrowLengthConfig'
// - Renamed export 'oZ' to 'arrowHeadConfig'
// - Renamed export 'om' to 'getLineOffsetFns'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 173696
         */
module.exports = function (module, exports, require) {
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var a = {
    aggregation: 17.25,
    extension: 17.25,
    composition: 17.25,
    dependency: 6,
    lollipop: 13.5,
    arrow_point: 4
  };
  var o = {
    arrow_point: 9,
    arrow_cross: 12.5,
    arrow_circle: 12.5
  };
  function l(t, e) {
    if (t === undefined || e === undefined) {
      return {
        angle: 0,
        deltaX: 0,
        deltaY: 0
      };
    }
    t = n(t);
    e = n(e);
    let [r, i] = [t.x, t.y];
    let [a, o] = [e.x, e.y];
    let l = a - r;
    let s = o - i;
    return {
      angle: Math.atan(s / l),
      deltaX: l,
      deltaY: s
    };
  }
  loggerLevelUtils.setFunctionName(l, "calculateDeltaAndAngle");
  var n = loggerLevelUtils.setFunctionName(t => Array.isArray(t) ? {
    x: t[0],
    y: t[1]
  } : t, "pointTransformer");
  var s = loggerLevelUtils.setFunctionName(t => ({
    x: loggerLevelUtils.setFunctionName(function (e, r, i) {
      let o = 0;
      let s = n(i[0]).x < n(i[i.length - 1]).x ? "left" : "right";
      if (r === 0 && Object.hasOwn(a, t.arrowTypeStart)) {
        let {
          angle: e,
          deltaX: r
        } = l(i[0], i[1]);
        o = a[t.arrowTypeStart] * Math.cos(e) * (r >= 0 ? 1 : -1);
      } else if (r === i.length - 1 && Object.hasOwn(a, t.arrowTypeEnd)) {
        let {
          angle: e,
          deltaX: r
        } = l(i[i.length - 1], i[i.length - 2]);
        o = a[t.arrowTypeEnd] * Math.cos(e) * (r >= 0 ? 1 : -1);
      }
      let h = Math.abs(n(e).x - n(i[i.length - 1]).x);
      let c = Math.abs(n(e).y - n(i[i.length - 1]).y);
      let d = Math.abs(n(e).x - n(i[0]).x);
      let u = Math.abs(n(e).y - n(i[0]).y);
      let p = a[t.arrowTypeStart];
      let g = a[t.arrowTypeEnd];
      if (h < g && h > 0 && c < g) {
        let t = g + 1 - h;
        t *= s === "right" ? -1 : 1;
        o -= t;
      }
      if (d < p && d > 0 && u < p) {
        let t = p + 1 - d;
        t *= s === "right" ? -1 : 1;
        o += t;
      }
      return n(e).x + o;
    }, "x"),
    y: loggerLevelUtils.setFunctionName(function (e, r, i) {
      let o = 0;
      let s = n(i[0]).y < n(i[i.length - 1]).y ? "down" : "up";
      if (r === 0 && Object.hasOwn(a, t.arrowTypeStart)) {
        let {
          angle: e,
          deltaY: r
        } = l(i[0], i[1]);
        o = a[t.arrowTypeStart] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
      } else if (r === i.length - 1 && Object.hasOwn(a, t.arrowTypeEnd)) {
        let {
          angle: e,
          deltaY: r
        } = l(i[i.length - 1], i[i.length - 2]);
        o = a[t.arrowTypeEnd] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
      }
      let h = Math.abs(n(e).y - n(i[i.length - 1]).y);
      let c = Math.abs(n(e).x - n(i[i.length - 1]).x);
      let d = Math.abs(n(e).y - n(i[0]).y);
      let u = Math.abs(n(e).x - n(i[0]).x);
      let p = a[t.arrowTypeStart];
      let g = a[t.arrowTypeEnd];
      if (h < g && h > 0 && c < g) {
        let t = g + 1 - h;
        t *= s === "up" ? -1 : 1;
        o -= t;
      }
      if (d < p && d > 0 && u < p) {
        let t = p + 1 - d;
        t *= s === "up" ? -1 : 1;
        o += t;
      }
      return n(e).y + o;
    }, "y")
  }), "getLineFunctionsWithOffset");
  require.d(exports, {
    arrowLengthConfig: function () {
      return a;
    },
    arrowHeadConfig: function () {
      return o;
    },
    getLineOffsetFns: function () {
      return s;
    }
  });
}