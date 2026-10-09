// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'o' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'l' to 'deepResearchStore'
// - Resolved require(354150) to 'deep-research-store'
// - Renamed variable 's' to 'deepResearchMessageSymbol'
// - Resolved require(909538) to 'deep-research-message-symbol'
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'O' to 'getDeepResearchStore' (module 354150)
// - Updated imported property 'j' to 'deepResearchSymbol' (module 909538)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 676065
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var deepResearchStore = require("deep-research-store") /*id: 354150*/;
  var deepResearchMessageSymbol = require("deep-research-message-symbol") /*id: 909538*/;
  class c {
    beforeMessageSending(e, t) {
      let n = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(t, ["ext", "references"]), []);
      if (n.length > 0) {
        t = {
          ...t,
          references: [{
            type: "text",
            content: (n == null ? undefined : n[0]?.text) ?? ""
          }]
        };
      }
      return t;
    }
    onMessageReceivingEnd(e, t) {
      let n = t.conversation_id;
      if (n && messageContentTypeAndStatusChecker.Gg$(t) && chatMessageStatusCheck.isMessageFinished(t)) {
        let e = deepResearchStore.getDeepResearchStore.getState().breakModalDestroyers[n];
        if (typeof e == "function") {
          e();
          deepResearchStore.getDeepResearchStore.getState().removeBreakModalDestroyer(n);
        }
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = deepResearchMessageSymbol.deepResearchSymbol;
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    DeepResearchMessageLifeCyclePlugin: function () {
      return c;
    }
  });
}