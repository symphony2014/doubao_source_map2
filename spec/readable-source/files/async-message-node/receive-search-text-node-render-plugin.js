// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'checkLatestContentBlock'
// - Resolved require(597627) to 'check-latest-content-block'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'o' to 'asyncSkillContentBlock_3'
// - Resolved require(429067) to 'async-skill-content-block_3'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'yC' to 'AsyncSkillContentBlock' (module 429067)
// - Updated imported property 'W' to 'checkLatestBlock' (module 597627)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 382083
         */
module.exports = function (module, exports, require) {
  var checkLatestContentBlock = require("check-latest-content-block") /*id: 597627*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var asyncSkillContentBlock_3 = require("async-skill-content-block_3") /*id: 429067*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(e => {
    let {
      isLatestBlock: n,
      inView: r,
      node: i
    } = e;
    let s = i.block.content?.search_text_block;
    let c = messageContextDefinition.useMessage();
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_3.AsyncSkillContentBlock, {
        message: c,
        inView: r,
        contentBlock: s,
        isLatestBlock: n
      });
    } else {
      return null;
    }
  });
  function c(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class d {
    constructor() {
      c(this, "nodeTypes", ["block_type:2008"]);
      c(this, "Content", s);
      c(this, "usePropsSelector", checkLatestContentBlock.checkLatestBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchTextNodeRenderPlugin: function () {
      return d;
    }
  });
}