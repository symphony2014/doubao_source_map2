// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H$' to 'formatRelativeDate'
// - Renamed export 'Hg' to 'getWeeksDiff'
// - Renamed export 'NX' to 'getMonthsDiff'
// - Renamed export 'SW' to 'getDaysDiff'
// - Renamed export 'ZR' to 'formatLocaleDate'
// - Renamed export 'aL' to 'getYearsDiff'
// - Renamed export 'gO' to 'isYesterday'
// - Renamed export 'mr' to 'formatDuration'
// - Renamed export 'p6' to 'formatTimestamp'
// - Renamed export 'zk' to 'isToday'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18872.aedb6c81.js
         * chunkId: 18872
         * moduleId: 179094
         */
module.exports = function (module, exports, require) {
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var o = dayjsDateLibrary;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let a = function (e, t = "YYYY/MM/DD HH:mm:ss") {
    return o(parseInt(String(e))).format(t);
  };
  let s = e => o(parseInt(String(e))).isSame(o(), "day");
  let l = e => o(parseInt(String(e))).isSame(o().subtract(1, "day"), "day");
  let c = e => o().diff(o(parseInt(String(e))), "day");
  let d = e => o().diff(o(parseInt(String(e))), "week");
  let u = e => o().diff(o(parseInt(String(e))), "month");
  let p = e => o().diff(o(parseInt(String(e))), "year");
  let h = e => {
    let t = o();
    let n = o(e);
    if (t.isSame(n, "day")) {
      return n.format("HH:mm");
    } else if (t.isSame(n, "year")) {
      return n.format("MM-DD HH:mm");
    } else {
      return n.format("YYYY-MM-DD HH:mm");
    }
  };
  let f = {
    af: {
      ll: "D MMM YYYY"
    },
    ar: {
      ll: "D MMM، YYYY"
    },
    bg: {
      ll: "D MMM YYYY"
    },
    bn: {
      ll: "D MMM YYYY"
    },
    ca: {
      ll: "D MMM [de] YYYY"
    },
    ceb: {
      ll: "MMM D, YYYY"
    },
    cs: {
      ll: "D. MMM YYYY"
    },
    da: {
      ll: "[den] D MMM YYYY"
    },
    de: {
      ll: "D. MMM YYYY"
    },
    el: {
      ll: "D MMM YYYY"
    },
    "en-GB": {
      ll: "D MMM YYYY"
    },
    en: {
      ll: "MMM D, YYYY"
    },
    es: {
      ll: "D [de] MMM [de] YYYY"
    },
    et: {
      ll: "DD. MMM YYYY"
    },
    fi: {
      ll: "D. MMM YYYY"
    },
    fil: {
      ll: "D MMM YYYY"
    },
    "fr-CA": {
      ll: "D MMM YYYY"
    },
    fr: {
      ll: "D MMM YYYY"
    },
    ga: {
      ll: "D MMM YYYY"
    },
    gu: {
      ll: "D MMM YYYY"
    },
    he: {
      ll: "D MMM YYYY"
    },
    hi: {
      ll: "D MMM YYYY"
    },
    hr: {
      ll: "D. MMM YYYY."
    },
    hu: {
      ll: "YYYY. MMM. D."
    },
    id: {
      ll: "D MMM YYYY"
    },
    is: {
      ll: "D. MMM YYYY"
    },
    it: {
      ll: "D MMM YYYY"
    },
    ja: {
      ll: "YYYY[年]M[月]D[日]"
    },
    jv: {
      ll: "D MMM YYYY"
    },
    kk: {
      ll: "D MMM, YYYY"
    },
    km: {
      ll: "D MMM YYYY"
    },
    kn: {
      ll: "D MMM YYYY"
    },
    ko: {
      ll: "YYYY[년] M[월] D[일]"
    },
    lt: {
      ll: "YYYY MMMM D"
    },
    lv: {
      ll: "D. MMM., YYYY"
    },
    ml: {
      ll: "D MMM YYYY"
    },
    mr: {
      ll: "D MMM YYYY"
    },
    ms: {
      ll: "D MMM YYYY"
    },
    my: {
      ll: "YYYY၊ MMM D"
    },
    nb: {
      ll: "D. MMM YYYY"
    },
    nl: {
      ll: "D MMM YYYY"
    },
    or: {
      ll: "D MMM YYYY"
    },
    pa: {
      ll: "D MMM YYYY"
    },
    pl: {
      ll: "D MMM YYYY"
    },
    "pt-BR": {
      ll: "D [de] MMM [de] YYYY"
    },
    "pt-PT": {
      ll: "D/MM/YYYY"
    },
    pt: {
      ll: "D [de] MMM [de] YYYY"
    },
    ro: {
      ll: "D MMM YYYY"
    },
    ru: {
      ll: "D MMM YYYY"
    },
    sk: {
      ll: "D. MMM YYYY"
    },
    sl: {
      ll: "D. MMM YYYY"
    },
    sq: {
      ll: "D MMM YYYY"
    },
    sv: {
      ll: "[den] D MMM YYYY"
    },
    sw: {
      ll: "D MMM YYYY"
    },
    ta: {
      ll: "D MMM YYYY"
    },
    te: {
      ll: "D MMM YYYY"
    },
    th: {
      ll: "D MMM YYYY"
    },
    tr: {
      ll: "D MMM YYYY"
    },
    uk: {
      ll: "D MMM YYYY"
    },
    ur: {
      ll: "D MMM YYYY"
    },
    uz: {
      ll: "D-MMM, YYYY"
    },
    vi: {
      ll: "D MMM, YYYY"
    },
    "zh-Hans": {
      ll: "YYYY[年]M[月]D[日]"
    },
    "zh-Hant": {
      ll: "YYYY[年]M[月]D[日]"
    }
  };
  let m = f["zh-Hans"];
  let g = e => {
    if (!e) {
      return;
    }
    let r = e.split(",")[0];
    if (processBrowserShim !== undefined && [processBrowserShim == null ? undefined : processBrowserShim.env?.DEPLOY_CDN_REGION, processBrowserShim == null ? undefined : processBrowserShim.env?.REGION].every(e => e !== "cn")) {
      let e = r.toLowerCase();
      let [t] = e.split("-");
      if (t === "zh") {
        if (["zh", "zh-cn", "zh-sg", "zh-hans", "zh-hans-cn", "zh-hans-sg"].includes(e)) {
          return "zh-Hans";
        } else {
          return "zh-Hant";
        }
      } else {
        return t;
      }
    }
    return "zh-Hans";
  };
  let y = e => {
    let {
      date: t,
      format: n,
      language: r
    } = e;
    let i = o(t);
    if (!i.isValid()) {
      return "";
    }
    let a = f[r] || f[g(r) || ""] || m;
    return i.format(a[n]);
  };
  let b = e => {
    if (!e) {
      return {};
    }
    let t = Math.floor(e / 60);
    let n = Math.floor(e % 60);
    return {
      formattedMinutes: String(t).padStart(2, "0"),
      formattedSeconds: String(n).padStart(2, "0")
    };
  };
  require.d(exports, {
    formatRelativeDate: function () {
      return h;
    },
    getWeeksDiff: function () {
      return d;
    },
    getMonthsDiff: function () {
      return u;
    },
    getDaysDiff: function () {
      return c;
    },
    formatLocaleDate: function () {
      return y;
    },
    getYearsDiff: function () {
      return p;
    },
    isYesterday: function () {
      return l;
    },
    formatDuration: function () {
      return b;
    },
    formatTimestamp: function () {
      return a;
    },
    isToday: function () {
      return s;
    }
  });
}