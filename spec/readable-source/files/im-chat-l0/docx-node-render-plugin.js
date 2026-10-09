// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'i' to 'chatArtifactRenderer'
// - Resolved require(48256) to 'chat-artifact-renderer'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property '$' to 'ChatArtifactCard' (module 48256)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 286357
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var chatArtifactRenderer = require("chat-artifact-renderer") /*id: 48256*/;
  function r(e, t, n) {
    var l;
    if ((t = typeof (l = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var l = n.call(e, t || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? l : l + "") in e) {
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
      r(this, "nodeTypes", ["block_type:10030 | artifact_block.resource_type:3", "block_type:10030 | artifact_block.resource_type:6", "block_type:10030 | artifact_block.resource_type:10", "block_type:10030 | artifact_block.resource_type:11"]);
      r(this, "Content", chatArtifactRenderer.ChatArtifactCard);
      r(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    DocxNodeRenderPlugin: function () {
      return a;
    }
  });
}