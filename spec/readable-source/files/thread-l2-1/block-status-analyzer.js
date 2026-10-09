// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getBlockStatus'
// - Renamed export 'm' to 'checkIsToolBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 446193
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  let r = (e, t) => {
    var n;
    var r;
    var a;
    let c = ((n = e.contentBlocks) === null || n === undefined ? undefined : n.findIndex(e => e.block_id === t.block_id)) === (e.contentBlocks?.length || 0) - 1;
    let d = ((a = e.contentBlocks) === null || a === undefined ? undefined : (r = a.filter(e => e.block_type === t.block_type)) === null || r === undefined ? undefined : r.findIndex(e => e.block_id === t.block_id)) ?? 0;
    let {
      is_finish: u
    } = t;
    let {
      isTool: p
    } = o(messageContextDefinition.useMessage(), t.parent_id);
    return {
      isBlockFinished: u,
      isLatestBlock: c,
      codeBlockIndex: d,
      isTool: p
    };
  };
  let o = (e, t) => {
    var n;
    var l;
    if (!t) {
      return {
        isTool: false
      };
    }
    let r = (n = e.content_blocks_v2) === null || n === undefined ? undefined : n.find(e => e.block_id === t);
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
      r = (l = e.content_blocks_v2) === null || l === undefined ? undefined : l.find(e => e.block_id === (r == null ? undefined : r.parent_id));
    }
    return {
      isTool: false
    };
  };
  require.d(exports, {
    getBlockStatus: function () {
      return r;
    },
    checkIsToolBlock: function () {
      return o;
    }
  });
}