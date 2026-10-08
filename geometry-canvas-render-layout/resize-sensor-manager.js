// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(22824) to 'sequential-id-generator'
// - Renamed variable 'o' to 'createResizeSensor'
// - Resolved require(292278) to 'create-resize-sensor'
// - Renamed variable 'a' to 'sizeSensorConstants'
// - Resolved require(574093) to 'size-sensor-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 241700
         */
module.exports = function (module, exports, require) {
  exports.removeSensor = exports.getSensor = undefined;
  var i;
  var r = (i = require("sequential-id-generator") /*id: 22824*/) && i.__esModule ? i : {
    default: i
  };
  var createResizeSensor = require("create-resize-sensor") /*id: 292278*/;
  var sizeSensorConstants = require("size-sensor-constants") /*id: 574093*/;
  var s = {};
  exports.getSensor = function (t) {
    var e = t.getAttribute(sizeSensorConstants.SizeSensorId);
    if (e && s[e]) {
      return s[e];
    }
    var n = r.default();
    t.setAttribute(sizeSensorConstants.SizeSensorId, n);
    var i = createResizeSensor.createSensor(t);
    s[n] = i;
    return i;
  };
  exports.removeSensor = function (t) {
    var e = t.element.getAttribute(sizeSensorConstants.SizeSensorId);
    t.element.removeAttribute(sizeSensorConstants.SizeSensorId);
    t.destroy();
    if (e && s[e]) {
      delete s[e];
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}