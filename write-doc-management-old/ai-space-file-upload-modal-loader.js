// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'tm' to 'AISpaceFileUploadModalLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 797653
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var getAiSpaceMigrateStatus = require("get-ai-space-migrate-status") /*id: 662963*/;
  let o = () => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let e = await getAiSpaceMigrateStatus.getMigrateStatus();
      if ((e == null ? undefined : e.status) === "finished") {
        return Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("semi-design-ui-component-chunks") /*id: 38149*/, require.e("aispace-input-feishu-filelist-modal") /*id: 50535*/]).then(require.bind(require, "ai-space-file-upload-modal") /*id: 242488*/).then(e => ({
          default: e.UploadAISpaceFilesModal
        }));
      } else if ((e == null ? undefined : e.status) !== "") {
        return Promise.all([require.e("folder-file-icons") /*id: 41522*/, require.e("semi-design-ui-component-chunks") /*id: 38149*/, require.e("aispace-input-filelist-modal") /*id: 38418*/]).then(require.bind(require, "aispace-input-filelist-modal") /*id: 889483*/).then(e => ({
          default: e.UploadAISpaceFilesModal
        }));
      } else {
        return Promise.reject(Error("fetch migaration status fail"));
      }
    }
  });
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => o()));
  require.d(exports, {
    AISpaceFileUploadModalLoader: function () {
      return s;
    }
  });
}