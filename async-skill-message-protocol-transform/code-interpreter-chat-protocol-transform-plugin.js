// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'r' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'o' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'a' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'u' to 'checkFileContentType'
// - Resolved require(934971) to 'check-file-content-type'
// - Renamed variable 's' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'c' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 'd' to 'chatAttachmentFormatter'
// - Resolved require(220315) to 'chat-attachment-formatter'
// - Renamed variable '_' to 'chatLinkMapper'
// - Resolved require(744290) to 'chat-link-mapper'
// - Renamed variable 'v' to 'imageDataTransformer'
// - Resolved require(122135) to 'image-data-transformer'
// - Renamed variable 'f' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'p' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'm' to 'codeInterpreterIdentifier'
// - Resolved require(43273) to 'code-interpreter-identifier'
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'a' to 'formatFileList' (module 220315)
// - Updated imported property 'X' to 'isFileContentType' (module 934971)
// - Updated imported property 'k' to 'createChatLink' (module 744290)
// - Updated imported property 'd' to 'transformImageData' (module 122135)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'u' to 'codeInterpreter' (module 43273)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 506557
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var checkFileContentType = require("check-file-content-type") /*id: 934971*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var codeInterpreterIdentifier = require("code-interpreter-identifier") /*id: 43273*/;
  class g {
    messageToSamanthaChatMessage(e) {
      let t = throttledPathFilterStringify.throttledPathStr(e.content_obj, ["text"]);
      let n = throttledPathFilterStringify.throttledPathStr(e, ["attachments", "references"]);
      return {
        content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterInput,
        content: safeJsonUtils.safeStringify(t),
        ...n
      };
    }
    aliceChatMessageToMessage(e, t) {
      var m;
      let T = parseReferenceContentArray.parseReferenceContentArray(t.ext);
      let j = [];
      if (checkNestedContentType.isNestedContentType(e)) {
        j.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
      }
      if (e.content_obj?.file_model) {
        j.push(...chatAttachmentFormatter.formatFileList(e.content_obj.file_model));
      }
      if (checkFileContentType.isFileContentType(e) && e.content_obj) {
        j.push(...chatAttachmentFormatter.formatFileList(e.content_obj));
      }
      if (e.content_obj?.link_model) {
        j.push(chatLinkMapper.createChatLink(e.content_obj.link_model));
      }
      if (e.content_obj?.image_model) {
        j.push(...imageDataTransformer.transformImageData(e.content_obj.image_model?.image_list));
      }
      if (T == null ? undefined : T.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          references: T
        });
      }
      if (j == null ? undefined : j.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: j
        });
      }
      if ((m = e.meta_infos) === null || m === undefined ? undefined : m.some(e => e.type === chatMessageTypes.MetaType.Think)) {
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
      if (e.ext?.code_interpreter_resource_url_map) {
        return {
          ...e,
          content_obj: {
            ...e.content_obj,
            ci_meta: {
              uri_to_url: safeJsonUtils.safeParse(e.ext?.code_interpreter_resource_url_map, {})
            }
          }
        };
      } else {
        return e;
      }
    }
    samanthaChatMessageToMessage(e) {
      var t;
      if ((t = e.meta_infos) === null || t === undefined ? undefined : t.some(e => e.type === chatMessageTypes.MetaType.Think)) {
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
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = codeInterpreterIdentifier.codeInterpreter;
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
    CodeInterpreterChatProtocolTransformPlugin: function () {
      return g;
    }
  });
}