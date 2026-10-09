// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'autoContinueSwitch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: step-canvas-panel.5a261512.js
         * chunkId: 58536
         * moduleId: 344821
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var customSwitchComponent = require("custom-switch-component") /*id: 753298*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      autoContinueWriteUserEnable: t,
      onAutoContinueWriteUserEnableChange: n
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      className: "write-right-more-popover-Hdlzg4",
      position: "bottomRight",
      trigger: "click",
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "write-right-more-dropdown-RDOjQr",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "menu-item-hLUF2L",
          children: [reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {
            className: "icon-vrkxw0"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "label-j1Jp62",
            children: u("writing_canvas_autoGen_switchHeader")
          }), reactJsxRuntimeCoreReexport.jsx(customSwitchComponent.CustomSwitch, {
            size: "small",
            checked: t,
            onChange: n
          })]
        })
      }),
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        size: "larger",
        newIcon: true,
        onClick: emptyExportFunction.emptyFunction,
        children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {})
      })
    });
  };
  require.d(exports, {
    autoContinueSwitch: function () {
      return u;
    }
  });
}