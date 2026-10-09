// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'l' to 'messageOutlineRenderer'
// - Resolved require(95837) to 'message-outline-renderer'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'l' to 'MessageOutlineRenderer' (module 95837)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 298054
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var messageOutlineRenderer = require("message-outline-renderer") /*id: 95837*/;
  function r(e, t, n) {
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
  let o = e => ({
    message: messageContextDefinition.useMessage()
  });
  class a {
    constructor() {
      r(this, "nodeTypes", ["block_type:10060"]);
      r(this, "Content", messageOutlineRenderer.MessageOutlineRenderer);
      r(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    WritingOutlineNodeRenderPlugin: function () {
      return a;
    }
  });
}