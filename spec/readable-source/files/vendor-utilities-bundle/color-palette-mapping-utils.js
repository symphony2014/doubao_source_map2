// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(99121) to 'color-difference-ciede2000'
// - Renamed variable 'o' to 'rgbToLabColorUtils'
// - Resolved require(644202) to 'rgb-to-lab-color-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 810447
         */
module.exports = function (module, exports, require) {
  exports.map_palette = function (e, a, i, t) {
    var c = {};
    t = t !== undefined ? t : {
      R: 255,
      G: 255,
      B: 255
    };
    i = i || "closest";
    for (var r = 0; r < e.length; r += 1) {
      var p = e[r];
      var l = undefined;
      var u = undefined;
      var m = 0;
      for (; m < a.length; m += 1) {
        var d = a[m];
        var x = function (e, a, i) {
          var s = rgbToLabColorUtils.rgb_to_lab;
          var t = rgbToLabColorUtils.rgb_to_lab;
          function c(e) {
            return rgbToLabColorUtils.rgba_to_lab(e, i);
          }
          if ("A" in e) {
            s = c;
          }
          if ("A" in a) {
            t = c;
          }
          return n(e = s(e), a = t(a));
        }(p, d, t);
        if (l == undefined || i === "closest" && x < u || i === "furthest" && x > u) {
          l = d;
          u = x;
          continue;
        }
      }
      c[s(p)] = l;
    }
    return c;
  };
  exports.map_palette_lab = function (e, a, i) {
    var n = {};
    var o = i === "furthest";
    var s = 0;
    for (; s < e.length; s += 1) {
      var r = e[s];
      n[t(r)] = c(r, a, o);
    }
    return n;
  };
  exports.match_palette_lab = c;
  exports.palette_map_key = s;
  exports.lab_palette_map_key = t;
  var n = require("color-difference-ciede2000") /*id: 99121*/.ciede2000;
  var rgbToLabColorUtils = require("rgb-to-lab-color-utils") /*id: 644202*/;
  function s(e) {
    var a = "R" + (e = rgbToLabColorUtils.normalize_rgb(e)).R + "B" + e.B + "G" + e.G;
    if ("A" in e) {
      a = a + "A" + e.A;
    }
    return a;
  }
  function t(e) {
    return "L" + e.L + "a" + e.a + "b" + e.b;
  }
  function c(e, a, i) {
    var o;
    var s;
    var t = a[0];
    var c = n(e, t);
    var r = 1;
    var p = a.length;
    for (; r < p; r += 1) {
      s = n(e, o = a[r]);
      if (!i && s < c || i && s > c) {
        t = o;
        c = s;
      }
    }
    return t;
  }
}