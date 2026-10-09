// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 781307
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("vi", {
      months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
      monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
      monthsParseExact: true,
      weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
      weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysParseExact: true,
      meridiemParse: /sa|ch/i,
      isPM: function (e) {
        return /^ch$/i.test(e);
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          if (t) {
            return "sa";
          } else {
            return "SA";
          }
        } else if (t) {
          return "ch";
        } else {
          return "CH";
        }
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [năm] YYYY",
        LLL: "D MMMM [năm] YYYY HH:mm",
        LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
        l: "DD/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hôm nay lúc] LT",
        nextDay: "[Ngày mai lúc] LT",
        nextWeek: "dddd [tuần tới lúc] LT",
        lastDay: "[Hôm qua lúc] LT",
        lastWeek: "dddd [tuần trước lúc] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s tới",
        past: "%s trước",
        s: "vài giây",
        ss: "%d giây",
        m: "một phút",
        mm: "%d phút",
        h: "một giờ",
        hh: "%d giờ",
        d: "một ngày",
        dd: "%d ngày",
        w: "một tuần",
        ww: "%d tuần",
        M: "một tháng",
        MM: "%d tháng",
        y: "một năm",
        yy: "%d năm"
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function (e) {
        return e;
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}