// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'DocLinkOpener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 972913
         */
module.exports = function (module, exports, require) {
  var o;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var linkServiceProvider = require("link-service-provider") /*id: 880405*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var urlRegexValidator = require("url-regex-validator") /*id: 959147*/;
  let u = (e, i, n, o) => urlRegexValidator.isVcsProtocol(e) ? e : i && o ? docUrlProcessingUtilities.normalizeUrl(e, false, n, o) : docUrlProcessingUtilities.normalizeUrl(e, false);
  let m = (e, i) => {
    if (!e.url) {
      return;
    }
    let {
      blockManager: n,
      isMobile: o,
      blockId: r,
      url: l
    } = e;
    let s = u(l, o, r, n);
    let m = docxConfigManager.docxConfigManager.isEmbedDocx ? docUrlProcessingUtilities.getDocxRecordType : docUrlProcessingUtilities.extractHashFromUrl;
    if (!e.isSupportAnchor || !e.event || !docUrlProcessingUtilities.handleAnchorNavigation(e.event, s, m)) {
      if (urlRegexValidator.isVcsProtocol(s)) {
        window.open(xssContentSanitizer.sanitizeUrl(s, null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9XMWFWMFl3WkZoS2JFd3llSEJp-lhOMllqTkNiR0pwT$hOaFZ6$nl%RmRv-kdKS$Fte*ph$F$3WXpKR2$Wb3pWbm89"
        }));
        return;
      }
      i(s);
    }
  };
  let v = dependencyInjectionContainer.Provide(linkServiceProvider.linkServiceProvider)(o = class {
    open(e) {
      m(e, e => {
        let {
          isMpWhitelistLink: i,
          showMPLinkDialog: n
        } = platformDocUtils.AcB;
        if (!i(e)) {
          n(e);
          return;
        }
        let o = function (e, i = "_blank", n = "") {
          let o = null;
          return window.open(xssContentSanitizer.sanitizeUrl(e, null, {
            logType: "js.window.location",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHB0Z%haa2$%RnJZakpOZEZwSFZuZ*pl$E-z$1hrNW$tTnR%WFpp$npsclp*ZDRiR041T1R*a1IyeHpZM2s1ZDJOdE9%QmFWMDR3$2xk%mRHSXpRbXhp-$R*ellW-zFja3h1$W5wWldFcH$aRmhO%FE9PQ"
          }), i, n);
        }(platformDocUtils.ERO(e), "_blank", "noopener");
        platformDocUtils.cu7();
        if (o) {
          o.opener = null;
        }
      });
    }
  }) || o;
  require.d(exports, {
    DocLinkOpener: function () {
      return v;
    }
  });
}