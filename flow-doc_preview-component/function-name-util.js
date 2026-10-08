// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getFuncName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 304958
         */
module.exports = function (module, exports, require) {
  var n = {};
  var o = Object.prototype.hasOwnProperty;
  function a(t) {
    var e = t.name + "";
    var r = n[e];
    var a = o.call(n, e) ? r.length : 0;
    while (a--) {
      var i = r[a];
      var c = i.func;
      if (c == null || c == t) {
        return i.name;
      }
    }
    return e;
  }
  require.d(exports, {
    getFuncName: function () {
      return a;
    }
  });
}