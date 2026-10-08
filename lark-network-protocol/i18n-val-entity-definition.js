// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 530709
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "I18nVal", {
    fields: {
      defaultVal: {
        rule: "required",
        type: "string",
        id: 1
      },
      i18nVals: {
        keyType: "string",
        type: "string",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "I18nVal", undefined, true);
}