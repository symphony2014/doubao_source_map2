// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Resolved require(342110) to 'json-schema-validator'
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 832166
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  let o = new (require("json-schema-validator") /*id: 342110*/.SchemaValidator)({
    type: "object",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        const: "sheet"
      }
    },
    allOf: [{
      $ref: "/base"
    }, {
      $ref: "/resourceToken"
    }]
  }, undefined, schemaValidationPatterns.isEnabled).addBaseSchema().addResourceTokenSchema();
  let n = [{
    blockType: docBlockTypeConstants.blockTypeConstants.SHEET,
    getSchemaValidator: () => o
  }];
  exports.default = n;
  require.r(exports);
}