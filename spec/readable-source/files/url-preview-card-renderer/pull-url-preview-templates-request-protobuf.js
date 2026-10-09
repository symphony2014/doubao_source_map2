// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'PullURLPreviewTemplatesRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 70711
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("protobuf-field-info-extension") /*id: 906532*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "PullURLPreviewTemplatesRequest", {
    fields: {
      templateIds: {
        rule: "repeated",
        type: "string",
        id: 1,
        options: {
          "(fieldinfo.FieldInfo)": "split,type=url_preview_template_id"
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PullURLPreviewTemplatesRequest", undefined, true);
  require.d(exports, {
    PullURLPreviewTemplatesRequest: function () {
      return i;
    }
  });
}