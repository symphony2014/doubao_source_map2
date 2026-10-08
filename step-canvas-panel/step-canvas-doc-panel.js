// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'StepCanvasDocPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: step-canvas-panel.5a261512.js
         * chunkId: 58536
         * moduleId: 518448
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var layoutPositionOrders = require("layout-position-orders") /*id: 314031*/;
  var responsiveControlBarHeaderWrapper = require("responsive-control-bar-header-wrapper") /*id: 550014*/;
  var docxShareClientService = require("docx-share-client-service") /*id: 88629*/;
  var docExportPopover = require("doc-export-popover") /*id: 381123*/;
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseConstantHook = require("react-use-constant-hook") /*id: 402486*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var otterDocDiContainerInitializer = require("otter-doc-di-container-initializer") /*id: 669008*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactReduxExports.Provider;
  otterDocDiContainerInitializer.initializeOtterDocContainer();
  let k = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: a,
      docId: x,
      actionPlugins: y,
      strategies: k,
      onFetchDoc: g
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let w = reactUseConstantHook.useConstant(() => new flowDocxEditorControllerModule.useDocWidthModeSelector());
    let b = functionInvoker.invoke(() => [...(y || []), {
      key: "preview-tip",
      zone: layoutPositionOrders.LayoutPositions.LeftFirst,
      modifier: [{
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "previewTip-YviCWK",
          children: f("documents_previewed")
        })
      }],
      getWidth: () => 150
    }, {
      key: "transfer",
      zone: layoutPositionOrders.LayoutPositions.RightThird,
      modifier: [{
        type: "custom",
        key: "export",
        element: reactJsxRuntimeCoreReexport.jsx(docExportPopover.DocExportButton, {
          pageToken: x,
          reportParams: {
            show_from: "ai_doc_detail_upper_right"
          }
        })
      }],
      getWidth: () => 60
    }]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => w, []);
    return reactJsxRuntimeCoreReexport.jsx(h, {
      store: flowPermissionHooks.reduxStore,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r("container-LhRVmO", n),
        style: a,
        children: [reactJsxRuntimeCoreReexport.jsx(responsiveControlBarHeaderWrapper.ResponsiveControlBarHeader, {
          className: "header-dt1EVr",
          plugins: b,
          strategies: k
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "content-RqVH3o",
          "data-copy-telemetry": "right_click_copy",
          children: reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorController, {
            docId: x,
            flowSuiteType: flowDocxEditorControllerModule.CopilotShareModes.Share,
            getAuthToken: () => docxShareClientService.getAuthToken(x),
            onFetchDoc: g
          }, x)
        })]
      })
    });
  });
  require.d(exports, {
    StepCanvasDocPanel: function () {
      return k;
    }
  });
}