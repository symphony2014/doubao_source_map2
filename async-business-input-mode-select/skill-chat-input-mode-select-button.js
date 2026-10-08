// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'renderSkillChatInputModeSelectButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 688578
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var svgArrowIconComponent_1 = require("svg-arrow-icon-component_1") /*id: 760619*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      icon: t,
      title: n,
      highLight: i,
      disabled: d
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
      leadingIcon: t,
      active: !d && i,
      className: r(d ? "!text-dbx-text-disable" : "", "pr-5"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center",
        children: [n, reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent_1.ArrowIcon, {
          className: r("size-12 rotate-0", d ? "text-dbx-text-disable" : i ? "text-dbx-text-highlight-secondary " : "text-dbx-text-tertiary")
        })]
      })
    });
  };
  require.d(exports, {
    renderSkillChatInputModeSelectButton: function () {
      return d;
    }
  });
}