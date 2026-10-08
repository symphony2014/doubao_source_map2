// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'o' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'extractSamanthaRefImages'
// - Resolved require(203149) to 'extract-samantha-ref-images'
// - Renamed variable 'u' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 's' to 'imageGenerateSymbol'
// - Resolved require(218951) to 'image-generate-symbol'
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'L' to 'extractRefImages' (module 203149)
// - Updated imported property 'tt' to 'editImageContext' (module 397273)
// - Updated imported property 'gv' to 'finishedImageContext' (module 397273)
// - Updated imported property 'n' to 'skillVariables' (module 397273)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'G' to 'imageGenerateSymbol' (module 218951)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 995526
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractSamanthaRefImages = require("extract-samantha-ref-images") /*id: 203149*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var imageGenerateSymbol = require("image-generate-symbol") /*id: 218951*/;
  class c {
    aliceChatMessageToMessage(e, t) {
      let {
        content_obj: n
      } = e;
      if (n == null ? undefined : n.image_list) {
        safePropertyAssignUtil.safePropertyAssign(n, {
          data: n == null ? undefined : n.image_list
        });
        safePropertyAssignUtil.safePropertyAssign(e, {
          content_obj: n
        });
        if (n != null) {
          delete n.image_list;
        }
      }
      if (messageContentTypeAndStatusChecker.RUP(e)) {
        safePropertyAssignUtil.safePropertyAssign(n, e == null ? undefined : e.ext);
      }
      let r = extractSamanthaRefImages.extractRefImages(t.ext);
      if (r == null ? undefined : r.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: r
        });
      }
      safePropertyAssignUtil.safePropertyAssign(e, {
        content_obj: {
          ...e.content_obj,
          ...skillMessageProcessor.editImageContext(t.ext),
          ...skillMessageProcessor.finishedImageContext(t.ext)
        }
      });
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let {
        attachments: n = []
      } = e;
      let i = e.content_obj;
      return {
        content: JSON.stringify({
          ...i,
          text: (i == null ? undefined : i.text) || "",
          ...skillMessageProcessor.skillVariables(e.ext),
          ...skillMessageProcessor.editImageContext(e.ext),
          ...skillMessageProcessor.finishedImageContext(e.ext),
          use_creation: e.ext?.use_creation === "1"
        }),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillImageGen],
        attachments: [...n]
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = imageGenerateSymbol.imageGenerateSymbol;
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
    ImageGenerateChatProtocolTransformPlugin: function () {
      return c;
    }
  });
}