// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(530709) to 'i18n-val-entity-definition'
// - Renamed variable 'n' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 36994
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("i18n-val-entity-definition") /*id: 530709*/;
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let s = {
    RequestTagTypeEnum: {
      values: {
        UNKNOWN_TAG_TYPE: 0,
        RELATION_TAG: 1
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(s);
  s.RequestTagTypeEnum.values;
  let o = {
    ResponseTagTypeEnum: {
      values: {
        RELATION_TAG_UNSET: 0,
        RELATION_TAG_EXTERNAL: 1,
        RELATION_TAG_PARTNER: 2,
        RELATION_TAG_TENANT_NAME: 3
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(o);
  o.ResponseTagTypeEnum.values;
  protobufCodecHelper.createProtobufCodec("entities", "TagData", {
    fields: {
      tagDataItems: {
        rule: "repeated",
        type: "TagDataItem",
        id: 1
      }
    },
    nested: {
      TagDataItem: {
        fields: {
          textVal: {
            type: "I18nVal",
            id: 1
          },
          tagId: {
            type: "string",
            id: 2
          },
          reqTagType: {
            type: "RequestTagTypeEnum",
            id: 3
          },
          respTagType: {
            type: "ResponseTagTypeEnum",
            id: 4
          },
          priority: {
            type: "int32",
            id: 5
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "TagData", undefined, true);
}