// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'RightLabelButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 643385
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var a = {
    "right-label-btn-wrapper": "right-label-btn-wrapper-OEgBHi",
    "btn-label": "btn-label-X6Kgsw",
    disabled: "disabled-j6v8yE",
    hover: "hover-yJEQIV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      icon: t,
      text: i,
      showLabel: n = true,
      disabled: l,
      onClick: s,
      ...c
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ...c,
      className: r(a["right-label-btn-wrapper"], {
        [a.hover]: s,
        [a.disabled]: l
      }),
      onClick: () => {
        if (!l) {
          if (s != null) {
            s();
          }
        }
      },
      children: [t, n && i && reactJsxRuntimeCoreReexport.jsx("span", {
        className: a["btn-label"],
        children: i
      })]
    });
  };
  require.d(exports, {
    RightLabelButton: function () {
      return l;
    }
  });
}