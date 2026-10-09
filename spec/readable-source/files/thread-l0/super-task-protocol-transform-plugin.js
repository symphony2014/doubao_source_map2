// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayUniqBy'
// - Resolved require(342321) to 'array-uniq-by'
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'o' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'a' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 'l' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'u' to 'chatConstants'
// - Resolved require(777970) to 'chat-constants'
// - Renamed variable 's' to 'chatProtocolTransformSymbol'
// - Resolved require(859678) to 'chat-protocol-transform-symbol'
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'qX' to 'complexityLevels' (module 777970)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'Z' to 'arrayUniqBy' (module 342321)
// - Updated imported property 'i' to 'protocolTransform' (module 859678)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 952560
         */
module.exports = function (module, exports, require) {
  var arrayUniqBy = require("array-uniq-by") /*id: 342321*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var chatProtocolTransformSymbol = require("chat-protocol-transform-symbol") /*id: 859678*/;
  class c {
    samanthaChatMessageToMessage(e) {
      if (e.content_obj?.suggest) {
        e.content_obj.suggest = [e.content_obj.suggest];
      }
      return e;
    }
    messageToSamanthaChatMessage(e) {
      let v = e.content_obj;
      let f = [...(e.attachments || [])];
      let p = [...parseReferenceContentArray.parseReferenceContentArray(e.ext)];
      if (v == null ? undefined : v.entities) {
        f.push(...chatContentTransformer.transformChatContent(v.entities));
      }
      let m = {
        clarify: "",
        text: (v == null ? undefined : v.text) || "",
        language: "zh",
        task_type: Number(e.ext?.supertask_task_type ?? chatConstants.complexityLevels.Simple),
        client_tool_key: e.ext?.client_tool_key || ""
      };
      if (e == null ? undefined : e.ext?.ppt_tpl_opts) {
        Object.assign(m, {
          ppt_tpl_opts: safeJsonUtils.safeParse(e.ext.ppt_tpl_opts, undefined)
        });
      }
      if ((e == null ? undefined : e.ext?.message_send_type) !== undefined) {
        Object.assign(m, {
          message_send_type: e.ext.message_send_type
        });
      }
      if ((e == null ? undefined : e.ext?.preceding_msg_id) !== undefined) {
        Object.assign(m, {
          preceding_msg_id: e.ext.preceding_msg_id
        });
      }
      return {
        content: JSON.stringify(m),
        content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtSupertask,
        references: p,
        attachments: arrayUniqBy.arrayUniqBy(f, (e, t) => e.type === t.type && e.key === t.key && e.identifier === t.identifier)
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatProtocolTransformSymbol.protocolTransform;
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
    SuperTaskProtocolTransformPlugin: function () {
      return c;
    }
  });
}