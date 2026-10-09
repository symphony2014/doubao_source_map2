// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 't' to 'docBlockDepthUtil'
// - Resolved require(511268) to 'doc-block-depth-util'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'f' to 'getBlockDepth' (module 511268)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-copy.bc14b660.js
         * chunkId: 78903
         * moduleId: 175287
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  let l = {
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT,
      onCopy: function (o) {
        let {
          block: e
        } = o;
        return {
          level: docBlockDepthUtil.getBlockDepth(e)
        };
      }
    }
  };
  exports.default = [l];
  require.r(exports);
}