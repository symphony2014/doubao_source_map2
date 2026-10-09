// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'i' to 'chatSkillMessageCard'
// - Resolved require(351565) to 'chat-skill-message-card'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'W' to 'SkillMessageCard' (module 351565)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 590483
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var chatSkillMessageCard = require("chat-skill-message-card") /*id: 351565*/;
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
  let o = (e, t) => ({
    message: messageContextDefinition.useMessage(),
    block: t
  });
  class a {
    constructor() {
      l(this, "nodeTypes", ["block_type:10030 | artifact_block.resource_type:4"]);
      l(this, "Content", chatSkillMessageCard.SkillMessageCard);
      l(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    StopDocNodeRenderPlugin: function () {
      return a;
    }
  });
}