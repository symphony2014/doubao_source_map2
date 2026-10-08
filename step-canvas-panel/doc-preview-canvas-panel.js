// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'DocPreviewCanvasPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: step-canvas-panel.5a261512.js
         * chunkId: 58536
         * moduleId: 686360
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var randomNumberUtil = require("random-number-util") /*id: 636015*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var layoutPositionOrders = require("layout-position-orders") /*id: 314031*/;
  var responsiveControlBarHeaderWrapper = require("responsive-control-bar-header-wrapper") /*id: 550014*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var inlineDocxPanel_1 = require("inline-docx-panel_1") /*id: 913362*/;
  var docxExportPopover = require("docx-export-popover") /*id: 15743*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = reactReduxExports.Provider;
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: r,
      docId: c,
      actionPlugins: p,
      strategies: h
    } = e;
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let g = reactCoreLibraryReexport.useMemo(() => `doc-iframe-${c}-${randomNumberUtil.generateRandom(100000000, 999999999)}`, [c]);
    let f = reactCoreLibraryReexport.useMemo(() => Date.now(), [c]);
    let w = functionInvoker.invoke(() => [...(p || []), {
      key: "preview-tip",
      zone: layoutPositionOrders.LayoutPositions.LeftFirst,
      modifier: [{
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "previewTip-pxx0cX",
          children: k("documents_previewed")
        })
      }],
      getWidth: () => 150
    }, {
      key: "transfer",
      zone: layoutPositionOrders.LayoutPositions.RightThird,
      modifier: [{
        type: "custom",
        key: "export",
        element: reactJsxRuntimeCoreReexport.jsx(docxExportPopover.DocXExportButton, {
          pageToken: c,
          rpcClientId: g,
          reportParams: {
            show_from: "ai_doc_detail_upper_right"
          }
        })
      }],
      getWidth: () => 60
    }]);
    return reactJsxRuntimeCoreReexport.jsx(y, {
      store: flowPermissionHooks.reduxStore,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("container-fYow6v", n),
        style: r,
        children: [reactJsxRuntimeCoreReexport.jsx(responsiveControlBarHeaderWrapper.ResponsiveControlBarHeader, {
          className: "header-_Zuwv_",
          plugins: w,
          strategies: h
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "content-iDjY_R",
          "data-copy-telemetry": "right_click_copy",
          children: reactJsxRuntimeCoreReexport.jsx(inlineDocxPanel_1.InlineDocxPanel, {
            docId: c,
            perfStartTime: f,
            clientId: g,
            isPreview: true
          })
        })]
      })
    });
  });
  require.d(exports, {
    DocPreviewCanvasPanel: function () {
      return p;
    }
  });
}