// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'AssetListSidebar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 15001
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  var exportRtlIcon = require("export-rtl-icon") /*id: 143647*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var p = {
    container: "container-jKv_QN",
    header: "header-jNDzzB",
    "sidebar-title": "sidebar-title-r_Qppt",
    sidebarTitle: "sidebar-title-r_Qppt",
    "sidebar-title-icon": "sidebar-title-icon-bQTDA5",
    sidebarTitleIcon: "sidebar-title-icon-bQTDA5",
    "sidebar-title-text": "sidebar-title-text-jycvN7",
    sidebarTitleText: "sidebar-title-text-jycvN7",
    "sidebar-title-close": "sidebar-title-close-oUqpBp",
    sidebarTitleClose: "sidebar-title-close-oUqpBp",
    list: "list-y7M9Lv",
    item: "item-DMvjDz",
    "item-icon": "item-icon-E3AEo8",
    itemIcon: "item-icon-E3AEo8",
    "item-title": "item-title-s7VBjX",
    itemTitle: "item-title-s7VBjX",
    checked: "checked-P4WjtT",
    popover: "popover-oe5zyW",
    "popover-title": "popover-title-NlG7wa",
    popoverTitle: "popover-title-NlG7wa"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      className: t,
      style: a,
      type: n = "sidebar",
      activeAssetKey: v,
      assetList: h,
      onSwitchAsset: _,
      onCloseSidebar: g
    } = e;
    let f = translationContextProvider.useTranslation();
    if (!h) {
      return null;
    }
    let w = n === "popover";
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(t, p.container, p.canvas, w && p.popover),
      style: a,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(p.header),
        children: w ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: p["popover-title"],
          children: f("skill_copliotreading_multifiles")
        }) : reactJsxRuntimeCoreReexport.jsxs("div", {
          className: p["sidebar-title"],
          children: [reactJsxRuntimeCoreReexport.jsx(exportRtlIcon.ExportRtlIcon, {
            className: p["sidebar-title-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: p["sidebar-title-text"],
            children: f("skill_copliotreading_multifiles")
          }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: f("asset_list_close_sidebar"),
            children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              size: "default",
              onClick: g,
              className: p["sidebar-title-close"]
            })
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
        className: p.list,
        showScrollbar: true,
        children: h.map(e => reactJsxRuntimeCoreReexport.jsxs("button", {
          "data-testid": "container_inner_file_btn",
          className: r(p.item, e.key === v && p.checked),
          onClick: () => {
            if (_ != null) {
              _(e);
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
            style: "compact",
            className: p["item-icon"],
            fileType: e.fileType
          }), reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Paragraph, {
            className: p["item-title"],
            ellipsis: {
              showTooltip: {
                opts: {
                  content: e.fileName
                },
                renderTooltip: (e, t) => reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                  content: e,
                  children: t,
                  position: "right",
                  spacing: 20
                })
              },
              rows: 2
            },
            children: e.fileName
          })]
        }, e.key))
      })]
    });
  };
  require.d(exports, {
    AssetListSidebar: function () {
      return v;
    }
  });
}