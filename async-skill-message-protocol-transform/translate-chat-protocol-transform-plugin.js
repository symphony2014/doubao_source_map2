// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'o' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'a' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'u' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 's' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'c' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'd' to 'translateSymbol'
// - Resolved require(415084) to 'translate-symbol'
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'Bk' to 'inputSkillConfig' (module 397273)
// - Updated imported property 'op' to 'pdfHoverPosition' (module 397273)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'V' to 'translate' (module 415084)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 462082
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var translateSymbol = require("translate-symbol") /*id: 415084*/;
  class _ {
    aliceChatMessageToMessage(e, t) {
      var n;
      safePropertyAssignUtil.safePropertyAssign(e, {
        content_obj: {
          ...e.content_obj,
          ...skillMessageProcessor.inputSkillConfig(t.ext),
          ...skillMessageProcessor.pdfHoverPosition(t.ext)
        }
      });
      if ((n = e.meta_infos) === null || n === undefined ? undefined : n.some(e => e.type === chatMessageTypes.MetaType.Think)) {
        let {
          text: t,
          is_hide: n
        } = aiChatSourceExtractor.extractThinkMeta(e.meta_infos);
        safePropertyAssignUtil.safePropertyAssign(e, {
          has_think_reason: true,
          think_reason_default_expand: true,
          think_reason_is_hide: n,
          content_obj: {
            ...e.content_obj,
            think: t
          }
        });
      }
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let n = {
        text: (t == null ? undefined : t.text) || "",
        ...skillMessageProcessor.inputSkillConfig(e.ext),
        ...throttledPathFilterStringify.throttledPathStr(t, ["hover_position"])
      };
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillTranslate]
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = translateSymbol.translate;
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
    TranslateChatProtocolTransformPlugin: function () {
      return _;
    }
  });
}