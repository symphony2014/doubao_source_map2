// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepResearchReportCardComponent'
// - Resolved require(1428) to 'deep-research-report-card-component'
// - Renamed variable 'r' to 'receiveResearchDocConstant'
// - Resolved require(675457) to 'receive-research-doc-constant'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Q' to 'DeepResearchReportCard' (module 1428)
// - Updated imported property 'e' to 'receiveResearchDocBlock' (module 675457)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 642106
         */
module.exports = function (module, exports, require) {
  var deepResearchReportCardComponent = require("deep-research-report-card-component") /*id: 1428*/;
  var receiveResearchDocConstant = require("receive-research-doc-constant") /*id: 675457*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e, t, n) {
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(deepResearchReportCardComponent.DeepResearchReportCard, {
    blockId: e.contentBlock.id,
    researchBlock: e.contentBlock.content_obj,
    ...e
  });
  class s {
    constructor() {
      l(this, "pluginIdentifier", receiveResearchDocConstant.receiveResearchDocBlock);
      l(this, "type", "Container");
      l(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveResearchReportBlockContentPlugin: function () {
      return s;
    }
  });
}