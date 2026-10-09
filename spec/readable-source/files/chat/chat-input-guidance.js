// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'inputGuidanceTime'
// - Renamed export 'g' to 'InputGuidanceBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 495426
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = 240;
  let l = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: r("p-[var(--input-guidance-input-container-padding)] rounded-[var(--input-guidance-input-container-radius)]", "min-h-[var(--input-guidance-input-container-min-height)]", "border border-solid border-[var(--input-guidance-input-container-border-color)]", "bg-[var(--input-guidance-input-container-background)]")
  });
  require.d(exports, {
    inputGuidanceTime: function () {
      return a;
    },
    InputGuidanceBox: function () {
      return l;
    }
  });
}