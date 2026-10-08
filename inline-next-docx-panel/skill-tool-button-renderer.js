// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kb' to 'SkillToolButtonList'
// - Renamed export 'mD' to 'ToolButtonList'
// - Renamed export 'xv' to 'SkillToolButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 812051
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatToolButtonOverflowList = require("chat-tool-button-overflow-list") /*id: 131745*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var d = {
    "tool-button": "tool-button-G0uH2M",
    small: "small-P_cvE6"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      className: t,
      list: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s("flex items-center", t),
      children: n.map(e => reactJsxRuntimeCoreReexport.jsx(m, {
        identifier: e,
        ...i
      }, e.toString()))
    });
  };
  let h = e => {
    let {
      plugin: n,
      onUpdateValue: i,
      type: a,
      className: l,
      ...u
    } = e;
    let f = u.skill?.skill_type;
    let {
      guidanceGenericInputMode: h,
      guidanceSkillActiveInputMode: m
    } = chatLauncherConfigHooks.useLauncherConfig();
    if (n == null ? undefined : n.Content) {
      return reactJsxRuntimeCoreReexport.jsx(n.Content, {
        ...u,
        isToolButtonSmall: !(f ? m : h) && u.isToolButtonSmall,
        className: s(l, d["tool-button"], u.isToolButtonSmall && d.small),
        onUpdateValue: e => {
          if (a === "textarea" && isStringTypeCheck.isString(e)) {
            if (i != null) {
              i(e);
            }
          } else if (a === "editor" && isObjectOrFunction_1_1.isObjectOrFunction(e)) {
            if (i != null) {
              i(e);
            }
          }
        }
      });
    } else {
      return null;
    }
  };
  let m = e => {
    let {
      identifier: t,
      ...n
    } = e;
    let {
      plugin: i,
      loading: r
    } = chatPluginIocManager.inputToolBtnHook(t);
    if (!i || r) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        plugin: i,
        ...n
      });
    }
  };
  let v = e => {
    let {
      list: t,
      toolButtonProps: n,
      ...r
    } = e;
    let {
      pluginList: o,
      loading: a
    } = chatPluginIocManager.inputToolBtnListHook(t);
    let s = reactCoreLibraryReexport.useMemo(() => {
      if (a) {
        return [];
      }
      let e = (e, t, i, r) => r ? reactJsxRuntimeCoreReexport.jsx(h, {
        identifier: e,
        plugin: o[t],
        ...n,
        ...i,
        isToolButtonSmall: i.small
      }, t) : null;
      return t.map((t, n) => i => e(t, n, i, o[n]));
    }, [t, a, o, n]);
    if (a) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(chatToolButtonOverflowList.ToolButtonOverflowList, {
        ...r,
        scene: n.scene,
        list: s
      });
    }
  };
  require.d(exports, {
    SkillToolButtonList: function () {
      return v;
    },
    ToolButtonList: function () {
      return f;
    },
    SkillToolButton: function () {
      return m;
    }
  });
}