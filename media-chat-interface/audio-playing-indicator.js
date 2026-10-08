// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useAudioBarSize'
// - Renamed export 'O' to 'AudioPlaying'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 990290
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = (e, t) => {
    let [n, o] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      try {
        let n = t;
        if (!n && e) {
          n = parseInt(getComputedStyle(e).fontSize);
        }
        if (isNumberUtil.isNumber(n)) {
          let e = 2 / 22 * n;
          let t = Math.trunc(e);
          let i = Math.floor((e - t) / 0.25);
          o(t + (i % 2 == 0 ? i : i + 1) * 0.25);
        }
      } catch (e) {}
    }, [t, e]);
    return n;
  };
  let c = e => {
    let {
      size: t,
      className: n,
      onClick: r
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    let c = l(o.current, t);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "audio-playing",
      ref: o,
      className: a("audio-playing-nK4eia", n),
      style: {
        width: t,
        height: t
      },
      onClick: r,
      children: Array.from({
        length: 4
      }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("span", {
        style: {
          width: c
        }
      }, t))
    });
  };
  require.d(exports, {
    useAudioBarSize: function () {
      return l;
    },
    AudioPlaying: function () {
      return c;
    }
  });
}