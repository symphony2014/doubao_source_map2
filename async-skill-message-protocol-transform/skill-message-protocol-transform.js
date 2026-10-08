// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'o' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'a' to 'deepResearchSymbol'
// - Resolved require(179344) to 'deep-research-symbol'
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'C' to 'deepResearchSymbol' (module 179344)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 23567
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var deepResearchSymbol = require("deep-research-symbol") /*id: 179344*/;
  class l {
    aliceChatMessageToMessage(e, t) {
      return e;
    }
    messageToSamanthaChatMessage(e) {
      var n;
      let a = e.content_obj;
      return {
        content: safeJsonUtils.safeStringify({
          text: (a == null ? undefined : a.text) || "",
          ...((a == null ? undefined : a.direct_research) ? {
            direct_research: true
          } : {})
        }),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillDeepResearch],
        ...((n = e == null ? undefined : e.references?.length) !== null && n !== undefined && n ? {
          references: e == null ? undefined : e.references
        } : {})
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = deepResearchSymbol.deepResearchSymbol;
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
    DeepResearchChatProtocolTransformPlugin: function () {
      return l;
    }
  });
}