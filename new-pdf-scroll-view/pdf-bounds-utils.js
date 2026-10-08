// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PL' to 'checkVerticalOverlap'
// - Renamed export 'Y2' to 'checkBoundsOverlap'
// - Renamed export 'aD' to 'extractCoordinates'
// - Renamed export 'oo' to 'checkHorizontalOverlap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 309227
         */
module.exports = function (module, exports, require) {
  let r = e => {
    let {
      x0: t = 0,
      y0: n = 0,
      x1: r = 0,
      y1: a = 0
    } = e;
    return [t, n, r, a];
  };
  let a = (e, t) => !(t[0] > e[2]) && !(t[2] < e[0]);
  let l = (e, t) => !(t[1] > e[3]) && !(t[3] < e[1]);
  let i = (e, t) => a(e, t) && l(e, t);
  require.d(exports, {
    checkVerticalOverlap: function () {
      return l;
    },
    checkBoundsOverlap: function () {
      return i;
    },
    extractCoordinates: function () {
      return r;
    },
    checkHorizontalOverlap: function () {
      return a;
    }
  });
}