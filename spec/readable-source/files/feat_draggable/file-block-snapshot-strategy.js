// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'i' to 'viewTypeConstants'
// - Resolved require(676077) to 'view-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'bW' to 'viewTypes' (module 676077)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_draggable.bce4732d.js
         * chunkId: 87721
         * moduleId: 909199
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  let o = {
    blockType: docBlockTypeConstants.blockTypeConstants.FILE,
    getViewSnapshot: function (e) {
      let {
        blockView: t
      } = e;
      if (t.props.viewType === viewTypeConstants.viewTypes.Card) {
        return t.hostElement.querySelector(".file-card");
      }
      if (t.props.viewType === viewTypeConstants.viewTypes.Preview && t.hostElement.querySelector("iframe")) {
        let e = t.hostElement.cloneNode(true);
        let A = e.querySelector("[data-sel=\"box-preview-container\"]");
        let r = e.querySelector(".drive-cover-preview");
        let i = e.querySelector(".drive-cover-preview img");
        if (i && r && A) {
          let o = t.hostElement.getBoundingClientRect();
          e.style.width = `${o.width}px`;
          e.style.height = `${o.height}px`;
          A.remove();
          r.style.display = "block";
          i.src = xssContentSanitizer.sanitizeUrl(i.dataset.src, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJXRlhlR3hNTWxwc1dWaFNN$050$lha-$NFc*9Xakpr-%Zsd*$HeE1NbXgx$2tk$05FeH$$bnBa$0$wd$p*aE5Q%T09"
          });
          return e;
        }
      }
      return t.hostElement;
    }
  };
  exports.default = [o];
  require.r(exports);
}