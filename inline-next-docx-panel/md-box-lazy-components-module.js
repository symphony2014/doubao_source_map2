// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$z' to 'lazyMdBoxComponent'
// - Renamed export 'Eo' to 'lazyLinkComponent'
// - Renamed export 'k7' to 'lazyImageComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 857296
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  let l = reactCoreLibraryReexport.lazy(async () => {
    let {
      MdBoxLazy: e
    } = await asyncRetryUtils.retryPromise(() => Promise.all([require.e("87517", "high"), require.e("45425", "high"), require.e("76927", "high"), require.e("52853", "high"), require.e("51369", "high"), require.e("21658", "high")]).then(require.bind(require, "markdown-renderer-component-wrapper") /*id: 880688*/));
    return {
      default: e
    };
  });
  let r = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    let {
      Image: e
    } = await asyncRetryUtils.retryPromise(() => Promise.all([require.e("html-entity-decoder") /*id: 87517*/, require.e("katex-core-library") /*id: 21553*/, require.e("text-processing-utils") /*id: 45425*/, require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("react-imagex-utils") /*id: 76927*/, require.e("core-js-polyfills") /*id: 80332*/, require.e("mathjax-tex-renderer") /*id: 43274*/, require.e("semi-ui-primitives") /*id: 18629*/, require.e("markdown-autofix-modifiers") /*id: 52853*/, require.e("markdown-renderer-mdbox") /*id: 51369*/, require.e("3914") /*id: css-unknown*/, require.e("md-box-image") /*id: 82090*/]).then(require.bind(require, "react-optimized-image-wrapper") /*id: 784484*/));
    return {
      default: e
    };
  }));
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    let {
      Link: e
    } = await asyncRetryUtils.retryPromise(() => require.e("md-box-link") /*id: 9623*/.then(require.bind(require, "link-component-handler") /*id: 94706*/));
    return {
      default: e
    };
  }));
  require.d(exports, {
    lazyMdBoxComponent: function () {
      return l;
    },
    lazyLinkComponent: function () {
      return s;
    },
    lazyImageComponent: function () {
      return r;
    }
  });
}