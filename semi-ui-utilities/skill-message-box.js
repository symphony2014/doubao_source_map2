// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CC' to 'getMessage'
// - Renamed export 'MJ' to 'setMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 111120
         */
module.exports = function (module, exports, require) {
  let n = new Map();
  function r(e, t, i) {
    let r = n.get(e);
    if (r) {
      r[t] = i;
    } else {
      n.set(e, {
        [t]: i
      });
    }
  }
  function o(e, t) {
    let i = n.get(e);
    if (i) {
      return i[t];
    }
  }
  require.d(exports, {
    getMessage: function () {
      return o;
    },
    setMessage: function () {
      return r;
    }
  });
}