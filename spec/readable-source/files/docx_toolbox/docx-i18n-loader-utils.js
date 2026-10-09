// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$7' to 'isSheetSupported'
// - Renamed export 'Ad' to 'loadI18nForApp'
// - Renamed export 'Kd' to 'getLocaleCode'
// - Renamed export 'bw' to 'AppType'
// - Renamed export 'jp' to 'localeMapping'
// - Renamed export 'mg' to 'defaultAppType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 619747
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var s;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let m = ((c = window) === null || c === undefined ? undefined : c.globalConfig?.overload_static_domain_new) || ((s = window) === null || s === undefined ? undefined : s.globalConfig?.overload_static_domain) || [];
  let v = m.length >= 3 ? 3 : m.length;
  (o = {}).ZH = "zh";
  o.EN = "en";
  o.JA = "ja";
  o.FR = "fr";
  o.ID = "id";
  o.IT = "it";
  o.KO = "ko";
  o.PT = "pt";
  o.RU = "ru";
  o.TH = "th";
  o.VI = "vi";
  o.DE = "de";
  o.ES = "es";
  o.ZHTW = "zh-TW";
  o.ZHHK = "zh-HK";
  o.ZHHANT = "zh-Hant";
  o.MS = "ms";
  let b = o;
  (i = {}).ZH = "zh-CN";
  i.EN = "en-US";
  i.JA = "ja-JP";
  i.FR = "fr-FR";
  i.ID = "id-ID";
  i.IT = "it-IT";
  i.KO = "ko-KR";
  i.PT = "pt-BR";
  i.RU = "ru-RU";
  i.TH = "th-TH";
  i.VI = "vi-VN";
  i.DE = "de-DE";
  i.ES = "es-ES";
  i.ZHTW = "zh-TW";
  i.ZHHK = "zh-HK";
  i.MS = "ms-MY";
  let y = i;
  let _ = {
    [b.ZH]: y.ZH,
    [b.EN]: y.EN,
    [b.JA]: y.JA,
    [b.FR]: y.FR,
    [b.ID]: y.ID,
    [b.IT]: y.IT,
    [b.KO]: y.KO,
    [b.PT]: y.PT,
    [b.RU]: y.RU,
    [b.TH]: y.TH,
    [b.VI]: y.VI,
    [b.DE]: y.DE,
    [b.ES]: y.ES,
    [b.ZHTW]: y.ZHTW,
    [b.ZHHK]: y.ZHHK,
    [b.MS]: y.MS
  };
  function E() {
    return _[window._lang || b.EN] || y.EN;
  }
  (l = {}).SHEET = "sheet";
  l.BITABLE = "bitable";
  l.SLIDE = "slide";
  l.FULL = "full";
  let C = l;
  let k = {
    id: "id-ID",
    de: "de-DE",
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
    it: "it-IT",
    pt: "pt-BR",
    vi: "vi-VN",
    ru: "ru-RU",
    hi: "hi-IN",
    th: "th-TH",
    ko: "ko-KR",
    zh: "zh-CN",
    ja: "ja-JP",
    ms: "ms-MY",
    "zh-TW": "zh-TW",
    "zh-HK": "zh-HK"
  };
  let w = {
    [C.SHEET]: docxFeatureFlags.isZAndK()
  };
  let I = C.FULL;
  let S = w[C.SHEET] ? C.SHEET : I;
  let T = {
    [C.BITABLE]: `/eesz/bear/smartable/module/ee/docs/bitable/${objectPathGetDefault.getObjectPathDefault(window, "bearGarr.bitable.version", "")}/`,
    [C.SHEET]: `/eesz/bear/sheet/module/ee/bear_web/sheet/${objectPathGetDefault.getObjectPathDefault(window, "bearGarr.sheet.version", "")}/`
  };
  let B = function (e = C.FULL, n) {
    let r = k[window.langConfig.language] || k.en;
    let o = n || (navigator.cdn_host ? navigator.cdn_host.replace("//", "") : m.length ? m[0] : "");
    let i = o ? `https://${o}` : o;
    if (w[e] && objectPathGetDefault.getObjectPathDefault(window, `bearGarr.${e}.version`, "")) {
      let n;
      if (e === C.SHEET) {
        return `${i}${T[e]}lang/${r}.js`;
      } else {
        return `${i}${T[e]}lang/${e}/${r}.js`;
      }
    }
    if (e === C.FULL || e === C.BITABLE || e === C.SHEET) {
      return `${i}${window.langCdns.pathPrefix}${window.langCdns.fileNames[r]}`;
    } else {
      return "";
    }
  };
  let M = async function (e, n = C.FULL, r = 0) {
    return await fetch(e).then(e => e.text()).catch(async () => {
      docxEventCollector.wrappedCollector("cdn_error_handle", {
        src: xssContentSanitizer.sanitizeUrl(e, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3lhM2hQ%npSMFl$ZFdjMk5I$m5sTWJsSjZX$mhL-m1SW$R%MD0"
        }),
        retry_times: r,
        type: "normal"
      });
      if (r > v) {
        docxEventCollector.wrappedCollector("client_cdn_error", {
          src: xssContentSanitizer.sanitizeUrl(e, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3lhM2hQ%npSMFl$ZFdjMk5I$m5sTWJsSjZX$mhL-m1SW$R%MD0"
          })
        });
        return "";
      }
      let o = B(n, m[r]);
      return await M(o, n, r + 1);
    });
  };
  let R = async function (e = C.FULL) {
    return new Promise(async n => {
      let r = B(e);
      let o = await M(r, e);
      let i = w[e];
      let l = `window.TTI18N = Object.assign(window.TTI18N || {}, ${o.replace("window.TTI18N =", "")})`;
      Function(i ? o : l)();
      n();
    });
  };
  let O = function (e = C.FULL) {
    let n = `__hashLoadedI18n${e}`;
    let r = `__isLoadingI18n${e}`;
    let o = `__loadingI18nResolves${e}`;
    if (window[n] || browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return Promise.resolve();
    } else {
      return new Promise(window[r] ? e => {
        window[o] ||= [];
        window[o].push(e);
      } : async i => {
        var l;
        window[r] = true;
        await R(e);
        window[n] = true;
        window[r] = false;
        if ((l = window[o]) !== null && l !== undefined) {
          l.forEach(e => e());
        }
        i();
      });
    }
  };
  require.d(exports, {
    isSheetSupported: function () {
      return w;
    },
    loadI18nForApp: function () {
      return O;
    },
    getLocaleCode: function () {
      return E;
    },
    AppType: function () {
      return C;
    },
    localeMapping: function () {
      return y;
    },
    defaultAppType: function () {
      return S;
    }
  });
}