// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatMessageMapper'
// - Resolved require(783712) to 'chat-message-mapper'
// - Renamed variable 'i' to 'memoryTagPopoverComponent'
// - Resolved require(484510) to 'memory-tag-popover-component'
// - Updated imported property 'O' to 'MemoryTagPopover' (module 484510)
// - Updated imported property 'W' to 'messageMapper' (module 783712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 886150
         */
module.exports = function (module, exports, require) {
  var chatMessageMapper = require("chat-message-mapper") /*id: 783712*/;
  var memoryTagPopoverComponent = require("memory-tag-popover-component") /*id: 484510*/;
  function l(e, t, n) {
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
  class o {
    constructor() {
      l(this, "nodeTypes", ["block_type:10055"]);
      l(this, "Content", memoryTagPopoverComponent.MemoryTagPopover);
      l(this, "usePropsSelector", chatMessageMapper.messageMapper);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveMemoryNodeRenderPlugin: function () {
      return o;
    }
  });
}