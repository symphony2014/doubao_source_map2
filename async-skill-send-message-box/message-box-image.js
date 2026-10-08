// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'MessageBoxImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 512593
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactOptimizedImage = require("react-optimized-image") /*id: 351824*/;
  var attachImgTagComponent = require("attach-img-tag-component") /*id: 371964*/;
  var messageBoxClasses = require("message-box-classes") /*id: 727901*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = ["avif", "webp"];
  let u = e => {
    let {
      extra: {
        origin: t
      }
    } = e;
    return t;
  };
  let p = e => {
    let {
      url: t,
      tag: n,
      width: r,
      height: p,
      className: h,
      style: m,
      onClick: f
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(messageBoxClasses.messageBoxClasses.container, f && messageBoxClasses.messageBoxClasses.clickable, h),
      style: {
        width: r,
        height: p,
        ...m
      },
      onClick: f,
      children: [reactJsxRuntimeCoreReexport.jsx(reactOptimizedImage.OptimizedImage, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6$25Oa$$6RndZb*RH-mxw$E1Xb*lNMmQyWWxo$01HRlhkM1Jo$np*b1dqSlZk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
        }),
        layout: "fill",
        objectFit: "cover",
        formats: d,
        placeholder: "skeleton",
        width: r,
        height: p,
        loader: u
      }), !!n && reactJsxRuntimeCoreReexport.jsx(attachImgTagComponent.AttachImgTag, {
        className: messageBoxClasses.messageBoxClasses.tag,
        tag: n
      })]
    });
  };
  require.d(exports, {
    MessageBoxImage: function () {
      return p;
    }
  });
}