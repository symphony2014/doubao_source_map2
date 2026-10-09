// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'colorDifferenceCiede2000'
// - Resolved require(99121) to 'color-difference-ciede2000'
// - Renamed variable 'o' to 'rgbToLabColorUtils'
// - Resolved require(644202) to 'rgb-to-lab-color-utils'
// - Renamed variable 's' to 'colorPaletteMappingUtils'
// - Resolved require(810447) to 'color-palette-mapping-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 824160
         */
module.exports = function (module, exports, require) {
  var colorDifferenceCiede2000 = require("color-difference-ciede2000") /*id: 99121*/;
  var rgbToLabColorUtils = require("rgb-to-lab-color-utils") /*id: 644202*/;
  var colorPaletteMappingUtils = require("color-palette-mapping-utils") /*id: 810447*/;
  var t = module.exports = {};
  t.diff = colorDifferenceCiede2000.ciede2000;
  t.rgb_to_lab = rgbToLabColorUtils.rgb_to_lab;
  t.rgba_to_lab = rgbToLabColorUtils.rgba_to_lab;
  t.map_palette = colorPaletteMappingUtils.map_palette;
  t.palette_map_key = colorPaletteMappingUtils.palette_map_key;
  t.map_palette_lab = colorPaletteMappingUtils.map_palette_lab;
  t.lab_palette_map_key = colorPaletteMappingUtils.lab_palette_map_key;
  t.match_palette_lab = colorPaletteMappingUtils.match_palette_lab;
  t.closest = function (e, a, i) {
    var n = t.palette_map_key(e);
    i = i !== undefined ? i : {
      R: 255,
      G: 255,
      B: 255
    };
    return t.map_palette([e], a, "closest", i)[n];
  };
  t.furthest = function (e, a, i) {
    var n = t.palette_map_key(e);
    i = i !== undefined ? i : {
      R: 255,
      G: 255,
      B: 255
    };
    return t.map_palette([e], a, "furthest", i)[n];
  };
  t.closest_lab = function (e, a) {
    return t.match_palette_lab(e, a, false);
  };
  t.furthest_lab = function (e, a) {
    return t.match_palette_lab(e, a, true);
  };
}