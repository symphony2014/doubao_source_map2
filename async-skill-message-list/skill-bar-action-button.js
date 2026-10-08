// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'SkillBarAction'
// - Renamed export 'c' to 'SkillBarButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 956345
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var skillBarIconComponent = require("skill-bar-icon-component") /*id: 278022*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      children: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      type: "ai-primary",
      icon: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {
        className: "icon-reoyxr"
      }),
      ...n,
      children: t
    });
  };
  let d = e => {
    let {
      isShow: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(s, {
      className: r("ai-btn-qHfdwn", {
        "show-yy2Xdh": t
      }),
      ...n
    });
  };
  require.d(exports, {
    SkillBarAction: function () {
      return d;
    },
    SkillBarButton: function () {
      return s;
    }
  });
}