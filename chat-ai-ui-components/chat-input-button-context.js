// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Tc' to 'ChatInputProvider'
// - Renamed export 'ec' to 'ChatInputContext'
// - Renamed export 'be' to 'useChatInput'
// - Renamed export 'Gd' to 'ChatInputButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 414026
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var o = {
    button: "button-EWcT9p",
    overflow: "overflow-KctrGX",
    active: "active-CWkcgg",
    small: "small-YzEdsk"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var asyncSkillChatContext = require("async-skill-chat-context") /*id: 844074*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      contentClassName: i,
      renderIcon: a,
      title: d,
      small: u,
      isOverflow: c,
      active: _,
      renderExtra: p,
      buttonProps: f,
      onMouseUp: m,
      onMouseEnter: h,
      ...g
    } = e;
    let x = a == null ? undefined : a({
      className: u ? "!text-14 p-2" : "!text-16"
    });
    let v = _ && !(f == null ? undefined : f.disabled);
    return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      ref: t,
      "data-checked": v,
      ...g,
      type: c ? "quartary" : "tertiary",
      icon: x,
      size: u ? "small" : "medium",
      onMouseUp: m,
      onMouseEnter: h,
      ...f,
      className: r(n, o.button, c && o.overflow, v && o.active, u && o.small, f == null ? undefined : f.className),
      children: (d || p) && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r("flex items-center", i, c && !u && "ml-8"),
        children: [d, p == null ? undefined : p()]
      })
    });
  });
  require.d(exports, {
    ChatInputProvider: function () {
      return asyncSkillChatContext.ChatInputProvider;
    },
    ChatInputContext: function () {
      return asyncSkillChatContext.ChatInputContext;
    },
    useChatInput: function () {
      return asyncSkillChatContext.useChatInput;
    },
    ChatInputButton: function () {
      return u;
    }
  });
}