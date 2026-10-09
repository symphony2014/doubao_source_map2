// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'ChatImageListView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 798915
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var imageListGridView = require("image-list-grid-view") /*id: 332524*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var useDeepCompareMemoHook = require("use-deep-compare-memo-hook") /*id: 880349*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      message: t
    } = e;
    let r = messageContentTypeAndStatusChecker.qP0(t) ? t.content_obj : {
      data: []
    };
    let a = (r == null ? undefined : r.data) || objectPathGetDefault.getObjectPathDefault(r, "image_list") || [];
    let {
      imageEventCallbacks: o,
      renderImagePreview: s
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      messageId: t == null ? undefined : t.message_id
    }, a, chatCoreConstants.MessageActions.Other);
    return {
      imageBoxCallbacks: reactCoreLibraryReexport.useMemo(() => ({
        onImageClick: (e, t) => {
          let {
            src: r
          } = t;
          if (r) {
            o.onImageClick(e, r);
          }
        },
        onImageRender: e => {
          let {
            src: t
          } = e;
          if (t) {
            o.onImageRender(t);
          }
        }
      }), [a]),
      renderImagePreview: s,
      imageList: a
    };
  };
  let y = e => {
    var i;
    let {
      message: a,
      theme: c = "coco",
      showRiskTips: f = false
    } = e;
    let {
      imageBoxCallbacks: y,
      renderImagePreview: b,
      imageList: w
    } = _({
      message: a
    });
    let x = useDeepCompareMemoHook.useDeepCompareMemo(w.map(e => {
      return e.image_thumb?.url || "";
    }));
    let {
      latestFileUrls: k
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: x
    });
    let C = reactCoreLibraryReexport.useMemo(() => w.map((e, t) => {
      if (!e.image_thumb) {
        return e;
      }
      let n = {
        ...e.image_thumb,
        url: (k == null ? undefined : k[t]) || e.image_thumb?.url
      };
      return {
        ...e,
        image_thumb: n
      };
    }), [w, k]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(chatThemeStyleConfig.chatThemeConfig[c]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[c].cssVar,
      children: [reactJsxRuntimeCoreReexport.jsx(imageListGridView.ImageListGrid, {
        data: {
          image_list: C
        },
        eventCallbacks: y,
        imageOptions: {
          loading: "eager"
        },
        getOtherFormatSrc: e => imageActionUtils.processImageData(e).otherFormat
      }), b(), f && (chatMessageStatusCheck.isMessageFinished(a) || messageContentTypeAndStatusChecker.vlk(a)) && reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (i = a.verbose) === null || i === undefined ? undefined : i.extra?.risk_tips
      })]
    });
  };
  require.d(exports, {
    ChatImageListView: function () {
      return y;
    }
  });
}