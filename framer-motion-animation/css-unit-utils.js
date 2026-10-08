// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$C' to 'normalizedPercent'
// - Renamed export 'RW' to 'degUnit'
// - Renamed export 'aQ' to 'percentUnit'
// - Renamed export 'px' to 'pixelUnit'
// - Renamed export 'vh' to 'vhUnit'
// - Renamed export 'vw' to 'vwUnit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 466130
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
    normalizedPercent: function () {
      return u;
    },
    degUnit: function () {
      return r;
    },
    percentUnit: function () {
      return s;
    },
    pixelUnit: function () {
      return o;
    },
    vhUnit: function () {
      return a;
    },
    vwUnit: function () {
      return l;
    }
  });
}