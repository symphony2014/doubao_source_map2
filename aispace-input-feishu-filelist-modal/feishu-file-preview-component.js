// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'FeishuFilePreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 793850
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var feishuSpaceSdkManager = require("feishu-space-sdk-manager") /*id: 858515*/;
  var u = {
    "preview-wrapper": "preview-wrapper-seWZKG",
    sketlon: "sketlon-GPIDEF",
    image: "image-vuqFeq",
    "error-text": "error-text-CzdgKJ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e) {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let [n, r] = reactCoreLibraryReexport.useState();
    let [m, h] = reactCoreLibraryReexport.useState(false);
    let [f, v] = reactCoreLibraryReexport.useState(false);
    let {
      nodeInfo: _
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        try {
          var e;
          let n = await ((e = feishuSpaceSdkManager.FeishuSpaceManager.getInstance()) === null || e === undefined ? undefined : e.getFeishuSpaceSDK());
          let {
            thumbnailExtra: i,
            key: a,
            nodeType: o
          } = _;
          let l = await (n == null ? undefined : n.fetchFilePreviewSrc({
            fileToken: a,
            fileType: fileEntityTypeMapper.convertNode(o),
            thumbnail: (i == null ? undefined : i.url) && (i == null ? undefined : i.secret) ? {
              url: i.url,
              secret: i.secret
            } : undefined,
            clientHeight: 1200,
            clientWidth: 1200
          }));
          if (l == null ? undefined : l.data) {
            r(l.data.blobUrl);
          } else {
            h(true);
          }
          v(!!(l == null ? undefined : l.data?.isIcon));
        } catch {
          h(true);
        }
      })();
    }, []);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (n) {
        URL.revokeObjectURL(n);
      }
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: u["preview-wrapper"],
      children: n || m ? m ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-column flex h-240 items-center justify-center",
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl("data:image/png;base64,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", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscHRiSE5h$Xp*M1kyM$dNb%Z-$mpOT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$20x$2NHTXlhREZN$jFwd1lrZFZkR05J%214a2JXeHNaS*s1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
          }),
          className: "mb-8 h-51 w-77"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: u["error-text"],
          children: t("drive_tooltip_previewNA")
        })]
      }) : reactJsxRuntimeCoreReexport.jsx("img", {
        className: o(u.image, f ? "h-74 max-h-74 w-74 max-w-74" : ""),
        src: xssContentSanitizer.sanitizeUrl(n, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscHRiSE5h$Xp*M1kyM$dNb%Z-$mpOT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$20x$2NHTXlhREZN$jFwd1lrZFZkR05J%214a2JXeHNaS*s1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
        })
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: o([u.sketlon, "flex items-center justify-center h-240"]),
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
      })
    });
  }
  require.d(exports, {
    FeishuFilePreview: function () {
      return m;
    }
  });
}