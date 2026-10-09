// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'ImageGalleryCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 163009
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var s = {
    container: "container-Qnd8GY",
    caption: "caption-pkB0XM",
    "caption-title": "caption-title-BtRXnk",
    "remain-count": "remain-count-l34ewI",
    footer: "footer-ibRjHo",
    "footer-bg": "footer-bg-q8M6vw",
    img: "img-l267hD",
    "img-bg": "img-bg-LDBy6u"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      item: i,
      classname: t,
      footerClassName: a,
      containerStyles: u,
      isLastImage: m,
      remainCount: p,
      isSmallMode: h = false,
      onClick: v,
      onCardShow: _
    } = e;
    let [g, f] = reactCoreLibraryReexport.useState(false);
    let [x, w] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false
    });
    let {
      latestFileUrls: b
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [(i == null ? undefined : i.thumb_url) || ""],
      enable: w
    });
    let $ = (b == null ? undefined : b[0]) || (i == null ? undefined : i.thumb_url);
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        if (_ != null) {
          _();
        }
      }
    }, [w]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: x,
      onClick: v,
      className: o(s.container),
      style: u,
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        className: o(s.img, `h-full w-full !bg-s-color-bg-base ${h ? "aspect-square" : "aspect-4/3"}  object-cover object-center`, {
          [s["img-bg"]]: !g
        }, t),
        src: xssContentSanitizer.sanitizeUrl($, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haaWJWWXp%RmRzZEZsWFpHeE1XR1I1$1ZoQ2QxcFlTWFpaTWpsMFkw-z$k$nB-TlRCT%1q$nNaS*t4-0dKWFJtNWF$ekZ3Wk$k$2RFd3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
        }),
        onLoad: () => {
          f(true);
        },
        alt: ""
      }), g && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(s.footer, a, {
          [s["footer-bg"]]: !!(i == null ? undefined : i.img_caption)
        }),
        children: [(i == null ? undefined : i.img_caption) && reactJsxRuntimeCoreReexport.jsx("div", {
          className: s.caption,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: s["caption-title"],
            children: i == null ? undefined : i.img_caption
          })
        }), m && p > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
          className: s["remain-count"],
          children: `+${p}`
        })]
      })]
    }, `${i.id}_index`);
  };
  require.d(exports, {
    ImageGalleryCard: function () {
      return u;
    }
  });
}