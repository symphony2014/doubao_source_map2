// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'extractMessageLogId'
// - Resolved require(429047) to 'extract-message-log-id'
// - Renamed variable 'i' to 'searchRichMediaNodeRenderer'
// - Resolved require(246422) to 'search-rich-media-node-renderer'
// - Updated imported property 'fd' to 'searchRichMediaNodeRenderer' (module 246422)
// - Updated imported property 'W' to 'extractMessageLogId' (module 429047)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 703791
         */
module.exports = function (module, exports, require) {
  var extractMessageLogId = require("extract-message-log-id") /*id: 429047*/;
  var searchRichMediaNodeRenderer = require("search-rich-media-node-renderer") /*id: 246422*/;
  function r(e, t, n) {
    var l;
    if ((t = typeof (l = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var l = n.call(e, t || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? l : l + "") in e) {
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
      r(this, "nodeTypes", ["block_type:10050"]);
      r(this, "Content", searchRichMediaNodeRenderer.searchRichMediaNodeRenderer);
      r(this, "usePropsSelector", extractMessageLogId.extractMessageLogId);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchRichMediaNodeRenderPlugin: function () {
      return o;
    }
  });
}