// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageBlockStatusTracker'
// - Resolved require(475669) to 'message-block-status-tracker'
// - Renamed variable 'r' to 'searchQueryBlockTypes'
// - Resolved require(167098) to 'search-query-block-types'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'asyncSkillSearchContent'
// - Resolved require(517565) to 'async-skill-search-content'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'D' to 'SkillSearchContent' (module 517565)
// - Updated imported property 'c' to 'searchBlockTypes' (module 167098)
// - Updated imported property 'Z' to 'trackMessageBlockStatus' (module 475669)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l0.92c0a8ab.js
         * chunkId: 99008
         * moduleId: 223095
         */
module.exports = function (module, exports, require) {
  var messageBlockStatusTracker = require("message-block-status-tracker") /*id: 475669*/;
  var searchQueryBlockTypes = require("search-query-block-types") /*id: 167098*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillSearchContent = require("async-skill-search-content") /*id: 517565*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      isLatestBlock: i,
      isLegacyWriteArtifactMessage: r
    } = e;
    let o = n.block.content?.search_query_result_block;
    if (!o || r && i) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillSearchContent.SkillSearchContent, {
        blockContent: o
      });
    }
  });
  function u(e, t, n) {
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
  class c {
    constructor() {
      u(this, "nodeTypes", searchQueryBlockTypes.searchBlockTypes);
      u(this, "Content", s);
      u(this, "usePropsSelector", messageBlockStatusTracker.trackMessageBlockStatus);
    }
  }
  require.r(exports);
  require.d(exports, {
    SearchQueryResultShareNodeRenderPlugin: function () {
      return c;
    }
  });
}