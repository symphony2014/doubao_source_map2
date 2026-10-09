// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageMapper'
// - Resolved require(783712) to 'chat-message-mapper'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'memoryTagPopoverComponent'
// - Resolved require(484510) to 'memory-tag-popover-component'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'O' to 'MemoryTagPopover' (module 484510)
// - Updated imported property 'W' to 'messageMapper' (module 783712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 553566
         */
module.exports = function (module, exports, require) {
  var chatMessageMapper = require("chat-message-mapper") /*id: 783712*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var memoryTagPopoverComponent = require("memory-tag-popover-component") /*id: 484510*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.memo(e => reactJsxRuntimeCoreReexport.jsx(memoryTagPopoverComponent.MemoryTagPopover, {
    ...e,
    isShare: true
  }));
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
      s(this, "nodeTypes", ["block_type:10055"]);
      s(this, "Content", a);
      s(this, "usePropsSelector", chatMessageMapper.messageMapper);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveMemoryNodeRenderPlugin: function () {
      return c;
    }
  });
}