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
// - Resolved require.e(19584) to 'module-federation-runtime'
// - Resolved require.e(4603) to 'ui-primitives-utils'
// - Resolved require.e(854) to 'semi-ui-toast-popover'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(79175) to 'samantha-message-utils'
// - Resolved require.e(57467) to 'flow-auth-space-sdk'
// - Resolved require.e(58923) to 'chat-writing-assistant-ui'
// - Resolved require.e(91155) to 'popover-toaster-components'
// - Resolved require.e(42241) to 'writing-skills-carousel-ui'
// - Resolved require.e(48718) to 'async-after-interactive-docx-guidance'
// - Resolved require.bind(343601) to 'doc-guidance-page-component'
// - Updated imported property 'Zv' to 'runOnInteractive' (module 358717)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 831691
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var flowLayoutStateRunner = require("flow-layout-state-runner") /*id: 358717*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
    default: await Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("ui-primitives-utils") /*id: 4603*/, require.e("semi-ui-toast-popover") /*id: 854*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("chat-writing-assistant-ui") /*id: 58923*/, require.e("popover-toaster-components") /*id: 91155*/, require.e("writing-skills-carousel-ui") /*id: 42241*/, require.e("async-after-interactive-docx-guidance") /*id: 48718*/]).then(require.bind(require, "doc-guidance-page-component") /*id: 343601*/).then(e => e.DocGuidancePage)
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
    DocxGuidancePage: function () {
      return l;
    }
  });
}