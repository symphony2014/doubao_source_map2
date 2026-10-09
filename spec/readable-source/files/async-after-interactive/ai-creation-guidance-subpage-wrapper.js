// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'flowLayoutStateRunner'
// - Resolved require(358717) to 'flow-layout-state-runner'
// - Renamed variable 'i' to 'chatPageInteractiveTracker'
// - Resolved require(798740) to 'chat-page-interactive-tracker'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(43361) to 'lib-react'
// - Resolved require.e(87086) to 'semi-image-preview'
// - Resolved require.e(71518) to 'ui-avatar-typography-tag'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(43927) to 'ui-feature-components'
// - Resolved require.e(15933) to 'async-after-interactive-ai-creation-guidance'
// - Resolved require.bind(851045) to 'ai-creation-guidance-page'
// - Updated imported property 'Zv' to 'runOnInteractive' (module 358717)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 483667
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var flowLayoutStateRunner = require("flow-layout-state-runner") /*id: 358717*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
    default: await Promise.all([require.e("lib-react") /*id: 43361*/, require.e("semi-image-preview") /*id: 87086*/, require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("api-client-services") /*id: 26176*/, require.e("ui-feature-components") /*id: 43927*/, require.e("async-after-interactive-ai-creation-guidance") /*id: 15933*/]).then(require.bind(require, "ai-creation-guidance-page") /*id: 851045*/).then(e => e.AICreationGuidanceSubPage)
  })));
  let l = reactCoreLibraryReexport.memo(function () {
    let {
      pageInteractive: e
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
        children: reactJsxRuntimeCoreReexport.jsx(s, {})
      });
    } else {
      return null;
    }
  });
  require.r(exports);
  require.d(exports, {
    AICreationGuidanceSubPage: function () {
      return l;
    }
  });
}