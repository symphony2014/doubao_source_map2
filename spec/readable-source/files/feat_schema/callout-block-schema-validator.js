// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Renamed variable 'o' to 'jsonSchemaValidator'
// - Resolved require(342110) to 'json-schema-validator'
// - Updated imported property 'LV' to 'alignmentOptions' (module 800876)
// - Updated imported property 'Lw' to 'asciiRange' (module 800876)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 34142
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  let n = {
    type: "object",
    required: ["align", "emoji_id"],
    properties: {
      background_color: {
        oneOf: [{
          $ref: "/rgb"
        }, {
          const: ""
        }, {
          const: null
        }]
      },
      border_color: {
        oneOf: [{
          $ref: "/rgb"
        }, {
          const: ""
        }, {
          const: null
        }]
      },
      text_color: {
        oneOf: [{
          $ref: "/rgb"
        }, {
          const: ""
        }, {
          const: null
        }]
      },
      align: {
        type: "string",
        enum: schemaValidationPatterns.alignmentOptions
      },
      emoji_id: {
        type: "string",
        pattern: `^[${schemaValidationPatterns.asciiRange}]{1,64}$`
      },
      emoji_value: {
        type: "string",
        pattern: `^[${schemaValidationPatterns.asciiRange}]{1,64}$`
      }
    },
    allOf: [{
      $ref: "/baseWithChildren"
    }]
  };
  let d = new jsonSchemaValidator.SchemaValidator(n, undefined, schemaValidationPatterns.isEnabled).addBaseSchema(true).addRgbSchema();
  let s = [{
    blockType: docBlockTypeConstants.blockTypeConstants.CALLOUT,
    getSchemaValidator: () => d
  }];
  exports.default = s;
  require.r(exports);
}