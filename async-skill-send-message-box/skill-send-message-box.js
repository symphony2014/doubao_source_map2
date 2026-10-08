// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'SkillSendMessageButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 607110
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var s = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M13.5 18.5h7a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2h-17a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v2.668a1 1 0 0 0 1.54.841zm-4.444-7.211c-1.11 0-1.806-.869-1.806-1.995 0-1.174.883-1.994 2.061-1.994 1.276 0 2.14 1.017 2.14 2.36 0 2.508-1.993 3.692-2.984 3.692a.465.465 0 0 1-.48-.454c0-.237.107-.395.47-.493a2.77 2.77 0 0 0 1.757-1.511h-.079c-.255.326-.667.395-1.08.395m5.3 0c-1.11 0-1.806-.869-1.806-1.995 0-1.174.883-1.994 2.06-1.994 1.276 0 2.14 1.017 2.14 2.36 0 2.508-1.992 3.692-2.983 3.692a.465.465 0 0 1-.481-.454c0-.237.117-.395.47-.493a2.77 2.77 0 0 0 1.758-1.511h-.08c-.254.326-.666.395-1.079.395",
      clipRule: "evenodd"
    })
  }), {}));
  let c = e => {
    let {
      className: t = "",
      onClick: n,
      lyric: i = "",
      placeholder: l = ""
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r("lyrics-container-NYRQVc", t),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center cursor-pointer relative",
        onClick: n,
        children: [reactJsxRuntimeCoreReexport.jsx(s, {
          className: "text-30 p-3 align-bottom\tmr-8"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "grow leading-16",
          children: [reactJsxRuntimeCoreReexport.jsx("p", {
            className: "text-12 font-semibold",
            children: c("music_generate_lyrics")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: r("lyrics-content-eBPk8W", "leading-20 text-11 cursor-pointer"),
            children: (i == null ? undefined : i.replace("\n", " ")) || l
          })]
        })]
      })
    });
  };
  require.d(exports, {
    SkillSendMessageButton: function () {
      return c;
    }
  });
}