// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'a' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'o' to 'chatImagePreviewHandler'
// - Resolved require(239861) to 'chat-image-preview-handler'
// - Renamed variable 's' to 'imageActionUtils'
// - Resolved require(323276) to 'image-action-utils'
// - Renamed variable 'l' to 'imageEditHoverTagButtons'
// - Resolved require(304166) to 'image-edit-hover-tag-buttons'
// - Renamed variable 'c' to 'hoverShowTagComponent'
// - Resolved require(145742) to 'hover-show-tag-component'
// - Renamed variable 'd' to 'imageListGridView'
// - Resolved require(332524) to 'image-list-grid-view'
// - Renamed variable 'u' to 'imageErrorResetComponent'
// - Resolved require(877507) to 'image-error-reset-component'
// - Renamed variable 'h' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'p' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'f' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'v' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable '_' to 'pictureMessageAnalyticsHook'
// - Resolved require(283637) to 'picture-message-analytics-hook'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'x' to 'chatMessageImageRenderer'
// - Resolved require(798915) to 'chat-message-image-renderer'
// - Renamed variable 'k' to 'chatUgcImageSymbol'
// - Resolved require(876541) to 'chat-ugc-image-symbol'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'A' to 'usePictureMessageAnalytics' (module 283637)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'd' to 'imagePreviewHandler' (module 239861)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'p0' to 'getThumbImage' (module 323276)
// - Updated imported property 'uV' to 'processImageData' (module 323276)
// - Updated imported property 'AY' to 'downloadImage' (module 323276)
// - Updated imported property 'Rx' to 'ImageEditTagListWithDownload' (module 304166)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'l' to 'HoverShowTag' (module 145742)
// - Updated imported property 'Pf' to 'withErrorBoundary' (module 939224)
// - Updated imported property 'F' to 'ImageListGrid' (module 332524)
// - Updated imported property 'O' to 'ImageErrorReset' (module 877507)
// - Updated imported property 'c' to 'ChatImageListView' (module 798915)
// - Updated imported property 'k' to 'ugcImageSymbol' (module 876541)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 801560
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatImagePreviewHandler = require("chat-image-preview-handler") /*id: 239861*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var imageEditHoverTagButtons = require("image-edit-hover-tag-buttons") /*id: 304166*/;
  var hoverShowTagComponent = require("hover-show-tag-component") /*id: 145742*/;
  var imageListGridView = require("image-list-grid-view") /*id: 332524*/;
  var imageErrorResetComponent = require("image-error-reset-component") /*id: 877507*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var pictureMessageAnalyticsHook = require("picture-message-analytics-hook") /*id: 283637*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      inView: t,
      message: r
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let {
      imageList: u,
      imageFileName: v
    } = pictureMessageAnalyticsHook.usePictureMessageAnalytics({
      inView: t,
      message: r
    });
    let b = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let {
      template_data: w
    } = (r == null ? undefined : r.ext) || {};
    let {
      imageEventCallbacks: x,
      onImageRender: k,
      renderImagePreview: C,
      onImageClickTrackEvent: j
    } = chatImagePreviewHandler.imagePreviewHandler({
      conversationId: r.conversation_id || "",
      replyId: r.reply_id || "",
      messageId: r.message_id || "",
      imageList: u,
      message: r
    });
    let S = reactCoreLibraryReexport.useMemo(() => {
      let e = safeJsonUtils.safeParse(w, {});
      if (isEmptyUtil.isEmpty(e)) {
        return {
          onImageClick: (e, t, r) => {
            let {
              src: a
            } = t;
            j(r);
            x.onImageClick(e, imageActionUtils.getThumbImage(r)?.url || (r == null ? undefined : r.image_ori?.url) || a || "");
          },
          onImageRender: k
        };
      }
    }, [u, w, b == null ? undefined : b.chatId]);
    let E = reactCoreLibraryReexport.useCallback(e => {
      let {
        format: t
      } = imageActionUtils.processImageData(e);
      let n = reactJsxRuntimeCoreReexport.jsx(imageEditHoverTagButtons.ImageEditTagListWithDownload, {
        onDownload: n => {
          n.stopPropagation();
          let u = imageActionUtils.processImageData(e).downloadImage?.url || "";
          teaAnalyticsEventTracker.trackEvent("image_edit_button_click", {
            button_type: "download",
            pic_id: e == null ? undefined : e.key,
            skill_id: r == null ? undefined : r.skill?.skill_id,
            skill_name: isNullishCheck.isNil(r == null ? undefined : r.skill?.skill_type) ? undefined : skillTypeMappings.getSkillName(r == null ? undefined : r.skill?.skill_type)
          });
          imageActionUtils.downloadImage({
            imageSrc: u,
            format: t,
            fileName: v,
            t: d
          });
        }
      });
      return hoverShowTagComponent.HoverShowTag(n);
    }, [r.message_id, u, v]);
    return {
      imageBoxCallbacks: S,
      imageList: u,
      renderImagePreview: C,
      renderHoverEle: E
    };
  };
  let w = reactErrorBoundaryWrapper.withErrorBoundary(function (e) {
    let {
      inView: t,
      message: r
    } = e;
    let {
      imageBoxCallbacks: n,
      imageList: i,
      renderHoverEle: a,
      renderImagePreview: o
    } = b({
      inView: t,
      message: r
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(imageListGridView.ImageListGrid, {
        data: {
          image_list: i || []
        },
        eventCallbacks: n,
        "data-testid": "message_image_content",
        renderHoverEle: a,
        getImageThumbUrl: e => {
          return imageActionUtils.processImageData(e).thumbImage?.url || "";
        }
      }), o()]
    });
  }, {
    errorBoundaryName: "image_message_block_error",
    FallbackComponent: imageErrorResetComponent.ImageErrorReset
  });
  var chatMessageImageRenderer = require("chat-message-image-renderer") /*id: 798915*/;
  var chatUgcImageSymbol = require("chat-ugc-image-symbol") /*id: 876541*/;
  function C(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
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
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let j = e => reactJsxRuntimeCoreReexport.jsx(w, {
    ...e
  });
  let S = e => reactJsxRuntimeCoreReexport.jsx(chatMessageImageRenderer.ChatImageListView, {
    ...e
  });
  class E {
    constructor() {
      C(this, "pluginIdentifier", chatUgcImageSymbol.ugcImageSymbol);
      C(this, "Content", j);
    }
  }
  class R {
    constructor() {
      C(this, "pluginIdentifier", chatUgcImageSymbol.ugcImageSymbol);
      C(this, "Content", S);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveUgcImageMessageBoxPlugin: function () {
      return E;
    },
    ShareReceiveUgcImageMessageBoxPlugin: function () {
      return R;
    }
  });
}