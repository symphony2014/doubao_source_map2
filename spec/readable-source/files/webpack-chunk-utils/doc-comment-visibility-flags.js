// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isDocCommentShown'
// - Renamed export 'k' to 'isCommentExpandOff'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 956515
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  let a = () => platformDocUtils.Vuy ? platformDocUtils.T7z.getItem("docCommentShown") !== "false" : null;
  let u = () => !!docComponentFeatureFlags.isCommentExpandOff();
  require.d(exports, {
    isDocCommentShown: function () {
      return a;
    },
    isCommentExpandOff: function () {
      return u;
    }
  });
}