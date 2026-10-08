// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'i' to 'writingAttachmentManager'
// - Resolved require(224274) to 'writing-attachment-manager'
// - Renamed variable 'a' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'M3' to 'useAttachmentManager' (module 224274)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 419782
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var writingAttachmentManager = require("writing-attachment-manager") /*id: 224274*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = () => {
    let {
      attachmentStates: e,
      reuploadAttachment: t,
      deleteAttachment: r
    } = writingAttachmentManager.useAttachmentManager();
    if (isEmptyUtil.isEmpty(e)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        showPresetPrompt: false,
        attachmentStates: e,
        onDeleteAttachment: e => r({
          index: e
        }),
        renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
          ...e
        }),
        onRetryAttachment: e => t({
          index: e
        })
      });
    }
  };
  class s {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
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
    WriteGenerationAttachment: function () {
      return l;
    },
    WriteGenerationAttachmentPlugin: function () {
      return s;
    }
  });
}