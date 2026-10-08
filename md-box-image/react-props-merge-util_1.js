// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactPropsMergeUtil'
// - Resolved require(582060) to 'react-props-merge-util'
// - Updated imported property 'Z' to 'deepMergeProps' (module 582060)
// - Updated imported property 'P' to 'isPlainObject' (module 582060)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 999106
         */
module.exports = function (module, exports, require) {
  var reactPropsMergeUtil = require("react-props-merge-util") /*id: 582060*/;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return reactPropsMergeUtil.deepMergeProps;
    },
    isPlainObject: function () {
      return reactPropsMergeUtil.isPlainObject;
    }
  });
}