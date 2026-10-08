// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'renderMessageText'
// - Renamed export 'R' to 'renderMessageTextWithAfterNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 602492
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var textLinkRendererComponent = require("text-link-renderer-component") /*id: 527379*/;
  var l = {
    link: "link-giAfFV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      text: t,
      className: n,
      linkDisabled: i,
      style: s
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(textLinkRendererComponent.TextLinkRenderer, {
        style: s,
        className: r("bg-s-color-bg-trans rounded-s-radius-s text-s-color-text-secondary s-font-base sm:text-15 max-w-450 px-16 py-9 w-fit min-w-0", n),
        linkClassName: r(l.link),
        "data-testid": "message_text_content",
        text: t,
        linkDisabled: i
      });
    } else {
      return null;
    }
  };
  let c = e => {
    let {
      text: t,
      className: n,
      linkDisabled: i,
      afterNode: s
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n,
        children: [reactJsxRuntimeCoreReexport.jsx(textLinkRendererComponent.TextLinkRenderer, {
          className: r("text-s-color-text-secondary s-font-base w-fit sm:text-15"),
          linkClassName: r(l.link),
          "data-testid": "message_text_content",
          text: t,
          linkDisabled: i
        }), s]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    renderMessageText: function () {
      return s;
    },
    renderMessageTextWithAfterNode: function () {
      return c;
    }
  });
}