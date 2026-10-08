// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'normalizeArgs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_comment_module.03c94317.js
         * chunkId: 58738
         * moduleId: 707012
         */
module.exports = function (module, exports, require) {
  var n = Array.isArray;
  var i = Object.getPrototypeOf;
  var r = Object.prototype;
  var a = Object.keys;
  function l(e) {
    if (e.length === 1) {
      var t;
      var o = e[0];
      if (n(o)) {
        return {
          args: o,
          keys: null
        };
      }
      if ((t = o) && typeof t == "object" && i(t) === r) {
        var l = a(o);
        return {
          args: l.map(function (e) {
            return o[e];
          }),
          keys: l
        };
      }
    }
    return {
      args: e,
      keys: null
    };
  }
  require.d(exports, {
    normalizeArgs: function () {
      return l;
    }
  });
}