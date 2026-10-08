// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Renamed variable 'o' to 'jsonSchemaValidator'
// - Resolved require(342110) to 'json-schema-validator'
// - Renamed variable 'n' to 'docxTextSchemaValidator'
// - Resolved require(458664) to 'docx-text-schema-validator'
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 316778
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  var docxTextSchemaValidator = require("docx-text-schema-validator") /*id: 458664*/;
  let d = new jsonSchemaValidator.SchemaValidator({
    type: "object",
    allOf: [{
      $ref: "/baseWithChildren"
    }]
  }, undefined, schemaValidationPatterns.isEnabled).addBaseSchema(true);
  let s = [{
    blockType: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER,
    getSchemaValidator: () => d
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.QUOTE,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }];
  exports.default = s;
  require.r(exports);
}