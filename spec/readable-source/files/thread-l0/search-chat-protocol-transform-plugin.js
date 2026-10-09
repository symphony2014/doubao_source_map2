// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'o' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'a' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'l' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'u' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 's' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'c' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 'd' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable '_' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'v' to 'chatSearchSymbol'
// - Resolved require(146954) to 'chat-search-symbol'
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'NW' to 'searchBarConfig' (module 397273)
// - Updated imported property 'yz' to 'altCardFlag' (module 397273)
// - Updated imported property 'op' to 'pdfHoverPosition' (module 397273)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'LL' to 'ThinkModes' (module 746101)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'F' to 'searchSymbol' (module 146954)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 113120
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatSearchSymbol = require("chat-search-symbol") /*id: 146954*/;
  class f {
    aliceChatMessageToMessage(e, t) {
      safePropertyAssignUtil.safePropertyAssign(e, {
        message_action_bar: {
          invisible: messageContentTypeAndStatusChecker.brY(t),
          config: skillMessageProcessor.searchBarConfig(t.ext)
        },
        content_obj: {
          ...e.content_obj,
          ...skillMessageProcessor.altCardFlag(t.ext),
          ...skillMessageProcessor.pdfHoverPosition(t.ext)
        }
      });
      if (messageContentTypeAndStatusChecker.H6e(e)) {
        var n;
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
      }
      return e;
    }
    samanthaChatMessageToMessage(e) {
      if (messageContentTypeAndStatusChecker.lpb(e)) {
        var t;
        var n;
        let i = (t = e.content_obj.tags) === null || t === undefined ? undefined : t.includes(chatCoreConstants.ThinkModes.ThinkReasonR1);
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
        return {
          ...e,
          ...(i ? {
            has_think_reason: i,
            think_reason_default_expand: true
          } : {})
        };
      }
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let n = {
        text: (t == null ? undefined : t.text) || "",
        ...throttledPathFilterStringify.throttledPathStr(t, ["hover_position"])
      };
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillSearch],
        attachments: [...(e.attachments || [])]
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatSearchSymbol.searchSymbol;
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
    SearchChatProtocolTransformPlugin: function () {
      return f;
    }
  });
}