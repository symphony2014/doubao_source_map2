// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createForEach'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 518137
         */
module.exports = function (module, exports, require) {
  exports.createForEach = function (e) {
    return function (t, n, r) {
      var i = -1;
      var o = Object(t);
      var a = r(t);
      var s = a.length;
      while (s--) {
        var u = a[e ? s : ++i];
        if (n(o[u], u, o) === false) {
          break;
        }
      }
      return t;
    };
  };
}