// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagePayloadTypeGuards'
// - Resolved require(669738) to 'message-payload-type-guards'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'a' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'o' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'l' to 'ciAssistantSymbol'
// - Resolved require(852527) to 'ci-assistant-symbol'
// - Updated imported property 'ah' to 'hasFileInMessage' (module 669738)
// - Updated imported property 'gg' to 'hasNestedItemsInMessage' (module 669738)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'Be' to 'isSpreadsheetFile' (module 393072)
// - Updated imported property 'I9' to 'isCsvFile' (module 393072)
// - Updated imported property 'H' to 'ciAssistantSymbol' (module 852527)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 822030
         */
module.exports = function (module, exports, require) {
  var messagePayloadTypeGuards = require("message-payload-type-guards") /*id: 669738*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var ciAssistantSymbol = require("ci-assistant-symbol") /*id: 852527*/;
  class s {
    processMessageBefore(e, t) {
      if (t[0].extraExt?.input_skill) {
        return t;
      }
      let l = e => {
        if (messagePayloadTypeGuards.hasFileInMessage(e)) {
          let t = getFileExtension.getFileExtension(e.file_name || "");
          return fileTypeDetectionUtils.isSpreadsheetFile(t) || fileTypeDetectionUtils.isCsvFile(t);
        }
        if (messagePayloadTypeGuards.hasNestedItemsInMessage(e)) {
          var t;
          return !!((t = e.nestedItems) === null || t === undefined ? undefined : t.every(e => {
            let t = getFileExtension.getFileExtension(e.fileName || "");
            return fileTypeDetectionUtils.isSpreadsheetFile(t) || fileTypeDetectionUtils.isCsvFile(t);
          }));
        }
        return false;
      };
      return t.map(e => {
        if (l(e)) {
          e.extraExt ||= {};
          e.extraExt.input_skill = JSON.stringify({
            skill_id: String(chatAppEnums.SkillType.CodeInterpreter),
            skill_type: chatAppEnums.SkillType.CodeInterpreter
          });
        }
        return e;
      });
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = ciAssistantSymbol.ciAssistantSymbol;
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
    CIAsisstantMessageLifeCyclePlugin: function () {
      return s;
    }
  });
}