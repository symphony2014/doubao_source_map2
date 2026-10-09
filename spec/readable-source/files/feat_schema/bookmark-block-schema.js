// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Renamed variable 'o' to 'jsonSchemaValidator'
// - Resolved require(342110) to 'json-schema-validator'
// - Updated imported property 'LV' to 'alignmentOptions' (module 800876)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 757953
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  let n = {
    type: "object",
    required: ["bookmark"],
    properties: {
      bookmark: {
        type: "object",
        required: ["url"],
        properties: {
          title: {},
          url: {
            type: "string"
          },
          icon: {
            type: ["string", "null"]
          },
          cover_url: {
            type: ["string", "null"]
          },
          cover_width: {
            type: ["integer", "null"]
          },
          cover_height: {
            type: ["integer", "null"]
          },
          summary: {
            type: ["string", "null"],
            maxLength: 1000
          }
        }
      },
      align: {
        type: ["string", "null"],
        oneOf: [{
          enum: schemaValidationPatterns.alignmentOptions
        }, {
          const: ""
        }]
      }
    },
    allOf: [{
      $ref: "/base"
    }]
  };
  let d = new jsonSchemaValidator.SchemaValidator(n, undefined, schemaValidationPatterns.isEnabled).addBaseSchema();
  let s = [{
    blockType: docBlockTypeConstants.blockTypeConstants.BOOKMARK,
    getSchemaValidator: () => d
  }];
  exports.default = s;
  require.r(exports);
}