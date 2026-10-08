// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'isChunkSeqLt'
// - Renamed export 'X' to 'isChunkSeqLte'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 225959
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  let t = (e, s) => {
    let n = e.chunk_seq;
    let t = s == null ? undefined : s.chunk_seq;
    return !isNullishCheck.isNil(n) && !isNullishCheck.isNil(t) && !!(Number(n) <= Number(t));
  };
  let a = (e, s) => {
    let n = e.chunk_seq;
    let t = s == null ? undefined : s.chunk_seq;
    return !isNullishCheck.isNil(n) && !isNullishCheck.isNil(t) && !!(Number(n) < Number(t));
  };
  require.d(exports, {
    isChunkSeqLt: function () {
      return a;
    },
    isChunkSeqLte: function () {
      return t;
    }
  });
}