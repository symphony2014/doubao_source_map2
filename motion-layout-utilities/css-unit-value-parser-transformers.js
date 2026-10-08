// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$C' to 'percentUnitNormalized'
// - Renamed export 'RW' to 'degreeUnit'
// - Renamed export 'aQ' to 'percentUnit'
// - Renamed export 'px' to 'pixelUnit'
// - Renamed export 'vh' to 'viewportHeightUnit'
// - Renamed export 'vw' to 'viewportWidthUnit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 20534
         */
module.exports = function (module, exports, require) {
  let n = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
  });
  let r = n("deg");
  let s = n("%");
  let o = n("px");
  let a = n("vh");
  let l = n("vw");
  let u = {
    ...s,
    parse: t => s.parse(t) / 100,
    transform: t => s.transform(t * 100)
  };
  require.d(exports, {
    percentUnitNormalized: function () {
      return u;
    },
    degreeUnit: function () {
      return r;
    },
    percentUnit: function () {
      return s;
    },
    pixelUnit: function () {
      return o;
    },
    viewportHeightUnit: function () {
      return a;
    },
    viewportWidthUnit: function () {
      return l;
    }
  });
}