// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'i' to 'chatInputTypeUtil'
// - Resolved require(237303) to 'chat-input-type-util'
// - Renamed variable 'a' to 'queryContextStore'
// - Resolved require(988837) to 'query-context-store'
// - Renamed variable 'o' to 'imageConfigConstants'
// - Resolved require(362452) to 'image-config-constants'
// - Renamed variable 'l' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 's' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'c' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'p' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'f' to 'chatToastFactoryHook'
// - Resolved require(219785) to 'chat-toast-factory-hook'
// - Renamed variable 'm' to 'imageCompressionUtils_1'
// - Resolved require(532036) to 'image-compression-utils_1'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'g' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'y' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable '_' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'b' to 'chatFieldProcessor'
// - Resolved require(880637) to 'chat-field-processor'
// - Renamed variable 'x' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'p' to 'useToastFactory' (module 219785)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'm' to 'getChatInputType' (module 237303)
// - Updated imported property 'Ax' to 'useLauncherConfig' (module 317711)
// - Updated imported property 'qX' to 'queryContextStore' (module 988837)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'NF' to 'getFileExtensionFromBlob' (module 393072)
// - Updated imported property 'ND' to 'imageExtensions' (module 362452)
// - Updated imported property 'JM' to 'configLimit' (module 362452)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'E' to 'getMaxSizeLimit' (module 532036)
// - Updated imported property 'aj' to 'validateImage' (module 880637)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'N6' to 'AttachmentImageAreaLazy' (module 22429)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 468911
         */
module.exports = function (module, exports, require) {
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var chatInputTypeUtil = require("chat-input-type-util") /*id: 237303*/;
  var queryContextStore = require("query-context-store") /*id: 988837*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var imageCompressionUtils_1 = require("image-compression-utils_1") /*id: 532036*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var chatFieldProcessor = require("chat-field-processor") /*id: 880637*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      chatId: t,
      skill: r,
      chatType: w,
      trackParams: k
    } = e;
    let E = t ?? "";
    let C = chatToastFactoryHook.useToastFactory();
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let T = chatInputTypeUtil.getChatInputType({
      chatType: w
    });
    let {
      inputAggregateList: P
    } = chatLauncherConfigHooks.useLauncherConfig();
    let I = P == null ? undefined : P.includes(String(chatAppEnums.SkillType.ImageGeneration));
    let {
      onResetQueryContext: A
    } = queryContextStore.queryContextStore(e => ({
      onResetQueryContext: e.onResetQueryContext
    }));
    let j = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: E,
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let {
      addAttachment: O,
      deleteAttachment: N,
      reuploadAttachment: L
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: E,
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let R = reactFunctionMemoHook.useMemoizedCallback(async function (e) {
      var t;
      let {
        uploadCollectionId: i,
        uploadMethod: a,
        onExtError: s,
        onImageError: u,
        onBeforeAdd: d,
        onAdded: c
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let p = (await fileTypeDetectionUtils.getFileExtensionFromBlob(e)) ?? "";
      if (!imageConfigConstants.imageExtensions.includes(p)) {
        await (s == null ? undefined : s());
        return;
      }
      let f = e => {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          upload_file_type: "Image",
          upload_collection_way: "single",
          upload_way: "browse_folder",
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_IMAGE_REFERENCE,
          upload_type: "pic",
          upload_collection_id: i,
          upload_method: a,
          click_from: T,
          status: "0",
          ...e
        });
      };
      let g = await imageCompressionUtils_1.compressor(e);
      if (g.size > imageCompressionUtils_1.getMaxSizeLimit()) {
        if (u != null) {
          u();
        }
        f({
          upload_file_size: g.size,
          error_code: "volume_exceed"
        });
        return;
      }
      try {
        if (!(await chatFieldProcessor.validateImage({
          file: g
        }))) {
          if (u != null) {
            u();
          }
          f({
            upload_file_size: g.size,
            error_code: "size_unfit"
          });
          return;
        }
      } catch {
        f({
          upload_file_size: g.size,
          error_code: "unknown"
        });
        return;
      }
      await (d == null ? undefined : d());
      await O({
        file: g,
        type: "image",
        disablePreprocess: true,
        ctx: {
          conversationId: "",
          chatType: "other_default",
          skillType: (r == null ? undefined : r.skill_type) || 0,
          skillId: (r == null ? undefined : (t = r.skill_type) === null || t === undefined ? undefined : t.toString()) || "",
          uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_IMAGE_REFERENCE,
          botId: "",
          from: T,
          uploadWay: "browse_folder",
          uploadCollectionWay: "single",
          uploadId: "",
          uploadCollectionId: i,
          uploadMethod: a
        }
      });
      await (c == null ? undefined : c());
    });
    let M = async e => {
      let t = `${Date.now()}`;
      let r = j.length + e.length;
      let i = imageConfigConstants.configLimit - j.length;
      let a = onceFunctionFactory.createOnce(() => {
        C.error(S("image_upload_toast_maxNum", {
          s_number: imageConfigConstants.configLimit
        }));
        teaAnalyticsEventTracker.trackEvent("upload_image_cnt_fail_toast", {
          click_from: T,
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_IMAGE_REFERENCE,
          upload_collection_id: t,
          upload_file_cnt: r
        });
      });
      let s = onceFunctionFactory.createOnce(() => {
        C.error(S("image_upload_toast_formatFiltered"));
      });
      let d = onceFunctionFactory.createOnce(() => {
        C.error(S("skill_image_intput_reference_alert_format"));
      });
      let c = onceFunctionFactory.createOnce(() => {
        if (I) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.clearRefContents(E);
            }
          });
          return;
        }
        A();
      });
      for (let r of e) {
        if (i <= 0) {
          a();
          return;
        }
        await R(r, {
          uploadCollectionId: t,
          uploadMethod: "drag",
          onExtError: s,
          onImageError: d,
          onBeforeAdd: () => {
            c();
          },
          onAdded: () => {
            i--;
          }
        });
      }
    };
    let D = {
      onDrop: e => {
        let {
          files: t
        } = e.dataTransfer || {};
        if (t.length) {
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            ...k,
            upload_method: "drag",
            click_from: T
          });
          M([...t]);
        }
      },
      maxFileCount: imageConfigConstants.configLimit,
      allowedExtensions: imageConfigConstants.imageExtensions
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [j.length > 0 && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        showPresetPrompt: false,
        attachmentStates: j,
        onDeleteAttachment: e => N({
          index: e
        }),
        onRetryAttachment: e => L({
          index: e
        }),
        renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
          ...e
        })
      }), reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        ...D
      })]
    });
  };
  class k {
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
          value: w,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = w;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageGenerationAttachmentAreaPlugin: function () {
      return k;
    }
  });
}