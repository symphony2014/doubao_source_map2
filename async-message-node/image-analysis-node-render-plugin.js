// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'blockTypeIdentifier'
// - Resolved require(506683) to 'block-type-identifier'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'thinkingImageDisplayItem'
// - Resolved require(925611) to 'thinking-image-display-item'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'J' to 'ThinkingImageItem' (module 925611)
// - Updated imported property 'H' to 'blockType' (module 506683)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 667119
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => {
    var n;
    var r;
    let o = (r = ((n = e.contentBlocks) === null || n === undefined ? undefined : n.findIndex(e => e.block_id === t.block_id)) === (e.contentBlocks?.length || 0) - 1 && e.status?.isBroken) !== null && r !== undefined && r;
    let {
      is_finish: a
    } = t;
    return {
      isBlockFinished: a,
      isBroken: o
    };
  };
  var blockTypeIdentifier = require("block-type-identifier") /*id: 506683*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var thinkingImageDisplayItem = require("thinking-image-display-item") /*id: 925611*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      isBlockFinished: i,
      isBroken: l,
      inView: r
    } = e;
    let s = n.block.content?.image_analysis_block;
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx(thinkingImageDisplayItem.ThinkingImageItem, {
        isBlockFinished: i,
        isBroken: l,
        inView: r,
        blockContent: s
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
      c(this, "nodeTypes", [blockTypeIdentifier.blockType]);
      c(this, "Content", s);
      c(this, "usePropsSelector", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageAnalysisNodeRenderPlugin: function () {
      return d;
    }
  });
}