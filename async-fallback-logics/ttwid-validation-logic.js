// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'o' to 'uniParamsManager'
// - Resolved require(375503) to 'uni-params-manager'
// - Renamed variable 'l' to 'doubaoConfigConstants_1'
// - Resolved require(234080) to 'doubao-config-constants_1'
// - Renamed variable 'd' to 'localeCnConstant'
// - Resolved require(224255) to 'locale-cn-constant'
// - Renamed variable 'u' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Updated imported property 'FP' to 'flowCdnUrl' (module 234080)
// - Updated imported property 'S6' to 'oceanFlowCdnUrl' (module 234080)
// - Updated imported property 'KM' to 'defaultLocale' (module 224255)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'p' to 'uniParamsManager' (module 375503)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-fallback-logics.6022a1bb.js
         * chunkId: 50111
         * moduleId: 748905
         */
module.exports = function (module, exports, require) {
  var n;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  let a = {
    unionHost: "",
    union: false
  };
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  (n = {}).cn = "cn";
  n.sg = "sg";
  n.va = "va";
  let c = n;
  if (!Object.values(c).includes("cn")) {
    c.cn;
  }
  let s = {
    cn: `${doubaoConfigConstants_1.flowCdnUrl}/doubao/web/ttwid/pure.umd.production.new.js`,
    sg: `${doubaoConfigConstants_1.oceanFlowCdnUrl}/ttwid/pure.umd.production.js`,
    va: `${doubaoConfigConstants_1.oceanFlowCdnUrl}/ttwid/pure.umd.production.js`
  };
  var localeCnConstant = require("locale-cn-constant") /*id: 224255*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let $ = () => s[localeCnConstant.defaultLocale || 0];
  let m = async () => {
    let e = $();
    if (!document.querySelector(`script[src*="${e}"]`)) {
      await new Promise((r, t) => {
        let n = document.createElement("script");
        n.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1cxa$J6a3p%RmRP-jFsW$$-WmpNMHBx$ERKc2RXRll$WFpa$0$wc$l$TT$N$1JI-khOam$%bHpZakpH-TB4W$Rtc*pi$3gzWk$NM%1HTXlSbmxhTTFaNg"
        });
        n.async = true;
        n.onload = () => {
          n.onload = null;
          n.onerror = null;
          r();
        };
        n.onerror = () => {
          n.onload = null;
          n.onerror = null;
          t(Error(`Failed to load script: ${e}`));
        };
        document.head.appendChild(n);
      });
    }
    return objectPathGetDefault.getObjectPathDefault(window, "TTWidInstance.TtWid");
  };
  let p = async () => {
    if (typeof window == "undefined") {
      return;
    }
    let e = await m();
    if (!e) {
      return;
    }
    let r = new e({
      aid: uniParamsManager.uniParamsManager.getParam("aid"),
      service: "".replace(/^https?:\/\//, "") || location.hostname,
      host: "",
      timeout: 6000,
      ...a
    });
    if (![1003, 1002].includes((await r.checkWebId()).status_code)) {
      return true;
    }
    await r.registerOpenWebId();
  };
  require.r(exports);
  require.d(exports, {
    checkTtWid: function () {
      return p;
    }
  });
}