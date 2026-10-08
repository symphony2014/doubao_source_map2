// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatInputUploadButton'
// - Resolved require(839441) to 'chat-input-upload-button'
// - Renamed variable 'r' to 'fileExtensionUtility'
// - Resolved require(841327) to 'file-extension-utility'
// - Renamed variable 'a' to 'aiSlidesAttachmentHook'
// - Resolved require(896036) to 'ai-slides-attachment-hook'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'x' to 'getSupportedExtensions' (module 841327)
// - Updated imported property 't' to 'useAiSlidesAttachment' (module 896036)
// - Updated imported property 'Y' to 'ChatUploadButton' (module 839441)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 587409
         */
module.exports = function (module, exports, require) {
  var chatInputUploadButton = require("chat-input-upload-button") /*id: 839441*/;
  var fileExtensionUtility = require("file-extension-utility") /*id: 841327*/;
  var aiSlidesAttachmentHook = require("ai-slides-attachment-hook") /*id: 896036*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var l = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: l,
      chatId: s,
      skill: c
    } = e;
    let u = fileExtensionUtility.getSupportedExtensions();
    let {
      addNewAttachmentFiles: d
    } = aiSlidesAttachmentHook.useAiSlidesAttachment({
      conversationId: s,
      skill: c,
      isToolButtonSmall: n,
      reportParams: {}
    });
    return reactJsxRuntimeCoreReexport.jsx(chatInputUploadButton.ChatUploadButton, {
      fileTypes: u,
      isOverflow: t,
      isToolButtonSmall: n,
      scene: l,
      handleFilesChange: d
    });
  };
  class s {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = l;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTFileUploadPlugin: function () {
      return s;
    }
  });
}