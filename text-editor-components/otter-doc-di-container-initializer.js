// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'initializeOtterDocContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 669008
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var otterDocDiContainerSetup = require("otter-doc-di-container-setup") /*id: 58489*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var flowDoConfigServiceSymbol = require("flow-do-config-service-symbol") /*id: 533067*/;
  var docCommentPanelSymbol = require("doc-comment-panel-symbol") /*id: 598384*/;
  var hostPlatformServiceTypes = require("host-platform-service-types") /*id: 857478*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = false;
  function h() {
    otterDocDiContainerSetup.setupOtterDocDIContainer();
    if (!_) {
      _ = true;
      diContainerInstance.diContainer.bind(docCommentPanelSymbol.docCommentPanel).toConstantValue(reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
        fn: async () => await Promise.all([require.e("editor-kit-state-manager") /*id: 79909*/, require.e("core-editor-utilities") /*id: 47773*/, require.e("changeset-delta-operations") /*id: 69805*/, require.e("docs-editor-utils") /*id: 74354*/, require.e("ui-avatar-button-notice") /*id: 64757*/]).then(require.bind(require, "docx-comment-panel-sidebar") /*id: 201052*/)
      }))));
      diContainerInstance.diContainer.bind(flowDoConfigServiceSymbol.FlowDoConfigService).toConstantValue({
        getDocStreamingSmooth: () => writeConfigManager.WriteConfigManager.isDocStreamingSmooth(),
        getIsDirectAcceptRevision: () => writeConfigManager.WriteConfigManager.isDirectAcceptRevisionDefault()
      });
      diContainerInstance.diContainer.bind(hostPlatformServiceTypes.HostPlatformService).toConstantValue({
        getHostPlatform: () => hostPlatformServiceTypes.platformTypes.Web,
        FusionDocDownloadClientBtn: e => {
          let {
            children: n
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: n
          });
        }
      });
    }
  }
  require.d(exports, {
    initializeOtterDocContainer: function () {
      return h;
    }
  });
}