// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'resolveAnimationVariant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 816095
         */
module.exports = function (module, exports, require) {
  var animationVariantResolver = require("animation-variant-resolver") /*id: 126557*/;
  function r(t, e, i) {
    let r = t.getProps();
    return animationVariantResolver.resolveVariant(r, e, i !== undefined ? i : r.custom, t);
  }
  require.d(exports, {
    resolveAnimationVariant: function () {
      return r;
    }
  });
}