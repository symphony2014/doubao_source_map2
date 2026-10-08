// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'l' to 'deepResearchReportCardComponent'
// - Resolved require(1428) to 'deep-research-report-card-component'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'Q' to 'DeepResearchReportCard' (module 1428)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 989054
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var deepResearchReportCardComponent = require("deep-research-report-card-component") /*id: 1428*/;
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
  let o = (e, t) => {
    return {
      message: messageContextDefinition.useMessage(),
      blockId: t.block_id,
      researchBlock: t.content?.research_block,
      shareMode: true
    };
  };
  class a {
    constructor() {
      r(this, "nodeTypes", ["block_type:10011"]);
      r(this, "Content", deepResearchReportCardComponent.DeepResearchReportCard);
      r(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    DeepResearchDocNodeRenderPlugin: function () {
      return a;
    }
  });
}