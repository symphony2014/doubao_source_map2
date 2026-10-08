// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'ImageThinkingView'
// - Renamed export 'M' to 'loadThinkingData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 602617
         */
module.exports = function (module, exports, require) {
  let i;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var lazyLottiePlayerWrapper = require("lazy-lottie-player-wrapper") /*id: 364746*/;
  require("react-core-library-reexport") /*id: 634663*/;
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
      d: "M19.11 9.827c.26 0 .451-.192.488-.445.23-1.406.43-2.127.865-2.575.433-.447 1.131-.654 2.49-.89a.503.503 0 0 0 .446-.502.5.5 0 0 0-.447-.503c-1.358-.237-2.056-.445-2.49-.892-.433-.447-.634-1.168-.864-2.571-.037-.256-.227-.449-.488-.449-.257 0-.45.193-.49.447-.23 1.405-.432 2.126-.865 2.573s-1.13.655-2.486.892a.5.5 0 0 0-.451.503c0 .273.203.47.447.503 1.36.235 2.057.438 2.49.882.433.445.635 1.167.864 2.583.04.252.235.444.491.444M3.853 3.207h9.058v1.961H3.853v10.867l1.488-1.327a2.8 2.8 0 0 1 3.704-.037l1.011.867 3.428-2.886a2.8 2.8 0 0 1 3.621-.001l2.957 2.483v-3.346h1.907v7.601c0 1.084-.854 1.962-1.907 1.962H3.852c-1.052 0-1.906-.878-1.906-1.962V5.17c0-1.084.854-1.962 1.907-1.962m6.674 5.835c0 1.084-.854 1.962-1.907 1.962s-1.907-.878-1.907-1.962c0-1.083.854-1.961 1.907-1.961s1.907.878 1.907 1.961",
      clipRule: "evenodd"
    })
  }), {}));
  var v = {
    "image-thinking-wrapper": "image-thinking-wrapper-eCaOKQ",
    "image-thinking-wrapper-inner": "image-thinking-wrapper-inner-l8DztA",
    "thining-wrapper": "thining-wrapper-S3ZpVS",
    "video-wrapper": "video-wrapper-yW3MWX",
    "queue-wrapper": "queue-wrapper-JH3h79",
    "center-icon": "center-icon-dSbbE3"
  };
  let m = function (e = "light") {
    if (e === "dark") {
      return require.e("lottie-animation-data") /*id: 93885*/.then(require.t.bind(require, 296410, 19));
    } else {
      return require.e("flow-8-anim-56474") /*id: 56474*/.then(require.t.bind(require, 115551, 19));
    }
  };
  let g = e => {
    let {
      className: t,
      width: n,
      height: a,
      showCenterIcon: u = false,
      lottieClassName: g,
      isQueue: _ = false,
      extraLottieStyle: f,
      mode: b = "light"
    } = e;
    let y = isNumberUtil.isNumber(n) && isNumberUtil.isNumber(a) && {
      width: "100%",
      height: 0,
      paddingBottom: `min(${a / n * 100}%, ${a}px)`,
      maxWidth: n
    };
    let k = usePreviousHook.usePrevious(b);
    let {
      data: w
    } = useRequestHook.useRequest(async () => {
      if (!i || k !== b) {
        let e = await m(b);
        i = safeJsonUtils.safeParse(JSON.stringify(e), {});
      }
      return i;
    }, {
      refreshDeps: [b]
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(v["image-thinking-wrapper"], t),
      style: {
        ...y
      },
      "data-testid": "message_thinking",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: v["image-thinking-wrapper-inner"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: v["thining-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx(lazyLottiePlayerWrapper.LazyLottiePlayer, {
            className: l(g, v["video-wrapper"]),
            animationData: w,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            },
            style: f
          })
        })
      }), _ && reactJsxRuntimeCoreReexport.jsx("div", {
        className: v["queue-wrapper"],
        children: "排队中。。。。"
      }), u && reactJsxRuntimeCoreReexport.jsx(p, {
        className: v["center-icon"]
      })]
    });
  };
  require.d(exports, {
    ImageThinkingView: function () {
      return g;
    },
    loadThinkingData: function () {
      return m;
    }
  });
}