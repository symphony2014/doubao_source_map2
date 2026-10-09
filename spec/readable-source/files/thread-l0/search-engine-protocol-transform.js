// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'o' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'a' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'l' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 's' to 'searchEngineSymbol'
// - Resolved require(863941) to 'search-engine-symbol'
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'l' to 'searchEngine' (module 863941)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 867506
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var searchEngineSymbol = require("search-engine-symbol") /*id: 863941*/;
  class c {
    aliceChatMessageToMessage(e, t) {
      var n;
      safePropertyAssignUtil.safePropertyAssign(e, {
        content_obj: {
          ...e.content_obj
        }
      });
      if ((n = e.meta_infos) === null || n === undefined ? undefined : n.some(e => e.type === chatMessageTypes.MetaType.Think)) {
        let {
          text: t,
          is_hide: n
        } = aiChatSourceExtractor.extractThinkMeta(e.meta_infos);
        return {
          ...e,
          content_obj: {
            ...e.content_obj,
            think: t
          },
          has_think_reason: true,
          think_reason_default_expand: true,
          think_reason_is_hide: n
        };
      }
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let n = {
        text: (t == null ? undefined : t.text) || "",
        up_template_key: (t == null ? undefined : t.up_template_key) || ""
      };
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillSearchEngine]
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = searchEngineSymbol.searchEngine;
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
    SearchEngineChatProtocolTransformPlugin: function () {
      return c;
    }
  });
}