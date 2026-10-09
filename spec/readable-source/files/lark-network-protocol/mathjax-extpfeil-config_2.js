// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(517377) to 'rich-text-element-protobuf-definition'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 172234
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("rich-text-element-protobuf-definition") /*id: 517377*/;
  let n = {
    fields: {
      dictionary: {
        keyType: "string",
        type: "RichTextElement",
        id: 1
      },
      styleRefs: {
        keyType: "string",
        type: "RichTextElementStyleRefs",
        id: 2
      },
      styles: {
        rule: "repeated",
        type: "RichTextStyle",
        id: 3
      }
    },
    nested: {
      RichTextStyle: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          value: {
            type: "string",
            id: 2
          }
        }
      },
      RichTextElementStyleRefs: {
        fields: {
          styleIds: {
            rule: "repeated",
            type: "int32",
            id: 1,
            options: {
              packed: false
            }
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "RichTextElements", n);
  protobufCodecHelper.createProtobufCodec("entities", "RichTextElements", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "RichText", {
    fields: {
      elementIds: {
        rule: "repeated",
        type: "string",
        id: 1
      },
      innerText: {
        rule: "required",
        type: "string",
        id: 2
      },
      elements: {
        rule: "required",
        type: "RichTextElements",
        id: 3
      },
      imageIds: {
        rule: "repeated",
        type: "string",
        id: 5
      },
      atIds: {
        rule: "repeated",
        type: "string",
        id: 6
      },
      anchorIds: {
        rule: "repeated",
        type: "string",
        id: 7
      },
      i18nIds: {
        rule: "repeated",
        type: "string",
        id: 8
      },
      mediaIds: {
        rule: "repeated",
        type: "string",
        id: 9
      },
      docsIds: {
        rule: "repeated",
        type: "string",
        id: 10
      },
      interactiveIds: {
        rule: "repeated",
        type: "string",
        id: 11
      },
      mentionIds: {
        rule: "repeated",
        type: "string",
        id: 12
      },
      version: {
        type: "int32",
        id: 13
      },
      atUserGroupIds: {
        rule: "repeated",
        type: "string",
        id: 14
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "RichText", undefined, true);
}