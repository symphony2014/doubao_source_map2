// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'ImageGallery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 6817
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var fileUrlCacheManager = require("file-url-cache-manager") /*id: 655022*/;
  var c = {
    "image-box": "image-box-UvwwOo",
    image: "image-XInfIl",
    more: "more-GYSmOt",
    num: "num-L91G2V"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e) {
    let {
      imageUris: t,
      maxVisible: a = 8
    } = e;
    if (!(a >= 1)) {
      a = 8;
    }
    let [i, u] = reactCoreLibraryReexport.useState([]);
    let [p, m] = reactCoreLibraryReexport.useState(false);
    let [v, h] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      fileUrlCacheManager.getFileUrls(t, "image").then(e => u(e));
    }, t);
    let _ = reactCoreLibraryReexport.useCallback(() => {
      if (i.length <= a) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: i.map((e, t) => reactJsxRuntimeCoreReexport.jsx("img", {
            className: c.image,
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFph%jFacFp*Z*pkR0Z-T$do-%1s$jBZa2RzZW1SRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
            }),
            onClick: () => {
              m(true);
              h(t);
            }
          }, e))
        });
      }
      let e = a - 1;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [i.slice(0, e).map((e, t) => reactJsxRuntimeCoreReexport.jsx("img", {
          className: c.image,
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFph%jFacFp*Z*pkR0Z-T$do-%1s$jBZa2RzZW1SRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
          }),
          onClick: () => {
            m(true);
            h(t);
          }
        }, e)), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l(c.image, c.more),
          onClick: () => {
            m(true);
            h(e);
          },
          children: [reactJsxRuntimeCoreReexport.jsx("img", {
            className: c.image,
            src: xssContentSanitizer.sanitizeUrl(i[e], null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFph%jFacFp*Z*pkR0Z-T$do-%1s$jBZa2RzZW1SRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
            })
          }, i[e]), reactJsxRuntimeCoreReexport.jsxs("span", {
            className: c.num,
            children: ["+", i.length - a]
          })]
        })]
      });
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(c["image-box"], "my-8"),
        children: _()
      }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: p,
        onVisibleChange: m,
        src: xssContentSanitizer.sanitizeUrl(i.map(e => e), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFph%jFacFp*Z*pkR0Z-T$do-%1s$jBZa2RzZW1SRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
        }),
        currentIndex: v,
        onChange: h
      })]
    });
  }
  require.d(exports, {
    ImageGallery: function () {
      return u;
    }
  });
}