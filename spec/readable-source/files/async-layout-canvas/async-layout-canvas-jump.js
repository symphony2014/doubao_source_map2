// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useCanvasJump'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 959279
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var codingSkillCanvasEventTracker_1 = require("coding-skill-canvas-event-tracker_1") /*id: 588262*/;
  let d = () => {
    let e = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      openLoginModal: t
    } = chatLoginModalManager.loginModalManager();
    let {
      trackMarscodeClickEvent: a
    } = codingSkillCanvasEventTracker_1.useCanvasEventTracker();
    return {
      handleJump: reactCoreLibraryReexport.useCallback(r => {
        a();
        if (!e) {
          return t({
            trackInfo: {
              source: trackingEventConstants.trackingEvents.MARSCODE
            }
          });
        }
        let o = new URL("https://www.trae.com.cn/sem?utm_source=doubao");
        if (r === "modelGen") {
          o.searchParams.set("utm_medium", "chat_modelgen_new");
        } else if (r === "codeArtifacts") {
          o.searchParams.set("utm_medium", "chat_artifacts_new");
        } else if (r === businessLayoutConstants.ItemType.Link) {
          o.searchParams.set("utm_medium", "chat_repo_new");
        } else if (r === businessLayoutConstants.ItemType.Directory) {
          o.searchParams.set("utm_medium", "chat_folder_new");
        } else if (r === businessLayoutConstants.ItemType.File) {
          o.searchParams.set("utm_medium", "chat_file_new");
        }
        window.open(xssContentSanitizer.sanitizeUrl(o.toString(), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$iMkl5T1hKam$%bHFX$mMxTWxsW$R-WmtXRT$z$EZo%2$WbFhWWFJo-mxaMFkwTTFNR015%m5s-%0xWj-"
        }));
      }, [e])
    };
  };
  require.d(exports, {
    useCanvasJump: function () {
      return d;
    }
  });
}