// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'TokenReadRatio'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 61355.6db06134.js
         * chunkId: 61355
         * moduleId: 681168
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var stringUtilities = require("string-utilities") /*id: 612303*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = t => {
    let {
      charCount: e,
      readRatio: n,
      zh: r = true,
      i18nConfig: c,
      Tooltip: u = reactTooltipComponent.TooltipComponent,
      tooltipProps: h,
      className: d
    } = t;
    let p = stringUtilities.createFormatter(c);
    let g = () => e || n ? reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o("inline", d),
      children: [isNumberUtil.isNumber(e) && e > 0 && reactJsxRuntimeCoreReexport.jsx("p", {
        className: "p-0 m-0 inline",
        children: e < 1000 ? p("label_token_count_smallnumber", {
          sprintf: [e.toString()]
        }) : p("label_token_count_largenumber", {
          sprintf: [(r ? Math.round(e / 1000) / 10 : Math.round(e / 1000)).toString()]
        })
      }), isNumberUtil.isNumber(n) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("h-3 w-3 rounded-full inline-block align-middle ml-4", n <= 0 && "border-[0.5px] border-solid border-s-color-text-intact-tertiary", n >= 100 && "bg-[var(--s-color-system-success,#2FBC52)]"),
        style: n > 0 && n < 100 ? {
          background: "var(--s-color-glow-grey"
        } : {}
      })]
    }) : null;
    if (!isNumberUtil.isNumber(n)) {
      return g();
    }
    {
      let t = n <= 0 ? p("skill_copliotreading_not_read") : n < 100 ? (h == null ? undefined : h.showDetail) ? p("skill_copliotreading_read_percentage", {
        sprintf: [`${n}%`]
      }) : p("skill_copliotreading_partial_read") : p("skill_copliotreading_read");
      return reactJsxRuntimeCoreReexport.jsx(u, {
        content: t,
        className: "s-font-xxs",
        showArrow: true,
        ...h,
        children: g()
      });
    }
  };
  require.d(exports, {
    TokenReadRatio: function () {
      return c;
    }
  });
}