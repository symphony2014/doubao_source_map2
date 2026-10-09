// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'i' to 'deepResearchReportCardComponent'
// - Resolved require(1428) to 'deep-research-report-card-component'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'Q' to 'DeepResearchReportCard' (module 1428)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 712824
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var deepResearchReportCardComponent = require("deep-research-report-card-component") /*id: 1428*/;
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
  let o = (e, t) => {
    return {
      message: messageContextDefinition.useMessage(),
      blockId: t.block_id,
      researchBlock: t.content?.research_block
    };
  };
  class a {
    constructor() {
      l(this, "nodeTypes", ["block_type:10011"]);
      l(this, "Content", deepResearchReportCardComponent.DeepResearchReportCard);
      l(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    DeepResearchDocNodeRenderPlugin: function () {
      return a;
    }
  });
}