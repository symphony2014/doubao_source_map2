// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'r' to 'asyncSkillContentBlock_4'
// - Resolved require(491399) to 'async-skill-content-block_4'
// - Renamed variable 'o' to 'asyncSkillContentBlock_2'
// - Resolved require(649) to 'async-skill-content-block_2'
// - Renamed variable 'l' to 'agentCardBlockSymbol'
// - Resolved require(958754) to 'agent-card-block-symbol'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'bg' to 'titleType' (module 617019)
// - Updated imported property 'P' to 'AsyncSkillContentBlock' (module 491399)
// - Updated imported property 'p' to 'AsyncSkillContentBlock' (module 649)
// - Updated imported property 'F' to 'agentCardBlockSym' (module 958754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 143837
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var asyncSkillContentBlock_4 = require("async-skill-content-block_4") /*id: 491399*/;
  var asyncSkillContentBlock_2 = require("async-skill-content-block_2") /*id: 649*/;
  var agentCardBlockSymbol = require("agent-card-block-symbol") /*id: 958754*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e, t, n) {
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
  let c = e => {
    let {
      contentBlock: t
    } = e;
    if (t.content_obj && t.content_obj.style === skillMessageLifecycleTypes.titleType.STEP) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_4.AsyncSkillContentBlock, {
        ...e
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_2.AsyncSkillContentBlock, {
        ...e
      });
    }
  };
  class d {
    constructor() {
      s(this, "pluginIdentifier", agentCardBlockSymbol.agentCardBlockSym);
      s(this, "type", "Container");
      s(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCodeAgentProcessCardBlockContentPlugin: function () {
      return d;
    }
  });
}