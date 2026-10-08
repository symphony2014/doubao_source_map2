// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'o' to 'arrayUniqBy'
// - Resolved require(342321) to 'array-uniq-by'
// - Renamed variable 'l' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'a' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'u' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'd' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'c' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable '_' to 'chatAttachmentFormatter'
// - Resolved require(220315) to 'chat-attachment-formatter'
// - Renamed variable 's' to 'chatLinkMapper'
// - Resolved require(744290) to 'chat-link-mapper'
// - Renamed variable 'p' to 'imageDataTransformer'
// - Resolved require(122135) to 'image-data-transformer'
// - Renamed variable 'f' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'v' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'm' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'h' to 'chatGenericConvSymbol'
// - Resolved require(692298) to 'chat-generic-conv-symbol'
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'a' to 'formatFileList' (module 220315)
// - Updated imported property 'k' to 'createChatLink' (module 744290)
// - Updated imported property 'd' to 'transformImageData' (module 122135)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'Z' to 'arrayUniqBy' (module 342321)
// - Updated imported property 'W' to 'genericConvSymbol' (module 692298)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-protocol-transform.12288ad1.js
         * chunkId: 92119
         * moduleId: 60250
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var arrayUniqBy = require("array-uniq-by") /*id: 342321*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatGenericConvSymbol = require("chat-generic-conv-symbol") /*id: 692298*/;
  class g {
    aliceChatMessageToMessage(e) {
      var o;
      let u = [];
      if (checkNestedContentType.isNestedContentType(e)) {
        u.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities, e.nestedItems));
      }
      if (e.content_obj?.file_model) {
        u.push(...chatAttachmentFormatter.formatFileList(e.content_obj.file_model));
      }
      if (e.content_obj?.link_model) {
        u.push(chatLinkMapper.createChatLink(e.content_obj.link_model));
      }
      if (e.content_obj?.image_model) {
        u.push(...imageDataTransformer.transformImageData(e.content_obj.image_model.image_list));
      }
      if (u == null ? undefined : u.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: u
        });
      }
      let m = parseReferenceContentArray.parseReferenceContentArray(e.ext);
      if (m == null ? undefined : m.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          references: m
        });
      }
      if ((o = e.meta_infos) === null || o === undefined ? undefined : o.some(e => e.type === chatMessageTypes.MetaType.Think)) {
        let {
          text: t,
          is_hide: i
        } = aiChatSourceExtractor.extractThinkMeta(e.meta_infos);
        return {
          ...e,
          content_obj: {
            ...e.content_obj,
            think: t
          },
          has_think_reason: true,
          think_reason_default_expand: true,
          think_reason_is_hide: i
        };
      }
      return e;
    }
    samanthaChatMessageToMessage(e) {
      var t;
      if ((t = e.meta_infos) === null || t === undefined ? undefined : t.some(e => e.type === chatMessageTypes.MetaType.Think)) {
        let {
          text: t,
          is_hide: i
        } = aiChatSourceExtractor.extractThinkMeta(e.meta_infos);
        return {
          ...e,
          content_obj: {
            ...e.content_obj,
            think: t
          },
          has_think_reason: true,
          think_reason_default_expand: true,
          think_reason_is_hide: i
        };
      }
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let t = e.content_obj;
      let i = {
        text: (t == null ? undefined : t.text) || "",
        ...throttledPathFilterStringify.throttledPathStr(t, ["immersive_files", "need_reference", "prompt_tpl", "hover_position"])
      };
      let n = [...parseReferenceContentArray.parseReferenceContentArray(e.ext)];
      let l = [...(e.attachments || [])];
      if (t == null ? undefined : t.file_model) {
        l.push(...chatAttachmentFormatter.formatFileList(t.file_model));
      }
      if (t == null ? undefined : t.link_model) {
        l.push(chatLinkMapper.createChatLink(t.link_model));
      }
      if (t == null ? undefined : t.image_model) {
        l.push(...imageDataTransformer.transformImageData(t.image_model?.image_list));
      }
      if (t == null ? undefined : t.entities) {
        l.push(...chatContentTransformer.transformChatContent(t.entities));
      }
      return {
        content: safeJsonUtils.safeStringify(i),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillFreeChat],
        attachments: arrayUniqBy.arrayUniqBy(l, (e, t) => e.type === t.type && e.key === t.key && e.identifier === t.identifier),
        references: n
      };
    }
    constructor() {
      var e;
      var t;
      var i;
      e = "pluginIdentifier";
      t = chatGenericConvSymbol.genericConvSymbol;
      if ((e = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var n = i.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? i : i + "") in this) {
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
    GenericConversationProtocolTransformPlugin: function () {
      return g;
    }
  });
}