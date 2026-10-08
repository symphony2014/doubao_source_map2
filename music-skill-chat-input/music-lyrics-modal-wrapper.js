// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'MusicLyricsModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 84330
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      getPopupContainer: n,
      ...i
    } = e;
    let {
      getPopupContainer: r = n
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      ref: t,
      ...i,
      getPopupContainer: r
    });
  });
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var u = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M13.5 17a2 2 0 0 0-1.082.318L8.5 19.837V17h-5V4h17v13zm7 2h-7l-5.46 3.51a1 1 0 0 1-1.54-.842V19h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2m-13-9.61c0 1.066.66 1.889 1.71 1.889.391 0 .782-.066 1.023-.374h.075a2.63 2.63 0 0 1-1.664 1.431c-.344.094-.447.243-.447.468 0 .233.196.43.456.43.939 0 2.826-1.123 2.826-3.498 0-1.273-.818-2.236-2.027-2.236-1.115 0-1.952.776-1.952 1.89m5.02 0c0 1.066.66 1.889 1.711 1.889.39 0 .781-.066 1.023-.374h.075a2.63 2.63 0 0 1-1.665 1.431c-.335.094-.446.243-.446.468 0 .233.195.43.456.43.939 0 2.826-1.123 2.826-3.498 0-1.273-.818-2.236-2.027-2.236-1.116 0-1.952.776-1.952 1.89",
      clipRule: "evenodd"
    })
  }), {}));
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(c, {
      ref: t,
      className: o("lyric-modal-BqoBtK", n),
      title: reactJsxRuntimeCoreReexport.jsxs("span", {
        className: "flex items-center",
        children: [reactJsxRuntimeCoreReexport.jsx(u, {
          className: "text-22 p-3 mr-6"
        }), r("music_generate_lyrics")]
      }),
      ...i
    });
  });
  require.d(exports, {
    MusicLyricsModal: function () {
      return p;
    }
  });
}