// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useAssetListSwitcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 223604
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var assetListEnum = require("asset-list-enum") /*id: 307771*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var exportRtlIcon = require("export-rtl-icon") /*id: 143647*/;
  var assetListSidebar = require("asset-list-sidebar") /*id: 15001*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var h = "popover-e7oep_";
  var _ = "container-fpT_Da";
  var g = "list-container-CDi9jn";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      className: t,
      style: a,
      size: i,
      activeAssetKey: w,
      assetList: k,
      onChangeSidebar: b,
      onSwitchAsset: x
    } = e;
    let C = translationContextProvider.useTranslation();
    let [y, S] = useLocalStorageHook.useLocalStorage("sidebar_asset_list_userguide", false);
    let [A, E] = reactCoreLibraryReexport.useState(false);
    let R = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (!e) {
        S(true);
      }
    });
    let N = reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
      onClick: e => {
        e.stopPropagation();
        if (b != null) {
          b(assetListEnum.AssetList.AssetList);
        }
      },
      size: i,
      className: "icon-ZyUNH5",
      children: reactJsxRuntimeCoreReexport.jsx(exportRtlIcon.ExportRtlIcon, {})
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!y) {
        setTimeout(() => {
          E(true);
        }, 1000);
      }
    }, [y]);
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      content: C("skill_copliotreading_multifiles_tooltip"),
      onVisibleChange: R,
      visible: !y && A,
      children: reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        className: l(h, "canvas-Ym7aK6"),
        contentClassName: l(_, t),
        style: a,
        position: "bottomLeft",
        content: reactJsxRuntimeCoreReexport.jsx(assetListSidebar.AssetListSidebar, {
          type: "popover",
          className: g,
          assetList: k,
          activeAssetKey: w,
          onSwitchAsset: x
        }),
        children: N
      })
    });
  };
  var k = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M3 4a1 1 0 0 0 0 2h9.5a1 1 0 1 0 0-2zm15.207 3.293a1 1 0 1 0-1.414 1.414L20.086 12l-3.293 3.293a1 1 0 0 0 1.414 1.414l3.788-3.788a1.3 1.3 0 0 0 0-1.838zM2 12a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 6a1 1 0 1 0 0 2h9.5a1 1 0 1 0 0-2z",
      clipRule: "evenodd"
    })
  }), {}));
  var assetListMultiView = require("asset-list-multi-view") /*id: 371987*/;
  let x = e => {
    let {
      className: t,
      style: a,
      size: n,
      activeAssetKey: i,
      assetList: o,
      onChangeSidebar: s,
      onSwitchAsset: u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      className: h,
      contentClassName: l(_, t),
      style: a,
      content: reactJsxRuntimeCoreReexport.jsx(assetListMultiView.AssetListMultiView, {
        type: "popover",
        className: g,
        assetList: o,
        activeAssetKey: i,
        onSwitchAsset: u
      }),
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        onClick: e => {
          e.stopPropagation();
          if (s != null) {
            s(assetListEnum.AssetList.AssetList);
          }
        },
        size: n,
        children: reactJsxRuntimeCoreReexport.jsx(k, {
          className: "!text-16 p-2"
        })
      })
    });
  };
  let C = e => {
    let {
      isInCanvas: t,
      assetListConfig: a
    } = e;
    return {
      iconVisible: reactCoreLibraryReexport.useMemo(() => (a == null ? undefined : a.assetList) && a.assetList.length > 1 && a.sidebarValue !== assetListEnum.AssetList.AssetList, [a]),
      renderIcon: reactCoreLibraryReexport.useCallback(() => t ? reactJsxRuntimeCoreReexport.jsx(w, {
        ...a
      }) : reactJsxRuntimeCoreReexport.jsx(x, {
        ...a
      }), [t, a])
    };
  };
  require.d(exports, {
    useAssetListSwitcher: function () {
      return C;
    }
  });
}