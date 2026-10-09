// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(330114) to 'cipher-entity-protobuf-definition'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 809263
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("cipher-entity-protobuf-definition") /*id: 330114*/;
  let n = {
    fields: {
      type: {
        type: "Type",
        id: 1
      },
      cipher: {
        type: "Cipher",
        id: 2
      }
    },
    nested: {
      Type: {
        values: {
          UNKNOWN: 0,
          AES_256_GCM: 1,
          AES_CTR: 2,
          CRYPTO_SDK_UNIFIED: 3,
          CRYPTO_SDK_DOWNGRADE: 4,
          CRYPTO_SDK_THIRDPARTY: 5,
          SM4_128: 6
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "Crypto", n);
  protobufCodecHelper.createProtobufCodec("entities", "Crypto", undefined, true);
  n.nested.Type.values;
}