// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'deepResearchStore'
// - Resolved require(354150) to 'deep-research-store'
// - Renamed variable 'o' to 'processingBlockContent'
// - Resolved require(241939) to 'processing-block-content'
// - Updated imported property 'O' to 'getDeepResearchStore' (module 354150)
// - Updated imported property 'h' to 'blockContentHandler' (module 241939)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 326997
         */
module.exports = function (module, exports, require) {
  var deepResearchStore = require("deep-research-store") /*id: 354150*/;
  let i = e => {
    let {
      operation: t,
      contentBlockTree: n
    } = e;
    if (t === "update") {
      let {
        children: e
      } = n;
      let {
        id: t
      } = n ?? {};
      deepResearchStore.getDeepResearchStore.getState().updateDeepResearchProcessData({
        blockId: t,
        value: e
      });
    }
  };
  var processingBlockContent = require("processing-block-content") /*id: 241939*/;
  function a(e, t, n) {
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
  class l {
    constructor() {
      a(this, "pluginIdentifier", processingBlockContent.blockContentHandler);
      a(this, "resolveContentBlock", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    HandleProcessingBlockContentChildren: function () {
      return l;
    }
  });
}