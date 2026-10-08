// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'QrCodeWithBranding'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 999730
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = () => require.e("static-logo-icon") /*id: 47691*/.then(require.t.bind(require, 966331, 17));
  let h = e => {
    let [t, n] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        n((await (e ?? f)()).default);
      })();
    }, []);
    return t;
  };
  let m = e => {
    let {
      load: t,
      className: n,
      skeletonClassName: r
    } = e;
    let o = h(t);
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(o, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpKb2FHTnRWWFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1KSE9XNWll$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
        }),
        className: i(n)
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Avatar, {
        className: i("w-80 h-80", r)
      });
    }
  };
  var v = {
    qrcodeContainer: "qrcodeContainer-K3hSwy",
    qrcode: "qrcode-HXh66T"
  };
  let g = e => {
    let {
      showQRCode: t,
      url: o,
      className: d
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let f = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e = true;
      let r = require.e("qr-code-library") /*id: 18844*/.then(require.t.bind(require, 811071, 23));
      if (!t) {
        return;
      }
      let i = chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
        source: chatStorageKeys.chatStorageKeys.debugStorage
      });
      if (f.current) {
        f.current.innerHTML = "";
      }
      r.then(t => {
        let {
          default: n
        } = t;
        if (e) {
          new n(f.current, {
            text: o,
            width: 64,
            height: 64,
            colorDark: "#323232",
            colorLight: i ? "rgba(230, 233, 240, 1)" : "rgba(235, 239, 245, 1)",
            correctLevel: n.CorrectLevel.L
          });
        }
      });
      return () => {
        e = false;
      };
    }, [t, o]);
    if (t) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: i("qrcode-container flex items-center justify-center mt-48 px-38 py-42 -mx-38", v.qrcodeContainer, d),
        children: [reactJsxRuntimeCoreReexport.jsx(m, {
          load: () => require.e("webpack-asset") /*id: 84578*/.then(require.t.bind(require, 625852, 17)),
          className: "w-48 h-48 mr-8 rounded-full border-solid border-[0.5px] border-s-color-border-primary"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "text-s-color-text-tertiary grow",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "s-font-base-em",
            children: u("brandName_doubao")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mr-2 s-font-xs",
            children: u("share_label_greeting")
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: i("qrcode [&>img]:w-64", v.qrcode),
          ref: f
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    QrCodeWithBranding: function () {
      return g;
    }
  });
}