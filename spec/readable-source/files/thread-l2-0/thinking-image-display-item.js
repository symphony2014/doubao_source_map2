// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'ThinkingImageItem'
// - Renamed export 'c' to 'MessageThinkingWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 925611
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var rtlImageIconComponent = require("rtl-image-icon-component") /*id: 267266*/;
  var reactOptimizedImage = require("react-optimized-image") /*id: 351824*/;
  var asyncMessageOriginUtil = require("async-message-origin-util") /*id: 262112*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      isBlockFinished: t,
      isBroken: n,
      inView: o,
      blockContent: m
    } = e;
    let [v, f] = reactCoreLibraryReexport.useState(false);
    let {
      summary: h,
      results: g = []
    } = m || {};
    let {
      _backgroundImageSrc: _,
      _mainImageSrc: b
    } = reactCoreLibraryReexport.useMemo(() => {
      let n = g.find(e => e.is_blur_background) || g[0];
      let i = n == null ? undefined : n.full_size_url?.[0];
      let l = g.find(e => !e.is_blur_background) || g[1];
      return {
        _backgroundImageSrc: i,
        _mainImageSrc: l == null ? undefined : l.full_size_url?.[0]
      };
    }, [g]);
    let {
      latestFileUrls: [k, y]
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [_, b],
      enable: o
    });
    if (!t && n) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
          loading: !t,
          title: h,
          hoverable: false,
          prefixIcon: reactJsxRuntimeCoreReexport.jsx(rtlImageIconComponent.ImageRtlIcon, {
            className: "text-14"
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "image-wrap-cxmORk",
          style: k ? {
            backgroundImage: `url(${k})`
          } : {},
          children: reactJsxRuntimeCoreReexport.jsx(reactOptimizedImage.OptimizedImage, {
            className: "main-image-LiSG5a",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$J0Z%hST%0wNT$XW*s1-$d*WWIz%lpNamwwWTBjNWRWcFhO$EJqZ$Rsd1lsZEdibHB%T$doaWJ$Wnpa$mhP-0dON%1Xb*lSemxxW$hrNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
            }),
            layout: "raw",
            placeholder: "skeleton",
            loader: asyncMessageOriginUtil.getMessageOrigin,
            onClick: () => f(true)
          })
        }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$J0Z%hST%0wNT$XW*s1-$d*WWIz%lpNamwwWTBjNWRWcFhO$EJqZ$Rsd1lsZEdibHB%T$doaWJ$Wnpa$mhP-0dON%1Xb*lSemxxW$hrNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
          }),
          visible: v,
          onVisibleChange: f
        })]
      });
    }
  };
  let v = e => {
    let {
      message: n,
      contentBlock: i,
      inView: l
    } = e;
    let {
      is_finish: r
    } = i ?? {};
    let a = (i == null ? undefined : i.content_obj) ?? {};
    let s = messageContentTypeAndStatusChecker.vlk(n);
    return reactJsxRuntimeCoreReexport.jsx(m, {
      isBlockFinished: r,
      isBroken: s,
      inView: l,
      blockContent: a
    });
  };
  require.d(exports, {
    ThinkingImageItem: function () {
      return m;
    },
    MessageThinkingWrapper: function () {
      return v;
    }
  });
}