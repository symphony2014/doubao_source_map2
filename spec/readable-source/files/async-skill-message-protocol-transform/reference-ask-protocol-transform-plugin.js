// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'o' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'a' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'l' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'u' to 'referenceAskSymbol'
// - Resolved require(335530) to 'reference-ask-symbol'
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'V' to 'ReferenceAsk' (module 335530)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 416939
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var referenceAskSymbol = require("reference-ask-symbol") /*id: 335530*/;
  class s {
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let n = {
        text: (t == null ? undefined : t.text) || "",
        ...throttledPathFilterStringify.throttledPathStr(t, ["immersive_files", "need_reference", "prompt_tpl", "hover_position"])
      };
      let u = [...parseReferenceContentArray.parseReferenceContentArray(e.ext)];
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.DesExtSkillReferenceAsk],
        attachments: [],
        references: u
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = referenceAskSymbol.ReferenceAsk;
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
    ReferenceAskProtocolTransformPlugin: function () {
      return s;
    }
  });
}