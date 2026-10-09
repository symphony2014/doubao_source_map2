// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'i' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'a' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'o' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'l' to 'useAiPptTemplateAttachment'
// - Resolved require(49904) to 'use-ai-ppt-template-attachment'
// - Renamed variable 's' to 'aiSlidesAttachmentHook'
// - Resolved require(896036) to 'ai-slides-attachment-hook'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'A' to 'useTemplateAttach' (module 49904)
// - Updated imported property 't' to 'useAiSlidesAttachment' (module 896036)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 129363
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var useAiPptTemplateAttachment = require("use-ai-ppt-template-attachment") /*id: 49904*/;
  var aiSlidesAttachmentHook = require("ai-slides-attachment-hook") /*id: 896036*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      chatId: t,
      skill: r
    } = e;
    let {
      updateSelectedFromMoreItem: d,
      selectTemplateItem: c,
      selectedTemplateItem: p
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      selectedTemplateItem: e.selectedTemplateItem,
      selectTemplateItem: e.selectTemplateItem,
      updateSelectedFromMoreItem: e.updateSelectedFromMoreItem
    }));
    let {
      templateAttach: f,
      renderAttachmentBox: m
    } = useAiPptTemplateAttachment.useTemplateAttach(p, () => {
      c();
      d();
    });
    let {
      attachmentAreaRef: h,
      showAttachmentArea: g,
      reuploadAttachment: v,
      deleteAttachment: y,
      attachmentStates: _,
      dragUploadProps: b
    } = aiSlidesAttachmentHook.useAiSlidesAttachment({
      conversationId: t,
      skill: r,
      reportParams: {}
    });
    let x = !isEmptyUtil.isEmpty(f) || g;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [x && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        ref: h,
        showPresetPrompt: false,
        attachmentStates: [...f, ..._],
        onDeleteAttachment: e => y({
          index: e
        }),
        renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
          ...e,
          renderAttachmentBox: m
        }),
        onRetryAttachment: e => v({
          index: e
        })
      }), reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        ...b
      })]
    });
  };
  class c {
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
          value: d,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = d;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTAttachmentAreaPlugin: function () {
      return c;
    }
  });
}