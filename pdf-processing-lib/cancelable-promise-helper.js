// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'makeCancelable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 828977
         */
module.exports = function (module, exports, require) {
  function i(t) {
    var e = false;
    return {
      promise: new Promise(function (r, i) {
        t.then(function (t) {
          return !e && r(t);
        }).catch(function (t) {
          return !e && i(t);
        });
      }),
      cancel: function () {
        e = true;
      }
    };
  }
  require.d(exports, {
    makeCancelable: function () {
      return i;
    }
  });
}