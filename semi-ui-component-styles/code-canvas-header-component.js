// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'CodeCanvasHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 785350
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var tabsCarouselComponents = require("tabs-carousel-components") /*id: 642528*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var reactDownloadIcon = require("react-download-icon") /*id: 391488*/;
  var expandIconComponent = require("expand-icon-component") /*id: 577892*/;
  var shieldSecurityIcon_1_1 = require("shield-security-icon_1_1") /*id: 182614*/;
  var svgExpandIconComponent = require("svg-expand-icon-component") /*id: 993319*/;
  var codeCanvasStyles = require("code-canvas-styles") /*id: 489847*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e) {
    let {
      theme: t,
      prefix: a,
      icon: v,
      title: h,
      tabs: _ = [],
      currentTab: g,
      onSwitchTheme: f,
      onSwitchTab: w,
      onClose: k,
      onDownload: b
    } = e;
    let x = i18nTranslationUtils.useTranslationWithFallback();
    let C = reactCoreLibraryReexport.useCallback(() => {
      if (f != null) {
        f(t === "light" ? "dark" : "light");
      }
    }, [f]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: codeCanvasStyles.canvasClassNames["canvas-header"],
      "data-theme": t,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: codeCanvasStyles.canvasClassNames["canvas-header-left"],
        children: [a && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [a, reactJsxRuntimeCoreReexport.jsx("span", {
            className: codeCanvasStyles.canvasClassNames.divider
          })]
        }), v && reactJsxRuntimeCoreReexport.jsx("div", {
          className: codeCanvasStyles.canvasClassNames["canvas-header-icon"],
          children: v
        }), h && reactJsxRuntimeCoreReexport.jsx("div", {
          className: codeCanvasStyles.canvasClassNames["canvas-header-title"],
          children: h
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: codeCanvasStyles.canvasClassNames["canvas-header-middle"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: codeCanvasStyles.canvasClassNames["canvas-header-description"],
          children: _.length ? reactJsxRuntimeCoreReexport.jsx(tabsCarouselComponents.TabsWrapper, {
            value: g,
            onValueChange: e => {
              if (e !== g) {
                if (w != null) {
                  w(e);
                }
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx(tabsCarouselComponents.TabCarousel, {
              type: "view",
              size: "md",
              tabData: _.map(e => ({
                value: e.value,
                label: e.name
              }))
            })
          }) : null
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: codeCanvasStyles.canvasClassNames["canvas-header-right"],
        children: [b && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          getPopupContainer: () => document.body,
          content: x("web_ai_coding_canvas_download"),
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "icon",
            color: "grey-filled",
            size: "md2",
            onClick: b,
            children: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {})
          })
        }), f && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          getPopupContainer: () => document.body,
          content: x(t === "dark" ? "web_ai_coding_codeblock_light_mode" : "web_ai_coding_codeblock_dark_mode"),
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            "data-testid": "coding-skill-theme-button",
            variant: "icon",
            color: "grey-filled",
            size: "md2",
            onClick: C,
            children: t === "dark" ? reactJsxRuntimeCoreReexport.jsx(expandIconComponent.ExpandIcon, {}) : reactJsxRuntimeCoreReexport.jsx(shieldSecurityIcon_1_1.ShieldSecurityIcon, {})
          })
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: codeCanvasStyles.canvasClassNames.divider
        }), reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          getPopupContainer: () => document.body,
          content: x("flow_web_ext_close_upper_case"),
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            onClick: k,
            variant: "icon",
            color: "grey-filled",
            size: "md2",
            children: reactJsxRuntimeCoreReexport.jsx(svgExpandIconComponent.ExpandIcon, {})
          })
        })]
      })]
    });
  }
  require.d(exports, {
    CodeCanvasHeader: function () {
      return v;
    }
  });
}