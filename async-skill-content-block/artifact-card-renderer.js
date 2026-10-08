// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'ArtifactCardView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 255406
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => require.e("code-block-artifact-card") /*id: 4636*/.then(require.bind(require, "code-block-artifact-card") /*id: 419389*/)).then(e => ({
    default: e.CodeBlockArtifactCard
  }))));
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => require.e("animation-and-progress-utils") /*id: 78419*/.then(require.bind(require, "super-task-ai-ppt-card-component") /*id: 151294*/)).then(e => ({
    default: e.CodeBlockAIPPTCard
  }))));
  let u = reactCoreLibraryReexport.memo(e => {
    let {
      contentBlock: i
    } = e;
    let o = i.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT;
    let a = i.content_obj?.resource_type === skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Code;
    let u = i.content_obj?.resource_content_type === "type/ppt";
    if (o && a && u) {
      return reactJsxRuntimeCoreReexport.jsx(d, {
        ...e
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        ...e
      });
    }
  });
  require.d(exports, {
    ArtifactCardView: function () {
      return u;
    }
  });
}