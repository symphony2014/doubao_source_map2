// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'i' to 'asyncSkillReceiveMessageBox_6'
// - Resolved require(874614) to 'async-skill-receive-message-box_6'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'n' to 'SkillReceiveMessage' (module 874614)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 903121
         */
module.exports = function (module, exports, require) {
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  var asyncSkillReceiveMessageBox_6 = require("async-skill-receive-message-box_6") /*id: 874614*/;
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
  let o = () => ({
    message: messageContextDefinition.useMessage()
  });
  class a {
    constructor() {
      l(this, "nodeTypes", ["block_type:10060"]);
      l(this, "Content", asyncSkillReceiveMessageBox_6.SkillReceiveMessage);
      l(this, "usePropsSelector", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    WritingOutlineNodeRenderPlugin: function () {
      return a;
    }
  });
}