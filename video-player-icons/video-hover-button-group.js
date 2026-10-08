// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'containerClassName'
// - Renamed export 'Z' to 'VideoHoverGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 809223
         */
module.exports = function (module, exports, require) {
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var r = {
    "video-hover-button-group-container": "video-hover-button-group-container-mh06XY",
    "video-hover-button-group": "video-hover-button-group-q8qlu7",
    "button-group": "button-group-z4Z2SC",
    "action-button": "action-button-AGcLcz",
    icon: "icon-bytb8e"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = r["video-hover-button-group-container"];
  let a = e => {
    let {
      buttonList: t
    } = e;
    if (t.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: r["video-hover-button-group"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: r["button-group"],
          children: t.map((e, t) => {
            if (e.type === "icon") {
              let t = reactJsxRuntimeCoreReexport.jsx("div", {
                className: r["action-button"],
                onClick: e.onClick,
                children: reactJsxRuntimeCoreReexport.jsx(e.icon, {
                  className: r.icon
                })
              }, e.key);
              if (e.title) {
                return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                  content: e.title,
                  children: t
                }, e.key);
              } else {
                return t;
              }
            }
            if (e.type === "divider") {
              return reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
                layout: "vertical",
                margin: "5px"
              }, t);
            }
          })
        })
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    containerClassName: function () {
      return s;
    },
    VideoHoverGroup: function () {
      return a;
    }
  });
}