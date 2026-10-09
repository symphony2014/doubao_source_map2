// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'o' to 'checkImageContentType'
// - Resolved require(490356) to 'check-image-content-type'
// - Renamed variable 'a' to 'chatImageListMapper'
// - Resolved require(58874) to 'chat-image-list-mapper'
// - Renamed variable 'l' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 'u' to 'chatImageDataMapper'
// - Resolved require(834558) to 'chat-image-data-mapper'
// - Renamed variable 's' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'c' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'd' to 'eduExerciseSymbol'
// - Resolved require(702955) to 'edu-exercise-symbol'
// - Updated imported property 's' to 'isImageContentType' (module 490356)
// - Updated imported property 'w' to 'normalizeImageList' (module 58874)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'd' to 'mapImageData' (module 834558)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property '$' to 'eduExerciseSymbol' (module 702955)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 204453
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var checkImageContentType = require("check-image-content-type") /*id: 490356*/;
  var chatImageListMapper = require("chat-image-list-mapper") /*id: 58874*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var chatImageDataMapper = require("chat-image-data-mapper") /*id: 834558*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var eduExerciseSymbol = require("edu-exercise-symbol") /*id: 702955*/;
  class _ {
    aliceChatMessageToMessage(e) {
      let i = [];
      if (e == null ? undefined : e.content_obj?.image_list) {
        e.content_obj.data = e.content_obj.image_list;
        delete e.content_obj.image_list;
      }
      if (checkImageContentType.isImageContentType(e) && e.content_obj) {
        i.push(...chatImageListMapper.normalizeImageList(e.content_obj));
      }
      if ((e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.Nested) {
        i.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
        let t = chatImageDataMapper.mapImageData(i);
        e.content_obj = {
          data: t
        };
        e.content_type = chatMessageTypes.ContentType.Image;
      }
      e.attachments = i;
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let n = {
        text: (t == null ? undefined : t.text) || ""
      };
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillEdu],
        attachments: e.attachments
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = eduExerciseSymbol.eduExerciseSymbol;
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
    ExerciseChatProtocolTransformPlugin: function () {
      return _;
    }
  });
}