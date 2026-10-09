// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'r' to 'chatInputUploadButton'
// - Resolved require(839441) to 'chat-input-upload-button'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatAttachmentUploadHook'
// - Resolved require(357212) to 'chat-attachment-upload-hook'
// - Renamed variable 'l' to 'useAttachmentHookUtils'
// - Resolved require(664800) to 'use-attachment-hook-utils'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'q' to 'useAttachmentHookUtils' (module 664800)
// - Updated imported property 'E' to 'useChatAttachmentUpload' (module 357212)
// - Updated imported property 'Y' to 'ChatUploadButton' (module 839441)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 807533
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatInputUploadButton = require("chat-input-upload-button") /*id: 839441*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAttachmentUploadHook = require("chat-attachment-upload-hook") /*id: 357212*/;
  var useAttachmentHookUtils = require("use-attachment-hook-utils") /*id: 664800*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      chatId: t = ""
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId
      };
    }, deepEqualityUtil.deepEqual);
    let {
      attachmentStates: n
    } = useAttachmentHookUtils.useAttachmentHookUtils(t, false);
    let {
      uploadFiles: c
    } = chatAttachmentUploadHook.useChatAttachmentUpload({
      attachmentStates: n
    });
    return reactJsxRuntimeCoreReexport.jsx(chatInputUploadButton.ChatUploadButton, {
      ...e,
      handleFilesChange: (e, t) => c(e, t)
    });
  };
  class u {
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
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = c;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskUploadToolPlugin: function () {
      return u;
    }
  });
}