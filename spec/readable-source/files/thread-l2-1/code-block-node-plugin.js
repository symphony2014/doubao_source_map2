// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'codeBlockWrapper'
// - Resolved require(509970) to 'code-block-wrapper'
// - Renamed variable 'l' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'r' to 'blockStatusAnalyzer'
// - Resolved require(446193) to 'block-status-analyzer'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'm' to 'checkIsToolBlock' (module 446193)
// - Updated imported property 'V' to 'CodeBlockWrapper' (module 509970)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 98117
         */
module.exports = function (module, exports, require) {
  var codeBlockWrapper = require("code-block-wrapper") /*id: 509970*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var blockStatusAnalyzer = require("block-status-analyzer") /*id: 446193*/;
  let o = (e, t) => {
    var n;
    var o;
    var a;
    let c = ((n = e.contentBlocks) === null || n === undefined ? undefined : n.findIndex(e => e.block_id === t.block_id)) === (e.contentBlocks?.length || 0) - 1;
    let d = ((a = e.contentBlocks) === null || a === undefined ? undefined : (o = a.filter(e => e.block_type === t.block_type)) === null || o === undefined ? undefined : o.findIndex(e => e.block_id === t.block_id)) ?? 0;
    let {
      is_finish: u
    } = t;
    let p = messageContextDefinition.useMessage();
    let {
      isTool: m
    } = blockStatusAnalyzer.checkIsToolBlock(p, t.parent_id);
    return {
      isBlockFinished: u,
      isLatestBlock: c,
      codeBlockIndex: d,
      isTool: m,
      isFromShare: true
    };
  };
  function a(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class s {
    constructor() {
      a(this, "nodeTypes", ["block_type:10008"]);
      a(this, "Content", codeBlockWrapper.CodeBlockWrapper);
      a(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeBlockNodeRenderPlugin: function () {
      return s;
    }
  });
}