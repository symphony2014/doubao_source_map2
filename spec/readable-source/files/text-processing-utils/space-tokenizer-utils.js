// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'spaceTokenizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 349997
         */
module.exports = function (module, exports, require) {
  var spaceLikeHandler = require("space-like-handler") /*id: 784097*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  let o = {
    partial: true,
    tokenize: function (e, t, r) {
      return function (t) {
        if (charClassificationUtils.isSpaceLike(t)) {
          return spaceLikeHandler.createSpaceHandler(e, o, "linePrefix")(t);
        } else {
          return o(t);
        }
      };
      function o(e) {
        if (e === null || charClassificationUtils.isInvalidChar(e)) {
          return t(e);
        } else {
          return r(e);
        }
      }
    }
  };
  require.d(exports, {
    spaceTokenizer: function () {
      return o;
    }
  });
}