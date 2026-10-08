// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Renamed variable 'o' to 'schemaErrorClass'
// - Resolved require(327005) to 'schema-error-class'
// - Renamed variable 'n' to 'jsonSchemaValidator'
// - Resolved require(342110) to 'json-schema-validator'
// - Updated imported property 'Lw' to 'asciiRange' (module 800876)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'e' to 'SchemaError' (module 327005)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 594263
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var schemaErrorClass = require("schema-error-class") /*id: 327005*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  let d = `^[${schemaValidationPatterns.asciiRange}]{39}$`;
  let s = {
    type: "object",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        const: "table"
      },
      columns_id: {
        type: "array",
        items: {
          type: "string",
          pattern: d
        }
      },
      rows_id: {
        type: "array",
        items: {
          type: "string",
          pattern: d
        }
      },
      column_set: {
        type: "object",
        propertyNames: {
          pattern: d
        },
        patternProperties: {
          rowsOrColPattern: {
            type: "object",
            required: ["column_width"],
            properties: {
              column_width: {
                type: "integer",
                exclusiveMinimum: 0
              }
            }
          }
        }
      },
      cell_set: {
        type: "object",
        additionalProperties: {
          type: "object",
          properties: {
            merge_info: {
              type: "object",
              properties: {
                col_span: {
                  type: "integer",
                  minimum: 0
                },
                row_span: {
                  type: "integer",
                  minimum: 0
                }
              }
            },
            block_id: {
              $ref: "/token"
            }
          }
        }
      },
      header_row: {
        type: ["boolean", "null"]
      },
      header_column: {
        type: ["boolean", "null"]
      }
    },
    allOf: [{
      $ref: "/base"
    }]
  };
  let l = {
    type: "object",
    properties: {
      type: {
        type: "string",
        const: "table_cell"
      },
      background_color: {
        oneOf: [{
          $ref: "/rgb"
        }, {
          $ref: "/rgba"
        }]
      },
      vertical_align: {
        type: "string",
        oneOf: [{
          const: ""
        }, {
          enum: ["top", "middle", "bottom"]
        }]
      }
    },
    allOf: [{
      $ref: "/baseWithChildren"
    }]
  };
  let u = new jsonSchemaValidator.SchemaValidator(s, undefined, schemaValidationPatterns.isEnabled).addBaseSchema().addTokenSchema();
  let c = new jsonSchemaValidator.SchemaValidator(l, undefined, schemaValidationPatterns.isEnabled).addBaseSchema(true).addRgbSchema().addRgbaSchema();
  let f = e => {
    let {
      cell_set: t,
      rows_id: r,
      columns_id: i
    } = e.record.snapshot;
    for (let e of r) {
      for (let r of i) {
        if (!t[e + r]) {
          return {
            valid: false,
            errors: [new schemaErrorClass.SchemaError("cell", `cell not found in cellSet, rowId: ${e}, columnId: ${r}`)]
          };
        }
      }
    }
    return {
      valid: true,
      errors: []
    };
  };
  let m = [{
    blockType: docBlockTypeConstants.blockTypeConstants.TABLE,
    getSchemaValidator: () => u
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.CELL,
    getSchemaValidator: () => c,
    getSchemaRule: () => f
  }];
  exports.default = m;
  require.r(exports);
  require.d(exports, {
    cellRule: function () {
      return f;
    },
    tableCellValidator: function () {
      return c;
    },
    tableValidator: function () {
      return u;
    }
  });
}