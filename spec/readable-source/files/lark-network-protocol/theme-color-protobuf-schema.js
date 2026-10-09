// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 673317
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let n = {
    fields: {
      token: {
        type: "string",
        id: 1
      },
      key: {
        type: "Key",
        id: 2
      },
      value: {
        type: "uint32",
        id: 3
      }
    },
    nested: {
      KeyType: {
        values: {
          N: 0,
          B: 1,
          W: 2,
          T: 3,
          G: 4,
          L: 5,
          Y: 6,
          S: 7,
          O: 8,
          R: 9,
          C: 10,
          V: 11,
          P: 12,
          I: 13,
          STATIC_WHITE: 14
        }
      },
      Key: {
        fields: {
          type: {
            rule: "required",
            type: "KeyType",
            id: 1
          },
          value: {
            rule: "required",
            type: "uint32",
            id: 2
          },
          alpha: {
            type: "uint32",
            id: 3,
            options: {
              default: 100
            }
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "ThemeColor", n);
  protobufCodecHelper.createProtobufCodec("entities", "ThemeColor", undefined, true);
  n.nested.KeyType.values;
}