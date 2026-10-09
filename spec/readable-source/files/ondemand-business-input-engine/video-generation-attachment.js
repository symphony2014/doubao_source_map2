// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'imageConfigConstants_1'
// - Resolved require(620790) to 'image-config-constants_1'
// - Renamed variable 'i' to 'imageConfigConstants'
// - Resolved require(362452) to 'image-config-constants'
// - Renamed variable 'a' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'o' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'l' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 's' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'checkVideoUploadMultiplePic'
// - Resolved require(472580) to 'check-video-upload-multiple-pic'
// - Renamed variable 'c' to 'videoGenerationAttachment_1'
// - Resolved require(642912) to 'video-generation-attachment_1'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'f' to 'checkVideoUploadMultiplePic' (module 472580)
// - Updated imported property 'S' to 'useVideoFileUpload' (module 642912)
// - Updated imported property 'UC' to 'supportedFormats' (module 620790)
// - Updated imported property 'JM' to 'maxItemCount' (module 620790)
// - Updated imported property 'ND' to 'imageExtensions' (module 362452)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'N6' to 'AttachmentImageAreaLazy' (module 22429)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 91526
         */
module.exports = function (module, exports, require) {
  var imageConfigConstants_1 = require("image-config-constants_1") /*id: 620790*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var checkVideoUploadMultiplePic = require("check-video-upload-multiple-pic") /*id: 472580*/;
  var videoGenerationAttachment_1 = require("video-generation-attachment_1") /*id: 642912*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      chatId: r,
      trackParams: f,
      skill: m
    } = e;
    let h = r ?? "";
    let g = (m == null ? undefined : m.skill_type) ?? chatAppEnums.SkillType.VideoGeneration;
    let v = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: h,
      skillType: g
    });
    let {
      deleteAttachment: y,
      reuploadAttachment: _
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: h,
      skillType: g
    });
    let b = checkVideoUploadMultiplePic.checkVideoUploadMultiplePic();
    let {
      submitFiles: x
    } = videoGenerationAttachment_1.useVideoFileUpload({
      chatId: h,
      skill: m
    });
    let w = {
      onDrop: e => {
        let {
          files: t
        } = e.dataTransfer || {};
        if (!t.length) {
          return;
        }
        let r = (b ? [...t] : [t[0]]).filter(e => {
          let t = e.type.split("/")[1];
          return imageConfigConstants_1.supportedFormats.includes(t);
        });
        if (r.length) {
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            ...f,
            upload_method: "drag"
          });
          x(r);
        }
      },
      maxFileCount: b ? imageConfigConstants_1.maxItemCount : 1,
      allowedExtensions: imageConfigConstants.imageExtensions
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [v.length > 0 && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        showPresetPrompt: false,
        attachmentStates: v,
        onDeleteAttachment: e => y({
          index: e
        }),
        onRetryAttachment: e => _({
          index: e
        }),
        renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
          ...e
        })
      }), reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        ...w
      })]
    });
  };
  class m {
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
          value: f,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = f;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    VideoGenerationAttachment: function () {
      return f;
    },
    VideoGenerationAttachmentPlugin: function () {
      return m;
    }
  });
}