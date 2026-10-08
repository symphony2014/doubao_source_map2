// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Au' to 'mimeTypeMap'
// - Renamed export 'T' to 'fileTypes'
// - Renamed export 'a_' to 'extraTypes'
// - Renamed export 'fc' to 'blockConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 49433
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = {
    FILES: "Files",
    HTML: "text/html",
    TEXT: "text/plain",
    URI_LIST: "text/uri-list",
    DOCX_RECORD: "docx/record",
    DOCX_TEXT: "docx/text"
  };
  let l = ["ai_extra"];
  let a = {
    [docBlockTypeConstants.blockTypeConstants.PAGE]: ["cover", "doc_info", "comment_container_id", "revision_container_id"]
  };
  let c = {
    [i.HTML]: "html",
    [i.TEXT]: "text"
  };
  require.d(exports, {
    mimeTypeMap: function () {
      return c;
    },
    fileTypes: function () {
      return i;
    },
    extraTypes: function () {
      return l;
    },
    blockConfig: function () {
      return a;
    }
  });
}