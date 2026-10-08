// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'FilePreviewWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 378670
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var pdfPreviewStore = require("pdf-preview-store") /*id: 745227*/;
  var getFileUrlsCache = require("get-file-urls-cache") /*id: 109992*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var m = {
    "preview-wrapper": "preview-wrapper-DVN_yZ",
    sketlon: "sketlon-JZa9OM",
    image: "image-fPnkcA"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e) {
    let {
      file: o,
      nodeInfoMap: f
    } = e;
    let [v, g] = reactCoreLibraryReexport.useState("");
    let {
      name: y,
      type: b,
      id: w
    } = o;
    let {
      updatePdfPreview: x,
      pdfPreviewCoversMap: k
    } = pdfPreviewStore.pdfPreviewStore(e => ({
      updatePdfPreview: e.updatePdfPreview,
      pdfPreviewCoversMap: e.pdfPreviewMap
    }), deepEqualityUtil_1.isDeepEqual);
    let S = f[w];
    if (!S) {
      return null;
    }
    let E = b === fileEntityTypeConstants.fileEntityTypes.File;
    let j = b === fileEntityTypeConstants.fileEntityTypes.Image;
    let N = E && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(y)) === "PDF";
    let T = k[S.key ?? ""]?.imageUrl || v;
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      if (!T) {
        e = setTimeout(async () => {
          x(S.key, {
            fileType: N ? "PDF" : "Document"
          });
          if (j) {
            let e = await getFileUrlsCache.getFileUrls([S.key], "image");
            if (e == null ? undefined : e[(S == null ? undefined : S.key) || ""]) {
              g(e[(S == null ? undefined : S.key) || ""]);
            }
          }
        }, 100);
      }
      return () => {
        if (e) {
          clearTimeout(e);
        }
      };
    }, [T, j]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: m["preview-wrapper"],
      children: T ? reactJsxRuntimeCoreReexport.jsx("img", {
        className: m.image,
        src: xssContentSanitizer.sanitizeUrl(T, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscHRiSE5h$Xp*M1kyM$dNb%Z-$mpOT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$20xc2MxcFRNW*Rq-lZZe$lWZFdNMHd5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
        })
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: l([m.sketlon, "flex items-center justify-center h-240"]),
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
      })
    });
  }
  require.d(exports, {
    FilePreviewWrapper: function () {
      return f;
    }
  });
}