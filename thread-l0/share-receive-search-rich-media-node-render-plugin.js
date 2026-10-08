// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'extractMessageLogId'
// - Resolved require(429047) to 'extract-message-log-id'
// - Renamed variable 'r' to 'searchRichMediaNodeRenderer'
// - Resolved require(246422) to 'search-rich-media-node-renderer'
// - Updated imported property 'tj' to 'shareableRichMediaNodeRenderer' (module 246422)
// - Updated imported property 'W' to 'extractMessageLogId' (module 429047)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l0.92c0a8ab.js
         * chunkId: 99008
         * moduleId: 832848
         */
module.exports = function (module, exports, require) {
  var extractMessageLogId = require("extract-message-log-id") /*id: 429047*/;
  var searchRichMediaNodeRenderer = require("search-rich-media-node-renderer") /*id: 246422*/;
  function o(e, t, n) {
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
  class l {
    constructor() {
      o(this, "nodeTypes", ["block_type:10050"]);
      o(this, "Content", searchRichMediaNodeRenderer.shareableRichMediaNodeRenderer);
      o(this, "usePropsSelector", extractMessageLogId.extractMessageLogId);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchRichMediaNodeRenderPlugin: function () {
      return l;
    }
  });
}