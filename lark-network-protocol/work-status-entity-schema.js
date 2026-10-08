// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 448134
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let n = {
    fields: {
      status: {
        type: "Status",
        id: 7
      },
      startTime: {
        type: "int64",
        id: 8
      },
      endTime: {
        type: "int64",
        id: 9
      },
      descriptionTemplates: {
        keyType: "string",
        type: "string",
        id: 10
      }
    },
    nested: {
      Status: {
        values: {
          UNKNOWN: 0,
          ON_LEAVE: 1,
          ON_MEETING: 2
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "WorkStatus", n);
  protobufCodecHelper.createProtobufCodec("entities", "WorkStatus", undefined, true);
  n.nested.Status.values;
}