// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'AssetListMultiView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 371987
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var skillReadDocMetadataDisplay = require("skill-read-doc-metadata-display") /*id: 745753*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M11.5 4a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2zM7.207 8.707a1 1 0 0 0-1.414-1.414L2.005 11.08a1.3 1.3 0 0 0 0 1.838l3.788 3.788a1 1 0 0 0 1.414-1.414L3.914 12zM10.5 12a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-9.5a1 1 0 0 1-1-1m1 6a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z",
      clipRule: "evenodd"
    })
  }), {}));
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var h = {
    container: "container-Wk4aVW",
    header: "header-X1QkAM",
    popover: "popover-hG85AJ",
    title: "title-TZ6dDS",
    list: "list-dJXR_g",
    item: "item-QpKeSw",
    icon: "icon-y02z5Q",
    "item-main": "item-main-C9OhnF",
    detail: "detail-CKj9OI",
    checked: "checked-C_ArAv",
    "checked-icon": "checked-icon-TSkXQj",
    "multi-icon": "multi-icon-vJMDsm",
    "multi-icon-wrapper": "multi-icon-wrapper-CzlXQa"
  };
  let _ = e => {
    let {
      className: n,
      style: d,
      type: _ = "sidebar",
      activeAssetKey: g,
      assetList: f,
      onSwitchAsset: w,
      onCloseSidebar: k
    } = e;
    let b = translationContextProvider.useTranslation();
    let x = translationContextProvider.useTranslationCtx();
    if (!f) {
      return null;
    }
    let C = _ === "popover";
    let y = f.length;
    let S = f[0]?.fileType;
    let A = f[0]?.fileName;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(n, h.container),
      style: d,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r(h.header, C && h.popover),
        children: [reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.MultiFileIcon, {
          num: f.length,
          fileType: S,
          className: h["multi-icon"],
          wrapperClassName: h["multi-icon-wrapper"]
        }), reactJsxRuntimeCoreReexport.jsxs("p", {
          className: h.title,
          children: [reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
            ellipsis: {
              pos: "middle"
            },
            children: A
          }), b("asset_list_multi_title", {
            sprintf: [(y - 1).toString()]
          })]
        }), !C && reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
          onClick: k,
          tooltip: b("asset_list_close_sidebar"),
          children: reactJsxRuntimeCoreReexport.jsx(p, {
            className: "!text-16 p-2"
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
        className: h.list,
        showScrollbar: true,
        children: f.map(e => reactJsxRuntimeCoreReexport.jsxs("button", {
          className: r(h.item, e.key === g && h.checked),
          onClick: () => {
            if (w != null) {
              w(e);
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
            style: "compact",
            className: h.icon,
            fileType: e.fileType
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: h["item-main"],
            children: [reactJsxRuntimeCoreReexport.jsx("p", {
              className: h.title,
              children: e.fileName
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: h.detail,
              children: reactJsxRuntimeCoreReexport.jsx(skillReadDocMetadataDisplay.SkillReadDocMetadataDisplay, {
                i18nConfig: x,
                date: e.date,
                bytes: e.bytes
              })
            })]
          }), e.key === g && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
            className: h["checked-icon"]
          })]
        }, e.key))
      })]
    });
  };
  require.d(exports, {
    AssetListMultiView: function () {
      return _;
    }
  });
}