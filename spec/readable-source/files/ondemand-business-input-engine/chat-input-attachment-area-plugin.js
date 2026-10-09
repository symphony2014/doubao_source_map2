// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'i' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'a' to 'asyncSkillGuidanceInputHook'
// - Resolved require(995921) to 'async-skill-guidance-input-hook'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'useAsyncSkillGuidanceInput' (module 995921)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 420971
         */
module.exports = function (module, exports, require) {
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var asyncSkillGuidanceInputHook = require("async-skill-guidance-input-hook") /*id: 995921*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = () => {
    let {
      handleFilesChange: e,
      attachmentStates: t,
      deleteAttachment: r,
      reuploadAttachment: l
    } = asyncSkillGuidanceInputHook.useAsyncSkillGuidanceInput({});
    let s = !!(t == null ? undefined : t.length);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [s ? reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        showPresetPrompt: false,
        attachmentStates: t,
        onDeleteAttachment: e => r({
          index: e
        }),
        onRetryAttachment: e => l({
          index: e
        }),
        renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
          ...e
        })
      }) : null, reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        onDrop: t => {
          let {
            files: r
          } = t.dataTransfer || {};
          if (r.length) {
            e([...r], {
              from: "drag",
              uploadWay: "drag_drop"
            });
          }
        }
      })]
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
    CIAttachmentAreaPlugin: function () {
      return s;
    }
  });
}