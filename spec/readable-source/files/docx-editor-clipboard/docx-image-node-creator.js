// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'createImageNodeWithFile'
// - Renamed export 'P' to 'createDefaultImageNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 41944
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var docxImageUploadService = require("docx-image-upload-service") /*id: 691820*/;
  var docxImageUtils = require("docx-image-utils") /*id: 164286*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  async function s(e, o = {}) {
    let {
      align: r = docBlockTypeConstants.alignmentConstants.CENTER,
      payload: s = {}
    } = o;
    let c = await docxImageUploadService.DocxImageUploadService.getImageSize(e);
    let d = {
      src: xssContentSanitizer.sanitizeUrl("", null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$XpreFpFZHNjMk41T1dwamJWWm9aRWRWZEd*WE1Xa*FNbF-wWTBkN*F*a3lWbTlpTW5ocldsaEpkR015TldoalNFNXZZak5SZFdSS$Rta*pi$1F4WTNjO$BRPT0"
      }),
      token: "",
      mimeType: e.type,
      size: e.size,
      name: e.name,
      scale: 1,
      width: c.width,
      height: c.height,
      caption: s == null ? undefined : s.caption
    };
    return docxImageUtils.createImageNode({
      image: d,
      align: r,
      ...s
    });
  }
  function c(e = {}, o) {
    let {
      align: r = docBlockTypeConstants.alignmentConstants.CENTER
    } = e;
    let i = {
      src: xssContentSanitizer.sanitizeUrl("", null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$XpreFpFZHNjMk41T1dwamJWWm9aRWRWZEd*WE1Xa*FNbF-wWTBkN*F*a3lWbTlpTW5ocldsaEpkR015TldoalNFNXZZak5SZFdSS$Rta*pi$1F4WTNjO$BRPT0"
      }),
      token: "",
      mimeType: "",
      name: "",
      size: 0,
      scale: 1,
      width: 240,
      height: 240
    };
    return docxImageUtils.createImageNode({
      image: {
        ...i,
        ...o
      },
      align: r
    });
  }
  require.d(exports, {
    createImageNodeWithFile: function () {
      return s;
    },
    createDefaultImageNode: function () {
      return c;
    }
  });
}