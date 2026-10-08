// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'transformSet'
// - Renamed export '_' to 'transformProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 736118
         */
module.exports = function (module, exports, require) {
  let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
  let r = new Set(n);
  require.d(exports, {
    transformSet: function () {
      return r;
    },
    transformProps: function () {
      return n;
    }
  });
}