// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatMessageMergeThinking'
// - Resolved require(804275) to 'chat-message-merge-thinking'
// - Updated imported property '_' to 'mergeThinkingSymbol' (module 804275)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 933674
         */
module.exports = function (module, exports, require) {
  var chatMessageMergeThinking = require("chat-message-merge-thinking") /*id: 804275*/;
  class i {
    mergeContentBlock(t, e) {
      let i = ((t == null ? undefined : t.content_obj?.text) || "") + ((e == null ? undefined : e.content_obj?.text) || "");
      return {
        ...t,
        ...e,
        content_obj: {
          ...(t == null ? undefined : t.content_obj),
          ...(e == null ? undefined : e.content_obj),
          text: i
        }
      };
    }
    constructor() {
      var t;
      var e;
      var n;
      t = "pluginIdentifier";
      e = chatMessageMergeThinking.mergeThinkingSymbol;
      if ((t = typeof (n = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var n = t[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(t, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: e,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = e;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    receiveCreationThinkingMessageContentBlockMergePlugin: function () {
      return i;
    }
  });
}