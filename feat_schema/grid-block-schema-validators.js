// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Renamed variable 'o' to 'jsonSchemaValidator'
// - Resolved require(342110) to 'json-schema-validator'
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 540400
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  let n = new jsonSchemaValidator.SchemaValidator({
    type: "object",
    properties: {
      type: {
        type: "string",
        const: "grid"
      }
    },
    allOf: [{
      $ref: "/baseWithChildren"
    }]
  }, undefined, schemaValidationPatterns.isEnabled).addBaseSchema(true);
  let d = new jsonSchemaValidator.SchemaValidator({
    type: "object",
    required: ["width_ratio"],
    properties: {
      width_ratio: {
        type: "number",
        exclusiveMinimum: 0
      }
    },
    allOf: [{
      $ref: "/baseWithChildren"
    }]
  }, undefined, schemaValidationPatterns.isEnabled).addBaseSchema(true);
  let s = [{
    blockType: docBlockTypeConstants.blockTypeConstants.GRID,
    getSchemaValidator: () => n
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.GRID_COLUMN,
    getSchemaValidator: () => d
  }];
  exports.default = s;
  require.r(exports);
}