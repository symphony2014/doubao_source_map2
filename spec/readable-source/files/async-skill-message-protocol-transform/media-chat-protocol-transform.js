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
// - Renamed variable 'l' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'u' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 's' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'd' to 'chatMediaSymbol'
// - Resolved require(468122) to 'chat-media-symbol'
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'H' to 'mediaSymbol' (module 468122)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 509659
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let c = e => {
    let t = "";
    e.forEach(e => {
      if ("extra" in e && e.extra?.context_variables) {
        t = e.extra?.context_variables;
      }
    });
    return t;
  };
  var chatMediaSymbol = require("chat-media-symbol") /*id: 468122*/;
  class _ {
    aliceChatMessageToMessage(e, t) {
      if (messageContentTypeAndStatusChecker.iMt(e)) {
        let o = parseReferenceContentArray.parseReferenceContentArray(t.ext);
        let a = [];
        if (e.content_obj?.entities) {
          a.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
        }
        if (o == null ? undefined : o.length) {
          safePropertyAssignUtil.safePropertyAssign(e, {
            references: o
          });
        }
        if (a == null ? undefined : a.length) {
          safePropertyAssignUtil.safePropertyAssign(e, {
            attachments: a
          });
        }
      }
      return e;
    }
    samanthaChatMessageToMessage(e) {
      messageContentTypeAndStatusChecker.iMt(e);
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
      a.forEach(e => {
        e.type = e.asrType === "video" ? "video" : "audio";
      });
      let u = (a == null ? undefined : a.length) > 0 ? c(a) : undefined;
      return {
        content: safeJsonUtils.safeStringify(u ? {
          ...n,
          context_variables: u
        } : n),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr],
        attachments: i,
        references: a
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatMediaSymbol.mediaSymbol;
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
    MediaChatProtocolTransformPlugin: function () {
      return _;
    }
  });
}