// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'PlayButton'
// - Renamed export 'c' to 'PlaybackStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 959765
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var rtlPlayIconComponent = require("rtl-play-icon-component") /*id: 939852*/;
  var rtlColumnsIcon = require("rtl-columns-icon") /*id: 663739*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11M8.5 8.75a1.25 1.25 0 1 1 2.5 0v6.5a1.25 1.25 0 1 1-2.5 0zm5.75-1.25c-.69 0-1.25.56-1.25 1.25v6.5a1.25 1.25 0 1 0 2.5 0v-6.5c0-.69-.56-1.25-1.25-1.25",
      clipRule: "evenodd"
    })
  }), {}));
  var f = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#FFF",
      d: "M3.295 11a.73.73 0 0 1-.57-.252q-.225-.25-.225-.674V1.92q0-.424.225-.67A.73.73 0 0 1 3.295 1q.184 0 .35.063.174.063.37.171l6.788 3.906q.374.21.536.4a.68.68 0 0 1 .161.457.68.68 0 0 1-.161.458q-.162.187-.536.405l-6.789 3.9q-.195.114-.368.177a1 1 0 0 1-.351.063"
    })
  }), {}));
  var v = {
    "play-button-wrapper": "play-button-wrapper-doQ56b",
    playButtonWrapper: "play-button-wrapper-doQ56b",
    "play-button-icon-wrapper": "play-button-icon-wrapper-X8JWGe",
    playButtonIconWrapper: "play-button-icon-wrapper-X8JWGe",
    loading: "loading-pbxm3V",
    "icon-stop": "icon-stop-Cy2e8N",
    iconStop: "icon-stop-Cy2e8N",
    "icon-play": "icon-play-srEb7J",
    iconPlay: "icon-play-srEb7J",
    "icon-stop-fill": "icon-stop-fill-yCHVRM",
    iconStopFill: "icon-stop-fill-yCHVRM",
    "icon-loading": "icon-loading-c_wl6Z",
    iconLoading: "icon-loading-c_wl6Z",
    "play-button-default": "play-button-default-wr5Bt8",
    playButtonDefault: "play-button-default-wr5Bt8"
  };
  (n = {}).Initial = "initial";
  n.Loading = "loading";
  n.Playing = "playing";
  n.Paused = "paused";
  n.Ended = "ended";
  n.Error = "error";
  let m = n;
  let y = e => reactJsxRuntimeCoreReexport.jsx("div", {
    className: o(v["play-button-icon-wrapper"], e),
    children: reactJsxRuntimeCoreReexport.jsx(rtlPlayIconComponent.RtlPlayIcon, {
      className: v["icon-play"]
    })
  });
  let h = e => reactJsxRuntimeCoreReexport.jsx("div", {
    className: o(v["play-button-icon-wrapper"], e),
    children: reactJsxRuntimeCoreReexport.jsx(rtlColumnsIcon.ColumnsIcon, {
      className: v["icon-stop"]
    })
  });
  let g = e => reactJsxRuntimeCoreReexport.jsx("div", {
    className: o(v["play-button-icon-wrapper"], e),
    children: reactJsxRuntimeCoreReexport.jsx(p, {
      className: v["icon-stop-fill"]
    })
  });
  let w = e => {
    let {
      status: t = m.Initial,
      progressPercent: r = 0,
      className: n,
      btnClassName: i,
      width: c = 32,
      playingIconType: u = "progress",
      mainColor: s = "#ffffff",
      orbitStroke: p,
      stroke: w,
      strokeWidth: b = 2,
      disabled: k = false,
      onClick: R
    } = e;
    let [A, x] = reactCoreLibraryReexport.useState(0);
    let j = reactCoreLibraryReexport.useRef(null);
    let T = t === m.Loading;
    let P = p || (T ? `${s}b3` : s);
    let C = w || (T ? `${s}80` : `${s}b3`);
    let E = {
      "--custom-play-button-width": `${c}px`,
      "--custom-play-button-mainColor": s,
      "--custom-play-button-stroke": P,
      "--custom-play-button-orbitStroke": C
    };
    let S = reactCoreLibraryReexport.useMemo(() => {
      let e = {
        type: "circle",
        width: c,
        orbitStroke: C,
        stroke: P,
        strokeWidth: b,
        showInfo: [m.Paused, m.Playing].includes(t)
      };
      switch (t) {
        case m.Loading:
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative",
            children: [reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
              ...e,
              className: v["icon-loading"],
              percent: 8
            }), h(o(i, "absolute top-0 left-0"))]
          });
        case m.Paused:
          return y(i);
        case m.Playing:
          if (u === "progress") {
            return reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
              ...e,
              percent: r,
              format: () => h(i)
            });
          } else {
            return g(i);
          }
        case m.Initial:
        default:
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: v["play-button-default"],
            children: reactJsxRuntimeCoreReexport.jsx(f, {
              style: {
                textAlign: "center",
                translate: -0.2
              }
            })
          });
      }
    }, [t, r, A]);
    let N = () => {
      if (j.current) {
        clearTimeout(j.current);
      }
    };
    let B = () => {
      N();
      j.current = setTimeout(() => {
        x(e => e > 100 ? e - 100 : e + 8);
        B();
      }, 200);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (t === m.Loading) {
        B();
        return;
      }
      x(0);
      N();
      return () => {
        N();
      };
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(v["play-button-container"], n),
      style: E,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(v["play-button-wrapper"], v[t]),
        "data-type": k ? "1" : "0",
        onClick: () => {
          if (!k && R != null) {
            R();
          }
        },
        children: S
      })
    });
  };
  require.d(exports, {
    PlayButton: function () {
      return w;
    },
    PlaybackStatus: function () {
      return m;
    }
  });
}