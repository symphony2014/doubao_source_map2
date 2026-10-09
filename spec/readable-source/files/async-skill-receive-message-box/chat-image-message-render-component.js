// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'ChatImageMessageRender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 94302
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var imageEditHoverTagRenderer = require("image-edit-hover-tag-renderer") /*id: 474718*/;
  var chatImageRenderHook = require("chat-image-render-hook") /*id: 80227*/;
  var imageListGridView = require("image-list-grid-view") /*id: 332524*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var imageErrorResetComponent = require("image-error-reset-component") /*id: 877507*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  let _ = e => {
    let {
      children: t
    } = e;
    return {};
  };
  var pictureMessageAnalyticsHook = require("picture-message-analytics-hook") /*id: 283637*/;
  let v = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      inView: t,
      message: n,
      hideHoverTag: a,
      enableOpenCanvas: l = true
    } = e;
    let {
      imageList: s,
      imageFileName: u
    } = pictureMessageAnalyticsHook.usePictureMessageAnalytics({
      inView: t,
      message: n
    });
    let _ = imageEditHoverTagRenderer.ImageEditHoverTagRenderer({
      imageFileName: u,
      message: n,
      hideHoverTag: a
    });
    let {
      imageRenderProps: v,
      contextMenu: f,
      renderImagePreview: p,
      imageRenderWrapper: h,
      isCanvasExpand: g
    } = chatImageRenderHook.useChatImageRender({
      imageList: s,
      message: n,
      hideHoverTag: a,
      enableOpenCanvas: l
    });
    let b = reactCoreLibraryReexport.useRef(null);
    useElementMountMonitor.useElementMountMonitor({
      inView: t,
      reportOnInView: true,
      getElement: () => b.current,
      checkMessageShowError: e => messageErrorHandler.checkImageLoadStatus({
        ...e,
        hasImage: !!(s == null ? undefined : s.length),
        defaultNaturalWidth: 400,
        defaultNaturalHeight: 300
      }),
      onError: e => messageErrorHandler.handleMessageShowError({
        ...e,
        message: n,
        from: "image_receive_images"
      })
    });
    return {
      imageBoxCallbacks: v,
      imageBoxRenderFn: h,
      imageList: s,
      contextMenu: f,
      renderImagePreview: p,
      renderHoverEle: _,
      isCanvasExpand: g,
      imageBoxRef: b
    };
  };
  let h = reactErrorBoundaryWrapper.withErrorBoundary(function (e) {
    var n;
    let {
      inView: s,
      thinkingConfig: c,
      enableOpenCanvas: d,
      message: u,
      hideHoverTag: m
    } = e;
    let {
      imageBoxCallbacks: h,
      imageList: g,
      contextMenu: b,
      renderHoverEle: y,
      renderImagePreview: w,
      isCanvasExpand: k,
      imageBoxRenderFn: x,
      imageBoxRef: S
    } = p({
      inView: s,
      message: u,
      enableOpenCanvas: v.enableOpenCanvas ?? d,
      hideHoverTag: v.hideHoverTag ?? m
    });
    let C = Array(c == null ? undefined : c.imageCount).fill({
      image_thumb: {
        width: c == null ? undefined : c.imageWidth,
        height: c == null ? undefined : c.imageHeight
      },
      isThinking: true
    });
    let E = {
      data: {
        image_list: (c == null ? undefined : c.isThinking) ? C : g || []
      },
      eventCallbacks: {
        ...h,
        ...v.eventCallbacksDiff
      },
      "data-testid": "message_image_content",
      renderHoverEle: y,
      isSmall: k,
      gap: k ? 2 : 4,
      children: x
    };
    let R = _(E);
    let T = (u == null ? undefined : (n = u.verbose) === null || n === undefined ? undefined : n.credit?.credit_tips) || (u == null ? undefined : u.ext?.credit_tips);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(imageListGridView.ImageListGrid, {
        ref: S,
        ...E,
        ...R,
        overideContextMenuEvent: true,
        getImageThumbUrl: e => {
          return imageActionUtils.processImageData(e).thumbImage?.url || "";
        },
        getOtherFormatSrc: e => imageActionUtils.processImageData(e).otherFormat
      }), T && reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
              pt-20 text-16 leading-24 font-[400]
              text-(--s-color-text-quaternary)
            `,
        children: T
      }), b, w()]
    });
  }, {
    errorBoundaryName: "image_message_block_error",
    FallbackComponent: imageErrorResetComponent.ImageErrorReset
  });
  require.d(exports, {
    ChatImageMessageRender: function () {
      return h;
    }
  });
}