// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'isToolBlock'
// - Renamed export 'r' to 'extractCodeBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 655171
         */
module.exports = function (module, exports, require) {
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let r = (e, t) => {
    if (!t) {
      return {
        isTool: false
      };
    }
    let r = e.content_block_nodes?.[t];
    if (!r) {
      return {
        isTool: false
      };
    }
    while (r) {
      if (r.block_type === chatConstantsEnum.messageContentType.BLOCK_THINKING || r.block_type === chatConstantsEnum.messageContentType.BLOCK_CODE_ASSIST_PROCESS_BLOCK) {
        return {
          isTool: true,
          parentBlockType: r.block_type
        };
      }
      if (!r.parent_id) {
        break;
      }
      r = e.content_block_nodes?.[r.parent_id];
    }
    return {
      isTool: false
    };
  };
  function o(e) {
    let t = markdownParserSerializer.parseMarkdown(e).children.find(e => e.type === "code");
    if (t) {
      return {
        isCode: true,
        value: t.value
      };
    } else {
      return {
        isCode: false,
        value: ""
      };
    }
  }
  require.d(exports, {
    isToolBlock: function () {
      return r;
    },
    extractCodeBlock: function () {
      return o;
    }
  });
}