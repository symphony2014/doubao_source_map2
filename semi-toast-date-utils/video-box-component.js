// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'VideoBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 410011
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var rtlCirclePlayIcon = require("rtl-circle-play-icon") /*id: 681027*/;
  var d = {
    "video-wrapper": "video-wrapper-VOIT4J",
    "video-wrapper-hover": "video-wrapper-hover-p9RAP9",
    "video-header": "video-header-NX5Muh",
    img: "img-te2yr2",
    "play-btn-container": "play-btn-container-bg3cNU",
    "video-caption-container": "video-caption-container-uDftcX",
    "caption-text-container": "caption-text-container-Vb5aOj",
    "video-caption": "video-caption-LD3TOM",
    "video-box-bg-image": "video-box-bg-image-yyk6ZB"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, i) {
    let {
      data: t,
      className: l,
      hoverActived: c,
      onHover: u,
      onLeave: m,
      onClick: p
    } = e;
    let [h, v] = reactCoreLibraryReexport.useState(false);
    let [_, g] = reactCoreLibraryReexport.useState(undefined);
    let [f, x] = reactCoreLibraryReexport.useState(undefined);
    let w = reactCoreLibraryReexport.useRef(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (t == null ? undefined : t.album_image) {
        w.current = w.current + 1;
        let e = w.current;
        v(false);
        g(undefined);
        x(undefined);
        let i = new Image();
        i.addEventListener("load", () => {
          if (e === w.current) {
            v(true);
            g(i == null ? undefined : i.naturalWidth);
            x(i == null ? undefined : i.naturalHeight);
            if (i != null) {
              i.remove();
            }
            i = null;
          }
        });
        i.addEventListener("error", () => {
          if (i != null) {
            i.remove();
          }
          i = null;
        });
        i.src = xssContentSanitizer.sanitizeUrl(t.album_image, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3elduQmFSM$oy$EZkT2FHTnR$WFpr-WtWMllW-zFhMXBZWjNWa1NFNDBX$mhL-m1SW$R%MD0"
        });
      }
    }, [t == null ? undefined : t.album_image]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(d["video-wrapper"], l, {
        [d["video-wrapper-hover"]]: c
      }),
      onClick: p,
      onMouseEnter: u,
      onMouseLeave: m,
      ref: i,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(d["video-box-bg-image"], l, "video-box-bg-image"),
        "data-testid": "video-box-bg-image",
        "data-validate-id": "video-box-bg-image",
        "data-complete": h,
        "data-natural-width": _,
        "data-natural-height": f,
        style: {
          backgroundImage: `url(${t == null ? undefined : t.album_image})`
        }
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d["video-header"],
        children: [(t == null ? undefined : t.source_app_icon) && reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx("img", {
            className: d.img,
            src: xssContentSanitizer.sanitizeUrl(t.source_app_icon, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3elduQmFSM$oy$EZkT2FHTnR$WFpr-WtWMllW-zFhMXBZWjNWa1NFNDBX$mhL-m1SW$R%MD0"
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: d["play-btn-container"],
          children: reactJsxRuntimeCoreReexport.jsx(rtlCirclePlayIcon.CirclePlayIcon, {
            className: "!text-22"
          })
        })]
      }), (t == null ? undefined : t.video_captions) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: d["video-caption-container"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: d["caption-text-container"],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(d["video-caption"], "text-[14px] font-medium leading-[18px]", "video-caption"),
            children: t == null ? undefined : t.video_captions
          })
        })
      })]
    });
  });
  let u = reactCoreLibraryReexport.forwardRef(function (e, i) {
    let {
      onClick: t,
      videoItem: r,
      className: l
    } = e;
    let [a, o] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(c, {
      ref: i,
      className: l,
      data: r,
      hoverActived: a,
      onHover: () => {
        o(true);
      },
      onLeave: () => {
        o(false);
      },
      onClick: t
    });
  });
  require.d(exports, {
    VideoBox: function () {
      return u;
    }
  });
}