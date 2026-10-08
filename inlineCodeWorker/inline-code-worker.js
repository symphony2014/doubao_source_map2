// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'createInlineWorker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inlineCodeWorker.81a23a60.js
         * chunkId: 45452
         * moduleId: 593143
         */
module.exports = function (module, exports, require) {
  function Z(i, I, l) {
    var Z;
    return function (b) {
      var W;
      var X;
      var c;
      var m;
      return new Worker(Z = Z || (W = I === undefined ? null : I, c = (X = function (i, I) {
        var l = atob(i);
        if (I) {
          var Z = new Uint8Array(l.length);
          var b = 0;
          var W = l.length;
          for (; b < W; ++b) {
            Z[b] = l.charCodeAt(b);
          }
          return String.fromCharCode.apply(null, new Uint16Array(Z.buffer));
        }
        return l;
      }(i, l !== undefined && l)).indexOf("\n", 10) + 1, m = new Blob([X.substring(c) + (W ? "//# sourceMappingURL=" + W : "")], {
        type: "application/javascript"
      }), URL.createObjectURL(m)), b);
    };
  }
  require.d(exports, {
    createInlineWorker: function () {
      return Z;
    }
  });
}