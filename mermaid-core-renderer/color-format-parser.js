// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'colorParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 289231
         */
module.exports = function (module, exports, require) {
  var colorModelManager = require("color-model-manager") /*id: 346102*/;
  var colorHexEnumMap = require("color-hex-enum-map") /*id: 486822*/;
  let o = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: t => {
      if (t.charCodeAt(0) !== 35) {
        return;
      }
      let e = t.match(o.re);
      if (!e) {
        return;
      }
      let r = e[1];
      let a = parseInt(r, 16);
      let l = r.length;
      let n = l % 4 == 0;
      let s = l > 4;
      let h = s ? 1 : 17;
      let c = s ? 8 : 4;
      let d = n ? 0 : -1;
      let u = s ? 255 : 15;
      return colorModelManager.colorModel.set({
        r: (a >> c * (d + 3) & u) * h,
        g: (a >> c * (d + 2) & u) * h,
        b: (a >> c * (d + 1) & u) * h,
        a: n ? (a & u) * h / 255 : 1
      }, t);
    },
    stringify: t => {
      let {
        r: e,
        g: r,
        b: i,
        a: o
      } = t;
      if (o < 1) {
        return `#${colorHexEnumMap.dec2HexMap[Math.round(e)]}${colorHexEnumMap.dec2HexMap[Math.round(r)]}${colorHexEnumMap.dec2HexMap[Math.round(i)]}${colorHexEnumMap.dec2HexMap[Math.round(o * 255)]}`;
      } else {
        return `#${colorHexEnumMap.dec2HexMap[Math.round(e)]}${colorHexEnumMap.dec2HexMap[Math.round(r)]}${colorHexEnumMap.dec2HexMap[Math.round(i)]}`;
      }
    }
  };
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  let n = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: t => {
      let e = t.match(n.hueRe);
      if (e) {
        let [, t, r] = e;
        switch (r) {
          case "grad":
            return colorConversionUtils.colorUtils.channel.clamp.h(parseFloat(t) * 0.9);
          case "rad":
            return colorConversionUtils.colorUtils.channel.clamp.h(parseFloat(t) * 180 / Math.PI);
          case "turn":
            return colorConversionUtils.colorUtils.channel.clamp.h(parseFloat(t) * 360);
        }
      }
      return colorConversionUtils.colorUtils.channel.clamp.h(parseFloat(t));
    },
    parse: t => {
      let e = t.charCodeAt(0);
      if (e !== 104 && e !== 72) {
        return;
      }
      let r = t.match(n.re);
      if (!r) {
        return;
      }
      let [, a, o, s, h, c] = r;
      return colorModelManager.colorModel.set({
        h: n._hue2deg(a),
        s: colorConversionUtils.colorUtils.channel.clamp.s(parseFloat(o)),
        l: colorConversionUtils.colorUtils.channel.clamp.l(parseFloat(s)),
        a: h ? colorConversionUtils.colorUtils.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
      }, t);
    },
    stringify: t => {
      let {
        h: e,
        s: r,
        l: i,
        a
      } = t;
      if (a < 1) {
        return `hsla(${colorConversionUtils.colorUtils.lang.round(e)}, ${colorConversionUtils.colorUtils.lang.round(r)}%, ${colorConversionUtils.colorUtils.lang.round(i)}%, ${a})`;
      } else {
        return `hsl(${colorConversionUtils.colorUtils.lang.round(e)}, ${colorConversionUtils.colorUtils.lang.round(r)}%, ${colorConversionUtils.colorUtils.lang.round(i)}%)`;
      }
    }
  };
  let s = {
    colors: {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyanaqua: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      transparent: "#00000000",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    parse: t => {
      t = t.toLowerCase();
      let e = s.colors[t];
      if (e) {
        return o.parse(e);
      }
    },
    stringify: t => {
      let e = o.stringify(t);
      for (let t in s.colors) {
        if (s.colors[t] === e) {
          return t;
        }
      }
    }
  };
  let h = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: t => {
      let e = t.charCodeAt(0);
      if (e !== 114 && e !== 82) {
        return;
      }
      let r = t.match(h.re);
      if (!r) {
        return;
      }
      let [, a, o, n, s, c, d, u, p] = r;
      return colorModelManager.colorModel.set({
        r: colorConversionUtils.colorUtils.channel.clamp.r(o ? parseFloat(a) * 2.55 : parseFloat(a)),
        g: colorConversionUtils.colorUtils.channel.clamp.g(s ? parseFloat(n) * 2.55 : parseFloat(n)),
        b: colorConversionUtils.colorUtils.channel.clamp.b(d ? parseFloat(c) * 2.55 : parseFloat(c)),
        a: u ? colorConversionUtils.colorUtils.channel.clamp.a(p ? parseFloat(u) / 100 : parseFloat(u)) : 1
      }, t);
    },
    stringify: t => {
      let {
        r: e,
        g: r,
        b: i,
        a
      } = t;
      if (a < 1) {
        return `rgba(${colorConversionUtils.colorUtils.lang.round(e)}, ${colorConversionUtils.colorUtils.lang.round(r)}, ${colorConversionUtils.colorUtils.lang.round(i)}, ${colorConversionUtils.colorUtils.lang.round(a)})`;
      } else {
        return `rgb(${colorConversionUtils.colorUtils.lang.round(e)}, ${colorConversionUtils.colorUtils.lang.round(r)}, ${colorConversionUtils.colorUtils.lang.round(i)})`;
      }
    }
  };
  var c = {
    format: {
      keyword: s,
      hex: o,
      rgb: h,
      rgba: h,
      hsl: n,
      hsla: n
    },
    parse: t => {
      if (typeof t != "string") {
        return t;
      }
      let e = o.parse(t) || h.parse(t) || n.parse(t) || s.parse(t);
      if (e) {
        return e;
      }
      throw Error(`Unsupported color format: "${t}"`);
    },
    stringify: t => !t.changed && t.color ? t.color : t.type.is(colorHexEnumMap.colorFormats.HSL) || t.data.r === undefined ? n.stringify(t) : !(t.a < 1) && Number.isInteger(t.r) && Number.isInteger(t.g) && Number.isInteger(t.b) ? o.stringify(t) : h.stringify(t)
  };
  require.d(exports, {
    colorParser: function () {
      return c;
    }
  });
}