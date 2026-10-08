// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'o' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 's' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'a' to 'reactCarouselComponent'
// - Resolved require(464116) to 'react-carousel-component'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'chatResponsiveSize'
// - Resolved require(836635) to 'chat-responsive-size'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'attachmentNodeUiWrapper'
// - Resolved require(88463) to 'attachment-node-ui-wrapper'
// - Updated imported property 'y' to 'useChatScreenSize' (module 836635)
// - Updated imported property 'Q' to 'AttachmentNodeComponent' (module 88463)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'MZ' to 'parseState' (module 292449)
// - Updated imported property 'Av' to 'isDefined' (module 385226)
// - Updated imported property 'l' to 'Carousel' (module 464116)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-attachment-file-area.de99ae05.js
         * chunkId: 60681
         * moduleId: 440802
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      attachmentBoxes: t,
      className: n = ""
    } = e;
    let r = chatResponsiveSize.useChatScreenSize();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c("relative h-fit w-fit grid gap-x-8 gap-y-8", n),
      style: {
        gridTemplateColumns: `repeat(${r === "sm" ? 2 : 3}, 1fr)`
      },
      children: t
    });
  };
  var attachmentNodeUiWrapper = require("attachment-node-ui-wrapper") /*id: 88463*/;
  function h(e) {
    let {
      attachmentStates: t,
      onDeleteAttachment: n,
      onRetryAttachment: l,
      disableGridLayout: c = false,
      renderAttachmentBox: u
    } = e;
    let h = t.length > 10 && !c;
    let g = u ?? (e => reactJsxRuntimeCoreReexport.jsx(attachmentNodeUiWrapper.AttachmentNodeComponent, {
      ...e
    }));
    let v = e => {
      let {
        className: a
      } = e || {};
      return t.map((e, t) => {
        let s = e.localKey;
        return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
          children: g({
            ...e,
            onDelete: () => {
              n(t);
            },
            onReUpload: () => l(t),
            onReParse: () => {
              if (s) {
                chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
                  if (e != null) {
                    e.updateAttachmentParseState(s, messagingConstants.parseState.ParseState_Processing);
                  }
                });
              }
            },
            className: a
          })
        }, s);
      }).filter(infraUtilFunctions.isDefined);
    };
    if (h) {
      return reactJsxRuntimeCoreReexport.jsx(f, {
        attachmentBoxes: v()
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex gap-8",
          children: v({
            className: "!w-200"
          })
        })
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AttachmentFileArea: function () {
      return h;
    }
  });
}