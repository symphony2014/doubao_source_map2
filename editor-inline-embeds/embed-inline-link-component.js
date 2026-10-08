// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EmbedInlineLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 768824
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docEditorConstants = require("doc-editor-constants") /*id: 260128*/;
  var cjkAutoSpacingComponent = require("cjk-auto-spacing-component") /*id: 213046*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function d(e) {
    let i = e.text || docEditorConstants.defaultWikiTitle;
    reactCoreLibraryReexport.useEffect(() => {
      Promise.resolve().then(() => {
        var i;
        if ((i = e.renderFinishCb) !== null && i !== undefined) {
          i.call(e);
        }
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("span", {
      onTouchStart: e.onTouchStart,
      onTouchEnd: e.onTouchEnd,
      onTouchMove: e.onTouchMove,
      onMouseDown: e.onMouseDown,
      onMouseEnter: e.onMouseEnter,
      onMouseLeave: e.onMouseLeave,
      onClick: e.onClick,
      className: o("embed-inline-link", e.className, {
        failed: !!e.failHint
      }),
      style: e.style,
      children: reactJsxRuntimeCoreReexport.jsxs("span", {
        children: [e.logo, reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "text embed-text-container",
          style: e.textStyle,
          children: [e.autoSpace ? reactJsxRuntimeCoreReexport.jsx(cjkAutoSpacingComponent.AutoSpacingText, {
            text: i
          }) : i, e.failHint ? reactJsxRuntimeCoreReexport.jsx("span", {
            className: "fail-hint",
            children: e.failHint
          }) : null]
        })]
      })
    });
  }
  require.d(exports, {
    EmbedInlineLink: function () {
      return d;
    }
  });
}