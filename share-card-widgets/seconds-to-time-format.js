// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'formatSecondsToTime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 279117
         */
module.exports = function (module, exports, require) {
  let n = (e, t) => {
    let r = Number(e);
    let n = Math.floor(r / 3600);
    let i = Math.floor(r % 3600 / 60);
    let a = Math.floor(r % 3600 % 60);
    let o = n < 10 ? `0${n}` : n;
    let s = i < 10 ? `0${i}` : i;
    let l = a < 10 ? `0${a}` : a;
    if (n !== 0 || t) {
      return `${o}:${s}:${l}`;
    } else {
      return `${s}:${l}`;
    }
  };
  require.d(exports, {
    formatSecondsToTime: function () {
      return n;
    }
  });
}