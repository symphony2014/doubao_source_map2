// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'l' to 'threadToolBlockUtils'
// - Resolved require(655171) to 'thread-tool-block-utils'
// - Renamed variable 'r' to 'threadCodeToolThinking'
// - Resolved require(294371) to 'thread-code-tool-thinking'
// - Renamed variable 'o' to 'chatCodeBlockRenderer'
// - Resolved require(796161) to 'chat-code-block-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'c' to 'chatCodeBlockSymbol'
// - Resolved require(677316) to 'chat-code-block-symbol'
// - Updated imported property 'm' to 'isToolBlock' (module 655171)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'o' to 'CodeToolBlockView' (module 294371)
// - Updated imported property 'w' to 'chatCodeBlock' (module 796161)
// - Updated imported property 'i' to 'codeBlockContent' (module 677316)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 146230
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var threadToolBlockUtils = require("thread-tool-block-utils") /*id: 655171*/;
  var threadCodeToolThinking = require("thread-code-tool-thinking") /*id: 294371*/;
  var chatCodeBlockRenderer = require("chat-code-block-renderer") /*id: 796161*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      message: t,
      contentBlock: n,
      inView: s
    } = e;
    let {
      parent_id: c,
      parent_block_id: d
    } = n ?? {};
    let {
      isTool: u,
      parentBlockType: p
    } = threadToolBlockUtils.isToolBlock(t, c || d);
    if (u) {
      let e = p === chatConstantsEnum.messageContentType.BLOCK_CODE_ASSIST_PROCESS_BLOCK;
      return reactJsxRuntimeCoreReexport.jsx(threadCodeToolThinking.CodeToolBlockView, {
        message: t,
        contentBlock: n,
        isInCodeAssistProcessBlock: e
      });
    }
    return reactJsxRuntimeCoreReexport.jsx(chatCodeBlockRenderer.chatCodeBlock, {
      message: t,
      contentBlock: n,
      inView: s
    });
  };
  var chatCodeBlockSymbol = require("chat-code-block-symbol") /*id: 677316*/;
  function d(e, t, n) {
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
  class u {
    constructor() {
      d(this, "pluginIdentifier", chatCodeBlockSymbol.codeBlockContent);
      d(this, "type", "Container");
      d(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCodeBlockContentPlugin: function () {
      return u;
    }
  });
}