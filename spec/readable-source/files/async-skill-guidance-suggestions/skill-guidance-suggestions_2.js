// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'GuidanceSuggestions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 671128
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var rtlSvgIcon = require("rtl-svg-icon") /*id: 197635*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var skillGuidanceLogger = require("skill-guidance-logger") /*id: 492448*/;
  var asyncSkillGuidanceStyles = require("async-skill-guidance-styles") /*id: 849121*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      className: t,
      items: i,
      moreText: l,
      itemTestId: v = "guidance-suggestions-carousel-item",
      reportParams: f,
      onShow: g,
      onClick: h,
      isShowMore: y = true,
      onShowMore: k,
      onClickMore: w,
      renderBottomLeft: b
    } = e;
    let x = reactCoreLibraryReexport.useRef(null);
    let S = useElementSizeHook_2.useElementSize(x);
    let C = S && S.width < 600;
    let P = reactUseChangedRef.useChangedRef(i, deepEqualUtil_1.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      P.forEach((e, t) => {
        if (g != null) {
          g(e, t);
        }
      });
    }, [P]);
    reactCoreLibraryReexport.useEffect(() => {
      if (k != null) {
        k();
      }
    }, []);
    skillGuidanceLogger.useGuidanceShow({
      loading: P.length === 0,
      testId: v,
      reportParams: f
    });
    let j = () => i.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": v,
      className: a("relative bg-s-color-bg-base transition-all rounded-10 cursor-pointer flex flex-col", asyncSkillGuidanceStyles.guidanceStyles["box-shadow"], C && "w-172 h-full"),
      onClick: () => {
        skillGuidanceLogger.logGuidanceClick("send_message", f);
        if (h != null) {
          h(e, t);
        }
      },
      children: [e.header && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full",
        children: e.header
      }), e.center && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full flex-1",
        children: e.center
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("px-4 pb-4", C ? "h-46" : "h-54"),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a("h-full px-6 flex items-center gap-4 bg-s-color-bg-body text-s-color-text-secondary rounded-s-radius-xxss", C ? "s-font-xxs py-12" : "s-font-xs py-16"),
          children: [reactJsxRuntimeCoreReexport.jsx(rtlSvgIcon.RtlSvgIcon, {
            className: "p-2 text-14 text-s-color-text-disable"
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            className: "line-clamp-2",
            children: e.title
          })]
        })
      })]
    }, t));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(asyncSkillGuidanceStyles.guidanceStyles.container, t),
      ref: x,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          mb-2 flex w-full items-center justify-between gap-2 transition-colors
        `,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "min-w-0 flex-1",
          children: b
        }), y && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
              flex shrink-0 cursor-pointer items-center rounded-s-radius-xxss
              px-8 py-5 text-s-color-text-tertiary s-font-xs-strong
              hover:bg-s-color-bg-trans
            `,
          onClick: () => {
            skillGuidanceLogger.logGuidanceClick("navigate", f);
            if (w != null) {
              w();
            }
          },
          children: [l, reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
            className: "p-2 text-12"
          })]
        })]
      }), C ? reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        carouselRowClassName: "gap-12",
        children: j()
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mb-12 grid grid-cols-3 gap-12 overflow-visible",
        children: j()
      })]
    });
  };
  require.d(exports, {
    GuidanceSuggestions: function () {
      return v;
    }
  });
}