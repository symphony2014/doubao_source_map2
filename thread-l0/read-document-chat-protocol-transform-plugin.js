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
// - Renamed variable 'u' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 's' to 'checkFileContentType'
// - Resolved require(934971) to 'check-file-content-type'
// - Renamed variable 'c' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'd' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable '_' to 'chatAttachmentFormatter'
// - Resolved require(220315) to 'chat-attachment-formatter'
// - Renamed variable 'v' to 'chatLinkMapper'
// - Resolved require(744290) to 'chat-link-mapper'
// - Renamed variable 'f' to 'imageDataTransformer'
// - Resolved require(122135) to 'image-data-transformer'
// - Renamed variable 'p' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 'm' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'g' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'h' to 'chatReadDocumentSymbol'
// - Resolved require(656124) to 'chat-read-document-symbol'
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'a' to 'formatFileList' (module 220315)
// - Updated imported property 'X' to 'isFileContentType' (module 934971)
// - Updated imported property 'k' to 'createChatLink' (module 744290)
// - Updated imported property 'd' to 'transformImageData' (module 122135)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'cG' to 'immersiveFiles' (module 397273)
// - Updated imported property 'yj' to 'referenceFlag' (module 397273)
// - Updated imported property 'gI' to 'mindMapConfig' (module 397273)
// - Updated imported property 'op' to 'pdfHoverPosition' (module 397273)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'X' to 'readDocumentSymbol' (module 656124)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 720141
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var checkFileContentType = require("check-file-content-type") /*id: 934971*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatReadDocumentSymbol = require("chat-read-document-symbol") /*id: 656124*/;
  class b {
    samanthaChatMessageToMessage(e) {
      let n = e.content_obj?.stream_async;
      let i = e.is_finish;
      e.is_finish = i && !n;
      return e;
    }
    aliceChatMessageToMessage(e, t) {
      var y;
      let S = parseReferenceContentArray.parseReferenceContentArray(t.ext);
      let x = [];
      if (checkNestedContentType.isNestedContentType(e)) {
        x.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
      }
      if (e.content_obj?.file_model) {
        x.push(...chatAttachmentFormatter.formatFileList(e.content_obj.file_model));
      }
      if (checkFileContentType.isFileContentType(e) && e.content_obj) {
        x.push(...chatAttachmentFormatter.formatFileList(e.content_obj));
      }
      if (e.content_obj?.link_model) {
        x.push(chatLinkMapper.createChatLink(e.content_obj.link_model));
      }
      if (e.content_obj?.image_model) {
        x.push(...imageDataTransformer.transformImageData(e.content_obj.image_model?.image_list));
      }
      if (S == null ? undefined : S.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          references: S
        });
      }
      if (x == null ? undefined : x.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: x
        });
      }
      let k = safeJsonUtils.safeParse(t == null ? undefined : t.ext?.read_status, undefined);
      safePropertyAssignUtil.safePropertyAssign(e.content_obj, {
        ...skillMessageProcessor.immersiveFiles(t == null ? undefined : t.ext),
        ...skillMessageProcessor.referenceFlag(t == null ? undefined : t.ext),
        ...skillMessageProcessor.mindMapConfig(t == null ? undefined : t.ext),
        ...skillMessageProcessor.pdfHoverPosition(t == null ? undefined : t.ext),
        ...((t == null ? undefined : t.ext?.stream_async) ? {
          stream_async: t == null ? undefined : t.ext?.stream_async
        } : {}),
        ...((k == null ? undefined : k.warn_ultra_quota) ? {
          warn_ultra_quota: k == null ? undefined : k.warn_ultra_quota
        } : {}),
        ...(k ? {
          read_status: k
        } : {})
      });
      if ((y = e.meta_infos) === null || y === undefined ? undefined : y.some(e => e.type === chatMessageTypes.MetaType.Think)) {
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
        ...throttledPathFilterStringify.throttledPathStr(t, ["immersive_files", "need_reference", "generate_mind_map", "prompt_tpl", "hover_position", "command"])
      };
      let i = [];
      let o = [...parseReferenceContentArray.parseReferenceContentArray(e.ext)];
      if (t == null ? undefined : t.file_model) {
        i.push(...chatAttachmentFormatter.formatFileList(t.file_model));
      }
      if (t == null ? undefined : t.link_model) {
        i.push(chatLinkMapper.createChatLink(t.link_model));
      }
      if (t == null ? undefined : t.entities) {
        i.push(...chatContentTransformer.transformChatContent(t.entities));
      }
      return {
        content: safeJsonUtils.safeStringify(n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillRead],
        attachments: i,
        references: o
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatReadDocumentSymbol.readDocumentSymbol;
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
    ReadDocumentChatProtocolTransformPlugin: function () {
      return b;
    }
  });
}