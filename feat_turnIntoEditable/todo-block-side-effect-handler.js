// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 484026
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let l = [function () {
    return {
      sideEffectFromSource: {
        cond: e => e.type === docBlockTypeConstants.blockTypeConstants.TODO && Reflect.get(e.snapshot, "done") !== undefined,
        h(e, t, n) {
          n.remove(e.recordId, ["done"]);
        }
      }
    };
  }];
  exports.default = l;
  require.r(exports);
}