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
// - Renamed variable 'l' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'u' to 'checkFileContentType'
// - Resolved require(934971) to 'check-file-content-type'
// - Renamed variable 's' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 'c' to 'chatAttachmentFormatter'
// - Resolved require(220315) to 'chat-attachment-formatter'
// - Renamed variable 'd' to 'chatLinkMapper'
// - Resolved require(744290) to 'chat-link-mapper'
// - Renamed variable '_' to 'imageDataTransformer'
// - Resolved require(122135) to 'image-data-transformer'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'p' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'm' to 'podcastSymbol'
// - Resolved require(969505) to 'podcast-symbol'
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'a' to 'formatFileList' (module 220315)
// - Updated imported property 'X' to 'isFileContentType' (module 934971)
// - Updated imported property 'k' to 'createChatLink' (module 744290)
// - Updated imported property 'd' to 'transformImageData' (module 122135)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'b' to 'podcastSymbol' (module 969505)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 247587
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var checkFileContentType = require("check-file-content-type") /*id: 934971*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var podcastSymbol = require("podcast-symbol") /*id: 969505*/;
  class g {
    samanthaChatMessageToMessage(e) {
      return e;
    }
    aliceChatMessageToMessage(e) {
      var a;
      let m = [];
      if (checkNestedContentType.isNestedContentType(e)) {
        m.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
      }
      if (e.content_obj?.file_model) {
        m.push(...chatAttachmentFormatter.formatFileList(e.content_obj.file_model));
      }
      if (checkFileContentType.isFileContentType(e) && e.content_obj) {
        m.push(...chatAttachmentFormatter.formatFileList(e.content_obj));
      }
      if (e.content_obj?.link_model) {
        m.push(chatLinkMapper.createChatLink(e.content_obj.link_model));
      }
      if (e.content_obj?.image_model) {
        m.push(...imageDataTransformer.transformImageData(e.content_obj.image_model?.image_list));
      }
      if (m == null ? undefined : m.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: m
        });
      }
      if ((a = e.meta_infos) === null || a === undefined ? undefined : a.some(e => e.type === chatMessageTypes.MetaType.Think)) {
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
      var t;
      let n = e.content_obj;
      let i = (n == null ? undefined : (t = n.text) === null || t === undefined ? undefined : t.trim()) || i18nTranslationUtils.i18nextTranslate("podcast_chat_option_generate");
      return {
        content: safeJsonUtils.safeStringify({
          text: i
        }),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillAiPodcast],
        attachments: e.attachments
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = podcastSymbol.podcastSymbol;
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
    PodcastChatProtocolTransformPlugin: function () {
      return g;
    }
  });
}