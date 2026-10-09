// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'SkillImageBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 368459
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactOptimizedImage = require("react-optimized-image") /*id: 351824*/;
  var attachImgTagComponent = require("attach-img-tag-component") /*id: 371964*/;
  var messageBoxClasses = require("message-box-classes") /*id: 727901*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = {
    width: 100,
    height: 200
  };
  let h = ["avif", "webp"];
  let m = e => {
    let {
      extra: {
        origin: t
      }
    } = e;
    return t;
  };
  let f = e => {
    let {
      url: t,
      tag: n,
      width: o,
      height: f,
      maxWidth: g,
      maxHeight: v,
      defaultWidth: b,
      defaultHeight: y,
      placeholder: x = "skeleton",
      className: w,
      onClick: A
    } = e;
    let [_, k] = reactCoreLibraryReexport.useState({
      width: o || b || p.width,
      height: f || y || p.height
    });
    let S = _.width > g;
    let C = _.height > v;
    let $ = Math.min(S ? g / _.width : 1, C ? v / _.height : 1);
    let E = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (!o || !f) {
        k({
          width: e.naturalWidth,
          height: e.naturalHeight
        });
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(messageBoxClasses.messageBoxClasses.container, A && messageBoxClasses.messageBoxClasses.clickable, w),
      style: {
        width: _.width * $,
        height: _.height * $
      },
      onClick: A,
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6$25Oa$$6RndZb*RH-mxw$E1Xb*lNMmQyWXpKc2RWb3llR3hN$jJ4MFdWZ*tiRXh1$W5wbFIwWj$Xak5XZWc9PQ"
        }),
        layout: "responsive",
        formats: h,
        placeholder: x,
        width: _.width,
        height: _.height,
        loader: m,
        onLoadingComplete: E
      }), !!n && reactJsxRuntimeCoreReexport.jsx(attachImgTagComponent.AttachImgTag, {
        className: l(messageBoxClasses.messageBoxClasses.tag, "max-w-98"),
        tag: n
      })]
    });
  };
  require.d(exports, {
    SkillImageBox: function () {
      return f;
    }
  });
}