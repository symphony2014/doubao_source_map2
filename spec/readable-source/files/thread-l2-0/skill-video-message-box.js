// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'SkillVideoMessageBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 27511
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var imageBoxGrid = require("image-box-grid") /*id: 692304*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillMessageParamFormat = require("skill-message-param-format") /*id: 819707*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var videoPlayerClass = require("video-player-class") /*id: 578845*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var videoThinkingWrapper = require("video-thinking-wrapper") /*id: 476422*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var imageConfigConstants_1 = require("image-config-constants_1") /*id: 620790*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let R = e => {
    let {
      width: t = imageConfigConstants_1.defaultHeight,
      height: n = imageConfigConstants_1.defaultWidth,
      text: i
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let o = t / n;
    if (isNaN(o)) {
      o = 1;
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "fulfill-video-error-box-foN1gc",
      style: {
        paddingBottom: `${1 / o * 100}%`
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "inner-_g9lBl",
        children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
          className: "p-4 text-24"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "s-font-xs-strong",
          children: i || r("skill_video_generation_failed_info")
        })]
      })
    });
  };
  var videoHoverButtonGroup = require("video-hover-button-group") /*id: 809223*/;
  var playIconWrapper = require("play-icon-wrapper") /*id: 277279*/;
  var videoCoverManager = require("video-cover-manager") /*id: 998573*/;
  var P = {
    "block-video": "block-video-MzfWVN",
    cover: "cover-u1rIsU",
    "cover-hidden": "cover-hidden-fCISeD",
    "video-player-wrapper": "video-player-wrapper-IZ7Zoq",
    "video-visible": "video-visible-quXeLp",
    "video-player": "video-player-NmhH16"
  };
  let I = e => {
    let {
      video: n,
      onDownload: i,
      onClick: r,
      onMouseEnter: o,
      onRenderVideoCard: a,
      onError: l
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let d = reactCoreLibraryReexport.useRef(null);
    let u = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(false);
    let g = reactCoreLibraryReexport.useRef(false);
    let [S, C] = reactCoreLibraryReexport.useState(false);
    let [R, I] = reactCoreLibraryReexport.useState(false);
    let [$, M] = reactCoreLibraryReexport.useState("");
    let {
      videoCovers: A,
      updateVideoCover: F
    } = videoCoverManager.useVideoCoverMgr();
    let O = n.thumbCoverUrl || n.vid && A[n.vid] || "";
    let W = useDebouncedValueHook.useDebouncedValue(useElementSizeHook_2.useElementSize(d)?.width, {
      wait: 100,
      leading: false,
      trailing: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = u.current) !== null && e !== undefined) {
        e.resize();
      }
    }, [W]);
    reactCoreLibraryReexport.useEffect(() => {
      if (d.current && S && $) {
        if (!u.current) {
          var e;
          var t;
          u.current = new videoPlayerClass.VideoPlayer({
            el: d.current,
            url: $,
            poster: O,
            width: "100%",
            height: "100%",
            lang: i18nextLanguageGetter.getCurrentLanguage(),
            autoplay: false,
            autoplayMuted: true,
            loop: true,
            closeVideoClick: true,
            closeVideoDblclick: true,
            ignores: ["playbackRate", "pip", "mini", "cssFullscreen", "mobile"],
            controls: {
              autoHide: false,
              mode: "bottom"
            },
            start: {
              disableAnimate: true
            },
            keyboard: {
              disableBodyTrigger: true
            }
          });
          if ((e = u.current) !== null && e !== undefined) {
            e.on(videoPlayerEventConstants.FULLSCREEN_CHANGE, e => {
              g.current = e;
              if (e) {
                Z();
              } else {
                var t;
                if ((t = u.current) !== null && t !== undefined) {
                  t.pause();
                }
              }
            });
          }
          if ((t = u.current) !== null && t !== undefined) {
            t.on(videoPlayerEventConstants.COMPLETE, () => {
              Z();
            });
          }
          return;
        }
        if (u.current.url !== $) {
          u.current.switchURL($);
          return;
        }
      }
    }, [S, $]);
    reactCoreLibraryReexport.useEffect(() => {
      if (a != null) {
        a();
      }
      return () => {
        var e;
        if ((e = u.current) !== null && e !== undefined) {
          e.destroy();
        }
        u.current = null;
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!O && n.vid) {
        F(n.vid, undefined);
        return;
      }
      if (u.current && O && u.current.poster !== O) {
        u.current.setConfig({
          poster: O
        });
      }
    }, [O, n.vid]);
    let Z = reactFunctionMemoHook.useMemoizedCallback(async () => {
      if (p.current) {
        try {
          var e;
          await ((e = u.current) === null || e === undefined ? undefined : e.play().then(() => {
            I(true);
          }));
        } catch (e) {
          if (["NotAllowedError", "AbortError"].includes(e.name)) {
            if (l != null) {
              l({
                code: -1,
                message: "custom_error_canvas_play_failed",
                originError: e
              });
            }
          }
        }
      }
    });
    let D = reactFunctionMemoHook.useMemoizedCallback(async () => {
      p.current = true;
      C(true);
      if (!g.current && o != null) {
        o();
      }
      if (!$ && n.vid) {
        let e = await videoCoverManager.getVideoPlayInfo(n.vid);
        if (!e) {
          return;
        }
        let t = e.data.main || e.data.backup;
        if (t) {
          M(t);
        }
        return;
      }
      if (!g.current) {
        await Z();
      }
    });
    let L = reactFunctionMemoHook.useMemoizedCallback(() => {
      var e;
      p.current = false;
      if (!g.current) {
        if ((e = u.current) !== null && e !== undefined) {
          e.pause();
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: h(P["block-video"], videoHoverButtonGroup.containerClassName),
      style: {
        paddingTop: `${n.height / n.width * 100}%`
      },
      onClick: e => r == null ? undefined : r(e, u.current),
      onPointerEnter: D,
      onPointerLeave: L,
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(O, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$J0-kd0-$Z6aDBXbTFX-%dSS$Zub*FXRTEyWXpOS2Frd3l%blpp$0$KMlltM$dk$1JJ$FhaWmJ-aDJX$Ep6ZEZre%9-$mtSM$oxWk$NeE1tRlh$bXhpZ$R*d$kyMD$N$05ET1dwa%1qRjNZakkx-kdKd$$ucE1Na3B6WWpKT2NreFh%blpp-mxKc1ltN$JkR1J0-kd0-$Z6aDBZM*Q0-%dWWFZubE1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        className: h(P.cover, R && P["cover-hidden"])
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(P["video-player-wrapper"], R && P["video-visible"]),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: d,
          className: P["video-player"]
        })
      }), reactJsxRuntimeCoreReexport.jsx(playIconWrapper.PlayIconWrapper, {
        gap: 6,
        size: 16,
        zIndex: 99
      }), reactJsxRuntimeCoreReexport.jsx(videoHoverButtonGroup.VideoHoverGroup, {
        buttonList: i && $ ? [{
          type: "icon",
          key: "download",
          icon: rtlExpandArrowsIcon.ExpandArrowsIcon,
          title: c("video_canvas_btn_download"),
          onClick: i
        }] : []
      })]
    });
  };
  let $ = e => {
    let {
      onRenderErrorTip: t,
      ...n
    } = e;
    let {
      video: i
    } = n;
    reactCoreLibraryReexport.useEffect(() => {
      if (i.isError) {
        if (t != null) {
          t();
        }
      }
    }, [i.isError]);
    if (i.isError) {
      return reactJsxRuntimeCoreReexport.jsx(R, {
        width: i.width,
        height: i.height,
        text: i.errorText
      });
    } else if (i.isLoading) {
      return reactJsxRuntimeCoreReexport.jsx(videoThinkingWrapper.VideoThinkingView, {
        width: i.width,
        height: i.height,
        fillMode: "full"
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(I, {
        ...n
      });
    }
  };
  let M = e => {
    let {
      message: t,
      downloadName: n,
      videoList: _,
      onClickVideo: m
    } = e;
    let v = useMediaQueryHook.mediaQueryHook({
      maxWidth: 599
    });
    let {
      width: f = imageConfigConstants_1.defaultHeight,
      height: p = imageConfigConstants_1.defaultWidth
    } = (_ == null ? undefined : _[0]) || {};
    let h = reactFunctionMemoHook.useMemoizedCallback(async (e, i) => {
      if (!i.vid) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      let s = await videoCoverManager.getVideoPlayInfo(i.vid);
      let d = (s == null ? undefined : s.data?.main) || (s == null ? undefined : s.data?.backup);
      if (!d) {
        return;
      }
      let _ = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      teaAnalyticsEventTracker.trackEvent("download", {
        ...skillMessageParamFormat.formatSkillParams(t, _),
        content_type: "video",
        click_from: "video_overview"
      });
      fileDownloadUtilities.downloadVideoAsMp4(d, n || "untitled");
    });
    let g = reactFunctionMemoHook.useMemoizedCallback(async () => {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      teaAnalyticsEventTracker.trackEvent("video_generation_result_hover", skillMessageParamFormat.formatSkillParams(t, e));
    });
    let b = reactFunctionMemoHook.useMemoizedCallback(async e => {
      let n = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      teaAnalyticsEventTracker.trackEvent("video_generation_result_show", {
        ...skillMessageParamFormat.formatSkillParams(t, n),
        status: 0,
        error_code: e
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "video_generation_result_show",
        meta: {
          scene: "pc-creation",
          status: "error",
          ...throttledPathFilterStringify.throttledPathStr(t, ["conversation_id", "message_id"])
        }
      });
    });
    let y = reactFunctionMemoHook.useMemoizedCallback(async () => {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      teaAnalyticsEventTracker.trackEvent("video_generation_result_show", {
        ...skillMessageParamFormat.formatSkillParams(t, e),
        status: 1
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "video_generation_result_show",
        meta: {
          scene: "pc-creation",
          status: "success",
          ...throttledPathFilterStringify.throttledPathStr(t, ["conversation_id", "message_id"])
        }
      });
    });
    if (_ == null ? undefined : _.length) {
      return reactJsxRuntimeCoreReexport.jsx(imageBoxGrid.ImageBoxGrid, {
        imgList: _.map(e => ({
          url: e.thumbCoverUrl || "",
          status: imageBoxGrid.gridStatus.Success
        })),
        ratio: v ? 1.1 : f / p,
        itemClassName: "",
        width: f,
        height: p,
        children: (e, t) => reactJsxRuntimeCoreReexport.jsx($, {
          video: _[t],
          onClick: (e, n) => m == null ? undefined : m(e, _[t], n),
          onMouseEnter: g,
          onDownload: e => h(e, _[t]),
          onRenderErrorTip: b,
          onRenderVideoCard: y
        }, t)
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SkillVideoMessageBox: function () {
      return M;
    }
  });
}