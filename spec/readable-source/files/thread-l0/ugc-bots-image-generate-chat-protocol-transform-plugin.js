// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'extractSamanthaRefImages'
// - Resolved require(203149) to 'extract-samantha-ref-images'
// - Renamed variable 'a' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 'l' to 'chatUgcBotSymbol'
// - Resolved require(490550) to 'chat-ugc-bot-symbol'
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'L' to 'extractRefImages' (module 203149)
// - Updated imported property 'tt' to 'editImageContext' (module 397273)
// - Updated imported property 'gv' to 'finishedImageContext' (module 397273)
// - Updated imported property 'Q' to 'ugcBotImageSymbol' (module 490550)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 112632
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractSamanthaRefImages = require("extract-samantha-ref-images") /*id: 203149*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatUgcBotSymbol = require("chat-ugc-bot-symbol") /*id: 490550*/;
  class u {
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
      let l = extractSamanthaRefImages.extractRefImages(t.ext);
      if (l == null ? undefined : l.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: l
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
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatUgcBotSymbol.ugcBotImageSymbol;
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
    UgcBotsImageGenerateChatProtocolTransformPlugin: function () {
      return u;
    }
  });
}