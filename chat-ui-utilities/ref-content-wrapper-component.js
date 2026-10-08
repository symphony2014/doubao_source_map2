// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'RefContentWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14473.5ec9d82c.js
         * chunkId: 14473
         * moduleId: 15351
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var overflowTooltipComponent = require("overflow-tooltip-component") /*id: 969628*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = t => {
    let {
      text: e,
      icon: n,
      className: i,
      refIconClassName: a,
      allowMultiLine: u,
      onClick: c,
      onClickClassName: d
    } = t;
    let h = responsiveScreenHooks.useIsNarrowScreen();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "ref-content-wrapper",
      className: r("flex items-center py-4 text-dbx-text-secondary rounded-10 !max-w-[var(--self-message-box-max-width,450px)]", c && (d ?? "hover:bg-s-color-bg-content-base active:bg-s-color-bg-base cursor-pointer"), i),
      onClick: c,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: r("flex items-center mr-2 py-4 shrink-0 self-stretch", a),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "my-4 h-full w-[3px] rounded-[10px] bg-dbx-line-10"
        })
      }), n, reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "ref-content",
        className: r("text-VniI7Z", "ml-4 mr-8 s-font-small-strong whitespace-normal !font-[450]", u ? "line-clamp-3" : "truncate"),
        children: reactJsxRuntimeCoreReexport.jsx(overflowTooltipComponent.overflowTooltip, {
          textClassName: r("hyphens-auto", u ? "line-clamp-3" : "truncate"),
          lang: "en",
          text: e,
          position: h ? "bottom" : "leftTop"
        })
      })]
    });
  };
  require.d(exports, {
    RefContentWrapper: function () {
      return a;
    }
  });
}