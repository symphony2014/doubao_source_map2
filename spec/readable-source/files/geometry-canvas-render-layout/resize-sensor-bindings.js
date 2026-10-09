// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'resizeSensorManager'
// - Resolved require(241700) to 'resize-sensor-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 879857
         */
module.exports = function (module, exports, require) {
  exports.clear = exports.bind = undefined;
  var resizeSensorManager = require("resize-sensor-manager") /*id: 241700*/;
  exports.bind = function (t, e) {
    var n = resizeSensorManager.getSensor(t);
    n.bind(e);
    return function () {
      n.unbind(e);
    };
  };
  exports.clear = function (t) {
    var e = resizeSensorManager.getSensor(t);
    resizeSensorManager.removeSensor(e);
  };
}