// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'a' to 'jsonSchemaValidator'
// - Resolved require(342110) to 'json-schema-validator'
// - Renamed variable 'o' to 'schemaErrorClass'
// - Resolved require(327005) to 'schema-error-class'
// - Renamed variable 'n' to 'docxDeltaOperationUtils'
// - Resolved require(89569) to 'docx-delta-operation-utils'
// - Renamed variable 'd' to 'schemaValidationPatterns'
// - Resolved require(800876) to 'schema-validation-patterns'
// - Renamed variable 's' to 'schemaValidationDefinitions'
// - Resolved require(72946) to 'schema-validation-definitions'
// - Updated imported property 'LV' to 'alignmentOptions' (module 800876)
// - Updated imported property 'Lw' to 'asciiRange' (module 800876)
// - Updated imported property 'sH' to 'isEnabled' (module 800876)
// - Updated imported property 'T' to 'SchemaValidator' (module 342110)
// - Updated imported property 'X8' to 'uuid4Schema' (module 72946)
// - Updated imported property 'iK' to 'tokenSchema' (module 72946)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'zI' to 'isTextOperation' (module 89569)
// - Updated imported property 'e' to 'SchemaError' (module 327005)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 458664
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var jsonSchemaValidator = require("json-schema-validator") /*id: 342110*/;
  var schemaErrorClass = require("schema-error-class") /*id: 327005*/;
  var docxDeltaOperationUtils = require("docx-delta-operation-utils") /*id: 89569*/;
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  var schemaValidationDefinitions = require("schema-validation-definitions") /*id: 72946*/;
  let l = {
    user: 100,
    reminder: 30,
    mention_doc: 50
  };
  let u = {
    type: "object",
    properties: {
      text: {},
      align: {
        type: ["string", "null"],
        oneOf: [{
          enum: schemaValidationPatterns.alignmentOptions
        }, {
          const: ""
        }]
      },
      cover: {
        type: ["object", "null"],
        required: ["type"],
        properties: {
          url: {
            type: ["string", "null"]
          },
          offset_ratio_y: {
            type: "number"
          },
          offset_ratio_x: {
            type: "number"
          },
          type: {
            type: "integer",
            enum: [1, 2, 3]
          },
          mime_type: {
            type: "string",
            pattern: `^[${schemaValidationPatterns.asciiRange}]{0,64}$`
          }
        },
        allOf: [{
          $ref: "/resourceToken"
        }]
      },
      doc_info: {
        type: ["object", "null"],
        properties: {
          editors: {
            type: "array",
            maxItems: 100,
            items: {
              type: "string"
            }
          },
          options: {
            type: "array",
            minItems: 1,
            maxItems: 7,
            items: {
              type: "string"
            }
          }
        }
      },
      icon: {
        type: ["object", "null"],
        properties: {
          name: {
            type: "string"
          }
        }
      },
      done: {
        type: ["boolean", "null"]
      },
      folded: {
        type: ["boolean", "null"]
      },
      language: {
        type: ["string", "null"],
        pattern: `^[${schemaValidationPatterns.asciiRange}]{0,64}$`
      },
      wrap: {},
      seq: {
        type: ["string", "null"],
        oneOf: [{
          const: "auto"
        }, {
          pattern: "^\\d+$"
        }]
      },
      seq_level: {
        type: ["string", "null"],
        oneOf: [{
          const: "auto"
        }, {
          pattern: "^\\d+$"
        }]
      },
      width_mode: {
        type: ["string", "null"],
        oneOf: [{
          const: ""
        }, {
          enum: ["full", "standard"]
        }]
      },
      background_color: {
        oneOf: [{
          $ref: "/rgb"
        }, {
          $ref: "/rgba"
        }, {
          type: "null"
        }]
      },
      text_indent: {
        type: ["integer", "null"],
        enum: [0, 1]
      }
    },
    allOf: [{
      $ref: "/baseWithChildren"
    }]
  };
  let c = new jsonSchemaValidator.SchemaValidator(u, undefined, schemaValidationPatterns.isEnabled).addBaseSchema(true).addResourceTokenSchema().addRgbSchema().addRgbaSchema();
  let f = new Map([["author", new jsonSchemaValidator.SchemaValidator({
    type: "string"
  }, undefined, schemaValidationPatterns.isEnabled)], ["iframeId", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    pattern: "^[A-Za-z0-9]{8}$"
  }, undefined, schemaValidationPatterns.isEnabled)], ["italic", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["underline", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["strikethrough", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["inlineCode", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["bold", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["link", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    minLength: 1
  }, undefined, schemaValidationPatterns.isEnabled)], ["link-id", new jsonSchemaValidator.SchemaValidator(schemaValidationDefinitions.uuid4Schema, undefined, schemaValidationPatterns.isEnabled)], ["unlink", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["textHighlight", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    oneOf: [{
      $ref: "/rgba"
    }, {
      $ref: "/rgb"
    }]
  }, undefined, schemaValidationPatterns.isEnabled).addRgbSchema().addRgbaSchema()], ["textHighlightBackground", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    oneOf: [{
      $ref: "/rgba"
    }, {
      $ref: "/rgb"
    }]
  }, undefined, schemaValidationPatterns.isEnabled).addRgbSchema().addRgbaSchema()], ["trigger", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    pattern: `^[${schemaValidationPatterns.asciiRange}]{36}$`
  }, undefined, schemaValidationPatterns.isEnabled)], ["inlineblock", new jsonSchemaValidator.SchemaValidator(schemaValidationDefinitions.tokenSchema, undefined, schemaValidationPatterns.isEnabled)], ["equation", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    maxLength: 10000
  }, undefined, schemaValidationPatterns.isEnabled)], ["objectID", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    pattern: "^[A-Za-z0-9]{8}$"
  }, undefined, schemaValidationPatterns.isEnabled)], ["folded", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    const: "true"
  }, undefined, schemaValidationPatterns.isEnabled)], ["clientside-ai_continue_writing_draft", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    minLength: 1
  }, undefined, schemaValidationPatterns.isEnabled)], ["clientside-flow_insert_placeholder", new jsonSchemaValidator.SchemaValidator({
    type: "string",
    minLength: 1
  }, undefined, schemaValidationPatterns.isEnabled)], ["ai-extra", new jsonSchemaValidator.SchemaValidator({
    type: "string"
  }, undefined, schemaValidationPatterns.isEnabled)]]);
  let m = Array.from(f.keys());
  let p = ["grammarly-data", "abbreviation-data"];
  let h = ["inline-component"];
  let y = e => !!m.includes(e) || !!/^(flow-)?comment-id-/.test(e) || !!e.startsWith("clientside-comment-hl") || !!e.startsWith("revision-id-") || !!p.includes(e) || !!h.includes(e);
  let $ = e => {
    let t = {
      user: 0,
      reminder: 0,
      mention_doc: 0
    };
    for (let r of e) {
      if (r[0] !== "inline-component") {
        continue;
      }
      let e = JSON.parse(r[1]).type;
      if (isNumberUtil.isNumber(t[e]) && ++t[e] > l[e]) {
        return `${e} exceed limits`;
      }
    }
  };
  let g = e => {
    var r;
    var a;
    if (!docxDeltaOperationUtils.isTextOperation(e)) {
      return {
        valid: true,
        errors: []
      };
    }
    let d = (r = e.record.snapshot.text) === null || r === undefined ? undefined : r.apool?.numToAttrib;
    let s = (a = e.record.snapshot.text) === null || a === undefined ? undefined : a.apool?.nextNum;
    if (!d) {
      return {
        valid: true,
        errors: []
      };
    }
    let l = Object.values(d);
    if (l.length !== s) {
      return {
        valid: false,
        errors: [new schemaErrorClass.SchemaError("nextNum", "nextNum must equal to len(a.NumToAttrib")]
      };
    }
    for (let e of l) {
      if (!y(e[0])) {
        return {
          valid: false,
          errors: [new schemaErrorClass.SchemaError("attr", `not allow attribute: ${e[0]}`)]
        };
      }
      let t = f.get(e[0]);
      if (!t) {
        continue;
      }
      let r = t.validate(e[1]);
      if (!r.valid) {
        return r;
      }
    }
    let u = $(l);
    if (u) {
      return {
        valid: false,
        errors: [new schemaErrorClass.SchemaError("inline-component", u)]
      };
    } else {
      return {
        valid: true,
        errors: []
      };
    }
  };
  exports.default = [];
  require.r(exports);
  require.d(exports, {
    apoolRule: function () {
      return g;
    },
    textValidator: function () {
      return c;
    }
  });
}