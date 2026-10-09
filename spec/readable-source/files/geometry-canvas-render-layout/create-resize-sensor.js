// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'createSizeSensor'
// - Resolved require(660838) to 'create-size-sensor'
// - Renamed variable 'r' to 'resizeSensorFactory'
// - Resolved require(845617) to 'resize-sensor-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 292278
         */
module.exports = function (module, exports, require) {
  exports.createSensor = undefined;
  var createSizeSensor = require("create-size-sensor") /*id: 660838*/;
  var resizeSensorFactory = require("resize-sensor-factory") /*id: 845617*/;
  var o = typeof ResizeObserver != "undefined" ? resizeSensorFactory.createSensor : createSizeSensor.createSensor;
  exports.createSensor = o;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}