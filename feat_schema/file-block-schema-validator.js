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
         * moduleId: 587621
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  let n = {
    type: "object",
    required: ["file"],
    properties: {
      align: {
        type: ["string", "null"],
        oneOf: [{
          const: ""
        }, {
          enum: schemaValidationPatterns.alignmentOptions
        }]
      },
      file: {
        type: "object",
        required: ["size"],
        properties: {
          mimeType: {
            type: "string",
            pattern: `^[${schemaValidationPatterns.asciiRange}]{0,128}$`
          },
          size: {
            type: "integer",
            minimum: 1,
            maximum: 10737418240
          },
          name: {
            type: "string",
            maxLength: 1000
          },
          width: {
            type: "number",
            minimum: 0
          },
          height: {
            type: "number",
            minimum: 0
          },
          originWidth: {
            type: "number",
            minimum: 0
          },
          originHeight: {
            type: "number",
            minimum: 0
          },
          token: {
            type: "string"
          }
        }
      }
    },
    allOf: [{
      $ref: "/base"
    }]
  };
  let d = new jsonSchemaValidator.SchemaValidator(n, undefined, schemaValidationPatterns.isEnabled).addBaseSchema().addResourceTokenSchema();
  let s = [{
    blockType: docBlockTypeConstants.blockTypeConstants.FILE,
    getSchemaValidator: () => d
  }];
  exports.default = s;
  require.r(exports);
  require.d(exports, {
    fileValidator: function () {
      return d;
    }
  });
}