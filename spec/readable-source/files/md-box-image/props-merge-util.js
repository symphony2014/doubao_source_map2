// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mergeProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 649340
         */
module.exports = function (module, exports, require) {
  var reactPropsMergeUtil = require("react-props-merge-util") /*id: 582060*/;
  exports.mergeProps = function (e, t) {
    if (t) {
      return reactPropsMergeUtil.deepMergeProps(e, t, {
        clone: false
      });
    } else {
      return e;
    }
  };
}