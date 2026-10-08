// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'createRandomString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 62944
         */
module.exports = function (module, exports, require) {
  var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(t = 20) {
    var e = "";
    var r = 0;
    for (; r < t; r++) {
      var o = Math.floor(Math.random() * n.length);
      e += n[o];
    }
    return e;
  }
  require.d(exports, {
    createRandomString: function () {
      return o;
    }
  });
}