// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'SkillGuidanceList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 213126
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var rtlSvgIcon = require("rtl-svg-icon") /*id: 197635*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var skillGuidanceLogger = require("skill-guidance-logger") /*id: 492448*/;
  var asyncSkillGuidanceStyles = require("async-skill-guidance-styles") /*id: 849121*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      className: t,
      items: i,
      moreText: o,
      itemTestId: m = "guidance-suggestions-carousel-item",
      reportParams: g,
      onShow: v,
      onClick: _,
      isShowMore: w = true,
      onShowMore: S,
      onClickMore: b,
      renderBottomLeft: R
    } = e;
    let y = reactCoreLibraryReexport.useRef(null);
    let T = useElementSizeHook_2.useElementSize(y);
    let k = T && T.width < 600;
    let E = reactUseChangedRef.useChangedRef(i, deepEqualUtil_1.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      E.forEach((e, t) => {
        if (v != null) {
          v(e, t);
        }
      });
    }, [E]);
    reactCoreLibraryReexport.useEffect(() => {
      if (S != null) {
        S();
      }
    }, []);
    skillGuidanceLogger.useGuidanceShow({
      loading: E.length === 0,
      testId: m,
      reportParams: g
    });
    let P = () => i.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": m,
      className: s("relative bg-s-color-bg-base transition-all rounded-10 cursor-pointer flex flex-col", asyncSkillGuidanceStyles.guidanceStyles["box-shadow"], k && "w-172 h-full"),
      onClick: () => {
        skillGuidanceLogger.logGuidanceClick("send_message", g);
        if (_ != null) {
          _(e, t);
        }
      },
      children: [e.header && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full",
        children: e.header
      }), e.center && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-1 w-full",
        children: e.center
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("px-4 pb-4", k ? "h-46" : "h-54"),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s("h-full px-6 flex items-center gap-4 bg-s-color-bg-body text-s-color-text-secondary rounded-s-radius-xxss", k ? "s-font-xxs py-12" : "s-font-xs py-16"),
          children: [reactJsxRuntimeCoreReexport.jsx(rtlSvgIcon.RtlSvgIcon, {
            className: "text-s-color-text-disable text-14 p-2"
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            className: "line-clamp-2",
            children: e.title
          })]
        })
      })]
    }, t));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(asyncSkillGuidanceStyles.guidanceStyles.container, t),
      ref: y,
      children: [k ? reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        carouselRowClassName: "gap-12",
        children: P()
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "grid grid-cols-3 gap-12 overflow-visible",
        children: P()
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: " w-fit flex items-center  gap-2   mt-12   transition-colors  justify-between w-full",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex-1 min-w-0",
          children: R
        }), w && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center hover:bg-s-color-bg-trans text-s-color-text-tertiary px-8 py-5 cursor-pointer rounded-s-radius-xxss  s-font-xs-strong shrink-0",
          onClick: () => {
            skillGuidanceLogger.logGuidanceClick("navigate", g);
            if (b != null) {
              b();
            }
          },
          children: [o, reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
            className: "text-12 p-2"
          })]
        })]
      })]
    });
  };
  require.d(exports, {
    SkillGuidanceList: function () {
      return m;
    }
  });
}