// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W_' to 'zonedTimeToUtc'
// - Renamed export 'YS' to 'utcToZonedTime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 986472
         */
module.exports = function (module, exports, require) {
  var timezoneDateUtils = require("timezone-date-utils") /*id: 926967*/;
  let r = [[-11, ["Pacific/Midway"]], [-10, ["Pacific/Honolulu"]], [-9.5, ["Pacific/Marquesas"]], [-9, ["Pacific/Gambier"]], [-8, ["Pacific/Pitcairn"]], [-7, ["America/Phoenix"]], [-6, ["America/Tegucigalpa"]], [-5, ["America/Bogota"]], [-4, ["America/Puerto_Rico"]], [-3.5, ["America/St_Johns"]], [-3, ["America/Montevideo"]], [-2, ["Atlantic/South_Georgia"]], [-1, ["Atlantic/Cape_Verde"]], [0, ["Africa/Accra"]], [1, ["Africa/Bangui"]], [2, ["Africa/Cairo"]], [3, ["Asia/Bahrain", "Indian/Antananarivo"]], [3.5, ["Asia/Tehran"]], [4, ["Asia/Dubai", "Asia/Muscat"]], [4.5, ["Asia/Kabul"]], [5, ["Asia/Samarkand", "Asia/Karachi"]], [5.5, ["Asia/Kolkata"]], [5.75, ["Asia/Kathmandu"]], [6, ["Asia/Dhaka"]], [6.5, ["Asia/Rangoon", "Asia/Rangoon"]], [7, ["Asia/Jakarta", "Asia/Phnom_Penh", "Asia/Bangkok"]], [8, ["Asia/Shanghai", "Asia/Singapore"]], [8.75, ["Australia/Eucla"]], [9, ["Asia/Tokyo", "Asia/Seoul", "Asia/Pyongyang"]], [9.5, ["Australia/Darwin"]], [10, ["Pacific/Guam"]], [10.5, ["Australia/Adelaide"]], [11, ["Pacific/Guadalcanal"]], [12, ["Pacific/Funafuti"]], [13, ["Pacific/Enderbury"]], [13.75, ["Pacific/Chatham"]], [14, ["Pacific/Kiritimati"]]];
  let i = {
    0: "Etc/GMT",
    1: "Etc/GMT-1",
    2: "Etc/GMT-2",
    3: "Etc/GMT-3",
    4: "Etc/GMT-4",
    5: "Etc/GMT-5",
    6: "Etc/GMT-6",
    7: "Etc/GMT-7",
    8: "Etc/GMT-8",
    9: "Etc/GMT-9",
    10: "Etc/GMT-10",
    11: "Etc/GMT-11",
    12: "Etc/GMT-12",
    13: "Etc/GMT-13",
    14: "Etc/GMT-14",
    "-1": "Etc/GMT+1",
    "-2": "Etc/GMT+2",
    "-3": "Etc/GMT+3",
    "-4": "Etc/GMT+4",
    "-5": "Etc/GMT+5",
    "-6": "Etc/GMT+6",
    "-7": "Etc/GMT+7",
    "-8": "Etc/GMT+8",
    "-9": "Etc/GMT+9",
    "-10": "Etc/GMT+10",
    "-11": "Etc/GMT+11",
    "-12": "Etc/GMT+12"
  };
  let o = /([\-\+]{1})(\d{2})\:(\d{2})/;
  let s = e => {
    let t = null;
    if (typeof e == "string") {
      if (!(t = e.match(o))) {
        return e;
      }
      let n = parseInt(t[1] + 1, 10);
      e = n * (parseInt(t[2], 10) + parseInt(t[3], 10) / 60);
    }
    if (typeof e == "number") {
      if (e in i) {
        let t = i[e];
        if (function (e) {
          if (l[e]) {
            return true;
          }
          try {
            new Intl.DateTimeFormat(undefined, {
              timeZone: e
            });
            l[e] = true;
            return true;
          } catch (e) {
            return false;
          }
        }(t)) {
          return t;
        }
      }
      let t = r.find(t => t[0] === e);
      return t && t[1][0];
    }
  };
  let l = {};
  let u = (e, t, n) => timezoneDateUtils.utcToZonedTime(e, s(t), n);
  let d = (e, t, n) => timezoneDateUtils.zonedTimeToUtc(e, s(t), n);
  require.d(exports, {
    zonedTimeToUtc: function () {
      return d;
    },
    utcToZonedTime: function () {
      return u;
    }
  });
}