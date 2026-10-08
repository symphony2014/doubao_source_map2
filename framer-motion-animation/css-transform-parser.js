// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E$' to 'hasScale'
// - Renamed export 'RT' to 'getTransformValue'
// - Renamed export 'WK' to 'parseTransform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 677451
         */
module.exports = function (module, exports, require) {
  let n = t => t * 180 / Math.PI;
  let r = t => o(n(Math.atan2(t[1], t[0])));
  let s = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: r,
    rotateZ: r,
    skewX: t => n(Math.atan(t[1])),
    skewY: t => n(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  };
  let o = t => {
    if ((t %= 360) < 0) {
      t += 360;
    }
    return t;
  };
  let a = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  let l = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]);
  let u = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: a,
    scaleY: l,
    scale: t => (a(t) + l(t)) / 2,
    rotateX: t => o(n(Math.atan2(t[6], t[5]))),
    rotateY: t => o(n(Math.atan2(-t[2], t[0]))),
    rotateZ: r,
    rotate: r,
    skewX: t => n(Math.atan(t[4])),
    skewY: t => n(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
  function h(t) {
    return +!!t.includes("scale");
  }
  function d(t, e) {
    let i;
    let n;
    if (!t || t === "none") {
      return h(e);
    }
    let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    if (r) {
      i = u;
      n = r;
    } else {
      let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i = s;
      n = e;
    }
    if (!n) {
      return h(e);
    }
    let o = i[e];
    let a = n[1].split(",").map(p);
    if (typeof o == "function") {
      return o(a);
    } else {
      return a[o];
    }
  }
  let c = (t, e) => {
    let {
      transform: i = "none"
    } = getComputedStyle(t);
    return d(i, e);
  };
  function p(t) {
    return parseFloat(t.trim());
  }
  require.d(exports, {
    hasScale: function () {
      return h;
    },
    getTransformValue: function () {
      return c;
    },
    parseTransform: function () {
      return d;
    }
  });
}