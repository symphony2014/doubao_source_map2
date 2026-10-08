// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'RefreshedImageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30665.32ad8f97.js
         * chunkId: 30665
         * moduleId: 785503
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var reactOptimizedImage = require("react-optimized-image") /*id: 351824*/;
  var asyncMessageOriginUtil = require("async-message-origin-util") /*id: 262112*/;
  var h = {
    "image-list": "image-list-j2xzHn",
    "image-item": "image-item-BoqrPO",
    "image-item-count": "image-item-count-jAwShD"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = (e, t) => t === e.length - 1;
  let m = e => {
    return e.thumb_url || e.full_size_url?.[0];
  };
  let p = reactCoreLibraryReexport.memo(e => {
    let {
      className: t,
      images: i,
      inView: n,
      onClick: p
    } = e;
    let $ = i.length > 5;
    let b = reactCoreLibraryReexport.useMemo(() => i.slice(0, 5), [i]);
    let g = reactCoreLibraryReexport.useMemo(() => i.map(m), [i]);
    let {
      latestFileUrls: f
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: g,
      enable: n
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(h["image-list"], t),
      children: b.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: h["image-item"],
        onClick: () => p(e),
        children: [reactJsxRuntimeCoreReexport.jsx(reactOptimizedImage.OptimizedImage, {
          src: xssContentSanitizer.sanitizeUrl(f[t], null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$J0Z%hST%0wNT$XW*s1-$d*WWIz%lpNamwwWTBjNWRWcFhO$EJqZ$RsNldsZEdl$mt5WjNSald*WnNZMj$yZEdOdFZuc*tWM2d3$EZkc2R*bFhaR3hN$jBwellqSk9ja3d5$*5aa$dFSjJZbTFXZFdSS$R-WmhWekZv$2pK$mRHSkhiSHBr%Xpsd1ltM$NiR1ZETlRCak0ya*9ZMjFrT$dOM1B%MD0"
          }),
          layout: "fill",
          objectFit: "cover",
          placeholder: "skeleton",
          loader: asyncMessageOriginUtil.getMessageOrigin
        }), $ && u(b, t) && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: h["image-item-count"],
          children: ["+ ", i.length - 5]
        })]
      }))
    });
  });
  require.d(exports, {
    RefreshedImageList: function () {
      return p;
    }
  });
}