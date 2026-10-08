// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'uuidFromBytes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 514862
         */
module.exports = function (module, exports, require) {
  let r = [];
  for (let e = 0; e < 256; ++e) {
    r.push((e + 256).toString(16).slice(1));
  }
  function i(e, t = 0) {
    return (r[e[t + 0]] + r[e[t + 1]] + r[e[t + 2]] + r[e[t + 3]] + "-" + r[e[t + 4]] + r[e[t + 5]] + "-" + r[e[t + 6]] + r[e[t + 7]] + "-" + r[e[t + 8]] + r[e[t + 9]] + "-" + r[e[t + 10]] + r[e[t + 11]] + r[e[t + 12]] + r[e[t + 13]] + r[e[t + 14]] + r[e[t + 15]]).toLowerCase();
  }
  require.d(exports, {
    uuidFromBytes: function () {
      return i;
    }
  });
}