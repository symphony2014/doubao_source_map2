// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'CodeBlockWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 509970
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var threadCodeToolThinking = require("thread-code-tool-thinking") /*id: 294371*/;
  var chatCodeBlockRenderer = require("chat-code-block-renderer") /*id: 796161*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      isBlockFinished: i,
      inView: s,
      isLatestBlock: c,
      codeBlockIndex: d,
      isTool: u,
      isFromShare: p
    } = e;
    let m = messageContextDefinition.useMessage();
    let v = n.block.content?.code_block;
    let {
      parent_id: f,
      block_id: h,
      meta_info: g = []
    } = n.block;
    if (v) {
      if (u) {
        return reactJsxRuntimeCoreReexport.jsx(threadCodeToolThinking.CodeToolThinking, {
          message: m,
          blockId: h,
          parentId: f,
          isBlockFinished: i,
          blockContent: v,
          codeToolIndex: d + 1
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(chatCodeBlockRenderer.codeBlockRenderer, {
          message: m,
          inView: s,
          blockContent: v,
          metaInfos: g,
          isLatestBlock: c,
          codeBlockIndex: d,
          isFromShare: p
        });
      }
    } else {
      return null;
    }
  });
  require.d(exports, {
    CodeBlockWrapper: function () {
      return s;
    }
  });
}