// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'PlayIconWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 277279
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var playOutlinedIcon = require("play-outlined-icon") /*id: 525533*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      className: t,
      gap: n = 6,
      size: i = 16,
      zIndex: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r("play-icon-wrapper-wkMy04", t),
      style: {
        "--video-conner-tag-gap": n && `${n}px`,
        "--video-conner-tag-size": i && `${i}px`,
        zIndex: l
      },
      children: reactJsxRuntimeCoreReexport.jsx(playOutlinedIcon.PlayOutlinedIcon, {
        className: "play-icon-gWzeeV"
      })
    });
  };
  require.d(exports, {
    PlayIconWrapper: function () {
      return l;
    }
  });
}