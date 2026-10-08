// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'urlPreviewCodec'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 556562
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("ui-entities-protobuf-schema") /*id: 887765*/;
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewTemplate", {
    fields: {
      templateId: {
        rule: "required",
        type: "string",
        id: 1
      },
      rootComponentId: {
        type: "string",
        id: 2
      },
      elements: {
        keyType: "string",
        type: "URLPreviewComponent",
        id: 3
      },
      imageIds: {
        rule: "repeated",
        type: "string",
        id: 4
      },
      atIds: {
        rule: "repeated",
        type: "string",
        id: 5
      },
      buttonIds: {
        rule: "repeated",
        type: "string",
        id: 6
      },
      richtextIds: {
        rule: "repeated",
        type: "string",
        id: 7
      },
      expires: {
        type: "int64",
        id: 8
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewTemplate", undefined, true);
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "PullURLPreviewTemplatesResponse", {
    fields: {
      templates: {
        keyType: "string",
        type: "entities.URLPreviewTemplate",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PullURLPreviewTemplatesResponse", undefined, true);
  require.d(exports, {
    urlPreviewCodec: function () {
      return i;
    }
  });
}