// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'AudioLoadingIndicator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 957107
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var audioPlayingIndicator = require("audio-playing-indicator") /*id: 990290*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      size: t
    } = e;
    let n = reactCoreLibraryReexport.useRef(null);
    let a = audioPlayingIndicator.useAudioBarSize(n.current, t);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "audio-loading",
      ref: n,
      className: "audio-loading-uSAr2E",
      style: {
        width: t,
        height: t
      },
      children: Array.from({
        length: 4
      }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("span", {
        style: {
          width: a
        }
      }, t))
    });
  };
  require.d(exports, {
    AudioLoadingIndicator: function () {
      return a;
    }
  });
}