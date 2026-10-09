// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(279177) to 'preview-status-entity'
// - Resolved require(451734) to 'url-preview-entity-schema_1'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 186084
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("url_preview", "PreviewSourceData", {
    fields: {
      url: {
        type: "string",
        id: 1
      },
      appInfo: {
        type: "AppInfo",
        id: 2
      }
    },
    nested: {
      AppInfo: {
        fields: {
          appId: {
            type: "int64",
            id: 1
          },
          sceneType: {
            type: "int64",
            id: 2
          },
          sourceId: {
            type: "string",
            id: 3
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PreviewSourceData", undefined, true);
  require("preview-status-entity") /*id: 279177*/;
  require("url-preview-entity-schema_1") /*id: 451734*/;
  protobufCodecHelper.createProtobufCodec("url_preview", "PreviewResult", {
    fields: {
      sourceData: {
        type: "PreviewSourceData",
        id: 1
      },
      previewStatus: {
        rule: "required",
        type: "entities.PreviewStatus",
        id: 2
      },
      previewEntityV2: {
        type: "entities.UrlPreviewEntityV2",
        id: 3
      },
      extra: {
        keyType: "string",
        type: "string",
        id: 10
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PreviewResult", undefined, true);
}