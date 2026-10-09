// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 's' to 'semiButtonWrapperComponentExport'
// - Resolved require(659091) to 'semi-button-wrapper-component-export'
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'semiButtonWrapperComponent'
// - Resolved require(654274) to 'semi-button-wrapper-component'
// - Renamed variable 'r' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'a' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'c' to 'chatCanvasPanelContainer'
// - Resolved require(955662) to 'chat-canvas-panel-container'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'SemiButtonWrapper' (module 654274)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'C' to 'CanvasPanelContainer' (module 955662)
// - Updated imported property 'z' to 'SemiButtonWrapperComponent' (module 659091)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-layout.eb82c4d1.js
         * chunkId: 6447
         * moduleId: 128010
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var semiButtonWrapperComponentExport = require("semi-button-wrapper-component-export") /*id: 659091*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var chatCanvasPanelContainer = require("chat-canvas-panel-container") /*id: 955662*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-full w-full flex-col overflow-hidden",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          relative flex h-56 flex-shrink-0 items-center justify-end px-16
        `,
        children: [reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          className: "h-32 w-32 rounded-s-radius-xs p-0",
          icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            className: "p-3 text-20 text-s-color-text-secondary"
          }),
          theme: "borderless",
          onClick: () => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            pointer-events-none absolute top-0 left-0 h-[200%] w-[200%]
          `,
          style: {
            transform: "scale(0.5)",
            transformOrigin: "0 0",
            borderBottom: "1px solid var(--s-color-border-tertiary, rgba(0, 0, 0, 0.08))"
          }
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex min-h-60 flex-1 flex-col items-center justify-center",
        children: n
      })]
    });
  };
  function p(e) {
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(chatCanvasPanelContainer.CanvasPanelContainer, {
      disableInput: true,
      children: reactJsxRuntimeCoreReexport.jsxs(u, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mb-24 text-s-color-text-quaternary s-font-base",
          children: n("canvas_loading_failed_desc")
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponentExport.SemiButtonWrapperComponent, {
          type: "primary",
          className: `
            !h-36 !rounded-[var(--s-radius-xs)] s-font-small-strong
            active:opacity-80
          `,
          onClick: () => e.resetErrorBoundary(),
          children: n("canvas_loading_failed_refresh_button")
        })]
      })
    });
  }
  let f = () => reactJsxRuntimeCoreReexport.jsx(chatCanvasPanelContainer.CanvasPanelContainer, {
    disableInput: true,
    children: reactJsxRuntimeCoreReexport.jsx(u, {
      children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        style: {
          "--semi-color-primary": "#00000080"
        }
      })
    })
  });
  require.r(exports);
  require.d(exports, {
    CommonLoadingCanvasPanel: function () {
      return f;
    },
    NoMatchCanvasPanel: function () {
      return p;
    }
  });
}