// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'genericToolBlockParser'
// - Resolved require(562433) to 'generic-tool-block-parser'
// - Renamed variable 'l' to 'threadIconTitleItem'
// - Resolved require(869438) to 'thread-icon-title-item'
// - Updated imported property 'V' to 'ThreadIconTitle' (module 869438)
// - Updated imported property 'Z' to 'parseToolBlockInfo' (module 562433)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 868435
         */
module.exports = function (module, exports, require) {
  var genericToolBlockParser = require("generic-tool-block-parser") /*id: 562433*/;
  var threadIconTitleItem = require("thread-icon-title-item") /*id: 869438*/;
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
  class o {
    constructor() {
      r(this, "nodeTypes", ["block_type:10024"]);
      r(this, "Content", threadIconTitleItem.ThreadIconTitle);
      r(this, "usePropsSelector", genericToolBlockParser.parseToolBlockInfo);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveGenericToolNodeRenderPlugin: function () {
      return o;
    }
  });
}