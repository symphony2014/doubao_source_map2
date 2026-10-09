// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageBlockStatusTracker'
// - Resolved require(475669) to 'message-block-status-tracker'
// - Renamed variable 'i' to 'searchQueryBlockTypes'
// - Resolved require(167098) to 'search-query-block-types'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'asyncSkillContentRenderer'
// - Resolved require(313138) to 'async-skill-content-renderer'
// - Renamed variable 'a' to 'asyncSkillContentBlock_1'
// - Resolved require(939272) to 'async-skill-content-block_1'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'm3' to 'renderSkillContent' (module 313138)
// - Updated imported property 'h' to 'skillContentBlock' (module 939272)
// - Updated imported property 'c' to 'searchBlockTypes' (module 167098)
// - Updated imported property 'Z' to 'trackMessageBlockStatus' (module 475669)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 273316
         */
module.exports = function (module, exports, require) {
  var messageBlockStatusTracker = require("message-block-status-tracker") /*id: 475669*/;
  var searchQueryBlockTypes = require("search-query-block-types") /*id: 167098*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillContentRenderer = require("async-skill-content-renderer") /*id: 313138*/;
  var asyncSkillContentBlock_1 = require("async-skill-content-block_1") /*id: 939272*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      isBlockFinished: r,
      isLatestBlock: i,
      isBroken: l,
      blockId: c,
      conversationId: d,
      inMessageFinish: u = true,
      isLegacyWriteArtifactMessage: f,
      trackEvent: p
    } = e;
    let v = n.block.content?.search_query_result_block;
    if (!v || f && i) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentRenderer.renderSkillContent, {
        ...asyncSkillContentBlock_1.skillContentBlock,
        isBlockFinished: r,
        isBroken: l,
        blockId: c,
        conversationId: d,
        trackEvent: p,
        blockContent: v,
        isMessageFinished: u,
        blockV2: true
      });
    }
  });
  function d(e, t, n) {
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
  class u {
    constructor() {
      d(this, "nodeTypes", searchQueryBlockTypes.searchBlockTypes);
      d(this, "Content", c);
      d(this, "usePropsSelector", messageBlockStatusTracker.trackMessageBlockStatus);
    }
  }
  require.r(exports);
  require.d(exports, {
    SearchQueryResultNodeRenderPlugin: function () {
      return u;
    }
  });
}