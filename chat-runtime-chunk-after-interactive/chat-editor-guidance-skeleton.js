// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'ChatGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 583782
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var rtlBackArrowIcon = require("rtl-back-arrow-icon") /*id: 176810*/;
  var chatEditorStyles = require("chat-editor-styles") /*id: 911723*/;
  var o = {
    "send-button": "send-button-IqFoMN",
    small: "small-MgSsit",
    icon: "icon-E_c9o3"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      small: t,
      className: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r(chatEditorStyles.editorStyles["input-content-container"], n),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(chatEditorStyles.editorStyles.container, "guidance-input-skeleton-container"),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: chatEditorStyles.editorStyles["editor-container"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: chatEditorStyles.editorStyles.editor
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: chatEditorStyles.editorStyles["bottom-wrapper"],
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: chatEditorStyles.editorStyles["left-tools-wrapper"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: chatEditorStyles.editorStyles["tools-placeholder"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: chatEditorStyles.editorStyles["right-tools-wrapper"],
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: r(o["send-button"], t && o.small),
                children: reactJsxRuntimeCoreReexport.jsx(rtlBackArrowIcon.rtlBackArrowIcon, {
                  className: o.icon
                })
              })
            })]
          })]
        })
      })
    });
  };
  require.d(exports, {
    ChatGuidanceInput: function () {
      return u;
    }
  });
}