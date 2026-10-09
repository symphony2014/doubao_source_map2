// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'a' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Renamed variable 'r' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'o' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 's' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'i18nextLanguageGetter'
// - Resolved require(124507) to 'i18next-language-getter'
// - Renamed variable 'p' to 'semiImageComponent'
// - Resolved require(87078) to 'semi-image-component'
// - Renamed variable 'm' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'l' to 'getCurrentLanguage' (module 124507)
// - Updated imported property 'C' to 'DownloadTracker' (module 671471)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'ZP' to 'SemiImage' (module 87078)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74385.3adcfde1.js
         * chunkId: 74385
         * moduleId: 749930
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var l = {
    wrapper: "wrapper-MI2HVd",
    header: "header-AvSWDN",
    banner: "banner-YdrlZ9",
    bannerMask: "bannerMask-_SNkwH",
    closeIcon: "closeIcon-Lhpowy",
    content: "content-yVW4FJ",
    title: "title-_xv9Pr",
    desc: "desc-QgZ_d3"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      headerBannerImg: t,
      title: n,
      content: a,
      footerNode: r,
      showCloseIcon: o,
      headerRightTopIcon: h,
      onClickCloseIcon: c
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l.wrapper,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l.header,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l.banner,
          children: [reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(t, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1haaWJ$cDJX$mhL-TJ*WE5XN%1WMD%yWW01%2JHSn$$WFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ"
            }),
            alt: ""
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: l.bannerMask
          })]
        }), h || (o ? reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: l.closeIcon,
          onClick: () => c == null ? undefined : c()
        }) : null)]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l.content,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: l.title,
          children: n
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: l.desc,
          children: a
        })]
      }), r]
    });
  };
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var g = require.p + "static/image/banner-zh.744e4f7b.png";
  let f = {
    "zh-Hant": require.p + "static/image/banner-zh-Hant.ecc2b24b.png",
    en: require.p + "static/image/banner-en.f8432cce.png",
    zh: g
  };
  let v = e => {
    let {
      onClickCloseIcon: t,
      buttonTextI18nKeyMap: n
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let l = brandNameConstants.getBrandName();
    let v = i18nextLanguageGetter.getCurrentLanguage();
    return reactJsxRuntimeCoreReexport.jsx(h, {
      headerBannerImg: f[v] || g,
      title: s("desktop_web_download_shareAppScreen_header", {
        brandName: l
      }),
      content: s("desktop_web_download_shareAppScreen_desc", {
        brandName: l
      }),
      footerNode: reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
        utmSource: chatPlatformConstants.sourceConstants.desExtSkillSharedAppAssistant,
        trackMeta: {
          showFrom: "share_app_button"
        },
        children: e => {
          let {
            keyWord: t,
            title: a,
            fallback_Icon: r
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: "w-260 shareScreenDownloadButton-P93pdf",
            type: "tertiary",
            icon: typeof r == "string" ? reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              width: 20,
              height: 20,
              src: xssContentSanitizer.sanitizeUrl(r, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$zFzTmt4WFJuZ*pRek-2W$$kR2$WcFRPWHBq-l%xMldXMXNOa3h-$*5aa$dFSjJZbTFXZFdSS$R-WmpNbWhvWTIx$mRHTXl%bmxh$jFaM$R*aE9jb%Z-Z%hOT$-yd3dXb*N3Z*xre%9-%mpSemwx$2xjM%1HTj$P$3RpTTJSM$lr-z$hRnBET$haaWJ$cDJX$mhL-TJ*WE5XN%1WMD%yWW01%2JHSn$$WFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ"
              }),
              fallback: r,
              preview: false
            }) : r,
            children: s((n == null ? undefined : n[t]) || a, {
              brand: l
            })
          });
        }
      }),
      onClickCloseIcon: t
    });
  };
  require.r(exports);
  require.d(exports, {
    DownloadOnboardingContent: function () {
      return v;
    }
  });
}