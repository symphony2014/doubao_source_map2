// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'LazyImageCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 274552
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var c = {
    container: "container-Yh55g8",
    "remain-count": "remain-count-SR3rjj",
    img: "img-pLSvpg",
    "img-bg": "img-bg-ZwLBNv"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      item: t,
      classname: i,
      containerStyles: o,
      isLastImage: u,
      remainCount: h,
      onClick: p,
      onCardShow: m
    } = e;
    let [v, f] = reactCoreLibraryReexport.useState(false);
    let [g, _] = reactIntersectionObserver.useInView({
      triggerOnce: true,
      initialInView: false
    });
    let {
      latestFileUrls: b
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [(t == null ? undefined : t.thumb_url) || ""],
      enable: _
    });
    let y = (b == null ? undefined : b[0]) || (t == null ? undefined : t.thumb_url);
    reactCoreLibraryReexport.useEffect(() => {
      if (_) {
        if (m != null) {
          m({
            show_status: +!!v
          });
        }
      }
    }, [_, v]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: g,
      onClick: () => {
        if (p != null) {
          p({
            show_status: +!!v
          });
        }
      },
      className: l(c.container),
      style: o,
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        className: l(c.img, "h-full w-full !bg-s-color-bg-base aspect-4/3  object-cover object-center", {
          [c["img-bg"]]: !v
        }, i),
        src: xssContentSanitizer.sanitizeUrl(y, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$m1oamJ$NXZ%RE5PZ$ZsN%9Xb*hXRzkw$1RJNWRHTkhPWFZh$np$d1kzaz$lbHB-%m5sWk1tZDBZMWhX-kdOdWEz%mpi$lo2WkZkNE1FeFhTbk5pTWs1e$RESk9kb%pZ%W5aaWJWWjFaR%01ZWxwWFJubFpNbWQwWXpKc2ExcFRN$2xa$0$sMFlW-3hhRm95$lhSWk1qbDFaRWRXZFdSRE9-QmlWMFp1$2xNe*NH%khWblJNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
        }),
        onLoad: () => {
          f(true);
        },
        alt: ""
      }), v && u && h > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: c["remain-count"],
        children: `+${h}`
      })]
    }, `${t.id}_index`);
  };
  require.d(exports, {
    LazyImageCard: function () {
      return u;
    }
  });
}