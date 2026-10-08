// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'blockStatusAnalyzer'
// - Resolved require(446193) to 'block-status-analyzer'
// - Renamed variable 'i' to 'codeBlockWrapper'
// - Resolved require(509970) to 'code-block-wrapper'
// - Updated imported property 'V' to 'CodeBlockWrapper' (module 509970)
// - Updated imported property 'Z' to 'getBlockStatus' (module 446193)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 605835
         */
module.exports = function (module, exports, require) {
  var blockStatusAnalyzer = require("block-status-analyzer") /*id: 446193*/;
  var codeBlockWrapper = require("code-block-wrapper") /*id: 509970*/;
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
      l(this, "nodeTypes", ["block_type:10008"]);
      l(this, "Content", codeBlockWrapper.CodeBlockWrapper);
      l(this, "usePropsSelector", blockStatusAnalyzer.getBlockStatus);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeBlockNodeRenderPlugin: function () {
      return o;
    }
  });
}