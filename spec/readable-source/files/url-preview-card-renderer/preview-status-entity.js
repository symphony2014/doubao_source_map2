// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 279177
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let i = {
    fields: {
      statusCode: {
        type: "StatusCode",
        id: 1
      },
      statusMessage: {
        type: "string",
        id: 2
      },
      statusType: {
        type: "StatusType",
        id: 3
      },
      extra: {
        keyType: "string",
        type: "string",
        id: 4
      }
    },
    nested: {
      StatusType: {
        values: {
          SUCCESSED: 0,
          FAIL_CLOSED: 1,
          FAIL_RETRY: 2
        }
      },
      StatusCode: {
        values: {
          URL_PREVIEW_SUCCESSED: 0,
          URL_PREVIEW_PERMISSION_DENIED: 420001,
          URL_PREVIEW_APP_CONTEXT_MISSING: 420002,
          URL_PREVIEW_URL_MISMATCH: 420003,
          URL_PREVIEW_SERVICE_UNAVAILABLE: 420004,
          URL_PREVIEW_RESOURCE_UNAVAILABLE: 420005,
          URL_PREVIEW_RESOURCE_EXHAUSTED: 420006,
          URL_PREVIEW_NEED_GET_CARD_PREVIEW: 420007
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "PreviewStatus", i);
  protobufCodecHelper.createProtobufCodec("entities", "PreviewStatus", undefined, true);
  i.nested.StatusType.values;
  i.nested.StatusCode.values;
}