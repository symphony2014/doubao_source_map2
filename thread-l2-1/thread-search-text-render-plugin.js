// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'checkLatestContentBlock'
// - Resolved require(597627) to 'check-latest-content-block'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'o' to 'searchReferenceMessageBlockRenderer'
// - Resolved require(640296) to 'search-reference-message-block-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'iC' to 'renderSearchReferenceMessageBlock' (module 640296)
// - Updated imported property 'W' to 'checkLatestBlock' (module 597627)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 932189
         */
module.exports = function (module, exports, require) {
  var checkLatestContentBlock = require("check-latest-content-block") /*id: 597627*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var searchReferenceMessageBlockRenderer = require("search-reference-message-block-renderer") /*id: 640296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(e => {
    let {
      isLatestBlock: n,
      inView: i,
      node: l
    } = e;
    let s = l.block.content?.search_text_block;
    let c = messageContextDefinition.useMessage();
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx(searchReferenceMessageBlockRenderer.renderSearchReferenceMessageBlock, {
        message: c,
        inView: i,
        contentBlock: s,
        isLatestBlock: n
      });
    } else {
      return null;
    }
  });
  function c(e, t, n) {
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
  class d {
    constructor() {
      c(this, "nodeTypes", ["block_type:2008"]);
      c(this, "Content", s);
      c(this, "usePropsSelector", checkLatestContentBlock.checkLatestBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchTextNodeRenderPlugin: function () {
      return d;
    }
  });
}