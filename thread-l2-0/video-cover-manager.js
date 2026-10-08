// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'getVideoPlayInfo'
// - Renamed export 'W' to 'useVideoCoverMgr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 998573
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var videoPlayInfoService = require("video-play-info-service") /*id: 823464*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let s = `capture-video-thumbnail-canvas${Date.now()}`;
  let c = () => {
    let e = document.getElementById(s);
    if (!e) {
      (e = document.createElement("canvas")).setAttribute("id", s);
    }
    return e;
  };
  let d = e => new Promise((t, n) => {
    let i = c();
    if (!i) {
      return n(Error("Failed to get canvas"));
    }
    let r = i.getContext("2d");
    if (!r) {
      return n(Error("Failed to get context"));
    }
    let o = document.createElement("video");
    o.setAttribute("crossorigin", "anonymous");
    o.preload = "metadata";
    o.addEventListener("loadeddata", () => {
      o.currentTime = 0.1;
    });
    o.addEventListener("seeked", () => {
      try {
        i.width = o.videoWidth;
        i.height = o.videoHeight;
        r.drawImage(o, 0, 0, i.width, i.height);
        let e = i.toDataURL("image/jpeg", 0.8);
        o.pause();
        o.removeAttribute("src");
        o.load();
        t(e);
      } catch (e) {
        return n(Error(`Failed to capture thumbnail: ${e.message}`));
      }
    });
    o.addEventListener("error", e => n(e));
    o.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$J0-kd0-$Z6aDBXbTFX-%dSS$Zub*FXRTEyWXpOS2Frd3pWakJo$jNoNlRETmFjRnBI$m5aTWJsSjZX$mhL-m1SW$R%MD0"
    });
    o.load();
    setTimeout(() => {
      n(Error("timeout 60s"));
    }, 30000);
  });
  let u = {};
  let _ = e => {
    var i;
    var r;
    if (!e) {
      return;
    }
    if (u[e]?.timestamp && Date.now() - Number(u[e]?.timestamp) < 259200000) {
      return u[e]?.promise;
    }
    let s = Date.now();
    u[e] = {
      promise: videoPlayInfoService.getVideoPlayInfo(e),
      timestamp: s
    };
    if ((r = u[e]) !== null && r !== undefined && (i = r.promise) !== null && i !== undefined) {
      i.catch(() => {
        if (u[e]?.timestamp === s) {
          u[e] = undefined;
        }
      });
    }
    return u[e]?.promise;
  };
  let m = {};
  let v = e => {
    var t;
    if (e) {
      m[e] ||= (t = _(e)) === null || t === undefined ? undefined : t.then(e => {
        let t = e.data.main || e.data.backup;
        if (!t) {
          throw Error("getVideoCoverById: videoUrl is undefined");
        }
        return d(t);
      }).catch(() => {
        m[e] = undefined;
      });
      return m[e];
    } else {
      return undefined;
    }
  };
  let f = () => {
    let [e, t] = reactCoreLibraryReexport.useState({});
    let [n, a] = reactCoreLibraryReexport.useState({});
    let l = reactFunctionMemoHook.useMemoizedCallback(async n => {
      var i;
      var r;
      var a;
      var l;
      if (((r = e[n]) === null || r === undefined || (i = r.data) === null || i === undefined || !i.main) && ((l = e[n]) === null || l === undefined || (a = l.data) === null || a === undefined || !a.backup)) {
        try {
          let e = await _(n);
          if (e) {
            t(t => {
              let o = t[n];
              if ((o == null ? undefined : o.data?.main) || (o == null ? undefined : o.data?.backup)) {
                return t;
              } else {
                return {
                  ...t,
                  [n]: e
                };
              }
            });
          }
        } catch (e) {
          loggerServiceCore.defaultLogger.console.error({
            eventName: "useVideoCoverManager",
            message: "updateVideoInfo_error",
            error: e
          });
        }
      }
    });
    let s = reactFunctionMemoHook.useMemoizedCallback(async (e, t) => {
      if (t) {
        a(n => n[e] === t ? n : {
          ...n,
          [e]: t
        });
        return;
      }
      if (!n[e]) {
        try {
          let t = await v(e);
          if (t) {
            a(n => n[e] === t ? n : {
              ...n,
              [e]: t
            });
          }
        } catch (e) {
          loggerServiceCore.defaultLogger.console.error({
            eventName: "useVideoCoverManager",
            message: "updateVideoCover_error",
            error: e
          });
        }
      }
    });
    return {
      videoInfos: e,
      videoCovers: n,
      updateVideoInfo: l,
      updateVideoCover: s
    };
  };
  require.d(exports, {
    getVideoPlayInfo: function () {
      return _;
    },
    useVideoCoverMgr: function () {
      return f;
    }
  });
}