// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'AiReadingDownload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 962266
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var v = {
    icon: "icon-isWCvi",
    text: "text-nwXM4u",
    disabled: "disabled-T8qCQ4",
    "dropdown-menu": "dropdown-menu-czHnfZ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (n = _ || {})[n.Original = 0] = "Original";
  n[n.Translation = 1] = "Translation";
  var _ = n;
  let g = e => {
    let {
      size: t,
      totalPage: a,
      onDownloadOriginal: n,
      onDownloadTranslation: i,
      disableDownloadTranslation: g
    } = e;
    let f = translationContextProvider.useTranslation();
    let w = reactContextProviderHook.useContextValue();
    let k = reactCoreLibraryReexport.useMemo(() => [{
      label: f("download_source_tooltip"),
      key: _.Original
    }, ...(g ? [] : [{
      label: f("ai_reading_translationDownload_download"),
      key: _.Translation,
      disabled: !a
    }])], [a, g]);
    let b = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e === _.Original) {
        if (n != null) {
          n();
        }
      } else if (e === _.Translation) {
        if (!a) {
          return;
        }
        if (a <= 50) {
          if (i != null) {
            i();
          }
        } else {
          samanthaToastFactory.toastInstance.warning(f("ai_reading_translationDownload_exceedLimit"));
        }
      }
    });
    let x = reactFunctionMemoHook.useMemoizedCallback(e => reactJsxRuntimeCoreReexport.jsx("div", {
      onClick: () => b(e.key),
      className: l(v.text, e.disabled && v.disabled),
      "data-testid": "download-file-button",
      children: e.label
    }));
    let C = reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
      size: t,
      className: v.icon,
      children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {})
    });
    let y = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
      className: v["dropdown-menu"],
      children: k.map((e, t) => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
        children: x(e)
      }, t))
    }), [k]);
    let S = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e) {
        var t;
        if ((t = w.onDownloadDropdownShow) !== null && t !== undefined) {
          t.call(w);
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      trigger: "hover",
      position: "bottom",
      render: y,
      onVisibleChange: S,
      children: C
    });
  };
  require.d(exports, {
    AiReadingDownload: function () {
      return g;
    }
  });
}