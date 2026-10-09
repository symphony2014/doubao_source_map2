// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'o' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 'a' to 'chatAttachmentFormatter'
// - Resolved require(220315) to 'chat-attachment-formatter'
// - Renamed variable 'l' to 'chatLinkMapper'
// - Resolved require(744290) to 'chat-link-mapper'
// - Renamed variable 'u' to 'imageDataTransformer'
// - Resolved require(122135) to 'image-data-transformer'
// - Renamed variable 's' to 'ugcSymbolConstant'
// - Resolved require(469259) to 'ugc-symbol-constant'
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'a' to 'formatFileList' (module 220315)
// - Updated imported property 'k' to 'createChatLink' (module 744290)
// - Updated imported property 'd' to 'transformImageData' (module 122135)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'y' to 'ugcSymbol' (module 469259)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 208063
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var ugcSymbolConstant = require("ugc-symbol-constant") /*id: 469259*/;
  class c {
    aliceChatMessageToMessage(e) {
      let _ = [];
      if (checkNestedContentType.isNestedContentType(e)) {
        _.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
      }
      if (e.content_obj?.file_model) {
        _.push(...chatAttachmentFormatter.formatFileList(e.content_obj.file_model));
      }
      if (e.content_obj?.link_model) {
        _.push(chatLinkMapper.createChatLink(e.content_obj.link_model));
      }
      if (e.content_obj?.image_model) {
        _.push(...imageDataTransformer.transformImageData(e.content_obj.image_model?.image_list));
      }
      if (_ == null ? undefined : _.length) {
        safePropertyAssignUtil.safePropertyAssign(e, {
          attachments: _
        });
      }
      return e;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = ugcSymbolConstant.ugcSymbol;
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
    UGCChatProtocolTransformPlugin: function () {
      return c;
    }
  });
}