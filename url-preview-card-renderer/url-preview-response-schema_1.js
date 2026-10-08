// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'getPreviewResponseSchema'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 211365
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-entity-schema") /*id: 823274*/;
  require("preview-status-entity") /*id: 279177*/;
  require("url-preview-entity-schema_1") /*id: 451734*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewResponse", {
    fields: {
      previewEntity: {
        type: "entities.UrlPreviewEntity",
        id: 1
      },
      previewStatus: {
        type: "entities.PreviewStatus",
        id: 2
      },
      previewEntityV2: {
        type: "entities.UrlPreviewEntityV2",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewResponse", undefined, true);
  require.d(exports, {
    getPreviewResponseSchema: function () {
      return i;
    }
  });
}