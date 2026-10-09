// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactChartWrapper'
// - Resolved require(958671) to 'react-chart-wrapper'
// - Resolved require(660248) to 'chart-series-components-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 617542
         */
module.exports = function (module, exports, require) {
  var reactChartWrapper = require("react-chart-wrapper") /*id: 958671*/;
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return reactChartWrapper.default;
    }
  });
  require("chart-series-components-module") /*id: 660248*/;
}