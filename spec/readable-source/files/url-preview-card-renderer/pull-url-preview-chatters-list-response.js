// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'pullUrlPreviewChattersListResponse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 406042
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("ui-entities-protobuf-schema") /*id: 887765*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "PullUrlPreviewChattersListResponse", {
    fields: {
      chatterIds: {
        rule: "repeated",
        type: "string",
        id: 1
      },
      chatterInfos: {
        rule: "repeated",
        type: "entities.URLPreviewComponent.ChattersPreviewProperty.ChatterInfo",
        id: 2
      },
      hasMore: {
        type: "bool",
        id: 3
      },
      nextToken: {
        type: "string",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PullUrlPreviewChattersListResponse", undefined, true);
  require.d(exports, {
    pullUrlPreviewChattersListResponse: function () {
      return i;
    }
  });
}