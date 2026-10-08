// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A4' to 'maxTimeslice'
// - Renamed export 'Dp' to 'defaultZero'
// - Renamed export 'Ip' to 'fetchLimit'
// - Renamed export 'JQ' to 'coverMode'
// - Renamed export 'OP' to 'fetchTimeout'
// - Renamed export 'ee' to 'defaultInterval'
// - Renamed export 'vK' to 'breakpointMap'
// - Renamed export 'zm' to 'fetchFrequency'
// - Renamed export 'zp' to 'maxCdnCount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 67275
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let i = "0";
  let l = "cover";
  let a = 60000;
  let s = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.image_fetch_scheduler.limit") || 3;
  let c = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.image_fetch_scheduler.frequency") || 10;
  let d = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.image_fetch_scheduler.timeout") || 1000;
  let u = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.image_fetch_scheduler.max_timeslice") || 500;
  let h = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.image_fetch_scheduler.max_cdn_url_count") || 200;
  let p = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.image_fetch_scheduler.bpms") || {
    0: 3,
    1140: 4,
    2250: 6
  };
  require.d(exports, {
    maxTimeslice: function () {
      return u;
    },
    defaultZero: function () {
      return i;
    },
    fetchLimit: function () {
      return s;
    },
    coverMode: function () {
      return l;
    },
    fetchTimeout: function () {
      return d;
    },
    defaultInterval: function () {
      return a;
    },
    breakpointMap: function () {
      return p;
    },
    fetchFrequency: function () {
      return c;
    },
    maxCdnCount: function () {
      return h;
    }
  });
}