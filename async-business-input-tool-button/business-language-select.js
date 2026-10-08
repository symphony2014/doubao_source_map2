// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'LanguageSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 528368
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var businessInputSelectButton = require("business-input-select-button") /*id: 61460*/;
  var iconChevronDown = require("icon-chevron-down") /*id: 521832*/;
  var l = {
    "language-select": "language-select-BuiezL",
    "language-local": "language-local-xaxFQ6",
    language: "language-K63w_D"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      languageList: t,
      className: n,
      onOpenChange: i,
      ...c
    } = e;
    let u = t.map(e => {
      let {
        language_code: t,
        language: n,
        language_loc: i
      } = e;
      return {
        value: t || "",
        label: reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [i && reactJsxRuntimeCoreReexport.jsx("div", {
            className: l["language-local"],
            "data-testid": "select_item_title",
            children: i
          }), n && reactJsxRuntimeCoreReexport.jsx("div", {
            className: l.language,
            "data-testid": "select_item_subtitle",
            children: n
          })]
        }),
        selectedLabel: i || ""
      };
    });
    return reactJsxRuntimeCoreReexport.jsx(businessInputSelectButton.BusinessInputSelect, {
      ...c,
      arrowIcon: reactJsxRuntimeCoreReexport.jsx(iconChevronDown.ChevronDownIcon, {
        className: "mr-4 p-2 text-12"
      }),
      className: r(l["language-select"], n),
      optionList: u,
      renderSelectedItem: e => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: e.selectedLabel
      }),
      onDropdownVisibleChange: i
    });
  };
  require.d(exports, {
    LanguageSelector: function () {
      return c;
    }
  });
}