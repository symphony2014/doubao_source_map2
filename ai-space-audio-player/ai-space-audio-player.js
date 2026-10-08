// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'numberClampUtil'
// - Resolved require(317214) to 'number-clamp-util'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'dateFormatUtils_1'
// - Resolved require(179094) to 'date-format-utils_1'
// - Renamed variable 'u' to 'popoverComponent'
// - Resolved require(973583) to 'popover-component'
// - Renamed variable 'l' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 's' to 'rtlIconFactory'
// - Resolved require(682145) to 'rtl-icon-factory'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'rtlPlayIconComponent'
// - Resolved require(939852) to 'rtl-play-icon-component'
// - Renamed variable 'v' to 'useAudioPlayerHook'
// - Resolved require(884748) to 'use-audio-player-hook'
// - Renamed variable 'g' to 'sliderControlHook'
// - Resolved require(507026) to 'slider-control-hook'
// - Renamed variable 'm' to 'audioSpeedSelector'
// - Resolved require(864408) to 'audio-speed-selector'
// - Updated imported property 'G' to 'createRtlIcon' (module 682145)
// - Updated imported property 'G' to 'useSliderLogic' (module 507026)
// - Updated imported property 'r' to 'useAudioPlayer' (module 884748)
// - Updated imported property 'mr' to 'formatDuration' (module 179094)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'Z' to 'RtlPlayIcon' (module 939852)
// - Updated imported property 'Z' to 'PopoverComponent' (module 973583)
// - Updated imported property 'E' to 'SpeedSelector' (module 864408)
// - Updated imported property 'Z' to 'clampNumber' (module 317214)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-audio-player.7a93b024.js
         * chunkId: 43982
         * moduleId: 662761
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var d = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 3,
      height: 11,
      x: 1.5,
      y: 0.5,
      fill: "#06F",
      rx: 1.5
    }), reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 3,
      height: 11,
      x: 7.5,
      y: 0.5,
      fill: "#06F",
      rx: 1.5
    })]
  }), {}));
  var rtlPlayIconComponent = require("rtl-play-icon-component") /*id: 939852*/;
  var h = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M5.714 8.857h.8l.596-.532 4.366-3.899v15.148L7.11 15.675l-.596-.532H3.095V8.857zm0-2.095 5.295-4.728c1.027-.834 2.562-.103 2.562 1.22v17.492c0 1.324-1.535 2.054-2.562 1.22l-5.295-4.728H3.095A2.095 2.095 0 0 1 1 15.143V8.857c0-1.157.938-2.095 2.095-2.095zM18.03 4.274a1.05 1.05 0 0 1 1.48-.082A10.45 10.45 0 0 1 23 12c0 3.103-1.35 5.892-3.492 7.809a1.048 1.048 0 0 1-1.397-1.562A8.36 8.36 0 0 0 20.905 12a8.36 8.36 0 0 0-2.794-6.247 1.05 1.05 0 0 1-.082-1.48m-.5 3.924a1.048 1.048 0 0 0-1.63 1.318c.606.748.932 1.518.932 2.484 0 .967-.326 1.736-.931 2.484a1.048 1.048 0 0 0 1.629 1.318c.85-1.052 1.397-2.274 1.397-3.802s-.546-2.75-1.397-3.802",
      clipRule: "evenodd"
    })
  }), {}));
  var useAudioPlayerHook = require("use-audio-player-hook") /*id: 884748*/;
  var sliderControlHook = require("slider-control-hook") /*id: 507026*/;
  let y = e => {
    let {
      currentVolume: t,
      onChangeVolume: n
    } = e;
    let {
      sliderRef: r,
      handleSliderClick: o,
      percent: i,
      isGrabbing: a,
      handleStartGrabbing: c
    } = sliderControlHook.useSliderLogic({
      min: 0,
      max: 1,
      value: t,
      onChange: n,
      direction: "vertical"
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "volume-wrapper-FTS7Ai",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "current-volume-nWSEva",
        children: [Math.floor(t * 100), "%"]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "volume-slider-lOU6C1",
        ref: r,
        onClick: o,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "rail-UNipL8",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "track-Z0FAoq",
            style: {
              height: `${i}%`
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "handle-uT3lue",
          style: {
            top: `${100 - i}%`,
            cursor: a ? "grabbing" : "grab"
          },
          onMouseDown: c
        })]
      })]
    });
  };
  var audioSpeedSelector = require("audio-speed-selector") /*id: 864408*/;
  let Y = e => {
    let {
      currentProgress: t,
      onProgressChange: n,
      duration: r
    } = e;
    let {
      sliderRef: o,
      handleSliderClick: i,
      percent: a,
      isGrabbing: c,
      handleStartGrabbing: u
    } = sliderControlHook.useSliderLogic({
      min: 0,
      max: r,
      value: t,
      onChange: n,
      direction: "horizontal"
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: o,
      className: "progress-wrapper-m3VSIf",
      onClick: i,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "rail-RzU9yc",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "track-W_sGRT",
          style: {
            width: `${a}%`
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "handle-Bl8UPg",
        style: {
          left: `${a}%`,
          cursor: c ? "grabbing" : "grab"
        },
        onMouseDown: u
      })]
    });
  };
  var M = {
    "audio-wrapper": "audio-wrapper-cUjuEf",
    "audio-title-wrapper": "audio-title-wrapper-_A7nax",
    "audio-title": "audio-title-N7MnU6",
    "audio-close": "audio-close-dzHywB",
    "audio-progress-wrapper": "audio-progress-wrapper-cB2cy4",
    "audio-control-wrapper": "audio-control-wrapper-Xms_3Z",
    "audio-control-play": "audio-control-play-VGVzdw",
    "audio-control-time": "audio-control-time-ErrfSA",
    "audio-control-time-minute": "audio-control-time-minute-qhorBy",
    "audio-control-time-second": "audio-control-time-second-NDQrm2",
    "audio-control-slots": "audio-control-slots-_uOY93",
    "audio-control-volume": "audio-control-volume-trijYF",
    "audio-control-volume-value": "audio-control-volume-value-VTDleK",
    "audio-control-volume-value-active": "audio-control-volume-value-active-SVKu08",
    "audio-control-speed": "audio-control-speed-OzAoZT",
    "audio-control-speed-value": "audio-control-speed-value-nKaBY_",
    "audio-control-speed-active": "audio-control-speed-active-e7mYK_"
  };
  let E = "audio-c7ded2";
  let b = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      title: n,
      onClose: i,
      url: s,
      autoPlay: g = false,
      speedList: b,
      duration: _,
      className: A,
      controlSlot: w
    } = e;
    let [S, O] = reactCoreLibraryReexport.useState(false);
    let [x, k] = reactCoreLibraryReexport.useState(false);
    let {
      handlePlayAudio: T,
      handlePauseAudio: D,
      handleChangePlayTime: N,
      handleChangeVolume: P,
      currentVolume: j,
      currentSpeed: C,
      currentTime: L,
      handleChangeSpeed: R,
      playStatus: I,
      duration: H = _,
      handleInitPlayer: F
    } = useAudioPlayerHook.useAudioPlayer({
      defaultSpeed: 1,
      defaultVolume: 0.5
    });
    reactCoreLibraryReexport.useEffect(() => {
      F({
        id: E,
        url: s,
        autoPlay: g
      });
    }, []);
    let {
      formattedMinutes: Z,
      formattedSeconds: U
    } = dateFormatUtils_1.formatDuration(L);
    let {
      formattedMinutes: G,
      formattedSeconds: z
    } = dateFormatUtils_1.formatDuration(H);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        let e = {
          handlePlayerJumpTime: N,
          handlePlayerPause: D
        };
        if (typeof t == "function") {
          t(e);
        } else {
          t.current = e;
        }
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        k(false);
      };
      window.addEventListener("click", e);
      return () => {
        window.removeEventListener("click", e);
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a([M["audio-wrapper"], A]),
      children: [n && !!i && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: M["audio-title-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: M["audio-title"],
          children: n
        }), !!i && reactJsxRuntimeCoreReexport.jsx("div", {
          className: M["audio-close"],
          onClick: () => i(),
          children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {})
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: M["audio-progress-wrapper"],
        children: H && reactJsxRuntimeCoreReexport.jsx(Y, {
          currentProgress: L,
          duration: H,
          onProgressChange: N
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: M["audio-control-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: M["audio-control-play"],
          onClick: () => {
            if (I === "pause") {
              T();
            } else {
              D();
            }
          },
          children: I === "play" ? reactJsxRuntimeCoreReexport.jsx(d, {}) : reactJsxRuntimeCoreReexport.jsx(rtlPlayIconComponent.RtlPlayIcon, {})
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: M["audio-control-time"],
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: M["audio-control-time-minute"],
            children: H ? `${Z || "00"}:${U || "00"}/ ` : ""
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: M["audio-control-time-second"],
            children: H ? `${G}:${z}` : ""
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: M["audio-control-slots"],
          children: w
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: M["audio-control-speed"],
          children: reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
            position: "bottomLeft",
            content: reactJsxRuntimeCoreReexport.jsx(audioSpeedSelector.SpeedSelector, {
              onSpeedChange: e => {
                R(e);
                k(false);
              },
              currentSpeed: C,
              speedList: b
            }),
            trigger: "custom",
            visible: x,
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: a([M["audio-control-speed-value"], x ? M["audio-control-speed-active"] : ""]),
              onClick: e => {
                k(!x);
                e.nativeEvent.stopPropagation();
              },
              children: [C, "x"]
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: M["audio-control-volume"],
          children: reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
            position: "bottomLeft",
            content: reactJsxRuntimeCoreReexport.jsx(y, {
              currentVolume: j,
              onChangeVolume: e => {
                P(numberClampUtil.clampNumber(e, 0, 1));
              }
            }),
            onVisibleChange: e => {
              O(e);
            },
            trigger: "click",
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: a([M["audio-control-volume-value"], S ? M["audio-control-volume-value-active"] : ""]),
              children: reactJsxRuntimeCoreReexport.jsx(h, {})
            })
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          visibility: "hidden",
          width: 0,
          height: 0,
          overflow: "hidden"
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          id: E
        })
      })]
    });
  });
  require.d(exports, {
    ProgressComp: function () {
      return Y;
    },
    AudioPlayer: function () {
      return b;
    }
  });
}