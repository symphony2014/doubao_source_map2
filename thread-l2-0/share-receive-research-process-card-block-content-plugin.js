// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'r' to 'asyncSkillContentBlock_4'
// - Resolved require(491399) to 'async-skill-content-block_4'
// - Renamed variable 'a' to 'asyncSkillContentBlock_2'
// - Resolved require(649) to 'async-skill-content-block_2'
// - Renamed variable 'o' to 'agentCardBlockSymbol'
// - Resolved require(958754) to 'agent-card-block-symbol'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'bg' to 'titleType' (module 617019)
// - Updated imported property 'p' to 'AsyncSkillContentBlock' (module 649)
// - Updated imported property 'P' to 'AsyncSkillContentBlock' (module 491399)
// - Updated imported property 'F' to 'agentCardBlockSym' (module 958754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 182367
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var asyncSkillContentBlock_4 = require("async-skill-content-block_4") /*id: 491399*/;
  var asyncSkillContentBlock_2 = require("async-skill-content-block_2") /*id: 649*/;
  var agentCardBlockSymbol = require("agent-card-block-symbol") /*id: 958754*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e, t, i) {
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
  let c = e => {
    let {
      contentBlock: t
    } = e;
    if (!t.content_obj || "style" in t.content_obj && t.content_obj.style !== skillMessageLifecycleTypes.titleType.STEP) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_2.AsyncSkillContentBlock, {
        ...e
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_4.AsyncSkillContentBlock, {
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
    ShareReceiveResearchProcessCardBlockContentPlugin: function () {
      return d;
    }
  });
}