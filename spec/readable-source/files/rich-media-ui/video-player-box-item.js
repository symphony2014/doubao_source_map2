// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'VideoPlayerBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 719010
         */
module.exports = function (module, exports, require) {
  let n;
  var r;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var videoBoxComponent = require("video-box-component") /*id: 410011*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var videoPlayerTimePlugin = require("video-player-time-plugin") /*id: 626088*/;
  var playerStartButtonPlugin = require("player-start-button-plugin") /*id: 93801*/;
  var videoPlayerProgressPlugin = require("video-player-progress-plugin") /*id: 888087*/;
  var videoPlayButtonPlugin = require("video-play-button-plugin") /*id: 600472*/;
  var videoPlayerPcPlugin = require("video-player-pc-plugin") /*id: 492893*/;
  var videoPlayerErrorPlugin = require("video-player-error-plugin") /*id: 189387*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var $ = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var reactUseEventListener = require("react-use-event-listener") /*id: 55281*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var baseIconClassExport = require("base-icon-class-export") /*id: 630654*/;
  var mp4VideoPreloaderAdapter = require("mp4-video-preloader-adapter") /*id: 624235*/;
  (r = {}).VideoPlay = "video_play";
  r.VideoPlayFinish = "video_play_finish";
  r.VideoPlayTime = "video_play_time";
  r.SwipeVideo = "swipe_video";
  r.VideoVolumeChange = "video_volume_change";
  r.VideoPlaySpeedChange = "video_play_speed_change";
  r.VideoPause = "video_pause";
  let E = r;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let F = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 22,
    fill: "currentColor",
    viewBox: "0 0 22 22",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "m4.343 13.555 6.026-6.159A.86.86 0 0 1 11 7.114q.174 0 .332.074.158.067.282.208l6.035 6.16q.24.24.24.589 0 .223-.107.415a.8.8 0 0 1-.3.29.8.8 0 0 1-.414.108.81.81 0 0 1-.598-.24L10.593 8.69h.805l-5.885 6.026a.78.78 0 0 1-.59.241.85.85 0 0 1-.423-.108.8.8 0 0 1-.29-.29.83.83 0 0 1-.108-.415q0-.183.066-.324a1 1 0 0 1 .175-.266"
    })
  });
  let M = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 22,
    fill: "currentColor",
    viewBox: "0 0 22 22",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M11 15.58a.89.89 0 0 1-.63-.273L4.342 9.139a1 1 0 0 1-.175-.257.8.8 0 0 1-.066-.324.8.8 0 0 1 .108-.415.8.8 0 0 1 .29-.299.85.85 0 0 1 .424-.108.82.82 0 0 1 .59.241l5.884 6.026h-.805l5.877-6.026a.87.87 0 0 1 .598-.24.8.8 0 0 1 .415.107.8.8 0 0 1 .299.3.8.8 0 0 1 .108.414.8.8 0 0 1-.241.581l-6.035 6.16a.9.9 0 0 1-.282.215.85.85 0 0 1-.332.067"
    })
  });
  let C = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 17,
    fill: "none",
    viewBox: "0 0 17 17",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#loading_svg__a)",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        stroke: "url(#loading_svg__b)",
        strokeLinecap: "round",
        strokeWidth: 1.778,
        d: "M15.61 8.5A7.111 7.111 0 0 0 2.097 5.405"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "loading_svg__b",
        x1: 2.096,
        x2: 15.611,
        y1: 8.5,
        y2: 8.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#fff",
          stopOpacity: 0
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.399,
          stopColor: "#fff",
          stopOpacity: 0.5
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#fff"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M.5.5h16v16H.5z"
        })
      })]
    })]
  });
  let P = [{
    LANG: "zh",
    TEXT: {
      MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式 或 设备无网络"
    }
  }];
  let B = null;
  let z = () => {
    B ||= mp4VideoPreloaderAdapter.Mp4Preloader.registerPreloader({
      preloadTime: 5,
      segmentMinDuration: 5,
      preloadCacheType: 0,
      preloadMaxCacheCount: 5,
      isOpenPreload: true,
      minBufferLength: 5,
      reqOptions: {
        credentials: "include"
      }
    }, null);
    return B;
  };
  require("webpack-module-wrapper") /*id: 631708*/;
  var videoPlayerModuleLoader = require("video-player-module-loader") /*id: 914809*/;
  var V = {
    modal: "modal-pfCfGM",
    "video-info": "video-info-hBo0jK",
    name: "name-lctyxx",
    captions: "captions-DxoqDI",
    "play-btn-wrapper": "play-btn-wrapper-oJckIB",
    "play-btn": "play-btn-N07Kc_",
    "play-btn-disabled": "play-btn-disabled-FmaMO6",
    loading: "loading-PZR5mI",
    "loading-icon": "loading-icon-UmFio4"
  };
  let X = async () => {
    if (n) {
      return n;
    }
    let e = await videoPlayerModuleLoader.loadVideoPlayer();
    n = e.BaseXgPlayer;
    e.I18N.extend(P);
    return n;
  };
  let L = semiToastNotification.ToastFactory.create({
    getPopupContainer: () => document.querySelector(".play-wrapper")
  });
  let H = e => {
    let {
      showList: i,
      setShowListList: t,
      onVideoPlay: r,
      videoParams: l,
      setOpen: d,
      open: s,
      limitSize: c,
      zIndex: u = 1000,
      onTrackEvent: m,
      currentPlay: b
    } = e;
    let S = reactCoreLibraryReexport.useRef([]);
    let {
      current: P
    } = reactCoreLibraryReexport.useRef({
      isScroll: true,
      scrollTime: null,
      timer: null,
      interval: 1000,
      distance: 20,
      delay: 1000
    });
    let [B, D] = reactCoreLibraryReexport.useState(0);
    let [H, I] = reactCoreLibraryReexport.useState(0);
    let [O, A] = reactCoreLibraryReexport.useState("");
    let [J, q] = reactCoreLibraryReexport.useState({
      offset: 10,
      hasMore: true
    });
    let [U, G] = reactCoreLibraryReexport.useState(false);
    let [Q, K] = reactCoreLibraryReexport.useState(0);
    let [Y, ee] = reactCoreLibraryReexport.useState(250);
    let [ei, et] = reactCoreLibraryReexport.useState(false);
    let [en, er] = reactCoreLibraryReexport.useState(true);
    let el = z();
    let ea = userAgentDeviceDetector.isIOS();
    let eo = reactCoreLibraryReexport.useRef(0);
    let ed = reactCoreLibraryReexport.useRef(-1);
    let es = reactCoreLibraryReexport.useRef("");
    let ec = reactCoreLibraryReexport.useRef("");
    let eu = reactCoreLibraryReexport.useRef(0);
    let em = reactCoreLibraryReexport.useRef(en);
    let ep = reactCoreLibraryReexport.useRef("others");
    let eh = e => i.findIndex(i => i.vid === e);
    let ev = (e, i, t) => {
      if (m != null) {
        m(e, {
          position: ed.current,
          is_inner_video: eh(i) === ed.current ? "0" : "1",
          channel_id: "414",
          group_type: "video",
          video_id: i,
          ...t
        });
      }
    };
    let e_ = async e => {
      let {
        offset: n = 0,
        init: a = false
      } = e;
      if (r && !U) {
        if (a) {
          q({
            offset: (l == null ? undefined : l.offset) || c,
            hasMore: (l == null ? undefined : l.has_more) || false
          });
          if (l == null ? undefined : l.has_more) {
            e_({
              offset: l.offset
            });
          }
          setTimeout(() => {
            ey();
            let n = i.findIndex(e => e.item_id === b);
            if (n === -1) {
              n = 0;
            }
            D(n);
            ed.current = n;
            e$(n);
            let r = eg({
              url: i[n]?.media_url,
              vid: i[n]?.item_id
            }, n, true);
            eT(r);
            if (r != null) {
              r.setUserActive(true, ea);
            }
            S.current[n] = r;
            r.focus();
          }, 200);
        } else {
          var s;
          if (!J.hasMore) {
            return;
          }
          G(true);
          let e = await r({
            offset: n,
            limit: c,
            query: l == null ? undefined : l.query,
            search_id: l == null ? undefined : l.search_id,
            source_from: Number(arrayFirstElement.getFirstElement(i)?.source_from)
          });
          G(false);
          if (e == null ? undefined : e.video_list) {
            e.video_list = e == null ? undefined : (s = e.video_list) === null || s === undefined ? undefined : s.map(e => {
              var i;
              return {
                ...e,
                media_url: (i = e.media_url) === null || i === undefined ? undefined : i.replace(/http:\/\//, "https://")
              };
            });
          }
          t(i => {
            var t;
            let n = a ? [] : [...i];
            let r = new Set();
            n.forEach(e => {
              if (e.item_id) {
                r.add(e.item_id);
              }
            });
            if (e != null && (t = e.video_list) !== null && t !== undefined) {
              t.forEach(e => {
                if (e.item_id && !r.has(e.item_id)) {
                  n.push(e);
                  r.add(e.item_id);
                }
              });
            }
            return n;
          });
          q({
            offset: (e == null ? undefined : e.offset) || 0,
            hasMore: (e == null ? undefined : e.has_more) || false
          });
        }
      }
    };
    let eg = function (e = {}, i = 0, t = false) {
      return new n({
        root: document.body,
        el: document.querySelectorAll(".play-wrapper")[i],
        autoplay: t,
        ignores: ["fullscreen", "mobile"],
        defaultDefinition: 0,
        width: "100%",
        height: "100%",
        lang: "zh",
        disableBodyTrigger: true,
        plugins: [playerStartButtonPlugin.StartButtonPlugin, videoPlayerPcPlugin.PcVideoPlugin, videoPlayerProgressPlugin.ProgressPlugin, videoPlayButtonPlugin.PlayButtonPlugin, videoPlayerTimePlugin.TimePlugin, videoPlayerErrorPlugin.PlayerErrorPlugin, mp4VideoPreloaderAdapter.default],
        controls: {
          mode: "normal"
        },
        closeVideoDblclick: true,
        closeVideoClick: true,
        keyShortcut: false,
        marginControls: true,
        cssFullScreen: {
          target: document.body
        },
        commonStyle: {
          playedColor: "#ffffff",
          volumeColor: "#0066FF"
        },
        start: {
          isShowPause: true,
          isShowEnd: false,
          disableAnimate: true
        },
        loop: true,
        ...e
      });
    };
    let ef = e => {
      let {
        currentTime: i
      } = e;
      let t = 0;
      if (i - 5 >= 0) {
        t = i - 5;
      }
      e.currentTime = t;
    };
    let ex = e => {
      let {
        currentTime: i,
        duration: t
      } = e;
      let n = i;
      n = i + 5 <= t ? i + 5 : t;
      e.currentTime = n;
    };
    let ew = e => {
      if (Math.max(-1, Math.min(1, -e.detail || -e.deltaY)) > 0) {
        ek(B - 1, "pre");
      } else {
        ek(B + 1, "next");
      }
    };
    let eb = () => new Date().getTime();
    reactUseEventListener.useEventListener(true, e => {
      e.preventDefault();
      let t = S.current?.[B];
      if (t == null ? undefined : t.state) {
        if (e.code === "Space") {
          if (t.paused) {
            if (m != null) {
              m("click_video_player", {
                to_status: "play"
              });
            }
            return t.play();
          } else {
            if (m != null) {
              m("click_video_player", {
                to_status: "paused"
              });
            }
            ev(E.VideoPause, es.current);
            return t.pause();
          }
        }
        if (e.code === "ArrowUp") {
          ek(B - 1, "pre");
        }
        if (e.code === "ArrowDown") {
          ek(B + 1, "next");
        }
        if (e.code === "ArrowLeft") {
          ef(t);
        }
        if (e.code === "ArrowRight") {
          ex(t);
        }
      }
    }, [B], {
      event: "keydown"
    });
    let e$ = e => {
      K(-(e ?? B) * document.querySelectorAll(".play-wrapper")[0].clientHeight);
      ee(0);
    };
    useEventListenerHook.useEventListener("wheel", e => {
      let i = eb();
      let t = e.detail || e.deltaY;
      if (P.scrollTime && i - P.scrollTime > P.interval && Math.abs(t) >= P.distance) {
        ew(e);
        if (P.timer) {
          clearTimeout(P.timer);
          P.timer = null;
        }
        P.isScroll = false;
        P.scrollTime = i;
      }
      if (P.isScroll) {
        ew(e);
        P.scrollTime = eb();
        P.isScroll = false;
      }
      if (P.timer) {
        clearTimeout(P.timer);
      }
      P.timer = setTimeout(() => {
        P.isScroll = true;
      }, P.delay);
    }, {
      passive: false
    });
    useEventListenerHook.useEventListener("touchstart", e => {
      if (S.current[B]?.state) {
        I(e.changedTouches[0].clientY);
      }
    }, {
      passive: false
    });
    useEventListenerHook.useEventListener("touchend", e => {
      let i = e.changedTouches[0].clientY - H;
      I(0);
      if (!(Math.abs(i) <= 60)) {
        if (i > 0) {
          ek(B - 1, "pre");
        } else if (i < 0) {
          ek(B + 1, "next");
        }
      }
    }, {
      passive: false
    });
    useEventListenerHook.useEventListener("click", e => {
      var r;
      var l;
      if (O) {
        L.destroyAll();
        A("");
        return;
      }
      if ((e == null ? undefined : e.target?.nodeName) === "VIDEO" && (S == null ? undefined : S.current[B]?.state) && !H) {
        if (S.current[B]?.paused) {
          if (m != null) {
            m("click_video_player", {
              to_status: "play"
            });
          }
          if ((l = S.current[B]) === null || l === undefined) {
            return undefined;
          } else {
            return l.play();
          }
        } else {
          if (m != null) {
            m("click_video_player", {
              to_status: "paused"
            });
          }
          ev(E.VideoPause, es.current);
          if ((r = S.current[B]) === null || r === undefined) {
            return undefined;
          } else {
            return r.pause();
          }
        }
      } else {
        return undefined;
      }
    }, {
      passive: false
    });
    useEventListenerHook.useEventListener("resize", () => e$(), {
      passive: false
    });
    useEventListenerHook.useEventListener("visibilitychange", () => {
      ep.current = document.visibilityState === "visible" ? "others" : "page_unvisible";
      er(document.visibilityState === "visible");
    }, {
      passive: false
    });
    useEventListenerHook.useEventListener("pagehide", () => {
      ep.current = "close_tab";
      if (eu.current) {
        ev(E.VideoPlayTime, es.current, {
          duration: eb() - eu.current,
          is_background_play: em.current ? "0" : "1",
          leave_method: ep.current
        });
      }
    }, {
      passive: false
    });
    let ek = function (e) {
      var a;
      var o;
      var d;
      var s;
      let c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pre";
      if (i[e]) {
        if (i[e]?.item_id) {
          ev(E.SwipeVideo, i[e].item_id, {
            is_inner_video: e === ed.current ? "0" : "1",
            video_id: i[e]?.item_id,
            to_group_id: i[e]?.item_id,
            from_group_id: i[c === "pre" ? e + 1 : e - 1]?.item_id,
            status: c === "pre" ? "up" : "down"
          });
        }
        if (J.hasMore && (i.length < 10 || e === i.length - 4)) {
          e_({
            offset: J.offset
          });
        }
        if (O) {
          L.destroyAll();
        }
        D(e);
        ee(250);
        if (c === "pre") {
          let t = document.querySelectorAll(".play-wrapper")[e + 1].clientHeight;
          K(e => e + t);
          if (S.current[e + 2] && i[e + 2]) {
            if ((o = S.current[e + 2]) !== null && o !== undefined) {
              o.destroy();
            }
            S.current[e + 2] = null;
          }
          if ((a = S.current[e + 1]) !== null && a !== undefined) {
            a.pause();
          }
        } else {
          let t = document.querySelectorAll(".play-wrapper")[e - 1].clientHeight;
          K(e => e - t);
          if (e - 2 >= 0 && S.current[e - 2] && i[e - 2]) {
            if ((s = S.current[e - 2]) !== null && s !== undefined) {
              s.destroy();
            }
            S.current[e - 2] = null;
          }
          if ((d = S.current[e - 1]) !== null && d !== undefined) {
            d.pause();
          }
        }
        setTimeout(() => {
          let r = S.current[e] || eg({
            vid: i[e]?.item_id,
            url: i[e]?.media_url
          }, e);
          if (!S.current[e]) {
            S.current[e] = r;
            eT(r);
          }
          r.setUserActive(true, ea);
          r.config.autoplay = true;
          r.focus();
          r.seek(0);
          r.play();
          for (let i in S.current) {
            if (Number(i) !== e) {
              let e = S.current[i];
              if (e && e !== null) {
                if (e != null) {
                  e.pause();
                }
                if (e != null) {
                  e.setUserActive(false, true);
                }
                e.config.autoplay = false;
                if (e != null) {
                  e.blur();
                }
              }
            }
          }
          let l = (i || []).slice(e + 2).map((e, i) => ({
            order: i,
            data: {
              payload: [{
                url: e.media_url
              }],
              vid: String(e.item_id),
              definition: 0
            }
          }));
          el.removeAllPreloadTask();
          el.attachPlayer(S.current[e]);
          el.addPreloaderList(l);
        }, 200);
      }
    };
    let ey = () => {
      if (!storageWrapperWithFallback.LocalStorageWrapper.getItem("isFirstShowVideo") && !(i.length < 2)) {
        A(L.info({
          duration: 15,
          content: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "text",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              style: {
                marginBottom: 8
              },
              children: "按下「键盘下键」或滑动「鼠标滚轮」查看更多视频"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              children: "同时支持点击屏幕上的「上下按钮」切换视频"
            })]
          })
        }));
        storageWrapperWithFallback.LocalStorageWrapper.setItem("isFirstShowVideo", "1");
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      X();
      if (!(i.length < 1)) {
        eo.current = eb();
        e_({
          init: true
        });
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!ei) {
        if (eu.current) {
          ev(E.VideoPlayTime, ec.current, {
            duration: eb() - eu.current,
            is_background_play: em.current ? "0" : "1",
            leave_method: ep.current
          });
          eu.current = 0;
        }
        return;
      }
      if (eu.current) {
        if (em.current !== en) {
          ev(E.VideoPlayTime, es.current, {
            duration: eb() - eu.current,
            is_background_play: em.current ? "0" : "1",
            leave_method: ep.current
          });
          eu.current = eb();
          em.current = en;
        }
      } else {
        eu.current = eb();
        em.current = en;
      }
      return () => {
        if (eu.current && ep.current === "close_tab") {
          ev(E.VideoPlayTime, es.current, {
            duration: eb() - eu.current,
            is_background_play: em.current ? "0" : "1",
            leave_method: ep.current
          });
        }
      };
    }, [en, ei]);
    let eR = debounceUtilWrapper.createDebounce(e => ev(E.VideoPlayFinish, e), 3000, {
      leading: true,
      trailing: false
    });
    let eT = e => {
      e.on(videoPlayerEventConstants.PLAY, () => {
        es.current = e.config.vid;
        et(true);
        ev(E.VideoPlay, e.config.vid);
      });
      e.on(videoPlayerEventConstants.PAUSE, () => {
        ep.current = "pause";
        ec.current = e.config.vid;
        es.current = "";
        et(false);
      });
      e.on(videoPlayerEventConstants.ENDED, () => {
        ep.current = "pause";
        ec.current = e.config.vid;
        es.current = "";
        et(false);
      });
      e.on(videoPlayerEventConstants.ERROR, () => {
        ep.current = "pause";
        ec.current = e.config.vid;
        es.current = "";
        et(false);
      });
      e.on(videoPlayerEventConstants.VOLUME_CHANGE, () => {
        if (e.config.vid === es.current) {
          ev(E.VideoVolumeChange, es.current, {
            to_status: e.muted ? "off" : "on",
            volume_value: e.muted ? 0 : e.volume * 100
          });
        }
      });
      e.on(videoPlayerEventConstants.RATE_CHANGE, () => {
        if (e.config.vid) {
          ev(E.VideoPlaySpeedChange, e.config.vid, {
            speed_value: e.playbackRate
          });
        }
      });
      e.on(videoPlayerEventConstants.TIME_UPDATE, () => {
        if (e.config.vid === es.current && e.duration - e.currentTime < 1) {
          eR(e.config.vid);
        }
      });
    };
    return reactJsxRuntimeCoreReexport.jsxs(modalDialogComponent.Modal, {
      visible: s,
      footer: null,
      fullScreen: true,
      className: V.modal,
      onCancel: () => {
        ep.current = "click_leave_icon";
        ev(E.VideoPlayTime, es.current, {
          duration: eb() - eu.current,
          is_background_play: em.current ? "0" : "1",
          leave_method: ep.current
        });
        for (let i in S.current) {
          var e;
          if ((e = S.current[i]) !== null && e !== undefined) {
            e.destroy();
          }
          S.current[i] = null;
        }
        t(i.slice(0, c));
        d(false);
        D(0);
        A("");
      },
      zIndex: u,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "slide-wrapper",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "slide-list",
          style: {
            transform: `translate3d(0px,${Q}px, 0px)`,
            transitionDuration: `${Y}ms`
          },
          children: i.map((e, i) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: $("play-wrapper xgplayer", {
              active: B === i,
              "xgplayer-nostart": B !== i
            }),
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: V["video-info"],
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: V.name,
                children: e.artist_name ? `@${e.artist_name}` : null
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: V.captions,
                children: e.song_name
              })]
            })
          }, i))
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: V["play-btn-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx(baseIconClassExport.BaseIconClass, {
          className: $(V["play-btn"], {
            [V["play-btn-disabled"]]: !i[B - 1]
          }),
          svg: reactJsxRuntimeCoreReexport.jsx(F, {}),
          onClick: e => {
            e.stopPropagation();
            ek(B - 1, "pre");
          }
        }), reactJsxRuntimeCoreReexport.jsx(baseIconClassExport.BaseIconClass, {
          className: $(V["play-btn"], {
            [V["play-btn-disabled"]]: !i[B + 1]
          }),
          svg: U ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: V.loading,
            children: reactJsxRuntimeCoreReexport.jsx(C, {
              className: V["loading-icon"]
            })
          }) : reactJsxRuntimeCoreReexport.jsx(M, {}),
          onClick: e => {
            e.stopPropagation();
            ek(B + 1, "next");
          }
        })]
      })]
    });
  };
  let I = e => {
    var i;
    let {
      videoContent: t,
      onVideoPlay: n,
      inView: r,
      onTrackEvent: p,
      onClick: h,
      onShow: v,
      currentPlay: _,
      playErrorTitle: g = "This video is unavailable",
      videoCardClassName: f
    } = e;
    let [x, w] = reactIntersectionObserver_1.useInView();
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        if (v != null) {
          v();
        }
      }
    }, [w]);
    let [b, $] = reactCoreLibraryReexport.useState([]);
    let k = ((i = t.video_list) === null || i === undefined ? undefined : i.find(e => e.item_id === _)) || arrayFirstElement.getFirstElement(t.video_list);
    let {
      latestFileUrls: y
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [(k == null ? undefined : k.album_image) || ""],
      enable: w
    });
    let R = (y == null ? undefined : y[0]) || (k == null ? undefined : k.album_image) || "";
    let {
      latestFileUrls: T
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [(k == null ? undefined : k.source_app_icon) || ""],
      enable: w
    });
    let S = (T == null ? undefined : T[0]) || (k == null ? undefined : k.source_app_icon) || "";
    let [j, N] = reactCoreLibraryReexport.useState(false);
    let [W, E] = reactCoreLibraryReexport.useState(false);
    let [F, M] = reactCoreLibraryReexport.useState();
    let [C, P] = reactCoreLibraryReexport.useState("");
    let B = reactCoreLibraryReexport.useRef(0);
    let z = async () => {
      if (n) {
        E(true);
        $([]);
        try {
          var e;
          var r;
          let l = await n({
            item_ids: t == null ? undefined : (e = t.video_list) === null || e === undefined ? undefined : e.map(e => e.item_id)
          });
          if (l == null ? undefined : l.video_list) {
            l.video_list = l == null ? undefined : (r = l.video_list) === null || r === undefined ? undefined : r.map(e => {
              var i;
              return {
                ...e,
                media_url: (i = e.media_url) === null || i === undefined ? undefined : i.replace(/http:\/\//, "https://")
              };
            });
          }
          $((l == null ? undefined : l.video_list) || []);
          E(false);
          P("");
          if (l) {
            M({
              offset: t.offset,
              search_id: t.search_id,
              query: t.query,
              has_more: true
            });
          }
          if (j && !(l == null ? undefined : l.video_list?.length)) {
            return samanthaToastFactory.toastInstance.error(g);
          }
        } catch (i) {
          let e = g;
          E(false);
          if (isObjectOrFunction_1_1.isObjectOrFunction(i) && i instanceof apiErrorHandler.ApiError) {
            e = i.errorOption.message || g;
          }
          P(e);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (r && !B.current) {
        if (p != null) {
          p("video_card_show", {}, {
            key: `${k == null ? undefined : k.item_id}`
          });
        }
      }
      let e = new Date().getTime();
      if (r && (!B.current || e - B.current >= 50000)) {
        z();
        B.current = new Date().getTime();
      }
    }, [r]);
    if (k) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(videoBoxComponent.VideoBox, {
          videoItem: {
            ...k,
            album_image: R,
            source_app_icon: S
          },
          onClick: e => {
            if (!W) {
              if (h != null) {
                h();
              }
              e.stopPropagation();
              N(true);
              if (p != null) {
                p("enter_video_player");
              }
              if (B.current && Date.now() - B.current >= 50000 && !W) {
                $([]);
                z();
                B.current = Date.now();
                return;
              }
              if (B.current && !(b == null ? undefined : b.length)) {
                samanthaToastFactory.toastInstance.error(g);
                return;
              }
              if (C) {
                samanthaToastFactory.toastInstance.error(C);
                return;
              }
            }
          },
          className: f,
          ref: x
        }), (b == null ? undefined : b.length) && j ? reactJsxRuntimeCoreReexport.jsx(H, {
          videoParams: F,
          onVideoPlay: n,
          showList: b,
          setShowListList: $,
          setOpen: N,
          open: j,
          limitSize: (b == null ? undefined : b.length) || 10,
          onTrackEvent: p,
          currentPlay: _,
          zIndex: 1020
        }) : null]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    VideoPlayerBox: function () {
      return I;
    }
  });
}