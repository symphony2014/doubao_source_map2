// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'o' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'u' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 's' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'c' to 'codingSkillChatUtils_1'
// - Resolved require(269786) to 'coding-skill-chat-utils_1'
// - Renamed variable 'd' to 'codeAssistantConstant'
// - Resolved require(750462) to 'code-assistant-constant'
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'YZ' to 'getContextVariables' (module 269786)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'F' to 'codeAssistantId' (module 750462)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 619521
         */
module.exports = function (module, exports, require) {
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var codingSkillChatUtils_1 = require("coding-skill-chat-utils_1") /*id: 269786*/;
  var codeAssistantConstant = require("code-assistant-constant") /*id: 750462*/;
  class _ {
    aliceChatMessageToMessage(e) {
      if (messageContentTypeAndStatusChecker.ePZ(e)) {
        var t;
        if ((t = e.meta_infos) === null || t === undefined ? undefined : t.some(e => e.type === chatMessageTypes.MetaType.Think)) {
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
            has_think_reason: !!t,
            think_reason_default_expand: true,
            think_reason_is_hide: n
          };
        }
      }
      return e;
    }
    samanthaChatMessageToMessage(e) {
      if (messageContentTypeAndStatusChecker.ePZ(e)) {
        var t;
        if ((t = e.meta_infos) === null || t === undefined ? undefined : t.some(e => e.type === chatMessageTypes.MetaType.Think)) {
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
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let n = {
        text: (t == null ? undefined : t.text) || ""
      };
      let {
        attachments: i
      } = e;
      let a = [...parseReferenceContentArray.parseReferenceContentArray(e.ext)];
      let u = (a == null ? undefined : a.length) > 0 ? codingSkillChatUtils_1.getContextVariables(a) : undefined;
      let d = a.find(e => {
        return e.extra?.remix_submission_id;
      });
      let _ = a.filter(e => !!e.content || !!e.key || !!e.identifier);
      if (u) {
        n.context_variables = u;
      }
      if (d) {
        n.remix_submission_id = d == null ? undefined : d.extra?.remix_submission_id;
      }
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant],
        attachments: i,
        references: _
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = codeAssistantConstant.codeAssistantId;
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
    CodeAssistantChatProtocolTransformPlugin: function () {
      return _;
    }
  });
}