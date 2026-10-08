// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$V' to 'AppError'
// - Renamed export 'NA' to 'isSysError'
// - Renamed export 'bC' to 'SysError'
// - Renamed export 'iR' to 'UiTypeEnum'
// - Renamed export 'ny' to 'secondsToMinutes'
// - Renamed export 'pc' to 'isAppError'
// - Renamed export 'zy' to 'getYearDifference'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40579.078245ff.js
         * chunkId: 40579
         * moduleId: 352461
         */
module.exports = function (module, exports, require) {
  var r;
  let o = e => e < 60 ? 1 : Math.floor(e / 60);
  let i = e => {
    let t = new Date();
    let n = t.getFullYear() - e.getFullYear();
    let r = t.getMonth() - e.getMonth();
    if (r < 0 || r === 0 && t.getDate() < e.getDate()) {
      n--;
    }
    return n;
  };
  (r = {})[r.panel = 0] = "panel";
  r[r.dialog = 1] = "dialog";
  let a = r;
  class s extends Error {}
  class l extends Error {}
  let u = e => e instanceof l;
  let c = e => e instanceof s;
  require.d(exports, {
    AppError: function () {
      return l;
    },
    isSysError: function () {
      return c;
    },
    SysError: function () {
      return s;
    },
    UiTypeEnum: function () {
      return a;
    },
    secondsToMinutes: function () {
      return o;
    },
    isAppError: function () {
      return u;
    },
    getYearDifference: function () {
      return i;
    }
  });
}