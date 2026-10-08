// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'samanthaPopoverWrapperComponent'
// - Resolved require(137563) to 'samantha-popover-wrapper-component'
// - Renamed variable 'i' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'l' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(74385) to 'image-viewer-component'
// - Resolved require.bind(749930) to 'download-onboarding-content'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'r' to 'SamanthaPopover' (module 137563)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-bar-item.f7100fdd.js
         * chunkId: 24932
         * moduleId: 956505
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("image-viewer-component") /*id: 74385*/.then(require.bind(require, "download-onboarding-content") /*id: 749930*/).then(e => ({
      default: e.DownloadOnboardingContent
    }))
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-300 h-336"
  }));
  let u = e => {
    let {
      renderContent: t
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      style: {
        boxShadow: "none",
        background: "transparent"
      },
      visible: n,
      position: "right",
      trigger: "click",
      content: reactJsxRuntimeCoreReexport.jsx(a, {
        onClickCloseIcon: () => i(false)
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: () => {
          i(true);
        },
        children: t({
          keepMorePopover: true
        })
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    ShareScreenSkillBarItemComponent: function () {
      return u;
    }
  });
}