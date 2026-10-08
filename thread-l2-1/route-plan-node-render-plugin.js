// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'thinkingQueryItemRenderer_1'
// - Resolved require(713296) to 'thinking-query-item-renderer_1'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'y' to 'ThinkingQueryDisplay' (module 713296)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 241075
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => {
    var n;
    var r;
    let o = ((n = e.contentBlocks) === null || n === undefined ? undefined : n.findIndex(e => e.block_id === t.block_id)) === (e.contentBlocks?.length || 0) - 1;
    let a = (r = !!o && e.status?.isBroken) !== null && r !== undefined && r;
    let {
      is_finish: s
    } = t;
    return {
      isBlockFinished: s,
      isLatestBlock: o,
      isBroken: a
    };
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var thinkingQueryItemRenderer_1 = require("thinking-query-item-renderer_1") /*id: 713296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      isBlockFinished: i,
      isBroken: l
    } = e;
    let a = n.block.content?.route_block;
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItemRenderer_1.ThinkingQueryDisplay, {
        isBlockFinished: i,
        isBroken: l,
        blockContent: a
      });
    } else {
      return null;
    }
  });
  function s(e, t, n) {
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
      s(this, "nodeTypes", ["block_type:10026"]);
      s(this, "Content", a);
      s(this, "usePropsSelector", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    RoutePlanNodeRenderPlugin: function () {
      return c;
    }
  });
}