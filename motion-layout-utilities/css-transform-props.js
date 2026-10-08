// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'transformPropSet'
// - Renamed export '_' to 'transformPropList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 641552
         */
module.exports = function (module, exports, require) {
  let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
  let r = new Set(n);
  require.d(exports, {
    transformPropSet: function () {
      return r;
    },
    transformPropList: function () {
      return n;
    }
  });
}