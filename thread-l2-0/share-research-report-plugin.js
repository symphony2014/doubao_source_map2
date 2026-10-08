// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'receiveResearchDocConstant'
// - Resolved require(675457) to 'receive-research-doc-constant'
// - Renamed variable 'r' to 'deepResearchReportCardComponent'
// - Resolved require(1428) to 'deep-research-report-card-component'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Q' to 'DeepResearchReportCard' (module 1428)
// - Updated imported property 'e' to 'receiveResearchDocBlock' (module 675457)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 540783
         */
module.exports = function (module, exports, require) {
  var receiveResearchDocConstant = require("receive-research-doc-constant") /*id: 675457*/;
  var deepResearchReportCardComponent = require("deep-research-report-card-component") /*id: 1428*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let l = e => reactJsxRuntimeCoreReexport.jsx(deepResearchReportCardComponent.DeepResearchReportCard, {
    blockId: e.contentBlock.id,
    researchBlock: e.contentBlock.content_obj,
    ...e,
    shareMode: true
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", receiveResearchDocConstant.receiveResearchDocBlock);
      o(this, "type", "Container");
      o(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveResearchReportBlockContentPlugin: function () {
      return s;
    }
  });
}