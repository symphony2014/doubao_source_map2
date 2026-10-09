// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'docxDeltaOperationUtils'
// - Resolved require(89569) to 'docx-delta-operation-utils'
// - Updated imported property 'el' to 'hasContentMutation' (module 89569)
// - Updated imported property 'bs' to 'hasDuplicates' (module 89569)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 798994
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxDeltaOperationUtils = require("docx-delta-operation-utils") /*id: 89569*/;
  let o = e => {
    if (docxDeltaOperationUtils.hasContentMutation(e)) {
      let i = e.record.snapshot?.children ?? [];
      if (docxDeltaOperationUtils.hasDuplicates(i)) {
        return {
          valid: false,
          errors: [{
            keyword: "",
            keywordLocation: "",
            instanceLocation: "",
            error: "page block children have same recordId"
          }]
        };
      }
    }
    return {
      valid: true,
      errors: []
    };
  };
  let n = [{
    blockType: docBlockTypeConstants.blockTypeConstants.PAGE,
    getSchemaRule: () => o
  }];
  exports.default = n;
  require.r(exports);
}