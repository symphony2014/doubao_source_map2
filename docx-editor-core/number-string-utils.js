// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AF' to 'concatToNumber'
// - Renamed export 'Go' to 'stripNumberPart'
// - Renamed export 'mO' to 'startsWithNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 762471
         */
module.exports = function (module, exports, require) {
  let r = (e, n) => Number(`${e}${n}`);
  let o = (e, n) => Number(n.toString().replace(e.toString(), ""));
  let l = (e, n) => n.toString().startsWith(e.toString());
  require.d(exports, {
    concatToNumber: function () {
      return r;
    },
    stripNumberPart: function () {
      return o;
    },
    startsWithNumber: function () {
      return l;
    }
  });
}