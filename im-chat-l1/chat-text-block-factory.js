// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'createTextBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 351389
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let o = e => {
    if (e) {
      return {
        block_type: chatConstantsEnum.messageContentType.BLOCK_TEXT,
        content: {
          text_block: {
            text: e,
            icon_url: "",
            icon_url_dark: "",
            summary: ""
          },
          pc_event_block: ""
        },
        block_id: uuidGeneratorUtil.generateUuid(),
        parent_id: "",
        meta_info: [],
        append_fields: []
      };
    }
  };
  require.d(exports, {
    createTextBlock: function () {
      return o;
    }
  });
}