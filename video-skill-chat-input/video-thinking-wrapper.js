// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'VideoThinkingView'
// - Renamed export 'X' to 'loadAnimationData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 476422
         */
module.exports = function (module, exports, require) {
  let o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var lazyLottiePlayerWrapper = require("lazy-lottie-player-wrapper") /*id: 364746*/;
  var documentPlayRtlIcon = require("document-play-rtl-icon") /*id: 795121*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = async () => {
    o ||= require.e("flow-8-anim-26627") /*id: 26627*/.then(require.t.bind(require, 612960, 19)).catch(() => {
      o = undefined;
      return {};
    });
    return o;
  };
  let p = e => {
    let {
      width: t = 480,
      height: n = 480,
      className: o,
      fillMode: r
    } = e;
    let [p, h] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      u().then(e => {
        h(safeJsonUtils.safeParse(JSON.stringify(e), {}));
      });
    }, []);
    let m = t / n;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l("video-thinking-wrapper-BykHyE", o),
      style: {
        width: r === "full" ? "100%" : `${m > 1 ? 50 : 25}%`
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "video-thinking-wrapper-inner-R6FeoC",
        style: {
          paddingBottom: `${1 / m * 100}%`
        },
        children: reactJsxRuntimeCoreReexport.jsx(lazyLottiePlayerWrapper.LazyLottiePlayer, {
          className: "video-wrapper-TOvzU_",
          style: {
            transform: `scale(${Math.max(1 / m, m)})`
          },
          animationData: p
        })
      }), reactJsxRuntimeCoreReexport.jsx(documentPlayRtlIcon.DocumentPlayRtlIcon, {
        className: "center-icon-UtYMSP"
      })]
    });
  };
  require.d(exports, {
    VideoThinkingView: function () {
      return p;
    },
    loadAnimationData: function () {
      return u;
    }
  });
}