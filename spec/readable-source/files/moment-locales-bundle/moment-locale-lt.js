// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 515589
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      ss: "sekundė_sekundžių_sekundes",
      m: "minutė_minutės_minutę",
      mm: "minutės_minučių_minutes",
      h: "valanda_valandos_valandą",
      hh: "valandos_valandų_valandas",
      d: "diena_dienos_dieną",
      dd: "dienos_dienų_dienas",
      M: "mėnuo_mėnesio_mėnesį",
      MM: "mėnesiai_mėnesių_mėnesius",
      y: "metai_metų_metus",
      yy: "metai_metų_metus"
    };
    function t(e, a, t, n) {
      if (a) {
        return s(t)[0];
      } else if (n) {
        return s(t)[1];
      } else {
        return s(t)[2];
      }
    }
    function n(e) {
      return e % 10 == 0 || e > 10 && e < 20;
    }
    function s(e) {
      return a[e].split("_");
    }
    function r(e, a, r, i) {
      var d = e + " ";
      if (e === 1) {
        return d + t(e, a, r[0], i);
      } else if (a) {
        return d + (n(e) ? s(r)[1] : s(r)[0]);
      } else if (i) {
        return d + s(r)[1];
      } else {
        return d + (n(e) ? s(r)[1] : s(r)[2]);
      }
    }
    e.defineLocale("lt", {
      months: {
        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
      },
      monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
      weekdays: {
        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
        isFormat: /dddd HH:mm/
      },
      weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
      weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY [m.] MMMM D [d.]",
        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
        l: "YYYY-MM-DD",
        ll: "YYYY [m.] MMMM D [d.]",
        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
      },
      calendar: {
        sameDay: "[Šiandien] LT",
        nextDay: "[Rytoj] LT",
        nextWeek: "dddd LT",
        lastDay: "[Vakar] LT",
        lastWeek: "[Praėjusį] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "po %s",
        past: "prieš %s",
        s: function (e, a, t, n) {
          if (a) {
            return "kelios sekundės";
          } else if (n) {
            return "kelių sekundžių";
          } else {
            return "kelias sekundes";
          }
        },
        ss: r,
        m: t,
        mm: r,
        h: t,
        hh: r,
        d: t,
        dd: r,
        M: t,
        MM: r,
        y: t,
        yy: r
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal: function (e) {
        return e + "-oji";
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}