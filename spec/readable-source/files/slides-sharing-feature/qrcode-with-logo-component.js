// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'qrcodeWithLogo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 840161
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var qrcodeGeneratorLib = require("qrcode-generator-lib") /*id: 811071*/;
  var i = qrcodeGeneratorLib;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var d = require.p + "static/image/logo-app.1930b1a8.png";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      size: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("img", {
      src: xssContentSanitizer.sanitizeUrl(d, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1dwa%1qRjBZakkwZEdNeWFHa*pi$l-wWTBkR2RWcFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bDRZMmt4-kdWS$FuWmpibE-wWTBkR2RWcFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bHBZMjFHZFZwRE1-TmlNb$Iy$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ"
      }),
      alt: "",
      style: {
        width: t,
        height: t
      },
      draggable: false
    });
  };
  var h = e => {
    let {
      className: t = "",
      text: a,
      size: n = 126,
      logoSize: s = 24,
      needCenterLogo: l = false
    } = e;
    let d = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (d.current) {
        d.current.innerHTML = "";
        let e = new i(d.current, {
          text: a,
          width: n,
          height: n,
          colorDark: "#000",
          colorLight: "#fff"
        });
        return () => {
          e.clear();
        };
      }
    }, [a, n]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "QrCode",
      className: "relative flex-column flex items-center",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: d,
        className: o("QrCode-zHoB42", t),
        style: {
          width: n,
          height: n
        }
      }), l && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)]",
        children: reactJsxRuntimeCoreReexport.jsx(u, {
          size: s
        })
      })]
    });
  };
  require.d(exports, {
    qrcodeWithLogo: function () {
      return h;
    }
  });
}