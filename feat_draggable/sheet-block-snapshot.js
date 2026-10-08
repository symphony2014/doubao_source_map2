// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'docxSheetPasteUtils'
// - Resolved require(88608) to 'docx-sheet-paste-utils'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'aP' to 'parseTokenId' (module 88608)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_draggable.bce4732d.js
         * chunkId: 87721
         * moduleId: 86363
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  function i(e, t, A) {
    let l = document.createElement("div");
    l.id = "img";
    let i = document.createElement("img");
    i.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmFTRXBv$2pKa2F*bHRlR3hNTTFZd1lWZDRla3d6$W5sWlZ6$jZ%RmRzZEZsWFpHeE1XRkoy$EZk%2RtSlRO$EJqTWtaN$dqTldlZz09"
    });
    if (t) {
      i.style.width = t;
      l.style.width = t;
    }
    if (A) {
      i.style.height = A;
      l.style.height = A;
    }
    l.appendChild(i);
    return l;
  }
  var o = "data:image/png;base64,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";
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  var s = [{
    blockType: docBlockTypeConstants.blockTypeConstants.SHEET,
    getViewSnapshot: function (e) {
      let {
        blockView: t
      } = e;
      if (!t.token || !t.bridge) {
        return i(o);
      }
      try {
        if (!t.props.recursionProps.fold.isShow(t.id)) {
          return i(o);
        }
        let {
          id: e
        } = docxSheetPasteUtils.parseTokenId(t.token);
        let A = t.bridge.currentScreenShot(e);
        let l = t.getCanvas();
        if (!l) {
          return i(o);
        }
        let {
          width: r,
          height: s
        } = l.getBoundingClientRect();
        return i(A, `${r}px`, `${s}px`);
      } catch (e) {
        return i(o);
      }
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}