// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'ThinkingIndicator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 409662
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var thinkingUiClassNames = require("thinking-ui-class-names") /*id: 451526*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = () => reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
    wrapperClassName: thinkingUiClassNames.classNames.spin,
    size: "small"
  });
  let d = e => {
    let {
      classname: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(thinkingUiClassNames.classNames["default-thinking"], t),
      children: [reactJsxRuntimeCoreReexport.jsx(c, {}), reactJsxRuntimeCoreReexport.jsx("span", {
        className: thinkingUiClassNames.classNames["default-thinking-title"],
        children: n("正在思考")
      })]
    });
  };
  require.d(exports, {
    ThinkingIndicator: function () {
      return d;
    }
  });
}