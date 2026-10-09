// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'n' to 'viewTypeConstants'
// - Resolved require(676077) to 'view-type-constants'
// - Renamed variable 's' to 'docxIndexConstants'
// - Resolved require(124597) to 'docx-index-constants'
// - Updated imported property 'R' to 'iframeEventNames' (module 124597)
// - Updated imported property 'x' to 'docNodeTypes' (module 124597)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'bW' to 'viewTypes' (module 676077)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_print.4e882bbd.js
         * chunkId: 99126
         * moduleId: 194974
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxIndexConstants = require("docx-index-constants") /*id: 124597*/;
  let l = [];
  let a = (e, t) => {
    let i = [];
    let o = e.parentNode;
    while (o && o !== document) {
      if (o.classList.contains(t)) {
        i.push(o);
      }
      o = o.parentNode;
    }
    return i;
  };
  let d = [{
    hookName: docxIndexConstants.iframeEventNames.onIframeDomCopied,
    hookCallback: function (e) {
      let {
        contentClone: t
      } = e;
      if (l.length) {
        l.forEach(e => {
          e.toggleRenderHiddenCardDom(false);
        });
      }
      l = [];
      let i = t.querySelectorAll(".preview-content iframe");
      Array.prototype.forEach.call(i, e => {
        let t = a(e, "box-preview-wrap");
        e.parentNode.remove();
        for (let e = 0; e < t.length; e++) {
          t[e].querySelectorAll(".drive-cover-preview").forEach(e => {
            e.style.display = "block";
            let t = e.querySelector("img");
            if (!t) {
              return;
            }
            t.crossOrigin = "use-credentials";
            let i = () => {
              t._complete = true;
            };
            let r = () => {
              t._complete = true;
              t._hasError = true;
            };
            t.addEventListener("load", i);
            t.addEventListener("error", r);
            let n = t.getAttribute("data-src");
            if (n) {
              t.setAttribute("src", xssContentSanitizer.sanitizeUrl(n, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJXRlhlR3hNTWxwc1dWaFNN$050$lhaalNFcHdZbT$SZ*1*WE5Xd*FXR2QxWk$oT2FHTnRaREZqZHowOQ"
              }));
            }
          });
        }
      });
    },
    options: {
      priority: docxIndexConstants.docNodeTypes.FILE
    }
  }];
  let h = {
    blockSettingList: [{
      blockType: docBlockTypeConstants.blockTypeConstants.FILE,
      onPrintReady: function (e) {
        let t = e.blockView;
        if (t.getViewType() === viewTypeConstants.viewTypes.Preview) {
          t.toggleRenderHiddenCardDom(true);
          l.push(t);
        }
      }
    }],
    hookConfigList: d
  };
  exports.default = [h];
  require.r(exports);
}