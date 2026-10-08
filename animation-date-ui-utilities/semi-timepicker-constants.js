// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UX' to 'timepickerClasses'
// - Renamed export 'j2' to 'timepickerConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 561832
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var logLevelTypes = require("log-level-types") /*id: 818674*/;
  var semiInputConstants = require("semi-input-constants") /*id: 859366*/;
  let o = "time";
  let s = "timeRange";
  let l = {
    PREFIX: `${semiIdentifier.semiIdentifier}-timepicker`,
    RANGE_PICKER: `${semiIdentifier.semiIdentifier}-timepicker-range-panel`,
    RANGE_PANEL_LISTS: `${semiIdentifier.semiIdentifier}-timepicker-lists`
  };
  let u = {
    TYPES: [o, s],
    TYPE_TIME_PICKER: o,
    TYPE_TIME_RANGE_PICKER: s,
    DEFAULT_TYPE: o,
    DEFAULT_RANGE_SEPARATOR: " ~ ",
    DEFAULT_MULTIPLE_SEPARATOR: ",",
    SIZE: semiInputConstants.inputConstants.SIZE,
    DEFAULT_FORMAT: "HH:mm:ss",
    DEFAULT_FORMAT_A: "a h:mm:ss",
    STATUS: logLevelTypes.logLevels,
    DEFAULT_POSITION: {
      [o]: "bottomLeft",
      [s]: "bottomLeft"
    }
  };
  require.d(exports, {
    timepickerClasses: function () {
      return l;
    },
    timepickerConfig: function () {
      return u;
    }
  });
}