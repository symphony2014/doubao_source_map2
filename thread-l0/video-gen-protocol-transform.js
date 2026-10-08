// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'objectExcludeFilterUtil'
// - Resolved require(194068) to 'object-exclude-filter-util'
// - Renamed variable 'o' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 's' to 'videoGenerationSymbol'
// - Resolved require(819899) to 'video-generation-symbol'
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'filterObjectExclude' (module 194068)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'X' to 'videoGenSymbol' (module 819899)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 733981
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var videoGenerationSymbol = require("video-generation-symbol") /*id: 819899*/;
  class c {
    aliceChatMessageToMessage(e, t) {
      return e;
    }
    samanthaChatMessageToMessage(e, t) {
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let {
        variables: n
      } = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["ext", "input_skill"]), {});
      return {
        content: JSON.stringify(objectExcludeFilterUtil.filterObjectExclude({
          text: (t == null ? undefined : t.text) || "",
          ratio: n == null ? undefined : n.ratio,
          camera_movement: n == null ? undefined : n.camera_movement
        }, isUndefinedCheck.isUndefined)),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration],
        attachments: (e == null ? undefined : e.attachments) || []
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = videoGenerationSymbol.videoGenSymbol;
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
    VideoGenerationChatProtocolTransformPlugin: function () {
      return c;
    }
  });
}