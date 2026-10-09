// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'colorUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 965962
         */
module.exports = function (module, exports, require) {
  let i = {
    min: {
      r: 0,
      g: 0,
      b: 0,
      s: 0,
      l: 0,
      a: 0
    },
    max: {
      r: 255,
      g: 255,
      b: 255,
      h: 360,
      s: 100,
      l: 100,
      a: 1
    },
    clamp: {
      r: t => t >= 255 ? 255 : t < 0 ? 0 : t,
      g: t => t >= 255 ? 255 : t < 0 ? 0 : t,
      b: t => t >= 255 ? 255 : t < 0 ? 0 : t,
      h: t => t % 360,
      s: t => t >= 100 ? 100 : t < 0 ? 0 : t,
      l: t => t >= 100 ? 100 : t < 0 ? 0 : t,
      a: t => t >= 1 ? 1 : t < 0 ? 0 : t
    },
    toLinear: t => {
      let e = t / 255;
      if (t > 0.03928) {
        return Math.pow((e + 0.055) / 1.055, 2.4);
      } else {
        return e / 12.92;
      }
    },
    hue2rgb: (t, e, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t,
    hsl2rgb: ({
      h: t,
      s: e,
      l: r
    }, a) => {
      if (!e) {
        return r * 2.55;
      }
      t /= 360;
      e /= 100;
      let o = (r /= 100) < 0.5 ? r * (1 + e) : r + e - r * e;
      let l = r * 2 - o;
      switch (a) {
        case "r":
          return i.hue2rgb(l, o, t + 1 / 3) * 255;
        case "g":
          return i.hue2rgb(l, o, t) * 255;
        case "b":
          return i.hue2rgb(l, o, t - 1 / 3) * 255;
      }
    },
    rgb2hsl: ({
      r: t,
      g: e,
      b: r
    }, i) => {
      let a = Math.max(t /= 255, e /= 255, r /= 255);
      let o = Math.min(t, e, r);
      let l = (a + o) / 2;
      if (i === "l") {
        return l * 100;
      }
      if (a === o) {
        return 0;
      }
      let n = a - o;
      if (i === "s") {
        return (l > 0.5 ? n / (2 - a - o) : n / (a + o)) * 100;
      }
      switch (a) {
        case t:
          return ((e - r) / n + (e < r) * 6) * 60;
        case e:
          return ((r - t) / n + 2) * 60;
        case r:
          return ((t - e) / n + 4) * 60;
        default:
          return -1;
      }
    }
  };
  var a = {
    channel: i,
    lang: {
      clamp: (t, e, r) => e > r ? Math.min(e, Math.max(r, t)) : Math.min(r, Math.max(e, t)),
      round: t => Math.round(t * 10000000000) / 10000000000
    },
    unit: {
      dec2hex: t => {
        let e = Math.round(t).toString(16);
        if (e.length > 1) {
          return e;
        } else {
          return `0${e}`;
        }
      }
    }
  };
  require.d(exports, {
    colorUtils: function () {
      return a;
    }
  });
}