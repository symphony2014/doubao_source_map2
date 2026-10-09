// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'SpeedSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-audio-player.7a93b024.js
         * chunkId: 43982
         * moduleId: 864408
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var a = {
    "speed-wrapper": "speed-wrapper-EBb_Wu",
    "speed-list-item": "speed-list-item-eLKdy2",
    label: "label-i4v0mY",
    selected: "selected-Hsz9OM",
    "speed-list-item-active": "speed-list-item-active-BzqwnZ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = [{
    value: 0.75,
    label: "0.75x"
  }, {
    value: 1,
    label: "1x"
  }, {
    value: 1.25,
    label: "1.25x"
  }, {
    value: 1.5,
    label: "1.5x"
  }, {
    value: 2,
    label: "2x"
  }, {
    value: 3,
    label: "3x"
  }, {
    value: 5,
    label: "5x"
  }];
  let l = e => {
    let {
      currentSpeed: t,
      onSpeedChange: n,
      speedList: r = u,
      showSelect: l = false,
      listItemClass: s = "",
      showActiveBackground: f = true
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a["speed-wrapper"],
      onClick: e => e.nativeEvent.stopPropagation(),
      children: r.map(e => {
        let {
          label: r,
          value: u
        } = e;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: o([a["speed-list-item"], f && u === t ? a["speed-list-item-active"] : "", s]),
          onClick: () => n(u),
          children: l ? reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o("flex items-center justify-between", {
              [a.selected]: u === t
            }),
            children: [r, u === t && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {})]
          }) : reactJsxRuntimeCoreReexport.jsx("span", {
            className: a.label,
            children: r
          })
        });
      })
    });
  };
  require.d(exports, {
    SpeedSelector: function () {
      return l;
    }
  });
}