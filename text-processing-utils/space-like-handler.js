// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'createSpaceHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 784097
         */
module.exports = function (module, exports, require) {
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  function i(e, t, r, i) {
    let o = i ? i - 1 : Number.POSITIVE_INFINITY;
    let u = 0;
    return function (i) {
      if (charClassificationUtils.isSpaceLike(i)) {
        e.enter(r);
        return function i(a) {
          if (charClassificationUtils.isSpaceLike(a) && u++ < o) {
            e.consume(a);
            return i;
          } else {
            e.exit(r);
            return t(a);
          }
        }(i);
      } else {
        return t(i);
      }
    };
  }
  require.d(exports, {
    createSpaceHandler: function () {
      return i;
    }
  });
}