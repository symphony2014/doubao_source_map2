// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'inputToolMenuListener'
// - Resolved require(719698) to 'input-tool-menu-listener'
// - Renamed variable 'a' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'o' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 's' to 'chatInputAttachmentHook'
// - Resolved require(398892) to 'chat-input-attachment-hook'
// - Renamed variable 'u' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'a' to 'useChatInputHook' (module 398892)
// - Updated imported property 'GL' to 'superTaskStore' (module 654619)
// - Updated imported property 'v' to 'menuOptionListener' (module 719698)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'N6' to 'AttachmentImageAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 191631
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var inputToolMenuListener = require("input-tool-menu-listener") /*id: 719698*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatInputAttachmentHook = require("chat-input-attachment-hook") /*id: 398892*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      chatId: t,
      chatType: r,
      trackParams: c,
      reportParams: p
    } = e;
    let {
      maxFileCount: f,
      enableAttachmentArea: m,
      handleSubmitFiles: h,
      attachmentStates: g,
      deleteAttachment: v,
      reuploadAttachment: y,
      attachmentAreaRef: _,
      handlePaste: b
    } = chatInputAttachmentHook.useChatInputHook({
      chatId: t,
      chatType: r,
      reportParams: {
        ...p,
        scene: (p == null ? undefined : p.scene) || "chat_action_bar"
      },
      trackParams: c,
      withGenericAttachments: false
    });
    let x = superTaskStore.superTaskStore(e => e.hideInputAttachments);
    reactCoreLibraryReexport.useEffect(() => {
      let e = (e, t) => {
        let {
          event: r,
          files: n
        } = t;
        b({
          ...r,
          clipboardData: {
            ...r.clipboardData,
            files: n
          }
        });
      };
      inputToolMenuListener.menuOptionListener.on("onPaste", e);
      return () => {
        inputToolMenuListener.menuOptionListener.off("onPaste", e);
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [m && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        ref: _,
        showPresetPrompt: false,
        attachmentStates: g,
        renderArea: e => x ? null : e.attachmentStates.every(e => e.type === "image") ? reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
          ...e
        }) : reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
          ...e
        }),
        onDeleteAttachment: e => v({
          index: e
        }),
        onRetryAttachment: e => y({
          index: e
        })
      }), reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        onDrop: e => {
          let {
            files: t
          } = e.dataTransfer || {};
          if (t.length) {
            teaAnalyticsEventTracker.trackEvent("pin_button_click", {
              ...c,
              upload_method: "drag",
              click_from: "super_task_input"
            });
            h([...t], {
              uploadWay: "drag_drop"
            });
          }
        },
        maxFileCount: f
      })]
    });
  };
  class p {
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
    SuperTaskGenerationAttachmentAreaPlugin: function () {
      return p;
    }
  });
}