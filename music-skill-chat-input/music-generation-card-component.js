// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'loadLottieAssets'
// - Renamed export '$' to 'MusicGenerationCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 958261
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var durationPluginUtil = require("duration-plugin-util") /*id: 180899*/;
  var s = durationPluginUtil;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var c = dayjsDateLibrary;
  var playButtonComponent = require("play-button-component") /*id: 959765*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var lazyLottiePlayerWrapper = require("lazy-lottie-player-wrapper") /*id: 364746*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var g = {
    card: "card-TObE_s",
    progress: "progress-ZabyJi",
    "progress-circle": "progress-circle-v46pVi",
    progressCircle: "progress-circle-v46pVi",
    "loading-bg": "loading-bg-_n2Pno",
    loadingBg: "loading-bg-_n2Pno",
    "music-container": "music-container-qeWPxx",
    musicContainer: "music-container-qeWPxx",
    cover: "cover-IndjwP",
    "music-icon": "music-icon-zqS3WR",
    musicIcon: "music-icon-zqS3WR",
    "cover-mask": "cover-mask-FmUQ9E",
    coverMask: "cover-mask-FmUQ9E",
    music: "music-fYXoF0",
    "lyrics-container": "lyrics-container-sqUAb3",
    lyricsContainer: "lyrics-container-sqUAb3",
    "lyrics-list": "lyrics-list-L2kWpK",
    lyricsList: "lyrics-list-L2kWpK",
    "lyrics-list-item": "lyrics-list-item-Pvmvli",
    lyricsListItem: "lyrics-list-item-Pvmvli",
    "progress-inner": "progress-inner-ha24Og",
    progressInner: "progress-inner-ha24Og",
    onAudioLoading: "onAudioLoading-KoKdnX",
    "progress-bar": "progress-bar-DENFHY",
    progressBar: "progress-bar-DENFHY",
    "play-button": "play-button-cIZ8gr",
    playButton: "play-button-cIZ8gr",
    spin: "spin-q8JCJ4",
    duration: "duration-MTI80J",
    title: "title-zspICT",
    "edit-title-icon": "edit-title-icon-M1edcE",
    editTitleIcon: "edit-title-icon-M1edcE",
    "card-title": "card-title-Lk0fd2",
    cardTitle: "card-title-Lk0fd2",
    "card-subtitle": "card-subtitle-vkNO9q",
    cardSubtitle: "card-subtitle-vkNO9q",
    divided: "divided-UYWVcV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      percent: t,
      loading: r = false,
      onProgressChange: n = () => {}
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useRef({
      moveStart: false,
      targetLeft: 0,
      targetWidth: 0
    });
    let o = e => {
      let {
        moveStart: t,
        targetLeft: r,
        targetWidth: a
      } = l.current;
      if (!i.current || !t) {
        return;
      }
      let o = (e - r) * 100 / a;
      if (o > 99) {
        o = 99;
      }
      if (o < 1) {
        o = 1;
      }
      if (n != null) {
        n(o);
      }
    };
    let s = e => {
      let {
        clientX: t
      } = e;
      o(t);
      l.current.moveStart = false;
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: i,
      className: g.progress,
      onMouseDown: () => {
        if (!i.current) {
          return;
        }
        let {
          left: e,
          width: t
        } = i.current.getBoundingClientRect();
        l.current = {
          moveStart: true,
          targetLeft: e,
          targetWidth: t
        };
      },
      onMouseMove: e => {
        let {
          clientX: t
        } = e;
        o(t);
      },
      onMouseUp: s,
      onMouseLeave: s,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: g["progress-inner"],
        "data-is-loading": !!r,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: g["progress-bar"],
          style: {
            width: `${t}%`
          },
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: g["progress-circle"]
          })
        })
      })
    });
  };
  let y = e => {
    let {
      rows: t = 6
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: Array.from({
        length: t
      }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "rounded-4 bg-[var(--s-color-border-invert-primary)] w-[180px] h-14 mb-8"
      }, t))
    });
  };
  var useAudioPlayerHook_1 = require("use-audio-player-hook_1") /*id: 75716*/;
  var videoPlayerModuleLoader = require("video-player-module-loader") /*id: 914809*/;
  let k = null;
  let x = null;
  let S = async () => {
    let e = await videoPlayerModuleLoader.loadVideoPlayer();
    let t = await Promise.all([require.e("media-source-playback-engine") /*id: 36277*/, require.e("video-player-engine") /*id: 43278*/, require.e("xgplayer-utils") /*id: 42646*/]).then(require.bind(require, "mp4-video-preloader-adapter") /*id: 624235*/);
    k ||= new e.BaseXgPlayer({
      el: document.createElement("div"),
      mediaType: "audio",
      ignores: ["playbackrate"],
      mp4plugin: {
        reqOptions: {
          referrerPolicy: "no-referrer"
        }
      },
      loop: false
    });
    x ||= t.default;
  };
  let T = e => {
    let {
      vid: t,
      inView: r = false,
      fetchMusicAudioUrl: n
    } = e;
    let [i, l] = reactCoreLibraryReexport.useState("");
    let o = reactCoreLibraryReexport.useMemo(() => t ? Symbol(t) : "", [t]);
    let {
      playerState: s,
      currentTime: u,
      duration: c,
      contentLoading: d,
      onTriggerPause: p,
      onTriggerPlay: f,
      onUpdatePlayerInstance: m,
      onUpdateCurrentTime: h
    } = useAudioPlayerHook_1.useAudioPlayer({
      audioUrl: i,
      playerInstance: k,
      contentUniquekey: o
    });
    (function (e) {
      let {
        inView: t = false,
        onUpdate: r = () => {},
        interval: n = 60000,
        autoStart: i = true
      } = e;
      let l = reactCoreLibraryReexport.useRef({
        lastFetchUrlTime: Date.now(),
        timer: null
      });
      let o = () => {
        let {
          timer: e
        } = l.current;
        if (e) {
          clearTimeout(e);
        }
      };
      let s = () => {
        let {
          lastFetchUrlTime: e
        } = l.current;
        let t = new Date().getTime();
        if (!(e - t < n)) {
          o();
          r();
          l.current.lastFetchUrlTime = t;
          l.current.timer = setTimeout(() => {
            s();
          }, n);
        }
      };
      reactCoreLibraryReexport.useEffect(() => {
        if (t) {
          s();
        }
      }, [t, r, n]);
      reactCoreLibraryReexport.useEffect(() => {
        if (i) {
          r();
        }
      }, [i]);
      reactCoreLibraryReexport.useEffect(() => () => {
        let {
          timer: e
        } = l.current;
        if (e) {
          clearTimeout(e);
        }
      }, []);
    })({
      inView: r,
      onUpdate: async () => {
        l((await (n == null ? undefined : n(t))) || "");
      },
      interval: 300000,
      autoStart: !!t
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!k) {
        S();
      }
    }, [k]);
    return {
      Player: k,
      currentTime: u,
      duration: c,
      playerState: s,
      audioUrl: i,
      contentLoading: d,
      onTriggerPause: p,
      onTriggerPlay: () => {
        if (k && x) {
          if (!k.plugins.mp4encryptplayer) {
            k.registerPlugin(x);
          }
          m(k);
          f();
        }
      },
      onUpdateCurrentTime: h
    };
  };
  c.extend(s);
  let R = async () => {
    if (!n) {
      i = await require.e("lottie-flow-animation") /*id: 85222*/.then(require.t.bind(require, 93008, 19));
      n = await require.e("loading-animation") /*id: 13313*/.then(require.t.bind(require, 325507, 19));
    }
  };
  let C = e => {
    let {
      musicContentData: s,
      inView: u,
      subTitle: b = "",
      isFinished: w,
      needEditTitle: k = false,
      fetchMusicAudioUrl: x,
      renderFooter: S,
      onPlayOrPause: C = () => {},
      onEditTitle: E = () => {}
    } = e;
    let P = reactCoreLibraryReexport.useRef({
      isPlaying: false,
      onTriggerPause: () => {}
    });
    let {
      vid: N = "",
      captions_result: A,
      cover_main_color: j,
      cover: M,
      music_gen_failed: W
    } = s || {};
    let $ = reactCoreLibraryReexport.useRef(null);
    let [I, D] = reactCoreLibraryReexport.useState([]);
    let {
      width: Z
    } = resizeObserverHooks.useResizeObserverEx({
      ref: $
    });
    let {
      duration: F,
      audioUrl: z,
      playerState: O,
      currentTime: L,
      contentLoading: B,
      onTriggerPause: H,
      onTriggerPlay: U,
      onUpdateCurrentTime: V
    } = T({
      vid: N,
      inView: u,
      fetchMusicAudioUrl: x
    });
    let {
      captionsResult: X,
      LyricUtterances: G
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = JSON.parse(A || "{\"utterances\":[]}");
      return {
        captionsResult: e,
        LyricUtterances: ((e == null ? undefined : e.utterances) || []).filter(e => !e.text.includes("["))
      };
    }, [A]);
    let Q = reactCoreLibraryReexport.useMemo(() => {
      if (!L || L === 0) {
        return -1;
      }
      let e = G.findIndex(e => L < e.start_time);
      if (e === 0) {
        return 0;
      } else if (e !== -1) {
        return e - 1;
      } else {
        return G.length - 1;
      }
    }, [L, G]);
    let K = reactCoreLibraryReexport.useMemo(() => {
      if (Q < 0 || !I[Q]) {
        return 0;
      }
      let e = 0;
      I.some((t, r) => {
        if (r === Q) {
          return true;
        }
        e -= t;
      });
      return e;
    }, [Q, I]);
    let J = (X == null ? undefined : X.duration) * 1000 || F;
    let Y = J ? Math.floor(L * 100 / J) : 0;
    let q = j || "var(--s-color-glow-grey)";
    let ee = (M == null ? undefined : M.image_thumb?.url) || "";
    let et = j ? `linear-gradient(180deg, ${q}b3 0%, ${q} 51.1%, ${q} 100%), url(${ee}) lightgray 0px 0px / cover no-repeat` : q;
    let er = k && N && !W;
    let en = O === playButtonComponent.PlaybackStatus.Playing;
    P.current = {
      isPlaying: en,
      onTriggerPause: H
    };
    let ei = B ? playButtonComponent.PlaybackStatus.Loading : en ? playButtonComponent.PlaybackStatus.Playing : playButtonComponent.PlaybackStatus.Paused;
    let el = () => {
      var e;
      var t;
      if (Z && $.current) {
        D(Array.from(((t = $.current) === null || t === undefined ? undefined : (e = t.getElementsByClassName) === null || e === undefined ? undefined : e.call(t, g["lyrics-list-item"])) || []).map(e => e.offsetHeight));
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (Z && $.current) {
        el();
      }
    }, [Z, G]);
    reactCoreLibraryReexport.useEffect(() => {
      R();
      return () => {
        let {
          isPlaying: e,
          onTriggerPause: t
        } = P.current;
        if (e) {
          t();
        }
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "music-generation-card-content",
      "data-finished": w,
      className: g.card,
      style: {
        background: w ? et : "inherit",
        "--card-background-color": w ? q : "inherit",
        "--card-lyric-line-height": "22px"
      },
      children: [!w && !!n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-[var(--s-radius-s)]",
        children: reactJsxRuntimeCoreReexport.jsx(lazyLottiePlayerWrapper.LazyLottiePlayer, {
          className: g["loading-bg"],
          animationData: n
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "relative",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: g["music-container"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: g.cover,
            children: (M == null ? undefined : M.image_thumb?.url) ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: reactJsxRuntimeCoreReexport.jsx("img", {
                src: xssContentSanitizer.sanitizeUrl(M == null ? undefined : M.image_thumb?.url, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmlTR3g1W$ZkT2$reFl$blpN$0%1MlltMWpkR0pZ$m5waF-wMTBX$Ek1ZFdSSFZu$mtRemx6WlZoS2N*a3p%WFJr%npoMFl6ST$k$nA1T$hSa1dFNXdXW*t4-$dJelozWlpNamwwWTBjNWRWcFhO$EJqZ$RsMFp*aE9jRmw1T$hObFdFcHdX$E5OZEZre$Jub*FRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
                }),
                alt: ""
              })
            }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: !!i && reactJsxRuntimeCoreReexport.jsx(lazyLottiePlayerWrapper.LazyLottiePlayer, {
                className: g["music-icon"],
                animationData: i
              })
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: g.music,
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex items-center",
              children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                className: "flex-1 w-0",
                children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: g.title,
                  children: [reactJsxRuntimeCoreReexport.jsx("h2", {
                    className: g["card-title"],
                    children: s.title || "-"
                  }), er && reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
                    className: g["edit-title-icon"],
                    icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
                    onClick: () => E(s)
                  })]
                }), reactJsxRuntimeCoreReexport.jsx("p", {
                  className: g["card-subtitle"],
                  children: b
                })]
              }), reactJsxRuntimeCoreReexport.jsx(playButtonComponent.PlayButton, {
                playingIconType: "fill",
                disabled: !w || !z,
                onClick: () => {
                  C(s, !en);
                  if (en) {
                    H();
                    return;
                  }
                  U();
                },
                status: ei,
                progressPercent: Y
              })]
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex items-center",
              children: [reactJsxRuntimeCoreReexport.jsx(_, {
                percent: Y,
                onProgressChange: e => {
                  V(Math.floor(J * e / 100));
                }
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: g.duration,
                children: J ? c.duration(J - L).format("mm:ss") : "--"
              })]
            })]
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: g["lyrics-container"],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: $,
            className: g["lyrics-list"],
            style: {
              transform: `translateY(${K}px)`
            },
            children: (G == null ? undefined : G.length) ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: G.map((e, t) => {
                let r = Q === t;
                return reactJsxRuntimeCoreReexport.jsx("p", {
                  "data-active": +!!r,
                  className: g["lyrics-list-item"],
                  children: e.text
                }, e.start_time);
              })
            }) : reactJsxRuntimeCoreReexport.jsx(y, {})
          })
        }), S ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: g.footer,
          children: [reactJsxRuntimeCoreReexport.jsx("p", {
            className: g.divided
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: g.operations,
            children: S(s)
          })]
        }) : null]
      })]
    });
  };
  require.d(exports, {
    loadLottieAssets: function () {
      return R;
    },
    MusicGenerationCard: function () {
      return C;
    }
  });
}