// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'UploadButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-guidance-input.f8202b74.js
         * chunkId: 48684
         * moduleId: 994788
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = () => reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {});
  let c = e => reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
    color: "grey-outline",
    size: "md",
    className: r("size-36 !rounded-full p-9 !outline-transparent", "[&_svg:not([class*=\"size-\"])]:size-[18px]"),
    onClick: () => !e.disabled && teaAnalyticsEventTracker.trackEvent("click_upload_entrance", e.trackParams),
    children: reactJsxRuntimeCoreReexport.jsx(u, {})
  });
  require.d(exports, {
    UploadButton: function () {
      return c;
    }
  });
}