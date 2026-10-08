// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'o' to 'chatProcessCardIdentifier'
// - Resolved require(155626) to 'chat-process-card-identifier'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'e' to 'processCardBlockId' (module 155626)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 378981
         */
module.exports = function (module, exports, require) {
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
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
      codingSkillStoreModule.codingSkillStore.getState().updateAgentProcessData({
        blockId: t,
        value: e
      });
    }
  };
  var chatProcessCardIdentifier = require("chat-process-card-identifier") /*id: 155626*/;
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
      a(this, "pluginIdentifier", chatProcessCardIdentifier.processCardBlockId);
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