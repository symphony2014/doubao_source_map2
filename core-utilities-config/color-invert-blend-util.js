// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'invertColorBlend'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 442482
         */
module.exports = function (module, exports, require) {
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  var o = (t, e, r = 50) => {
    let {
      r: o,
      g: l,
      b: n,
      a: s
    } = colorFormatParser.colorParser.parse(t);
    let {
      r: h,
      g: c,
      b: d,
      a: u
    } = colorFormatParser.colorParser.parse(e);
    let p = r / 100;
    let g = p * 2 - 1;
    let f = s - u;
    let m = ((g * f == -1 ? g : (g + f) / (1 + g * f)) + 1) / 2;
    let y = 1 - m;
    return colorAlphaSetter.setColorWithAlpha(o * m + h * y, l * m + c * y, n * m + d * y, s * p + u * (1 - p));
  };
  var l = (t, e = 100) => {
    let r = colorFormatParser.colorParser.parse(t);
    r.r = 255 - r.r;
    r.g = 255 - r.g;
    r.b = 255 - r.b;
    return o(r, t, e);
  };
  require.d(exports, {
    invertColorBlend: function () {
      return l;
    }
  });
}