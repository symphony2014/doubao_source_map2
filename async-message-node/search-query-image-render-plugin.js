// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'searchQueryBlockTypes_1'
// - Resolved require(594576) to 'search-query-block-types_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'a' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(30665) to 'search-image-block'
// - Resolved require.bind(691965) to 'search-image-block-component'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'e' to 'searchQueryBlockTypes' (module 594576)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 767114
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
  var searchQueryBlockTypes_1 = require("search-query-block-types_1") /*id: 594576*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => require.e("search-image-block") /*id: 30665*/.then(require.bind(require, "search-image-block-component") /*id: 691965*/)).then(e => ({
    default: e.SearchImageBlockInner
  }))));
  let d = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      isBlockFinished: i,
      isBroken: l
    } = e;
    let r = n.block.content?.search_query_result_block;
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        isBlockFinished: i,
        isBroken: l,
        blockContent: r
      });
    } else {
      return null;
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
  class p {
    constructor() {
      u(this, "nodeTypes", searchQueryBlockTypes_1.searchQueryBlockTypes);
      u(this, "Content", d);
      u(this, "usePropsSelector", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    SearchQueryResultImageNodeRenderPlugin: function () {
      return p;
    }
  });
}