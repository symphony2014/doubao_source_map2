// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'o' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'a' to 'musicGenerateToken'
// - Resolved require(361288) to 'music-generate-token'
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'F' to 'musicGenerateToken' (module 361288)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 183659
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var musicGenerateToken = require("music-generate-token") /*id: 361288*/;
  class l {
    messageToSamanthaChatMessage(e) {
      let {
        variables: a = {}
      } = JSON.parse((e == null ? undefined : e.ext?.input_skill) || "{}");
      let l = {
        text: String(e.content_obj?.text || ""),
        lyric: String((a == null ? undefined : a.lyric) || ""),
        theme: String((a == null ? undefined : a.theme) || ""),
        mood: String((a == null ? undefined : a.mood) || ""),
        genre: String((a == null ? undefined : a.genre) || ""),
        gender: String((a == null ? undefined : a.gender) || ""),
        generation_type: String((a == null ? undefined : a.generation_type) || "")
      };
      return {
        content: safeJsonUtils.safeStringify(l),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillMusicGen]
      };
    }
    samanthaChatMessageToMessage(e) {
      return {
        ...e,
        content_obj: {
          ...e.content_obj,
          ...(e.content_obj?.tasks || {})
        }
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = musicGenerateToken.musicGenerateToken;
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
    MusicGenerateChatProtocolTransformPlugin: function () {
      return l;
    }
  });
}