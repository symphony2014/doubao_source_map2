// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getLineOffsetFns'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 744654
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var s = {
    aggregation: 18,
    extension: 18,
    composition: 18,
    dependency: 6,
    lollipop: 13.5,
    arrow_point: 4
  };
  function i(t, e) {
    if (t === undefined || e === undefined) {
      return {
        angle: 0,
        deltaX: 0,
        deltaY: 0
      };
    }
    t = n(t);
    e = n(e);
    let [r, a] = [t.x, t.y];
    let [s, i] = [e.x, e.y];
    let l = s - r;
    let o = i - a;
    return {
      angle: Math.atan(o / l),
      deltaX: l,
      deltaY: o
    };
  }
  mermaidConfigUtils.setName(i, "calculateDeltaAndAngle");
  var n = mermaidConfigUtils.setName(t => Array.isArray(t) ? {
    x: t[0],
    y: t[1]
  } : t, "pointTransformer");
  var l = mermaidConfigUtils.setName(t => ({
    x: mermaidConfigUtils.setName(function (e, r, a) {
      let l = 0;
      let o = n(a[0]).x < n(a[a.length - 1]).x ? "left" : "right";
      if (r === 0 && Object.hasOwn(s, t.arrowTypeStart)) {
        let {
          angle: e,
          deltaX: r
        } = i(a[0], a[1]);
        l = s[t.arrowTypeStart] * Math.cos(e) * (r >= 0 ? 1 : -1);
      } else if (r === a.length - 1 && Object.hasOwn(s, t.arrowTypeEnd)) {
        let {
          angle: e,
          deltaX: r
        } = i(a[a.length - 1], a[a.length - 2]);
        l = s[t.arrowTypeEnd] * Math.cos(e) * (r >= 0 ? 1 : -1);
      }
      let u = Math.abs(n(e).x - n(a[a.length - 1]).x);
      let c = Math.abs(n(e).y - n(a[a.length - 1]).y);
      let h = Math.abs(n(e).x - n(a[0]).x);
      let d = Math.abs(n(e).y - n(a[0]).y);
      let p = s[t.arrowTypeStart];
      let y = s[t.arrowTypeEnd];
      if (u < y && u > 0 && c < y) {
        let t = y + 1 - u;
        t *= o === "right" ? -1 : 1;
        l -= t;
      }
      if (h < p && h > 0 && d < p) {
        let t = p + 1 - h;
        t *= o === "right" ? -1 : 1;
        l += t;
      }
      return n(e).x + l;
    }, "x"),
    y: mermaidConfigUtils.setName(function (e, r, a) {
      let l = 0;
      let o = n(a[0]).y < n(a[a.length - 1]).y ? "down" : "up";
      if (r === 0 && Object.hasOwn(s, t.arrowTypeStart)) {
        let {
          angle: e,
          deltaY: r
        } = i(a[0], a[1]);
        l = s[t.arrowTypeStart] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
      } else if (r === a.length - 1 && Object.hasOwn(s, t.arrowTypeEnd)) {
        let {
          angle: e,
          deltaY: r
        } = i(a[a.length - 1], a[a.length - 2]);
        l = s[t.arrowTypeEnd] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
      }
      let u = Math.abs(n(e).y - n(a[a.length - 1]).y);
      let c = Math.abs(n(e).x - n(a[a.length - 1]).x);
      let h = Math.abs(n(e).y - n(a[0]).y);
      let d = Math.abs(n(e).x - n(a[0]).x);
      let p = s[t.arrowTypeStart];
      let y = s[t.arrowTypeEnd];
      if (u < y && u > 0 && c < y) {
        let t = y + 1 - u;
        t *= o === "up" ? -1 : 1;
        l -= t;
      }
      if (h < p && h > 0 && d < p) {
        let t = p + 1 - h;
        t *= o === "up" ? -1 : 1;
        l += t;
      }
      return n(e).y + l;
    }, "y")
  }), "getLineFunctionsWithOffset");
  require.d(exports, {
    getLineOffsetFns: function () {
      return l;
    }
  });
}