// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qe' to 'rgbaSchema'
// - Renamed export 'S2' to 'userIdSchema'
// - Renamed export 'SI' to 'baseSchema'
// - Renamed export 'X8' to 'uuid4Schema'
// - Renamed export 'dY' to 'rgbSchema'
// - Renamed export 'hL' to 'baseWithChildren'
// - Renamed export 'iK' to 'tokenSchema'
// - Renamed export 'vp' to 'resourceTokenSchema'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 72946
         */
module.exports = function (module, exports, require) {
  var schemaValidationPatterns = require("schema-validation-patterns") /*id: 800876*/;
  let a = {
    $id: "/base",
    type: "object",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        minLength: 1
      },
      parent_id: {
        oneOf: [{
          $ref: "/token"
        }, {
          const: ""
        }, {
          const: null
        }]
      },
      comments: {
        oneOf: [{
          type: "null"
        }, {
          type: "array",
          items: {
            type: "string",
            pattern: "^\\w+$"
          }
        }]
      },
      locked: {},
      hidden: {},
      author: {
        type: ["string", "null"],
        minLength: 1
      },
      revisions: {
        oneOf: [{
          type: "null"
        }, {
          type: "array",
          items: {
            type: "object",
            required: ["revisionId", "type", "userId", "createTime"],
            properties: {
              revisionId: {
                type: "string"
              },
              type: {
                type: "string"
              },
              userId: {
                type: "string"
              },
              createTime: {
                type: "number"
              },
              details: {
                oneOf: [{
                  type: "object"
                }, {
                  type: "null"
                }]
              }
            }
          }
        }]
      }
    }
  };
  let o = {
    $id: "/baseWithChildren",
    type: "object",
    properties: {
      children: {
        type: "array",
        uniqueItems: true,
        items: {
          type: "string"
        }
      }
    },
    allOf: [{
      $ref: "/base"
    }]
  };
  let n = {
    $id: "/token",
    type: "string",
    oneOf: [{
      pattern: "^[A-Za-z0-9]{27}$"
    }, {
      pattern: "^fake_"
    }]
  };
  let d = {
    $id: "/resourceToken",
    type: "object",
    properties: {
      token: {
        type: "string",
        oneOf: [{
          pattern: `^[${schemaValidationPatterns.asciiRange}]{22,44}$`
        }, {
          const: ""
        }]
      },
      status: {
        type: "integer",
        enum: [10]
      }
    }
  };
  let s = {
    $id: "/rgba",
    type: "string",
    pattern: schemaValidationPatterns.rgbaPattern
  };
  let l = {
    $id: "/rgb",
    type: "string",
    pattern: schemaValidationPatterns.rgbPattern
  };
  let u = {
    $id: "/userId",
    type: "string",
    pattern: schemaValidationPatterns.phonePattern
  };
  let c = {
    $id: "/uuid4",
    type: "string",
    pattern: schemaValidationPatterns.uuidPattern
  };
  require.d(exports, {
    rgbaSchema: function () {
      return s;
    },
    userIdSchema: function () {
      return u;
    },
    baseSchema: function () {
      return a;
    },
    uuid4Schema: function () {
      return c;
    },
    rgbSchema: function () {
      return l;
    },
    baseWithChildren: function () {
      return o;
    },
    tokenSchema: function () {
      return n;
    },
    resourceTokenSchema: function () {
      return d;
    }
  });
}