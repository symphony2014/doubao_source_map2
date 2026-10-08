// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$V' to 'MusicTemplateList'
// - Renamed export 'ZP' to 'MusicTemplateTabs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 436446
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var useAudioPlayerHook_1 = require("use-audio-player-hook_1") /*id: 75716*/;
  var videoPlayerModuleLoader = require("video-player-module-loader") /*id: 914809*/;
  var scrollableTabsComponent = require("scrollable-tabs-component") /*id: 608549*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var playButtonComponent = require("play-button-component") /*id: 959765*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var rtlSearchIcon = require("rtl-search-icon") /*id: 717963*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let A = (e, t) => `${e}-${t}`;
  let x = async e => {
    if (!e) {
      return "";
    }
    try {
      let r = await apiServicesCollection.MessageApiService.GetBigMusicVideoInfo({
        video_id: e
      });
      if (r == null) {
        return undefined;
      } else {
        return r.data?.url;
      }
    } catch (e) {
      return "";
    }
  };
  let j = e => {
    switch (true) {
      case e > 600:
        return "bg";
      case e > 400:
        return "md";
      default:
        return "sm";
    }
  };
  var musicSkillGuidanceImg = require("music-skill-guidance-img") /*id: 580129*/;
  var musicSkillGuidanceImg_1 = require("music-skill-guidance-img_1") /*id: 959747*/;
  var C = {
    "scroll-tabs-hidden": "scroll-tabs-hidden-SJ4XvY",
    scrollTabsHidden: "scroll-tabs-hidden-SJ4XvY",
    "tab-pane": "tab-pane-v97nDi",
    tabPane: "tab-pane-v97nDi",
    "template-list": "template-list-ID9B5N",
    templateList: "template-list-ID9B5N",
    "template-item": "template-item-Dtyo5R",
    templateItem: "template-item-Dtyo5R",
    "water-mark": "water-mark-nNUjL3",
    waterMark: "water-mark-nNUjL3",
    cover: "cover-XOtiGR",
    "cover-img": "cover-img-ejHrMA",
    coverImg: "cover-img-ejHrMA",
    "cover-btn": "cover-btn-KuVcAX",
    coverBtn: "cover-btn-KuVcAX",
    "item-title": "item-title-eCA6nW",
    itemTitle: "item-title-eCA6nW",
    "music-feature": "music-feature-j2lFso",
    musicFeature: "music-feature-j2lFso"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = e => {
    let {
      templates: t,
      itemHeight: r,
      itemWidth: n,
      trackEventForClick: o
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState("");
    let [d, f] = reactCoreLibraryReexport.useState(getOwnKeys.getOwnKeys(t)[0]);
    let {
      playerState: v,
      duration: m,
      currentTime: y,
      contentLoading: h,
      onTriggerPause: g,
      onTriggerPlay: w,
      onUpdateCurrentTime: b,
      onUpdatePlayerInstance: k
    } = useAudioPlayerHook_1.useAudioPlayer({});
    let R = async (e, t) => {
      let r = A(d, t);
      let n = a === r;
      let l = n && v === playButtonComponent.PlaybackStatus.Playing;
      let i = n && v === playButtonComponent.PlaybackStatus.Paused;
      if (l) {
        g();
        return;
      }
      if (B) {
        k(B);
      }
      if (o != null) {
        o(e, "audio_play");
      }
      if (i) {
        w();
        return;
      }
      s(r);
      g();
      b(0);
      let c = e.play_url || (await x(e.video_id));
      if (c) {
        w({
          url: c,
          startTime: 0
        });
      }
    };
    let j = getOwnKeys.getOwnKeys(t).map(e => ({
      title: e,
      data: t == null ? undefined : t[e].map(e => ({
        ...e,
        cover: e.cover || "",
        width: n,
        height: r
      }))
    }));
    reactCoreLibraryReexport.useEffect(() => {
      videoPlayerModuleLoader.loadVideoPlayer().then(e => {
        B = new e.BaseXgPlayer({
          el: document.createElement("div"),
          mediaType: "audio",
          preset: ["default"],
          music: {
            abCycle: {
              loop: false
            }
          }
        });
      });
      let e = () => {
        var e;
        if (B != null && (e = B.destroy) !== null && e !== undefined) {
          e.call(B);
        }
      };
      return () => {
        e();
      };
    }, []);
    return {
      tabs: j,
      renderPlayButton: (e, t) => {
        if (!e) {
          return null;
        }
        let r = a === A(d, t);
        let n = playButtonComponent.PlaybackStatus.Paused;
        switch (true) {
          case !r:
            n = playButtonComponent.PlaybackStatus.Paused;
            break;
          case h:
            n = playButtonComponent.PlaybackStatus.Loading;
            break;
          case v === playButtonComponent.PlaybackStatus.Playing:
            n = playButtonComponent.PlaybackStatus.Playing;
        }
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx(playButtonComponent.PlayButton, {
            className: C["play-button"],
            btnClassName: C["play-button-icon"],
            progressPercent: r && r && m ? y / m * 100 : 0,
            status: n,
            onClick: () => R(e, t)
          })
        });
      },
      handlePlay: R,
      setCurrentTab: f,
      onTriggerPause: g
    };
  };
  let N = e => {
    let {
      item: o,
      idx: c,
      className: u,
      titleClassName: s,
      renderPlayButton: d,
      onUseTemplate: p,
      trackEventForClick: y,
      trackEventForShow: h
    } = e;
    let g = i18nextLanguageGetter.getCurrentLanguage();
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let R = reactCoreLibraryReexport.useRef(null);
    let [A] = useIntersectionObserver.useIntersection(R, {
      threshold: 0.5
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (A) {
        if (h != null) {
          h(o);
        }
      }
    }, [A]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "landing_music_creation_template_item",
      "data-genre": o.genre?.show_name || "",
      className: a(C["template-item"], u),
      ref: R,
      style: {
        backgroundColor: (o == null ? undefined : o.cover_main_color) || "#20898e"
      },
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: C.cover,
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(o.cover, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmlXRlo2W$ZkTmR*a3pTbXha$0ZKd1lqSTBkRmt5-%doa1F6RndZbT$DT$dSRE9%QmFWek-zWWtkR01*cFRNWE5o$0%0d1RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
          }),
          className: C["cover-img"]
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          "data-testid": "landing_music_creation_template_item_apply_btn",
          className: C["cover-btn"],
          icon: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon.SearchRtlIcon, {}),
          onClick: () => {
            p(o);
            if (y != null) {
              y(o, "use_this_case");
            }
          },
          children: b("make_the_template_style")
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: C["item-title"],
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "grow",
          children: [reactJsxRuntimeCoreReexport.jsx("p", {
            className: a("font-medium", s),
            children: o.title
          }), reactJsxRuntimeCoreReexport.jsxs("p", {
            className: C["music-feature"],
            children: [o == null ? undefined : o.mood?.show_name, "、", o == null ? undefined : o.gender?.show_name]
          })]
        }), d(o, c)]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: C["water-mark"],
        children: g === "en" ? reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(musicSkillGuidanceImg_1, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmlXRlo2W$ZkTmR*a3pTbXha$0ZKd1lqSTBkRmt5-%doa1F6RndZbT$DT$dSRE9%QmFWek-zWWtkR01*cFRNWE5o$0%0d1RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
          }),
          className: "w-56 h-17"
        }) : reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(musicSkillGuidanceImg, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmlXRlo2W$ZkTmR*a3pTbXha$0ZKd1lqSTBkRmt5-%doa1F6RndZbT$DT$dSRE9%QmFWek-zWWtkR01*cFRNWE5o$0%0d1RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
          }),
          className: "w-38 h-17"
        })
      })]
    }, o.cover);
  };
  let B = null;
  let W = e => {
    let {
      children: t,
      isNarrow: r
    } = e;
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        enableArrowBorder: false,
        arrowSize: "large",
        carouselRowClassName: "gap-8",
        itemClassName: "h-180",
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t
      });
    }
  };
  let Z = e => {
    let {
      templates: t,
      onUseTemplate: r,
      templateClassName: n,
      count: i = 5,
      minCount: o = 4,
      itemWidth: c = 232,
      itemHeight: u = 232,
      trackEventForShow: s,
      trackEventForClick: d
    } = e;
    let {
      renderPlayButton: p,
      tabs: f
    } = S({
      templates: t,
      itemHeight: u,
      itemWidth: c,
      open: true,
      onUseTemplate: r
    });
    let v = reactCoreLibraryReexport.useRef(null);
    let m = useElementSizeHook_2.useElementSize(v);
    let y = m && m.width < 400 || userAgentDeviceDetector.isMobileOrIOS();
    let w = m && (m == null ? undefined : m.width) < 600 ? o : i;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: v,
      children: f.map(e => {
        var t;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(C["template-list"], y ? "!block" : "!grid !gap-[8px] !mr-0"),
          style: {
            gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))"
          },
          children: reactJsxRuntimeCoreReexport.jsx(W, {
            isNarrow: y,
            children: (((t = e.data) === null || t === undefined ? undefined : t.slice(0, w)) || []).map((e, t) => reactJsxRuntimeCoreReexport.jsx(N, {
              className: a("!w-full", n),
              titleClassName: y ? "line-clamp-1 w-72" : "",
              item: e,
              idx: t,
              renderPlayButton: p,
              onUseTemplate: r,
              trackEventForClick: d,
              trackEventForShow: s
            }, e.play_url))
          })
        }, e.title);
      })
    });
  };
  var M = e => {
    let {
      open: t,
      templates: r,
      onUseTemplate: n,
      itemWidth: i = 232,
      itemHeight: o = 232,
      tabProps: a,
      trackEventForShow: c,
      trackEventForClick: u
    } = e;
    let p = reactCoreLibraryReexport.useRef(null);
    let {
      renderPlayButton: f,
      setCurrentTab: v,
      tabs: m,
      onTriggerPause: h
    } = S({
      templates: r,
      itemHeight: o,
      itemWidth: i,
      open: t,
      onUseTemplate: n,
      trackEventForShow: c,
      trackEventForClick: u
    });
    let {
      width: g
    } = resizeObserverHooks.useResizeObserverEx({
      ref: p
    });
    let w = j(g || 0);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        h();
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: p,
      children: reactJsxRuntimeCoreReexport.jsx(scrollableTabsComponent.ScrollableTabs, {
        type: a == null ? undefined : a.type,
        className: `${!m.length || m.length < 2 ? C["scroll-tabs-hidden"] : ""} ${a == null ? undefined : a.classNames}`,
        tabBarExtraContent: a == null ? undefined : a.tabBarExtraContent,
        onChange: v,
        children: m.map(e => reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
          className: `overflow-y-scroll ${C["tab-pane"]}`,
          tab: e.title,
          itemKey: e.title,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: C["template-list"],
            "data-size": w,
            children: (e.data || []).map((e, t) => reactJsxRuntimeCoreReexport.jsx(N, {
              item: e,
              idx: t,
              renderPlayButton: f,
              onUseTemplate: n,
              trackEventForClick: u,
              trackEventForShow: c
            }, e.play_url))
          })
        }, e.title))
      })
    });
  };
  require.d(exports, {
    MusicTemplateList: function () {
      return Z;
    },
    MusicTemplateTabs: function () {
      return M;
    }
  });
}